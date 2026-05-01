import { motion } from "framer-motion";
import { Wifi, Shield, Clock, TrendingUp, Users, Headphones } from "lucide-react";
import aboutImage from "@/assets/about3.jpg";

const features = [
  { icon: Wifi, title: "Truly Unlimited", desc: "Experience genuine unlimited data with no caps, no quotas, no surprises. Stream 4K, download large files, and connect multiple devices simultaneously." },
  { icon: TrendingUp, title: "Consistent Premium Speeds", desc: "Enjoy guaranteed speeds without throttling during peak hours. Your 5 Mbps, 12 Mbps, or 90 Mbps connection remains stable 24/7." },
  { icon: Shield, title: "Enterprise-Grade Security", desc: "Protect your family with military-grade encryption, advanced firewall protection, and automatic threat detection on every connection." },
  { icon: Clock, title: "Swift 48-Hour Installation", desc: "Get connected fast. Our certified technicians complete professional installation within 2 days of your order, with zero disruption." },
  { icon: Users, title: "Nationwide Expansion", desc: "Already serving Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, Thika, and Homebay. Rapidly expanding to bring premium internet to all Kenyans." },
  { icon: Headphones, title: "24/7 Premium Support", desc: "Dedicated technical support available round-the-clock. Get same-day resolution for any issues, with knowledgeable specialists ready to help." },
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
            The 21st Electronics Advantage
          </h2>
          <p className="text-navy-foreground/60 text-base sm:text-lg max-w-2xl mx-auto">
            We've engineered the perfect balance of power, reliability, and service. Here's what sets us apart from the rest.
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
