"use client"

import { useEffect, useState } from "react"
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Zap, Brain } from "lucide-react"

const securityProtocols = [
  {
    id: "quantum-encryption",
    name: "Quantum Encryption",
    status: "active",
    level: "maximum",
    strength: 256,
    description: "Quantum-resistant encryption protocols",
    lastUpdate: "2024-01-15 10:45",
  },
  {
    id: "neural-firewall",
    name: "Neural Firewall",
    status: "active",
    level: "high",
    strength: 192,
    description: "AI-powered threat detection and prevention",
    lastUpdate: "2024-01-15 10:43",
  },
  {
    id: "biometric-auth",
    name: "Biometric Authentication",
    status: "active",
    level: "maximum",
    strength: 512,
    description: "Multi-factor biometric verification",
    lastUpdate: "2024-01-15 10:41",
  },
  {
    id: "data-isolation",
    name: "Data Isolation",
    status: "warning",
    level: "medium",
    strength: 128,
    description: "Quantum data compartmentalization",
    lastUpdate: "2024-01-15 10:39",
  },
]

const threatMatrix = [
  { type: "Quantum Attacks", risk: "low", incidents: 0, blocked: 247 },
  { type: "Neural Intrusion", risk: "medium", incidents: 2, blocked: 89 },
  { type: "Data Breach", risk: "low", incidents: 0, blocked: 156 },
  { type: "AI Manipulation", risk: "high", incidents: 1, blocked: 34 },
]

