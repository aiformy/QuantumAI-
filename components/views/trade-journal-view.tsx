"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  TrendingUp, Search, Filter, Download, Calendar, Target, Brain, Zap, Activity, 
  Plus, Edit, Trash2, Eye, BarChart3, PieChart, TrendingDown, DollarSign,
  Clock, Star, AlertTriangle, CheckCircle, Camera, FileText, Tag
} from "lucide-react"

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
    notes: "Strong momentum with volume confirmation. AI pattern recognition was accurate.",
    screenshots: ["chart1.png", "setup1.png"],
    rating: 4,
    emotions: ["confident", "patient"],
    mistakes: [],
    lessons: "Trust AI signals when volume confirms the pattern",
    marketNews: "Apple earnings beat expectations",
    weather: "sunny",
    mood: "focused",
    setupQuality: 9,
    executionQuality: 8,
    exitReason: "Target reached",
    slippage: 0.02,
    maxFavorable: 1150.0,
    maxAdverse: -85.0,
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
    notes: "Divergence signal was weak. Should have waited for stronger confirmation.",
    screenshots: ["chart2.png"],
    rating: 2,
    emotions: ["impatient", "frustrated"],
    mistakes: ["entered too early", "ignored weak volume"],
    lessons: "Wait for stronger divergence signals in choppy markets",
    marketNews: "EV sector weakness",
    weather: "cloudy",
    mood: "rushed",
    setupQuality: 5,
    executionQuality: 6,
    exitReason: "Stop loss hit",
    slippage: 0.05,
    maxFavorable: 50.0,
    maxAdverse: -450.0,
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
    notes: "Perfect cup and handle pattern. AI confidence was very high and justified.",
    screenshots: ["chart3.png", "setup3.png", "exit3.png"],
    rating: 5,
    emotions: ["confident", "disciplined"],
    mistakes: [],
    lessons: "High AI confidence with clear patterns = high probability trades",
    marketNews: "AI chip demand surge",
    weather: "sunny",
    mood: "focused",
    setupQuality: 10,
    executionQuality: 9,
    exitReason: "Trailing stop",
    slippage: 0.01,
    maxFavorable: 650.0,
    maxAdverse: -25.0,
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
  avgRating: 3.8,
  avgSetupQuality: 7.5,
  avgExecutionQuality: 7.8,
  totalCommissions: 1247.50,
  totalSlippage: 234.75,
}

const strategies = ["All", "Liquidity Absorption", "Delta Divergence", "Momentum Breakout", "Mean Reversion"]
const timeframes = ["Today", "This Week", "This Month", "Last 3 Months", "All Time"]
const outcomes = ["All", "Winners", "Losers", "Breakeven"]
const emotions = ["confident", "patient", "impatient", "frustrated", "disciplined", "fearful", "greedy"]
const mistakes = ["entered too early", "ignored weak volume", "poor risk management", "emotional exit", "oversized position"]

