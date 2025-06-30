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
        <Card className="notion-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">Total P&L</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">+$4,720</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline w-3 h-3 mr-1" />
              +12.3% from yesterday
            </p>
          </CardContent>
        </Card>

        <Card className="notion-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">Portfolio Value</CardTitle>
            <Activity className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">$135,420</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline w-3 h-3 mr-1" />
              +8.7% this month
            </p>
          </CardContent>
        </Card>

        <Card className="notion-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">Win Rate</CardTitle>
            <Target className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">73.2%</div>
            <p className="text-xs text-muted-foreground">38 wins / 52 total trades</p>
          </CardContent>
        </Card>

        <Card className="notion-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">Active Strategies</CardTitle>
            <Zap className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">3/4</div>
            <p className="text-xs text-muted-foreground">1 strategy paused</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="notion-card">
          <CardHeader>
            <CardTitle className="text-foreground">Portfolio Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <PortfolioChart data={portfolioData} />
          </CardContent>
        </Card>

        <Card className="notion-card">
          <CardHeader>
            <CardTitle className="text-foreground">Today's P&L</CardTitle>
          </CardHeader>
          <CardContent>
            <PerformanceChart data={performanceData} />
          </CardContent>
        </Card>
      </div>

      {/* Positions and Strategies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="notion-card">
          <CardHeader>
            <CardTitle className="text-foreground">Active Positions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {positions.map((position) => (
                <div key={position.symbol} className="flex items-center justify-between p-3 bg-secondary rounded-lg border border-border">
                  <div>
                    <div className="font-medium text-foreground">{position.symbol}</div>
                    <div className="text-sm text-muted-foreground">
                      {position.shares} shares @ ${position.price}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-medium ${position.pnl >= 0 ? "text-green-500" : "text-red-500"}`}>
                      {position.pnl >= 0 ? "+" : ""}${position.pnl}
                    </div>
                    <div className={`text-sm ${position.pnlPercent >= 0 ? "text-green-500" : "text-red-500"}`}>
                      {position.pnlPercent >= 0 ? "+" : ""}
                      {position.pnlPercent}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="notion-card">
          <CardHeader>
            <CardTitle className="text-foreground">Strategy Matrix</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {strategies.map((strategy) => (
                <div key={strategy.name} className="flex items-center justify-between p-3 bg-secondary rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    {strategy.status === "active" ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-yellow-500" />
                    )}
                    <div>
                      <div className="font-medium text-foreground">{strategy.name}</div>
                      <div className="text-sm text-muted-foreground">{strategy.trades} trades</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={strategy.status === "active" ? "default" : "secondary"} className="mb-1">
                      {strategy.status}
                    </Badge>
                    <div className={`text-sm ${strategy.pnl >= 0 ? "text-green-500" : "text-red-500"}`}>
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