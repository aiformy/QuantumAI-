"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const bids = [
  { price: 175.48, size: 1200, orders: 8 },
  { price: 175.47, size: 2500, orders: 12 },
  { price: 175.46, size: 1800, orders: 6 },
  { price: 175.45, size: 3200, orders: 15 },
  { price: 175.44, size: 900, orders: 4 },
  { price: 175.43, size: 2100, orders: 9 },
  { price: 175.42, size: 1600, orders: 7 },
  { price: 175.41, size: 2800, orders: 11 },
  { price: 175.4, size: 1400, orders: 5 },
  { price: 175.39, size: 1900, orders: 8 },
]

const asks = [
  { price: 175.49, size: 1100, orders: 7 },
  { price: 175.5, size: 2200, orders: 10 },
  { price: 175.51, size: 1700, orders: 6 },
  { price: 175.52, size: 2900, orders: 13 },
  { price: 175.53, size: 800, orders: 3 },
  { price: 175.54, size: 2400, orders: 11 },
  { price: 175.55, size: 1500, orders: 8 },
  { price: 175.56, size: 3100, orders: 14 },
  { price: 175.57, size: 1300, orders: 6 },
  { price: 175.58, size: 2000, orders: 9 },
]

const recentTrades = [
  { price: 175.49, size: 100, time: "10:45:23", side: "buy" },
  { price: 175.48, size: 250, time: "10:45:22", side: "sell" },
  { price: 175.5, size: 150, time: "10:45:21", side: "buy" },
  { price: 175.49, size: 300, time: "10:45:20", side: "buy" },
  { price: 175.47, size: 200, time: "10:45:19", side: "sell" },
  { price: 175.48, size: 175, time: "10:45:18", side: "buy" },
  { price: 175.46, size: 225, time: "10:45:17", side: "sell" },
  { price: 175.49, size: 125, time: "10:45:16", side: "buy" },
]

const maxSize = Math.max(...bids.map((b) => b.size), ...asks.map((a) => a.size))

export function OrderBookView() {
  const spread = asks[0].price - bids[0].price
  const spreadPercent = (spread / bids[0].price) * 100

  return (
    <div className="space-y-6">
      {/* Market Info */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="text-sm text-slate-400">Best Bid</div>
            <div className="text-xl font-bold text-emerald-400">${bids[0].price}</div>
            <div className="text-sm text-slate-500">{bids[0].size} shares</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="text-sm text-slate-400">Best Ask</div>
            <div className="text-xl font-bold text-red-400">${asks[0].price}</div>
            <div className="text-sm text-slate-500">{asks[0].size} shares</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="text-sm text-slate-400">Spread</div>
            <div className="text-xl font-bold text-slate-100">${spread.toFixed(2)}</div>
            <div className="text-sm text-slate-500">{spreadPercent.toFixed(3)}%</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="text-sm text-slate-400">Last Trade</div>
            <div className="text-xl font-bold text-slate-100">${recentTrades[0].price}</div>
            <div className="text-sm text-slate-500">{recentTrades[0].size} @ {recentTrades[0].time}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Order Book */}
        <div className="lg:col-span-2">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-slate-200">Level 2 Order Book - AAPL</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {/* Bids */}
                <div>
                  <div className="text-sm font-medium text-emerald-400 mb-2 text-center">BIDS</div>
                  <div className="space-y-1">
                    {bids.map((bid, index) => (
                      <div key={index} className="relative">
                        <div className="absolute inset-0 bg-emerald-900/20 rounded" 
                             style={{ width: `${(bid.size / maxSize) * 100}%` }}></div>
                        <div className="relative flex justify-between items-center p-2 text-sm">
                          <span className="text-emerald-400 font-mono">${bid.price}</span>
                          <span className="text-slate-300">{bid.size.toLocaleString()}</span>
                          <span className="text-slate-500 text-xs">{bid.orders}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Asks */}
                <div>
                  <div className="text-sm font-medium text-red-400 mb-2 text-center">ASKS</div>
                  <div className="space-y-1">
                    {asks.reverse().map((ask, index) => (
                      <div key={index} className="relative">
                        <div className="absolute inset-0 bg-red-900/20 rounded" 
                             style={{ width: `${(ask.size / maxSize) * 100}%` }}></div>
                        <div className="relative flex justify-between items-center p-2 text-sm">
                          <span className="text-red-400 font-mono">${ask.price}</span>
                          <span className="text-slate-300">{ask.size.toLocaleString()}</span>
                          <span className="text-slate-500 text-xs">{ask.orders}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Trades */}
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-200">Time & Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="grid grid-cols-3 gap-2 text-xs text-slate-400 font-medium border-b border-slate-700 pb-2">
                <span>Time</span>
                <span className="text-right">Price</span>
                <span className="text-right">Size</span>
              </div>
              {recentTrades.map((trade, index) => (
                <div key={index} className="grid grid-cols-3 gap-2 text-sm py-1">
                  <span className="text-slate-400 text-xs">{trade.time}</span>
                  <span className={`text-right font-mono ${
                    trade.side === 'buy' ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    ${trade.price}
                  </span>
                  <span className="text-right text-slate-300">{trade.size}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Market Depth Visualization */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-200">Market Depth</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm text-slate-400 mb-2">
                <span>Bid Depth</span>
                <span>{bids.reduce((sum, bid) => sum + bid.size, 0).toLocaleString()} shares</span>
              </div>
              <Progress value={65} className="h-2 bg-slate-800">
                <div className="h-full bg-emerald-400 rounded-full" style={{ width: '65%' }}></div>
              </Progress>
            </div>
            <div>
              <div className="flex justify-between text-sm text-slate-400 mb-2">
                <span>Ask Depth</span>
                <span>{asks.reduce((sum, ask) => sum + ask.size, 0).toLocaleString()} shares</span>
              </div>
              <Progress value={58} className="h-2 bg-slate-800">
                <div className="h-full bg-red-400 rounded-full" style={{ width: '58%' }}></div>
              </Progress>
            </div>
          </div>
        \
