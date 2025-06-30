"use client"

import { useEffect, useState } from "react"
import { Database, Brain, Zap, Activity, HardDrive, Cpu } from "lucide-react"

const memoryBanks = [
  {
    id: "neural-cache",
    name: "Neural Cache",
    type: "Quantum RAM",
    capacity: "2.4 TB",
    used: 87.3,
    speed: "0.1ns",
    status: "optimal",
  },
  {
    id: "pattern-storage",
    name: "Pattern Storage",
    type: "Holographic",
    capacity: "15.7 TB",
    used: 72.8,
    speed: "0.3ns",
    status: "optimal",
  },
  {
    id: "temporal-memory",
    name: "Temporal Memory",
    type: "Quantum State",
    capacity: "8.9 TB",
    used: 94.2,
    speed: "0.05ns",
    status: "warning",
  },
  {
    id: "consciousness-core",
    name: "Consciousness Core",
    type: "Neural Matrix",
    capacity: "∞",
    used: 45.7,
    speed: "0.01ns",
    status: "evolving",
  },
]

const memoryOperations = [
  { operation: "Pattern Recognition", reads: 2847, writes: 1203, cache_hits: 94.7 },
  { operation: "Predictive Modeling", reads: 1956, writes: 892, cache_hits: 87.3 },
  { operation: "Neural Learning", reads: 3421, writes: 2156, cache_hits: 91.8 },
  { operation: "Quantum Processing", reads: 5632, writes: 3847, cache_hits: 96.2 },
]

