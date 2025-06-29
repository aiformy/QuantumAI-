"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Send, Brain, AlertTriangle, TrendingUp, TrendingDown, Zap, Shield, Settings } from "lucide-react"

interface AIAssistantProps {
  onClose: () => void
}

const notifications = [
  {
    id: 1,
    type: "warning",
    message: "Distribution pattern emerging. Caution advised on long positions.",
    timestamp: "2 min ago",
    icon: AlertTriangle,
    color: "text-amber-400",
  },
  {
    id: 2,
    type: "bullish",
    message: "Strong momentum detected in AAPL. Consider position scaling.",
    timestamp: "5 min ago",
    icon: TrendingUp,
    color: "text-emerald-400",
  },
  {
    id: 3,
    type: "bearish",
    message: "Market sentiment turning negative. Risk management protocols activated.",
    timestamp: "8 min ago",
    icon: TrendingDown,
    color: "text-red-400",
  },
]

const chatHistory = [
  {
    id: 1,
    type: "user",
    message: "What's the current market sentiment?",
    timestamp: "10:30 AM",
  },
  {
    id: 2,
    type: "ai",
    message:
      "Current market sentiment is cautiously optimistic. VIX is at 18.2, indicating moderate volatility. Key support levels are holding across major indices. I recommend maintaining current position sizes with tight stop losses.",
    timestamp: "10:30 AM",
  },
  {
    id: 3,
    type: "user",
    message: "Should I increase my TSLA position?",
    timestamp: "10:32 AM",
  },
  {
    id: 4,
    type: "ai",
    message:
      "TSLA is showing mixed signals. Technical analysis indicates resistance at $245. I suggest waiting for a breakout above this level or a pullback to $235 support before adding to your position. Current risk/reward ratio is not optimal.",
    timestamp: "10:32 AM",
  },
]

export function AIAssistant({ onClose }: AIAssistantProps) {
  const [message, setMessage] = useState("")
  const [activeModel, setActiveModel] = useState("GPT-4")
  const [localMode, setLocalMode] = useState(false)

  const models = ["GPT-4", "Claude", "Gemini", "Local"]

  return (
    <div className="w-80 border-l border-slate-800 bg-slate-950 flex flex-col">
      <div className="p-4 border-b border-slate-800">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-emerald-400" />
            <h3 className="font-semibold text-slate-100">AETHEL</h3>
            <Badge className="bg-emerald-900 text-emerald-300 text-xs">Oracle</Badge>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex gap-1 mb-3">
          {models.map((model) => (
            <Button
              key={model}
              variant={activeModel === model ? "default" : "ghost"}
              size="sm"
              className="text-xs"
              onClick={() => setActiveModel(model)}
            >
              {model}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant={localMode ? "default" : "ghost"}
            size="sm"
            className="text-xs"
            onClick={() => setLocalMode(!localMode)}
          >
            <Shield className="w-3 h-3 mr-1" />
            Local Mode
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="w-3 h-3" />
          </Button>
        </div>
      </div>

      <div className="p-4 border-b border-slate-800">
        <h4 className="text-sm font-medium text-slate-200 mb-2 flex items-center gap-2">
          <Zap className="w-4 h-4 text-amber-400" />
          Live Alerts
        </h4>
        <div className="space-y-2">
          {notifications.map((notification) => (
            <div key={notification.id} className="bg-slate-900 rounded-lg p-2">
              <div className="flex items-start gap-2">
                <notification.icon className={`w-4 h-4 mt-0.5 ${notification.color}`} />
                <div className="flex-1">
                  <p className="text-xs text-slate-300">{notification.message}</p>
                  <p className="text-xs text-slate-500 mt-1">{notification.timestamp}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {chatHistory.map((chat) => (
              <div key={chat.id} className={`flex ${chat.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    chat.type === "user" ? "bg-emerald-900 text-emerald-100" : "bg-slate-800 text-slate-200"
                  }`}
                >
                  <p className="text-sm">{chat.message}</p>
                  <p className="text-xs opacity-70 mt-1">{chat.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-slate-800">
          <div className="flex gap-2">
            <Input
              placeholder="Ask AETHEL anything..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-slate-900 border-slate-700"
              onKeyPress={(e) => e.key === "Enter" && setMessage("")}
            />
            <Button size="sm" onClick={() => setMessage("")}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            Powered by {activeModel} • {localMode ? "Local Inference" : "Cloud Processing"}
          </p>
        </div>
      </div>
    </div>
  )
}
