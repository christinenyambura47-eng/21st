import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ChatBot from "@/components/ChatBot";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Privacy Policy | 21st Electronics"
        description="Learn how 21st Electronics protects your privacy and personal data. Read our complete privacy policy."
        url="https://21st-electronics.com/privacy"
        type="website"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative bg-hero pt-24 pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-primary-foreground/80 text-base sm:text-lg">
              Your privacy is important to us. Learn how we protect your data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-invert max-w-none">
            <h2>1. Information We Collect</h2>
            <p>
              21st Electronics collects information that you provide directly to us, such as when you:
            </p>
            <ul>
              <li>Fill out our contact forms</li>
              <li>Request quotes for our services</li>
              <li>Subscribe to our newsletter</li>
              <li>Create an account on our platform</li>
              <li>Make a purchase or sign up for a service</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you promotional materials and updates</li>
              <li>Process transactions</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>3. Data Protection</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2>4. Third-Party Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
            </p>

            <h2>5. Cookies</h2>
            <p>
              Our website uses cookies to enhance your experience. You can control cookie settings through your browser preferences.
            </p>

            <h2>6. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul>
              <li>Email: info@21st-electronics.com</li>
              <li>Phone: +254 720 778 496</li>
              <li>Address: CityView Ngara, Ground Floor, Nairobi, Kenya</li>
            </ul>

            <p className="text-sm text-muted-foreground mt-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default PrivacyPolicy;
