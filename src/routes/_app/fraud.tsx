import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shield, AlertTriangle, CheckCircle, Eye, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { fraudAlerts } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/fraud")({
  component: FraudPage,
});

function FraudPage() {
  const statusIcon = (status: string) => {
    switch (status) {
      case "blocked": return <XCircle className="h-4 w-4 text-destructive" />;
      case "flagged": return <AlertTriangle className="h-4 w-4 text-warning" />;
      case "reviewing": return <Eye className="h-4 w-4 text-chart-2" />;
      case "cleared": return <CheckCircle className="h-4 w-4 text-success" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Fraud Detection</h1>
        <p className="text-sm text-muted-foreground">AI-powered real-time transaction monitoring.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Blocked", count: 1, color: "text-destructive", bg: "bg-destructive/10" },
          { label: "Under Review", count: 2, color: "text-warning", bg: "bg-warning/10" },
          { label: "Cleared", count: 1, color: "text-success", bg: "bg-success/10" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-xl p-5"
          >
            <div className={`inline-flex items-center gap-2 rounded-lg px-2 py-1 text-xs font-semibold ${stat.bg} ${stat.color}`}>
              <Shield className="h-3 w-3" /> {stat.label}
            </div>
            <p className="mt-3 font-display text-3xl font-bold text-foreground">{stat.count}</p>
          </motion.div>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="font-display text-lg font-semibold">Alert Timeline</h2>
        {fraudAlerts.map((alert, i) => (
          <motion.div
            key={alert.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-xl p-5"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-destructive/10">
                  {statusIcon(alert.status)}
                </div>
                <div>
                  <p className="font-medium text-foreground">{alert.merchant}</p>
                  <p className="text-sm text-muted-foreground">{alert.reason}</p>
                  <p className="text-xs text-muted-foreground">{alert.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="font-mono text-lg font-bold text-destructive">
                    ${Math.abs(alert.amount).toLocaleString()}
                  </p>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-muted-foreground">Risk:</span>
                    <div className="h-1.5 w-16 overflow-hidden rounded-full bg-muted">
                      <div
                        className={`h-full rounded-full ${alert.riskScore > 80 ? "bg-destructive" : alert.riskScore > 60 ? "bg-warning" : "bg-success"}`}
                        style={{ width: `${alert.riskScore}%` }}
                      />
                    </div>
                    <span className="text-xs font-bold text-foreground">{alert.riskScore}%</span>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className={`capitalize ${
                    alert.status === "blocked" ? "border-destructive/30 text-destructive" :
                    alert.status === "flagged" ? "border-warning/30 text-warning" :
                    alert.status === "reviewing" ? "border-chart-2/30 text-chart-2" :
                    "border-success/30 text-success"
                  }`}
                >
                  {alert.status}
                </Badge>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
