import { Mail, Phone, MessageCircle, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const TopHeader = () => {
  const socialLinks = [
    {
      name: "WhatsApp",
      href: "https://wa.me/254720778496",
      icon: MessageCircle,
      label: "Message us on WhatsApp"
    },
    {
      name: "Facebook",
      href: "https://facebook.com/21stelectronics",
      icon: Facebook,
      label: "Follow us on Facebook"
    },
    {
      name: "Instagram",
      href: "https://instagram.com/21stelectronics",
      icon: Instagram,
      label: "Follow us on Instagram"
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/21st-electronics",
      icon: Linkedin,
      label: "Connect with us on LinkedIn"
    },
    {
      name: "Twitter",
      href: "https://twitter.com/21stelectronics",
      icon: Twitter,
      label: "Follow us on Twitter"
    },
  ];

  return (
    <div className="sticky top-0 z-40 w-full bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 text-slate-100 py-3 border-b border-slate-700/50 shadow-lg backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center gap-2 sm:gap-4 min-h-10">
          {/* Left side - Contact info */}
          <div className="flex items-center gap-2 sm:gap-6 text-xs sm:text-sm">
            {/* Email */}
            <a 
              href="mailto:info@21st-electronics.com" 
              className="flex items-center gap-1 sm:gap-2 hover:text-amber-400 transition-colors duration-300 whitespace-nowrap group relative"
              aria-label="Email us"
              title="info@21st-electronics.com"
            >
              <Mail className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline font-medium">info@21st-electronics.com</span>
              <span className="sm:hidden font-medium">Email</span>
            </a>

            {/* Separator */}
            <div className="hidden sm:block w-px h-4 bg-slate-600" />

            {/* Phone */}
            <a 
              href="tel:+254720778496" 
              className="flex items-center gap-1 sm:gap-2 hover:text-amber-400 transition-colors duration-300 whitespace-nowrap group"
              aria-label="Call us"
              title="+254 720 778 496"
            >
              <Phone className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline font-medium">+254 720 778 496</span>
              <span className="sm:hidden font-medium">Call</span>
            </a>
          </div>

          {/* Right side - Social icons & WhatsApp */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* WhatsApp with label */}
            <a 
              href="https://wa.me/254720778496" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-full bg-green-500/20 hover:bg-green-500/40 transition-colors duration-300 group border border-green-500/30 hover:border-green-400/60"
              aria-label="Chat with us on WhatsApp"
              title="Chat with us on WhatsApp: +254 720 778 496"
            >
              <MessageCircle className="w-4 h-4 flex-shrink-0 text-green-400 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-xs font-semibold text-green-300">WhatsApp</span>
              <span className="sm:hidden text-xs font-semibold text-green-300">Chat</span>
            </a>

            {/* Social Media Icons */}
            <div className="hidden sm:flex items-center gap-2 ml-2 pl-4 border-l border-slate-600">
              {socialLinks.slice(1).map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-700 transition-all duration-300 group hover:text-amber-400"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>

            {/* Mobile Social Icons */}
            <div className="sm:hidden flex items-center gap-1">
              {socialLinks.slice(1, 3).map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-slate-700 transition-all duration-300 group hover:text-amber-400"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <Icon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
