"use client"

import { useEffect, useState } from "react"
import { Target, Brain, Zap, TrendingUp, AlertTriangle, Activity, TrendingDown } from "lucide-react"

const probabilityScenarios = [
  {
    id: 1,
    scenario: "Market Bullish Breakout",
    probability: 73.2,
    timeframe: "Next 4 hours",
    confidence: 87.5,
    impact: "high",
    factors: ["Volume surge", "Technical breakout", "Sentiment shift"],
  },
  {
    id: 2,
    scenario: "Volatility Spike",
    probability: 45.8,
    timeframe: "Next 2 hours",
    confidence: 92.1,
    impact: "medium",
    factors: ["News catalyst", "Options expiry", "Algorithmic trading"],
  },
  {
    id: 3,
    scenario: "Sector Rotation",
    probability: 68.9,
    timeframe: "Next 24 hours",
    confidence: 79.3,
    impact: "high",
    factors: ["Economic data", "Fed signals", "Institutional flows"],
  },
  {
    id: 4,
    scenario: "Flash Crash Risk",
    probability: 12.4,
    timeframe: "Next 6 hours",
    confidence: 95.7,
    impact: "critical",
    factors: ["Liquidity gaps", "Algorithmic cascade", "Margin calls"],
  },
]

const quantumPredictions = [
  { asset: "AAPL", direction: "up", probability: 78.3, target: 182.5, timeframe: "2h" },
  { asset: "TSLA", direction: "down", probability: 65.7, target: 235.2, timeframe: "4h" },
  { asset: "NVDA", direction: "up", probability: 89.1, target: 465.8, timeframe: "1h" },
  { asset: "SPY", direction: "up", probability: 72.4, target: 445.3, timeframe: "6h" },
  { asset: "QQQ", direction: "down", probability: 58.9, target: 378.9, timeframe: "3h" },
]

