import JZZ from "jzz";

interface Score {
  tracks: Track[];
  bpm: number;
}

interface Track {
  notes: {
    note?: string[] | null;
    drums?: string[] | null;
    noteDuration: string;
  }[];
  channel?: number;
  instrumentName: InstrumentName | "drums";
}

// General MIDI instrument map (Program Change values 0-127)
const INSTRUMENTS = {
  // Piano
  acoustic_grand_piano: 0,
  bright_acoustic_piano: 1,
  electric_grand_piano: 2,
  honky_tonk_piano: 3,
  electric_piano_1: 4,
  electric_piano_2: 5,
  harpsichord: 6,
  clavinet: 7,

  // Chromatic Percussion
  celesta: 8,
  glockenspiel: 9,
  music_box: 10,
  vibraphone: 11,
  marimba: 12,
  xylophone: 13,
  tubular_bells: 14,
  dulcimer: 15,

  // Organ
  drawbar_organ: 16,
  percussive_organ: 17,
  rock_organ: 18,
  church_organ: 19,
  reed_organ: 20,
  accordion: 21,
  harmonica: 22,
  tango_accordion: 23,

  // Guitar
  acoustic_guitar_nylon: 24,
  acoustic_guitar_steel: 25,
  electric_guitar_jazz: 26,
  electric_guitar_clean: 27,
  electric_guitar_muted: 28,
  overdriven_guitar: 29,
  distortion_guitar: 30,
  guitar_harmonics: 31,

  // Bass
  acoustic_bass: 32,
  electric_bass_finger: 33,
  electric_bass_pick: 34,
  fretless_bass: 35,
  slap_bass_1: 36,
  slap_bass_2: 37,
  synth_bass_1: 38,
  synth_bass_2: 39,

  // Strings
  violin: 40,
  viola: 41,
  cello: 42,
  contrabass: 43,
  tremolo_strings: 44,
  pizzicato_strings: 45,
  orchestral_harp: 46,
  timpani: 47,

  // Ensemble
  string_ensemble_1: 48,
  string_ensemble_2: 49,
  synth_strings_1: 50,
  synth_strings_2: 51,
  choir_aahs: 52,
  voice_oohs: 53,
  synth_voice: 54,
  orchestra_hit: 55,

  // Brass
  trumpet: 56,
  trombone: 57,
  tuba: 58,
  muted_trumpet: 59,
  french_horn: 60,
  brass_section: 61,
  synth_brass_1: 62,
  synth_brass_2: 63,

  // Reed
  soprano_sax: 64,
  alto_sax: 65,
  tenor_sax: 66,
  baritone_sax: 67,
  oboe: 68,
  english_horn: 69,
  bassoon: 70,
  clarinet: 71,

  // Pipe
  piccolo: 72,
  flute: 73,
  recorder: 74,
  pan_flute: 75,
  blown_bottle: 76,
  shakuhachi: 77,
  whistle: 78,
  ocarina: 79,

  // Synth Lead
  lead_1_square: 80,
  lead_2_sawtooth: 81,
  lead_3_calliope: 82,
  lead_4_chiff: 83,
  lead_5_charang: 84,
  lead_6_voice: 85,
  lead_7_fifths: 86,
  lead_8_bass_lead: 87,

  // Synth Pad
  pad_1_new_age: 88,
  pad_2_warm: 89,
  pad_3_polysynth: 90,
  pad_4_choir: 91,
  pad_5_bowed: 92,
  pad_6_metallic: 93,
  pad_7_halo: 94,
  pad_8_sweep: 95,

  // Synth Effects
  fx_1_rain: 96,
  fx_2_soundtrack: 97,
  fx_3_crystal: 98,
  fx_4_atmosphere: 99,
  fx_5_brightness: 100,
  fx_6_goblins: 101,
  fx_7_echoes: 102,
  fx_8_sci_fi: 103,

  // Ethnic
  sitar: 104,
  banjo: 105,
  shamisen: 106,
  koto: 107,
  kalimba: 108,
  bag_pipe: 109,
  fiddle: 110,
  shanai: 111,

  // Percussive
  tinkle_bell: 112,
  agogo: 113,
  steel_drums: 114,
  woodblock: 115,
  taiko_drum: 116,
  melodic_tom: 117,
  synth_drum: 118,
  reverse_cymbal: 119,

  // Sound Effects
  guitar_fret_noise: 120,
  breath_noise: 121,
  seashore: 122,
  bird_tweet: 123,
  telephone_ring: 124,
  helicopter: 125,
  applause: 126,
  gunshot: 127,
} as const;

