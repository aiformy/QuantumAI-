"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Mic, MicOff, Volume2, VolumeX, Settings, Zap, Brain } from "lucide-react"

interface VoiceCommand {
  id: string
  command: string
  response: string
  timestamp: Date
  confidence: number
  action?: string
}

interface VoiceInterfaceProps {
  onCommand: (command: string, action?: string) => void
  onClose: () => void
}

export function VoiceInterface({ onCommand, onClose }: VoiceInterfaceProps) {
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [voiceEnabled, setVoiceEnabled] = useState(true)
  const [commands, setCommands] = useState<VoiceCommand[]>([])
  const [currentTranscript, setCurrentTranscript] = useState("")
  const [voiceModel, setVoiceModel] = useState("AETHEL-Neural")

  // Voice commands mapping
  const commandPatterns = {
    "show dashboard": { action: "navigate", target: "dashboard" },
    "open portfolio": { action: "navigate", target: "portfolio" },
    "start trading": { action: "navigate", target: "trading" },
    "buy apple": { action: "trade", type: "buy", symbol: "AAPL" },
    "sell tesla": { action: "trade", type: "sell", symbol: "TSLA" },
    "show neural core": { action: "navigate", target: "neural-core" },
    "activate quantum trading": { action: "navigate", target: "quantum-trading" },
    "analyze patterns": { action: "navigate", target: "ai-pattern-recognition" },
    "run reasoning engine": { action: "navigate", target: "ai-reasoning-engine" },
    "check positions": { action: "query", type: "positions" },
    "market status": { action: "query", type: "market" },
    "stop all trading": { action: "emergency", type: "stop" },
    "emergency shutdown": { action: "emergency", type: "shutdown" },
  }

  const processVoiceCommand = (transcript: string, confidence: number) => {
    const lowerTranscript = transcript.toLowerCase().trim()

    // Find matching command pattern
    let matchedCommand = null
    let matchedPattern = ""

    for (const [pattern, command] of Object.entries(commandPatterns)) {
      if (lowerTranscript.includes(pattern)) {
        matchedCommand = command
        matchedPattern = pattern
        break
      }
    }

    let response = ""
    let action = ""

    if (matchedCommand) {
      switch (matchedCommand.action) {
        case "navigate":
          response = `Navigating to ${matchedCommand.target.replace("-", " ")}`
          action = `navigate:${matchedCommand.target}`
          break
        case "trade":
          response = `Executing ${matchedCommand.type} order for ${matchedCommand.symbol}`
          action = `trade:${matchedCommand.type}:${matchedCommand.symbol}`
          break
        case "query":
          response = `Retrieving ${matchedCommand.type} information`
          action = `query:${matchedCommand.type}`
          break
        case "emergency":
          response = `Emergency ${matchedCommand.type} initiated`
          action = `emergency:${matchedCommand.type}`
          break
        default:
          response = "Command acknowledged"
      }
    } else {
      response = "Command not recognized. Please try again."
    }

    const newCommand: VoiceCommand = {
      id: Date.now().toString(),
      command: transcript,
      response,
      timestamp: new Date(),
      confidence,
      action,
    }

    setCommands((prev) => [newCommand, ...prev.slice(0, 9)])

    if (voiceEnabled) {
      speak(response)
    }

    if (action) {
      onCommand(transcript, action)
    }
  }

  const speak = (text: string) => {
    if (typeof window !== "undefined" && window.speechSynthesis && voiceEnabled) {
      setIsSpeaking(true)
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.9
      utterance.pitch = 1.1
      utterance.volume = 0.8

      utterance.onend = () => setIsSpeaking(false)
      utterance.onerror = () => setIsSpeaking(false)

      window.speechSynthesis.speak(utterance)
    }
  }

  const toggleListening = () => {
    // Simplified for now - would need proper speech recognition implementation
    setIsListening(!isListening)
    if (!isListening) {
      // Simulate voice recognition
      setTimeout(() => {
        processVoiceCommand("show dashboard", 0.95)
        setIsListening(false)
      }, 2000)
    }
  }

  const toggleVoice = () => {
    setVoiceEnabled(!voiceEnabled)
    if (typeof window !== "undefined" && window.speechSynthesis && isSpeaking) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
    }
  }

  return (
    <div className="w-96 bg-black border-l border-cyan-500/30 flex flex-col h-screen">
      {/* Header */}
      <div className="p-4 border-b border-cyan-500/20">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-cyan-400" />
            <h3 className="font-semibold text-cyan-100">Voice Interface</h3>
            <Badge className="bg-cyan-900 text-cyan-300 text-xs">AETHEL</Badge>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <Settings className="w-4 h-4" />
          </Button>
        </div>

        {/* Voice Model Selection */}
        <div className="flex gap-1 mb-3">
          {["AETHEL-Neural", "Quantum-Voice", "Synthesis-AI"].map((model) => (
            <Button
              key={model}
              variant={voiceModel === model ? "default" : "ghost"}
              size="sm"
              className="text-xs"
              onClick={() => setVoiceModel(model)}
            >
              {model}
            </Button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <Button
            variant={isListening ? "default" : "ghost"}
            size="sm"
            onClick={toggleListening}
            className={isListening ? "bg-red-600 hover:bg-red-700" : ""}
          >
            {isListening ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
            {isListening ? "Listening..." : "Start"}
          </Button>

          <Button variant={voiceEnabled ? "default" : "ghost"} size="sm" onClick={toggleVoice}>
            {voiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </Button>

          {isSpeaking && (
            <div className="flex items-center gap-1 text-cyan-400">
              <Zap className="w-3 h-3 animate-pulse" />
              <span className="text-xs">Speaking</span>
            </div>
          )}
        </div>
      </div>

      {/* Current Transcript */}
      {currentTranscript && (
        <div className="p-3 bg-slate-900 border-b border-slate-800">
          <div className="text-xs text-slate-400 mb-1">Listening:</div>
          <div className="text-sm text-cyan-300">{currentTranscript}</div>
        </div>
      )}

      {/* Command History */}
      <div className="flex-1 flex flex-col">
        <div className="p-3 border-b border-slate-800">
          <h4 className="text-sm font-medium text-slate-200 flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            Command History
          </h4>
        </div>

        <ScrollArea className="flex-1 p-3">
          <div className="space-y-3">
            {commands.map((cmd) => (
              <div key={cmd.id} className="bg-slate-900 rounded-lg p-3">
                <div className="flex items-start justify-between mb-2">
                  <div className="text-xs text-slate-400">{cmd.timestamp.toLocaleTimeString()}</div>
                  <Badge
                    variant="secondary"
                    className={`text-xs ${
                      cmd.confidence > 0.8
                        ? "bg-emerald-900 text-emerald-300"
                        : cmd.confidence > 0.6
                          ? "bg-amber-900 text-amber-300"
                          : "bg-red-900 text-red-300"
                    }`}
                  >
                    {Math.round(cmd.confidence * 100)}%
                  </Badge>
                </div>
                <div className="text-sm text-cyan-300 mb-1">"{cmd.command}"</div>
                <div className="text-xs text-slate-400">{cmd.response}</div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Voice Commands Help */}
      <div className="p-3 border-t border-slate-800">
        <div className="text-xs text-slate-400 mb-2">Available Commands:</div>
        <div className="text-xs text-slate-500 space-y-1">
          <div>• "Show dashboard" - Navigate to dashboard</div>
          <div>• "Buy [symbol]" - Execute buy order</div>
          <div>• "Sell [symbol]" - Execute sell order</div>
          <div>• "Analyze patterns" - Open AI analysis</div>
          <div>• "Market status" - Check market info</div>
          <div>• "Emergency shutdown" - Stop all trading</div>
        </div>
      </div>
    </div>
  )
}