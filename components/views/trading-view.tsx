"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Play, Pause, Square, Activity } from "lucide-react"
import { TradingChart } from "@/components/charts/trading-chart"

const marketData = [
  { time: "09:30", price: 175.2, volume: 1200000 },
  { time: "09:45", price: 175.8, volume: 980000 },
  { time: "10:00", price: 174.9, volume: 1100000 },
  { time: "10:15", price: 176.3, volume: 1350000 },
  { time: "10:30", price: 175.5, volume: 890000 },
  { time: "10:45", price: 177.2, volume: 1450000 },
  { time: "11:00", price: 176.8, volume: 1020000 },
]

const recentTrades = [
  { id: 1, symbol: "AAPL", side: "BUY", quantity: 100, price: 175.5, time: "10:45:23", status: "filled" },
  { id: 2, symbol: "TSLA", side: "SELL", quantity: 25, price: 242.3, time: "10:42:15", status: "filled" },
  { id: 3, symbol: "NVDA", side: "BUY", quantity: 50, price: 445.2, time: "10:38:47", status: "partial" },
  { id: 4, symbol: "MSFT", side: "SELL", quantity: 75, price: 378.9, time: "10:35:12", status: "filled" },
]

const watchlist = [
  { symbol: "AAPL", price: 175.5, change: 2.3, changePercent: 1.33 },
  { symbol: "TSLA", price: 242.3, change: -5.2, changePercent: -2.1 },
  { symbol: "NVDA", price: 445.2, change: 12.8, changePercent: 2.96 },
  { symbol: "MSFT", price: 378.9, change: 4.5, changePercent: 1.2 },
  { symbol: "GOOGL", price: 142.85, change: -1.25, changePercent: -0.87 },
]

export function TradingView() {
  return (
    <div className="space-y-6">
      {/* Trading Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-200">Quick Order</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <Input placeholder="Symbol" className="bg-slate-800 border-slate-700" />
              <Input placeholder="Quantity" className="bg-slate-800 border-slate-700" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Input placeholder="Price" className="bg-slate-800 border-slate-700" />
              <select className="bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-slate-200">
                <option>Market</option>
                <option>Limit</option>
                <option>Stop</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <TrendingUp className="w-4 h-4 mr-2" />
                BUY
              </Button>
              <Button variant="destructive">
                <TrendingDown className="w-4 h-4 mr-2" />
                SELL
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-200">Strategy Controls</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Auto Trading</span>
              <Badge className="bg-emerald-900 text-emerald-300">ACTIVE</Badge>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                <Play className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline">
                <Pause className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="destructive">
                <Square className="w-4 h-4" />
              </Button>
            </div>
            <div className="text-sm text-slate-400">
              <div>Active Strategies: 3</div>
              <div>Today's Trades: 47</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-200">Market Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span className="text-slate-200">Market Open</span>
            </div>
            <div className="text-sm text-slate-400 space-y-1">
              <div>Session: Regular Hours</div>
              <div>Time: 10:45 AM EST</div>
              <div>Next Close: 4:00 PM EST</div>
            </div>
            <Badge className="bg-emerald-900 text-emerald-300">LIVE DATA</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Chart and Watchlist */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-slate-200">AAPL - Apple Inc.</CardTitle>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-slate-100">$175.50</span>
                <Badge className="bg-emerald-900 text-emerald-300">+$2.30 (+1.33%)</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <TradingChart data={marketData} />
            </CardContent>
          </Card>
        </div>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-200">Watchlist</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {watchlist.map((stock) => (
                <div
                  key={stock.symbol}
                  className="flex items-center justify-between p-2 hover:bg-slate-800 rounded-lg cursor-pointer"
                >
                  <div>
                    <div className="font-medium text-slate-200">{stock.symbol}</div>
                    <div className="text-sm text-slate-400">${stock.price}</div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm ${stock.change >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                      {stock.change >= 0 ? "+" : ""}${stock.change}
                    </div>
                    <div className={`text-xs ${stock.changePercent >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                      {stock.changePercent >= 0 ? "+" : ""}
                      {stock.changePercent}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Trades */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-200">Recent Trades</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-2 text-slate-300">Symbol</th>
                  <th className="text-left py-2 text-slate-300">Side</th>
                  <th className="text-right py-2 text-slate-300">Quantity</th>
                  <th className="text-right py-2 text-slate-300">Price</th>
                  <th className="text-left py-2 text-slate-300">Time</th>
                  <th className="text-center py-2 text-slate-300">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentTrades.map((trade) => (
                  <tr key={trade.id} className="border-b border-slate-800">
                    <td className="py-2 text-slate-200 font-medium">{trade.symbol}</td>
                    <td className="py-2">
                      <Badge variant={trade.side === "BUY" ? "default" : "destructive"}>{trade.side}</Badge>
                    </td>
                    <td className="py-2 text-right text-slate-300">{trade.quantity}</td>
                    <td className="py-2 text-right text-slate-300">${trade.price}</td>
                    <td className="py-2 text-slate-400">{trade.time}</td>
                    <td className="py-2 text-center">
                      <Badge variant={trade.status === "filled" ? "default" : "secondary"}>{trade.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
