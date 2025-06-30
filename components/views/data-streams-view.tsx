"use client"

import { useEffect, useState } from "react"
import { Activity, Database, Zap, TrendingUp, Wifi } from "lucide-react"

const dataStreams = [
  {
    id: "market-data",
    name: "Market Data Stream",
    source: "NYSE/NASDAQ",
    status: "active",
    latency: 0.3,
    throughput: 2.4,
    packets: 15847,
    errors: 0,
  },
  {
    id: "news-feed",
    name: "News & Sentiment",
    source: "Global Sources",
    status: "active",
    latency: 1.2,
    throughput: 0.8,
    packets: 3421,
    errors: 2,
  },
  {
    id: "social-sentiment",
    name: "Social Sentiment",
    source: "Social Networks",
    status: "active",
    latency: 2.1,
    throughput: 1.6,
    packets: 8934,
    errors: 1,
  },
  {
    id: "options-flow",
    name: "Options Flow",
    source: "CBOE/ISE",
    status: "degraded",
    latency: 5.7,
    throughput: 0.4,
    packets: 1256,
    errors: 12,
  },
  {
    id: "crypto-data",
    name: "Crypto Markets",
    source: "Multiple Exchanges",
    status: "active",
    latency: 0.8,
    throughput: 3.2,
    packets: 23451,
    errors: 0,
  },
]

