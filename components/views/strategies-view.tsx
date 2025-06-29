"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Play, Pause, Settings, TrendingUp, Brain, Target, Zap } from "lucide-react"

const strategies = [
  {
    id: 1,
    name: "Liquidity Absorption",
    description: "Identifies and capitalizes on large order flow imbalances",
    status: "active",
    pnl: 2850,
    trades: 23,
    winRate: 78.3,
    maxDrawdown: -450,
    enabled: true,
    icon: Target,
  },
  {
    id: 2,
    name: "Market Sentiment",
    description: "AI-driven sentiment analysis from news and social media",
    status: "active",
    pnl: 1920,
    trades: 15,
    winRate: 73.3,
    maxDrawdown: -280,
    enabled: true,
    icon: Brain,
  },
  {
    id: 3,
    name: "Mean Reversion",
    description: "Statistical arbitrage on price deviations from mean",
    status: "paused",
    pnl: -150,
    trades: 8,
    winRate: 37.5,
    maxDrawdown: -680,
    enabled: false,
    icon: TrendingUp,
  },
  {
    id: 4,
    name: "Momentum Breakout",
    description: "Captures momentum shifts with volume confirmation",
    status: "active",
    pnl: 3200,
    trades: 31,
    winRate: 80.6,
    maxDrawdown: -320,
    enabled: true,
    icon: Zap,
  },
]

export function StrategiesView() {
  return (
    <div className="space-y-6">
      {/* Strategy Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="text-sm text-slate-400">Active Strategies</div>
            <div className="text-2xl font-bold text-emerald-400">3</div>
            <div className="text-xs text-slate-500">of 4 total</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="text-sm text-slate-400">Total P&L</div>
            <div className="text-2xl font-bold text-emerald-400">+$7,820</div>
            <div className="text-xs text-slate-500">77 total trades</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="text-sm text-slate-400">Avg Win Rate</div>
            <div className="text-2xl font-bold text-slate-100">77.4%</div>
            <div className="text-xs text-slate-500">across all strategies</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="text-sm text-slate-400">Max Drawdown</div>
            <div className="text-2xl font-bold text-red-400">-$680</div>
            <div className="text-xs text-slate-500">Mean Reversion</div>
          </CardContent>
        </Card>
      </div>

      {/* Strategy Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {strategies.map((strategy) => (
          <Card key={strategy.id} className="bg-slate-900 border-slate-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <strategy.icon className="w-6 h-6 text-emerald-400" />
                  <div>
                    <CardTitle className="text-slate-200">{strategy.name}</CardTitle>
                    <p className="text-sm text-slate-400 mt-1">{strategy.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Switch checked={strategy.enabled} />
                  <Badge variant={strategy.status === "active" ? "default" : "secondary"}>{strategy.status}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-sm text-slate-400">P&L</div>
                  <div className={`text-xl font-bold ${strategy.pnl >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                    {strategy.pnl >= 0 ? "+" : ""}${strategy.pnl}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Trades</div>
                  <div className="text-xl font-bold text-slate-100">{strategy.trades}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Win Rate</div>
                  <div className="text-lg font-bold text-slate-100">{strategy.winRate}%</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Max DD</div>
                  <div className="text-lg font-bold text-red-400">${strategy.maxDrawdown}</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant={strategy.status === "active" ? "outline" : "default"}>
                  {strategy.status === "active" ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                <Button size="sm" variant="outline">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
