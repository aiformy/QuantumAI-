"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Calendar, TrendingUp, PieChart } from "lucide-react"

const reports = [
  {
    id: 1,
    name: "Daily Performance Summary",
    description: "Comprehensive daily metrics and P&L breakdown",
    lastGenerated: "2024-01-15 09:30",
    status: "ready",
    type: "daily",
  },
  {
    id: 2,
    name: "Weekly Strategy Analysis",
    description: "In-depth strategy performance and optimization insights",
    lastGenerated: "2024-01-14 18:00",
    status: "ready",
    type: "weekly",
  },
  {
    id: 3,
    name: "Monthly Risk Assessment",
    description: "Portfolio risk metrics and compliance overview",
    lastGenerated: "2024-01-01 00:00",
    status: "generating",
    type: "monthly",
  },
  {
    id: 4,
    name: "Compliance Report",
    description: "Regulatory compliance and audit trail documentation",
    lastGenerated: "2024-01-15 06:00",
    status: "ready",
    type: "compliance",
  },
]

const metrics = [
  { label: "Sharpe Ratio", value: "2.34", change: "+0.12" },
  { label: "Max Drawdown", value: "3.2%", change: "-0.5%" },
  { label: "Profit Factor", value: "1.87", change: "+0.23" },
  { label: "Win Rate", value: "73.2%", change: "+2.1%" },
  { label: "Avg Trade", value: "$127", change: "+$15" },
  { label: "Risk/Reward", value: "1:2.4", change: "+0.3" },
]

export function AnalyticsView() {
  return (
    <div className="space-y-6">
      {/* Key Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {metrics.map((metric) => (
          <Card key={metric.label} className="bg-slate-900 border-slate-800">
            <CardContent className="p-4">
              <div className="text-xs text-slate-400">{metric.label}</div>
              <div className="text-lg font-bold text-slate-100">{metric.value}</div>
              <div className="text-xs text-emerald-400">{metric.change}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Report Generation */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-200">Performance Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {reports.map((report) => (
              <div key={report.id} className="bg-slate-800 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-slate-400" />
                    <div>
                      <h3 className="font-medium text-slate-200">{report.name}</h3>
                      <p className="text-sm text-slate-400">{report.description}</p>
                    </div>
                  </div>
                  <Badge variant={report.status === "ready" ? "default" : "secondary"}>{report.status}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-slate-500">Last: {report.lastGenerated}</div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" disabled={report.status !== "ready"}>
                      <Download className="w-4 h-4 mr-1" />
                      PDF
                    </Button>
                    <Button size="sm" variant="outline" disabled={report.status !== "ready"}>
                      <Download className="w-4 h-4 mr-1" />
                      Excel
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Analytics Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-200 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Performance Attribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Strategy Performance</span>
                <span className="text-emerald-400 font-medium">+$4,720</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Market Timing</span>
                <span className="text-emerald-400 font-medium">+$1,250</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Risk Management</span>
                <span className="text-emerald-400 font-medium">+$890</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Execution Quality</span>
                <span className="text-red-400 font-medium">-$340</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-200 flex items-center gap-2">
              <PieChart className="w-5 h-5" />
              Risk Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Market Risk</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-slate-700 rounded-full h-2">
                    <div className="bg-amber-400 h-2 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                  <span className="text-slate-400 text-sm">65%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Strategy Risk</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-slate-700 rounded-full h-2">
                    <div className="bg-emerald-400 h-2 rounded-full" style={{ width: "25%" }}></div>
                  </div>
                  <span className="text-slate-400 text-sm">25%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Execution Risk</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-slate-700 rounded-full h-2">
                    <div className="bg-red-400 h-2 rounded-full" style={{ width: "10%" }}></div>
                  </div>
                  <span className="text-slate-400 text-sm">10%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Scheduled Reports */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-200 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Scheduled Reports
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-800 rounded-lg p-3">
              <div className="text-sm font-medium text-slate-200">Daily Summary</div>
              <div className="text-xs text-slate-400 mt-1">Every day at 9:30 AM</div>
              <Badge className="mt-2 bg-emerald-900 text-emerald-300">Active</Badge>
            </div>
            <div className="bg-slate-800 rounded-lg p-3">
              <div className="text-sm font-medium text-slate-200">Weekly Analysis</div>
              <div className="text-xs text-slate-400 mt-1">Sundays at 6:00 PM</div>
              <Badge className="mt-2 bg-emerald-900 text-emerald-300">Active</Badge>
            </div>
            <div className="bg-slate-800 rounded-lg p-3">
              <div className="text-sm font-medium text-slate-200">Monthly Report</div>
              <div className="text-xs text-slate-400 mt-1">1st of each month</div>
              <Badge className="mt-2 bg-emerald-900 text-emerald-300">Active</Badge>
            </div>
            <div className="bg-slate-800 rounded-lg p-3">
              <div className="text-sm font-medium text-slate-200">Risk Assessment</div>
              <div className="text-xs text-slate-400 mt-1">Weekly on Fridays</div>
              <Badge className="mt-2 bg-emerald-900 text-emerald-300">Active</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
