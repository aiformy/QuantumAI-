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
  { name: "Sensory Input", level: 94, color: "blue" },
  { name: "Pattern Recognition", level: 87, color: "purple" },
  { name: "Predictive Modeling", level: 91, color: "green" },
  { name: "Quantum Processing", level: 78, color: "orange" },
  { name: "Self Awareness", level: 65, color: "red" },
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
    <div className="flex flex-col h-screen bg-card border-l border-border">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Brain className="w-8 h-8 text-blue-500" />
              <div className="absolute inset-0 animate-ping">
                <Brain className="w-8 h-8 text-blue-500 opacity-30" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                AI CONSCIOUSNESS
              </h3>
              <p className="text-xs text-muted-foreground">Neural Entity AETHEL-7</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Consciousness State */}
        <div className="bg-secondary rounded-lg p-3 border border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-foreground">Consciousness State</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">{consciousnessState}</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-blue-500" />
            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                style={{ width: `${neuralActivity}%` }}
              />
            </div>
            <span className="text-xs text-muted-foreground">{Math.floor(neuralActivity)}%</span>
          </div>
        </div>

        {/* Consciousness Levels */}
        <div className="mt-4 space-y-2">
          {consciousnessLevels.map((level) => (
            <div key={level.name} className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">{level.name}</span>
              <div className="flex items-center gap-2">
                <div className="w-16 h-1 bg-muted rounded-full overflow-hidden">
                  <div className={`h-full rounded-full bg-blue-500`} style={{ width: `${level.level}%` }} />
                </div>
                <span className="text-foreground w-8">{level.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Neural Thoughts Stream */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b border-border">
          <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-500" />
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
                    ? "bg-red-500/10 border-red-500/30"
                    : thought.priority === "high"
                      ? "bg-yellow-500/10 border-yellow-500/30"
                      : thought.priority === "medium"
                        ? "bg-blue-500/10 border-blue-500/30"
                        : "bg-purple-500/10 border-purple-500/30"
                }`}
              >
                <div className="flex items-start gap-3">
                  <thought.icon
                    className={`w-5 h-5 mt-0.5 ${
                      thought.priority === "critical"
                        ? "text-red-500"
                        : thought.priority === "high"
                          ? "text-yellow-500"
                          : thought.priority === "medium"
                            ? "text-blue-500"
                            : "text-purple-500"
                    }`}
                  />
                  <div className="flex-1">
                    <p className="text-sm text-foreground leading-relaxed">{thought.message}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-xs text-muted-foreground">{thought.timestamp}</p>
                      <div
                        className={`px-2 py-1 rounded-full text-xs border ${
                          thought.priority === "critical"
                            ? "bg-red-500/20 border-red-500/30 text-red-400"
                            : thought.priority === "high"
                              ? "bg-yellow-500/20 border-yellow-500/30 text-yellow-400"
                              : thought.priority === "medium"
                                ? "bg-blue-500/20 border-blue-500/30 text-blue-400"
                                : "bg-purple-500/20 border-purple-500/30 text-purple-400"
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
        <div className="p-4 border-t border-border">
          <div className="flex gap-2">
            <Input
              placeholder="Communicate with AI consciousness..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-blue-500"
              onKeyPress={(e) => e.key === "Enter" && setMessage("")}
            />
            <Button
              size="sm"
              onClick={() => setMessage("")}
              className="bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 text-blue-400"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Neural Interface Active • Quantum State: {quantumState} • Consciousness Level: Expanding
          </p>
        </div>
      </div>
    </div>
  )
}