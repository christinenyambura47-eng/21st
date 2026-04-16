import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const INITIAL_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi! 👋 Welcome to 21st Electronics. I can help you with internet plans, coverage, installation, and support. How can I assist you today?",
};

const QUICK_REPLIES = [
  "What plans do you offer?",
  "Check my coverage",
  "Installation process",
  "Contact support",
];

// Simple rule-based replies (swap for Lovable AI edge function when Cloud is enabled)
function getReply(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("plan") || lower.includes("price") || lower.includes("cost"))
    return "We offer three plans:\n\n• **Weekly** — KES 450/week (5 Mbps)\n• **Monthly** — KES 1,575/month (5 Mbps)\n• **Premium** — KES 3,500/month (10 Mbps)\n\nAll plans are unlimited with no data caps. Installation is a one-time fee of KES 2,500.";
  if (lower.includes("coverage") || lower.includes("area") || lower.includes("location"))
    return "We currently cover Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, and Thika — and we're expanding every day! Use the **Check Coverage** button on our homepage to see if we serve your area.";
  if (lower.includes("install"))
    return "Installation takes just **48 hours** after signup. Our technician will visit your home, set up the equipment, and ensure everything works perfectly. The one-time installation fee is KES 2,500.";
  if (lower.includes("support") || lower.includes("help") || lower.includes("contact"))
    return "You can reach our support team:\n\n📞 **Phone:** +254 700 000 000\n📧 **Email:** info@21stelectronics.co.ke\n\nOur team is available **24/7** to assist you.";
  return "Thanks for your message! For specific inquiries, please contact our team at **+254 700 000 000** or **info@21stelectronics.co.ke**. Is there anything else I can help with?";
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const reply: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getReply(text),
      };
      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Floating trigger button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-glow-primary hover:scale-105 transition-transform"
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary-foreground" />
        ) : (
          <MessageCircle className="w-6 h-6 text-primary-foreground" />
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-h-[520px] flex flex-col rounded-2xl border border-border bg-card shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-heading font-semibold text-primary-foreground text-sm">
                  21st Electronics Bot
                </p>
                <p className="text-xs text-primary-foreground/60">Online • Typically replies instantly</p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[340px]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-muted text-foreground rounded-bl-sm"
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: msg.content
                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                        .replace(/\n/g, "<br/>"),
                    }}
                  />
                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <User className="w-4 h-4 text-secondary" />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2 items-center">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-muted rounded-xl px-4 py-3 flex gap-1">
                    <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>

            {/* Quick replies */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-xs px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary/5 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="border-t border-border p-3 flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder="Type a message..."
                className="text-sm"
              />
              <Button size="icon" onClick={() => sendMessage(input)} disabled={!input.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