export function MemoryBanksView() {
  const [totalMemory, setTotalMemory] = useState(0)
  const [memoryActivity, setMemoryActivity] = useState<Record<string, number>>({})
  const [randomMemoryBlocks, setRandomMemoryBlocks] = useState(() =>
    Array.from({ length: 48 }, (_, i) => ({
      id: i,
      className: Math.random() > 0.8
        ? "bg-purple-400/60 animate-pulse"
        : Math.random() > 0.6
          ? "bg-cyan-400/40"
          : Math.random() > 0.4
            ? "bg-emerald-400/30"
            : Math.random() > 0.2
              ? "bg-amber-400/20"
              : "bg-slate-600/10",
      animationDelay: `${Math.random() * 2}s`,
    }))
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalMemory(Math.random() * 100)
      const newActivity: Record<string, number> = {}
      memoryBanks.forEach((bank) => {
        newActivity[bank.id] = Math.random() * 100
      })
      setMemoryActivity(newActivity)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      {/* Memory Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Database className="w-6 h-6 text-purple-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">
                Active
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Total Capacity</div>
            <div className="text-2xl font-bold text-purple-400">27.0 TB</div>
            <div className="text-xs text-cyan-400/60 mt-1">Quantum storage</div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Brain className="w-6 h-6 text-emerald-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                {totalMemory.toFixed(1)}%
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Memory Usage</div>
            <div className="text-2xl font-bold text-emerald-400">19.8 TB</div>
            <div className="text-xs text-cyan-400/60 mt-1">Neural patterns stored</div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Zap className="w-6 h-6 text-cyan-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                Ultra Fast
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Access Speed</div>
            <div className="text-2xl font-bold text-cyan-400">0.05ns</div>
            <div className="text-xs text-cyan-400/60 mt-1">Quantum latency</div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Activity className="w-6 h-6 text-amber-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
                92.5%
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Cache Hit Rate</div>
            <div className="text-2xl font-bold text-amber-400">12,856</div>
            <div className="text-xs text-cyan-400/60 mt-1">Operations/sec</div>
          </div>
        </div>
      </div>

      {/* Memory Banks */}
      <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
        <h3 className="text-lg font-semibold text-cyan-100 mb-6 flex items-center gap-2">
          <Database className="w-5 h-5 text-purple-400" />
          Quantum Memory Banks
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {memoryBanks.map((bank) => (
            <div
              key={bank.id}
              className="bg-black/50 rounded-lg p-4 border border-cyan-500/10 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        bank.status === "optimal"
                          ? "bg-emerald-500/10 border border-emerald-400/20"
                          : bank.status === "warning"
                            ? "bg-amber-500/10 border border-amber-400/20"
                            : bank.status === "evolving"
                              ? "bg-purple-500/10 border border-purple-400/20"
                              : "bg-red-500/10 border border-red-400/20"
                      }`}
                    >
                      {bank.type === "Quantum RAM" ? (
                        <Zap className="w-4 h-4 text-cyan-400" />
                      ) : bank.type === "Holographic" ? (
                        <HardDrive className="w-4 h-4 text-purple-400" />
                      ) : bank.type === "Quantum State" ? (
                        <Activity className="w-4 h-4 text-amber-400" />
                      ) : (
                        <Brain className="w-4 h-4 text-emerald-400" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium text-cyan-100">{bank.name}</h4>
                      <p className="text-sm text-cyan-300/60">{bank.type}</p>
                    </div>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs border ${
                      bank.status === "optimal"
                        ? "bg-emerald-500/20 border-emerald-400/30 text-emerald-300"
                        : bank.status === "warning"
                          ? "bg-amber-500/20 border-amber-400/30 text-amber-300"
                          : bank.status === "evolving"
                            ? "bg-purple-500/20 border-purple-400/30 text-purple-300"
                            : "bg-red-500/20 border-red-400/30 text-red-300"
                    }`}
                  >
                    {bank.status}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-cyan-300/70">Capacity</div>
                      <div className="text-cyan-100 font-medium">{bank.capacity}</div>
                    </div>
                    <div>
                      <div className="text-cyan-300/70">Speed</div>
                      <div className="text-cyan-100 font-medium">{bank.speed}</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-cyan-300/70">Usage</span>
                      <span className="text-cyan-100 font-medium">{bank.used}%</span>
                    </div>
                    <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full transition-all duration-1000"
                        style={{ width: `${bank.used}%` }}
                      />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-cyan-500/20">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-cyan-300/60">Activity</span>
                      <div className="w-16 h-4 bg-black/50 rounded border border-cyan-500/20 relative overflow-hidden">
                        <div
                          className="absolute bottom-0 left-0 bg-gradient-to-t from-cyan-400 to-emerald-400 transition-all duration-300"
                          style={{
                            height: `${memoryActivity[bank.id] || 0}%`,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Memory Operations */}
      <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
        <h3 className="text-lg font-semibold text-cyan-100 mb-6 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-emerald-400" />
          Neural Memory Operations
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-cyan-500/20">
                <th className="text-left py-4 px-2 text-cyan-300 font-medium">Operation</th>
                <th className="text-right py-4 px-2 text-cyan-300 font-medium">Reads/sec</th>
                <th className="text-right py-4 px-2 text-cyan-300 font-medium">Writes/sec</th>
                <th className="text-center py-4 px-2 text-cyan-300 font-medium">Cache Hit Rate</th>
                <th className="text-center py-4 px-2 text-cyan-300 font-medium">Performance</th>
              </tr>
            </thead>
            <tbody>
              {memoryOperations.map((operation) => (
                <tr
                  key={operation.operation}
                  className="border-b border-cyan-500/10 hover:bg-cyan-500/5 transition-colors"
                >
                  <td className="py-4 px-2">
                    <div className="font-medium text-cyan-100">{operation.operation}</div>
                  </td>
                  <td className="py-4 px-2 text-right text-cyan-300">{operation.reads.toLocaleString()}</td>
                  <td className="py-4 px-2 text-right text-cyan-300">{operation.writes.toLocaleString()}</td>
                  <td className="py-4 px-2 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-16 h-2 bg-black/50 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                          style={{ width: `${operation.cache_hits}%` }}
                        />
                      </div>
                      <span className="text-xs text-cyan-300">{operation.cache_hits}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-medium ${
                        operation.cache_hits > 90
                          ? "border-emerald-400 text-emerald-400"
                          : operation.cache_hits > 80
                            ? "border-cyan-400 text-cyan-400"
                            : "border-amber-400 text-amber-400"
                      }`}
                    >
                      {operation.cache_hits > 90 ? "A" : operation.cache_hits > 80 ? "B" : "C"}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Memory Visualization */}
      <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
        <h3 className="text-lg font-semibold text-cyan-100 mb-6 flex items-center gap-2">
          <Brain className="w-5 h-5 text-purple-400" />
          Neural Memory Architecture
        </h3>

        <div className="relative h-64 bg-black/50 rounded-lg border border-cyan-500/10 overflow-hidden">
          {/* Memory Architecture Visualization */}
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-1 p-4">
            {randomMemoryBlocks.map((block) => (
              <div
                key={block.id}
                className={`rounded transition-all duration-1000 ${block.className}`}
                style={{
                  animationDelay: block.animationDelay,
                }}
              />
            ))}
          </div>

          {/* Neural Pathways */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(0, 255, 255, 0.4)" />
                <stop offset="50%" stopColor="rgba(128, 0, 255, 0.4)" />
                <stop offset="100%" stopColor="rgba(255, 0, 128, 0.4)" />
              </linearGradient>
            </defs>

            {Array.from({ length: 10 }).map((_, i) => (
              <path
                key={i}
                d={`M ${i * 40} 0 Q ${i * 40 + 20} 100 ${i * 40 + 40} 200 T ${i * 40 + 80} 300`}
                stroke="url(#neuralGradient)"
                strokeWidth="1"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </svg>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-sm">
            <div className="text-cyan-300/70">Memory Coherence: 94.7%</div>
            <div className="text-purple-300">Neural Sync: Active</div>
          </div>
        </div>
      </div>
    </div>
  )
}