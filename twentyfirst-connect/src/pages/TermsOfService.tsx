import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ChatBot from "@/components/ChatBot";
import SEO from "@/components/SEO";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Terms of Service | 21st Electronics"
        description="Review the terms and conditions for using 21st Electronics internet service. Understand your rights and responsibilities."
        url="https://21st-electronics.com/terms"
        type="website"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative bg-hero pt-24 pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-primary-foreground/80 text-base sm:text-lg">
              Please read these terms carefully before using our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-invert max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the 21st Electronics website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on 21st Electronics' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>

            <h2>3. Disclaimer</h2>
            <p>
              The materials on 21st Electronics' website are provided on an 'as is' basis. 21st Electronics makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2>4. Limitations</h2>
            <p>
              In no event shall 21st Electronics or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the 21st Electronics website, even if 21st Electronics or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2>5. Accuracy of Materials</h2>
            <p>
              The materials appearing on 21st Electronics' website could include technical, typographical, or photographic errors. 21st Electronics does not warrant that any of the materials on its website are accurate, complete, or current. 21st Electronics may make changes to the materials contained on its website at any time without notice.
            </p>

            <h2>6. Service Terms</h2>
            <p>
              Our internet service is subject to the following terms:
            </p>
            <ul>
              <li>Services are provided to residential and business customers in covered areas only</li>
              <li>Installation fees and service charges apply</li>
              <li>Service may be terminated by either party with 30 days' written notice</li>
              <li>Fair usage policy applies to all plans</li>
              <li>Speeds may vary based on network conditions and usage patterns</li>
            </ul>

            <h2>7. Modifications</h2>
            <p>
              21st Electronics may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Kenya, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h2>9. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
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

export default TermsOfService;
