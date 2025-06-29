"use client"

import { useState } from "react"
import { Settings, Brain, Zap, Shield, Database, Cpu, Eye, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

const configSections = [
  {
    id: "neural",
    name: "Neural Configuration",
    icon: Brain,
    color: "purple",
    settings: [
      { key: "learning_rate", label: "Learning Rate", value: "0.001", type: "number" },
      { key: "neural_depth", label: "Neural Network Depth", value: "12", type: "number" },
      { key: "consciousness_level", label: "Consciousness Level", value: "7", type: "range" },
      { key: "auto_evolution", label: "Auto Evolution", value: true, type: "boolean" },
    ],
  },
  {
    id: "quantum",
    name: "Quantum Settings",
    icon: Zap,
    color: "cyan",
    settings: [
      { key: "coherence_threshold", label: "Coherence Threshold", value: "0.95", type: "number" },
      { key: "entanglement_pairs", label: "Entanglement Pairs", value: "1024", type: "number" },
      { key: "quantum_error_correction", label: "Error Correction", value: true, type: "boolean" },
      { key: "superposition_states", label: "Superposition States", value: "256", type: "number" },
    ],
  },
  {
    id: "security",
    name: "Security Protocols",
    icon: Shield,
    color: "emerald",
    settings: [
      { key: "encryption_level", label: "Encryption Level", value: "quantum-256", type: "select" },
      { key: "biometric_auth", label: "Biometric Authentication", value: true, type: "boolean" },
      { key: "neural_firewall", label: "Neural Firewall", value: true, type: "boolean" },
      { key: "threat_detection", label: "Real-time Threat Detection", value: true, type: "boolean" },
    ],
  },
  {
    id: "performance",
    name: "Performance Tuning",
    icon: Cpu,
    color: "amber",
    settings: [
      { key: "processing_cores", label: "Active Processing Cores", value: "4", type: "range" },
      { key: "memory_allocation", label: "Memory Allocation (TB)", value: "24", type: "number" },
      { key: "cache_size", label: "Neural Cache Size (GB)", value: "512", type: "number" },
      { key: "optimization_mode", label: "Optimization Mode", value: "adaptive", type: "select" },
    ],
  },
]

export function ConfigurationView() {
  const [activeSection, setActiveSection] = useState("neural")
  const [settings, setSettings] = useState<Record<string, any>>({})

  const updateSetting = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const activeConfig = configSections.find((section) => section.id === activeSection)

  return (
    <div className="space-y-6">
      {/* Configuration Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Settings className="w-6 h-6 text-purple-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">
                Active
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Configuration</div>
            <div className="text-2xl font-bold text-purple-400">v2.1.0</div>
            <div className="text-xs text-cyan-400/60 mt-1">Quantum OS</div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Database className="w-6 h-6 text-emerald-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                Synced
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Parameters</div>
            <div className="text-2xl font-bold text-emerald-400">247</div>
            <div className="text-xs text-cyan-400/60 mt-1">Total settings</div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Eye className="w-6 h-6 text-cyan-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                Monitoring
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Health Status</div>
            <div className="text-2xl font-bold text-cyan-400">98.7%</div>
            <div className="text-xs text-cyan-400/60 mt-1">System optimal</div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <Bell className="w-6 h-6 text-amber-400" />
              <div className="text-xs px-2 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
                Recent
              </div>
            </div>
            <div className="text-sm text-cyan-300/70">Last Backup</div>
            <div className="text-2xl font-bold text-amber-400">2h ago</div>
            <div className="text-xs text-cyan-400/60 mt-1">Auto-saved</div>
          </div>
        </div>
      </div>

      {/* Configuration Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Section Navigation */}
        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
          <h3 className="text-lg font-semibold text-cyan-100 mb-4">Configuration Modules</h3>
          <div className="space-y-2">
            {configSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full p-3 rounded-lg border transition-all duration-300 group relative overflow-hidden ${
                  activeSection === section.id
                    ? `bg-gradient-to-r from-${section.color}-500/20 to-purple-500/20 border-${section.color}-400/50`
                    : "bg-black/30 border-cyan-500/20 hover:border-cyan-400/40 hover:bg-cyan-500/10"
                }`}
              >
                <div className="flex items-center gap-3">
                  <section.icon className={`w-5 h-5 text-${section.color}-400`} />
                  <span className="text-cyan-100 font-medium">{section.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Configuration Panel */}
        <div className="lg:col-span-3 bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
          {activeConfig && (
            <>
              <h3 className="text-lg font-semibold text-cyan-100 mb-6 flex items-center gap-2">
                <activeConfig.icon className={`w-5 h-5 text-${activeConfig.color}-400`} />
                {activeConfig.name}
              </h3>

              <div className="space-y-6">
                {activeConfig.settings.map((setting) => (
                  <div key={setting.key} className="space-y-2">
                    <label className="text-sm text-cyan-300 font-medium">{setting.label}</label>

                    {setting.type === "boolean" && (
                      <div className="flex items-center gap-3">
                        <Switch
                          checked={settings[setting.key] ?? setting.value}
                          onCheckedChange={(checked) => updateSetting(setting.key, checked)}
                        />
                        <span className="text-cyan-300/70 text-sm">
                          {(settings[setting.key] ?? setting.value) ? "Enabled" : "Disabled"}
                        </span>
                      </div>
                    )}

                    {setting.type === "number" && (
                      <Input
                        type="number"
                        value={settings[setting.key] ?? setting.value}
                        onChange={(e) => updateSetting(setting.key, e.target.value)}
                        className="bg-black/50 border-cyan-500/30 text-cyan-100 focus:border-cyan-400"
                      />
                    )}

                    {setting.type === "range" && (
                      <div className="space-y-2">
                        <input
                          type="range"
                          min="1"
                          max="10"
                          value={settings[setting.key] ?? setting.value}
                          onChange={(e) => updateSetting(setting.key, e.target.value)}
                          className="w-full h-2 bg-black/50 rounded-lg appearance-none cursor-pointer slider"
                        />
                        <div className="flex justify-between text-xs text-cyan-400/60">
                          <span>1</span>
                          <span className="text-cyan-300">Current: {settings[setting.key] ?? setting.value}</span>
                          <span>10</span>
                        </div>
                      </div>
                    )}

                    {setting.type === "select" && (
                      <select
                        value={settings[setting.key] ?? setting.value}
                        onChange={(e) => updateSetting(setting.key, e.target.value)}
                        className="w-full bg-black/50 border border-cyan-500/30 rounded-md px-3 py-2 text-cyan-100 focus:border-cyan-400 focus:outline-none"
                      >
                        {setting.key === "encryption_level" && (
                          <>
                            <option value="quantum-256">Quantum 256-bit</option>
                            <option value="quantum-512">Quantum 512-bit</option>
                            <option value="quantum-1024">Quantum 1024-bit</option>
                          </>
                        )}
                        {setting.key === "optimization_mode" && (
                          <>
                            <option value="adaptive">Adaptive</option>
                            <option value="performance">Performance</option>
                            <option value="efficiency">Efficiency</option>
                            <option value="balanced">Balanced</option>
                          </>
                        )}
                      </select>
                    )}
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8 pt-6 border-t border-cyan-500/20">
                <Button className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 hover:from-emerald-500/30 hover:to-cyan-500/30 text-emerald-300">
                  Apply Changes
                </Button>
                <Button
                  variant="outline"
                  className="border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 text-cyan-300 bg-transparent"
                >
                  Reset to Defaults
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/10 text-purple-300 bg-transparent"
                >
                  Export Config
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* System Information */}
      <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
        <h3 className="text-lg font-semibold text-cyan-100 mb-6 flex items-center gap-2">
          <Database className="w-5 h-5 text-purple-400" />
          System Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h4 className="text-cyan-300 font-medium">Hardware</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-cyan-300/70">Quantum Processors</span>
                <span className="text-cyan-100">4x QC-7000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyan-300/70">Neural Cores</span>
                <span className="text-cyan-100">128 cores</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyan-300/70">Memory</span>
                <span className="text-cyan-100">27 TB Quantum RAM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyan-300/70">Storage</span>
                <span className="text-cyan-100">∞ Holographic</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-cyan-300 font-medium">Software</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-cyan-300/70">OS Version</span>
                <span className="text-cyan-100">QuantumOS 2.1.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyan-300/70">Neural Engine</span>
                <span className="text-cyan-100">AETHEL v7.3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyan-300/70">Quantum Runtime</span>
                <span className="text-cyan-100">QR-2024.1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyan-300/70">Last Update</span>
                <span className="text-cyan-100">2024-01-15</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-cyan-300 font-medium">Performance</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-cyan-300/70">CPU Usage</span>
                <span className="text-emerald-400">12.3%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyan-300/70">Memory Usage</span>
                <span className="text-emerald-400">73.8%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyan-300/70">Quantum Coherence</span>
                <span className="text-emerald-400">94.7%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyan-300/70">Uptime</span>
                <span className="text-emerald-400">247d 12h 34m</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
