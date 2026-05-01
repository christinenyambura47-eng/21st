import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import routerDevice from "@/assets/router-device.png";

const plans = [
  {
    name: "Lite",
    price: "1,100",
    period: "/month",
    speed: "4 Mbps",
    features: ["Unlimited Data", "Reliable Connection", "Priority Email Support", "Standard Installation"],
    popular: false,
    cta: "Get Lite",
  },
  {
    name: "Standard",
    price: "1,500",
    period: "/month",
    speed: "5 Mbps",
    features: ["Unlimited Data", "5 Mbps Speed", "Phone & Email Support", "48-Hour Installation", "One Free Upgrade"],
    popular: true,
    cta: "Get Standard",
  },
  {
    name: "Executive",
    price: "2,000",
    period: "/month",
    speed: "12 Mbps",
    features: ["Unlimited Data", "12 Mbps Speed", "Priority 24/7 Support", "Same-Day Installation", "Static IP Available"],
    popular: false,
    cta: "Get Executive",
  },
  {
    name: "Premium",
    price: "8,000",
    period: "/month",
    speed: "90 Mbps",
    features: ["Unlimited Data", "Ultra-Fast 90 Mbps", "VIP 24/7 Support", "Dedicated Account Manager", "Free Static IP & Tech Support"],
    popular: false,
    cta: "Get Premium",
  },
];

const PricingSection = () => {
  return (
    <section id="products" className="py-16 sm:py-24 bg-background" aria-label="Pricing plans">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Premium Plans for Every Need
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Transparent pricing with zero hidden fees. All plans include unlimited data, zero throttling, professional installation, and 24/7 support. Choose your speed and get connected in 48 hours.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-full mx-auto">{plans.map((plan, i) => (
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
                  <Star className="w-3 h-3" aria-hidden="true" /> Most Popular
                </div>
              )}
              <div className="flex items-center gap-3 mb-6">
                <img src={routerDevice} alt="WiFi router included" width={48} height={48} className="rounded-lg" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-heading font-semibold mb-0.5">{plan.name}</h3>
                  <p className={`text-sm ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {plan.speed} unlimited
                  </p>
                </div>
              </div>
              <div className="mb-6">
                <span className="text-3xl sm:text-4xl font-heading font-bold">KES {plan.price}</span>
                <span className={`text-sm ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow" aria-label={`${plan.name} plan features`}>
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0" aria-hidden="true" />
                    {f}
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm mt-8 sm:mt-10 space-y-2"
        >
          <p>One-time installation: KES 2,500. No contracts — cancel anytime.</p>
          <p>
            <Link to="/products" className="text-primary font-medium hover:underline">
              Browse all equipment & bundles →
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
