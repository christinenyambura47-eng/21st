import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import BackToTop from "@/components/BackToTop";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import routerDevice from "@/assets/router-device.png";
import heroImage from "@/assets/hero7.jpg";

const plans = [
  {
    name: "Lite",
    price: "1,100",
    period: "/month",
    speed: "4 Mbps",
    features: ["Unlimited Data", "4 Mbps Speed", "Priority Email Support", "48-Hour Installation"],
    popular: false,
    cta: "Choose Lite",
  },
  {
    name: "Standard",
    price: "1,500",
    period: "/month",
    speed: "5 Mbps",
    features: ["Unlimited Data", "5 Mbps Speed", "Phone & Email Support", "48-Hour Installation", "One Free Router"],
    popular: true,
    cta: "Choose Standard",
  },
  {
    name: "Executive",
    price: "2,000",
    period: "/month",
    speed: "12 Mbps",
    features: ["Unlimited Data", "12 Mbps Speed", "Priority 24/7 Support", "Same-Day Installation", "Static IP Available"],
    popular: false,
    cta: "Choose Executive",
  },
  {
    name: "Premium",
    price: "8,000",
    period: "/month",
    speed: "90 Mbps",
    features: ["Unlimited Data", "Ultra-Fast 90 Mbps", "VIP 24/7 Support", "Dedicated Account Manager", "Free Static IP & Support"],
    popular: false,
    cta: "Choose Premium",
  },
];

const Plans = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Internet Plans & Pricing | 21st Electronics - Unlimited Data No Throttling"
        description="Compare our 4 internet plans: Lite (KES 1,100), Standard (KES 1,500), Executive (KES 2,000), and Premium (KES 8,000). Unlimited data, no contracts, 48-hour installation."
        url="https://21st-electronics.com/plans"
        type="website"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Internet plans comparison"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">
              Premium Plans for Every Lifestyle
            </h1>
            <p className="text-primary-foreground/80 text-base sm:text-lg mb-6">
              Find your perfect internet speed. All plans feature unlimited data, zero throttling, professional installation, and 24/7 dedicated support. No contracts, transparent pricing.
            </p>
            <Button size="lg" variant="secondary" className="gap-2" asChild>
              <Link to="/contact">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {plans.map((plan, i) => (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl p-6 sm:p-8 border flex flex-col ${
                  plan.popular
                    ? "bg-primary text-primary-foreground border-primary shadow-glow-primary lg:scale-105"
                    : "bg-card text-card-foreground border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    <Star className="w-3 h-3" /> Most Popular
                  </div>
                )}

                <div className="flex items-center gap-3 mb-6">
                  <img
                    src={routerDevice}
                    alt="WiFi router included"
                    width={48}
                    height={48}
                    className="rounded-lg"
                  />
                  <div>
                    <h3 className="text-lg font-heading font-semibold mb-0.5">
                      {plan.name}
                    </h3>
                    <p className={`text-sm ${
                      plan.popular
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}>
                      {plan.speed} unlimited
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl font-heading font-bold">
                    KES {plan.price}
                  </span>
                  <span className={`text-sm ${
                    plan.popular
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/contact?plan=${encodeURIComponent(plan.name)}`}
                  className="w-full"
                >
                  <Button
                    className="w-full min-h-[48px]"
                    variant={plan.popular ? "secondary" : "default"}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 sm:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
              Plan Comparison
            </h2>
            <p className="text-muted-foreground">
              See what's included in each of our internet plans
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="overflow-x-auto bg-card rounded-2xl border border-border"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Feature
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className="px-6 py-4 text-left text-sm font-semibold text-foreground"
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Speed", values: plans.map((p) => p.speed) },
                  {
                    label: "Unlimited Data",
                    values: ["✓", "✓", "✓", "✓"],
                  },
                  {
                    label: "No Data Throttling",
                    values: ["-", "✓", "✓", "✓"],
                  },
                  {
                    label: "24/7 Support",
                    values: ["-", "Email/Call", "✓", "✓"],
                  },
                  {
                    label: "Static IP",
                    values: ["-", "-", "Available", "Included"],
                  },
                  {
                    label: "Installation",
                    values: ["48 hours", "48 hours", "48 hours", "Priority"],
                  },
                  {
                    label: "Contract",
                    values: ["None", "None", "None", "None"],
                  },
                ].map((row) => (
                  <tr key={row.label} className="border-b border-border hover:bg-muted/50">
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      {row.label}
                    </td>
                    {row.values.map((value, i) => (
                      <td key={i} className="px-6 py-4 text-sm text-muted-foreground">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Common Questions
            </h2>
            <p className="text-muted-foreground">
              Have questions about our plans? We've got answers.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: "Can I change plans later?",
                a:
                  "Yes! You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.",
              },
              {
                q: "What's included in the installation?",
                a:
                  "Installation includes fiber cable laying, router setup, WiFi configuration, and a quick tutorial. All included in the one-time KES 2,500 installation fee.",
              },
              {
                q: "Is there a contract?",
                a:
                  "No contracts. You can cancel anytime without penalties. We're confident you'll love our service.",
              },
              {
                q: "What if I experience connectivity issues?",
                a:
                  "Our 24/7 support team is available to help. Call +254720778496 or chat with us on WhatsApp for immediate assistance.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {faq.q}
                </h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Ready to Get Connected?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Choose your plan and get connected in 48 hours. No hidden fees, no surprises.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="gap-2"
              asChild
            >
              <Link to="/contact">
                Select Your Plan <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ChatBot />
      <BackToTop />
    </div>
  );
};

export default Plans;
