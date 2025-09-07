import JZZ from "jzz";
import { Drums, Instruments } from "./instruments";
import { DrumName, InstrumentName, Score, Track } from "./midi.types";

const openMidi = async () => {
  return await JZZ();
};

const openMidiOut = async () => {
  const midi = await JZZ();

  return midi.openMidiOut();
};

type MidiOut = Awaited<ReturnType<typeof openMidiOut>>;

class Midi {
  private midi: Awaited<ReturnType<typeof openMidi>> | null = null;
  private port: MidiOut | null = null;
  private bpm: number = 120; // Default tempo

  async init() {
    this.midi = await JZZ();
  }

  private setBpm(bpm: number) {
    this.bpm = bpm;
  }

  // Convert note duration to milliseconds based on BPM
  // duration: note value (1 = whole, 0.5 = half, 0.25 = quarter, etc.)
  private beatsToMs(beats: number): number {
    return (60000 / this.bpm) * beats;
  }

  // Convert string representation of note duration to beat value
  // Examples: "1/4" -> 1, "1/2" -> 2, "1" -> 4, "1/8" -> 0.5, "1/4." -> 1.5
  private parseNoteDuration(noteString: string): number {
    // Handle common string representations
    const commonDurations: { [key: string]: number } = {
      "1": 4,
      "1/2": 2,
      "1/4": 1,
      "1/8": 0.5,
      "1/16": 0.25,
      "1/32": 0.125,
      "2": 8,
      "4": 16,
      // Dotted notes
      "1.": 6,
      "1/2.": 3,
      "1/4.": 1.5,
      "1/8.": 0.75,
      "1/16.": 0.375,
      "1/32.": 0.1875,
    };

    // Check if it's a common duration first
    if (noteString in commonDurations) {
      return commonDurations[noteString];
    }

    // Parse fraction format (e.g., "1/4", "3/8", "2/3", "1/4.")
    const fractionMatch = noteString.match(
      /^(\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)(\.?)$/
    );
    if (fractionMatch) {
      const numerator = parseFloat(fractionMatch[1]);
      const denominator = parseFloat(fractionMatch[2]);
      const isDotted = fractionMatch[3] === ".";

      if (denominator === 0) {
        throw new Error(
          `Invalid note duration: ${noteString} (division by zero)`
        );
      }
      // For note durations, convert to beats: 1/4 = 1 beat, 1/2 = 2 beats, etc.
      // Formula: (4 * numerator) / denominator
      let beats = (4 * numerator) / denominator;

      // If dotted, add half the value (multiply by 1.5)
      if (isDotted) {
        beats *= 1.5;
      }

      return beats;
    }

    // Try to parse as a decimal number
    const decimalValue = parseFloat(noteString);
    if (!isNaN(decimalValue)) {
      return decimalValue;
    }

    throw new Error(
      `Invalid note duration format: ${noteString}. Expected formats: "1/4".`
    );
  }

  private setInstrument(channel: number, instrumentName: InstrumentName) {
    if (!this.port) {
      throw new Error("MIDI port not initialized");
    }

    const programNumber = Instruments[instrumentName];
    this.port.program(channel, programNumber);
  }

  private async playNote(
    note: string[] | number[],
    duration: number,
    channel: number = 0,
    instrumentName?: InstrumentName
  ) {
    if (!this.port) {
      throw new Error("MIDI port not initialized");
    }

    // Handle rest notes
    if (note.length === 0) {
      await this.port.wait(duration);
      return;
    }

    if (instrumentName) {
      this.setInstrument(channel, instrumentName);
    }

    await Promise.all(
      note.map((n) => {
        return this.port?.noteOn(channel, n, 127);
      })
    );
    await this.port.wait(duration);
    await Promise.all(
      note.map((n) => {
        return this.port?.noteOff(channel, n);
      })
    );
  }

  private async playTrack(track: Track) {
    let actualChannel: number | null;

    if (track.channel) {
      actualChannel = track.channel;
    } else if (track.instrumentName === "drums") {
      actualChannel = 9;
    } else {
      actualChannel = 0;
    }

    const actualInstrumentName: InstrumentName | undefined =
      track.instrumentName === "drums" ? undefined : track.instrumentName;

    for (const { note, drums, noteDuration } of track.notes) {
      let actualNote =
        track.instrumentName === "drums"
          ? (drums?.map((d) => Drums[d as DrumName]) as unknown as number[])
          : (note as string[]);

      await this.playNote(
        actualNote,
        this.beatsToMs(this.parseNoteDuration(noteDuration)),
        actualChannel,
        actualInstrumentName
      );
    }
  }

  private async openMidiOut(midiOutputName?: string) {
    if (!this.midi) {
      throw new Error("MIDI engine not initialized");
    }

    if (!midiOutputName) {
      this.port = await this.midi.openMidiOut();
    } else {
      const midiOutput = (await this.listOutputs()).find(
        (output: { name: string }) => output.name === midiOutputName
      );

      if (midiOutput) {
        this.port = await this.midi.openMidiOut(midiOutput.name);
      } else {
        this.port = await this.midi.openMidiOut();
      }
    }
  }

  public async listOutputs() {
    if (!this.midi) {
      throw new Error("MIDI engine not initialized");
    }

    return this.midi.info().outputs;
  }

  public async playScore(score: Score) {
    await this.openMidiOut(score.midiOuputName);

    this.setBpm(score.bpm);

    return Promise.all(score.tracks.map((track) => this.playTrack(track)));
  }
}

export { Midi };
