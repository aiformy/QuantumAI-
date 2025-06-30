"use client"

import { useState } from "react"
import { QuantumSidebar } from "@/components/quantum-sidebar"
import { QuantumMainInterface } from "@/components/quantum-main-interface"
import { AIConsciousness } from "@/components/ai-consciousness"
import { HolographicBackground } from "@/components/holographic-background"
import { QuantumParticles } from "@/components/quantum-particles"

export default function QuantumTradingDashboard2050() {
  const [activeModule, setActiveModule] = useState("neural-core")
  const [quantumState, setQuantumState] = useState("entangled")
  const [aiConsciousnessActive, setAiConsciousnessActive] = useState(false)
  const [holographicMode, setHolographicMode] = useState(true)

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Holographic Background Effects */}
      {holographicMode && <HolographicBackground />}
      <QuantumParticles />
      
      {/* Quantum Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-emerald-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
      </div>

      {/* Main Layout */}
      <div className="flex h-screen relative z-10">
        {/* Left Sidebar */}
        <QuantumSidebar 
          activeModule={activeModule} 
          setActiveModule={setActiveModule}
          holographicMode={holographicMode}
          setHolographicMode={setHolographicMode}
        />

        {/* Main Content */}
        <main className="flex-1 overflow-hidden">
          <QuantumMainInterface
            activeModule={activeModule}
            quantumState={quantumState}
            setQuantumState={setQuantumState}
            aiConsciousnessActive={aiConsciousnessActive}
            setAiConsciousnessActive={setAiConsciousnessActive}
            holographicMode={holographicMode}
          />
        </main>

        {/* Right Panel - AI Consciousness */}
        {aiConsciousnessActive && (
          <div className="w-96 bg-black/80 backdrop-blur-xl border-l border-cyan-500/30">
            <AIConsciousness 
              onClose={() => setAiConsciousnessActive(false)} 
              quantumState={quantumState}
            />
          </div>
        )}
      </div>
    </div>
  )
}