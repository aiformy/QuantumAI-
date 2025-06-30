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
  Atom,
  Layers,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface QuantumSidebarProps {
  activeModule: string
  setActiveModule: (module: string) => void
  holographicMode: boolean
  setHolographicMode: (mode: boolean) => void
}

const tradingModules = [
  { id: "dashboard", label: "Quantum Dashboard", icon: Home },
  { id: "portfolio", label: "Holographic Portfolio", icon: BarChart3 },
  { id: "trading", label: "Neural Trading", icon: TrendingUp },
  { id: "orderbook", label: "Quantum Order Flow", icon: Activity },
  { id: "strategies", label: "AI Strategies", icon: Target },
  { id: "analytics", label: "Predictive Analytics", icon: BarChart3 },
]

const quantumModules = [
  { id: "neural-core", label: "Neural Core 2050", icon: Brain },
  { id: "quantum-trading", label: "Quantum Trading", icon: Atom },
  { id: "probability-matrix", label: "Probability Matrix", icon: Layers },
  { id: "data-streams", label: "Quantum Data Streams", icon: Database },
  { id: "ai-pattern-recognition", label: "AI Pattern Recognition", icon: Eye },
  { id: "ai-reasoning-engine", label: "Consciousness Engine", icon: Zap },
]

const systemModules = [
  { id: "security-protocols", label: "Quantum Security", icon: Shield },
  { id: "memory-banks", label: "Neural Memory", icon: Database },
  { id: "system-core", label: "Quantum Core", icon: Cpu },
  { id: "configuration", label: "System Config", icon: Cog },
]

const aiModules = [
  { id: "trade-journal", label: "Neural Journal", icon: BookOpen },
  { id: "analytics-dashboard", label: "AI Analytics", icon: TrendingUp },
  { id: "backtesting", label: "Quantum Backtesting", icon: TestTube },
]

export function QuantumSidebar({ activeModule, setActiveModule, holographicMode, setHolographicMode }: QuantumSidebarProps) {
  return (
    <div className="w-64 bg-black/80 backdrop-blur-xl border-r border-cyan-500/30 flex flex-col h-screen relative">
      {/* Holographic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-purple-500/5 to-emerald-500/5 pointer-events-none" />
      
      {/* Header */}
      <div className="p-4 border-b border-cyan-500/30 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 via-purple-500 to-emerald-400 rounded-lg flex items-center justify-center relative">
            <Brain className="w-5 h-5 text-white" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-emerald-400 rounded-lg animate-pulse opacity-50" />
          </div>
          <div>
            <h2 className="font-semibold text-white text-lg">AETHEL-X</h2>
            <p className="text-xs text-cyan-300">Quantum AI Trading 2050</p>
          </div>
        </div>

        {/* Holographic Mode Toggle */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setHolographicMode(!holographicMode)}
          className={`w-full border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 ${
            holographicMode ? 'bg-cyan-500/20' : ''
          }`}
        >
          <Sparkles className="w-4 h-4 mr-2" />
          {holographicMode ? 'Holographic ON' : 'Holographic OFF'}
        </Button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-3 relative z-10">
        {/* Trading Interface */}
        <div className="mb-6">
          <h3 className="text-cyan-300 text-xs font-medium mb-3 px-2 uppercase tracking-wider">Neural Trading Interface</h3>
          <div className="space-y-1">
            {tradingModules.map((module) => {
              const Icon = module.icon
              return (
                <button
                  key={module.id}
                  onClick={() => setActiveModule(module.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all text-left text-sm font-medium relative group ${
                    activeModule === module.id
                      ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-400/50"
                      : "text-cyan-100 hover:bg-cyan-500/10 hover:text-white"
                  }`}
                >
                  {activeModule === module.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-md animate-pulse" />
                  )}
                  <Icon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">{module.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Quantum AI Core */}
        <div className="mb-6">
          <h3 className="text-purple-300 text-xs font-medium mb-3 px-2 uppercase tracking-wider">Quantum AI Core</h3>
          <div className="space-y-1">
            {quantumModules.map((module) => {
              const Icon = module.icon
              return (
                <button
                  key={module.id}
                  onClick={() => setActiveModule(module.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all text-left text-sm font-medium relative group ${
                    activeModule === module.id
                      ? "bg-gradient-to-r from-purple-500/20 to-emerald-500/20 text-white border border-purple-400/50"
                      : "text-purple-100 hover:bg-purple-500/10 hover:text-white"
                  }`}
                >
                  {activeModule === module.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-emerald-500/10 rounded-md animate-pulse" />
                  )}
                  <Icon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">{module.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* AI Trading Bots */}
        <div className="mb-6">
          <h3 className="text-emerald-300 text-xs font-medium mb-3 px-2 uppercase tracking-wider">AI Trading Bots</h3>
          <div className="space-y-1">
            {aiModules.map((module) => {
              const Icon = module.icon
              return (
                <button
                  key={module.id}
                  onClick={() => setActiveModule(module.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all text-left text-sm font-medium relative group ${
                    activeModule === module.id
                      ? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-white border border-emerald-400/50"
                      : "text-emerald-100 hover:bg-emerald-500/10 hover:text-white"
                  }`}
                >
                  {activeModule === module.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-md animate-pulse" />
                  )}
                  <Icon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">{module.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* System Core */}
        <div>
          <h3 className="text-amber-300 text-xs font-medium mb-3 px-2 uppercase tracking-wider">Quantum System Core</h3>
          <div className="space-y-1">
            {systemModules.map((module) => {
              const Icon = module.icon
              return (
                <button
                  key={module.id}
                  onClick={() => setActiveModule(module.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all text-left text-sm font-medium relative group ${
                    activeModule === module.id
                      ? "bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-white border border-amber-400/50"
                      : "text-amber-100 hover:bg-amber-500/10 hover:text-white"
                  }`}
                >
                  {activeModule === module.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-md animate-pulse" />
                  )}
                  <Icon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">{module.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-cyan-500/30 relative z-10">
        <div className="flex items-center gap-2 text-xs mb-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-300">Quantum System Online</span>
        </div>
        <div className="text-xs text-cyan-400/60">
          Neural Coherence: 99.7% | Uptime: 2,847 days
        </div>
      </div>
    </div>
  )
}