"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface PerformanceChartProps {
  data: Array<{ name: string; pnl: number }>
}

export function PerformanceChart({ data }: PerformanceChartProps) {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="name" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #334155",
              borderRadius: "8px",
              color: "#f1f5f9",
            }}
          />
          <Area type="monotone" dataKey="pnl" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
