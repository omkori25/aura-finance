import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: ReactNode;
  delay?: number;
}

export function StatCard({ title, value, change, changeType = "neutral", icon, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="glass-card rounded-xl p-6"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{title}</p>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
      </div>
      <p className="mt-2 font-display text-2xl font-bold text-foreground">{value}</p>
      {change && (
        <p
          className={`mt-1 text-xs ${
            changeType === "positive"
              ? "text-success"
              : changeType === "negative"
                ? "text-destructive"
                : "text-muted-foreground"
          }`}
        >
          {change}
        </p>
      )}
    </motion.div>
  );
}