export function SecurityProtocolsView() {
  const [securityLevel, setSecurityLevel] = useState(94.7)
  const [quantumShield, setQuantumShield] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setSecurityLevel(90 + Math.random() * 10)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      {/* Security Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Shield className="w-6 h-6 text-emerald-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                Secured
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Security Level</div>
            <div className="text-2xl font-bold text-emerald-400">{securityLevel.toFixed(1)}%</div>
            <div className="text-xs text-cyan-400/60 mt-1">Quantum protected</div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Lock className="w-6 h-6 text-purple-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">
                Active
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Protocols</div>
            <div className="text-2xl font-bold text-purple-400">4/4</div>
            <div className="text-xs text-cyan-400/60 mt-1">All systems online</div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Eye className="w-6 h-6 text-amber-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
                Monitoring
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Threats Blocked</div>
            <div className="text-2xl font-bold text-amber-400">526</div>
            <div className="text-xs text-cyan-400/60 mt-1">Last 24 hours</div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-400/30">
                Alert
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Active Incidents</div>
            <div className="text-2xl font-bold text-red-400">3</div>
            <div className="text-xs text-cyan-400/60 mt-1">Under investigation</div>
          </div>
        </div>
      </div>

      {/* Security Protocols */}
      <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
        <h3 className="text-lg font-semibold text-cyan-100 mb-6 flex items-center gap-2">
          <Shield className="w-5 h-5 text-emerald-400" />
          Quantum Security Protocols
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {securityProtocols.map((protocol) => (
            <div
              key={protocol.id}
              className="bg-black/50 rounded-lg p-4 border border-cyan-500/10 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        protocol.status === "active"
                          ? "bg-emerald-500/10 border border-emerald-400/20"
                          : protocol.status === "warning"
                            ? "bg-amber-500/10 border border-amber-400/20"
                            : "bg-red-500/10 border border-red-400/20"
                      }`}
                    >
                      {protocol.status === "active" ? (
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                      ) : protocol.status === "warning" ? (
                        <AlertTriangle className="w-4 h-4 text-amber-400" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-red-400" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium text-cyan-100">{protocol.name}</h4>
                      <p className="text-sm text-cyan-300/60">{protocol.description}</p>
                    </div>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs border ${
                      protocol.level === "maximum"
                        ? "bg-emerald-500/20 border-emerald-400/30 text-emerald-300"
                        : protocol.level === "high"
                          ? "bg-cyan-500/20 border-cyan-400/30 text-cyan-300"
                          : "bg-amber-500/20 border-amber-400/30 text-amber-300"
                    }`}
                  >
                    {protocol.level}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-cyan-300/70">Encryption Strength</span>
                    <span className="text-cyan-100 font-medium">{protocol.strength}-bit</span>
                  </div>

                  <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full transition-all duration-1000"
                      style={{ width: `${(protocol.strength / 512) * 100}%` }}
                    />
                  </div>

                  <div className="text-xs text-cyan-400/60">Last Update: {protocol.lastUpdate}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Threat Matrix */}
      <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
        <h3 className="text-lg font-semibold text-cyan-100 mb-6 flex items-center gap-2">
          <Brain className="w-5 h-5 text-purple-400" />
          Neural Threat Matrix
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-cyan-500/20">
                <th className="text-left py-4 px-2 text-cyan-300 font-medium">Threat Type</th>
                <th className="text-center py-4 px-2 text-cyan-300 font-medium">Risk Level</th>
                <th className="text-right py-4 px-2 text-cyan-300 font-medium">Active Incidents</th>
                <th className="text-right py-4 px-2 text-cyan-300 font-medium">Blocked Today</th>
                <th className="text-center py-4 px-2 text-cyan-300 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {threatMatrix.map((threat) => (
                <tr key={threat.type} className="border-b border-cyan-500/10 hover:bg-cyan-500/5 transition-colors">
                  <td className="py-4 px-2">
                    <div className="font-medium text-cyan-100">{threat.type}</div>
                  </td>
                  <td className="py-4 px-2 text-center">
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border ${
                        threat.risk === "low"
                          ? "bg-emerald-500/20 border-emerald-400/30 text-emerald-300"
                          : threat.risk === "medium"
                            ? "bg-amber-500/20 border-amber-400/30 text-amber-300"
                            : "bg-red-500/20 border-red-400/30 text-red-300"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          threat.risk === "low"
                            ? "bg-emerald-400"
                            : threat.risk === "medium"
                              ? "bg-amber-400"
                              : "bg-red-400 animate-pulse"
                        }`}
                      />
                      {threat.risk}
                    </div>
                  </td>
                  <td className="py-4 px-2 text-right">
                    <span className={threat.incidents === 0 ? "text-emerald-400" : "text-red-400"}>
                      {threat.incidents}
                    </span>
                  </td>
                  <td className="py-4 px-2 text-right text-cyan-300">{threat.blocked}</td>
                  <td className="py-4 px-2 text-center">
                    <div className="w-8 h-8 rounded-full border-2 border-emerald-400 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quantum Shield Visualization */}
      <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
        <h3 className="text-lg font-semibold text-cyan-100 mb-6 flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-400" />
          Quantum Security Shield
        </h3>

        <div className="relative h-64 bg-black/50 rounded-lg border border-cyan-500/10 overflow-hidden">
          {/* Shield Visualization */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Outer Shield Ring */}
              <div
                className="w-48 h-48 rounded-full border-2 border-cyan-400/30 animate-spin"
                style={{ animationDuration: "20s" }}
              >
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full transform -translate-x-1/2 translate-y-1" />
                <div className="absolute left-0 top-1/2 w-2 h-2 bg-emerald-400 rounded-full transform -translate-x-1 -translate-y-1/2" />
                <div className="absolute right-0 top-1/2 w-2 h-2 bg-amber-400 rounded-full transform translate-x-1 -translate-y-1/2" />
              </div>

              {/* Inner Shield Ring */}
              <div
                className="absolute inset-4 rounded-full border border-purple-400/40 animate-spin"
                style={{ animationDuration: "15s", animationDirection: "reverse" }}
              >
                <div className="absolute top-2 left-1/2 w-1 h-1 bg-purple-400 rounded-full transform -translate-x-1/2" />
                <div className="absolute bottom-2 left-1/2 w-1 h-1 bg-cyan-400 rounded-full transform -translate-x-1/2" />
              </div>

              {/* Core */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-400/20 border border-emerald-400/50 flex items-center justify-center">
                <Shield className="w-8 h-8 text-emerald-400 animate-pulse" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-sm">
            <div className="text-cyan-300/70">Shield Integrity: {securityLevel.toFixed(1)}%</div>
            <div className="text-emerald-300">Quantum Encryption: Active</div>
          </div>
        </div>
      </div>
    </div>
  )
}
