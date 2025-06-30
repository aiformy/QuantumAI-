"use client"

import { useState } from "react"
import { QuantumSidebar } from "@/components/quantum-sidebar"
import { QuantumMainInterface } from "@/components/quantum-main-interface"
import { AIConsciousness } from "@/components/ai-consciousness"

export default function QuantumTradingDashboard() {
  const [activeModule, setActiveModule] = useState("neural-core")
  const [quantumState, setQuantumState] = useState("entangled")
  const [aiConsciousnessActive, setAiConsciousnessActive] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Main Layout */}
      <div className="flex h-screen">
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
          <div className="w-96 bg-card border-l border-border">
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