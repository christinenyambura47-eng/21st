import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "Installation",
    questions: [
      { q: "How long does installation take?", a: "Our technician will visit your home within 48 hours of signup. The installation itself takes about 1–2 hours, including equipment setup and speed testing." },
      { q: "What equipment do I need?", a: "We provide everything — a wireless router, cabling, and mounting hardware. All you need is a power socket near your preferred router location." },
      { q: "Is there an installation fee?", a: "Yes, there's a one-time installation fee of KES 2,500 which covers equipment, labour, and activation." },
      { q: "Can I relocate my connection?", a: "Absolutely. Contact our support team and we'll schedule a relocation within your coverage area for a small fee." },
    ],
  },
  {
    category: "Billing & Plans",
    questions: [
      { q: "How do I pay for my plan?", a: "We accept M-Pesa, bank transfer, and card payments. You'll receive a payment reminder before each billing cycle." },
      { q: "Can I switch plans anytime?", a: "Yes! Upgrades take effect immediately. Downgrades apply at the start of your next billing cycle — no penalties." },
      { q: "Are there any hidden fees?", a: "None. The price you see is what you pay. No data caps, no throttling surcharges, no surprise charges." },
      { q: "What happens if I miss a payment?", a: "You'll receive a 3-day grace period with reminders. After that, service is paused until payment is received — no disconnection fees." },
    ],
  },
  {
    category: "Troubleshooting",
    questions: [
      { q: "My internet is slow. What should I do?", a: "First, restart your router by unplugging it for 30 seconds. If speeds don't improve, contact our 24/7 support team and we'll diagnose remotely." },
      { q: "My connection keeps dropping.", a: "Check that your router is in an open area away from walls and electronics. If the issue persists, call us — it may be a signal or hardware issue we can fix quickly." },
      { q: "How do I reset my Wi-Fi password?", a: "Log into your router's admin panel (usually 192.168.1.1) or call our support team and we'll walk you through it." },
      { q: "Who do I contact for support?", a: "Reach us 24/7 at +254 700 000 000, email info@21stelectronics.co.ke, or use the chat bot on this page." },
    ],
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-background" aria-label="Frequently asked questions">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Quick answers to the most common questions about our service.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {faqs.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
            >
              <h3 className="font-heading font-semibold text-lg mb-4 text-primary">
                {group.category}
              </h3>
              <Accordion type="single" collapsible className="space-y-1">
                {group.questions.map((item, qi) => (
                  <AccordionItem key={qi} value={`${gi}-${qi}`} className="border-border">
                    <AccordionTrigger className="text-sm text-left hover:no-underline hover:text-primary min-h-[44px]">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
