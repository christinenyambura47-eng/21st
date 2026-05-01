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
      { q: "How long does installation take?", a: "Our certified technician will visit within 48 hours of your order. The professional installation takes 1-2 hours, including fiber/cable optimization, router configuration, speed verification, and a full walkthrough." },
      { q: "What equipment is included?", a: "We provide everything: premium Wi-Fi router, fiber optic cabling, professional mounting hardware, and all necessary adapters. Equipment is premium-grade designed for reliable long-term performance." },
      { q: "Is there an installation charge?", a: "Yes, there's a one-time professional installation fee of KES 2,500. This includes certified technician labor, all equipment, activation, and same-day testing to ensure perfect speed delivery." },
      { q: "Can I relocate or upgrade my connection?", a: "Absolutely. Contact our team anytime to relocate within your coverage area (small fee) or upgrade your speed instantly. We're flexible to your needs." },
    ],
  },
  {
    category: "Billing & Plans",
    questions: [
      { q: "What payment methods do you accept?", a: "We accept M-Pesa, bank transfers, credit/debit cards, and airtel money. You'll receive payment reminders before each cycle for convenience." },
      { q: "Can I change plans anytime?", a: "Yes! Upgrades are instant. Downgrades take effect on your next billing cycle. There are no penalties, no lock-in contracts — complete flexibility." },
      { q: "Are there any hidden charges?", a: "Never. Pure transparency: the monthly price you see is all you pay. Zero hidden fees, zero data throttling charges, zero surprise bills. What you see is what you get." },
      { q: "What if I can't pay on time?", a: "We offer a 3-day grace period with courtesy reminders. Service pauses if unpaid after that, with no disconnection fees. Just pay and you're back online." },
    ],
  },
  {
    category: "Troubleshooting",
    questions: [
      { q: "Speeds are slower than expected. What should I do?", a: "First, restart your router. Then check for interference from other devices. Still slow? Our 24/7 tech team provides remote diagnostics and solutions within minutes." },
      { q: "My connection keeps disconnecting.", a: "Ensure your router is in an open, central location away from walls and interference. If it persists, call our support team immediately — we handle repairs fast." },
      { q: "How do I change my Wi-Fi password?", a: "Access your router admin panel at 192.168.1.1 or call our team anytime. We'll guide you or change it remotely in minutes." },
      { q: "How do I get 24/7 technical support?", a: "Call +254 720 778 496, email info@21st-electronics.com, use our live chat, or message us on WhatsApp. Expert help is always minutes away." },
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
            Everything You Need to Know
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Comprehensive answers to help you get the most from your premium internet service. Can't find what you're looking for? Our 24/7 support team is ready to help.
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
