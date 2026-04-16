import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import routerDevice from "@/assets/router-device.png";
import outdoorCpe from "@/assets/outdoor-cpe.png";
import ethernetCable from "@/assets/ethernet-cable.png";
import powerBackup from "@/assets/power-backup.png";

const products = [
  {
    name: "Home WiFi Router",
    image: routerDevice,
    price: "3,500",
    desc: "Dual-band wireless router with 300 Mbps throughput. Covers up to 3 bedrooms with strong, stable WiFi.",
    specs: ["2.4 GHz & 5 GHz", "4 LAN ports", "Easy web setup", "WPA3 security"],
    tag: "Included with plans",
  },
  {
    name: "Outdoor CPE Antenna",
    image: outdoorCpe,
    price: "4,500",
    desc: "Long-range outdoor receiver that connects your home to our network towers. Weather-resistant and durable.",
    specs: ["Up to 15 km range", "IP65 weatherproof", "PoE powered", "High-gain directional"],
    tag: "Included with installation",
  },
  {
    name: "Cat6 Ethernet Cable",
    image: ethernetCable,
    price: "500",
    desc: "Premium shielded Cat6 cable for wired connections. Get the fastest, most stable speeds to your PC or console.",
    specs: ["10 Gbps support", "15m length", "RJ45 connectors", "Shielded (STP)"],
    tag: null,
  },
  {
    name: "Mini UPS Backup",
    image: powerBackup,
    price: "5,500",
    desc: "Keep your internet running during power outages. Provides up to 4 hours of backup for your router and CPE.",
    specs: ["12V DC output", "4-hour backup", "LED indicators", "Surge protection"],
    tag: "Best Seller",
  },
];

const ProductGrid = () => {
  return (
    <section className="py-16 sm:py-24 bg-background" aria-label="Products catalog">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Networking Equipment
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Quality hardware included with your plan or available for purchase separately.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((product, i) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-2xl border border-border bg-card p-5 hover:shadow-lg transition-shadow relative"
            >
              {product.tag && (
                <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                  {product.tag}
                </span>
              )}
              <div className="aspect-square rounded-xl bg-muted/50 flex items-center justify-center mb-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={280}
                  height={280}
                  className="w-3/4 h-3/4 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-1">{product.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">{product.desc}</p>
              <ul className="space-y-1 mb-4">
                {product.specs.map((spec) => (
                  <li key={spec} className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-primary" aria-hidden="true" />
                    {spec}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xl font-heading font-bold text-foreground">KES {product.price}</span>
                <Button size="sm" variant="outline" className="gap-1.5 min-h-[40px]">
                  <ShoppingCart className="w-3.5 h-3.5" aria-hidden="true" />
                  Enquire
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
