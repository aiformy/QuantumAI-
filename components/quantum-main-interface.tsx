"use client"

import { useState } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Mic, X } from "lucide-react"
import { QuantumSidebar } from "./quantum-sidebar"
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
import { QuantumParticles } from "./quantum-particles"
import { NeuralBackground } from "./neural-background"
import { AIConsciousness } from "./ai-consciousness"

export function QuantumMainInterface() {
  const [activeModule, setActiveModule] = useState("neural-core")
  const [showVoiceInterface, setShowVoiceInterface] = useState(false)

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

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Quantum Background Effects */}
      <div className="fixed inset-0 z-0">
        <NeuralBackground />
        <QuantumParticles />
      </div>

      {/* AI Consciousness Overlay */}
      <AIConsciousness />

      {/* Main Interface */}
      <div className="relative z-10">
        <SidebarProvider>
          <div className="flex h-screen">
            <QuantumSidebar activeModule={activeModule} setActiveModule={setActiveModule} />

            <main className="flex-1 overflow-hidden flex flex-col">
              {/* Voice Interface Toggle */}
              <div className="absolute top-4 right-4 z-20">
                <Button
                  variant={showVoiceInterface ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setShowVoiceInterface(!showVoiceInterface)}
                  className={`${
                    showVoiceInterface
                      ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                      : "bg-black/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                  }`}
                >
                  {showVoiceInterface ? <X className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  <span className="ml-2">{showVoiceInterface ? "Close Voice" : "Voice Control"}</span>
                </Button>
              </div>

              <div className="flex flex-1 overflow-hidden">
                <div className="flex-1 p-6 overflow-y-auto">{renderActiveView()}</div>

                {/* Voice Interface Panel */}
                {showVoiceInterface && (
                  <VoiceInterface onCommand={handleVoiceCommand} onClose={() => setShowVoiceInterface(false)} />
                )}
              </div>
            </main>
          </div>
        </SidebarProvider>
      </div>
    </div>
  )
}
