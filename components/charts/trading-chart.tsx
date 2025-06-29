"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface TradingChartProps {
  data: Array<{ time: string; price: number; volume: number }>
}

export function TradingChart({ data }: TradingChartProps) {
  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="time" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #334155",
              borderRadius: "8px",
              color: "#f1f5f9",
            }}
          />
          <Line type="monotone" dataKey="price" stroke="#10b981" strokeWidth={2} dot={{ fill: "#10b981" }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
