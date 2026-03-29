import { LLM_MODELS } from "@/lib/models";

function formatNumber(n: number): string {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(0)}K`;
  return n.toString();
}

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <header className="mb-16 text-center">
          <h1 className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
            LLMDir
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            LLM Models Directory — Browse models, providers & token pricing
          </p>
        </header>

        <div className="overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/50 shadow-2xl backdrop-blur">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-slate-700/50 bg-slate-800/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                    Model
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                    Provider
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">
                    Context
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">
                    Input / 1M tokens
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">
                    Output / 1M tokens
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {LLM_MODELS.map((model, i) => (
                  <tr
                    key={model.id}
                    className={`border-b border-slate-700/30 transition-colors hover:bg-slate-800/30 ${
                      i % 2 === 0 ? "bg-slate-900/30" : ""
                    }`}
                  >
                    <td className="px-6 py-4">
                      <span className="font-medium text-white">
                        {model.name}
                      </span>
                      <span className="ml-2 text-xs text-slate-500">
                        {model.id}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex rounded-full bg-slate-700/50 px-3 py-1 text-sm text-slate-300">
                        {model.provider}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-sm text-slate-400">
                      {formatNumber(model.contextWindow)}
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-emerald-400">
                      {formatPrice(model.inputCostPerMillion)}
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-cyan-400">
                      {formatPrice(model.outputCostPerMillion)}
                    </td>
                    <td className="max-w-xs px-6 py-4 text-sm text-slate-500">
                      {model.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-6 text-center">
          <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 px-8 py-4">
            <div className="text-2xl font-bold text-emerald-400">
              {LLM_MODELS.length}
            </div>
            <div className="text-sm text-slate-400">Models</div>
          </div>
          <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 px-8 py-4">
            <div className="text-2xl font-bold text-cyan-400">
              {new Set(LLM_MODELS.map((m) => m.provider)).size}
            </div>
            <div className="text-sm text-slate-400">Providers</div>
          </div>
        </div>

        <footer className="mt-16 text-center text-sm text-slate-500">
          <p>
            API: <code className="rounded bg-slate-800 px-2 py-1">/api/models</code>{" "}
            ·{" "}
            <code className="rounded bg-slate-800 px-2 py-1">/api/providers</code>
          </p>
        </footer>
      </div>
    </div>
  );
}
