import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, TrendingDown, PiggyBank, Activity, Brain } from "lucide-react";
import { StatCard } from "@/components/stat-card";
import { dashboardStats, monthlyData, categoryData } from "@/lib/mock-data";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export const Route = createFileRoute("/_app/dashboard")({
  component: DashboardPage,
});

function DashboardPage() {
  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Welcome back! Here's your financial overview.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Balance"
          value={fmt(dashboardStats.totalBalance)}
          change="+12.5% from last month"
          changeType="positive"
          icon={<DollarSign className="h-5 w-5" />}
          delay={0}
        />
        <StatCard
          title="Monthly Income"
          value={fmt(dashboardStats.monthlyIncome)}
          change="+8.2% from last month"
          changeType="positive"
          icon={<TrendingUp className="h-5 w-5" />}
          delay={0.1}
        />
        <StatCard
          title="Monthly Expenses"
          value={fmt(dashboardStats.monthlyExpenses)}
          change="-3.1% from last month"
          changeType="positive"
          icon={<TrendingDown className="h-5 w-5" />}
          delay={0.2}
        />
        <StatCard
          title="Savings"
          value={fmt(dashboardStats.savings)}
          change="+22% from last month"
          changeType="positive"
          icon={<PiggyBank className="h-5 w-5" />}
          delay={0.3}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card rounded-xl p-6 lg:col-span-2"
        >
          <h3 className="font-display text-lg font-semibold">Income vs Expenses</h3>
          <p className="text-sm text-muted-foreground">6-month trend</p>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-chart-1)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="var(--color-chart-1)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="expenseGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-chart-5)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="var(--color-chart-5)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "8px",
                    color: "var(--color-foreground)",
                  }}
                />
                <Area type="monotone" dataKey="income" stroke="var(--color-chart-1)" fill="url(#incomeGrad)" strokeWidth={2} />
                <Area type="monotone" dataKey="expenses" stroke="var(--color-chart-5)" fill="url(#expenseGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card rounded-xl p-6"
        >
          <h3 className="font-display text-lg font-semibold">Spending by Category</h3>
          <div className="mt-4 h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={index} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "8px",
                    color: "var(--color-foreground)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 space-y-2">
            {categoryData.slice(0, 4).map((cat) => (
              <div key={cat.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full" style={{ backgroundColor: cat.fill }} />
                  <span className="text-muted-foreground">{cat.name}</span>
                </div>
                <span className="font-mono text-foreground">${cat.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card rounded-xl p-6"
        >
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            <h3 className="font-display text-lg font-semibold">Financial Health Score</h3>
          </div>
          <div className="mt-6 flex items-center justify-center">
            <div className="relative flex h-32 w-32 items-center justify-center">
              <svg className="h-32 w-32 -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-muted)" strokeWidth="8" />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="8"
                  strokeDasharray={`${dashboardStats.healthScore * 2.51} 251`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute text-center">
                <span className="font-display text-3xl font-bold text-foreground">{dashboardStats.healthScore}</span>
                <span className="block text-xs text-muted-foreground">/100</span>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">Your financial health is <span className="font-semibold text-success">Good</span></p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="glass-card rounded-xl p-6"
        >
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <h3 className="font-display text-lg font-semibold">AI Recommendations</h3>
          </div>
          <div className="mt-4 space-y-3">
            {[
              { text: "Reduce dining out by 15% to save $280/month", type: "savings" },
              { text: "Move $2,000 to high-yield savings for +$45/yr", type: "invest" },
              { text: "Cancel unused gym membership — $59/month", type: "cut" },
            ].map((rec) => (
              <div key={rec.text} className="flex items-start gap-3 rounded-lg bg-muted/50 p-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
                  <Brain className="h-3 w-3 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">{rec.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
