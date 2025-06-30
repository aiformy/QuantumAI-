"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, DollarSign, Activity, Target, Zap, AlertTriangle, CheckCircle, Atom, Brain, Eye } from "lucide-react"
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
  { name: "Aug", value: 142000 },
  { name: "Sep", value: 158000 },
  { name: "Oct", value: 167000 },
  { name: "Nov", value: 189000 },
  { name: "Dec", value: 234000 },
]

const performanceData = [
  { name: "9:30", pnl: 0 },
  { name: "10:00", pnl: 1200 },
  { name: "10:30", pnl: 800 },
  { name: "11:00", pnl: 2100 },
  { name: "11:30", pnl: 1800 },
  { name: "12:00", pnl: 2500 },
  { name: "12:30", pnl: 3200 },
  { name: "13:00", pnl: 4100 },
  { name: "13:30", pnl: 3800 },
  { name: "14:00", pnl: 4500 },
  { name: "14:30", pnl: 5200 },
  { name: "15:00", pnl: 6100 },
]

const positions = [
  { symbol: "AAPL", shares: 100, price: 175.5, pnl: 2500, pnlPercent: 8.2, aiConfidence: 94.7 },
  { symbol: "TSLA", shares: 50, price: 242.3, pnl: -800, pnlPercent: -3.1, aiConfidence: 72.1 },
  { symbol: "NVDA", shares: 25, price: 445.2, pnl: 1200, pnlPercent: 5.4, aiConfidence: 89.3 },
  { symbol: "MSFT", shares: 75, price: 378.9, pnl: 900, pnlPercent: 2.8, aiConfidence: 91.8 },
  { symbol: "GOOGL", shares: 40, price: 142.85, pnl: 1500, pnlPercent: 7.2, aiConfidence: 86.4 },
]

const strategies = [
  { name: "Quantum Entanglement Arbitrage", status: "active", pnl: 18500, trades: 247, efficiency: 94.7 },
  { name: "Neural Pattern Recognition", status: "active", pnl: 12200, trades: 189, efficiency: 87.3 },
  { name: "Probability Wave Collapse", status: "optimizing", pnl: 8900, trades: 156, efficiency: 78.9 },
  { name: "Consciousness Trading", status: "active", pnl: 15600, trades: 203, efficiency: 91.2 },
]

export function DashboardView() {
  const [quantumMetrics, setQuantumMetrics] = useState({
    coherence: 94.7,
    entanglement: 87.3,
    consciousness: 91.8,
    efficiency: 89.4,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setQuantumMetrics({
        coherence: 90 + Math.random() * 10,
        entanglement: 85 + Math.random() * 10,
        consciousness: 88 + Math.random() * 10,
        efficiency: 87 + Math.random() * 10,
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      {/* Quantum Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-black/60 backdrop-blur-xl border border-cyan-500/30 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
            <CardTitle className="text-sm font-medium text-cyan-300">Quantum Coherence</CardTitle>
            <Atom className="h-4 w-4 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-2xl font-bold text-cyan-400">{quantumMetrics.coherence.toFixed(1)}%</div>
            <p className="text-xs text-cyan-300/70">
              <TrendingUp className="inline w-3 h-3 mr-1" />
              Neural field stability optimal
            </p>
          </CardContent>
        </Card>

        <Card className="bg-black/60 backdrop-blur-xl border border-purple-500/30 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
            <CardTitle className="text-sm font-medium text-purple-300">Portfolio Value</CardTitle>
            <DollarSign className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-2xl font-bold text-purple-400">$234,420</div>
            <p className="text-xs text-purple-300/70">
              <TrendingUp className="inline w-3 h-3 mr-1" />
              +134% this year
            </p>
          </CardContent>
        </Card>

        <Card className="bg-black/60 backdrop-blur-xl border border-emerald-500/30 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
            <CardTitle className="text-sm font-medium text-emerald-300">AI Accuracy</CardTitle>
            <Brain className="h-4 w-4 text-emerald-400 animate-pulse" />
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-2xl font-bold text-emerald-400">97.3%</div>
            <p className="text-xs text-emerald-300/70">Neural prediction success</p>
          </CardContent>
        </Card>

        <Card className="bg-black/60 backdrop-blur-xl border border-amber-500/30 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
            <CardTitle className="text-sm font-medium text-amber-300">Quantum Strategies</CardTitle>
            <Zap className="h-4 w-4 text-amber-400" />
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-2xl font-bold text-amber-400">4/4</div>
            <p className="text-xs text-amber-300/70">All systems operational</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-black/60 backdrop-blur-xl border border-cyan-500/30">
          <CardHeader>
            <CardTitle className="text-cyan-300 flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Quantum Portfolio Evolution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PortfolioChart data={portfolioData} />
          </CardContent>
        </Card>

        <Card className="bg-black/60 backdrop-blur-xl border border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-purple-300 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Neural Trading Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PerformanceChart data={performanceData} />
          </CardContent>
        </Card>
      </div>

      {/* Positions and Strategies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-black/60 backdrop-blur-xl border border-emerald-500/30">
          <CardHeader>
            <CardTitle className="text-emerald-300 flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Quantum Positions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {positions.map((position) => (
                <div key={position.symbol} className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-emerald-500/20">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <div>
                      <div className="font-medium text-emerald-300">{position.symbol}</div>
                      <div className="text-sm text-emerald-300/70">
                        {position.shares} shares @ ${position.price}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-medium ${position.pnl >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                      {position.pnl >= 0 ? "+" : ""}${position.pnl}
                    </div>
                    <div className="text-xs text-cyan-300">
                      AI: {position.aiConfidence}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/60 backdrop-blur-xl border border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-purple-300 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Quantum Strategy Matrix
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {strategies.map((strategy) => (
                <div key={strategy.name} className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-purple-500/20">
                  <div className="flex items-center gap-3">
                    {strategy.status === "active" ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-amber-400" />
                    )}
                    <div>
                      <div className="font-medium text-purple-300">{strategy.name}</div>
                      <div className="text-sm text-purple-300/70">{strategy.trades} trades</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant={strategy.status === "active" ? "default" : "secondary"}
                      className={strategy.status === "active" ? "bg-emerald-500/20 text-emerald-300" : "bg-amber-500/20 text-amber-300"}
                    >
                      {strategy.status}
                    </Badge>
                    <div className="text-sm text-emerald-400 mt-1">
                      +${strategy.pnl.toLocaleString()}
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