// General MIDI drum map (for channel 9/10)
const DRUMS = {
  acoustic_bass_drum: 35,
  bass_drum_1: 36,
  side_stick: 37,
  acoustic_snare: 38,
  hand_clap: 39,
  electric_snare: 40,
  low_floor_tom: 41,
  closed_hi_hat: 42,
  high_floor_tom: 43,
  pedal_hi_hat: 44,
  low_tom: 45,
  open_hi_hat: 46,
  low_mid_tom: 47,
  hi_mid_tom: 48,
  crash_cymbal_1: 49,
  high_tom: 50,
  ride_cymbal_1: 51,
  chinese_cymbal: 52,
  ride_bell: 53,
  tambourine: 54,
  splash_cymbal: 55,
  cowbell: 56,
  crash_cymbal_2: 57,
  vibraslap: 58,
  ride_cymbal_2: 59,
  hi_bongo: 60,
  low_bongo: 61,
  mute_hi_conga: 62,
  open_hi_conga: 63,
  low_conga: 64,
  high_timbale: 65,
  low_timbale: 66,
  high_agogo: 67,
  low_agogo: 68,
  cabasa: 69,
  maracas: 70,
  short_whistle: 71,
  long_whistle: 72,
  short_guiro: 73,
  long_guiro: 74,
  claves: 75,
  hi_wood_block: 76,
  low_wood_block: 77,
  mute_cuica: 78,
  open_cuica: 79,
  mute_triangle: 80,
  open_triangle: 81,
} as const;

type InstrumentName = keyof typeof INSTRUMENTS;
type DrumName = keyof typeof DRUMS;

const openMidiOut = async () => {
  const midi = await JZZ();

  // List available MIDI ports
  const outputs = await midi.info().outputs;
  console.log("Available MIDI outputs:");
  outputs.forEach((output: any, index: number) => {
    console.log(`  ${index}: ${output.name}`);
  });

  // Try to connect to FL Studio, GarageBand or use default
  let port;
  const flStudioPort = outputs.find(
    (p: any) =>
      p.name.includes("FL Studio") ||
      p.name.includes("loopMIDI") ||
      // p.name.includes("IAC") ||
      p.name.includes("Virtual")
  );

  if (flStudioPort) {
    console.log(`Connecting to: ${flStudioPort.name}`);
    port = await midi.openMidiOut(flStudioPort.name);
  } else {
    console.log("Using default MIDI output");
    port = await midi.openMidiOut();
  }

  return port;
};

class Midi {
  private midi: Awaited<ReturnType<typeof JZZ>> | null = null;
  private port: Awaited<ReturnType<typeof openMidiOut>> | null = null;
  private bpm: number = 120; // Default tempo
  private octaveOffset: number = 2; // GarageBand octave correction (C3 in JZZ = C1 in GarageBand)

  async init() {
    this.midi = await JZZ();
    this.port = await openMidiOut();
  }

  // Adjust note for GarageBand's octave numbering
  private adjustNoteForGarageBand(note: string | number): string | number {
    // if (typeof note === "string" && /^[A-G]#?\d$/.test(note)) {
    //   // Parse note name and octave
    //   const match = note.match(/^([A-G]#?)(\d)$/);
    //   if (match) {
    //     const noteName = match[1];
    //     const octave = parseInt(match[2]);
    //     // Adjust octave by adding offset
    //     return `${noteName}${octave + this.octaveOffset}`;
    //   }
    // }
    return note;
  }

