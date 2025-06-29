"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
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
    <Sidebar className="border-r border-cyan-500/20 bg-black/50 backdrop-blur-xl">
      <SidebarHeader className="p-4 border-b border-cyan-500/20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-cyan-100">AETHEL</h2>
            <p className="text-xs text-cyan-400/60">Quantum AI Trading</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-cyan-400/70 text-xs font-medium mb-2">Trading Interface</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {tradingModules.map((module) => {
                const Icon = module.icon
                return (
                  <SidebarMenuItem key={module.id}>
                    <SidebarMenuButton
                      onClick={() => setActiveModule(module.id)}
                      isActive={activeModule === module.id}
                      className={`w-full justify-start gap-3 px-3 py-2 rounded-lg transition-all ${
                        activeModule === module.id
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30"
                          : "text-cyan-400/70 hover:text-cyan-300 hover:bg-cyan-500/10"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{module.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-purple-400/70 text-xs font-medium mb-2">Quantum AI Core</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {quantumModules.map((module) => {
                const Icon = module.icon
                return (
                  <SidebarMenuItem key={module.id}>
                    <SidebarMenuButton
                      onClick={() => setActiveModule(module.id)}
                      isActive={activeModule === module.id}
                      className={`w-full justify-start gap-3 px-3 py-2 rounded-lg transition-all ${
                        activeModule === module.id
                          ? "bg-purple-500/20 text-purple-300 border border-purple-400/30"
                          : "text-purple-400/70 hover:text-purple-300 hover:bg-purple-500/10"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{module.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-emerald-400/70 text-xs font-medium mb-2">
            AI Trading Bots
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {aiModules.map((module) => {
                const Icon = module.icon
                return (
                  <SidebarMenuItem key={module.id}>
                    <SidebarMenuButton
                      onClick={() => setActiveModule(module.id)}
                      isActive={activeModule === module.id}
                      className={`w-full justify-start gap-3 px-3 py-2 rounded-lg transition-all ${
                        activeModule === module.id
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30"
                          : "text-emerald-400/70 hover:text-emerald-300 hover:bg-emerald-500/10"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{module.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-orange-400/70 text-xs font-medium mb-2">System Core</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {systemModules.map((module) => {
                const Icon = module.icon
                return (
                  <SidebarMenuItem key={module.id}>
                    <SidebarMenuButton
                      onClick={() => setActiveModule(module.id)}
                      isActive={activeModule === module.id}
                      className={`w-full justify-start gap-3 px-3 py-2 rounded-lg transition-all ${
                        activeModule === module.id
                          ? "bg-orange-500/20 text-orange-300 border border-orange-400/30"
                          : "text-orange-400/70 hover:text-orange-300 hover:bg-orange-500/10"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{module.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-cyan-500/20">
        <div className="flex items-center gap-2 text-xs">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-cyan-400/60">Quantum Coherence: 99.7%</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
