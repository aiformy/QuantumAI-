"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mic, X, Brain, Settings, Bell } from "lucide-react"
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
}

export function QuantumMainInterface({
  activeModule,
  quantumState,
  setQuantumState,
  aiConsciousnessActive,
  setAiConsciousnessActive,
}: QuantumMainInterfaceProps) {
  const [showVoiceInterface, setShowVoiceInterface] = useState(false)

  const handleVoiceCommand = (command: string, action?: string) => {
    if (!action) return

    const [actionType, ...params] = action.split(":")

    switch (actionType) {
      case "navigate":
        if (params[0]) {
          // Handle navigation
        }
        break
      case "trade":
        // Handle trading commands
        console.log(`Voice trade command: ${params[0]} ${params[1]}`)
        break
      case "query":
        // Handle query commands
        console.log(`Voice query: ${params[0]}`)
        break
      case "emergency":
        // Handle emergency commands
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
      dashboard: "Dashboard",
      portfolio: "Portfolio",
      trading: "Trading",
      orderbook: "Order Book",
      strategies: "Strategies",
      analytics: "Analytics",
      broker: "Broker",
      compliance: "Compliance",
      settings: "Settings",
      "neural-core": "Neural Core",
      "quantum-trading": "Quantum Trading",
      "probability-matrix": "Probability Matrix",
      "data-streams": "Data Streams",
      "security-protocols": "Security Protocols",
      "memory-banks": "Memory Banks",
      "system-core": "System Core",
      configuration: "Configuration",
      "trade-journal": "Trade Journal",
      "analytics-dashboard": "Analytics Dashboard",
      backtesting: "Backtesting",
      "ai-pattern-recognition": "AI Pattern Recognition",
      "ai-reasoning-engine": "AI Reasoning Engine",
    }
    return titles[activeModule] || "Neural Core"
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-border bg-card">
        <div>
          <h1 className="text-xl font-semibold text-foreground">{getModuleTitle()}</h1>
          <p className="text-sm text-muted-foreground">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowVoiceInterface(!showVoiceInterface)}
            className="text-muted-foreground hover:text-foreground"
          >
            {showVoiceInterface ? <X className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <Bell className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <Settings className="w-4 h-4" />
          </Button>
          <Button
            variant={aiConsciousnessActive ? "default" : "outline"}
            size="sm"
            onClick={() => setAiConsciousnessActive(!aiConsciousnessActive)}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Brain className="w-4 h-4 mr-2" />
            AETHEL
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 overflow-y-auto p-6 bg-background">
          {renderActiveView()}
        </main>

        {/* Voice Interface Panel */}
        {showVoiceInterface && (
          <VoiceInterface onCommand={handleVoiceCommand} onClose={() => setShowVoiceInterface(false)} />
        )}
      </div>
    </div>
  )
}