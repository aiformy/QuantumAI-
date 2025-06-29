"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, AlertTriangle, CheckCircle, FileText, Download } from "lucide-react"

const complianceChecks = [
  {
    id: 1,
    rule: "Position Size Limits",
    status: "compliant",
    description: "Maximum position size per symbol: 10% of portfolio",
    lastCheck: "2024-01-15 10:45",
  },
  {
    id: 2,
    rule: "Daily Loss Limits",
    status: "compliant",
    description: "Maximum daily loss: $5,000",
    lastCheck: "2024-01-15 10:45",
  },
  {
    id: 3,
    rule: "Leverage Restrictions",
    status: "warning",
    description: "Current leverage: 2.1x (Limit: 2.0x)",
    lastCheck: "2024-01-15 10:45",
  },
  {
    id: 4,
    rule: "Trading Hours",
    status: "compliant",
    description: "Trading only during market hours",
    lastCheck: "2024-01-15 10:45",
  },
]

const auditTrail = [
  {
    id: 1,
    timestamp: "2024-01-15 10:45:23",
    action: "Order Placed",
    details: "BUY 100 AAPL @ $175.50",
    user: "System",
    status: "approved",
  },
  {
    id: 2,
    timestamp: "2024-01-15 10:42:15",
    action: "Position Closed",
    details: "SELL 25 TSLA @ $242.30",
    user: "Strategy: Momentum",
    status: "approved",
  },
  {
    id: 3,
    timestamp: "2024-01-15 10:38:47",
    action: "Risk Check",
    details: "Leverage limit exceeded - Order rejected",
    user: "Risk Manager",
    status: "rejected",
  },
  {
    id: 4,
    timestamp: "2024-01-15 10:35:12",
    action: "Strategy Activated",
    details: "Liquidity Absorption strategy enabled",
    user: "Admin",
    status: "approved",
  },
]

export function ComplianceView() {
  return (
    <div className="space-y-6">
      {/* Compliance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-slate-400">Compliant Rules</span>
            </div>
            <div className="text-2xl font-bold text-emerald-400">3</div>
            <div className="text-xs text-slate-500">of 4 total</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-slate-400">Warnings</span>
            </div>
            <div className="text-2xl font-bold text-amber-400">1</div>
            <div className="text-xs text-slate-500">Leverage limit</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-slate-400">Risk Score</span>
            </div>
            <div className="text-2xl font-bold text-cyan-400">7.2</div>
            <div className="text-xs text-slate-500">Moderate risk</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-slate-400">Audit Entries</span>
            </div>
            <div className="text-2xl font-bold text-purple-400">247</div>
            <div className="text-xs text-slate-500">Today</div>
          </CardContent>
        </Card>
      </div>

      {/* Compliance Rules */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-200">Compliance Rules</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {complianceChecks.map((check) => (
              <div key={check.id} className="bg-slate-800 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    {check.status === "compliant" ? (
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5" />
                    )}
                    <div>
                      <h3 className="font-medium text-slate-200">{check.rule}</h3>
                      <p className="text-sm text-slate-400 mt-1">{check.description}</p>
                      <p className="text-xs text-slate-500 mt-2">Last checked: {check.lastCheck}</p>
                    </div>
                  </div>
                  <Badge variant={check.status === "compliant" ? "default" : "secondary"}>{check.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Audit Trail */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-slate-200">Audit Trail</CardTitle>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 text-slate-300 font-medium">Timestamp</th>
                  <th className="text-left py-3 text-slate-300 font-medium">Action</th>
                  <th className="text-left py-3 text-slate-300 font-medium">Details</th>
                  <th className="text-left py-3 text-slate-300 font-medium">User/System</th>
                  <th className="text-center py-3 text-slate-300 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {auditTrail.map((entry) => (
                  <tr key={entry.id} className="border-b border-slate-800">
                    <td className="py-3 text-slate-400 text-sm font-mono">{entry.timestamp}</td>
                    <td className="py-3 text-slate-200 font-medium">{entry.action}</td>
                    <td className="py-3 text-slate-300">{entry.details}</td>
                    <td className="py-3 text-slate-400">{entry.user}</td>
                    <td className="py-3 text-center">
                      <Badge variant={entry.status === "approved" ? "default" : "destructive"}>{entry.status}</Badge>
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
