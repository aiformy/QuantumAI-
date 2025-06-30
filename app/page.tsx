"use client"

import { useState } from "react"
import { QuantumParticles } from "@/components/quantum-particles"
import { NeuralBackground } from "@/components/neural-background"
import { QuantumSidebar } from "@/components/quantum-sidebar"
import { QuantumMainInterface } from "@/components/quantum-main-interface"
import { AIConsciousness } from "@/components/ai-consciousness"

export default function QuantumTradingDashboard() {
  const [activeModule, setActiveModule] = useState("neural-core")
  const [quantumState, setQuantumState] = useState("entangled")
  const [aiConsciousnessActive, setAiConsciousnessActive] = useState(false)

  return (
    <div className="min-h-screen bg-black text-cyan-100 relative overflow-hidden">
      {/* Background Effects */}
      <QuantumParticles />
      <NeuralBackground />

      {/* Main Layout */}
      <div className="flex h-screen relative z-10">
        {/* Left Sidebar */}
        <QuantumSidebar activeModule={activeModule} setActiveModule={setActiveModule} />

        {/* Main Content */}
        <main className="flex-1 overflow-hidden">
          <QuantumMainInterface
            activeModule={activeModule}
            quantumState={quantumState}
            setQuantumState={setQuantumState}
            aiConsciousnessActive={aiConsciousnessActive}
            setAiConsciousnessActive={setAiConsciousnessActive}
          />
        </main>

        {/* Right Panel - AI Consciousness */}
        {aiConsciousnessActive && (
          <div className="w-96 bg-black border-l border-cyan-500/30">
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