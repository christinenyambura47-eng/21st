import { motion } from "framer-motion";
import routerDevice from "@/assets/router-device.png";

const ProductHero = () => {
  return (
    <section className="relative bg-hero pt-28 pb-16 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-secondary/20 blur-3xl animate-pulse-glow" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-4">
              Premium Equipment{" "}
              <span className="text-accent">for Excellence</span>
            </h1>
            <p className="text-base sm:text-lg text-primary-foreground/80 max-w-lg">
              Professional-grade networking equipment engineered for peak performance. Every device is optimized to deliver the ultra-fast, reliable connectivity your home deserves.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <img
              src={routerDevice}
              alt="21st Electronics WiFi router"
              width={400}
              height={400}
              className="drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
