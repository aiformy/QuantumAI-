"use client"

import { useEffect, useState } from "react"

export function HolographicBackground() {
  const [hologramLines, setHologramLines] = useState<Array<{
    id: number;
    x1: string;
    y1: string;
    x2: string;
    y2: string;
    opacity: number;
    animationDelay: string;
  }>>([])

  useEffect(() => {
    // Generate holographic grid lines
    const lines = []
    
    // Vertical lines
    for (let i = 0; i < 20; i++) {
      lines.push({
        id: i,
        x1: `${i * 5}%`,
        y1: "0%",
        x2: `${i * 5}%`,
        y2: "100%",
        opacity: Math.random() * 0.3 + 0.1,
        animationDelay: `${Math.random() * 5}s`,
      })
    }
    
    // Horizontal lines
    for (let i = 0; i < 15; i++) {
      lines.push({
        id: i + 20,
        x1: "0%",
        y1: `${i * 6.67}%`,
        x2: "100%",
        y2: `${i * 6.67}%`,
        opacity: Math.random() * 0.3 + 0.1,
        animationDelay: `${Math.random() * 5}s`,
      })
    }
    
    setHologramLines(lines)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Holographic Grid */}
      <svg className="w-full h-full">
        <defs>
          <linearGradient id="hologramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 255, 255, 0.3)" />
            <stop offset="50%" stopColor="rgba(128, 0, 255, 0.2)" />
            <stop offset="100%" stopColor="rgba(255, 0, 128, 0.1)" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {hologramLines.map((line) => (
          <line
            key={line.id}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="url(#hologramGradient)"
            strokeWidth="0.5"
            opacity={line.opacity}
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDelay: line.animationDelay, animationDuration: "3s" }}
          />
        ))}
      </svg>

      {/* Floating Holographic Elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 border border-cyan-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            <div className="w-full h-full border border-purple-400/20 rounded-full animate-spin" 
                 style={{ animationDuration: `${8 + Math.random() * 4}s` }}>
              <div className="w-full h-full border border-emerald-400/20 rounded-full animate-ping"
                   style={{ animationDuration: `${6 + Math.random() * 3}s` }} />
            </div>
          </div>
        ))}
      </div>

      {/* Quantum Field Distortions */}
      <div className="absolute inset-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-radial from-cyan-400/10 via-purple-400/5 to-transparent rounded-full animate-pulse"
            style={{
              width: `${200 + Math.random() * 300}px`,
              height: `${200 + Math.random() * 300}px`,
              left: `${Math.random() * 70 + 15}%`,
              top: `${Math.random() * 70 + 15}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${5 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}