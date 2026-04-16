import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import BackToTop from "@/components/BackToTop";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Wifi, Shield, Clock, TrendingUp, Users, Headphones, Target, Eye } from "lucide-react";
import aboutImage from "@/assets/about3.jpg";
import heroFamily from "@/assets/hero-family.jpg";

const values = [
  { icon: Wifi, title: "Truly Unlimited", desc: "Download, stream, and video-call without worrying about data running out." },
  { icon: TrendingUp, title: "Consistent Speeds", desc: "No peak-hour throttling. Your 5 Mbps or 10 Mbps stays rock-solid." },
  { icon: Shield, title: "Secure by Default", desc: "Enterprise-grade encryption and firewall protection on every connection." },
  { icon: Clock, title: "48-Hour Setup", desc: "Sign up today and our technician installs your connection within 2 days." },
  { icon: Users, title: "Expanding Fast", desc: "Already in 6+ cities and growing — bringing connectivity across Kenya." },
  { icon: Headphones, title: "Always-On Support", desc: "Our 24/7 team resolves issues fast so you stay connected." },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="About 21st Electronics | Kenya's Reliable Internet Provider"
        description="Learn about 21st Electronics' mission to provide fast, reliable, and unlimited internet to Kenyan homes and businesses since our founding."
        url="https://21st-electronics.com/about"
        type="website"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative bg-hero pt-24 pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">
              About 21st Electronics
            </h1>
            <p className="text-primary-foreground/80 text-base sm:text-lg leading-relaxed">
              We started with a simple mission: give every Kenyan household access to fast, affordable, unlimited internet — with no hidden fees and no contracts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-8">
              <Target className="w-10 h-10 text-primary mb-4" />
              <h2 className="text-xl font-heading font-bold text-foreground mb-3">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To connect every Kenyan home with reliable, unlimited internet at prices that make sense — empowering families to work, learn, and entertain without limits.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-card rounded-2xl border border-border p-8">
              <Eye className="w-10 h-10 text-accent mb-4" />
              <h2 className="text-xl font-heading font-bold text-foreground mb-3">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A Kenya where every household has access to fast, affordable internet — bridging the digital divide and fuelling economic opportunity for all.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image banner */}
      <section className="relative h-64 sm:h-80">
        <img src={heroFamily} alt="Family connected with 21st Electronics internet" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-primary/40" />
      </section>

      {/* Why choose us */}
      <section className="py-16 sm:py-24 bg-navy">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-center mb-12">
            Why Kenyans Choose Us
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {values.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-xl border border-navy-foreground/10 p-6 hover:bg-navy-foreground/5 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-navy-foreground/60 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation image */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src={aboutImage} alt="Technician installing internet" loading="lazy" className="rounded-2xl w-full h-72 object-cover" />
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Professional Installation</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our trained technicians handle everything — from mounting outdoor equipment to configuring your Wi-Fi router. You'll be online within 48 hours of signing up.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {["Full equipment provided", "Speed tested before handover", "Free router configuration", "Clean, tidy cabling"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
      <BackToTop />
    </div>
  );
};

export default About;
