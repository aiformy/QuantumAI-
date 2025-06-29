"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarFooter,
} from "@/components/ui/sidebar"
import {
  BarChart3,
  TrendingUp,
  Settings,
  BookOpen,
  Shield,
  Zap,
  Brain,
  Target,
  PieChart,
  FileText,
  Wifi,
  WifiOff,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

const menuItems = [
  { id: "dashboard", title: "Dashboard", icon: BarChart3 },
  { id: "portfolio", title: "Portfolio", icon: PieChart },
  { id: "trading", title: "Live Trading", icon: TrendingUp },
  { id: "orderbook", title: "Order Book", icon: BookOpen },
  { id: "strategies", title: "Strategy Matrix", icon: Target },
  { id: "analytics", title: "Analytics", icon: FileText },
  { id: "broker", title: "Broker Connection", icon: Wifi },
  { id: "compliance", title: "Compliance", icon: Shield },
  { id: "settings", title: "Settings", icon: Settings },
]

interface AppSidebarProps {
  activeView: string
  setActiveView: (view: string) => void
}

export function AppSidebar({ activeView, setActiveView }: AppSidebarProps) {
  const [isConnected, setIsConnected] = useState(true)

  return (
    <Sidebar className="border-r border-slate-800">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
            <Brain className="w-5 h-5 text-slate-900" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-100">Quantum</h1>
            <p className="text-xs text-slate-400">AI Trading Platform</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-3 p-2 bg-slate-900 rounded-lg">
          {isConnected ? <Wifi className="w-4 h-4 text-emerald-400" /> : <WifiOff className="w-4 h-4 text-red-400" />}
          <span className="text-sm text-slate-300">{isConnected ? "Connected" : "Disconnected"}</span>
          <Badge variant={isConnected ? "default" : "destructive"} className="ml-auto">
            {isConnected ? "LIVE" : "OFFLINE"}
          </Badge>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton
                onClick={() => setActiveView(item.id)}
                isActive={activeView === item.id}
                className="w-full justify-start"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        <SidebarSeparator />

        <div className="p-4">
          <div className="bg-slate-900 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-slate-200">AETHEL Status</span>
            </div>
            <div className="text-xs text-slate-400 mb-2">Quantum AI Oracle</div>
            <Badge className="bg-emerald-900 text-emerald-300 hover:bg-emerald-800">Active</Badge>
          </div>
        </div>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="text-xs text-slate-500 text-center">
          <div>Quantum v2.1.0</div>
          <div>© 2024 Quantum AI</div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
