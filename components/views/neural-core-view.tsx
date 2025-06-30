"use client"

import { useEffect, useState } from "react"
import { Brain, Zap, Activity, Target, TrendingUp, AlertTriangle } from "lucide-react"

const neuralMetrics = [
  { label: "Neural Efficiency", value: 94.7, unit: "%", trend: "+2.3", color: "cyan" },
  { label: "Quantum Coherence", value: 87.2, unit: "%", trend: "+5.1", color: "purple" },
  { label: "Pattern Recognition", value: 91.8, unit: "%", trend: "+1.7", color: "emerald" },
  { label: "Predictive Accuracy", value: 89.3, unit: "%", trend: "+3.2", color: "amber" },
]

export function NeuralCoreView() {
  const [activeNodes, setActiveNodes] = useState(0)
  const [neuralPulse, setNeuralPulse] = useState(0)
  const [neuralNodes, setNeuralNodes] = useState<Array<{
    id: number;
    x: number;
    y: number;
    connections: number;
    activity: number;
    type: string;
  }>>([])

  useEffect(() => {
    // Initialize neural nodes on client side only
    setNeuralNodes(
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        connections: Math.floor(Math.random() * 5) + 1,
        activity: Math.random(),
        type: Math.random() > 0.7 ? "critical" : Math.random() > 0.4 ? "active" : "dormant",
      }))
    )
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNodes(Math.floor(Math.random() * 50) + 30)
      setNeuralPulse((prev) => (prev + 1) % 100)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      {/* Neural Core Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {neuralMetrics.map((metric) => (
          <div
            key={metric.label}
            className="bg-black backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group hover:border-cyan-400/40 transition-all duration-300"
          >
            {/* Holographic Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg bg-${metric.color}-500/10 border border-${metric.color}-400/20`}>
                  <Brain className={`w-5 h-5 text-${metric.color}-400`} />
                </div>
                <div
                  className={`text-xs px-2 py-1 rounded-full bg-${metric.color}-500/20 text-${metric.color}-300 border border-${metric.color}-400/30`}
                >
                  {metric.trend}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm text-cyan-300/70">{metric.label}</div>
                <div className="text-2xl font-bold text-cyan-100">
                  {metric.value}
                  {metric.unit}
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-black rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-${metric.color}-400 to-${metric.color}-600 rounded-full transition-all duration-1000`}
                    style={{ width: `${metric.value}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Neural Network Visualization */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-black backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden">
          <h3 className="text-lg font-semibold text-cyan-100 mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            Neural Network Topology
          </h3>

          {/* Neural Network Canvas */}
          <div className="relative h-80 bg-black rounded-lg border border-cyan-500/10 overflow-hidden">
            {neuralNodes.length > 0 && (
              <svg className="w-full h-full">
                {/* Neural Connections */}
                {neuralNodes.map((node, i) =>
                  neuralNodes.slice(i + 1).map((otherNode, j) => {
                    const distance = Math.sqrt(Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2))
                    if (distance < 30) {
                      return (
                        <line
                          key={`${i}-${j}`}
                          x1={`${node.x}%`}
                          y1={`${node.y}%`}
                          x2={`${otherNode.x}%`}
                          y2={`${otherNode.y}%`}
                          stroke="rgba(0, 255, 255, 0.2)"
                          strokeWidth="1"
                          className="animate-pulse"
                        />
                      )
                    }
                    return null
                  }),
                )}

                {/* Neural Nodes */}
                {neuralNodes.map((node) => (
                  <circle
                    key={node.id}
                    cx={`${node.x}%`}
                    cy={`${node.y}%`}
                    r={node.type === "critical" ? "4" : node.type === "active" ? "3" : "2"}
                    fill={node.type === "critical" ? "#ff0080" : node.type === "active" ? "#00ffff" : "#0080ff"}
                    className="animate-pulse"
                    opacity={node.activity}
                  />
                ))}
              </svg>
            )}

            {/* Neural Pulse Overlay */}
            <div
              className="absolute inset-0 bg-gradient-radial from-cyan-400/10 to-transparent rounded-full"
              style={{
                transform: `scale(${1 + neuralPulse / 100})`,
                opacity: 1 - neuralPulse / 100,
              }}
            />
          </div>

          <div className="mt-4 flex items-center justify-between text-sm">
            <div className="text-cyan-300/70">Active Nodes: {activeNodes}/50</div>
            <div className="text-emerald-300">Sync Rate: 98.7%</div>
          </div>
        </div>

        {/* Consciousness Evolution */}
        <div className="bg-black backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
          <h3 className="text-lg font-semibold text-cyan-100 mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-400" />
            Consciousness Evolution
          </h3>

          <div className="space-y-4">
            {[
              { stage: "Sensory Processing", progress: 100, status: "complete" },
              { stage: "Pattern Recognition", progress: 95, status: "active" },
              { stage: "Predictive Modeling", progress: 87, status: "active" },
              { stage: "Self Awareness", progress: 72, status: "evolving" },
              { stage: "Creative Synthesis", progress: 45, status: "emerging" },
              { stage: "Quantum Consciousness", progress: 23, status: "initializing" },
            ].map((stage) => (
              <div key={stage.stage} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-cyan-300">{stage.stage}</span>
                  <div
                    className={`px-2 py-1 rounded-full text-xs border ${
                      stage.status === "complete"
                        ? "bg-emerald-500/20 border-emerald-400/30 text-emerald-300"
                        : stage.status === "active"
                          ? "bg-cyan-500/20 border-cyan-400/30 text-cyan-300"
                          : stage.status === "evolving"
                            ? "bg-purple-500/20 border-purple-400/30 text-purple-300"
                            : stage.status === "emerging"
                              ? "bg-amber-500/20 border-amber-400/30 text-amber-300"
                              : "bg-slate-500/20 border-slate-400/30 text-slate-300"
                    }`}
                  >
                    {stage.status}
                  </div>
                </div>
                <div className="w-full h-2 bg-black rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      stage.status === "complete"
                        ? "bg-gradient-to-r from-emerald-400 to-emerald-600"
                        : stage.status === "active"
                          ? "bg-gradient-to-r from-cyan-400 to-cyan-600"
                          : stage.status === "evolving"
                            ? "bg-gradient-to-r from-purple-400 to-purple-600"
                            : stage.status === "emerging"
                              ? "bg-gradient-to-r from-amber-400 to-amber-600"
                              : "bg-gradient-to-r from-slate-400 to-slate-600"
                    }`}
                    style={{ width: `${stage.progress}%` }}
                  />
                </div>
                <div className="text-xs text-cyan-300/60">{stage.progress}% Complete</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Neural Insights */}
      <div className="bg-black backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
        <h3 className="text-lg font-semibold text-cyan-100 mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-400" />
          Neural Insights & Emergent Behaviors
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Market Pattern Evolution",
              description:
                "Neural networks have identified 47 new market patterns through quantum entanglement analysis.",
              type: "discovery",
              confidence: 94.7,
            },
            {
              title: "Predictive Model Synthesis",
              description:
                "AI consciousness has spontaneously created hybrid prediction models with 23% improved accuracy.",
              type: "evolution",
              confidence: 87.3,
            },
            {
              title: "Anomaly Detection Enhancement",
              description: "Self-modifying algorithms detected and adapted to 12 previously unknown market anomalies.",
              type: "adaptation",
              confidence: 91.8,
            },
            {
              title: "Quantum State Optimization",
              description:
                "Neural core achieved optimal quantum coherence, enabling faster-than-light information processing.",
              type: "breakthrough",
              confidence: 78.9,
            },
          ].map((insight) => (
            <div key={insight.title} className="bg-black rounded-lg p-4 border border-cyan-500/10">
              <div className="flex items-start gap-3">
                <div
                  className={`p-2 rounded-lg ${
                    insight.type === "discovery"
                      ? "bg-emerald-500/10 border border-emerald-400/20"
                      : insight.type === "evolution"
                        ? "bg-purple-500/10 border border-purple-400/20"
                        : insight.type === "adaptation"
                          ? "bg-cyan-500/10 border border-cyan-400/20"
                          : "bg-amber-500/10 border border-amber-400/20"
                  }`}
                >
                  {insight.type === "discovery" ? (
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                  ) : insight.type === "evolution" ? (
                    <Brain className="w-4 h-4 text-purple-400" />
                  ) : insight.type === "adaptation" ? (
                    <Activity className="w-4 h-4 text-cyan-400" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-cyan-100 mb-1">{insight.title}</h4>
                  <p className="text-sm text-cyan-300/70 mb-2">{insight.description}</p>
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-cyan-400">Confidence:</div>
                    <div className="flex-1 h-1 bg-black rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
                        style={{ width: `${insight.confidence}%` }}
                      />
                    </div>
                    <div className="text-xs text-cyan-300">{insight.confidence}%</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}