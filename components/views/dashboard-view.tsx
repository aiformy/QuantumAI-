"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, DollarSign, Activity, Target, Zap, AlertTriangle, CheckCircle } from "lucide-react"
import { PortfolioChart } from "@/components/charts/portfolio-chart"
import { PerformanceChart } from "@/components/charts/performance-chart"

const portfolioData = [
  { name: "Jan", value: 100000 },
  { name: "Feb", value: 105000 },
  { name: "Mar", value: 98000 },
  { name: "Apr", value: 112000 },
  { name: "May", value: 125000 },
  { name: "Jun", value: 118000 },
  { name: "Jul", value: 135000 },
]

const performanceData = [
  { name: "9:30", pnl: 0 },
  { name: "10:00", pnl: 1200 },
  { name: "10:30", pnl: 800 },
  { name: "11:00", pnl: 2100 },
  { name: "11:30", pnl: 1800 },
  { name: "12:00", pnl: 2500 },
  { name: "12:30", pnl: 3200 },
]

const positions = [
  { symbol: "AAPL", shares: 100, price: 175.5, pnl: 2500, pnlPercent: 8.2 },
  { symbol: "TSLA", shares: 50, price: 242.3, pnl: -800, pnlPercent: -3.1 },
  { symbol: "NVDA", shares: 25, price: 445.2, pnl: 1200, pnlPercent: 5.4 },
  { symbol: "MSFT", shares: 75, price: 378.9, pnl: 900, pnlPercent: 2.8 },
]

const strategies = [
  { name: "Liquidity Absorption", status: "active", pnl: 1850, trades: 12 },
  { name: "Market Sentiment", status: "active", pnl: 920, trades: 8 },
  { name: "Mean Reversion", status: "paused", pnl: -150, trades: 3 },
  { name: "Momentum Breakout", status: "active", pnl: 2100, trades: 15 },
]

export function DashboardView() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-200">Total P&L</CardTitle>
            <DollarSign className="h-4 w-4 text-emerald-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-400">+$4,720</div>
            <p className="text-xs text-slate-400">
              <TrendingUp className="inline w-3 h-3 mr-1" />
              +12.3% from yesterday
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-200">Portfolio Value</CardTitle>
            <Activity className="h-4 w-4 text-cyan-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-100">$135,420</div>
            <p className="text-xs text-slate-400">
              <TrendingUp className="inline w-3 h-3 mr-1" />
              +8.7% this month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-200">Win Rate</CardTitle>
            <Target className="h-4 w-4 text-amber-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-100">73.2%</div>
            <p className="text-xs text-slate-400">38 wins / 52 total trades</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-200">Active Strategies</CardTitle>
            <Zap className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-100">3/4</div>
            <p className="text-xs text-slate-400">1 strategy paused</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-200">Portfolio Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <PortfolioChart data={portfolioData} />
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-200">Today's P&L</CardTitle>
          </CardHeader>
          <CardContent>
            <PerformanceChart data={performanceData} />
          </CardContent>
        </Card>
      </div>

      {/* Positions and Strategies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-200">Active Positions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {positions.map((position) => (
                <div key={position.symbol} className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
                  <div>
                    <div className="font-medium text-slate-200">{position.symbol}</div>
                    <div className="text-sm text-slate-400">
                      {position.shares} shares @ ${position.price}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-medium ${position.pnl >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                      {position.pnl >= 0 ? "+" : ""}${position.pnl}
                    </div>
                    <div className={`text-sm ${position.pnlPercent >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                      {position.pnlPercent >= 0 ? "+" : ""}
                      {position.pnlPercent}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-200">Strategy Matrix</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {strategies.map((strategy) => (
                <div key={strategy.name} className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    {strategy.status === "active" ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-amber-400" />
                    )}
                    <div>
                      <div className="font-medium text-slate-200">{strategy.name}</div>
                      <div className="text-sm text-slate-400">{strategy.trades} trades</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={strategy.status === "active" ? "default" : "secondary"}>{strategy.status}</Badge>
                    <div className={`text-sm mt-1 ${strategy.pnl >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                      {strategy.pnl >= 0 ? "+" : ""}${strategy.pnl}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
