import { motion } from "framer-motion";

const GoogleMapSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-white" aria-label="Office location map">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Visit Our Office
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            CityView Ngara, Nairobi, Kenya - Ground Floor
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl overflow-hidden border border-border shadow-lg h-96 sm:h-[500px]"
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleMapSection;
