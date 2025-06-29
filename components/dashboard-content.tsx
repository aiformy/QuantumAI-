"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Brain, Bell, Settings } from "lucide-react"
import { DashboardView } from "@/components/views/dashboard-view"
import { PortfolioView } from "@/components/views/portfolio-view"
import { TradingView } from "@/components/views/trading-view"
import { OrderBookView } from "@/components/views/orderbook-view"
import { StrategiesView } from "@/components/views/strategies-view"
import { AnalyticsView } from "@/components/views/analytics-view"
import { BrokerView } from "@/components/views/broker-view"
import { ComplianceView } from "@/components/views/compliance-view"
import { SettingsView } from "@/components/views/settings-view"

interface DashboardContentProps {
  activeView: string
  showAIAssistant: boolean
  setShowAIAssistant: (show: boolean) => void
}

export function DashboardContent({ activeView, showAIAssistant, setShowAIAssistant }: DashboardContentProps) {
  const renderView = () => {
    switch (activeView) {
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
      default:
        return <DashboardView />
    }
  }

  return (
    <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950/50 backdrop-blur">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <div>
            <h2 className="text-xl font-semibold text-slate-100 capitalize">
              {activeView === "orderbook" ? "Level 2 Order Book" : activeView}
            </h2>
            <p className="text-sm text-slate-400">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Bell className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
          <Button
            variant={showAIAssistant ? "default" : "outline"}
            size="sm"
            onClick={() => setShowAIAssistant(!showAIAssistant)}
          >
            <Brain className="w-4 h-4 mr-2" />
            AETHEL
          </Button>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-4">{renderView()}</main>
    </div>
  )
}
