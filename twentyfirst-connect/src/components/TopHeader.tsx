import { Mail, Phone, MessageCircle, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="w-full bg-primary text-primary-foreground py-2.5 border-b border-primary/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center gap-3 sm:gap-6">
          {/* Left side - Contact info */}
          <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm">
            {/* Email */}
            <a 
              href="mailto:info@21st-electronics.com" 
              className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity whitespace-nowrap"
              aria-label="Email us"
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="hidden sm:inline">info@21st-electronics.com</span>
              <span className="sm:hidden">Email</span>
            </a>

            {/* Phone */}
            <a 
              href="tel:+254720778496" 
              className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity whitespace-nowrap"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span className="hidden sm:inline">+254 720 778 496</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>

          {/* Right side - Social icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* WhatsApp */}
            <a 
              href="https://wa.me/254720778496" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity text-xs sm:text-sm"
              aria-label="Contact us on WhatsApp"
              title="Chat with us on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 flex-shrink-0" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Google Profile */}
            <a 
              href="https://share.google/faZuu6lMtac3CbuYZ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-80 transition-opacity"
              aria-label="Visit our Google profile"
              title="View us on Google"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
