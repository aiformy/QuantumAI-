"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Brain, Zap, Target, Activity, Eye, Play, Pause } from "lucide-react"

const patternLibrary = [
  {
    id: 1,
    name: "Cup & Handle",
    type: "bullish",
    confidence: 87.3,
    activation: 94.2,
    detected: 3,
    description: "Classic reversal pattern with high probability continuation",
    timeframe: "4H",
    symbol: "AAPL",
  },
  {
    id: 2,
    name: "Head & Shoulders",
    type: "bearish",
    confidence: 92.1,
    activation: 88.7,
    detected: 2,
    description: "Strong reversal pattern indicating potential downtrend",
    timeframe: "1D",
    symbol: "TSLA",
  },
  {
    id: 3,
    name: "Bullish Engulfing",
    type: "bullish",
    confidence: 78.9,
    activation: 91.5,
    detected: 5,
    description: "Candlestick pattern showing strong buying pressure",
    timeframe: "1H",
    symbol: "NVDA",
  },
  {
    id: 4,
    name: "Double Bottom",
    type: "bullish",
    confidence: 85.4,
    activation: 76.3,
    detected: 1,
    description: "Support level confirmation with reversal potential",
    timeframe: "2H",
    symbol: "MSFT",
  },
  {
    id: 5,
    name: "Ascending Triangle",
    type: "bullish",
    confidence: 73.2,
    activation: 82.1,
    detected: 4,
    description: "Continuation pattern with breakout potential",
    timeframe: "30M",
    symbol: "GOOGL",
  },
  {
    id: 6,
    name: "Bear Flag",
    type: "bearish",
    confidence: 89.7,
    activation: 95.8,
    detected: 2,
    description: "Continuation pattern in downtrend with high reliability",
    timeframe: "15M",
    symbol: "AMZN",
  },
]

const neuralLayers = [
  { name: "Input Layer", neurons: 256, activation: 98.7, type: "input" },
  { name: "Conv Layer 1", neurons: 128, activation: 94.2, type: "conv" },
  { name: "Conv Layer 2", neurons: 64, activation: 91.8, type: "conv" },
  { name: "LSTM Layer", neurons: 32, activation: 87.3, type: "lstm" },
  { name: "Dense Layer", neurons: 16, activation: 92.1, type: "dense" },
  { name: "Output Layer", neurons: 6, activation: 89.4, type: "output" },
]

const realtimeDetections = [
  { symbol: "AAPL", pattern: "Bullish Flag", confidence: 91.2, timeframe: "5M", status: "forming" },
  { symbol: "TSLA", pattern: "Wedge", confidence: 76.8, timeframe: "15M", status: "confirmed" },
  { symbol: "NVDA", pattern: "Triangle", confidence: 83.4, timeframe: "1H", status: "breakout" },
  { symbol: "MSFT", pattern: "Channel", confidence: 88.9, timeframe: "30M", status: "forming" },
]

