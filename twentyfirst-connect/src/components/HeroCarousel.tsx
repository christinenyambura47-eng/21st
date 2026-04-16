import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero3.jpg";
import hero2 from "@/assets/hero3.jpg";
import hero3 from "@/assets/hero3.jpg";
import hero4 from "@/assets/hero3.jpg";
import hero5 from "@/assets/hero3.jpg";

const heroImages = [hero1, hero2, hero3, hero4, hero5];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-play: transition every 3 seconds until last image
  useEffect(() => {
    if (!autoPlay || currentIndex >= heroImages.length - 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        // Stop auto-play when reaching the last image
        if (next >= heroImages.length - 1) {
          setAutoPlay(false);
        }
        return Math.min(next, heroImages.length - 1);
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [autoPlay, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    setAutoPlay(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const next = Math.min(prev + 1, heroImages.length - 1);
      // Stop auto-play when reaching the last image
      if (next >= heroImages.length - 1) {
        setAutoPlay(false);
      }
      return next;
    });
  };

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full"
        >
          <img
            src={heroImages[currentIndex]}
            alt={`Hero image ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Image counter */}
      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-white">
        {currentIndex + 1} / {heroImages.length}
      </div>

      {/* Previous button */}
      <Button
        size="icon"
        variant="ghost"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={handlePrev}
        disabled={currentIndex === 0}
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      {/* Next button */}
      <Button
        size="icon"
        variant="ghost"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={handleNext}
        disabled={currentIndex === heroImages.length - 1}
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {heroImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setAutoPlay(false);
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 w-2 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator - show when it's playing */}
      {autoPlay && currentIndex < heroImages.length - 1 && (
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-accent"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "linear" }}
          aria-label="Auto-play progress"
        />
      )}
    </div>
  );
};

export default HeroCarousel;
