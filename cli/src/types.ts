export interface LLMModel {
  id: string;
  name: string;
  provider: string;
  contextWindow: number;
  inputCostPerMillion: number;
  outputCostPerMillion: number;
  description?: string;
}

export interface ModelsResponse {
  models: LLMModel[];
  total: number;
}

export interface ProvidersResponse {
  providers: string[];
  total: number;
}
