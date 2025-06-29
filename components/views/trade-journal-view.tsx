"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Search, Filter, Download, Calendar, Target, Brain, Zap, Activity } from "lucide-react"

const tradeHistory = [
  {
    id: 1,
    timestamp: "2024-01-15 09:32:15",
    symbol: "AAPL",
    side: "BUY",
    quantity: 100,
    entryPrice: 165.3,
    exitPrice: 175.5,
    netPnl: 1020.0,
    pnlPercent: 6.17,
    strategy: "Liquidity Absorption",
    aiConfidence: 87.3,
    patternRecognized: "Bullish Engulfing",
    marketCondition: "Trending",
    riskReward: 2.4,
    holdTime: "2h 15m",
    commission: 2.5,
    tags: ["high-volume", "breakout", "ai-confirmed"],
  },
  {
    id: 2,
    timestamp: "2024-01-15 11:45:22",
    symbol: "TSLA",
    side: "SELL",
    quantity: 50,
    entryPrice: 250.8,
    exitPrice: 242.3,
    netPnl: -425.0,
    pnlPercent: -3.39,
    strategy: "Delta Divergence",
    aiConfidence: 72.1,
    patternRecognized: "Bearish Divergence",
    marketCondition: "Choppy",
    riskReward: 1.8,
    holdTime: "45m",
    commission: 1.25,
    tags: ["divergence", "volume-decline"],
  },
  {
    id: 3,
    timestamp: "2024-01-15 14:20:08",
    symbol: "NVDA",
    side: "BUY",
    quantity: 25,
    entryPrice: 420.5,
    exitPrice: 445.2,
    netPnl: 617.5,
    pnlPercent: 5.87,
    strategy: "Momentum Breakout",
    aiConfidence: 94.7,
    patternRecognized: "Cup and Handle",
    marketCondition: "Strong Trend",
    riskReward: 3.2,
    holdTime: "1h 35m",
    commission: 0.75,
    tags: ["momentum", "breakout", "high-confidence"],
  },
  {
    id: 4,
    timestamp: "2024-01-15 15:55:33",
    symbol: "MSFT",
    side: "BUY",
    quantity: 75,
    entryPrice: 378.9,
    exitPrice: 385.4,
    netPnl: 487.5,
    pnlPercent: 1.72,
    strategy: "Mean Reversion",
    aiConfidence: 68.9,
    patternRecognized: "Double Bottom",
    marketCondition: "Consolidation",
    riskReward: 2.1,
    holdTime: "3h 20m",
    commission: 1.5,
    tags: ["mean-reversion", "support-bounce"],
  },
]

const journalMetrics = {
  totalTrades: 247,
  winningTrades: 192,
  losingTrades: 55,
  winRate: 77.7,
  totalPnl: 31450,
  avgWin: 387.5,
  avgLoss: -145.2,
  largestWin: 2850,
  largestLoss: -1125,
  profitFactor: 2.67,
  sharpeRatio: 2.34,
  maxDrawdown: 2.3,
  avgHoldTime: "2h 15m",
  bestStrategy: "Liquidity Absorption",
  aiAccuracy: 84.2,
}

