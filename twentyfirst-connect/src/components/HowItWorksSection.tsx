import { motion } from "framer-motion";
import stepSignup from "@/assets/step-signup.png";
import stepInstallation from "@/assets/step-installation.png";
import stepConnected from "@/assets/step-connected.png";

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Pick a plan and fill out a quick form — it takes under 2 minutes.",
    image: stepSignup,
  },
  {
    number: "02",
    title: "We Install",
    description: "Our technician visits your home within 48 hours and sets everything up.",
    image: stepInstallation,
  },
  {
    number: "03",
    title: "Get Connected",
    description: "Enjoy unlimited, fast internet — stream, work, and browse with zero limits.",
    image: stepConnected,
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Simple & Fast
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-2">
            How It Works
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Three easy steps to unlimited home internet.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-6">
                <img
                  src={step.image}
                  alt={step.title}
                  loading="lazy"
                  width={192}
                  height={192}
                  className="w-full h-full object-contain"
                />
              </div>

              <span className="text-4xl font-heading font-black text-primary/20 mb-2">
                {step.number}
              </span>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/3 translate-x-1/2">
                  {/* Arrow connector handled by layout */}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Connector arrows for desktop */}
        <div className="hidden md:flex justify-center items-center gap-4 mt-8 max-w-5xl mx-auto">
          <div className="flex-1 flex justify-center">
            <div className="h-0.5 w-24 bg-primary/20 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-primary/30 rotate-45" />
            </div>
          </div>
          <div className="flex-1" />
          <div className="flex-1 flex justify-center">
            <div className="h-0.5 w-24 bg-primary/20 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-primary/30 rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
