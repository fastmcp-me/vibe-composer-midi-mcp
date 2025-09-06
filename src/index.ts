import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import z from "zod";
import { DRUMS, INSTRUMENTS, Midi } from "./music";

(async () => {
  // const app = express();
  // app.use(express.json());

  const midi = new Midi();

  // app.post("/mcp", async (req, res) => {
  // try {
  // const transport = new StreamableHTTPServerTransport({
  // sessionIdGenerator: undefined,
  // });

  const server = new McpServer({
    name: "music-mcp",
    version: "1.0.0",
  });

  server.registerTool(
    "play",
    {
      title: "Play a music score",
      description: "Plays a music score",
      inputSchema: {
        bpm: z.number().describe("The BPM of the song"),
        tracks: z
          .array(
            z.object({
              instrumentName: z
                .enum([
                  "drums",
                  ...(Object.keys(INSTRUMENTS) as [string, ...string[]]),
                ])
                .describe(
                  `The instrument of the track. Available instruments: ${Object.keys(
                    INSTRUMENTS
                  ).join(
                    ", "
                  )}. If you want to make it a drum track, set the instrumentName to 'drums'.`
                ),
              notes: z
                .array(
                  z.object({
                    note: z
                      .array(z.string())
                      .nullable()
                      .optional()
                      .describe(
                        "The notes to play. Use array for chords. Or put one element for single note. Use an empty array for rest/silence"
                      ),
                    drums: z
                      .array(z.string())
                      .nullable()
                      .optional()
                      .describe(
                        "The drums to play. Use array for multiple drums. Use an empty array for rest/silence. Available drums: " +
                          Object.keys(DRUMS).join(", ")
                      ),
                    noteDuration: z
                      .string()
                      .describe(
                        "The note duration, e.g. '1/4', '1/2', '1', '1/8', '1/16', '1/32', '1' (whole note). Supports dotted notes, e.g. '1/4.', '1/8.', '1/16.', '1/32.'"
                      ),
                  })
                )
                .describe(
                  `"Array of notes or drums to play with timing. If you want to play a drum track, use the drums property. If you want to play a non-drum instrument, use the note property.Example: [{note: ['C2', 'E2'], noteDuration: '1/4'}, {note: [], noteDuration: '1/4'}, {note: ['G2'], noteDuration: '1/4'}, {note: null, noteDuration: '1/4'}]. Or [{drums: ['bass_drum_1', 'closedhi_hat'], noteDuration: '1/4'}, {note: [], noteDuration: '1/4'}, {drums: ['closed_hi_hat', 'acoustic_snare'], noteDuration: '1/4'}, {note: [], noteDuration: '1/4'}]. An array could be a bar or several bars.
                    
                    IMPORTANT FOR DRUMS: notes are played one after another. We wait until the whole duration of a note before we play another one. So if in a drum usual notation a bass or a snare would last for 1/4 you probably have to put 1/8 here.
                    `
                ),
            })
          )
          .describe(
            `Array of tracks to play. If you want to make it a drum track, set the instrumentName to 'drums'. and Use the 'drums' proprerty in notation. Otherwise, use the 'note' property in 'notes'.`
          ),
      },
    },
    async (input) => {
      console.error("got request");
      console.error(JSON.stringify(input, null, 2));

      await midi.init();

      await midi.playScore({
        bpm: input.bpm,
        tracks: input.tracks as any,
      });

      return {
        content: [
          {
            type: "text",
            text: "Playing music score",
          },
        ],
      };
    }
  );

  const transport = new StdioServerTransport();
  await server.connect(transport);

  //     await server.connect(transport);
  //     await transport.handleRequest(req, res, req.body);
  //   } catch (error) {
  //     console.error("Error handling MCP request:", error);
  //     if (!res.headersSent) {
  //       res.status(500).json({
  //         jsonrpc: "2.0",
  //         error: {
  //           code: -32603,
  //           message: "Internal server error",
  //         },
  //         id: null,
  //       });
  //     }
  //   }
  // });

  // app.listen(3002);
})();
