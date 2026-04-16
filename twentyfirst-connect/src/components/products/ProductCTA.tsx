import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const ProductCTA = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Our team will recommend the right equipment for your home setup. Call us or check coverage to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="gap-2 min-h-[48px]" asChild>
              <a href="/#coverage">
                Check Coverage <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 min-h-[48px]" asChild>
              <a href="tel:+254700000000">
                <Phone className="w-4 h-4" aria-hidden="true" /> Call Us
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCTA;