export function TradeJournalView() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStrategy, setSelectedStrategy] = useState("All")
  const [selectedTimeframe, setSelectedTimeframe] = useState("Today")
  const [selectedOutcome, setSelectedOutcome] = useState("All")
  const [selectedView, setSelectedView] = useState("trades")
  const [showAddTrade, setShowAddTrade] = useState(false)
  const [selectedTrade, setSelectedTrade] = useState<any>(null)
  const [showTradeDetails, setShowTradeDetails] = useState(false)

  const filteredTrades = useMemo(() => {
    return tradeHistory.filter((trade) => {
      const matchesSearch = 
        trade.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trade.strategy.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trade.notes.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesStrategy = selectedStrategy === "All" || trade.strategy === selectedStrategy
      
      const matchesOutcome = selectedOutcome === "All" || 
        (selectedOutcome === "Winners" && trade.netPnl > 0) ||
        (selectedOutcome === "Losers" && trade.netPnl < 0) ||
        (selectedOutcome === "Breakeven" && trade.netPnl === 0)
      
      return matchesSearch && matchesStrategy && matchesOutcome
    })
  }, [searchTerm, selectedStrategy, selectedOutcome])

  const TradeForm = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-cyan-300 mb-2 block">Symbol</label>
          <Input className="bg-black/50 border-cyan-500/30 text-cyan-100" placeholder="AAPL" />
        </div>
        <div>
          <label className="text-sm text-cyan-300 mb-2 block">Side</label>
          <Select>
            <SelectTrigger className="bg-black/50 border-cyan-500/30 text-cyan-100">
              <SelectValue placeholder="Select side" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="BUY">BUY</SelectItem>
              <SelectItem value="SELL">SELL</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="text-sm text-cyan-300 mb-2 block">Quantity</label>
          <Input type="number" className="bg-black/50 border-cyan-500/30 text-cyan-100" placeholder="100" />
        </div>
        <div>
          <label className="text-sm text-cyan-300 mb-2 block">Entry Price</label>
          <Input type="number" className="bg-black/50 border-cyan-500/30 text-cyan-100" placeholder="165.30" />
        </div>
        <div>
          <label className="text-sm text-cyan-300 mb-2 block">Exit Price</label>
          <Input type="number" className="bg-black/50 border-cyan-500/30 text-cyan-100" placeholder="175.50" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-cyan-300 mb-2 block">Strategy</label>
          <Select>
            <SelectTrigger className="bg-black/50 border-cyan-500/30 text-cyan-100">
              <SelectValue placeholder="Select strategy" />
            </SelectTrigger>
            <SelectContent>
              {strategies.slice(1).map(strategy => (
                <SelectItem key={strategy} value={strategy}>{strategy}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm text-cyan-300 mb-2 block">Pattern</label>
          <Input className="bg-black/50 border-cyan-500/30 text-cyan-100" placeholder="Bullish Engulfing" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-cyan-300 mb-2 block">Setup Quality (1-10)</label>
          <Input type="number" min="1" max="10" className="bg-black/50 border-cyan-500/30 text-cyan-100" placeholder="8" />
        </div>
        <div>
          <label className="text-sm text-cyan-300 mb-2 block">Execution Quality (1-10)</label>
          <Input type="number" min="1" max="10" className="bg-black/50 border-cyan-500/30 text-cyan-100" placeholder="9" />
        </div>
      </div>

      <div>
        <label className="text-sm text-cyan-300 mb-2 block">Trade Notes</label>
        <Textarea 
          className="bg-black/50 border-cyan-500/30 text-cyan-100" 
          placeholder="Describe your trade setup, reasoning, and observations..."
          rows={3}
        />
      </div>

      <div>
        <label className="text-sm text-cyan-300 mb-2 block">Emotions</label>
        <div className="flex flex-wrap gap-2">
          {emotions.map(emotion => (
            <Button
              key={emotion}
              variant="outline"
              size="sm"
              className="border-cyan-500/30 hover:bg-cyan-500/10 text-cyan-300"
            >
              {emotion}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm text-cyan-300 mb-2 block">Lessons Learned</label>
        <Textarea 
          className="bg-black/50 border-cyan-500/30 text-cyan-100" 
          placeholder="What did you learn from this trade?"
          rows={2}
        />
      </div>
    </div>
  )

  const TradeDetails = ({ trade }: { trade: any }) => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-cyan-100">Trade Information</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-cyan-300/70">Symbol:</span>
              <span className="text-cyan-100 font-medium">{trade.symbol}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cyan-300/70">Side:</span>
              <Badge className={trade.side === "BUY" ? "bg-emerald-500/20 text-emerald-300" : "bg-red-500/20 text-red-300"}>
                {trade.side}
              </Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-cyan-300/70">Quantity:</span>
              <span className="text-cyan-100">{trade.quantity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cyan-300/70">Entry Price:</span>
              <span className="text-cyan-100">${trade.entryPrice}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cyan-300/70">Exit Price:</span>
              <span className="text-cyan-100">${trade.exitPrice}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cyan-300/70">P&L:</span>
              <span className={trade.netPnl >= 0 ? "text-emerald-400" : "text-red-400"}>
                {trade.netPnl >= 0 ? "+" : ""}${trade.netPnl} ({trade.pnlPercent >= 0 ? "+" : ""}{trade.pnlPercent}%)
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-cyan-100">Analysis</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-cyan-300/70">Strategy:</span>
              <span className="text-cyan-100">{trade.strategy}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cyan-300/70">Pattern:</span>
              <span className="text-cyan-100">{trade.patternRecognized}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cyan-300/70">AI Confidence:</span>
              <span className="text-cyan-100">{trade.aiConfidence}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cyan-300/70">Risk/Reward:</span>
              <span className="text-cyan-100">1:{trade.riskReward}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cyan-300/70">Hold Time:</span>
              <span className="text-cyan-100">{trade.holdTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cyan-300/70">Rating:</span>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < trade.rating ? "text-amber-400 fill-current" : "text-gray-600"}`} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-cyan-100">Trade Notes</h3>
        <div className="bg-black/50 rounded-lg p-4 border border-cyan-500/10">
          <p className="text-cyan-300">{trade.notes}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-cyan-100">Emotions & Psychology</h3>
        <div className="flex flex-wrap gap-2">
          {trade.emotions.map((emotion: string) => (
            <Badge key={emotion} className="bg-purple-500/20 text-purple-300">
              {emotion}
            </Badge>
          ))}
        </div>
      </div>

      {trade.mistakes.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-cyan-100">Mistakes</h3>
          <div className="flex flex-wrap gap-2">
            {trade.mistakes.map((mistake: string) => (
              <Badge key={mistake} className="bg-red-500/20 text-red-300">
                {mistake}
              </Badge>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-cyan-100">Lessons Learned</h3>
        <div className="bg-black/50 rounded-lg p-4 border border-cyan-500/10">
          <p className="text-cyan-300">{trade.lessons}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-cyan-100">Performance Metrics</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-cyan-300/70">Setup Quality:</span>
              <span className="text-cyan-100">{trade.setupQuality}/10</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cyan-300/70">Execution Quality:</span>
              <span className="text-cyan-100">{trade.executionQuality}/10</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cyan-300/70">Max Favorable:</span>
              <span className="text-emerald-400">+${trade.maxFavorable}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cyan-300/70">Max Adverse:</span>
              <span className="text-red-400">${trade.maxAdverse}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cyan-300/70">Slippage:</span>
              <span className="text-cyan-100">${trade.slippage}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-cyan-100">Context</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-cyan-300/70">Market Condition:</span>
              <span className="text-cyan-100">{trade.marketCondition}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cyan-300/70">Exit Reason:</span>
              <span className="text-cyan-100">{trade.exitReason}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cyan-300/70">Weather:</span>
              <span className="text-cyan-100">{trade.weather}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cyan-300/70">Mood:</span>
              <span className="text-cyan-100">{trade.mood}</span>
            </div>
          </div>
        </div>
      </div>

      {trade.marketNews && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-cyan-100">Market News</h3>
          <div className="bg-black/50 rounded-lg p-4 border border-cyan-500/10">
            <p className="text-cyan-300">{trade.marketNews}</p>
          </div>
        </div>
      )}
    </div>
  )

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
              <DollarSign className="w-6 h-6 text-purple-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">
                {journalMetrics.profitFactor}
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Total P&L</div>
            <div className="text-2xl font-bold text-purple-400">+${journalMetrics.totalPnl.toLocaleString()}</div>
            <div className="text-xs text-cyan-400/60 mt-1">Profit factor</div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Star className="w-6 h-6 text-amber-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
                {journalMetrics.avgRating}/5
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Avg Rating</div>
            <div className="text-2xl font-bold text-amber-400">{journalMetrics.avgSetupQuality}/10</div>
            <div className="text-xs text-cyan-400/60 mt-1">Setup quality</div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Brain className="w-6 h-6 text-cyan-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                {journalMetrics.aiAccuracy}%
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">AI Accuracy</div>
            <div className="text-2xl font-bold text-cyan-400">{journalMetrics.bestStrategy}</div>
            <div className="text-xs text-cyan-400/60 mt-1">Best strategy</div>
          </div>
        </div>
      </div>

      {/* Main Interface */}
      <div className="bg-black/30 backdrop-blur-xl rounded-xl border border-cyan-500/20">
        <Tabs value={selectedView} onValueChange={setSelectedView} className="w-full">
          <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
            <TabsList className="bg-black/50">
              <TabsTrigger value="trades" className="data-[state=active]:bg-cyan-500/20">
                <FileText className="w-4 h-4 mr-2" />
                Trades
              </TabsTrigger>
              <TabsTrigger value="analytics" className="data-[state=active]:bg-cyan-500/20">
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </TabsTrigger>
              <TabsTrigger value="insights" className="data-[state=active]:bg-cyan-500/20">
                <Brain className="w-4 h-4 mr-2" />
                Insights
              </TabsTrigger>
            </TabsList>

            <Dialog open={showAddTrade} onOpenChange={setShowAddTrade}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 hover:from-emerald-500/30 hover:to-cyan-500/30 text-emerald-300">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Trade
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-black border-cyan-500/30">
                <DialogHeader>
                  <DialogTitle className="text-cyan-100">Add New Trade</DialogTitle>
                </DialogHeader>
                <TradeForm />
                <div className="flex justify-end gap-2 mt-6">
                  <Button variant="outline" onClick={() => setShowAddTrade(false)}>
                    Cancel
                  </Button>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Save Trade
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <TabsContent value="trades" className="p-6">
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex-1 min-w-64">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-cyan-400" />
                  <Input
                    placeholder="Search trades, notes, symbols..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-black/50 border-cyan-500/30 text-cyan-100 focus:border-cyan-400"
                  />
                </div>
              </div>

              <Select value={selectedStrategy} onValueChange={setSelectedStrategy}>
                <SelectTrigger className="w-48 bg-black/50 border-cyan-500/30 text-cyan-100">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {strategies.map(strategy => (
                    <SelectItem key={strategy} value={strategy}>{strategy}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedOutcome} onValueChange={setSelectedOutcome}>
                <SelectTrigger className="w-32 bg-black/50 border-cyan-500/30 text-cyan-100">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {outcomes.map(outcome => (
                    <SelectItem key={outcome} value={outcome}>{outcome}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                <SelectTrigger className="w-40 bg-black/50 border-cyan-500/30 text-cyan-100">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {timeframes.map(timeframe => (
                    <SelectItem key={timeframe} value={timeframe}>{timeframe}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                className="border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/10 text-purple-300 bg-transparent"
              >
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>

            {/* Trade List */}
            <div className="space-y-3">
              {filteredTrades.map((trade) => (
                <div
                  key={trade.id}
                  className="bg-black/50 rounded-lg p-4 border border-cyan-500/10 hover:border-cyan-400/30 transition-all cursor-pointer"
                  onClick={() => {
                    setSelectedTrade(trade)
                    setShowTradeDetails(true)
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-cyan-100 text-lg">{trade.symbol}</span>
                        <Badge className={trade.side === "BUY" ? "bg-emerald-500/20 text-emerald-300" : "bg-red-500/20 text-red-300"}>
                          {trade.side}
                        </Badge>
                        <span className="text-cyan-300">{trade.quantity} shares</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3 h-3 ${i < trade.rating ? "text-amber-400 fill-current" : "text-gray-600"}`} 
                            />
                          ))}
                        </div>
                        <span className="text-xs text-cyan-400/60">({trade.rating}/5)</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className={`font-medium ${trade.netPnl >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                          {trade.netPnl >= 0 ? "+" : ""}${trade.netPnl.toFixed(2)}
                        </div>
                        <div className={`text-sm ${trade.pnlPercent >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                          {trade.pnlPercent >= 0 ? "+" : ""}{trade.pnlPercent.toFixed(2)}%
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-sm text-cyan-300">{trade.strategy}</div>
                        <div className="text-xs text-cyan-400/60">{trade.holdTime}</div>
                      </div>

                      <div className="text-right">
                        <div className="text-sm text-cyan-300">{new Date(trade.timestamp).toLocaleDateString()}</div>
                        <div className="text-xs text-cyan-400/60">{new Date(trade.timestamp).toLocaleTimeString()}</div>
                      </div>

                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); }}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); }}>
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-cyan-500/10">
                    <p className="text-sm text-cyan-300/80 line-clamp-2">{trade.notes}</p>
                    <div className="flex items-center gap-2 mt-2">
                      {trade.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs border-cyan-500/30 text-cyan-400">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-black/50 border-cyan-500/10">
                <CardHeader>
                  <CardTitle className="text-cyan-100">Performance by Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {strategies.slice(1).map(strategy => (
                      <div key={strategy} className="flex items-center justify-between">
                        <span className="text-cyan-300">{strategy}</span>
                        <div className="flex items-center gap-4">
                          <div className="w-32 bg-black/50 rounded-full h-2">
                            <div className="bg-emerald-400 h-2 rounded-full" style={{ width: `${Math.random() * 100}%` }}></div>
                          </div>
                          <span className="text-emerald-400 text-sm">+${(Math.random() * 5000).toFixed(0)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/50 border-cyan-500/10">
                <CardHeader>
                  <CardTitle className="text-cyan-100">Emotional Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {emotions.slice(0, 6).map(emotion => (
                      <div key={emotion} className="flex items-center justify-between">
                        <span className="text-cyan-300 capitalize">{emotion}</span>
                        <div className="flex items-center gap-4">
                          <div className="w-24 bg-black/50 rounded-full h-2">
                            <div className="bg-purple-400 h-2 rounded-full" style={{ width: `${Math.random() * 100}%` }}></div>
                          </div>
                          <span className="text-purple-400 text-sm">{Math.floor(Math.random() * 50)}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="insights" className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-black/50 border-cyan-500/10">
                <CardHeader>
                  <CardTitle className="text-cyan-100">AI Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-emerald-500/10 rounded-lg border border-emerald-400/20">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm font-medium text-emerald-300">Strength</span>
                      </div>
                      <p className="text-sm text-cyan-300">Your best performing trades occur when AI confidence is above 85% and you wait for volume confirmation.</p>
                    </div>
                    
                    <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-400/20">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-4 h-4 text-amber-400" />
                        <span className="text-sm font-medium text-amber-300">Improvement Area</span>
                      </div>
                      <p className="text-sm text-cyan-300">Trades taken when feeling "impatient" have a 23% lower win rate. Consider implementing a cooling-off period.</p>
                    </div>

                    <div className="p-4 bg-cyan-500/10 rounded-lg border border-cyan-400/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Brain className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm font-medium text-cyan-300">Pattern Recognition</span>
                      </div>
                      <p className="text-sm text-cyan-300">Cup and Handle patterns have your highest success rate at 89%. Focus on identifying these setups.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/50 border-cyan-500/10">
                <CardHeader>
                  <CardTitle className="text-cyan-100">Improvement Suggestions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-emerald-400 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-cyan-100">Increase Position Size on High-Confidence Trades</h4>
                        <p className="text-xs text-cyan-400/70 mt-1">When AI confidence > 90% and setup quality > 8, consider 1.5x position size</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-amber-400 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-cyan-100">Implement Pre-Trade Checklist</h4>
                        <p className="text-xs text-cyan-400/70 mt-1">Create a checklist to avoid emotional trading and improve consistency</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-purple-400 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-cyan-100">Focus on Momentum Breakout Strategy</h4>
                        <p className="text-xs text-cyan-400/70 mt-1">This strategy has your highest profit factor at 3.2</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Trade Details Modal */}
      <Dialog open={showTradeDetails} onOpenChange={setShowTradeDetails}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-black border-cyan-500/30">
          <DialogHeader>
            <DialogTitle className="text-cyan-100">
              Trade Details - {selectedTrade?.symbol} {selectedTrade?.side}
            </DialogTitle>
          </DialogHeader>
          {selectedTrade && <TradeDetails trade={selectedTrade} />}
        </DialogContent>
      </Dialog>
    </div>
  )
}