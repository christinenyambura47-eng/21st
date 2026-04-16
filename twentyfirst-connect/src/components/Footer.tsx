import { Wifi } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy py-12 sm:py-16" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center" aria-hidden="true">
                <Wifi className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-navy-foreground">21st Electronics</span>
            </div>
            <p className="text-navy-foreground/50 text-sm leading-relaxed">
              Connecting Kenyan homes with fast, reliable, unlimited internet since day one.
            </p>
          </div>

          {[
            { title: "Products", links: [
              { label: "Home Internet", href: "#products" },
              { label: "Business Plans", href: "#products" },
              { label: "Premium", href: "#products" },
            ]},
            { title: "Company", links: [
              { label: "About Us", href: "/about" },
              { label: "Coverage", href: "/coverage" },
              { label: "Careers", href: "#" },
            ]},
            { title: "Support", links: [
              { label: "Contact Us", href: "/contact" },
              { label: "Help Center", href: "#support" },
              { label: "FAQ", href: "/faq" },
            ]},
          ].map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h4 className="font-heading font-semibold text-navy-foreground mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => {
                  const isExternal = link.href.startsWith("http") || link.href.startsWith("#");
                  return (
                    <li key={link.label}>
                      {isExternal ? (
                        <a href={link.href} className="text-sm text-navy-foreground/50 hover:text-primary transition-colors">
                          {link.label}
                        </a>
                      ) : (
                        <Link to={link.href} className="text-sm text-navy-foreground/50 hover:text-primary transition-colors">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>

        <div className="border-t border-navy-foreground/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-navy-foreground/40">
            © {new Date().getFullYear()} 21st Electronics Ltd. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <p className="text-sm text-navy-foreground/40">
              Developed by <span className="font-medium text-navy-foreground/60">Arthur Mwakima</span>
            </p>
            <div className="flex gap-6">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <Link key={link.label} to={link.href} className="text-sm text-navy-foreground/40 hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
