"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const holdings = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    shares: 100,
    avgPrice: 165.3,
    currentPrice: 175.5,
    marketValue: 17550,
    pnl: 1020,
    pnlPercent: 6.17,
    sector: "Technology",
    allocation: 25.8,
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    shares: 50,
    avgPrice: 250.8,
    currentPrice: 242.3,
    marketValue: 12115,
    pnl: -425,
    pnlPercent: -3.39,
    sector: "Automotive",
    allocation: 17.8,
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    shares: 25,
    avgPrice: 420.5,
    currentPrice: 445.2,
    marketValue: 11130,
    pnl: 617.5,
    pnlPercent: 5.87,
    sector: "Technology",
    allocation: 16.4,
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    shares: 75,
    avgPrice: 365.2,
    currentPrice: 378.9,
    marketValue: 28417.5,
    pnl: 1027.5,
    pnlPercent: 3.75,
    sector: "Technology",
    allocation: 41.8,
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    shares: 30,
    avgPrice: 142.8,
    currentPrice: 138.5,
    marketValue: 4155,
    pnl: -129,
    pnlPercent: -3.01,
    sector: "Consumer Discretionary",
    allocation: 6.1,
  },
]

const sectorAllocation = [
  { sector: "Technology", allocation: 58.2, value: 39570 },
  { sector: "Automotive", allocation: 17.8, value: 12115 },
  { sector: "Consumer Discretionary", allocation: 6.1, value: 4155 },
  { sector: "Cash", allocation: 17.9, value: 12160 },
]

export function PortfolioView() {
  const totalValue = holdings.reduce((sum, holding) => sum + holding.marketValue, 0)
  const totalPnL = holdings.reduce((sum, holding) => sum + holding.pnl, 0)
  const totalPnLPercent = (totalPnL / (totalValue - totalPnL)) * 100

  return (
    <div className="space-y-6">
      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-200">Total Portfolio Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-100">${totalValue.toLocaleString()}</div>
            <p className="text-sm text-slate-400 mt-1">Including cash positions</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-200">Unrealized P&L</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-3xl font-bold ${totalPnL >= 0 ? "text-emerald-400" : "text-red-400"}`}>
              {totalPnL >= 0 ? "+" : ""}${totalPnL.toFixed(2)}
            </div>
            <p
              className={`text-sm mt-1 flex items-center ${totalPnLPercent >= 0 ? "text-emerald-400" : "text-red-400"}`}
            >
              {totalPnLPercent >= 0 ? (
                <TrendingUp className="w-4 h-4 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 mr-1" />
              )}
              {totalPnLPercent >= 0 ? "+" : ""}
              {totalPnLPercent.toFixed(2)}%
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-200">Positions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-100">{holdings.length}</div>
            <p className="text-sm text-slate-400 mt-1">Active holdings</p>
          </CardContent>
        </Card>
      </div>

      {/* Holdings Table */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-200">Holdings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-2 text-slate-300 font-medium">Symbol</th>
                  <th className="text-left py-3 px-2 text-slate-300 font-medium">Shares</th>
                  <th className="text-right py-3 px-2 text-slate-300 font-medium">Avg Price</th>
                  <th className="text-right py-3 px-2 text-slate-300 font-medium">Current</th>
                  <th className="text-right py-3 px-2 text-slate-300 font-medium">Market Value</th>
                  <th className="text-right py-3 px-2 text-slate-300 font-medium">P&L</th>
                  <th className="text-center py-3 px-2 text-slate-300 font-medium">Sector</th>
                  <th className="text-right py-3 px-2 text-slate-300 font-medium">Allocation</th>
                  <th className="text-center py-3 px-2 text-slate-300 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {holdings.map((holding) => (
                  <tr key={holding.symbol} className="border-b border-slate-800 hover:bg-slate-800/50">
                    <td className="py-3 px-2">
                      <div>
                        <div className="font-medium text-slate-200">{holding.symbol}</div>
                        <div className="text-sm text-slate-400">{holding.name}</div>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-slate-300">{holding.shares}</td>
                    <td className="py-3 px-2 text-right text-slate-300">${holding.avgPrice.toFixed(2)}</td>
                    <td className="py-3 px-2 text-right text-slate-300">${holding.currentPrice.toFixed(2)}</td>
                    <td className="py-3 px-2 text-right text-slate-300">${holding.marketValue.toLocaleString()}</td>
                    <td className="py-3 px-2 text-right">
                      <div className={`${holding.pnl >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                        {holding.pnl >= 0 ? "+" : ""}${holding.pnl.toFixed(2)}
                      </div>
                      <div className={`text-sm ${holding.pnlPercent >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                        {holding.pnlPercent >= 0 ? "+" : ""}
                        {holding.pnlPercent.toFixed(2)}%
                      </div>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <Badge variant="secondary" className="text-xs">
                        {holding.sector}
                      </Badge>
                    </td>
                    <td className="py-3 px-2 text-right text-slate-300">{holding.allocation.toFixed(1)}%</td>
                    <td className="py-3 px-2 text-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit Position
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-400">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Close Position
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Sector Allocation */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-200">Sector Allocation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sectorAllocation.map((sector) => (
              <div key={sector.sector} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-emerald-400 rounded-full"></div>
                  <span className="text-slate-200">{sector.sector}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 bg-slate-800 rounded-full h-2">
                    <div className="bg-emerald-400 h-2 rounded-full" style={{ width: `${sector.allocation}%` }}></div>
                  </div>
                  <div className="text-right min-w-[80px]">
                    <div className="text-slate-200">{sector.allocation.toFixed(1)}%</div>
                    <div className="text-sm text-slate-400">${sector.value.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
