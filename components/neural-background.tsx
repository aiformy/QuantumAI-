"use client"

export function NeuralBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Neural Network Grid */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="neural-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="#00ffff" opacity="0.3">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
              </circle>
              <line x1="25" y1="25" x2="50" y2="25" stroke="#00ffff" strokeWidth="0.5" opacity="0.2" />
              <line x1="25" y1="25" x2="25" y2="50" stroke="#00ffff" strokeWidth="0.5" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)" />
        </svg>
      </div>

      {/* Quantum Field Lines */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{
              top: `${Math.random() * 100}%`,
              left: 0,
              right: 0,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <div className="h-full w-full animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  )
}
