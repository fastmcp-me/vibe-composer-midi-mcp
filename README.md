# vibe-composer-midi-mcp

- Vibe composer as an MCP server
- Talk to an LLM and compose music!
- Multi track - not just a piano, but the whole band
- Also can output to a software or a hardware synthesizer for a better sound!

# Example prompts

- `Play an upbeat melody on the piano`
  - [Audio example of that](https://github.com/mikeborozdin/vibe-composer-midi-mcp/raw/refs/heads/main/examples/upbeat-piano.wav)
- `Spicy it up with fast passages with 16th notes`
  - [Audio example of that](https://github.com/mikeborozdin/vibe-composer-midi-mcp/raw/refs/heads/main/examples/upbeat-piano-with-fast-passages)
- `Add a few bars on the saxophone while piano is playing chords`
  - [Audio example of that](https://github.com/mikeborozdin/vibe-composer-midi-mcp/raw/refs/heads/main/examples/with-sax.wav)
- `Add drums for the whole duration of the song`
  - [Audio example of that](https://github.com/mikeborozdin/vibe-composer-midi-mcp/raw/refs/heads/main/examples/full-band.wav)

# Installation

- Using an example of Claude Desktop as an MCP client:

Add this to `~/Library/Application Support/Claude/claude_desktop_config.json`

```json
"vibe-composer-midi-mcp": {
  "command": "npx",
  "args": ["vibe-composer-midi-mcp@latest"]
}
```
