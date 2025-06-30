"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mic, X, Brain, Settings, Bell, Atom, Sparkles } from "lucide-react"
import { VoiceInterface } from "./voice-interface"
import { DashboardView } from "./views/dashboard-view"
import { PortfolioView } from "./views/portfolio-view"
import { TradingView } from "./views/trading-view"
import { OrderBookView } from "./views/orderbook-view"
import { StrategiesView } from "./views/strategies-view"
import { AnalyticsView } from "./views/analytics-view"
import { BrokerView } from "./views/broker-view"
import { ComplianceView } from "./views/compliance-view"
import { SettingsView } from "./views/settings-view"
import { NeuralCoreView } from "./views/neural-core-view"
import { QuantumTradingView } from "./views/quantum-trading-view"
import { ProbabilityMatrixView } from "./views/probability-matrix-view"
import { DataStreamsView } from "./views/data-streams-view"
import { SecurityProtocolsView } from "./views/security-protocols-view"
import { MemoryBanksView } from "./views/memory-banks-view"
import { SystemCoreView } from "./views/system-core-view"
import { ConfigurationView } from "./views/configuration-view"
import { TradeJournalView } from "./views/trade-journal-view"
import { AnalyticsDashboardView } from "./views/analytics-dashboard-view"
import { BacktestingView } from "./views/backtesting-view"
import { AIPatternRecognitionView } from "./views/ai-pattern-recognition-view"
import { AIReasoningEngineView } from "./views/ai-reasoning-engine-view"

interface QuantumMainInterfaceProps {
  activeModule: string
  quantumState: string
  setQuantumState: (state: string) => void
  aiConsciousnessActive: boolean
  setAiConsciousnessActive: (active: boolean) => void
  holographicMode: boolean
}

export function QuantumMainInterface({
  activeModule,
  quantumState,
  setQuantumState,
  aiConsciousnessActive,
  setAiConsciousnessActive,
  holographicMode,
}: QuantumMainInterfaceProps) {
  const [showVoiceInterface, setShowVoiceInterface] = useState(false)
  const [currentDate, setCurrentDate] = useState("")
  const [quantumTime, setQuantumTime] = useState("")

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      setCurrentDate(now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }))
      
      // Futuristic time format
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      const seconds = now.getSeconds().toString().padStart(2, '0')
      setQuantumTime(`${hours}:${minutes}:${seconds} QST`)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleVoiceCommand = (command: string, action?: string) => {
    if (!action) return

    const [actionType, ...params] = action.split(":")

    switch (actionType) {
      case "navigate":
        if (params[0]) {
          setActiveModule(params[0])
        }
        break
      case "trade":
        console.log(`Voice trade command: ${params[0]} ${params[1]}`)
        break
      case "query":
        console.log(`Voice query: ${params[0]}`)
        break
      case "emergency":
        console.log(`Emergency action: ${params[0]}`)
        break
    }
  }

  const renderActiveView = () => {
    switch (activeModule) {
      case "dashboard":
        return <DashboardView />
      case "portfolio":
        return <PortfolioView />
      case "trading":
        return <TradingView />
      case "orderbook":
        return <OrderBookView />
      case "strategies":
        return <StrategiesView />
      case "analytics":
        return <AnalyticsView />
      case "broker":
        return <BrokerView />
      case "compliance":
        return <ComplianceView />
      case "settings":
        return <SettingsView />
      case "neural-core":
        return <NeuralCoreView />
      case "quantum-trading":
        return <QuantumTradingView />
      case "probability-matrix":
        return <ProbabilityMatrixView />
      case "data-streams":
        return <DataStreamsView />
      case "security-protocols":
        return <SecurityProtocolsView />
      case "memory-banks":
        return <MemoryBanksView />
      case "system-core":
        return <SystemCoreView />
      case "configuration":
        return <ConfigurationView />
      case "trade-journal":
        return <TradeJournalView />
      case "analytics-dashboard":
        return <AnalyticsDashboardView />
      case "backtesting":
        return <BacktestingView />
      case "ai-pattern-recognition":
        return <AIPatternRecognitionView />
      case "ai-reasoning-engine":
        return <AIReasoningEngineView />
      default:
        return <NeuralCoreView />
    }
  }

  const getModuleTitle = () => {
    const titles: Record<string, string> = {
      dashboard: "Quantum Dashboard 2050",
      portfolio: "Holographic Portfolio",
      trading: "Neural Trading Interface",
      orderbook: "Quantum Order Flow",
      strategies: "AI Strategy Matrix",
      analytics: "Predictive Analytics",
      broker: "Quantum Broker",
      compliance: "Neural Compliance",
      settings: "System Configuration",
      "neural-core": "Neural Core 2050",
      "quantum-trading": "Quantum Trading Engine",
      "probability-matrix": "Probability Matrix",
      "data-streams": "Quantum Data Streams",
      "security-protocols": "Quantum Security",
      "memory-banks": "Neural Memory Banks",
      "system-core": "Quantum System Core",
      configuration: "System Configuration",
      "trade-journal": "Neural Trade Journal",
      "analytics-dashboard": "AI Analytics Dashboard",
      backtesting: "Quantum Backtesting",
      "ai-pattern-recognition": "AI Pattern Recognition",
      "ai-reasoning-engine": "Consciousness Engine",
    }
    return titles[activeModule] || "Neural Core 2050"
  }

  return (
    <div className="flex flex-col h-screen bg-black/80 backdrop-blur-xl relative">
      {/* Holographic Header Overlay */}
      {holographicMode && (
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-cyan-500/10 via-purple-500/5 to-transparent pointer-events-none" />
      )}

      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-cyan-500/30 bg-black/60 backdrop-blur-xl relative z-10">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Atom className="w-8 h-8 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
            <div className="absolute inset-0 bg-cyan-400/20 rounded-full animate-pulse" />
          </div>
          <div>
            <h1 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              {getModuleTitle()}
            </h1>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-cyan-300">{currentDate}</span>
              <span className="text-purple-300">{quantumTime}</span>
              <span className="text-emerald-300">Quantum State: {quantumState}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowVoiceInterface(!showVoiceInterface)}
            className="text-cyan-300 hover:text-white hover:bg-cyan-500/20 border border-cyan-500/30"
          >
            {showVoiceInterface ? <X className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-purple-300 hover:text-white hover:bg-purple-500/20 border border-purple-500/30"
          >
            <Bell className="w-4 h-4" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-emerald-300 hover:text-white hover:bg-emerald-500/20 border border-emerald-500/30"
          >
            <Settings className="w-4 h-4" />
          </Button>
          
          <Button
            variant={aiConsciousnessActive ? "default" : "outline"}
            size="sm"
            onClick={() => setAiConsciousnessActive(!aiConsciousnessActive)}
            className={`relative overflow-hidden ${
              aiConsciousnessActive 
                ? "bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border-cyan-400/50 text-white" 
                : "border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20"
            }`}
          >
            {aiConsciousnessActive && (
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse" />
            )}
            <Brain className="w-4 h-4 mr-2 relative z-10" />
            <span className="relative z-10">AETHEL-X</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 overflow-y-auto p-6 bg-black/40 backdrop-blur-sm relative">
          {/* Holographic Content Overlay */}
          {holographicMode && (
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-emerald-500/5 pointer-events-none" />
          )}
          
          <div className="relative z-10">
            {renderActiveView()}
          </div>
        </main>

        {/* Voice Interface Panel */}
        {showVoiceInterface && (
          <VoiceInterface onCommand={handleVoiceCommand} onClose={() => setShowVoiceInterface(false)} />
        )}
      </div>
    </div>
  )
}