"use client"

import {
  BarChart3,
  TrendingUp,
  Activity,
  BookOpen,
  Shield,
  Database,
  Cpu,
  Cog,
  Brain,
  Eye,
  Target,
  TestTube,
  Zap,
  Home,
} from "lucide-react"

interface QuantumSidebarProps {
  activeModule: string
  setActiveModule: (module: string) => void
}

const tradingModules = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "portfolio", label: "Portfolio", icon: BarChart3 },
  { id: "trading", label: "Trading", icon: TrendingUp },
  { id: "orderbook", label: "Order Book", icon: Activity },
  { id: "strategies", label: "Strategies", icon: Target },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
]

const quantumModules = [
  { id: "neural-core", label: "Neural Core", icon: Brain },
  { id: "quantum-trading", label: "Quantum Trading", icon: Activity },
  { id: "probability-matrix", label: "Probability Matrix", icon: BarChart3 },
  { id: "data-streams", label: "Data Streams", icon: Database },
  { id: "ai-pattern-recognition", label: "Pattern Recognition", icon: Eye },
  { id: "ai-reasoning-engine", label: "Reasoning Engine", icon: Zap },
]

const systemModules = [
  { id: "security-protocols", label: "Security", icon: Shield },
  { id: "memory-banks", label: "Memory Banks", icon: Database },
  { id: "system-core", label: "System Core", icon: Cpu },
  { id: "configuration", label: "Configuration", icon: Cog },
]

const aiModules = [
  { id: "trade-journal", label: "Trade Journal", icon: BookOpen },
  { id: "analytics-dashboard", label: "Analytics Dashboard", icon: TrendingUp },
  { id: "backtesting", label: "Backtesting", icon: TestTube },
]

export function QuantumSidebar({ activeModule, setActiveModule }: QuantumSidebarProps) {
  return (
    <div className="w-64 bg-sidebar-background border-r border-sidebar-border flex flex-col h-screen">
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="font-semibold text-sidebar-foreground">AETHEL</h2>
            <p className="text-xs text-muted-foreground">Quantum AI Trading</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-3">
        {/* Trading Interface */}
        <div className="mb-6">
          <h3 className="text-muted-foreground text-xs font-medium mb-2 px-2 uppercase tracking-wider">Trading Interface</h3>
          <div className="space-y-1">
            {tradingModules.map((module) => {
              const Icon = module.icon
              return (
                <button
                  key={module.id}
                  onClick={() => setActiveModule(module.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all text-left text-sm ${
                    activeModule === module.id
                      ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{module.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Quantum AI Core */}
        <div className="mb-6">
          <h3 className="text-muted-foreground text-xs font-medium mb-2 px-2 uppercase tracking-wider">Quantum AI Core</h3>
          <div className="space-y-1">
            {quantumModules.map((module) => {
              const Icon = module.icon
              return (
                <button
                  key={module.id}
                  onClick={() => setActiveModule(module.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all text-left text-sm ${
                    activeModule === module.id
                      ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{module.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* AI Trading Bots */}
        <div className="mb-6">
          <h3 className="text-muted-foreground text-xs font-medium mb-2 px-2 uppercase tracking-wider">AI Trading Bots</h3>
          <div className="space-y-1">
            {aiModules.map((module) => {
              const Icon = module.icon
              return (
                <button
                  key={module.id}
                  onClick={() => setActiveModule(module.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all text-left text-sm ${
                    activeModule === module.id
                      ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{module.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* System Core */}
        <div>
          <h3 className="text-muted-foreground text-xs font-medium mb-2 px-2 uppercase tracking-wider">System Core</h3>
          <div className="space-y-1">
            {systemModules.map((module) => {
              const Icon = module.icon
              return (
                <button
                  key={module.id}
                  onClick={() => setActiveModule(module.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all text-left text-sm ${
                    activeModule === module.id
                      ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{module.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-2 text-xs">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-muted-foreground">System Online</span>
        </div>
      </div>
    </div>
  )
}