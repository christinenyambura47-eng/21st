import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CoverageSection from "@/components/CoverageSection";
import ContactSection from "@/components/ContactSection";
import GoogleMapSection from "@/components/GoogleMapSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import EnquireModal from "@/components/EnquireModal";
import BackToTop from "@/components/BackToTop";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const [enquireOpen, setEnquireOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <SEO
        title="21st Electronics - Fast Reliable Internet in Kenya | Home"
        description="Experience fast, reliable, unlimited internet connectivity. Available in Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, Thika, and Homebay. Get connected today!"
        url="https://21st-electronics.com"
        type="website"
      />
      <Navbar />
      <HeroSection />
      <PricingSection />

      {/* Enquire CTA strip */}
      <section className="py-10 sm:py-14 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-3">
              Not sure which plan is right for you?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
              Get a personalised quote from our team — we'll recommend the best option for your home.
            </p>
            <Button size="lg" variant="secondary" className="gap-2 min-h-[48px] font-semibold shadow-glow-secondary" onClick={() => setEnquireOpen(true)}>
              <MessageSquare className="w-5 h-5" />
              Request a Quote
            </Button>
          </motion.div>
        </div>
      </section>

      <FeaturesSection />
      <HowItWorksSection />
      <CoverageSection />
      <FAQSection />
      <ContactSection />
      <GoogleMapSection />
      <Footer />
      <ChatBot />
      <BackToTop />
      <EnquireModal open={enquireOpen} onOpenChange={setEnquireOpen} />
    </div>
  );
};

export default Index;
