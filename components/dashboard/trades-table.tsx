"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowDownRight, ArrowUpRight, ListFilter } from "lucide-react"
import { cn } from "@/lib/utils"

export interface Trade {
  id: string
  time: string
  pair: string
  direction: "LONG" | "SHORT"
  strategy: string
  entry: number
  exit: number | null
  pnl: number | null
  pnlPercent: number | null
  status: "OPEN" | "CLOSED" | "PENDING"
}

interface TradesTableProps {
  trades: Trade[]
}

export function TradesTable({ trades }: TradesTableProps) {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ListFilter className="h-4 w-4 text-muted-foreground" />
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Recent Trades
            </CardTitle>
          </div>
          <span className="text-xs text-muted-foreground">{trades.length} trades</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-xs text-muted-foreground font-medium">Time</TableHead>
                <TableHead className="text-xs text-muted-foreground font-medium">Pair</TableHead>
                <TableHead className="text-xs text-muted-foreground font-medium">Direction</TableHead>
                <TableHead className="text-xs text-muted-foreground font-medium">Strategy</TableHead>
                <TableHead className="text-xs text-muted-foreground font-medium text-right">Entry</TableHead>
                <TableHead className="text-xs text-muted-foreground font-medium text-right">Exit</TableHead>
                <TableHead className="text-xs text-muted-foreground font-medium text-right">PnL</TableHead>
                <TableHead className="text-xs text-muted-foreground font-medium text-right">PnL%</TableHead>
                <TableHead className="text-xs text-muted-foreground font-medium">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trades.map((trade) => (
                <TableRow key={trade.id} className="border-border hover:bg-secondary/50">
                  <TableCell className="text-xs font-mono text-muted-foreground">
                    {trade.time}
                  </TableCell>
                  <TableCell className="text-sm font-medium">{trade.pair}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {trade.direction === "LONG" ? (
                        <ArrowUpRight className="h-3 w-3 text-chart-1" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3 text-chart-2" />
                      )}
                      <span className={cn(
                        "text-xs font-medium",
                        trade.direction === "LONG" ? "text-chart-1" : "text-chart-2"
                      )}>
                        {trade.direction}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">{trade.strategy}</TableCell>
                  <TableCell className="text-right text-sm font-mono">
                    ${trade.entry.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right text-sm font-mono">
                    {trade.exit ? `$${trade.exit.toLocaleString()}` : "—"}
                  </TableCell>
                  <TableCell className={cn(
                    "text-right text-sm font-mono font-medium",
                    trade.pnl !== null && trade.pnl >= 0 ? "text-chart-1" : "text-chart-2"
                  )}>
                    {trade.pnl !== null ? (
                      <>
                        {trade.pnl >= 0 ? "+" : ""}{trade.pnl.toFixed(2)}
                      </>
                    ) : "—"}
                  </TableCell>
                  <TableCell className={cn(
                    "text-right text-sm font-mono font-medium",
                    trade.pnlPercent !== null && trade.pnlPercent >= 0 ? "text-chart-1" : "text-chart-2"
                  )}>
                    {trade.pnlPercent !== null ? (
                      <>
                        {trade.pnlPercent >= 0 ? "+" : ""}{trade.pnlPercent.toFixed(2)}%
                      </>
                    ) : "—"}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={cn(
                        "text-xs font-medium",
                        trade.status === "OPEN" && "bg-chart-4/20 text-chart-4 hover:bg-chart-4/30",
                        trade.status === "CLOSED" && "bg-secondary text-muted-foreground hover:bg-secondary",
                        trade.status === "PENDING" && "bg-chart-3/20 text-chart-3 hover:bg-chart-3/30"
                      )}
                    >
                      {trade.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
