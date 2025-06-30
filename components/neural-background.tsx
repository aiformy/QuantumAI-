"use client"

export function NeuralBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Simplified neural network grid for better performance */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="neural-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="#00ffff" opacity="0.2">
                <animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite" />
              </circle>
              <line x1="50" y1="50" x2="100" y2="50" stroke="#00ffff" strokeWidth="0.3" opacity="0.1" />
              <line x1="50" y1="50" x2="50" y2="100" stroke="#00ffff" strokeWidth="0.3" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)" />
        </svg>
      </div>

      {/* Reduced quantum field lines for performance */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{
              top: `${Math.random() * 100}%`,
              left: 0,
              right: 0,
              animationDelay: `${Math.random() * 8}s`,
            }}
          >
            <div className="h-full w-full animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  )
}