export function ProbabilityMatrixView() {
  const [matrixState, setMatrixState] = useState("computing")
  const [quantumEntropy, setQuantumEntropy] = useState(0)
  const [randomMatrixCells, setRandomMatrixCells] = useState<Array<{
    id: number;
    className: string;
    animationDelay: string;
  }>>([])

  useEffect(() => {
    // Initialize random matrix cells on client side only
    setRandomMatrixCells(
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        className: Math.random() > 0.7
          ? "bg-emerald-400/60"
          : Math.random() > 0.4
            ? "bg-cyan-400/40"
            : Math.random() > 0.2
              ? "bg-purple-400/30"
              : "bg-slate-600/20",
        animationDelay: `${Math.random() * 2}s`,
      }))
    )
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setQuantumEntropy(Math.random() * 100)
      setMatrixState(Math.random() > 0.7 ? "recalibrating" : "computing")
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      {/* Matrix Status */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Target className="w-6 h-6 text-purple-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">
                {matrixState}
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Matrix State</div>
            <div className="text-2xl font-bold text-purple-400">Active</div>
            <div className="text-xs text-cyan-400/60 mt-1">Quantum processing</div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Brain className="w-6 h-6 text-emerald-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                94.7%
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Accuracy Rate</div>
            <div className="text-2xl font-bold text-emerald-400">1,247</div>
            <div className="text-xs text-cyan-400/60 mt-1">Predictions validated</div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Zap className="w-6 h-6 text-amber-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
                Optimal
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Quantum Entropy</div>
            <div className="text-2xl font-bold text-amber-400">{quantumEntropy.toFixed(1)}%</div>
            <div className="text-xs text-cyan-400/60 mt-1">Information density</div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Activity className="w-6 h-6 text-cyan-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                Real-time
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Scenarios</div>
            <div className="text-2xl font-bold text-cyan-400">4</div>
            <div className="text-xs text-cyan-400/60 mt-1">Active simulations</div>
          </div>
        </div>
      </div>

      {/* Probability Scenarios */}
      <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
        <h3 className="text-lg font-semibold text-cyan-100 mb-6 flex items-center gap-2">
          <Target className="w-5 h-5 text-purple-400" />
          Quantum Probability Scenarios
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {probabilityScenarios.map((scenario) => (
            <div
              key={scenario.id}
              className="bg-black/50 rounded-lg p-4 border border-cyan-500/10 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        scenario.impact === "critical"
                          ? "bg-red-500/10 border border-red-400/20"
                          : scenario.impact === "high"
                            ? "bg-amber-500/10 border border-amber-400/20"
                            : "bg-cyan-500/10 border border-cyan-400/20"
                      }`}
                    >
                      {scenario.impact === "critical" ? (
                        <AlertTriangle className="w-4 h-4 text-red-400" />
                      ) : scenario.impact === "high" ? (
                        <TrendingUp className="w-4 h-4 text-amber-400" />
                      ) : (
                        <Activity className="w-4 h-4 text-cyan-400" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium text-cyan-100">{scenario.scenario}</h4>
                      <p className="text-sm text-cyan-300/60">{scenario.timeframe}</p>
                    </div>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs border ${
                      scenario.impact === "critical"
                        ? "bg-red-500/20 border-red-400/30 text-red-300"
                        : scenario.impact === "high"
                          ? "bg-amber-500/20 border-amber-400/30 text-amber-300"
                          : "bg-cyan-500/20 border-cyan-400/30 text-cyan-300"
                    }`}
                  >
                    {scenario.impact}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-cyan-300/70">Probability</span>
                    <span className="text-cyan-100 font-medium">{scenario.probability}%</span>
                  </div>

                  <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${
                        scenario.probability > 70
                          ? "bg-gradient-to-r from-emerald-400 to-emerald-600"
                          : scenario.probability > 50
                            ? "bg-gradient-to-r from-amber-400 to-amber-600"
                            : "bg-gradient-to-r from-red-400 to-red-600"
                      }`}
                      style={{ width: `${scenario.probability}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-cyan-300/70">Confidence</span>
                    <span className="text-purple-300 font-medium">{scenario.confidence}%</span>
                  </div>

                  <div className="pt-2 border-t border-cyan-500/20">
                    <div className="text-xs text-cyan-300/60 mb-1">Key Factors:</div>
                    <div className="flex flex-wrap gap-1">
                      {scenario.factors.map((factor) => (
                        <span
                          key={factor}
                          className="px-2 py-1 rounded-full text-xs bg-purple-500/20 text-purple-300 border border-purple-400/30"
                        >
                          {factor}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quantum Predictions */}
      <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
        <h3 className="text-lg font-semibold text-cyan-100 mb-6 flex items-center gap-2">
          <Brain className="w-5 h-5 text-emerald-400" />
          Quantum Price Predictions
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-cyan-500/20">
                <th className="text-left py-4 px-2 text-cyan-300 font-medium">Asset</th>
                <th className="text-center py-4 px-2 text-cyan-300 font-medium">Direction</th>
                <th className="text-right py-4 px-2 text-cyan-300 font-medium">Target Price</th>
                <th className="text-center py-4 px-2 text-cyan-300 font-medium">Probability</th>
                <th className="text-center py-4 px-2 text-cyan-300 font-medium">Timeframe</th>
                <th className="text-center py-4 px-2 text-cyan-300 font-medium">Confidence</th>
              </tr>
            </thead>
            <tbody>
              {quantumPredictions.map((prediction) => (
                <tr
                  key={prediction.asset}
                  className="border-b border-cyan-500/10 hover:bg-cyan-500/5 transition-colors"
                >
                  <td className="py-4 px-2">
                    <div className="font-medium text-cyan-100">{prediction.asset}</div>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <div
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs border ${
                        prediction.direction === "up"
                          ? "bg-emerald-500/20 border-emerald-400/30 text-emerald-300"
                          : "bg-red-500/20 border-red-400/30 text-red-300"
                      }`}
                    >
                      {prediction.direction === "up" ? (
                        <TrendingUp className="w-3 h-3" />
                      ) : (
                        <TrendingDown className="w-3 h-3" />
                      )}
                      {prediction.direction.toUpperCase()}
                    </div>
                  </td>
                  <td className="py-4 px-2 text-right text-cyan-300 font-medium">${prediction.target}</td>
                  <td className="py-4 px-2 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-16 h-2 bg-black/50 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
                          style={{ width: `${prediction.probability}%` }}
                        />
                      </div>
                      <span className="text-xs text-cyan-300">{prediction.probability}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <div className="px-2 py-1 rounded-full text-xs bg-purple-500/20 border border-purple-400/30 text-purple-300">
                      {prediction.timeframe}
                    </div>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-medium ${
                        prediction.probability > 80
                          ? "border-emerald-400 text-emerald-400"
                          : prediction.probability > 60
                            ? "border-amber-400 text-amber-400"
                            : "border-red-400 text-red-400"
                      }`}
                    >
                      {prediction.probability > 80 ? "H" : prediction.probability > 60 ? "M" : "L"}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Probability Matrix Visualization */}
      <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
        <h3 className="text-lg font-semibold text-cyan-100 mb-6 flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-400" />
          Quantum Probability Matrix
        </h3>

        <div className="relative h-64 bg-black/50 rounded-lg border border-cyan-500/10 overflow-hidden">
          {/* Matrix Grid */}
          <div className="absolute inset-0 grid grid-cols-10 grid-rows-8 gap-1 p-2">
            {randomMatrixCells.map((cell) => (
              <div
                key={cell.id}
                className={`rounded-sm transition-all duration-1000 ${cell.className}`}
                style={{
                  animationDelay: cell.animationDelay,
                }}
              />
            ))}
          </div>

          {/* Quantum Interference Patterns */}
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full">
              <defs>
                <radialGradient id="quantumInterference" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(0, 255, 255, 0.4)" />
                  <stop offset="50%" stopColor="rgba(128, 0, 255, 0.2)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>

              <circle cx="50%" cy="50%" r="30%" fill="url(#quantumInterference)" className="animate-pulse" />
              <circle
                cx="30%"
                cy="30%"
                r="20%"
                fill="url(#quantumInterference)"
                className="animate-pulse"
                style={{ animationDelay: "1s" }}
              />
              <circle
                cx="70%"
                cy="70%"
                r="25%"
                fill="url(#quantumInterference)"
                className="animate-pulse"
                style={{ animationDelay: "2s" }}
              />
            </svg>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-sm">
            <div className="text-cyan-300/70">Matrix Coherence: 94.7%</div>
            <div className="text-purple-300">Quantum State: {matrixState}</div>
          </div>
        </div>
      </div>
    </div>
  )
}