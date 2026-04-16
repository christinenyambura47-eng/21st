import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import coverageMap from "@/assets/coverage-map.jpg";

const cities = ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Thika"];

const CoverageSection = () => {
  return (
    <section id="coverage" className="py-16 sm:py-24 bg-background" aria-label="Coverage areas">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Are We In{" "}
              <span className="text-gradient-hero">Your Area?</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed">
              We're live in 6 cities and expanding fast. Check below to see if your neighbourhood is covered — and if not, register your interest so we prioritise your area.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8" role="list" aria-label="Covered cities">
              {cities.map((city) => (
                <span
                  key={city}
                  role="listitem"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-sm font-medium text-foreground"
                >
                  <MapPin className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                  {city}
                </span>
              ))}
            </div>
            <Button size="lg" className="gap-2 min-h-[48px]">
              Check Coverage <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl border border-border overflow-hidden">
              <img
                src={coverageMap}
                alt="21st Electronics network coverage across Kenyan cities"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
