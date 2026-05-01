import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import BackToTop from "@/components/BackToTop";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import unifiMap from "@/assets/unifi.png";

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="FAQ - Frequently Asked Questions | 21st Electronics"
        description="Find answers to common questions about 21st Electronics internet service, speeds, coverage, installation, billing, and technical support. Get help 24/7."
        url="https://21st-electronics.com/faq"
        type="website"
      />
      <Navbar />

      {/* Hero Section with Image */}
      <section className="relative pt-24 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={unifiMap}
            alt="FAQ - Frequently Asked Questions about UniFi service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">
              Premium Support Hub
            </h1>
            <p className="text-primary-foreground/80 text-base sm:text-lg">
              Get answers to everything about 21st Electronics plans, installation, coverage, troubleshooting, and support. Our expert team is available 24/7 to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ content */}
      <FAQSection />

      {/* CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-xl">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-3">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">Our support team is available 24/7 to help you out.</p>
          <Button size="lg" asChild>
            <Link to="/contact">Contact Support</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <ChatBot />
      <BackToTop />
    </div>
  );
};

export default FAQ;
