# MCP Server Skeleton

A skeleton implementation of a Model Context Protocol (MCP) server in TypeScript.

## What is MCP?

The Model Context Protocol (MCP) is a protocol that allows AI assistants to interact with external tools and data sources. This skeleton provides a foundation for building MCP servers that can be integrated with MCP-compatible clients.

## Features

- TypeScript implementation with full type safety
- Modular architecture with separated concerns
- Example tool implementation
- Zod schema validation
- HTTP transport using Server-Sent Events (SSE)

## Project Structure

```
src/
├── index.ts      # Main entry point
├── server.ts     # Server configuration and setup
├── tools.ts      # Tool implementations and handlers
├── types.ts      # TypeScript type definitions
├── database.ts   # SQLite database setup and initialization
├── seed.ts       # Database seed data script
├── db-utils.ts   # Database utility functions
└── test-db.ts    # Database testing script
```

## Setup

1. Install dependencies:

```bash
yarn install
```

2. Initialize the database and add seed data:

```bash
yarn seed
```

3. Build the project:

```bash
yarn build
```

4. Run the server:

```bash
yarn start
```

For development with hot reloading:

```bash
yarn dev
```

## Usage

### Running the Server

The server runs on HTTP transport using Server-Sent Events (SSE), which means it communicates over HTTP. The server listens on port 3000 by default (configurable via the `PORT` environment variable).

To start the server:

```bash
yarn start
```

The server will be available at `http://localhost:3000/mcp` for SSE connections.

### Testing the HTTP Server

You can test the HTTP server using the provided test client:

```bash
node test-http-client.js
```

The server uses SSE (Server-Sent Events) for real-time communication:

- GET requests to `/mcp` establish SSE connections
- POST requests to `/mcp/{sessionId}` send messages to the server
- The server responds through the SSE stream

### Adding New Tools

1. Define your tool schema in `src/types.ts`:

```typescript
export const MyToolSchema = z.object({
  name: z.string(),
  description: z.string(),
  inputSchema: z.object({
    type: z.literal("object"),
    properties: z.object({
      // Define your tool parameters here
    }),
    required: z.array(z.string()),
  }),
});
```

2. Add your tool to the tools array in `src/tools.ts`:

```typescript
export const tools = [
  // ... existing tools
  {
    name: "my_tool",
    description: "Description of your tool",
    inputSchema: {
      type: "object" as const,
      properties: {
        // Define your tool parameters here
      },
      required: ["param1", "param2"] as const,
    },
  },
];
```

3. Add a handler in `src/tools.ts`:

```typescript
export async function handleCallTool(request: any) {
  const { name, arguments: args } = request.params;

  switch (name) {
    // ... existing cases
    case "my_tool":
      return handleMyTool(args as MyToolInput);

    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}

async function handleMyTool(input: MyToolInput) {
  // Implement your tool logic here
  return {
    content: [
      {
        type: "text" as const,
        text: "Your tool result",
      },
    ],
  };
}
```

## Example Tool

This skeleton includes an example tool called `example_tool` that simply echoes back any message sent to it. You can use this as a reference for implementing your own tools.

## Configuration

The server is configured in `src/server.ts`. You can modify:

- Server name and version
- Capabilities (currently only tools are supported)
- Request handlers

## Development

- `yarn build` - Compile TypeScript to JavaScript
- `yarn dev` - Run with tsx for development
- `yarn clean` - Remove compiled files
- `yarn start` - Run the compiled server
- `yarn test` - Run the test example
- `yarn seed` - Initialize database and add sample wine data
- `yarn test:db` - Test database functionality and display sample data

## Database

This project includes a SQLite database with wine-related data. The database schema includes:

- **wines**: Wine information (name, varietal, region, country, vintage, price, rating)
- **wine_categories**: Wine categories (Red Wine, White Wine, Sparkling Wine, etc.)
- **wine_reviews**: User reviews and ratings for wines
- **wine_category_relations**: Many-to-many relationship between wines and categories

### Database Commands

```bash
# Initialize database and add sample data
yarn seed

# Test database functionality
yarn test:db

# View database statistics and sample data
yarn test:db
```

The seed script populates the database with 8 premium wines from around the world, including:

- Château Margaux (Bordeaux, France)
- Dom Pérignon (Champagne, France)
- Opus One (Napa Valley, USA)
- Sassicaia (Tuscany, Italy)
- Penfolds Grange (South Australia)
- Vega Sicilia (Ribera del Duero, Spain)
- Château d'Yquem (Sauternes, France)
- Barolo Monfortino (Piedmont, Italy)

## Dependencies

- `@modelcontextprotocol/sdk` - Official MCP SDK
- `zod` - Schema validation
- `typescript` - TypeScript compiler
- `tsx` - TypeScript execution for development
- `@types/node` - Node.js type definitions
- `better-sqlite3` - High-performance SQLite3 bindings
- `@types/better-sqlite3` - TypeScript definitions for better-sqlite3

## License

MIT
