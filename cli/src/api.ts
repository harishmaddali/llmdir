import type { LLMModel, ModelsResponse, ProvidersResponse } from "./types.js";

const DEFAULT_BASE_URL = "http://localhost:3000";

export function getBaseUrl(): string {
  return process.env.LLMDIR_API_URL ?? DEFAULT_BASE_URL;
}

export async function fetchModels(): Promise<LLMModel[]> {
  const baseUrl = getBaseUrl();
  const res = await fetch(`${baseUrl}/api/models`);
  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }
  const data: ModelsResponse = await res.json();
  return data.models;
}

export async function fetchModel(id: string): Promise<LLMModel | null> {
  const baseUrl = getBaseUrl();
  const res = await fetch(`${baseUrl}/api/models/${encodeURIComponent(id)}`);
  if (!res.ok) {
    if (res.status === 404) return null;
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export async function fetchProviders(): Promise<string[]> {
  const baseUrl = getBaseUrl();
  const res = await fetch(`${baseUrl}/api/providers`);
  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }
  const data: ProvidersResponse = await res.json();
  return data.providers;
}
