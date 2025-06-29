"use client"

import { useState } from "react"
import { BarChart3, TrendingUp, Target, Brain, PieChart, Activity, Zap } from "lucide-react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Pie,
} from "recharts"

const performanceData = [
  { date: "Jan 1", pnl: 0, cumulative: 0, trades: 0 },
  { date: "Jan 8", pnl: 2450, cumulative: 2450, trades: 12 },
  { date: "Jan 15", pnl: 1890, cumulative: 4340, trades: 23 },
  { date: "Jan 22", pnl: 3200, cumulative: 7540, trades: 35 },
  { date: "Jan 29", pnl: -850, cumulative: 6690, trades: 42 },
  { date: "Feb 5", pnl: 4100, cumulative: 10790, trades: 56 },
  { date: "Feb 12", pnl: 2750, cumulative: 13540, trades: 68 },
  { date: "Feb 19", pnl: 1950, cumulative: 15490, trades: 79 },
  { date: "Feb 26", pnl: 3800, cumulative: 19290, trades: 94 },
  { date: "Mar 5", pnl: 2200, cumulative: 21490, trades: 108 },
  { date: "Mar 12", pnl: 5650, cumulative: 27140, trades: 125 },
  { date: "Mar 19", pnl: 4320, cumulative: 31460, trades: 142 },
  { date: "Mar 26", pnl: 6890, cumulative: 38350, trades: 159 },
  { date: "Apr 2", pnl: 3450, cumulative: 41800, trades: 174 },
  { date: "Apr 9", pnl: 5900, cumulative: 47700, trades: 192 },
]

const strategyPieData = [
  { name: "Liquidity Absorption", value: 28.5, color: "#00ff88" },
  { name: "Delta Divergence", value: 22.1, color: "#0088ff" },
  { name: "Momentum Breakout", value: 18.7, color: "#ff0088" },
  { name: "HVN Rejection", value: 15.3, color: "#ffaa00" },
  { name: "Volume Imbalance", value: 9.8, color: "#aa00ff" },
  { name: "Others", value: 5.6, color: "#00ffff" },
]

const hourlyPerformance = [
  { hour: "9:30", pnl: 1250, trades: 8, winRate: 75 },
  { hour: "10:00", pnl: 890, trades: 12, winRate: 67 },
  { hour: "10:30", pnl: 1450, trades: 15, winRate: 80 },
  { hour: "11:00", pnl: 2100, trades: 18, winRate: 83 },
  { hour: "11:30", pnl: 1680, trades: 14, winRate: 71 },
  { hour: "12:00", pnl: 950, trades: 9, winRate: 67 },
  { hour: "12:30", pnl: 1200, trades: 11, winRate: 73 },
  { hour: "13:00", pnl: 1850, trades: 16, winRate: 81 },
  { hour: "13:30", pnl: 2200, trades: 19, winRate: 84 },
  { hour: "14:00", pnl: 1950, trades: 17, winRate: 76 },
  { hour: "14:30", pnl: 1650, trades: 13, winRate: 77 },
  { hour: "15:00", pnl: 2450, trades: 21, winRate: 86 },
  { hour: "15:30", pnl: 1100, trades: 8, winRate: 63 },
]

const riskMetrics = [
  { metric: "Sharpe Ratio", value: 2.34, benchmark: 1.5, status: "excellent" },
  { metric: "Sortino Ratio", value: 3.12, benchmark: 2.0, status: "excellent" },
  { metric: "Max Drawdown", value: 2.1, benchmark: 5.0, status: "good" },
  { metric: "Calmar Ratio", value: 4.67, benchmark: 3.0, status: "excellent" },
  { metric: "Win Rate", value: 73.3, benchmark: 60.0, status: "excellent" },
  { metric: "Profit Factor", value: 2.34, benchmark: 1.5, status: "excellent" },
  { metric: "Avg R:R", value: 2.1, benchmark: 1.5, status: "good" },
  { metric: "Kelly %", value: 15.8, benchmark: 25.0, status: "conservative" },
]