  // Set tempo in BPM
  setBPM(bpm: number) {
    this.bpm = bpm;
  }

  // Convert note duration to milliseconds based on BPM
  // duration: note value (1 = whole, 0.5 = half, 0.25 = quarter, etc.)
  beatsToMs(beats: number): number {
    return (60000 / this.bpm) * beats;
  }

  // Convert string representation of note duration to beat value
  // Examples: "1/4" -> 1, "1/2" -> 2, "1" -> 4, "1/8" -> 0.5, "1/4." -> 1.5
  parseNoteDuration(noteString: string): number {
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

  async setInstrument(channel: number, instrumentName: InstrumentName) {
    if (!this.port) {
      throw new Error("MIDI port not initialized");
    }

    const programNumber = INSTRUMENTS[instrumentName];
    this.port.program(channel, programNumber);
  }

  async playNote(
    note: string[],
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
    // const adjustedNote = this.adjustNoteForGarageBand(note);

    await Promise.all(
      note.map((n) => {
        const adjustedNote = this.adjustNoteForGarageBand(n);
        return this.port?.noteOn(channel, adjustedNote, 127);
      })
    );
    await this.port.wait(duration);
    await Promise.all(
      note.map((n) => {
        const adjustedNote = this.adjustNoteForGarageBand(n);
        return this.port?.noteOff(channel, adjustedNote);
      })
    );
  }

  async playDrum(drumName: DrumName | number, velocity: number = 127) {
    if (!this.port) {
      throw new Error("MIDI port not initialized");
    }

    const drumNote = typeof drumName === "string" ? DRUMS[drumName] : drumName;
    await this.port.noteOn(9, drumNote, velocity);
    await this.port.noteOff(9, drumNote);
  }

  async playDrumPattern(
    pattern: Array<{ drums: (DrumName | number)[]; wait: number }>
  ) {
    if (!this.port) {
      throw new Error("MIDI port not initialized");
    }

    for (const step of pattern) {
      for (const drum of step.drums) {
        this.playDrum(drum);
      }
      await this.port.wait(step.wait);
    }
  }

  // Play drum pattern with beat-based timing
  async playDrumPatternWithBeats(
    pattern: Array<{
      drums: (DrumName | number | string)[];
      noteDuration: number;
    }>,
    channel: number = 9
  ) {
    if (!this.port) {
      throw new Error("MIDI port not initialized");
    }

    for (const step of pattern) {
      for (const drum of step.drums) {
        let note: number | string;

        // If it's a drum name and we have it in DRUMS, use that
        if (typeof drum === "string" && drum in DRUMS) {
          note = DRUMS[drum as DrumName];
        } else {
          // Otherwise use it directly (could be a note like "C4" or a MIDI number)
          note = drum;
        }

        await this.port.noteOn(channel, note, 127);
        await this.port.noteOff(channel, note);
      }
      await this.port.wait(this.beatsToMs(step.noteDuration));
    }
  }

  // Play note with beat-based duration
  async playNoteWithBeats(
    note: string[],
    beats: number,
    channel: number = 0,
    instrumentName?: InstrumentName
  ) {
    await this.playNote(note, this.beatsToMs(beats), channel, instrumentName);
  }

  async playScore(score: Score) {
    this.setBPM(score.bpm);

    await Promise.all(score.tracks.map((track) => this.playTrack(track)));
  }

  async playTrack(track: Track) {
    if (track.instrumentName === "drums") {
      await this.playDrumPatternWithBeats(
        track.notes.map((note) => ({
          drums: note.drums ?? [],
          noteDuration: this.parseNoteDuration(note.noteDuration),
        })),
        track.channel ?? 9
      );
    } else {
      for (const { note, noteDuration } of track.notes) {
        await this.playNote(
          note as string[],
          this.beatsToMs(this.parseNoteDuration(noteDuration)),
          track.channel ?? 0,
          track.instrumentName
        );
      }
    }
  }
}

export { DRUMS, INSTRUMENTS, Midi };
