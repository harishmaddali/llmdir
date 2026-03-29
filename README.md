# LLMDir

LLM Models Directory — Browse models, providers, and token pricing via a Next.js web app and CLI.

## Quick Start

### 1. Start the Web API

```bash
cd web
npm install
npm run dev
```

The API runs at `http://localhost:3000` (or 3001 if 3000 is in use).

### 2. Use the CLI

```bash
cd cli
npm install
npm run build
```

Run commands (ensure the web server is running):

```bash
# List all models
node dist/cli.js models

# Show a specific model
node dist/cli.js model gpt-4o

# List providers
node dist/cli.js providers

# Connection info
node dist/cli.js info
```

### 3. Point CLI to Your API

If your API runs on a different URL:

```bash
LLMDIR_API_URL=http://localhost:3001 node dist/cli.js models
```

Or when published:

```bash
LLMDIR_API_URL=https://your-llmdir-site.vercel.app npx llmdir models
```

## Project Structure

```
llmdir/
├── web/          # Next.js app + API
│   ├── app/
│   │   ├── api/       # API routes
│   │   │   ├── models/
│   │   │   └── providers/
│   │   └── page.tsx   # UI
│   └── lib/models.ts  # Model data
└── cli/          # llmdir npm package
    └── src/
        ├── cli.ts     # Commands
        ├── api.ts     # API client
        └── display.ts # Terminal formatting
```

## API Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/models` | List all LLM models |
| `GET /api/models/[id]` | Get model by ID |
| `GET /api/providers` | List all providers |

## CLI Commands

| Command | Description |
|---------|-------------|
| `llmdir models` | List all models (aliases: `list`, `ls`) |
| `llmdir model <id>` | Show model details |
| `llmdir providers` | List providers |
| `llmdir info` | Show API connection info |

## Publishing the CLI

```bash
cd cli
npm publish
```

Then users can install globally:

```bash
npm install -g llmdir
llmdir models
```
