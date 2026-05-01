import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import routerDevice from "@/assets/router-device.png";
import outdoorCpe from "@/assets/outdoor-cpe.png";
import ethernetCable from "@/assets/ethernet-cable.png";
import powerBackup from "@/assets/power-backup.png";

const products = [
  {
    name: "Premium WiFi Router",
    image: routerDevice,
    price: "3,500",
    desc: "Enterprise-grade dual-band wireless router delivering 300 Mbps throughput. Provides comprehensive WiFi coverage across your entire home with seamless connectivity.",
    specs: ["Dual-band (2.4 & 5 GHz)", "300 Mbps throughput", "4 Gigabit LAN ports", "WPA3 security"],
    tag: "Included with plans",
  },
  {
    name: "High-Performance Outdoor Antenna",
    image: outdoorCpe,
    price: "4,500",
    desc: "Professional-grade outdoor CPE antenna that captures our signal from network towers. Engineered for reliability with weatherproof construction and extended range.",
    specs: ["15 km+ range", "IP65 weatherproof", "PoE powered", "High-gain directional"],
    tag: "Included with installation",
  },
  {
    name: "Premium Cat6 Ethernet Cable",
    image: ethernetCable,
    price: "500",
    desc: "Fully shielded Cat6 cable for maximum wired connection stability. Perfect for devices requiring ultra-fast, interference-free connectivity.",
    specs: ["10 Gbps capacity", "15m premium cable", "Gold-plated RJ45", "STP shielding"],
    tag: null,
  },
  {
    name: "Intelligent UPS Backup",
    image: powerBackup,
    price: "5,500",
    desc: "Keep your internet active during power outages with intelligent backup power. Seamless failover ensures uninterrupted connectivity when you need it most.",
    specs: ["4-hour backup time", "12V DC output", "LED monitoring", "Surge protection"],
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
            Premium Networking Equipment
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Professional-grade hardware optimized for peak performance. All equipment is included with your plan or available for upgrade.
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
