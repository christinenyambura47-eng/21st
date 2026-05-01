import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, CheckCircle } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-hero pt-16" aria-label="Hero">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-secondary/20 blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-1.5 mb-6"
          >
            <Zap className="w-4 h-4 text-accent" aria-hidden="true" />
            <span className="text-sm font-medium text-primary-foreground">Unlimited Fiber Broadband for Kenyan Homes</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6"
          >
            Ultra-Fast Fiber{" "}
            <span className="text-accent">Internet for Kenya</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-4 max-w-xl leading-relaxed"
          >
            Unlimited fiber broadband with speeds from 4 to 90 Mbps. No data caps. No throttling. Zero hidden fees. Professional installation in 48 hours. Available in Nairobi, Mombasa, Kisumu, and 4+ more cities. Start from KES 1,500/month.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-sm text-primary-foreground/80"
          >
            {["Unlimited Data", "Zero Throttling", "Fast Installation", "99.9% Uptime"].map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-secondary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Button size="lg" variant="secondary" className="gap-2 text-base font-semibold shadow-glow-secondary min-h-[48px]" asChild>
              <a href="#coverage">
                Check Coverage <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 min-h-[48px]" asChild>
              <a href="#products">View Plans</a>
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-lg"
            role="list"
            aria-label="Key stats"
          >
            {[
              { value: "5 Mbps+", label: "Speeds" },
              { value: "24/7", label: "Support" },
              { value: "99.9%", label: "Uptime" },
            ].map((stat) => (
              <div key={stat.label} className="text-center" role="listitem">
                <div className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary-foreground">{stat.value}</div>
                <div className="text-xs sm:text-sm text-primary-foreground/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block h-[500px]"
          >
            <HeroCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
