#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { ListMidiOutputsMcpTool } from "./mcp/tools/list-midi-outputss.tool";
import { PlayMusicMcpTool } from "./mcp/tools/play-music.tool";

(async () => {
  const server = new McpServer({
    name: "vibe-composer-midi-mcp",
    version: "1.0.0",
  });

  server.registerTool(
    ListMidiOutputsMcpTool.name,
    {
      title: ListMidiOutputsMcpTool.title,
      description: ListMidiOutputsMcpTool.description,
    },
    ListMidiOutputsMcpTool.handler
  );
  server.registerTool(
    PlayMusicMcpTool.name,
    {
      title: PlayMusicMcpTool.title,
      description: PlayMusicMcpTool.description,
      inputSchema: PlayMusicMcpTool.inputSchema,
    },
    PlayMusicMcpTool.handler
  );

  const transport = new StdioServerTransport();
  await server.connect(transport);
})();
