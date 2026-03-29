export interface LLMModel {
  id: string;
  name: string;
  provider: string;
  contextWindow: number;
  inputCostPerMillion: number;
  outputCostPerMillion: number;
  description?: string;
}

export const LLM_MODELS: LLMModel[] = [
  {
    id: "gpt-4o",
    name: "GPT-4o",
    provider: "OpenAI",
    contextWindow: 128000,
    inputCostPerMillion: 2.5,
    outputCostPerMillion: 10,
    description: "Most capable GPT-4 model with vision",
  },
  {
    id: "gpt-4o-mini",
    name: "GPT-4o Mini",
    provider: "OpenAI",
    contextWindow: 128000,
    inputCostPerMillion: 0.15,
    outputCostPerMillion: 0.6,
    description: "Affordable small model for simple tasks",
  },
  {
    id: "gpt-4-turbo",
    name: "GPT-4 Turbo",
    provider: "OpenAI",
    contextWindow: 128000,
    inputCostPerMillion: 10,
    outputCostPerMillion: 30,
    description: "High intelligence with 128K context",
  },
  {
    id: "o1-mini",
    name: "o1-mini",
    provider: "OpenAI",
    contextWindow: 128000,
    inputCostPerMillion: 1.1,
    outputCostPerMillion: 4.4,
    description: "Reasoning model for complex problems",
  },
  {
    id: "o1",
    name: "o1",
    provider: "OpenAI",
    contextWindow: 200000,
    inputCostPerMillion: 15,
    outputCostPerMillion: 60,
    description: "Advanced reasoning capabilities",
  },
  {
    id: "claude-sonnet-4",
    name: "Claude Sonnet 4",
    provider: "Anthropic",
    contextWindow: 200000,
    inputCostPerMillion: 3,
    outputCostPerMillion: 15,
    description: "Balanced performance and speed",
  },
  {
    id: "claude-opus-4",
    name: "Claude Opus 4",
    provider: "Anthropic",
    contextWindow: 200000,
    inputCostPerMillion: 15,
    outputCostPerMillion: 75,
    description: "Most capable Claude model",
  },
  {
    id: "claude-haiku-3-5",
    name: "Claude Haiku 3.5",
    provider: "Anthropic",
    contextWindow: 200000,
    inputCostPerMillion: 0.8,
    outputCostPerMillion: 4,
    description: "Fast and cost-effective",
  },
  {
    id: "gemini-2.0-flash",
    name: "Gemini 2.0 Flash",
    provider: "Google",
    contextWindow: 1000000,
    inputCostPerMillion: 0.1,
    outputCostPerMillion: 0.4,
    description: "Ultra-fast with 1M context",
  },
  {
    id: "gemini-1.5-pro",
    name: "Gemini 1.5 Pro",
    provider: "Google",
    contextWindow: 2000000,
    inputCostPerMillion: 1.25,
    outputCostPerMillion: 5,
    description: "2M token context window",
  },
  {
    id: "llama-3.3-70b",
    name: "Llama 3.3 70B",
    provider: "Meta",
    contextWindow: 128000,
    inputCostPerMillion: 0.52,
    outputCostPerMillion: 0.75,
    description: "Open weights, strong performance",
  },
  {
    id: "deepseek-v3",
    name: "DeepSeek V3",
    provider: "DeepSeek",
    contextWindow: 128000,
    inputCostPerMillion: 0.27,
    outputCostPerMillion: 1.1,
    description: "Cost-effective with strong reasoning",
  },
];

export function getProviders(): string[] {
  return [...new Set(LLM_MODELS.map((m) => m.provider))];
}
