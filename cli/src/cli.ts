#!/usr/bin/env node

import { program } from "commander";
import {
  fetchModels,
  fetchModel,
  fetchProviders,
  getBaseUrl,
} from "./api.js";
import {
  renderHeader,
  renderModelsTable,
  renderProvidersList,
  renderModelDetail,
  renderError,
  renderInfo,
} from "./display.js";

program
  .name("llmdir")
  .description("List LLM models, providers, and token costs from LLMDir")
  .version("1.0.0");

program
  .command("models")
  .alias("list")
  .alias("ls")
  .description("List all available LLM models")
  .option("-q, --quiet", "Minimal output (no header)")
  .action(async (opts) => {
    try {
      if (!opts.quiet) renderHeader();
      const models = await fetchModels();
      renderModelsTable(models);
    } catch (err) {
      renderError(
        err instanceof Error ? err.message : "Failed to fetch models"
      );
      if (!opts.quiet) {
        renderInfo(`Make sure the API is running at ${getBaseUrl()}`);
      }
      process.exit(1);
    }
  });

program
  .command("model <id>")
  .description("Show details for a specific model by ID")
  .action(async (id) => {
    try {
      renderHeader();
      const model = await fetchModel(id);
      if (!model) {
        renderError(`Model not found: ${id}`);
        process.exit(1);
      }
      renderModelDetail(model);
    } catch (err) {
      renderError(
        err instanceof Error ? err.message : "Failed to fetch model"
      );
      renderInfo(`Make sure the API is running at ${getBaseUrl()}`);
      process.exit(1);
    }
  });

program
  .command("providers")
  .description("List all LLM providers")
  .option("-q, --quiet", "Minimal output (no header)")
  .action(async (opts) => {
    try {
      if (!opts.quiet) renderHeader();
      const providers = await fetchProviders();
      renderProvidersList(providers);
    } catch (err) {
      renderError(
        err instanceof Error ? err.message : "Failed to fetch providers"
      );
      if (!opts.quiet) {
        renderInfo(`Make sure the API is running at ${getBaseUrl()}`);
      }
      process.exit(1);
    }
  });

program
  .command("info")
  .description("Show API connection info")
  .action(() => {
    renderHeader();
    console.log("  API URL: " + getBaseUrl());
    console.log("  Set LLMDIR_API_URL to override (e.g. https://llmdir.example.com)");
    console.log();
  });

program.parse();
