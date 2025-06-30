"use client"

import { useEffect, useState } from "react"
import { TrendingUp, Zap, Target, Activity, Brain } from "lucide-react"

const quantumPositions = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    quantity: 100,
    entryPrice: 165.3,
    currentPrice: 175.5,
    quantumState: "entangled",
    probability: 87.3,
    pnl: 1020,
    pnlPercent: 6.17,
    dimension: "Alpha-7",
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    quantity: 50,
    entryPrice: 250.8,
    currentPrice: 242.3,
    quantumState: "superposition",
    probability: 72.1,
    pnl: -425,
    pnlPercent: -3.39,
    dimension: "Beta-3",
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corp.",
    quantity: 25,
    entryPrice: 420.5,
    currentPrice: 445.2,
    quantumState: "coherent",
    probability: 94.7,
    pnl: 617.5,
    pnlPercent: 5.87,
    dimension: "Gamma-9",
  },
]

const quantumStrategies = [
  {
    name: "Quantum Entanglement Arbitrage",
    status: "active",
    dimension: "Multi-dimensional",
    efficiency: 94.7,
    trades: 247,
    pnl: 12450,
    quantumCoherence: 87.3,
  },
  {
    name: "Probability Wave Collapse",
    status: "computing",
    dimension: "Temporal-4D",
    efficiency: 78.9,
    trades: 156,
    pnl: 8920,
    quantumCoherence: 72.1,
  },
  {
    name: "Neural Superposition Trading",
    status: "active",
    dimension: "Consciousness-5D",
    efficiency: 91.2,
    trades: 189,
    pnl: 15670,
    quantumCoherence: 95.8,
  },
]

