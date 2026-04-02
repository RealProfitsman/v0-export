"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts"

interface PnLChartProps {
  data: { time: string; pnl: number }[]
}

export function PnLChart({ data }: PnLChartProps) {
  const currentPnL = data[data.length - 1]?.pnl || 0
  const isPositive = currentPnL >= 0
  
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
            <CardTitle className="text-sm font-medium text-muted-foreground">
              PnL (24h)
            </CardTitle>
          </div>
          <span className={`text-lg font-semibold ${isPositive ? "text-chart-1" : "text-chart-2"}`}>
            {isPositive ? "+" : ""}{currentPnL.toFixed(2)} USDC
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="hsl(var(--border))" 
                vertical={false}
              />
              <XAxis 
                dataKey="time" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={11}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
                labelStyle={{ color: "hsl(var(--muted-foreground))" }}
                itemStyle={{ color: "hsl(var(--foreground))" }}
              />
              <ReferenceLine y={0} stroke="hsl(var(--muted-foreground))" strokeDasharray="3 3" />
              <Line
                type="monotone"
                dataKey="pnl"
                stroke={isPositive ? "hsl(var(--chart-1))" : "hsl(var(--chart-2))"}
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: isPositive ? "hsl(var(--chart-1))" : "hsl(var(--chart-2))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
