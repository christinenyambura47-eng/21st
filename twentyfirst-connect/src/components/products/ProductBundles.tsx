import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import routerDevice from "@/assets/router-device.png";

const bundles = [
  {
    name: "Starter Bundle",
    price: "6,000",
    desc: "Router + CPE + Installation + 1 month of 5 Mbps",
    items: ["Home WiFi Router", "Outdoor CPE Antenna", "Professional installation", "1 month 5 Mbps unlimited"],
    icon: Zap,
    highlight: false,
  },
  {
    name: "Family Bundle",
    price: "9,500",
    desc: "Everything in Starter + UPS backup + 1 month Premium",
    items: ["Home WiFi Router", "Outdoor CPE Antenna", "Mini UPS Backup", "Professional installation", "1 month 10 Mbps unlimited", "Free Cat6 cable"],
    icon: Star,
    highlight: true,
  },
];

const ProductBundles = () => {
  return (
    <section className="py-16 sm:py-24 bg-navy" aria-label="Product bundles">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-4">
            Save More with Bundles
          </h2>
          <p className="text-navy-foreground/60 text-base sm:text-lg max-w-xl mx-auto">
            Get everything you need in one package — equipment, installation, and your first month included.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {bundles.map((bundle, i) => (
            <motion.article
              key={bundle.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 sm:p-8 border ${
                bundle.highlight
                  ? "bg-primary text-primary-foreground border-primary shadow-glow-primary"
                  : "bg-card/10 border-navy-foreground/15 text-navy-foreground"
              }`}
            >
              {bundle.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                  <Star className="w-3 h-3" aria-hidden="true" /> Best Value
                </div>
              )}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${bundle.highlight ? "bg-primary-foreground/20" : "bg-primary/20"}`}>
                  <bundle.icon className={`w-5 h-5 ${bundle.highlight ? "text-primary-foreground" : "text-primary"}`} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl">{bundle.name}</h3>
                  <p className={`text-sm ${bundle.highlight ? "text-primary-foreground/70" : "text-navy-foreground/60"}`}>{bundle.desc}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <img src={routerDevice} alt="" width={60} height={60} className="rounded-lg" aria-hidden="true" />
                <div>
                  <span className="text-3xl font-heading font-bold">KES {bundle.price}</span>
                  <span className={`text-sm block ${bundle.highlight ? "text-primary-foreground/70" : "text-navy-foreground/60"}`}>one-time</span>
                </div>
              </div>

              <ul className="space-y-2.5 mb-6">
                {bundle.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button className="w-full min-h-[48px]" variant={bundle.highlight ? "secondary" : "outline"}>
                Get {bundle.name}
              </Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductBundles;
