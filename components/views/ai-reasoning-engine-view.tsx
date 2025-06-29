"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Brain, Zap, Target, AlertTriangle, TrendingUp, Activity, Cpu, Database } from "lucide-react"

const reasoningSteps = [
  {
    id: 1,
    name: "Data Ingestion",
    description: "Processing market data streams and news feeds",
    status: "completed",
    confidence: 98.7,
    duration: "0.12s",
    details: "Analyzed 2.3M data points from 847 sources",
  },
  {
    id: 2,
    name: "Pattern Analysis",
    description: "Identifying technical patterns and anomalies",
    status: "active",
    confidence: 94.2,
    duration: "0.34s",
    details: "Detected 23 patterns across 156 symbols",
  },
  {
    id: 3,
    name: "Sentiment Evaluation",
    description: "Analyzing market sentiment and news impact",
    status: "pending",
    confidence: 0,
    duration: "0.00s",
    details: "Queued for processing",
  },
  {
    id: 4,
    name: "Risk Assessment",
    description: "Calculating risk metrics and exposure limits",
    status: "pending",
    confidence: 0,
    duration: "0.00s",
    details: "Awaiting pattern analysis completion",
  },
  {
    id: 5,
    name: "Decision Synthesis",
    description: "Generating trading recommendations and actions",
    status: "pending",
    confidence: 0,
    duration: "0.00s",
    details: "Final reasoning step",
  },
]

const cognitiveModules = [
  {
    name: "Pattern Recognition",
    status: "active",
    performance: 94.7,
    tasks: 1247,
    icon: Target,
    color: "emerald",
  },
  {
    name: "Sentiment Analysis",
    status: "active",
    performance: 87.3,
    tasks: 892,
    icon: Brain,
    color: "cyan",
  },
  {
    name: "Risk Management",
    status: "active",
    performance: 96.1,
    tasks: 634,
    icon: AlertTriangle,
    color: "amber",
  },
  {
    name: "Market Prediction",
    status: "processing",
    performance: 89.4,
    tasks: 445,
    icon: TrendingUp,
    color: "purple",
  },
  {
    name: "News Processing",
    status: "active",
    performance: 91.8,
    tasks: 2156,
    icon: Database,
    color: "blue",
  },
  {
    name: "Technical Analysis",
    status: "active",
    performance: 93.2,
    tasks: 778,
    icon: Activity,
    color: "green",
  },
]

const aiInsights = [
  {
    id: 1,
    type: "opportunity",
    priority: "high",
    message:
      "Strong bullish divergence detected in AAPL. RSI showing oversold conditions with price making higher lows.",
    confidence: 92.3,
    timestamp: "2 min ago",
    action: "Consider long position",
  },
  {
    id: 2,
    type: "risk",
    priority: "medium",
    message:
      "Increased volatility expected in tech sector due to earnings announcements. Adjust position sizing accordingly.",
    confidence: 87.6,
    timestamp: "5 min ago",
    action: "Reduce exposure",
  },
  {
    id: 3,
    type: "analysis",
    priority: "low",
    message:
      "Market correlation analysis shows TSLA decoupling from broader EV sector. Independent price action likely.",
    confidence: 78.9,
    timestamp: "8 min ago",
    action: "Monitor closely",
  },
  {
    id: 4,
    type: "prediction",
    priority: "high",
    message:
      "Neural network predicts 73% probability of SPY breaking resistance at 445 within next 2 trading sessions.",
    confidence: 85.4,
    timestamp: "12 min ago",
    action: "Prepare breakout strategy",
  },
]

