import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Brain,
  Shield,
  Sparkles,
  ArrowRight,
  BarChart3,
  Zap,
  Lock,
  Star,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AnalyticsPreview />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
            <TrendingUp className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold">
            Fin<span className="text-primary">AI</span>
          </span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Features</a>
          <a href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Pricing</a>
          <a href="#testimonials" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Testimonials</a>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" size="sm">Sign In</Button>
          </Link>
          <Link to="/signup">
            <Button size="sm" className="gradient-primary border-0 text-primary-foreground">
              Get Started <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/4 right-0 h-[400px] w-[400px] rounded-full bg-chart-2/5 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs text-primary">
            <Sparkles className="h-3 w-3" /> Powered by Advanced AI
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Your Finances,{" "}
            <span className="gradient-text">Supercharged</span>
            <br />
            by AI
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            FinAI uses cutting-edge artificial intelligence to analyze your spending,
            detect fraud, and optimize your financial health — all in real-time.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/signup">
              <Button size="lg" className="gradient-primary border-0 px-8 text-primary-foreground glow-primary">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline">
                View Demo <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="glass-card rounded-2xl p-2 glow-primary">
            <div className="rounded-xl bg-card p-6">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { label: "Total Balance", value: "$284,750", change: "+12.5%" },
                  { label: "Monthly Income", value: "$18,420", change: "+8.2%" },
                  { label: "Expenses", value: "$12,340", change: "-3.1%" },
                  { label: "AI Score", value: "82/100", change: "+5pts" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="mt-1 font-display text-xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-success">{stat.change}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    { icon: Brain, title: "AI-Powered Insights", desc: "Get intelligent spending analysis, budget recommendations, and savings predictions powered by machine learning." },
    { icon: Shield, title: "Fraud Detection", desc: "Real-time monitoring with AI-driven fraud detection that catches suspicious transactions before they happen." },
    { icon: BarChart3, title: "Smart Analytics", desc: "Beautiful charts and breakdowns that make understanding your finances effortless." },
    { icon: Zap, title: "Instant Categorization", desc: "AI automatically categorizes every transaction with 99% accuracy — no manual tagging needed." },
    { icon: Lock, title: "Bank-Grade Security", desc: "End-to-end encryption and multi-factor authentication keep your data completely secure." },
    { icon: Sparkles, title: "AI Chatbot", desc: "Ask questions about your finances in natural language and get instant, actionable answers." },
  ];

  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold text-primary">Features</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
            Everything you need to master your money
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            FinAI combines the power of AI with beautiful design to give you a complete financial management experience.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card group rounded-xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnalyticsPreview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-primary">Analytics</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
              See where every dollar goes
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our AI engine processes your transactions in real-time, providing detailed breakdowns by category, merchant, and time period.
            </p>
            <ul className="mt-6 space-y-3">
              {["Real-time spending categorization", "Monthly trend analysis", "Predictive budget alerts", "Custom report generation"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                    <Sparkles className="h-3 w-3 text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="space-y-4">
              {[
                { category: "Housing", amount: "$3,200", pct: 26, color: "bg-chart-1" },
                { category: "Shopping", amount: "$2,100", pct: 17, color: "bg-chart-4" },
                { category: "Food & Dining", amount: "$1,800", pct: 15, color: "bg-chart-2" },
                { category: "Transport", amount: "$950", pct: 8, color: "bg-chart-3" },
                { category: "Entertainment", amount: "$780", pct: 6, color: "bg-chart-5" },
              ].map((item) => (
                <div key={item.category}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground">{item.category}</span>
                    <span className="text-muted-foreground">{item.amount} ({item.pct}%)</span>
                  </div>
                  <div className="mt-1 h-2 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.pct * 3}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className={`h-full rounded-full ${item.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans = [
    { name: "Free", price: "$0", period: "/forever", features: ["Basic analytics", "Manual categorization", "5 accounts", "Email support"], highlighted: false },
    { name: "Pro", price: "$12", period: "/month", features: ["AI categorization", "Fraud detection", "Unlimited accounts", "AI chatbot", "Receipt scanning", "Priority support"], highlighted: true },
    { name: "Enterprise", price: "$49", period: "/month", features: ["Everything in Pro", "Custom AI models", "Team collaboration", "API access", "Dedicated support", "SLA guarantee"], highlighted: false },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold text-primary">Pricing</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Simple, transparent pricing</h2>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl p-8 ${plan.highlighted ? "gradient-primary text-primary-foreground glow-primary" : "glass-card"}`}
            >
              <h3 className="font-display text-lg font-semibold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm ${plan.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                    <Sparkles className="h-3 w-3" /> {f}
                  </li>
                ))}
              </ul>
              <Button className={`mt-8 w-full ${plan.highlighted ? "bg-background text-foreground hover:bg-background/90" : ""}`} variant={plan.highlighted ? "default" : "outline"}>
                {plan.name === "Free" ? "Get Started" : "Upgrade Now"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    { name: "Sarah Chen", role: "CEO, TechFlow", quote: "FinAI saved us $40K in the first quarter by identifying redundant subscriptions and optimizing our spending patterns.", avatar: "SC" },
    { name: "Marcus Johnson", role: "Freelancer", quote: "The AI chatbot is incredible. I just ask 'How much did I spend on food?' and get instant, accurate answers.", avatar: "MJ" },
    { name: "Emily Park", role: "CFO, StartupXYZ", quote: "The fraud detection caught a suspicious transaction within seconds. That alone pays for the entire service.", avatar: "EP" },
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold text-primary">Testimonials</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Loved by thousands</h2>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-warning text-warning" />
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">"{t.quote}"</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="gradient-primary rounded-3xl p-12"
        >
          <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
            Ready to transform your finances?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Join 50,000+ users who trust FinAI to manage their money intelligently.
          </p>
          <Link to="/signup">
            <Button size="lg" className="mt-8 bg-background text-foreground hover:bg-background/90">
              Start Free — No Credit Card <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
              <TrendingUp className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold">
              Fin<span className="text-primary">AI</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 FinAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
