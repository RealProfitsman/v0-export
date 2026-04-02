"use client"

import { BalanceCard } from "@/components/dashboard/balance-card"
import { KPICard } from "@/components/dashboard/kpi-card"
import { PnLChart } from "@/components/dashboard/pnl-chart"
import { TradesTable, type Trade } from "@/components/dashboard/trades-table"
import { TrendingUp, Target, Activity, Scale, Bot } from "lucide-react"

// Sample data - replace with real API data
const pnlChartData = [
  { time: "00:00", pnl: 0 },
  { time: "02:00", pnl: 45.2 },
  { time: "04:00", pnl: 32.1 },
  { time: "06:00", pnl: 78.5 },
  { time: "08:00", pnl: 62.3 },
  { time: "10:00", pnl: 95.8 },
  { time: "12:00", pnl: 88.2 },
  { time: "14:00", pnl: 124.5 },
  { time: "16:00", pnl: 110.3 },
  { time: "18:00", pnl: 142.7 },
  { time: "20:00", pnl: 128.9 },
  { time: "22:00", pnl: 156.4 },
  { time: "Now", pnl: 168.32 },
]

const sampleTrades: Trade[] = [
  {
    id: "1",
    time: "14:32:05",
    pair: "BTC/USDC",
    direction: "LONG",
    strategy: "Momentum",
    entry: 67245.50,
    exit: 67892.30,
    pnl: 64.68,
    pnlPercent: 0.96,
    status: "CLOSED",
  },
  {
    id: "2",
    time: "13:45:22",
    pair: "ETH/USDC",
    direction: "SHORT",
    strategy: "Mean Reversion",
    entry: 3421.80,
    exit: 3389.50,
    pnl: 32.30,
    pnlPercent: 0.94,
    status: "CLOSED",
  },
  {
    id: "3",
    time: "12:18:47",
    pair: "SOL/USDC",
    direction: "LONG",
    strategy: "Breakout",
    entry: 142.35,
    exit: null,
    pnl: null,
    pnlPercent: null,
    status: "OPEN",
  },
  {
    id: "4",
    time: "11:05:33",
    pair: "BTC/USDC",
    direction: "SHORT",
    strategy: "RSI Divergence",
    entry: 67520.00,
    exit: 67680.20,
    pnl: -16.02,
    pnlPercent: -0.24,
    status: "CLOSED",
  },
  {
    id: "5",
    time: "10:22:11",
    pair: "ARB/USDC",
    direction: "LONG",
    strategy: "Momentum",
    entry: 0.8245,
    exit: 0.8412,
    pnl: 20.25,
    pnlPercent: 2.03,
    status: "CLOSED",
  },
  {
    id: "6",
    time: "09:15:08",
    pair: "ETH/USDC",
    direction: "LONG",
    strategy: "Breakout",
    entry: 3385.20,
    exit: 3421.80,
    pnl: 36.60,
    pnlPercent: 1.08,
    status: "CLOSED",
  },
  {
    id: "7",
    time: "08:42:55",
    pair: "LINK/USDC",
    direction: "SHORT",
    strategy: "Mean Reversion",
    entry: 14.82,
    exit: null,
    pnl: null,
    pnlPercent: null,
    status: "PENDING",
  },
  {
    id: "8",
    time: "07:30:19",
    pair: "BTC/USDC",
    direction: "LONG",
    strategy: "Momentum",
    entry: 66890.00,
    exit: 67245.50,
    pnl: 35.55,
    pnlPercent: 0.53,
    status: "CLOSED",
  },
]

export default function TradingDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary">
                <Bot className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-semibold">Trading Bot</h1>
                <p className="text-xs text-muted-foreground">Automated Trading System</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 rounded-full bg-chart-1/20 px-3 py-1">
                <div className="h-2 w-2 animate-pulse rounded-full bg-chart-1" />
                <span className="text-xs font-medium text-chart-1">Live</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="space-y-6">
          {/* Balance + KPIs Row */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-1">
              <BalanceCard balance={24856.32} change24h={2.34} />
            </div>
            <div className="grid gap-4 md:col-span-1 md:grid-cols-2 lg:col-span-4 lg:grid-cols-4">
              <KPICard
                title="Total PnL (30d)"
                value="+$2,847.52"
                change="+12.4% vs last month"
                changeType="positive"
                icon={TrendingUp}
              />
              <KPICard
                title="Win Rate"
                value="68.5%"
                change="Above target 65%"
                changeType="positive"
                icon={Target}
              />
              <KPICard
                title="Trades (30d)"
                value="142"
                change="4.7 trades/day avg"
                changeType="neutral"
                icon={Activity}
              />
              <KPICard
                title="Avg Risk/Reward"
                value="1:2.4"
                change="Target 1:2"
                changeType="positive"
                icon={Scale}
              />
            </div>
          </div>

          {/* Chart */}
          <PnLChart data={pnlChartData} />

          {/* Trades Table */}
          <TradesTable trades={sampleTrades} />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs text-muted-foreground">
            Last updated: {new Date().toLocaleString()} • All data synced in real-time
          </p>
        </div>
      </footer>
    </div>
  )
}
