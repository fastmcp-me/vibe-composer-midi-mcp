import { Midi } from "../src/midi/midi";
import { InstrumentName } from "../src/midi/midi.types";

const tracks = {
  bpm: 150,
  midiOuputName: "Logic Pro Trial Virtual In",
  tracks: [
    {
      instrumentName: "acoustic_grand_piano" as InstrumentName,
      channel: 0,
      notes: [
        {
          note: ["C4"],
          noteDuration: "1/8",
        },
        {
          note: ["E4"],
          noteDuration: "1/8",
        },
        {
          note: ["G4"],
          noteDuration: "1/8",
        },
        {
          note: ["C5"],
          noteDuration: "1/8",
        },
        {
          note: ["C5", "D5", "E5", "F5"],
          noteDuration: "1/16",
        },
        {
          note: ["G5"],
          noteDuration: "1/16",
        },
        {
          note: ["A5"],
          noteDuration: "1/16",
        },
        {
          note: ["B5"],
          noteDuration: "1/16",
        },
        {
          note: ["C6"],
          noteDuration: "1/8",
        },
        {
          note: ["B5"],
          noteDuration: "1/16",
        },
        {
          note: ["A5"],
          noteDuration: "1/16",
        },
        {
          note: ["G5"],
          noteDuration: "1/16",
        },
        {
          note: ["F5"],
          noteDuration: "1/16",
        },
        {
          note: ["E5"],
          noteDuration: "1/8",
        },
        {
          note: ["D5"],
          noteDuration: "1/8",
        },
        {
          note: ["C5"],
          noteDuration: "1/8",
        },
        {
          note: ["A4"],
          noteDuration: "1/16",
        },
        {
          note: ["B4"],
          noteDuration: "1/16",
        },
        {
          note: ["C5"],
          noteDuration: "1/16",
        },
        {
          note: ["D5"],
          noteDuration: "1/16",
        },
        {
          note: ["E5"],
          noteDuration: "1/16",
        },
        {
          note: ["F5"],
          noteDuration: "1/16",
        },
        {
          note: ["G5"],
          noteDuration: "1/16",
        },
        {
          note: ["A5"],
          noteDuration: "1/16",
        },
        {
          note: ["G5"],
          noteDuration: "1/16",
        },
        {
          note: ["F5"],
          noteDuration: "1/16",
        },
        {
          note: ["E5"],
          noteDuration: "1/16",
        },
        {
          note: ["D5"],
          noteDuration: "1/16",
        },
        {
          note: ["C5"],
          noteDuration: "1/16",
        },
        {
          note: ["B4"],
          noteDuration: "1/16",
        },
        {
          note: ["A4"],
          noteDuration: "1/16",
        },
        {
          note: ["G4"],
          noteDuration: "1/16",
        },
        {
          note: ["F4"],
          noteDuration: "1/8",
        },
        {
          note: ["A4"],
          noteDuration: "1/8",
        },
        {
          note: ["C5"],
          noteDuration: "1/8",
        },
        {
          note: ["F5"],
          noteDuration: "1/8",
        },
        {
          note: ["F5", "E5", "D5", "C5"],
          noteDuration: "1/16",
        },
        {
          note: ["B4"],
          noteDuration: "1/16",
        },
        {
          note: ["A4"],
          noteDuration: "1/16",
        },
        {
          note: ["G4"],
          noteDuration: "1/16",
        },
        {
          note: ["F4"],
          noteDuration: "1/16",
        },
        {
          note: ["G4"],
          noteDuration: "1/16",
        },
        {
          note: ["A4"],
          noteDuration: "1/16",
        },
        {
          note: ["B4"],
          noteDuration: "1/16",
        },
        {
          note: ["C5"],
          noteDuration: "1/16",
        },
        {
          note: ["D5"],
          noteDuration: "1/16",
        },
        {
          note: ["E5"],
          noteDuration: "1/16",
        },
        {
          note: ["F5"],
          noteDuration: "1/16",
        },
        {
          note: ["G5"],
          noteDuration: "1/16",
        },
        {
          note: ["A5"],
          noteDuration: "1/16",
        },
        {
          note: ["B5"],
          noteDuration: "1/16",
        },
        {
          note: ["C6"],
          noteDuration: "1/16",
        },
        {
          note: ["G4"],
          noteDuration: "1/8",
        },
        {
          note: ["B4"],
          noteDuration: "1/8",
        },
        {
          note: ["D5"],
          noteDuration: "1/8",
        },
        {
          note: ["G5"],
          noteDuration: "1/8",
        },
        {
          note: ["G5", "F5", "E5", "D5"],
          noteDuration: "1/16",
        },
        {
          note: ["C5"],
          noteDuration: "1/16",
        },
        {
          note: ["B4"],
          noteDuration: "1/16",
        },
        {
          note: ["A4"],
          noteDuration: "1/16",
        },
        {
          note: ["G4"],
          noteDuration: "1/16",
        },
        {
          note: ["A4"],
          noteDuration: "1/16",
        },
        {
          note: ["B4"],
          noteDuration: "1/16",
        },
        {
          note: ["C5"],
          noteDuration: "1/16",
        },
        {
          note: ["D5"],
          noteDuration: "1/16",
        },
        {
          note: ["E5"],
          noteDuration: "1/16",
        },
        {
          note: ["F5"],
          noteDuration: "1/16",
        },
        {
          note: ["G5"],
          noteDuration: "1/16",
        },
        {
          note: ["F5"],
          noteDuration: "1/16",
        },
        {
          note: ["E5"],
          noteDuration: "1/16",
        },
        {
          note: ["D5"],
          noteDuration: "1/16",
        },
        {
          note: ["C5"],
          noteDuration: "1/16",
        },
        {
          note: ["C4", "E4", "G4"],
          noteDuration: "1/4",
        },
        {
          note: ["A3", "C4", "E4"],
          noteDuration: "1/4",
        },
        {
          note: ["F3", "A3", "C4"],
          noteDuration: "1/4",
        },
        {
          note: ["G3", "B3", "D4"],
          noteDuration: "1/4",
        },
        {
          note: ["C5"],
          noteDuration: "1/16",
        },
        {
          note: ["D5"],
          noteDuration: "1/16",
        },
        {
          note: ["E5"],
          noteDuration: "1/16",
        },
        {
          note: ["F5"],
          noteDuration: "1/16",
        },
        {
          note: ["G5"],
          noteDuration: "1/16",
        },
        {
          note: ["A5"],
          noteDuration: "1/16",
        },
        {
          note: ["B5"],
          noteDuration: "1/16",
        },
        {
          note: ["C6"],
          noteDuration: "1/16",
        },
        {
          note: ["B5"],
          noteDuration: "1/16",
        },
        {
          note: ["A5"],
          noteDuration: "1/16",
        },
        {
          note: ["G5"],
          noteDuration: "1/16",
        },
        {
          note: ["F5"],
          noteDuration: "1/16",
        },
        {
          note: ["E5"],
          noteDuration: "1/16",
        },
        {
          note: ["D5"],
          noteDuration: "1/16",
        },
        {
          note: ["C5"],
          noteDuration: "1/16",
        },
        {
          note: ["B4"],
          noteDuration: "1/16",
        },
        {
          note: ["E4", "G4", "C5"],
          noteDuration: "1/16",
        },
        {
          note: ["F4", "A4", "D5"],
          noteDuration: "1/16",
        },
        {
          note: ["G4", "B4", "E5"],
          noteDuration: "1/16",
        },
        {
          note: ["A4", "C5", "F5"],
          noteDuration: "1/16",
        },
        {
          note: ["G4", "B4", "D5"],
          noteDuration: "1/16",
        },
        {
          note: ["F4", "A4", "C5"],
          noteDuration: "1/16",
        },
        {
          note: ["E4", "G4", "B4"],
          noteDuration: "1/16",
        },
        {
          note: ["C4", "E4", "G4"],
          noteDuration: "1/16",
        },
        {
          note: ["C5"],
          noteDuration: "1/16",
        },
        {
          note: ["E5"],
          noteDuration: "1/16",
        },
        {
          note: ["G5"],
          noteDuration: "1/16",
        },
        {
          note: ["C6"],
          noteDuration: "1/16",
        },
        {
          note: ["E6"],
          noteDuration: "1/16",
        },
        {
          note: ["C6"],
          noteDuration: "1/16",
        },
        {
          note: ["G5"],
          noteDuration: "1/16",
        },
        {
          note: ["E5"],
          noteDuration: "1/16",
        },
        {
          note: ["C5"],
          noteDuration: "1/16",
        },
        {
          note: ["G4"],
          noteDuration: "1/16",
        },
        {
          note: ["E4"],
          noteDuration: "1/16",
        },
        {
          note: ["C4"],
          noteDuration: "1/16",
        },
        {
          note: ["E4"],
          noteDuration: "1/16",
        },
        {
          note: ["G4"],
          noteDuration: "1/16",
        },
        {
          note: ["C5"],
          noteDuration: "1/16",
        },
        {
          note: ["E5"],
          noteDuration: "1/16",
        },
        {
          note: ["A4"],
          noteDuration: "1/16",
        },
        {
          note: ["C5"],
          noteDuration: "1/16",
        },
        {
          note: ["E5"],
          noteDuration: "1/16",
        },
        {
          note: ["A5"],
          noteDuration: "1/16",
        },
        {
          note: ["C6"],
          noteDuration: "1/16",
        },
        {
          note: ["A5"],
          noteDuration: "1/16",
        },
        {
          note: ["E5"],
          noteDuration: "1/16",
        },
        {
          note: ["C5"],
          noteDuration: "1/16",
        },
        {
          note: ["F4"],
          noteDuration: "1/16",
        },
        {
          note: ["A4"],
          noteDuration: "1/16",
        },
        {
          note: ["C5"],
          noteDuration: "1/16",
        },
        {
          note: ["F5"],
          noteDuration: "1/16",
        },
        {
          note: ["A5"],
          noteDuration: "1/16",
        },
        {
          note: ["F5"],
          noteDuration: "1/16",
        },
        {
          note: ["C5"],
          noteDuration: "1/16",
        },
        {
          note: ["A4"],
          noteDuration: "1/16",
        },
        {
          note: ["G4"],
          noteDuration: "1/16",
        },
        {
          note: ["B4"],
          noteDuration: "1/16",
        },
        {
          note: ["D5"],
          noteDuration: "1/16",
        },
        {
          note: ["G5"],
          noteDuration: "1/16",
        },
        {
          note: ["B5"],
          noteDuration: "1/16",
        },
        {
          note: ["G5"],
          noteDuration: "1/16",
        },
        {
          note: ["D5"],
          noteDuration: "1/16",
        },
        {
          note: ["B4"],
          noteDuration: "1/16",
        },
        {
          note: ["C3", "E3", "G3"],
          noteDuration: "1/2",
        },
        {
          note: ["A2", "C3", "E3"],
          noteDuration: "1/2",
        },
        {
          note: ["F2", "A2", "C3"],
          noteDuration: "1/2",
        },
        {
          note: ["G2", "B2", "D3"],
          noteDuration: "1/2",
        },
        {
          note: ["C3", "E3", "G3"],
          noteDuration: "1/2",
        },
        {
          note: ["A2", "C3", "E3"],
          noteDuration: "1/2",
        },
        {
          note: ["F2", "A2", "C3"],
          noteDuration: "1/2",
        },
        {
          note: ["G2", "B2", "D3"],
          noteDuration: "1/2",
        },
        {
          note: ["C3", "E3", "G3"],
          noteDuration: "1/1",
        },
      ],
    },
    {
      instrumentName: "tenor_sax" as InstrumentName,
      channel: 1,
      notes: [
        {
          note: [],
          noteDuration: "1/8",
        },
        {
          note: [],
          noteDuration: "1/8",
        },
        {
          note: [],
          noteDuration: "1/8",
        },
        {
          note: [],
          noteDuration: "1/8",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/8",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/8",
        },
        {
          note: [],
          noteDuration: "1/8",
        },
        {
          note: [],
          noteDuration: "1/8",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/8",
        },
        {
          note: [],
          noteDuration: "1/8",
        },
        {
          note: [],
          noteDuration: "1/8",
        },
        {
          note: [],
          noteDuration: "1/8",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/8",
        },
        {
          note: [],
          noteDuration: "1/8",
        },
        {
          note: [],
          noteDuration: "1/8",
        },
        {
          note: [],
          noteDuration: "1/8",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/4",
        },
        {
          note: [],
          noteDuration: "1/4",
        },
        {
          note: [],
          noteDuration: "1/4",
        },
        {
          note: [],
          noteDuration: "1/4",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: [],
          noteDuration: "1/16",
        },
        {
          note: ["C4"],
          noteDuration: "1/4",
        },
        {
          note: ["E4"],
          noteDuration: "1/8",
        },
        {
          note: ["G4"],
          noteDuration: "1/8",
        },
        {
          note: ["C5"],
          noteDuration: "1/4",
        },
        {
          note: ["E5"],
          noteDuration: "1/8",
        },
        {
          note: ["D5"],
          noteDuration: "1/8",
        },
        {
          note: ["C5"],
          noteDuration: "1/4",
        },
        {
          note: ["G4"],
          noteDuration: "1/4",
        },
        {
          note: ["A4"],
          noteDuration: "1/8",
        },
        {
          note: ["C5"],
          noteDuration: "1/8",
        },
        {
          note: ["E5"],
          noteDuration: "1/4",
        },
        {
          note: ["A5"],
          noteDuration: "1/8",
        },
        {
          note: ["G5"],
          noteDuration: "1/8",
        },
        {
          note: ["F5"],
          noteDuration: "1/4",
        },
        {
          note: ["E5"],
          noteDuration: "1/4",
        },
        {
          note: ["F4"],
          noteDuration: "1/8",
        },
        {
          note: ["A4"],
          noteDuration: "1/8",
        },
        {
          note: ["C5"],
          noteDuration: "1/4",
        },
        {
          note: ["F5"],
          noteDuration: "1/8",
        },
        {
          note: ["E5"],
          noteDuration: "1/8",
        },
        {
          note: ["D5"],
          noteDuration: "1/4",
        },
        {
          note: ["C5"],
          noteDuration: "1/4",
        },
        {
          note: ["G4"],
          noteDuration: "1/8",
        },
        {
          note: ["B4"],
          noteDuration: "1/8",
        },
        {
          note: ["D5"],
          noteDuration: "1/4",
        },
        {
          note: ["G5"],
          noteDuration: "1/8",
        },
        {
          note: ["F5"],
          noteDuration: "1/8",
        },
        {
          note: ["E5"],
          noteDuration: "1/4",
        },
        {
          note: ["D5"],
          noteDuration: "1/4",
        },
        {
          note: ["C5"],
          noteDuration: "1/1",
        },
      ],
    },
    {
      instrumentName: "drums" as const,
      channel: 2,
      notes: [
        {
          drums: ["bass_drum_1", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "crash_cymbal_1"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "crash_cymbal_1"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "crash_cymbal_1"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "crash_cymbal_1"],
          noteDuration: "1/4",
        },
        {
          drums: ["acoustic_snare"],
          noteDuration: "1/4",
        },
        {
          drums: ["bass_drum_1"],
          noteDuration: "1/4",
        },
        {
          drums: ["acoustic_snare"],
          noteDuration: "1/4",
        },
        {
          drums: ["bass_drum_1", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "crash_cymbal_1"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "crash_cymbal_1"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "crash_cymbal_1"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "open_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["acoustic_snare", "closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["closed_hi_hat"],
          noteDuration: "1/8",
        },
        {
          drums: ["bass_drum_1", "ride_cymbal_1"],
          noteDuration: "1/4",
        },
        {
          drums: ["acoustic_snare", "ride_cymbal_1"],
          noteDuration: "1/4",
        },
        {
          drums: ["bass_drum_1", "ride_cymbal_1"],
          noteDuration: "1/4",
        },
        {
          drums: ["acoustic_snare", "ride_cymbal_1"],
          noteDuration: "1/4",
        },
        {
          drums: ["bass_drum_1", "ride_cymbal_1"],
          noteDuration: "1/4",
        },
        {
          drums: ["acoustic_snare", "ride_cymbal_1"],
          noteDuration: "1/4",
        },
        {
          drums: ["bass_drum_1", "ride_cymbal_1"],
          noteDuration: "1/4",
        },
        {
          drums: ["acoustic_snare", "ride_cymbal_1"],
          noteDuration: "1/4",
        },
        {
          drums: ["bass_drum_1", "ride_cymbal_1"],
          noteDuration: "1/4",
        },
        {
          drums: ["acoustic_snare", "ride_cymbal_1"],
          noteDuration: "1/4",
        },
        {
          drums: ["bass_drum_1", "ride_cymbal_1"],
          noteDuration: "1/4",
        },
        {
          drums: ["acoustic_snare", "ride_cymbal_1"],
          noteDuration: "1/4",
        },
        {
          drums: ["bass_drum_1", "ride_cymbal_1"],
          noteDuration: "1/4",
        },
        {
          drums: ["acoustic_snare", "ride_cymbal_1"],
          noteDuration: "1/4",
        },
        {
          drums: ["bass_drum_1", "ride_cymbal_1"],
          noteDuration: "1/4",
        },
        {
          drums: ["acoustic_snare", "ride_cymbal_1"],
          noteDuration: "1/4",
        },
        {
          drums: ["bass_drum_1", "crash_cymbal_1"],
          noteDuration: "1/1",
        },
      ],
    },
  ],
};

(async () => {
  const midi = new Midi();
  await midi.init();

  await midi.playScore(tracks);
})();
