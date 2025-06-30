"use client"

import { useState } from "react"
import { Play, Pause, RotateCcw, Settings, TrendingUp, Target, Brain, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const backtestResults = [
  { date: "2023-01", pnl: 0, drawdown: 0, trades: 0, winRate: 0 },
  { date: "2023-02", pnl: 2450, drawdown: -0.5, trades: 23, winRate: 69.6 },
  { date: "2023-03", pnl: 4890, drawdown: -1.2, trades: 47, winRate: 72.3 },
  { date: "2023-04", pnl: 6340, drawdown: -0.8, trades: 68, winRate: 75.0 },
  { date: "2023-05", pnl: 9120, drawdown: -1.8, trades: 94, winRate: 73.4 },
  { date: "2023-06", pnl: 11670, drawdown: -1.1, trades: 118, winRate: 76.3 },
  { date: "2023-07", pnl: 14230, drawdown: -2.1, trades: 142, winRate: 74.6 },
  { date: "2023-08", pnl: 17890, drawdown: -1.5, trades: 169, winRate: 77.5 },
  { date: "2023-09", pnl: 20450, drawdown: -0.9, trades: 193, winRate: 78.8 },
  { date: "2023-10", pnl: 23670, drawdown: -1.7, trades: 218, winRate: 76.1 },
  { date: "2023-11", pnl: 27120, drawdown: -1.3, trades: 245, winRate: 79.2 },
  { date: "2023-12", pnl: 31450, drawdown: -2.3, trades: 271, winRate: 77.9 },
]

const strategyConfigs = [
  {
    name: "Liquidity Absorption",
    enabled: true,
    weight: 1.0,
    params: {
      volumeThreshold: 100,
      priceStall: 3,
      confirmationBars: 2,
      volumeMultiplier: 2.0,
    },
  },
  {
    name: "Delta Divergence",
    enabled: true,
    weight: 0.8,
    params: {
      lookbackPeriod: 20,
      divergenceThreshold: 0.7,
      volumeFactor: 1.5,
    },
  },
  {
    name: "Momentum Breakout",
    enabled: true,
    weight: 1.2,
    params: {
      lookbackBars: 10,
      momentumThreshold: 0.005,
      volumeMultiplier: 1.5,
    },
  },
  {
    name: "HVN Rejection",
    enabled: false,
    weight: 0.9,
    params: {
      lookbackBars: 50,
      rejectionThreshold: 0.7,
    },
  },
]

const backtestMetrics = {
  totalReturn: 314.5,
  annualizedReturn: 47.2,
  sharpeRatio: 2.34,
  sortinoRatio: 3.12,
  maxDrawdown: 2.3,
  calmarRatio: 20.4,
  winRate: 77.9,
  profitFactor: 2.67,
  totalTrades: 271,
  avgTrade: 116.05,
  bestTrade: 2850,
  worstTrade: -1125,
  avgWin: 387.5,
  avgLoss: -145.2,
  largestWinStreak: 12,
  largestLossStreak: 4,
}

export function BacktestingView() {
  const [isRunning, setIsRunning] = useState(false)
  const [progress, setProgress] = useState(0)
  const [selectedStrategy, setSelectedStrategy] = useState("All Strategies")
  const [startDate, setStartDate] = useState("2023-01-01")
  const [endDate, setEndDate] = useState("2023-12-31")
  const [initialCapital, setInitialCapital] = useState("100000")

  const handleRunBacktest = () => {
    setIsRunning(true)
    setProgress(0)

    // Simulate backtest progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsRunning(false)
          return 100
        }
        return prev + 2
      })
    }, 100)
  }

  return (
    <div className="space-y-6">
      {/* Backtest Controls */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
          <Settings className="w-5 h-5 text-blue-500" />
          Backtest Configuration
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="text-sm text-foreground mb-2 block">Start Date</label>
            <Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="notion-input"
            />
          </div>

          <div>
            <label className="text-sm text-foreground mb-2 block">End Date</label>
            <Input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="notion-input"
            />
          </div>

          <div>
            <label className="text-sm text-foreground mb-2 block">Initial Capital</label>
            <Input
              type="number"
              value={initialCapital}
              onChange={(e) => setInitialCapital(e.target.value)}
              className="notion-input"
            />
          </div>

          <div>
            <label className="text-sm text-foreground mb-2 block">Strategy Set</label>
            <select
              value={selectedStrategy}
              onChange={(e) => setSelectedStrategy(e.target.value)}
              className="w-full notion-input"
            >
              <option value="All Strategies">All Strategies</option>
              <option value="Liquidity Absorption">Liquidity Absorption</option>
              <option value="Delta Divergence">Delta Divergence</option>
              <option value="Momentum Breakout">Momentum Breakout</option>
              <option value="Custom Mix">Custom Mix</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            onClick={handleRunBacktest}
            disabled={isRunning}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            {isRunning ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
            {isRunning ? "Running..." : "Run Backtest"}
          </Button>

          <Button variant="outline" className="notion-button">
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>

          <Button variant="outline" className="notion-button">
            <Download className="w-4 h-4 mr-2" />
            Export Results
          </Button>

          {isRunning && (
            <div className="flex-1 max-w-xs">
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="text-xs text-muted-foreground mt-1">{progress}% Complete</div>
            </div>
          )}
        </div>
      </div>

      {/* Strategy Configuration */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
          <Brain className="w-5 h-5 text-purple-500" />
          Strategy Parameters
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {strategyConfigs.map((strategy) => (
            <div key={strategy.name} className="bg-secondary rounded-lg p-4 border border-border">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-foreground">{strategy.name}</h4>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Weight:</span>
                    <Input
                      type="number"
                      defaultValue={strategy.weight}
                      step="0.1"
                      min="0"
                      max="2"
                      className="w-16 h-8 notion-input text-xs"
                    />
                  </div>
                  <div
                    className={`w-4 h-4 rounded border-2 cursor-pointer transition-colors ${
                      strategy.enabled
                        ? "bg-green-500 border-green-500"
                        : "border-border hover:border-foreground"
                    }`}
                  />
                </div>
              </div>

              <div className="space-y-2">
                {Object.entries(strategy.params).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                    <Input
                      type="number"
                      defaultValue={value}
                      className="w-20 h-6 notion-input text-xs"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Backtest Results */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-card rounded-xl p-6 border border-border relative overflow-hidden group">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-6 h-6 text-green-500" />
            <div className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
              +{backtestMetrics.totalReturn}%
            </div>
          </div>
          <div className="text-sm text-muted-foreground">Total Return</div>
          <div className="text-2xl font-bold text-green-500">{backtestMetrics.annualizedReturn}%</div>
          <div className="text-xs text-muted-foreground mt-1">Annualized</div>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border relative overflow-hidden group">
          <div className="flex items-center justify-between mb-4">
            <Target className="w-6 h-6 text-purple-500" />
            <div className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
              {backtestMetrics.sharpeRatio}
            </div>
          </div>
          <div className="text-sm text-muted-foreground">Sharpe Ratio</div>
          <div className="text-2xl font-bold text-purple-500">Excellent</div>
          <div className="text-xs text-muted-foreground mt-1">Risk-adjusted</div>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border relative overflow-hidden group">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-6 h-6 text-blue-500" />
            <div className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
              {backtestMetrics.winRate}%
            </div>
          </div>
          <div className="text-sm text-muted-foreground">Win Rate</div>
          <div className="text-2xl font-bold text-blue-500">{backtestMetrics.totalTrades}</div>
          <div className="text-xs text-muted-foreground mt-1">Total trades</div>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border relative overflow-hidden group">
          <div className="flex items-center justify-between mb-4">
            <Brain className="w-6 h-6 text-yellow-500" />
            <div className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
              {backtestMetrics.maxDrawdown}%
            </div>
          </div>
          <div className="text-sm text-muted-foreground">Max Drawdown</div>
          <div className="text-2xl font-bold text-yellow-500">Low Risk</div>
          <div className="text-xs text-muted-foreground mt-1">Excellent control</div>
        </div>
      </div>

      {/* Backtest Performance Chart */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6">Backtest Performance Analysis</h3>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={backtestResults}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--foreground))",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="pnl"
                stroke="#10b981"
                strokeWidth={2}
                name="Cumulative P&L"
                dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="drawdown"
                stroke="#ef4444"
                strokeWidth={2}
                name="Drawdown %"
                dot={{ fill: "#ef4444", strokeWidth: 2, r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="winRate"
                stroke="#3b82f6"
                strokeWidth={2}
                name="Win Rate %"
                dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6">Detailed Backtest Metrics</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-4">
            <h4 className="text-foreground font-medium">Return Metrics</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Total Return</span>
                <span className="text-green-500 font-medium">{backtestMetrics.totalReturn}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Annualized Return</span>
                <span className="text-green-500 font-medium">{backtestMetrics.annualizedReturn}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Avg Trade</span>
                <span className="text-foreground font-medium">${backtestMetrics.avgTrade}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-foreground font-medium">Risk Metrics</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Sharpe Ratio</span>
                <span className="text-purple-500 font-medium">{backtestMetrics.sharpeRatio}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Sortino Ratio</span>
                <span className="text-purple-500 font-medium">{backtestMetrics.sortinoRatio}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Max Drawdown</span>
                <span className="text-red-500 font-medium">{backtestMetrics.maxDrawdown}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Calmar Ratio</span>
                <span className="text-blue-500 font-medium">{backtestMetrics.calmarRatio}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-foreground font-medium">Trade Statistics</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Total Trades</span>
                <span className="text-foreground font-medium">{backtestMetrics.totalTrades}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Win Rate</span>
                <span className="text-green-500 font-medium">{backtestMetrics.winRate}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Profit Factor</span>
                <span className="text-blue-500 font-medium">{backtestMetrics.profitFactor}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-foreground font-medium">Extremes</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Best Trade</span>
                <span className="text-green-500 font-medium">${backtestMetrics.bestTrade}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Worst Trade</span>
                <span className="text-red-500 font-medium">${backtestMetrics.worstTrade}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Win Streak</span>
                <span className="text-green-500 font-medium">{backtestMetrics.largestWinStreak}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Loss Streak</span>
                <span className="text-red-500 font-medium">{backtestMetrics.largestLossStreak}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}