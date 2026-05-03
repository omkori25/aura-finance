import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { chatMessages as initialMessages } from "@/lib/mock-data";
import ReactMarkdown from "react-markdown";

export const Route = createFileRoute("/_app/chatbot")({
  component: ChatbotPage,
});

function ChatbotPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { id: String(Date.now()), role: "user" as const, content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const aiMsg = {
        id: String(Date.now() + 1),
        role: "assistant" as const,
        content: "I'm analyzing your financial data to answer that question. Based on your recent transactions and spending patterns, I can provide detailed insights. Let me pull up the relevant data for you.\n\n*This is a demo response. Connect to a real AI backend for live answers.*",
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col">
      <div className="mb-4">
        <h1 className="font-display text-2xl font-bold">AI Chatbot</h1>
        <p className="text-sm text-muted-foreground">Ask anything about your finances.</p>
      </div>

      <div className="flex-1 overflow-auto rounded-xl glass-card p-4 space-y-4">
        {messages.map((msg, i) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
          >
            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${msg.role === "assistant" ? "gradient-primary" : "bg-muted"}`}>
              {msg.role === "assistant" ? (
                <Bot className="h-4 w-4 text-primary-foreground" />
              ) : (
                <User className="h-4 w-4 text-muted-foreground" />
              )}
            </div>
            <div className={`max-w-[75%] rounded-xl px-4 py-3 ${msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted/50"}`}>
              <div className="prose prose-sm max-w-none text-sm dark:prose-invert">
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            </div>
          </motion.div>
        ))}
        {isTyping && (
          <div className="flex gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
              <Bot className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="rounded-xl bg-muted/50 px-4 py-3">
              <div className="flex gap-1">
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" style={{ animationDelay: "0ms" }} />
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" style={{ animationDelay: "150ms" }} />
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 flex gap-2">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {["Where did I spend most?", "Predict next month", "How can I save more?"].map((q) => (
            <Button key={q} variant="outline" size="sm" className="shrink-0 text-xs" onClick={() => setInput(q)}>
              <Sparkles className="mr-1 h-3 w-3" /> {q}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex gap-2">
        <Input
          placeholder="Ask FinAI anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <Button onClick={handleSend} className="gradient-primary border-0 text-primary-foreground">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
