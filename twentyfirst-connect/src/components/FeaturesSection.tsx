import { motion } from "framer-motion";
import { Wifi, Shield, Clock, TrendingUp, Users, Headphones } from "lucide-react";
import aboutImage from "@/assets/about3.jpg";

const features = [
  { icon: Wifi, title: "Truly Unlimited", desc: "Download, stream, and video-call without worrying about data running out." },
  { icon: TrendingUp, title: "Consistent Speeds", desc: "No peak-hour throttling. Your 5 Mbps or 10 Mbps stays rock-solid." },
  { icon: Shield, title: "Secure by Default", desc: "Enterprise-grade encryption and firewall protection on every connection." },
  { icon: Clock, title: "48-Hour Setup", desc: "Sign up today and our technician installs your connection within 2 days." },
  { icon: Users, title: "Expanding Fast", desc: "Already in 6+ cities and growing — bringing connectivity across Kenya." },
  { icon: Headphones, title: "Always-On Support", desc: "Our 24/7 team resolves issues fast so you stay connected." },
];

const FeaturesSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-navy" aria-label="Why choose us">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-4">
            Why Kenyans Choose 21st Electronics
          </h2>
          <p className="text-navy-foreground/60 text-base sm:text-lg max-w-xl mx-auto">
            Reliable, affordable internet that actually delivers on its promises.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-10 sm:mb-14 rounded-2xl overflow-hidden"
        >
          <img
            src={aboutImage}
            alt="21st Electronics technician installing internet equipment in Nairobi"
            loading="lazy"
            width={1280}
            height={720}
            className="w-full h-64 sm:h-80 object-cover"
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-xl border border-navy-foreground/10 p-5 sm:p-6 hover:bg-navy-foreground/5 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors" aria-hidden="true">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-navy-foreground/60 text-sm leading-relaxed">{f.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
