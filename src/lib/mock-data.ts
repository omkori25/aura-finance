export const dashboardStats = {
  totalBalance: 284750.32,
  monthlyIncome: 18420.0,
  monthlyExpenses: 12340.5,
  savings: 6079.5,
  healthScore: 82,
};

export const monthlyData = [
  { month: "Jan", income: 15200, expenses: 11800 },
  { month: "Feb", income: 16100, expenses: 10200 },
  { month: "Mar", income: 17800, expenses: 13400 },
  { month: "Apr", income: 16500, expenses: 11900 },
  { month: "May", income: 18200, expenses: 12100 },
  { month: "Jun", income: 18420, expenses: 12340 },
];

export const categoryData = [
  { name: "Housing", value: 3200, fill: "var(--color-chart-1)" },
  { name: "Food", value: 1800, fill: "var(--color-chart-2)" },
  { name: "Transport", value: 950, fill: "var(--color-chart-3)" },
  { name: "Shopping", value: 2100, fill: "var(--color-chart-4)" },
  { name: "Entertainment", value: 780, fill: "var(--color-chart-5)" },
  { name: "Other", value: 3510, fill: "var(--color-muted-foreground)" },
];

export const transactions = [
  { id: "1", amount: -89.99, merchant: "Amazon", category: "Shopping", date: "2026-05-03", type: "Credit Card", status: "completed", aiCategory: true },
  { id: "2", amount: -42.5, merchant: "Uber Eats", category: "Food", date: "2026-05-02", type: "Debit Card", status: "completed", aiCategory: true },
  { id: "3", amount: 5200.0, merchant: "Salary Deposit", category: "Income", date: "2026-05-01", type: "Bank Transfer", status: "completed", aiCategory: false },
  { id: "4", amount: -156.0, merchant: "Electric Company", category: "Utilities", date: "2026-04-30", type: "Auto-Pay", status: "completed", aiCategory: false },
  { id: "5", amount: -34.99, merchant: "Netflix", category: "Entertainment", date: "2026-04-29", type: "Credit Card", status: "completed", aiCategory: true },
  { id: "6", amount: -220.0, merchant: "Whole Foods", category: "Food", date: "2026-04-28", type: "Debit Card", status: "completed", aiCategory: true },
  { id: "7", amount: -1850.0, merchant: "Rent Payment", category: "Housing", date: "2026-04-27", type: "Bank Transfer", status: "completed", aiCategory: false },
  { id: "8", amount: -67.0, merchant: "Shell Gas", category: "Transport", date: "2026-04-26", type: "Credit Card", status: "pending", aiCategory: true },
  { id: "9", amount: 1200.0, merchant: "Freelance Payment", category: "Income", date: "2026-04-25", type: "Bank Transfer", status: "completed", aiCategory: false },
  { id: "10", amount: -15.99, merchant: "Spotify", category: "Entertainment", date: "2026-04-24", type: "Credit Card", status: "completed", aiCategory: true },
];

export const aiInsights = [
  { id: "1", title: "Overspending Alert", description: "Your dining expenses are 23% higher than last month. Consider meal prepping to save ~$340/month.", type: "warning" as const, impact: "$340/mo" },
  { id: "2", title: "Savings Opportunity", description: "Based on your income pattern, you could increase your emergency fund by $500/month without impacting lifestyle.", type: "success" as const, impact: "$500/mo" },
  { id: "3", title: "Subscription Audit", description: "You have 3 streaming services with overlapping content. Consolidating could save $25/month.", type: "info" as const, impact: "$25/mo" },
  { id: "4", title: "Investment Suggestion", description: "Your savings account yields 0.5% APY. Moving to a high-yield account could earn $180 more annually.", type: "success" as const, impact: "$180/yr" },
];

export const fraudAlerts = [
  { id: "1", merchant: "Unknown ATM - Lagos", amount: -500.0, riskScore: 95, date: "2026-05-03 14:32", status: "blocked", reason: "Unusual location" },
  { id: "2", merchant: "CryptoExchange XYZ", amount: -2340.0, riskScore: 87, date: "2026-05-02 09:15", status: "flagged", reason: "New merchant, large amount" },
  { id: "3", merchant: "Online Store #4821", amount: -189.99, riskScore: 72, date: "2026-05-01 22:45", status: "reviewing", reason: "Suspicious pattern" },
  { id: "4", merchant: "Gas Station - 2AM", amount: -45.0, riskScore: 45, date: "2026-04-30 02:12", status: "cleared", reason: "Unusual time" },
];

export const chatMessages = [
  { id: "1", role: "assistant" as const, content: "Hello! I'm FinAI, your personal financial assistant. I can help you analyze spending, predict expenses, and optimize your budget. What would you like to know?" },
  { id: "2", role: "user" as const, content: "Where did I spend the most this month?" },
  { id: "3", role: "assistant" as const, content: "Based on your transactions this month, here's your spending breakdown:\n\n1. **Housing** — $3,200 (26%)\n2. **Shopping** — $2,100 (17%)\n3. **Food & Dining** — $1,800 (15%)\n4. **Transport** — $950 (8%)\n5. **Entertainment** — $780 (6%)\n\nYour biggest expense category is **Housing** at $3,200. This is within the recommended 30% of income guideline. However, your **Shopping** spending has increased 18% compared to last month. Would you like tips on reducing shopping expenses?" },
];