export function TradeJournalView() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStrategy, setSelectedStrategy] = useState("All")
  const [selectedTimeframe, setSelectedTimeframe] = useState("Today")

  const filteredTrades = tradeHistory.filter((trade) => {
    const matchesSearch =
      trade.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trade.strategy.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStrategy = selectedStrategy === "All" || trade.strategy === selectedStrategy
    return matchesSearch && matchesStrategy
  })

  return (
    <div className="space-y-6">
      {/* Journal Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-6 h-6 text-emerald-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                {journalMetrics.winRate}%
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Win Rate</div>
            <div className="text-2xl font-bold text-emerald-400">
              {journalMetrics.winningTrades}/{journalMetrics.totalTrades}
            </div>
            <div className="text-xs text-cyan-400/60 mt-1">Total trades</div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Target className="w-6 h-6 text-purple-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">
                {journalMetrics.profitFactor}
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Profit Factor</div>
            <div className="text-2xl font-bold text-purple-400">+${journalMetrics.totalPnl.toLocaleString()}</div>
            <div className="text-xs text-cyan-400/60 mt-1">Total P&L</div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Brain className="w-6 h-6 text-amber-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
                {journalMetrics.aiAccuracy}%
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">AI Accuracy</div>
            <div className="text-2xl font-bold text-amber-400">{journalMetrics.bestStrategy}</div>
            <div className="text-xs text-cyan-400/60 mt-1">Best strategy</div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Activity className="w-6 h-6 text-cyan-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                {journalMetrics.sharpeRatio}
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Sharpe Ratio</div>
            <div className="text-2xl font-bold text-cyan-400">{journalMetrics.avgHoldTime}</div>
            <div className="text-xs text-cyan-400/60 mt-1">Avg hold time</div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-64">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-cyan-400" />
              <Input
                placeholder="Search trades by symbol or strategy..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-black/50 border-cyan-500/30 text-cyan-100 focus:border-cyan-400"
              />
            </div>
          </div>

          <select
            value={selectedStrategy}
            onChange={(e) => setSelectedStrategy(e.target.value)}
            className="bg-black/50 border border-cyan-500/30 rounded-md px-3 py-2 text-cyan-100 focus:border-cyan-400 focus:outline-none"
          >
            <option value="All">All Strategies</option>
            <option value="Liquidity Absorption">Liquidity Absorption</option>
            <option value="Delta Divergence">Delta Divergence</option>
            <option value="Momentum Breakout">Momentum Breakout</option>
            <option value="Mean Reversion">Mean Reversion</option>
          </select>

          <select
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="bg-black/50 border border-cyan-500/30 rounded-md px-3 py-2 text-cyan-100 focus:border-cyan-400 focus:outline-none"
          >
            <option value="Today">Today</option>
            <option value="This Week">This Week</option>
            <option value="This Month">This Month</option>
            <option value="All Time">All Time</option>
          </select>

          <Button
            variant="outline"
            className="border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 text-cyan-300 bg-transparent"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>

          <Button
            variant="outline"
            className="border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/10 text-purple-300 bg-transparent"
          >
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Trade History Table */}
      <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
        <h3 className="text-lg font-semibold text-cyan-100 mb-6 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-cyan-400" />
          Trade History ({filteredTrades.length} trades)
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-cyan-500/20">
                <th className="text-left py-4 px-2 text-cyan-300 font-medium">Time</th>
                <th className="text-left py-4 px-2 text-cyan-300 font-medium">Symbol</th>
                <th className="text-center py-4 px-2 text-cyan-300 font-medium">Side</th>
                <th className="text-right py-4 px-2 text-cyan-300 font-medium">Qty</th>
                <th className="text-right py-4 px-2 text-cyan-300 font-medium">Entry</th>
                <th className="text-right py-4 px-2 text-cyan-300 font-medium">Exit</th>
                <th className="text-right py-4 px-2 text-cyan-300 font-medium">P&L</th>
                <th className="text-center py-4 px-2 text-cyan-300 font-medium">Strategy</th>
                <th className="text-center py-4 px-2 text-cyan-300 font-medium">AI Pattern</th>
                <th className="text-center py-4 px-2 text-cyan-300 font-medium">Confidence</th>
              </tr>
            </thead>
            <tbody>
              {filteredTrades.map((trade) => (
                <tr key={trade.id} className="border-b border-cyan-500/10 hover:bg-cyan-500/5 transition-colors">
                  <td className="py-4 px-2 text-cyan-300 text-sm">{new Date(trade.timestamp).toLocaleTimeString()}</td>
                  <td className="py-4 px-2">
                    <div className="font-medium text-cyan-100">{trade.symbol}</div>
                    <div className="text-xs text-cyan-400/60">{trade.holdTime}</div>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <Badge
                      className={
                        trade.side === "BUY"
                          ? "bg-emerald-500/20 border-emerald-400/30 text-emerald-300"
                          : "bg-red-500/20 border-red-400/30 text-red-300"
                      }
                    >
                      {trade.side}
                    </Badge>
                  </td>
                  <td className="py-4 px-2 text-right text-cyan-300">{trade.quantity}</td>
                  <td className="py-4 px-2 text-right text-cyan-300">${trade.entryPrice.toFixed(2)}</td>
                  <td className="py-4 px-2 text-right text-cyan-300">${trade.exitPrice.toFixed(2)}</td>
                  <td className="py-4 px-2 text-right">
                    <div className={`font-medium ${trade.netPnl >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                      {trade.netPnl >= 0 ? "+" : ""}${trade.netPnl.toFixed(2)}
                    </div>
                    <div className={`text-sm ${trade.pnlPercent >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                      {trade.pnlPercent >= 0 ? "+" : ""}
                      {trade.pnlPercent.toFixed(2)}%
                    </div>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <div className="px-2 py-1 rounded-full text-xs bg-purple-500/20 border border-purple-400/30 text-purple-300">
                      {trade.strategy}
                    </div>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <div className="px-2 py-1 rounded-full text-xs bg-amber-500/20 border border-amber-400/30 text-amber-300">
                      {trade.patternRecognized}
                    </div>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-12 h-2 bg-black/50 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
                          style={{ width: `${trade.aiConfidence}%` }}
                        />
                      </div>
                      <span className="text-xs text-cyan-300">{trade.aiConfidence}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Trade Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
          <h4 className="text-lg font-semibold text-cyan-100 mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5 text-purple-400" />
            AI Pattern Analysis
          </h4>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-cyan-300">Bullish Patterns</span>
              <div className="flex items-center gap-2">
                <div className="w-20 bg-black/50 rounded-full h-2">
                  <div className="bg-emerald-400 h-2 rounded-full" style={{ width: "78%" }}></div>
                </div>
                <span className="text-emerald-400 text-sm">78%</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-cyan-300">Bearish Patterns</span>
              <div className="flex items-center gap-2">
                <div className="w-20 bg-black/50 rounded-full h-2">
                  <div className="bg-red-400 h-2 rounded-full" style={{ width: "22%" }}></div>
                </div>
                <span className="text-red-400 text-sm">22%</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-cyan-300">Neutral Patterns</span>
              <div className="flex items-center gap-2">
                <div className="w-20 bg-black/50 rounded-full h-2">
                  <div className="bg-amber-400 h-2 rounded-full" style={{ width: "15%" }}></div>
                </div>
                <span className="text-amber-400 text-sm">15%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
          <h4 className="text-lg font-semibold text-cyan-100 mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-400" />
            Performance Metrics
          </h4>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-cyan-300/70">Avg Win</div>
              <div className="text-lg font-bold text-emerald-400">${journalMetrics.avgWin}</div>
            </div>
            <div>
              <div className="text-sm text-cyan-300/70">Avg Loss</div>
              <div className="text-lg font-bold text-red-400">${journalMetrics.avgLoss}</div>
            </div>
            <div>
              <div className="text-sm text-cyan-300/70">Best Trade</div>
              <div className="text-lg font-bold text-emerald-400">${journalMetrics.largestWin}</div>
            </div>
            <div>
              <div className="text-sm text-cyan-300/70">Worst Trade</div>
              <div className="text-lg font-bold text-red-400">${journalMetrics.largestLoss}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
