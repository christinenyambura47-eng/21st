import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import BackToTop from "@/components/BackToTop";
import SEO from "@/components/SEO";
import ContactSection from "@/components/ContactSection";
import GoogleMapSection from "@/components/GoogleMapSection";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const selectedPlan = searchParams.get("plan");
  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Us | 21st Electronics"
        description="Get in touch with 21st Electronics. Phone: 0720778496, Email: info@21st-electronics.com. Located in Nairobi, Kenya."
        url="https://21st-electronics.com/contact"
        type="website"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative bg-hero pt-24 pb-0 sm:pb-0">
        <div className="container mx-auto px-4 sm:px-6 relative z-10 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">
              Get In Touch
            </h1>
            <p className="text-primary-foreground/80 text-base sm:text-lg">
              Questions? Need support? We're here to help — reach us through any channel below.
            </p>
          </motion.div>
        </div>

        {/* Google Map in Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-24 relative z-10"
        >
          <div className="rounded-2xl overflow-hidden border border-border shadow-lg h-80 sm:h-96">
            <iframe
              title="21st Electronics Office Location - CityView Ngara, Nairobi, Kenya"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8289456339256!2d36.8235!3d-1.2865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sCityView%20Ngara!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Quick info cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto -mt-16 relative z-10">
            {[
              { icon: Phone, title: "Call Us", value: "+254720778496", sub: "Available 24/7" },
              { icon: Mail, title: "Email", value: "info@21stelectronics.co.ke", sub: "Reply within 2hrs" },
              { icon: MapPin, title: "Office", value: "CityView Ngara, Ground Floor", sub: "Mon–Fri 8am–6pm" },
              { icon: Clock, title: "Support Hours", value: "24/7", sub: "Always available" },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl border border-border p-5 text-center">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-foreground text-sm">{item.title}</h3>
                <p className="text-foreground font-medium text-sm mt-1">{item.value}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form section */}
      <ContactSection selectedPlan={selectedPlan} />

      <GoogleMapSection />

      <Footer />
      <ChatBot />
      <BackToTop />
    </div>
  );
};

export default Contact;
