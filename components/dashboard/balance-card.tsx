"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet } from "lucide-react"

interface BalanceCardProps {
  balance: number
  change24h: number
}

export function BalanceCard({ balance, change24h }: BalanceCardProps) {
  const isPositive = change24h >= 0
  
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Wallet className="h-4 w-4 text-muted-foreground" />
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Total Balance
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-1">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold tracking-tight">
            {balance.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
          <span className="text-lg font-medium text-muted-foreground">USDC</span>
        </div>
        <p className={`text-sm font-medium ${isPositive ? "text-chart-1" : "text-chart-2"}`}>
          {isPositive ? "+" : ""}{change24h.toFixed(2)}% (24h)
        </p>
      </CardContent>
    </Card>
  )
}
