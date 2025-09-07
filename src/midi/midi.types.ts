import { Drums, Instruments } from "./instruments";

interface Score {
  tracks: Track[];
  bpm: number;
  midiOuputName?: string;
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

type InstrumentName = keyof typeof Instruments;
type DrumName = keyof typeof Drums;

export type { DrumName, InstrumentName, Score, Track };
