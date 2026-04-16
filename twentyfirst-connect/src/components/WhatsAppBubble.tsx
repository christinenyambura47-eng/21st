import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "254720778496";
  const whatsappMessage = "Hi, I'm interested in your internet services. Can you help me?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      {/* WhatsApp Chat Bubble */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-6 left-6 z-40"
      >
        <div className="relative">
          {/* Message Preview (shown when bubble is hovered) */}
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute bottom-16 left-0 bg-white text-gray-800 rounded-lg shadow-lg p-3 text-sm font-medium whitespace-nowrap"
            >
              Chat with us on WhatsApp!
            </motion.div>
          )}

          {/* Main Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 relative"
              aria-label="Chat with us on WhatsApp"
              title="Chat with us on WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
              
              {/* Pulse animation */}
              <motion.div
                className="absolute inset-0 rounded-full bg-green-500 opacity-75"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ zIndex: -1 }}
              />
            </motion.button>
          </a>
        </div>
      </motion.div>

      {/* Bottom left info (alternative static version) */}
      <div className="fixed bottom-6 left-6 z-30 hidden group-hover:block">
        <div className="text-white text-xs bg-black/50 px-2 py-1 rounded pointer-events-none">
          Available 24/7
        </div>
      </div>
    </>
  );
};

export default WhatsAppBubble;
