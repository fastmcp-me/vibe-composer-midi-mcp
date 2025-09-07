import { Midi } from "./midi/midi";

const tracks = {
  bpm: 120,
  tracks: [
    {
      notes: [
        {
          drums: ["acoustic_bass_drum", "closed_hi_hat"],
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
          drums: ["acoustic_bass_drum", "closed_hi_hat"],
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
      ],
      instrumentName: "drums" as const,
    },
    {
      notes: [
        { note: ["E2"], noteDuration: "1/4" },
        { note: ["C2"], noteDuration: "1/4" },
        { note: ["E2"], noteDuration: "1/4" },
        { note: ["C2"], noteDuration: "1/4" },
      ],
      instrumentName: "electric_bass_finger" as const,
    },
    {
      notes: [
        { note: ["E4", "B4"], noteDuration: "1/8" },
        { note: ["D4"], noteDuration: "1/8" },

        { note: ["D4"], noteDuration: "1/8" },
        { note: ["D4"], noteDuration: "1/8" },

        { note: ["E4", "B4"], noteDuration: "1/8" },
        { note: ["D4"], noteDuration: "1/8" },

        { note: ["D4"], noteDuration: "1/8" },
        { note: ["D4"], noteDuration: "1/8" },
      ],
      instrumentName: "overdriven_guitar" as const,
    },
  ],
};

(async () => {
  const midi = new Midi();
  await midi.init();

  await midi.playScore(tracks);

  // Multi-track example with synchronized timing
  // await midi.playScore({
  //   bpm: 100,
  //   tracks: [
  //     // {
  //     //   notes: [
  //     //     { note: ["C5"], noteDuration: "1/8" },
  //     //     { note: ["Eb5"], noteDuration: "1/8" },
  //     //     { note: ["C5"], noteDuration: "1/8" },
  //     //     { note: ["Eb5"], noteDuration: "1/8" },
  //     //     { note: ["C5"], noteDuration: "1/8" },
  //     //     { note: ["Eb5"], noteDuration: "1/8" },
  //     //     { note: ["C5"], noteDuration: "1/8" },
  //     //     { note: ["Eb5"], noteDuration: "1/8" },
  //     //     { note: ["C5"], noteDuration: "1/8" },
  //     //     { note: ["Eb5"], noteDuration: "1/8" },
  //     //     { note: ["G5"], noteDuration: "1" },
  //     //   ],
  //     //   instrumentName: "acoustic_grand_piano",
  //     //   channel: 0,
  //     // },
  //     {
  //       notes: [
  //         {
  //           drums: ["bass_drum_1", "closed_hi_hat"],
  //           noteDuration: "1/8",
  //         },
  //         {
  //           drums: ["closed_hi_hat"],
  //           noteDuration: "1/8",
  //         },
  //         {
  //           drums: ["closed_hi_hat", "acoustic_snare"],
  //           noteDuration: "1/8",
  //         },
  //         {
  //           drums: ["closed_hi_hat"],
  //           noteDuration: "1/8",
  //         },
  //         {
  //           drums: ["bass_drum_1", "closed_hi_hat"],
  //           noteDuration: "1/8",
  //         },
  //         {
  //           drums: ["closed_hi_hat"],
  //           noteDuration: "1/8",
  //         },
  //         {
  //           drums: ["closed_hi_hat", "acoustic_snare"],
  //           noteDuration: "1/8",
  //         },
  //         {
  //           drums: ["acoustic_snare"],
  //           noteDuration: "1/16",
  //         },
  //         {
  //           drums: ["acoustic_snare"],
  //           noteDuration: "1/16",
  //         },
  //         {
  //           drums: ["crash_cymbal_1", "bass_drum_1"],
  //           noteDuration: "1",
  //         },
  //       ],
  //       instrumentName: "drums",
  //       channel: 1,
  //     },
  //     {
  //       notes: [{ note: ["C5", "G5"], noteDuration: "1" }],
  //       instrumentName: "pad_1_new_age",
  //       channel: 2,
  //     },
  //   ],
  // });

  console.log("Synchronized multi-track playback complete!");

  console.log(
    "\nNow playing the same score with basic timing (for comparison)..."
  );

  console.log("Basic multi-track playback complete!");
})();
