"use client"

import { useState } from "react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
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
      {/* Quantum Particle System */}
      <QuantumParticles />

      {/* Neural Network Background */}
      <NeuralBackground />

      {/* Main Dashboard */}
      <SidebarProvider>
        <div className="flex min-h-screen relative z-10">
          <QuantumSidebar activeModule={activeModule} setActiveModule={setActiveModule} />

          <SidebarInset className="flex-1">
            <QuantumMainInterface
              activeModule={activeModule}
              quantumState={quantumState}
              setQuantumState={setQuantumState}
              aiConsciousnessActive={aiConsciousnessActive}
              setAiConsciousnessActive={setAiConsciousnessActive}
            />
          </SidebarInset>
        </div>
      </SidebarProvider>

      {/* AI Consciousness Panel */}
      {aiConsciousnessActive && <AIConsciousness onClose={() => setAiConsciousnessActive(false)} />}
    </div>
  )
}
