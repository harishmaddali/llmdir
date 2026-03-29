import chalk from "chalk";
import type { LLMModel } from "./types.js";

const BOX = {
  tl: "╭",
  tr: "╮",
  bl: "╰",
  br: "╯",
  h: "─",
  v: "│",
  cross: "┼",
  t: "┬",
  b: "┴",
  l: "├",
  r: "┤",
};

function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return n.toString();
}

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

function pad(str: string, len: number): string {
  const s = String(str);
  return s.length >= len ? s.slice(0, len) : s + " ".repeat(len - s.length);
}

export function renderHeader(): void {
  console.log();
  console.log(
    chalk.cyan("  ╭─────────────────────────────────────────────────────╮")
  );
  console.log(
    chalk.cyan("  │  ") +
      chalk.bold.cyan("LLMDir") +
      chalk.cyan("  —  LLM Models Directory") +
      chalk.cyan("  │")
  );
  console.log(
    chalk.cyan("  ╰─────────────────────────────────────────────────────╯")
  );
  console.log();
}

export function renderModelsTable(models: LLMModel[]): void {
  const cols = [
    { key: "name", label: "Model", width: 22 },
    { key: "provider", label: "Provider", width: 12 },
    { key: "context", label: "Context", width: 10 },
    { key: "input", label: "Input/1M", width: 10 },
    { key: "output", label: "Output/1M", width: 11 },
  ];

  const sep = cols.map((c) => BOX.h.repeat(c.width + 2)).join(BOX.cross);
  const top = BOX.tl + BOX.h + sep + BOX.h + BOX.tr;
  const mid = BOX.l + BOX.h + sep + BOX.h + BOX.r;
  const bot = BOX.bl + BOX.h + sep + BOX.h + BOX.br;

  console.log(chalk.dim(top));
  const headerCells = cols
    .map((c) => chalk.bold(" " + pad(c.label, c.width) + " "))
    .join(chalk.dim(BOX.v));
  console.log(chalk.dim(BOX.v) + headerCells + chalk.dim(BOX.v));
  console.log(chalk.dim(mid));

  for (const model of models) {
    const cells = [
      pad(model.name, cols[0].width),
      pad(model.provider, cols[1].width),
      pad(formatNumber(model.contextWindow), cols[2].width),
      pad(formatPrice(model.inputCostPerMillion), cols[3].width),
      pad(formatPrice(model.outputCostPerMillion), cols[4].width),
    ];
    const row =
      chalk.dim(BOX.v) +
      " " +
      chalk.white(cells[0]) +
      " " +
      chalk.dim(BOX.v) +
      " " +
      chalk.cyan(cells[1]) +
      " " +
      chalk.dim(BOX.v) +
      " " +
      chalk.yellow(cells[2]) +
      " " +
      chalk.dim(BOX.v) +
      " " +
      chalk.green(cells[3]) +
      " " +
      chalk.dim(BOX.v) +
      " " +
      chalk.magenta(cells[4]) +
      " " +
      chalk.dim(BOX.v);
    console.log(row);
  }

  console.log(chalk.dim(bot));
  console.log();
  console.log(chalk.dim(`  Total: ${chalk.white(models.length)} models`));
  console.log();
}

export function renderProvidersList(providers: string[]): void {
  console.log(chalk.bold.cyan("  Providers"));
  console.log(chalk.dim("  ─────────"));
  for (const p of providers) {
    console.log(chalk.cyan("  • ") + chalk.white(p));
  }
  console.log();
  console.log(chalk.dim(`  Total: ${chalk.white(providers.length)} providers`));
  console.log();
}

export function renderModelDetail(model: LLMModel): void {
  console.log(chalk.bold.cyan(`  ${model.name}`));
  console.log(chalk.dim(`  ${model.id}`));
  console.log();
  console.log(chalk.dim("  ─────────────────────────"));
  console.log(chalk.cyan("  Provider:     ") + chalk.white(model.provider));
  console.log(
    chalk.cyan("  Context:      ") +
      chalk.yellow(formatNumber(model.contextWindow)) +
      chalk.dim(" tokens")
  );
  console.log(
    chalk.cyan("  Input cost:   ") +
      chalk.green(formatPrice(model.inputCostPerMillion)) +
      chalk.dim(" / 1M tokens")
  );
  console.log(
    chalk.cyan("  Output cost:  ") +
      chalk.magenta(formatPrice(model.outputCostPerMillion)) +
      chalk.dim(" / 1M tokens")
  );
  if (model.description) {
    console.log(chalk.cyan("  Description:  ") + chalk.dim(model.description));
  }
  console.log();
}

export function renderError(message: string): void {
  console.error(chalk.red("  ✗ Error: ") + chalk.white(message));
  console.error();
}

export function renderInfo(message: string): void {
  console.log(chalk.blue("  ℹ ") + chalk.dim(message));
  console.log();
}
