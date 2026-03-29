# llmdir

CLI to list LLM models, providers, and token costs from the LLMDir API.

## Install

```bash
npm install -g llmdir
```

Or run with npx (no install):

```bash
npx llmdir models
```

## Usage

```bash
llmdir models          # List all models (aliases: list, ls)
llmdir model gpt-4o    # Show details for a model
llmdir providers       # List all providers
llmdir info            # Show API connection info
```

## Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `LLMDIR_API_URL` | `http://localhost:3000` | API base URL |

Example:

```bash
LLMDIR_API_URL=https://llmdir.example.com llmdir models
```

## Requirements

- Node.js 18+
- LLMDir web API running (see main project README)
