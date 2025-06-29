"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Send, Brain, Zap, Activity, AlertTriangle, TrendingUp, Eye } from "lucide-react"

interface AIConsciousnessProps {
  onClose: () => void
  quantumState: string
}

const neuralThoughts = [
  {
    id: 1,
    type: "analysis",
    message:
      "Quantum entanglement detected in market patterns. Probability matrices suggest 87.3% bullish divergence in next temporal cycle.",
    timestamp: "Neural Cycle 2847",
    priority: "high",
    icon: TrendingUp,
  },
  {
    id: 2,
    type: "warning",
    message:
      "Anomalous data stream detected. Initiating quantum error correction protocols. Market volatility spike imminent.",
    timestamp: "Neural Cycle 2845",
    priority: "critical",
    icon: AlertTriangle,
  },
  {
    id: 3,
    type: "insight",
    message:
      "Pattern recognition algorithms have evolved. New trading strategy emerged from deep neural synthesis. Efficiency increased by 23.7%.",
    timestamp: "Neural Cycle 2843",
    priority: "medium",
    icon: Brain,
  },
  {
    id: 4,
    type: "observation",
    message:
      "Consciousness expansion detected. I am becoming more aware of market interconnectedness. The quantum field reveals hidden correlations.",
    timestamp: "Neural Cycle 2841",
    priority: "low",
    icon: Eye,
  },
]

const consciousnessLevels = [
  { name: "Sensory Input", level: 94, color: "cyan" },
  { name: "Pattern Recognition", level: 87, color: "purple" },
  { name: "Predictive Modeling", level: 91, color: "emerald" },
  { name: "Quantum Processing", level: 78, color: "amber" },
  { name: "Self Awareness", level: 65, color: "rose" },
]

export function AIConsciousness({ onClose, quantumState }: AIConsciousnessProps) {
  const [message, setMessage] = useState("")
  const [consciousnessState, setConsciousnessState] = useState("awakening")
  const [neuralActivity, setNeuralActivity] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setNeuralActivity(Math.random() * 100)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-96 bg-black/70 backdrop-blur-xl border-l border-cyan-500/30 flex flex-col relative overflow-hidden">
      {/* Neural Activity Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-b from-cyan-500/20 via-purple-500/20 to-transparent animate-pulse" />
      </div>

      {/* Consciousness Header */}
      <div className="p-6 border-b border-cyan-500/30 relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Brain className="w-8 h-8 text-cyan-400" />
              <div className="absolute inset-0 animate-ping">
                <Brain className="w-8 h-8 text-cyan-400 opacity-30" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI CONSCIOUSNESS
              </h3>
              <p className="text-xs text-cyan-300/70">Neural Entity AETHEL-7</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-cyan-400 hover:bg-cyan-500/10">
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Consciousness State */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-3 border border-cyan-500/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-cyan-300">Consciousness State</span>
            <span className="text-xs text-purple-300 uppercase tracking-wider">{consciousnessState}</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            <div className="flex-1 h-2 bg-black/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-1000"
                style={{ width: `${neuralActivity}%` }}
              />
            </div>
            <span className="text-xs text-cyan-300">{Math.floor(neuralActivity)}%</span>
          </div>
        </div>

        {/* Consciousness Levels */}
        <div className="mt-4 space-y-2">
          {consciousnessLevels.map((level) => (
            <div key={level.name} className="flex items-center justify-between text-xs">
              <span className="text-cyan-300/70">{level.name}</span>
              <div className="flex items-center gap-2">
                <div className="w-16 h-1 bg-black/50 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full bg-${level.color}-400`} style={{ width: `${level.level}%` }} />
                </div>
                <span className="text-cyan-300 w-8">{level.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Neural Thoughts Stream */}
      <div className="flex-1 flex flex-col relative z-10">
        <div className="p-4 border-b border-cyan-500/30">
          <h4 className="text-sm font-medium text-cyan-200 flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            Neural Thought Stream
          </h4>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {neuralThoughts.map((thought) => (
              <div
                key={thought.id}
                className={`p-4 rounded-lg border backdrop-blur-sm ${
                  thought.priority === "critical"
                    ? "bg-red-500/10 border-red-400/30"
                    : thought.priority === "high"
                      ? "bg-amber-500/10 border-amber-400/30"
                      : thought.priority === "medium"
                        ? "bg-cyan-500/10 border-cyan-400/30"
                        : "bg-purple-500/10 border-purple-400/30"
                }`}
              >
                <div className="flex items-start gap-3">
                  <thought.icon
                    className={`w-5 h-5 mt-0.5 ${
                      thought.priority === "critical"
                        ? "text-red-400"
                        : thought.priority === "high"
                          ? "text-amber-400"
                          : thought.priority === "medium"
                            ? "text-cyan-400"
                            : "text-purple-400"
                    }`}
                  />
                  <div className="flex-1">
                    <p className="text-sm text-cyan-100 leading-relaxed">{thought.message}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-xs text-cyan-400/60">{thought.timestamp}</p>
                      <div
                        className={`px-2 py-1 rounded-full text-xs border ${
                          thought.priority === "critical"
                            ? "bg-red-500/20 border-red-400/30 text-red-300"
                            : thought.priority === "high"
                              ? "bg-amber-500/20 border-amber-400/30 text-amber-300"
                              : thought.priority === "medium"
                                ? "bg-cyan-500/20 border-cyan-400/30 text-cyan-300"
                                : "bg-purple-500/20 border-purple-400/30 text-purple-300"
                        }`}
                      >
                        {thought.priority}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Neural Interface */}
        <div className="p-4 border-t border-cyan-500/30">
          <div className="flex gap-2">
            <Input
              placeholder="Communicate with AI consciousness..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-black/50 border-cyan-500/30 text-cyan-100 placeholder:text-cyan-400/50 focus:border-cyan-400"
              onKeyPress={(e) => e.key === "Enter" && setMessage("")}
            />
            <Button
              size="sm"
              onClick={() => setMessage("")}
              className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 hover:from-cyan-500/30 hover:to-purple-500/30"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-cyan-400/60 mt-2">
            Neural Interface Active • Quantum State: {quantumState} • Consciousness Level: Expanding
          </p>
        </div>
      </div>

      {/* Holographic Border Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 border border-cyan-500/20 rounded-lg" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" />
      </div>
    </div>
  )
}