export function QuantumTradingView() {
  const [quantumField, setQuantumField] = useState(0)
  const [totalPnL, setTotalPnL] = useState(0)
  const [randomQuantumParticles, setRandomQuantumParticles] = useState<Array<{
    id: number;
    left: string;
    top: string;
    animationDelay: string;
    animationDuration: string;
  }>>([])
  const [quantumWaves, setQuantumWaves] = useState<Array<{
    id: number;
    path: string;
    animationDelay: string;
  }>>([])

  useEffect(() => {
    // Initialize random quantum particles on client side only
    setRandomQuantumParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${2 + Math.random() * 2}s`,
      }))
    )

    // Initialize quantum waves
    setQuantumWaves(
      Array.from({ length: 5 }, (_, i) => ({
        id: i,
        path: `M 0 ${100 + i * 20} Q 100 ${80 + i * 20} 200 ${100 + i * 20} T 400 ${100 + i * 20}`,
        animationDelay: `${i * 0.5}s`,
      }))
    )
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setQuantumField(Math.random() * 100)
      setTotalPnL(quantumPositions.reduce((sum, pos) => sum + pos.pnl, 0))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      {/* Quantum Trading Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-black backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-6 h-6 text-emerald-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                +12.7%
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Quantum P&L</div>
            <div className="text-2xl font-bold text-emerald-400">+${totalPnL.toLocaleString()}</div>
            <div className="text-xs text-cyan-400/60 mt-1">Across all dimensions</div>
          </div>
        </div>

        <div className="bg-black backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Brain className="w-6 h-6 text-purple-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">
                Active
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Quantum Strategies</div>
            <div className="text-2xl font-bold text-purple-400">3/4</div>
            <div className="text-xs text-cyan-400/60 mt-1">Neural algorithms running</div>
          </div>
        </div>

        <div className="bg-black backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Zap className="w-6 h-6 text-amber-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
                Optimal
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Quantum Field</div>
            <div className="text-2xl font-bold text-amber-400">{quantumField.toFixed(1)}%</div>
            <div className="text-xs text-cyan-400/60 mt-1">Coherence level</div>
          </div>
        </div>

        <div className="bg-black backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Target className="w-6 h-6 text-cyan-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                89.7%
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Success Rate</div>
            <div className="text-2xl font-bold text-cyan-400">592</div>
            <div className="text-xs text-cyan-400/60 mt-1">Quantum trades executed</div>
          </div>
        </div>
      </div>

      {/* Quantum Positions */}
      <div className="bg-black backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
        <h3 className="text-lg font-semibold text-cyan-100 mb-6 flex items-center gap-2">
          <Activity className="w-5 h-5 text-cyan-400" />
          Quantum Positions Matrix
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-cyan-500/20">
                <th className="text-left py-4 px-2 text-cyan-300 font-medium">Symbol</th>
                <th className="text-right py-4 px-2 text-cyan-300 font-medium">Quantity</th>
                <th className="text-right py-4 px-2 text-cyan-300 font-medium">Entry</th>
                <th className="text-right py-4 px-2 text-cyan-300 font-medium">Current</th>
                <th className="text-center py-4 px-2 text-cyan-300 font-medium">Quantum State</th>
                <th className="text-center py-4 px-2 text-cyan-300 font-medium">Probability</th>
                <th className="text-right py-4 px-2 text-cyan-300 font-medium">P&L</th>
                <th className="text-center py-4 px-2 text-cyan-300 font-medium">Dimension</th>
              </tr>
            </thead>
            <tbody>
              {quantumPositions.map((position) => (
                <tr key={position.symbol} className="border-b border-cyan-500/10 hover:bg-cyan-500/5 transition-colors">
                  <td className="py-4 px-2">
                    <div>
                      <div className="font-medium text-cyan-100">{position.symbol}</div>
                      <div className="text-sm text-cyan-300/60">{position.name}</div>
                    </div>
                  </td>
                  <td className="py-4 px-2 text-right text-cyan-300">{position.quantity}</td>
                  <td className="py-4 px-2 text-right text-cyan-300">${position.entryPrice.toFixed(2)}</td>
                  <td className="py-4 px-2 text-right text-cyan-300">${position.currentPrice.toFixed(2)}</td>
                  <td className="py-4 px-2 text-center">
                    <div
                      className={`px-3 py-1 rounded-full text-xs border ${
                        position.quantumState === "entangled"
                          ? "bg-purple-500/20 border-purple-400/30 text-purple-300"
                          : position.quantumState === "superposition"
                            ? "bg-amber-500/20 border-amber-400/30 text-amber-300"
                            : "bg-emerald-500/20 border-emerald-400/30 text-emerald-300"
                      }`}
                    >
                      {position.quantumState}
                    </div>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-12 h-2 bg-black/50 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
                          style={{ width: `${position.probability}%` }}
                        />
                      </div>
                      <span className="text-xs text-cyan-300">{position.probability}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-2 text-right">
                    <div className={`${position.pnl >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                      {position.pnl >= 0 ? "+" : ""}${position.pnl.toFixed(2)}
                    </div>
                    <div className={`text-sm ${position.pnlPercent >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                      {position.pnlPercent >= 0 ? "+" : ""}
                      {position.pnlPercent.toFixed(2)}%
                    </div>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <div className="px-2 py-1 rounded-full text-xs bg-cyan-500/20 border border-cyan-400/30 text-cyan-300">
                      {position.dimension}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quantum Strategies */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {quantumStrategies.map((strategy) => (
          <div
            key={strategy.name}
            className="bg-black backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <Brain className="w-6 h-6 text-cyan-400" />
                <div
                  className={`px-3 py-1 rounded-full text-xs border ${
                    strategy.status === "active"
                      ? "bg-emerald-500/20 border-emerald-400/30 text-emerald-300"
                      : "bg-amber-500/20 border-amber-400/30 text-amber-300"
                  }`}
                >
                  {strategy.status}
                </div>
              </div>

              <h4 className="font-medium text-cyan-100 mb-2">{strategy.name}</h4>
              <div className="text-sm text-cyan-300/60 mb-4">{strategy.dimension}</div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-cyan-300/70">Efficiency</span>
                  <span className="text-cyan-100 font-medium">{strategy.efficiency}%</span>
                </div>

                <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full transition-all duration-1000"
                    style={{ width: `${strategy.efficiency}%` }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-cyan-300/70">Trades</div>
                    <div className="text-cyan-100 font-medium">{strategy.trades}</div>
                  </div>
                  <div>
                    <div className="text-cyan-300/70">P&L</div>
                    <div className="text-emerald-400 font-medium">+${strategy.pnl.toLocaleString()}</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-cyan-500/20">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-cyan-300/60">Quantum Coherence</span>
                    <span className="text-xs text-purple-300">{strategy.quantumCoherence}%</span>
                  </div>
                  <div className="mt-1 w-full h-1 bg-black/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
                      style={{ width: `${strategy.quantumCoherence}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quantum Field Visualization */}
      <div className="bg-black backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
        <h3 className="text-lg font-semibold text-cyan-100 mb-6 flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-400" />
          Quantum Field Dynamics
        </h3>

        <div className="relative h-64 bg-black rounded-lg border border-cyan-500/10 overflow-hidden">
          {/* Quantum Field Visualization */}
          <div className="absolute inset-0">
            {randomQuantumParticles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-2 h-2 rounded-full bg-cyan-400 animate-pulse"
                style={{
                  left: particle.left,
                  top: particle.top,
                  animationDelay: particle.animationDelay,
                  animationDuration: particle.animationDuration,
                }}
              />
            ))}
          </div>

          {/* Quantum Waves */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0, 255, 255, 0.3)" />
                <stop offset="50%" stopColor="rgba(128, 0, 255, 0.3)" />
                <stop offset="100%" stopColor="rgba(255, 0, 128, 0.3)" />
              </linearGradient>
            </defs>

            {quantumWaves.map((wave) => (
              <path
                key={wave.id}
                d={wave.path}
                stroke="url(#quantumGradient)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: wave.animationDelay }}
              />
            ))}
          </svg>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-sm">
            <div className="text-cyan-300/70">Field Strength: {quantumField.toFixed(1)}%</div>
            <div className="text-purple-300">Dimensional Stability: 94.7%</div>
          </div>
        </div>
      </div>
    </div>
  )
}