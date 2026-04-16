import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import BackToTop from "@/components/BackToTop";
import SEO from "@/components/SEO";
import ProductHero from "@/components/products/ProductHero";
import ProductGrid from "@/components/products/ProductGrid";
import ProductBundles from "@/components/products/ProductBundles";
import ProductCTA from "@/components/products/ProductCTA";
import { motion } from "framer-motion";
import hero7 from "@/assets/hero7.jpg";

const Products = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Our Internet Products & Services | 21st Electronics"
        description="Discover 21st Electronics internet products and services. Unlimited fiber broadband, fast speeds, reliable connectivity, and 24/7 customer support for homes and businesses across Kenya."
        url="https://21st-electronics.com/products"
        type="website"
      />
      <Navbar />

      {/* Hero Section with Image */}
      <section className="relative pt-24 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero7}
            alt="21st Electronics internet products and services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">
              Our Internet Products
            </h1>
            <p className="text-primary-foreground/80 text-base sm:text-lg mb-8">
              Unlimited fiber broadband with blazing-fast speeds, reliable connectivity, and 24/7 customer support. Find the perfect package for your needs.
            </p>
          </motion.div>
        </div>
      </section>

      <ProductGrid />
      <ProductBundles />
      <ProductCTA />
      <Footer />
      <ChatBot />
      <BackToTop />
    </div>
  );
};

export default Products;