export function AIReasoningEngineView() {
  const [activeStep, setActiveStep] = useState(2)
  const [processingProgress, setProcessingProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProcessingProgress((prev) => (prev + 1) % 101)
    }, 150)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-cyan-100 mb-2">AI Reasoning Engine</h1>
          <p className="text-cyan-400/70">Advanced cognitive processing and decision synthesis</p>
        </div>
        <div className="flex items-center gap-4">
          <Badge className="bg-emerald-900 text-emerald-300">
            <Cpu className="w-3 h-3 mr-1" />
            Neural Core Active
          </Badge>
        </div>
      </div>

      {/* Reasoning Chain */}
      <Card className="bg-slate-900/50 border-cyan-500/20">
        <CardHeader>
          <CardTitle className="text-cyan-100 flex items-center gap-2">
            <Brain className="w-5 h-5 text-cyan-400" />
            Reasoning Chain Process
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reasoningSteps.map((step, index) => (
              <div key={step.id} className="relative">
                <div
                  className={`flex items-center gap-4 p-4 rounded-lg border transition-all ${
                    step.status === "completed"
                      ? "bg-emerald-500/10 border-emerald-400/30"
                      : step.status === "active"
                        ? "bg-cyan-500/10 border-cyan-400/50"
                        : "bg-slate-800/50 border-slate-600/30"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      step.status === "completed"
                        ? "bg-emerald-400 text-black"
                        : step.status === "active"
                          ? "bg-cyan-400 text-black animate-pulse"
                          : "bg-slate-600 text-slate-300"
                    }`}
                  >
                    {step.id}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-cyan-100">{step.name}</h3>
                      <Badge
                        variant="secondary"
                        className={`text-xs ${
                          step.status === "completed"
                            ? "bg-emerald-900 text-emerald-300"
                            : step.status === "active"
                              ? "bg-cyan-900 text-cyan-300"
                              : "bg-slate-700 text-slate-300"
                        }`}
                      >
                        {step.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-cyan-400/80 mb-2">{step.description}</p>
                    <p className="text-xs text-cyan-400/60">{step.details}</p>
                  </div>

                  <div className="text-right">
                    <div className="text-sm font-medium text-cyan-100">
                      {step.confidence > 0 ? `${step.confidence}%` : "--"}
                    </div>
                    <div className="text-xs text-cyan-400/60">{step.duration}</div>
                  </div>
                </div>

                {step.status === "active" && (
                  <div className="mt-2 ml-12">
                    <Progress value={processingProgress} className="h-1" />
                  </div>
                )}

                {index < reasoningSteps.length - 1 && (
                  <div className="flex justify-start ml-4 my-2">
                    <div className="w-px h-6 bg-gradient-to-b from-cyan-400/50 to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Cognitive Modules & AI Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cognitive Modules */}
        <Card className="bg-slate-900/50 border-cyan-500/20">
          <CardHeader>
            <CardTitle className="text-cyan-100">Cognitive Module Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-3">
              {cognitiveModules.map((module, index) => {
                const Icon = module.icon
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-cyan-500/10"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 text-${module.color}-400`} />
                      <div>
                        <div className="font-medium text-cyan-100">{module.name}</div>
                        <div className="text-xs text-cyan-400/60">{module.tasks} tasks completed</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={module.status === "active" ? "default" : "secondary"} className="text-xs mb-1">
                        {module.status}
                      </Badge>
                      <div className="text-sm font-medium text-cyan-100">{module.performance}%</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* AI Insights */}
        <Card className="bg-slate-900/50 border-cyan-500/20">
          <CardHeader>
            <CardTitle className="text-cyan-100 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              Real-time AI Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {aiInsights.map((insight) => (
                <div key={insight.id} className="p-3 bg-slate-800/50 rounded-lg border border-cyan-500/10">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="secondary"
                        className={`text-xs ${
                          insight.type === "opportunity"
                            ? "bg-emerald-900 text-emerald-300"
                            : insight.type === "risk"
                              ? "bg-red-900 text-red-300"
                              : insight.type === "analysis"
                                ? "bg-cyan-900 text-cyan-300"
                                : "bg-purple-900 text-purple-300"
                        }`}
                      >
                        {insight.type}
                      </Badge>
                      <Badge
                        variant={
                          insight.priority === "high"
                            ? "destructive"
                            : insight.priority === "medium"
                              ? "default"
                              : "secondary"
                        }
                        className="text-xs"
                      >
                        {insight.priority}
                      </Badge>
                    </div>
                    <div className="text-xs text-cyan-400">{insight.confidence}%</div>
                  </div>

                  <p className="text-sm text-cyan-300 mb-2">{insight.message}</p>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-cyan-400/60">{insight.timestamp}</div>
                    <div className="text-xs text-amber-400 font-medium">{insight.action}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
