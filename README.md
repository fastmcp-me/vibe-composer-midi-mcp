# vibe-composer-midi-mcp

- A multi track MIDI composer MCP server
- Supports both default MIDI synthesizer
- And can also send signals to software & hardware synthesizers;

# Example prompts

- `Play an upbeat melody on the piano`
  - [Audio example of that](/examples/upbeat-piano.wav)
- Play an upbeat melody on the piano

# Installation

- Using an example of Claude Desktop as an MCP client:

Add this to `~/Library/Application Support/Claude/claude_desktop_config.json`

```json
"vibe-composer-midi-mcp": {
  "command": "npx",
  "args": ["vibe-composer-midi-mcp@latest"]
}
```
