import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Upload, FileText, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_app/receipts")({
  component: ReceiptsPage,
});

function ReceiptsPage() {
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const handleUpload = () => {
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setUploaded(true);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Receipt Scanner</h1>
        <p className="text-sm text-muted-foreground">Upload receipts for AI-powered data extraction.</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-xl p-8"
      >
        <div
          className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border p-12 transition-colors hover:border-primary/50 cursor-pointer"
          onClick={handleUpload}
        >
          {uploading ? (
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          ) : uploaded ? (
            <Check className="h-12 w-12 text-success" />
          ) : (
            <Upload className="h-12 w-12 text-muted-foreground" />
          )}
          <p className="mt-4 text-sm font-medium text-foreground">
            {uploading ? "Processing receipt..." : uploaded ? "Receipt uploaded!" : "Drop receipt here or click to upload"}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">Supports JPG, PNG, PDF up to 10MB</p>
        </div>
      </motion.div>

      {uploaded && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-xl p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <FileText className="h-5 w-5 text-primary" />
            <h3 className="font-display text-lg font-semibold">Extracted Data</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Merchant", value: "Whole Foods Market" },
              { label: "Date", value: "May 3, 2026" },
              { label: "Total Amount", value: "$87.45" },
              { label: "Tax", value: "$7.12" },
              { label: "Payment Method", value: "Visa •••• 4242" },
              { label: "Category", value: "Groceries (AI)" },
            ].map((field) => (
              <div key={field.label} className="rounded-lg bg-muted/50 p-3">
                <p className="text-xs text-muted-foreground">{field.label}</p>
                <p className="mt-1 text-sm font-medium text-foreground">{field.value}</p>
              </div>
            ))}
          </div>
          <Button className="mt-4 gradient-primary border-0 text-primary-foreground">
            Save Transaction
          </Button>
        </motion.div>
      )}
    </div>
  );
}
