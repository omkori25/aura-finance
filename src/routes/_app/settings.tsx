import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { User, Shield, Bell, Plug, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useThemeStore } from "@/stores/theme-store";

export const Route = createFileRoute("/_app/settings")({
  component: SettingsPage,
});

function SettingsPage() {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="font-display text-2xl font-bold">Settings</h1>
        <p className="text-sm text-muted-foreground">Manage your account and preferences.</p>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <User className="h-5 w-5 text-primary" />
          <h3 className="font-display text-lg font-semibold">Profile</h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm text-muted-foreground">Full Name</label>
            <Input defaultValue="John Doe" className="mt-1" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Email</label>
            <Input defaultValue="john@example.com" className="mt-1" />
          </div>
        </div>
        <Button className="mt-4" size="sm">Save Changes</Button>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="h-5 w-5 text-primary" />
          <h3 className="font-display text-lg font-semibold">Security</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Two-Factor Authentication</p>
              <p className="text-xs text-muted-foreground">Add an extra layer of security</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Biometric Login</p>
              <p className="text-xs text-muted-foreground">Use fingerprint or face ID</p>
            </div>
            <Switch />
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Bell className="h-5 w-5 text-primary" />
          <h3 className="font-display text-lg font-semibold">Notifications</h3>
        </div>
        <div className="space-y-4">
          {["Transaction Alerts", "Budget Warnings", "Fraud Alerts", "Weekly Reports"].map((n) => (
            <div key={n} className="flex items-center justify-between">
              <p className="text-sm text-foreground">{n}</p>
              <Switch defaultChecked />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          {isDark ? <Moon className="h-5 w-5 text-primary" /> : <Sun className="h-5 w-5 text-primary" />}
          <h3 className="font-display text-lg font-semibold">Appearance</h3>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">Dark Mode</p>
            <p className="text-xs text-muted-foreground">Toggle between light and dark theme</p>
          </div>
          <Switch checked={isDark} onCheckedChange={toggleTheme} />
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Plug className="h-5 w-5 text-primary" />
          <h3 className="font-display text-lg font-semibold">API Integrations</h3>
        </div>
        <div className="space-y-3">
          {[
            { name: "Plaid", status: "Connected", connected: true },
            { name: "Stripe", status: "Not connected", connected: false },
            { name: "QuickBooks", status: "Not connected", connected: false },
          ].map((api) => (
            <div key={api.name} className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
              <div>
                <p className="text-sm font-medium text-foreground">{api.name}</p>
                <p className={`text-xs ${api.connected ? "text-success" : "text-muted-foreground"}`}>{api.status}</p>
              </div>
              <Button variant={api.connected ? "outline" : "default"} size="sm">
                {api.connected ? "Disconnect" : "Connect"}
              </Button>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