export function DataStreamsView() {
  const [streamActivity, setStreamActivity] = useState<Record<string, number>>({})
  const [randomBarHeights, setRandomBarHeights] = useState<Array<{
    id: number;
    height: string;
    animationDelay: string;
  }>>([])

  useEffect(() => {
    // Initialize random bar heights on client side only
    setRandomBarHeights(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        height: `${Math.random() * 80 + 20}%`,
        animationDelay: `${i * 0.1}s`,
      }))
    )
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const newActivity: Record<string, number> = {}
      dataStreams.forEach((stream) => {
        newActivity[stream.id] = Math.random() * 100
      })
      setStreamActivity(newActivity)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      {/* Stream Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Wifi className="w-6 h-6 text-emerald-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                Online
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Active Streams</div>
            <div className="text-2xl font-bold text-emerald-400">4/5</div>
            <div className="text-xs text-cyan-400/60 mt-1">Real-time data feeds</div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Activity className="w-6 h-6 text-cyan-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                0.8ms
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Avg Latency</div>
            <div className="text-2xl font-bold text-cyan-400">Ultra Low</div>
            <div className="text-xs text-cyan-400/60 mt-1">Quantum processing</div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Database className="w-6 h-6 text-purple-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">
                8.4 GB/s
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Throughput</div>
            <div className="text-2xl font-bold text-purple-400">52,909</div>
            <div className="text-xs text-cyan-400/60 mt-1">Packets processed</div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Zap className="w-6 h-6 text-amber-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
                99.97%
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Uptime</div>
            <div className="text-2xl font-bold text-amber-400">15</div>
            <div className="text-xs text-cyan-400/60 mt-1">Total errors</div>
          </div>
        </div>
      </div>

      {/* Data Streams Table */}
      <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
        <h3 className="text-lg font-semibold text-cyan-100 mb-6 flex items-center gap-2">
          <Activity className="w-5 h-5 text-cyan-400" />
          Quantum Data Streams
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-cyan-500/20">
                <th className="text-left py-4 px-2 text-cyan-300 font-medium">Stream</th>
                <th className="text-left py-4 px-2 text-cyan-300 font-medium">Source</th>
                <th className="text-center py-4 px-2 text-cyan-300 font-medium">Status</th>
                <th className="text-right py-4 px-2 text-cyan-300 font-medium">Latency</th>
                <th className="text-right py-4 px-2 text-cyan-300 font-medium">Throughput</th>
                <th className="text-right py-4 px-2 text-cyan-300 font-medium">Packets</th>
                <th className="text-right py-4 px-2 text-cyan-300 font-medium">Errors</th>
                <th className="text-center py-4 px-2 text-cyan-300 font-medium">Activity</th>
              </tr>
            </thead>
            <tbody>
              {dataStreams.map((stream) => (
                <tr key={stream.id} className="border-b border-cyan-500/10 hover:bg-cyan-500/5 transition-colors">
                  <td className="py-4 px-2">
                    <div className="font-medium text-cyan-100">{stream.name}</div>
                  </td>
                  <td className="py-4 px-2 text-cyan-300/70">{stream.source}</td>
                  <td className="py-4 px-2 text-center">
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border ${
                        stream.status === "active"
                          ? "bg-emerald-500/20 border-emerald-400/30 text-emerald-300"
                          : stream.status === "degraded"
                            ? "bg-amber-500/20 border-amber-400/30 text-amber-300"
                            : "bg-red-500/20 border-red-400/30 text-red-300"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          stream.status === "active"
                            ? "bg-emerald-400 animate-pulse"
                            : stream.status === "degraded"
                              ? "bg-amber-400 animate-pulse"
                              : "bg-red-400 animate-pulse"
                        }`}
                      />
                      {stream.status}
                    </div>
                  </td>
                  <td className="py-4 px-2 text-right text-cyan-300">{stream.latency}ms</td>
                  <td className="py-4 px-2 text-right text-cyan-300">{stream.throughput} MB/s</td>
                  <td className="py-4 px-2 text-right text-cyan-300">{stream.packets.toLocaleString()}</td>
                  <td className="py-4 px-2 text-right">
                    <span className={stream.errors === 0 ? "text-emerald-400" : "text-amber-400"}>{stream.errors}</span>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <div className="w-16 h-8 bg-black/50 rounded border border-cyan-500/20 relative overflow-hidden">
                      <div
                        className="absolute bottom-0 left-0 bg-gradient-to-t from-cyan-400 to-emerald-400 transition-all duration-300"
                        style={{
                          height: `${streamActivity[stream.id] || 0}%`,
                          width: "100%",
                        }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Real-time Data Visualization */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
          <h3 className="text-lg font-semibold text-cyan-100 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            Market Data Flow
          </h3>

          <div className="relative h-48 bg-black/50 rounded-lg border border-cyan-500/10 overflow-hidden">
            <div className="absolute inset-0 flex items-end justify-around p-4">
              {randomBarHeights.map((bar) => (
                <div
                  key={bar.id}
                  className="w-2 bg-gradient-to-t from-cyan-400 to-emerald-400 rounded-t transition-all duration-1000"
                  style={{
                    height: bar.height,
                    animationDelay: bar.animationDelay,
                  }}
                />
              ))}
            </div>

            <div className="absolute top-4 left-4 text-xs text-cyan-300/70">Real-time Market Ticks</div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
          <h3 className="text-lg font-semibold text-cyan-100 mb-4 flex items-center gap-2">
            <Database className="w-5 h-5 text-purple-400" />
            Neural Processing Load
          </h3>

          <div className="space-y-4">
            {[
              { name: "Pattern Recognition", load: 87 },
              { name: "Sentiment Analysis", load: 72 },
              { name: "Risk Calculation", load: 94 },
              { name: "Prediction Models", load: 68 },
              { name: "Quantum Processing", load: 91 },
            ].map((process) => (
              <div key={process.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-cyan-300">{process.name}</span>
                  <span className="text-sm text-cyan-100 font-medium">{process.load}%</span>
                </div>
                <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full transition-all duration-1000"
                    style={{ width: `${process.load}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Quality Metrics */}
      <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
        <h3 className="text-lg font-semibold text-cyan-100 mb-6 flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-400" />
          Quantum Data Quality Matrix
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h4 className="text-cyan-300 font-medium">Accuracy Metrics</h4>
            {[
              { metric: "Price Accuracy", value: 99.97 },
              { metric: "Volume Accuracy", value: 99.94 },
              { metric: "Timestamp Precision", value: 99.99 },
            ].map((item) => (
              <div key={item.metric} className="flex items-center justify-between">
                <span className="text-sm text-cyan-300/70">{item.metric}</span>
                <span className="text-emerald-400 font-medium">{item.value}%</span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="text-cyan-300 font-medium">Completeness</h4>
            {[
              { metric: "Market Coverage", value: 98.7 },
              { metric: "Symbol Coverage", value: 99.2 },
              { metric: "Historical Depth", value: 100.0 },
            ].map((item) => (
              <div key={item.metric} className="flex items-center justify-between">
                <span className="text-sm text-cyan-300/70">{item.metric}</span>
                <span className="text-cyan-400 font-medium">{item.value}%</span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="text-cyan-300 font-medium">Timeliness</h4>
            {[
              { metric: "Real-time Delivery", value: 99.8 },
              { metric: "Processing Speed", value: 99.6 },
              { metric: "Update Frequency", value: 100.0 },
            ].map((item) => (
              <div key={item.metric} className="flex items-center justify-between">
                <span className="text-sm text-cyan-300/70">{item.metric}</span>
                <span className="text-purple-400 font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}