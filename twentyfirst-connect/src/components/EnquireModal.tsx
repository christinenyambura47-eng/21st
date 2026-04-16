import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";
import { submitQuoteForm } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import enquireSidebar from "@/assets/enquire-sidebar.jpg";

interface EnquireModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EnquireModal = ({ open, onOpenChange }: EnquireModalProps) => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    plan: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    
    // Map form field IDs to state keys
    const fieldMapping: { [key: string]: string } = {
      "eq-first": "firstName",
      "eq-last": "lastName",
      "eq-email": "email",
      "eq-phone": "phone",
      "eq-address": "address",
      "eq-plan": "plan",
    };

    const fieldName = fieldMapping[id] || id;
    
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await submitQuoteForm({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address || "Not provided",
        plan: formData.plan,
      });

      if (response.success) {
        setSubmitted(true);
        toast({
          title: "Success",
          description: response.message,
        });
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            plan: "",
          });
          onOpenChange(false);
        }, 2500);
      } else {
        toast({
          title: "Error",
          description: response.message || "Failed to submit quote request",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Quote form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to submit your quote request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden gap-0">
        <div className="grid md:grid-cols-[280px_1fr]">
          {/* Sidebar image */}
          <div className="hidden md:block relative">
            <img
              src={enquireSidebar}
              alt="21st Electronics support representative"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
              <div>
                <p className="text-primary-foreground font-heading font-bold text-lg leading-tight">
                  Get connected in 48 hours
                </p>
                <p className="text-primary-foreground/80 text-sm mt-1">
                  Fill the form and our team will reach out
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-6 sm:p-8">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-xl font-heading font-bold text-foreground">
                Request a Quote
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Tell us what you need and we'll get back to you within 2 hours.
              </DialogDescription>
            </DialogHeader>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-14 h-14 text-secondary mb-4" />
                <p className="text-lg font-heading font-semibold text-foreground">Thank you!</p>
                <p className="text-muted-foreground text-sm mt-1">We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="eq-first" className="text-sm font-medium text-foreground mb-1 block">First Name</label>
                    <Input 
                      id="eq-first" 
                      placeholder="John" 
                      required 
                      autoComplete="given-name" 
                      className="min-h-[44px]"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="eq-last" className="text-sm font-medium text-foreground mb-1 block">Last Name</label>
                    <Input 
                      id="eq-last" 
                      placeholder="Doe" 
                      required 
                      autoComplete="family-name" 
                      className="min-h-[44px]"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="eq-email" className="text-sm font-medium text-foreground mb-1 block">Email</label>
                  <Input 
                    id="eq-email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    autoComplete="email" 
                    className="min-h-[44px]"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="eq-phone" className="text-sm font-medium text-foreground mb-1 block">Phone</label>
                  <Input 
                    id="eq-phone" 
                    type="tel" 
                    placeholder="+254 7XX XXX XXX" 
                    required 
                    autoComplete="tel" 
                    className="min-h-[44px]"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="eq-address" className="text-sm font-medium text-foreground mb-1 block">Address/Location</label>
                  <Input 
                    id="eq-address" 
                    placeholder="Your estate or neighbourhood" 
                    required 
                    className="min-h-[44px]"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="eq-plan" className="text-sm font-medium text-foreground mb-1 block">Interested Plan</label>
                  <select
                    id="eq-plan"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-h-[44px]"
                    value={formData.plan}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>Select a plan</option>
                    <option value="Home 5Mbps">Home 5Mbps</option>
                    <option value="Home 10Mbps">Home 10Mbps</option>
                    <option value="Premium 20Mbps">Premium 20Mbps</option>
                    <option value="Business 30Mbps">Business 30Mbps</option>
                  </select>
                </div>
                <Button 
                  type="submit" 
                  className="w-full min-h-[48px]" 
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Submit Enquiry"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnquireModal;
