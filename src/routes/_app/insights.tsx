import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Brain, AlertTriangle, TrendingUp, Target, Lightbulb, ArrowRight } from "lucide-react";
import { aiInsights } from "@/lib/mock-data";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export const Route = createFileRoute("/_app/insights")({
  component: InsightsPage,
});

const forecastData = [
  { month: "May", actual: 12340, predicted: 12340 },
  { month: "Jun", actual: null, predicted: 11800 },
  { month: "Jul", actual: null, predicted: 12100 },
  { month: "Aug", actual: null, predicted: 11500 },
  { month: "Sep", actual: null, predicted: 11200 },
  { month: "Oct", actual: null, predicted: 10800 },
];

function InsightsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">AI Insights</h1>
        <p className="text-sm text-muted-foreground">AI-generated financial analysis and recommendations.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {aiInsights.map((insight, i) => (
          <motion.div
            key={insight.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`glass-card rounded-xl p-5 border-l-4 ${
              insight.type === "warning"
                ? "border-l-warning"
                : insight.type === "success"
                  ? "border-l-success"
                  : "border-l-chart-2"
            }`}
          >
            <div className="flex items-center gap-2">
              {insight.type === "warning" ? (
                <AlertTriangle className="h-4 w-4 text-warning" />
              ) : insight.type === "success" ? (
                <TrendingUp className="h-4 w-4 text-success" />
              ) : (
                <Lightbulb className="h-4 w-4 text-chart-2" />
              )}
              <span className="text-xs font-semibold uppercase text-muted-foreground">{insight.type}</span>
            </div>
            <h3 className="mt-3 font-display text-sm font-semibold text-foreground">{insight.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{insight.description}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-lg font-bold text-primary">{insight.impact}</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card rounded-xl p-6"
        >
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            <h3 className="font-display text-lg font-semibold">Expense Forecast</h3>
          </div>
          <p className="text-sm text-muted-foreground">AI-predicted expenses for next 6 months</p>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={forecastData}>
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
                <Line type="monotone" dataKey="actual" stroke="var(--color-chart-1)" strokeWidth={2} dot={{ fill: "var(--color-chart-1)" }} />
                <Line type="monotone" dataKey="predicted" stroke="var(--color-chart-2)" strokeWidth={2} strokeDasharray="5 5" dot={{ fill: "var(--color-chart-2)" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card rounded-xl p-6"
        >
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <h3 className="font-display text-lg font-semibold">Budget Recommendations</h3>
          </div>
          <div className="mt-4 space-y-4">
            {[
              { category: "Food & Dining", current: 1800, recommended: 1500, savings: 300 },
              { category: "Shopping", current: 2100, recommended: 1600, savings: 500 },
              { category: "Entertainment", current: 780, recommended: 600, savings: 180 },
              { category: "Transport", current: 950, recommended: 800, savings: 150 },
            ].map((item) => (
              <div key={item.category} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground">{item.category}</span>
                  <span className="text-success">Save ${item.savings}/mo</span>
                </div>
                <div className="flex h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className="rounded-full bg-destructive/60"
                    style={{ width: `${(item.recommended / item.current) * 100}%` }}
                  />
                  <div
                    className="rounded-full bg-warning/40"
                    style={{ width: `${((item.current - item.recommended) / item.current) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Recommended: ${item.recommended}</span>
                  <span>Current: ${item.current}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
