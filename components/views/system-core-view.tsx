"use client"

import { useEffect, useState } from "react"
import { Cpu, Zap, Activity, Thermometer, Gauge, Settings } from "lucide-react"

const systemMetrics = [
  { name: "Quantum Processors", value: 94.7, unit: "%", status: "optimal" },
  { name: "Neural Cores", value: 87.3, unit: "%", status: "optimal" },
  { name: "Memory Controllers", value: 91.8, unit: "%", status: "optimal" },
  { name: "I/O Subsystems", value: 78.9, unit: "%", status: "warning" },
]

const quantumCores = [
  { id: "QC-001", name: "Alpha Core", frequency: "4.7 QHz", temperature: 0.003, load: 94.7, status: "active" },
  { id: "QC-002", name: "Beta Core", frequency: "4.9 QHz", temperature: 0.001, load: 87.3, status: "active" },
  { id: "QC-003", name: "Gamma Core", frequency: "5.1 QHz", temperature: 0.002, load: 91.8, status: "active" },
  { id: "QC-004", name: "Delta Core", frequency: "4.8 QHz", temperature: 0.004, load: 78.9, status: "standby" },
]

export function SystemCoreView() {
  const [systemLoad, setSystemLoad] = useState(0)
  const [quantumCoherence, setQuantumCoherence] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSystemLoad(80 + Math.random() * 20)
      setQuantumCoherence(90 + Math.random() * 10)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      {/* System Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Cpu className="w-6 h-6 text-cyan-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                Online
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">System Load</div>
            <div className="text-2xl font-bold text-cyan-400">{systemLoad.toFixed(1)}%</div>
            <div className="text-xs text-cyan-400/60 mt-1">Quantum processing</div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Zap className="w-6 h-6 text-purple-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">
                Stable
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Quantum Coherence</div>
            <div className="text-2xl font-bold text-purple-400">{quantumCoherence.toFixed(1)}%</div>
            <div className="text-xs text-cyan-400/60 mt-1">Field stability</div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Thermometer className="w-6 h-6 text-emerald-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                Optimal
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Core Temperature</div>
            <div className="text-2xl font-bold text-emerald-400">0.002K</div>
            <div className="text-xs text-cyan-400/60 mt-1">Near absolute zero</div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Activity className="w-6 h-6 text-amber-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
                99.97%
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Uptime</div>
            <div className="text-2xl font-bold text-amber-400">247d</div>
            <div className="text-xs text-cyan-400/60 mt-1">Continuous operation</div>
          </div>
        </div>
      </div>

      {/* Quantum Cores */}
      <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
        <h3 className="text-lg font-semibold text-cyan-100 mb-6 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-cyan-400" />
          Quantum Processing Cores
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {quantumCores.map((core) => (
            <div
              key={core.id}
              className="bg-black/50 rounded-lg p-4 border border-cyan-500/10 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        core.status === "active"
                          ? "bg-emerald-500/10 border border-emerald-400/20"
                          : "bg-amber-500/10 border border-amber-400/20"
                      }`}
                    >
                      <Cpu className={`w-4 h-4 ${core.status === "active" ? "text-emerald-400" : "text-amber-400"}`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-cyan-100">{core.name}</h4>
                      <p className="text-sm text-cyan-300/60">{core.id}</p>
                    </div>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs border ${
                      core.status === "active"
                        ? "bg-emerald-500/20 border-emerald-400/30 text-emerald-300"
                        : "bg-amber-500/20 border-amber-400/30 text-amber-300"
                    }`}
                  >
                    {core.status}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-cyan-300/70">Frequency</div>
                      <div className="text-cyan-100 font-medium">{core.frequency}</div>
                    </div>
                    <div>
                      <div className="text-cyan-300/70">Temperature</div>
                      <div className="text-cyan-100 font-medium">{core.temperature}K</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-cyan-300/70">Load</span>
                      <span className="text-cyan-100 font-medium">{core.load}%</span>
                    </div>
                    <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full transition-all duration-1000"
                        style={{ width: `${core.load}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* System Metrics */}
      <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
        <h3 className="text-lg font-semibold text-cyan-100 mb-6 flex items-center gap-2">
          <Gauge className="w-5 h-5 text-purple-400" />
          System Performance Metrics
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {systemMetrics.map((metric) => (
            <div key={metric.name} className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-cyan-300">{metric.name}</span>
                <div
                  className={`px-2 py-1 rounded-full text-xs border ${
                    metric.status === "optimal"
                      ? "bg-emerald-500/20 border-emerald-400/30 text-emerald-300"
                      : "bg-amber-500/20 border-amber-400/30 text-amber-300"
                  }`}
                >
                  {metric.status}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-3 bg-black/50 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      metric.status === "optimal"
                        ? "bg-gradient-to-r from-emerald-400 to-cyan-400"
                        : "bg-gradient-to-r from-amber-400 to-orange-400"
                    }`}
                    style={{ width: `${metric.value}%` }}
                  />
                </div>
                <span className="text-cyan-100 font-medium min-w-[60px]">
                  {metric.value}
                  {metric.unit}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* System Architecture */}
      <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
        <h3 className="text-lg font-semibold text-cyan-100 mb-6 flex items-center gap-2">
          <Settings className="w-5 h-5 text-amber-400" />
          Quantum System Architecture
        </h3>

        <div className="relative h-64 bg-black/50 rounded-lg border border-cyan-500/10 overflow-hidden">
          {/* System Architecture Visualization */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Central Processing Unit */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/30 to-purple-400/30 border-2 border-cyan-400 flex items-center justify-center">
                  <Cpu className="w-8 h-8 text-cyan-400" />
                </div>
              </div>

              {/* Quantum Cores */}
              {[0, 1, 2, 3].map((i) => {
                const angle = i * 90 * (Math.PI / 180)
                const radius = 80
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius

                return (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                    }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 border border-emerald-400 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    {/* Connection Lines */}
                    <svg className="absolute top-1/2 left-1/2 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                      <line
                        x1="50%"
                        y1="50%"
                        x2={`${50 - (x / 80) * 50}%`}
                        y2={`${50 - (y / 80) * 50}%`}
                        stroke="rgba(0, 255, 255, 0.3)"
                        strokeWidth="1"
                        className="animate-pulse"
                      />
                    </svg>
                  </div>
                )
              })}

              {/* Memory Banks */}
              {[0, 1, 2, 3, 4, 5].map((i) => {
                const angle = i * 60 * (Math.PI / 180)
                const radius = 120
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius

                return (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                    }}
                  >
                    <div className="w-4 h-4 rounded bg-gradient-to-br from-purple-400/30 to-amber-400/30 border border-purple-400" />
                  </div>
                )
              })}
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-sm">
            <div className="text-cyan-300/70">Architecture: Quantum Mesh</div>
            <div className="text-emerald-300">Coherence: {quantumCoherence.toFixed(1)}%</div>
          </div>
        </div>
      </div>
    </div>
  )
}