export function AnalyticsDashboardView() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("1M")
  const [selectedMetric, setSelectedMetric] = useState("pnl")

  return (
    <div className="space-y-6">
      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <BarChart3 className="w-6 h-6 text-emerald-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                Live
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Total Return</div>
            <div className="text-2xl font-bold text-emerald-400">+47.7%</div>
            <div className="text-xs text-cyan-400/60 mt-1">Since inception</div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Target className="w-6 h-6 text-purple-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">
                2.34
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Sharpe Ratio</div>
            <div className="text-2xl font-bold text-purple-400">Excellent</div>
            <div className="text-xs text-cyan-400/60 mt-1">Risk-adjusted returns</div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-6 h-6 text-cyan-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                2.1%
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Max Drawdown</div>
            <div className="text-2xl font-bold text-cyan-400">Low Risk</div>
            <div className="text-xs text-cyan-400/60 mt-1">Excellent control</div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Brain className="w-6 h-6 text-amber-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
                AI Enhanced
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">AI Accuracy</div>
            <div className="text-2xl font-bold text-amber-400">94.7%</div>
            <div className="text-xs text-cyan-400/60 mt-1">Signal validation</div>
          </div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-cyan-100 flex items-center gap-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            Performance Analytics
          </h3>

          <div className="flex gap-2">
            {["1W", "1M", "3M", "6M", "1Y"].map((timeframe) => (
              <button
                key={timeframe}
                onClick={() => setSelectedTimeframe(timeframe)}
                className={`px-3 py-1 rounded-lg text-xs transition-all ${
                  selectedTimeframe === timeframe
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30"
                    : "bg-black/30 text-cyan-400/70 border border-cyan-500/20 hover:border-cyan-400/40"
                }`}
              >
                {timeframe}
              </button>
            ))}
          </div>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 255, 255, 0.1)" />
              <XAxis dataKey="date" stroke="#0891b2" />
              <YAxis stroke="#0891b2" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  border: "1px solid rgba(0, 255, 255, 0.3)",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="cumulative"
                stroke="#00ff88"
                strokeWidth={2}
                name="Cumulative P&L"
                dot={{ fill: "#00ff88", strokeWidth: 2, r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="trades"
                stroke="#0088ff"
                strokeWidth={2}
                name="Total Trades"
                dot={{ fill: "#0088ff", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Strategy Breakdown and Hourly Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Strategy Pie Chart */}
        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
          <h3 className="text-lg font-semibold text-cyan-100 mb-6 flex items-center gap-2">
            <PieChart className="w-5 h-5 text-purple-400" />
            Strategy Contribution
          </h3>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={strategyPieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {strategyPieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    border: "1px solid rgba(0, 255, 255, 0.3)",
                    borderRadius: "8px",
                  }}
                />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Hourly Performance */}
        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
          <h3 className="text-lg font-semibold text-cyan-100 mb-6 flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-400" />
            Hourly Performance
          </h3>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hourlyPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 255, 255, 0.1)" />
                <XAxis dataKey="hour" stroke="#0891b2" />
                <YAxis stroke="#0891b2" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    border: "1px solid rgba(0, 255, 255, 0.3)",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="pnl" fill="#00ff88" name="P&L" />
                <Bar dataKey="trades" fill="#0088ff" name="Trades" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Risk Metrics Grid */}
      <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
        <h3 className="text-lg font-semibold text-cyan-100 mb-6">Advanced Risk Analytics</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {riskMetrics.map((metric) => (
            <div key={metric.metric} className="bg-black/50 rounded-lg p-4 border border-cyan-500/10">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-cyan-300">{metric.metric}</h4>
                <div
                  className={`px-2 py-1 rounded-full text-xs border ${
                    metric.status === "excellent"
                      ? "bg-emerald-500/20 border-emerald-400/30 text-emerald-300"
                      : metric.status === "good"
                        ? "bg-cyan-500/20 border-cyan-400/30 text-cyan-300"
                        : "bg-amber-500/20 border-amber-400/30 text-amber-300"
                  }`}
                >
                  {metric.status}
                </div>
              </div>

              <div className="text-xl font-bold text-cyan-100 mb-1">{metric.value}</div>
              <div className="text-xs text-cyan-400/60">Benchmark: {metric.benchmark}</div>

              <div className="mt-2 w-full h-1 bg-black/50 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    metric.status === "excellent"
                      ? "bg-gradient-to-r from-emerald-400 to-emerald-600"
                      : metric.status === "good"
                        ? "bg-gradient-to-r from-cyan-400 to-cyan-600"
                        : "bg-gradient-to-r from-amber-400 to-amber-600"
                  }`}
                  style={{ width: `${Math.min((metric.value / metric.benchmark) * 100, 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