export function AIPatternRecognitionView() {
  const [isScanning, setIsScanning] = useState(true)
  const [scanProgress, setScanProgress] = useState(0)
  const [activePattern, setActivePattern] = useState<number | null>(null)

  useEffect(() => {
    if (isScanning) {
      const interval = setInterval(() => {
        setScanProgress((prev) => (prev + 1) % 101)
      }, 100)
      return () => clearInterval(interval)
    }
  }, [isScanning])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-cyan-100 mb-2">AI Pattern Recognition</h1>
          <p className="text-cyan-400/70">Advanced neural pattern detection and analysis</p>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant={isScanning ? "default" : "outline"}
            onClick={() => setIsScanning(!isScanning)}
            className="bg-cyan-600 hover:bg-cyan-700"
          >
            {isScanning ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
            {isScanning ? "Pause Scan" : "Start Scan"}
          </Button>
        </div>
      </div>

      {/* Neural Network Status */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-900/50 border-cyan-500/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="w-5 h-5 text-cyan-400" />
              <span className="text-sm text-cyan-300">Neural Accuracy</span>
            </div>
            <div className="text-2xl font-bold text-cyan-100">94.7%</div>
            <div className="text-xs text-cyan-400/60">Pattern recognition</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-cyan-500/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-amber-400" />
              <span className="text-sm text-cyan-300">Processing Speed</span>
            </div>
            <div className="text-2xl font-bold text-cyan-100">2.3ms</div>
            <div className="text-xs text-cyan-400/60">Average latency</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-cyan-500/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-emerald-400" />
              <span className="text-sm text-cyan-300">Patterns/Hour</span>
            </div>
            <div className="text-2xl font-bold text-cyan-100">1,247</div>
            <div className="text-xs text-cyan-400/60">Detection rate</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-cyan-500/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-5 h-5 text-purple-400" />
              <span className="text-sm text-cyan-300">Active Scans</span>
            </div>
            <div className="text-2xl font-bold text-cyan-100">847</div>
            <div className="text-xs text-cyan-400/60">Symbols monitored</div>
          </CardContent>
        </Card>
      </div>

      {/* Real-time Scanning */}
      <Card className="bg-slate-900/50 border-cyan-500/20">
        <CardHeader>
          <CardTitle className="text-cyan-100 flex items-center gap-2">
            <Eye className="w-5 h-5 text-cyan-400" />
            Real-time Pattern Detection
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-cyan-300">Scanning Progress</span>
              <span className="text-sm text-cyan-400">{scanProgress}%</span>
            </div>
            <Progress value={scanProgress} className="h-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {realtimeDetections.map((detection, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-3 border border-cyan-500/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-cyan-100">{detection.symbol}</span>
                  <Badge
                    variant="secondary"
                    className={`text-xs ${
                      detection.status === "confirmed"
                        ? "bg-emerald-900 text-emerald-300"
                        : detection.status === "breakout"
                          ? "bg-amber-900 text-amber-300"
                          : "bg-slate-700 text-slate-300"
                    }`}
                  >
                    {detection.status}
                  </Badge>
                </div>
                <div className="text-sm text-cyan-300 mb-1">{detection.pattern}</div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-cyan-400/60">{detection.timeframe}</span>
                  <span className="text-cyan-400">{detection.confidence}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pattern Library & Neural Network */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pattern Library */}
        <Card className="bg-slate-900/50 border-cyan-500/20">
          <CardHeader>
            <CardTitle className="text-cyan-100">Advanced Pattern Library</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {patternLibrary.map((pattern) => (
                <div
                  key={pattern.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    activePattern === pattern.id
                      ? "bg-cyan-500/10 border-cyan-400/50"
                      : "bg-slate-800/50 border-cyan-500/10 hover:border-cyan-400/30"
                  }`}
                  onClick={() => setActivePattern(activePattern === pattern.id ? null : pattern.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-cyan-100">{pattern.name}</span>
                      <Badge variant={pattern.type === "bullish" ? "default" : "destructive"} className="text-xs">
                        {pattern.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-cyan-400">{pattern.detected} detected</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <div>
                      <div className="text-xs text-cyan-400/60">Confidence</div>
                      <div className="text-sm font-medium text-cyan-300">{pattern.confidence}%</div>
                    </div>
                    <div>
                      <div className="text-xs text-cyan-400/60">Neural Activation</div>
                      <div className="text-sm font-medium text-cyan-300">{pattern.activation}%</div>
                    </div>
                  </div>

                  {activePattern === pattern.id && (
                    <div className="mt-3 pt-3 border-t border-cyan-500/20">
                      <div className="text-xs text-cyan-400/80 mb-2">{pattern.description}</div>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="text-cyan-400/60">Symbol: {pattern.symbol}</span>
                        <span className="text-cyan-400/60">Timeframe: {pattern.timeframe}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Neural Network Architecture */}
        <Card className="bg-slate-900/50 border-cyan-500/20">
          <CardHeader>
            <CardTitle className="text-cyan-100">Neural Network Architecture</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {neuralLayers.map((layer, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          layer.type === "input"
                            ? "bg-emerald-400"
                            : layer.type === "conv"
                              ? "bg-cyan-400"
                              : layer.type === "lstm"
                                ? "bg-purple-400"
                                : layer.type === "dense"
                                  ? "bg-amber-400"
                                  : "bg-red-400"
                        } animate-pulse`}
                      />
                      <span className="text-sm font-medium text-cyan-100">{layer.name}</span>
                    </div>
                    <div className="text-xs text-cyan-400">{layer.neurons} neurons</div>
                  </div>

                  <div className="flex items-center gap-2 mb-1">
                    <Progress value={layer.activation} className="flex-1 h-2" />
                    <span className="text-xs text-cyan-400 min-w-[40px]">{layer.activation}%</span>
                  </div>

                  {index < neuralLayers.length - 1 && (
                    <div className="flex justify-center my-2">
                      <div className="w-px h-4 bg-gradient-to-b from-cyan-400/50 to-transparent" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 p-3 bg-slate-800/50 rounded-lg border border-cyan-500/10">
              <div className="text-xs text-cyan-400/60 mb-2">Network Performance</div>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-cyan-300">Training Accuracy</div>
                  <div className="text-cyan-100 font-medium">97.3%</div>
                </div>
                <div>
                  <div className="text-cyan-300">Validation Loss</div>
                  <div className="text-cyan-100 font-medium">0.023</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
