import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import express from "express";
import { PlayMusicMcpTool } from "../src/mcp/tools/play-music.tool";

(async () => {
  const app = express();
  app.use(express.json());

  app.post("/", async (req, res) => {
    try {
      const transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: undefined,
      });

      const server = new McpServer({
        name: "music-mcp",
        version: "1.0.0",
      });

      server.registerTool(
        PlayMusicMcpTool.name,
        {
          title: PlayMusicMcpTool.title,
          description: PlayMusicMcpTool.description,
          inputSchema: PlayMusicMcpTool.inputSchema,
        },
        PlayMusicMcpTool.handler
      );

      await server.connect(transport);
      await transport.handleRequest(req, res, req.body);
    } catch (error) {
      console.error("Error handling MCP request:", error);
      if (!res.headersSent) {
        res.status(500).json({
          jsonrpc: "2.0",
          error: {
            code: -32603,
            message: "Internal server error",
          },
          id: null,
        });
      }
    }
  });

  app.listen(3333);
})();
