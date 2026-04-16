import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { submitContactForm } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

interface ContactSectionProps {
  selectedPlan?: string | null;
}

const ContactSection = ({ selectedPlan }: ContactSectionProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    plan: selectedPlan || "",
    message: "",
  });

  // Update plan when selectedPlan changes
  useEffect(() => {
    if (selectedPlan) {
      setFormData((prev) => ({
        ...prev,
        plan: selectedPlan,
      }));
    }
  }, [selectedPlan]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await submitContactForm(formData);
      
      if (response.success) {
        toast({
          title: "Success",
          description: response.message,
        });
        
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          plan: selectedPlan || "",
          message: "",
        });
      } else {
        toast({
          title: "Error",
          description: response.message || "Failed to send message",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="support" className="py-16 sm:py-24 bg-muted" aria-label="Contact us">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Ready to Get Connected?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-8">
              Drop us a message or call directly. Our team typically responds within 2 hours during business hours.
            </p>

            <address className="space-y-6 not-italic">
              {[
                { icon: Phone, label: "Call Us", value: "+254720778496", href: "tel:+254720778496" },
                { icon: Mail, label: "Email", value: "info@21stelectronics.co.ke", href: "mailto:info@21stelectronics.co.ke" },
                { icon: MapPin, label: "Office", value: "CityView Ngara, Nairobi, Kenya - Ground Floor" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </address>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl border border-border p-6 sm:p-8 space-y-5"
            onSubmit={handleSubmit}
            aria-label="Contact form"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="text-sm font-medium text-foreground mb-1.5 block">First Name</label>
                <Input 
                  id="firstName" 
                  placeholder="Arthur" 
                  autoComplete="given-name" 
                  className="min-h-[44px]"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="text-sm font-medium text-foreground mb-1.5 block">Last Name</label>
                <Input 
                  id="lastName" 
                  placeholder="Mwakima" 
                  autoComplete="family-name" 
                  className="min-h-[44px]"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <Input 
                id="email" 
                type="email" 
                placeholder="arthurmwakima@gmail.com" 
                autoComplete="email" 
                className="min-h-[44px]"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="+254 706904720" 
                autoComplete="tel" 
                className="min-h-[44px]"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            {selectedPlan && (
              <div>
                <label htmlFor="plan" className="text-sm font-medium text-foreground mb-1.5 block">Plan</label>
                <Input 
                  id="plan" 
                  type="text" 
                  className="min-h-[44px] bg-muted"
                  value={formData.plan}
                  readOnly
                />
              </div>
            )}
            <div>
              <label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
              <Textarea 
                id="message" 
                placeholder="Tell us what you need..." 
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button 
              className="w-full min-h-[48px]" 
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
