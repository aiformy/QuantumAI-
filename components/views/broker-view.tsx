"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Wifi, WifiOff, Shield, Key, Database } from "lucide-react"
import { useState } from "react"

const brokers = [
  {
    id: "alpaca",
    name: "Alpaca Markets",
    description: "Commission-free trading for stocks and ETFs",
    status: "connected",
    assets: ["Stocks", "ETFs", "Crypto"],
    recommended: true,
  },
  {
    id: "binance",
    name: "Binance",
    description: "Leading cryptocurrency exchange",
    status: "disconnected",
    assets: ["Crypto", "Futures"],
    recommended: false,
  },
  {
    id: "coinbase",
    name: "Coinbase Pro",
    description: "Professional cryptocurrency trading",
    status: "disconnected",
    assets: ["Crypto"],
    recommended: false,
  },
  {
    id: "interactive",
    name: "Interactive Brokers",
    description: "Global markets access",
    status: "disconnected",
    assets: ["Stocks", "Options", "Futures", "Forex"],
    recommended: false,
  },
]

export function BrokerView() {
  const [sandboxMode, setSandboxMode] = useState(true)
  const [apiKey, setApiKey] = useState("")
  const [secretKey, setSecretKey] = useState("")

  return (
    <div className="space-y-6">
      {/* Connection Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Wifi className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-slate-400">Connection Status</span>
            </div>
            <div className="text-xl font-bold text-emerald-400">Connected</div>
            <div className="text-xs text-slate-500">Alpaca Markets</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-slate-400">Trading Mode</span>
            </div>
            <div className="text-xl font-bold text-amber-400">{sandboxMode ? "Paper Trading" : "Live Trading"}</div>
            <div className="text-xs text-slate-500">
              {sandboxMode ? "Safe testing environment" : "Real money trading"}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Database className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-slate-400">Market Data</span>
            </div>
            <div className="text-xl font-bold text-cyan-400">Live</div>
            <div className="text-xs text-slate-500">Real-time streaming</div>
          </CardContent>
        </Card>
      </div>

      {/* Broker Configuration */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-200">Broker Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Trading Mode Toggle */}
          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-amber-400" />
              <div>
                <div className="font-medium text-slate-200">Sandbox Mode</div>
                <div className="text-sm text-slate-400">
                  {sandboxMode ? "Paper trading with virtual funds" : "Live trading with real money"}
                </div>
              </div>
            </div>
            <Switch checked={sandboxMode} onCheckedChange={setSandboxMode} />
          </div>

          {/* API Configuration */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-slate-200 flex items-center gap-2">
              <Key className="w-5 h-5" />
              API Credentials
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-400 mb-2 block">API Key</label>
                <Input
                  type="password"
                  placeholder="Enter your API key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="bg-slate-800 border-slate-700"
                />
              </div>
              <div>
                <label className="text-sm text-slate-400 mb-2 block">Secret Key</label>
                <Input
                  type="password"
                  placeholder="Enter your secret key"
                  value={secretKey}
                  onChange={(e) => setSecretKey(e.target.value)}
                  className="bg-slate-800 border-slate-700"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Test Connection</Button>
              <Button variant="outline">Save Credentials</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Available Brokers */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-200">Available Brokers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {brokers.map((broker) => (
              <div key={broker.id} className="bg-slate-800 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {broker.status === "connected" ? (
                      <Wifi className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <WifiOff className="w-5 h-5 text-slate-500" />
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-slate-200">{broker.name}</h3>
                        {broker.recommended && (
                          <Badge className="bg-emerald-900 text-emerald-300 text-xs">Recommended</Badge>
                        )}
                      </div>
                      <p className="text-sm text-slate-400">{broker.description}</p>
                    </div>
                  </div>
                  <Badge variant={broker.status === "connected" ? "default" : "secondary"}>{broker.status}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {broker.assets.map((asset) => (
                      <Badge key={asset} variant="outline" className="text-xs">
                        {asset}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    size="sm"
                    variant={broker.status === "connected" ? "destructive" : "default"}
                    disabled={broker.status === "connected" && broker.id === "alpaca"}
                  >
                    {broker.status === "connected" ? "Disconnect" : "Connect"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Connection Health */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-200">Connection Health</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-800 rounded-lg p-3">
              <div className="text-sm text-slate-400">Latency</div>
              <div className="text-xl font-bold text-emerald-400">12ms</div>
              <div className="text-xs text-slate-500">Excellent</div>
            </div>
            <div className="bg-slate-800 rounded-lg p-3">
              <div className="text-sm text-slate-400">Uptime</div>
              <div className="text-xl font-bold text-emerald-400">99.9%</div>
              <div className="text-xs text-slate-500">Last 30 days</div>
            </div>
            <div className="bg-slate-800 rounded-lg p-3">
              <div className="text-sm text-slate-400">Data Feed</div>
              <div className="text-xl font-bold text-emerald-400">Active</div>
              <div className="text-xs text-slate-500">Real-time quotes</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
