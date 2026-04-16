import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import BackToTop from "@/components/BackToTop";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { MapPin, CheckCircle, ArrowRight, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import coverageMap from "@/assets/coverage-map.jpg";
import kenyaMap from "@/assets/coverage-map.jpg";

const cities = [
  { name: "Nairobi", areas: ["Westlands", "Kilimani", "South B/C", "Lavington", "Langata", "Kasarani", "Upper Hill", "Parklands"] },
  { name: "Mombasa", areas: ["Nyali", "Bamburi", "Tudor", "Likoni", "Changamwe"] },
  { name: "Kisumu", areas: ["Milimani", "Tom Mboya", "Kondele", "Jericho"] },
  { name: "Nakuru", areas: ["Town Centre", "Milimani", "Section 58", "Flamingo"] },
  { name: "Eldoret", areas: ["Town Centre", "Elgon View", "Langas", "Kesses"] },
  { name: "Thika", areas: ["Town Centre", "Makongeni", "Ngoingwa", "Kimira"] },
  { name: "Homebay", areas: ["Town Centre", "Karungu", "Kamaindi", "Osodo"] },
];

const Coverage = () => {
  const [searchArea, setSearchArea] = useState("");
  const [searchResult, setSearchResult] = useState<{ city: string; covered: boolean } | null>(null);
  const [searched, setSearched] = useState(false);

  const handleCoverageCheck = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchArea.trim()) {
      setSearchResult(null);
      setSearched(false);
      return;
    }

    const searchTerm = searchArea.toLowerCase().trim();
    let found = false;
    let foundCity = "";

    // Search through all cities and their areas
    for (const city of cities) {
      const areaMatch = city.areas.some(
        area => area.toLowerCase().includes(searchTerm) || searchTerm.includes(area.toLowerCase())
      );
      
      if (areaMatch || city.name.toLowerCase().includes(searchTerm)) {
        found = true;
        foundCity = city.name;
        break;
      }
    }

    setSearchResult({
      city: foundCity,
      covered: found,
    });
    setSearched(true);
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Coverage Map | 21st Electronics - Check Your Area"
        description="Check if your area is covered by 21st Electronics. We serve 7 cities: Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, Thika, and Homebay."
        url="https://21st-electronics.com/coverage"
        type="website"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={kenyaMap}
            alt="Kenya cities coverage map"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">
              Coverage Map
            </h1>
            <p className="text-primary-foreground/80 text-base sm:text-lg">
              We're live in 7 cities and expanding fast. Check if your area is covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coverage check */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
            <div>
              {/* Search Form */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-6 sm:p-8 mb-8">
                <h2 className="text-xl font-heading font-bold text-foreground mb-4">Check Your Area</h2>
                <form onSubmit={handleCoverageCheck} className="flex gap-3 mb-6">
                  <Input 
                    placeholder="Enter your estate or neighbourhood" 
                    className="min-h-[44px] flex-1"
                    value={searchArea}
                    onChange={(e) => setSearchArea(e.target.value)}
                  />
                  <Button size="lg" className="min-h-[44px] gap-2" type="submit">
                    Check <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>

                {/* Search Results */}
                {searched && searchResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg border-2 ${
                      searchResult.covered
                        ? "bg-secondary/10 border-secondary"
                        : "bg-destructive/10 border-destructive"
                    }`}
                  >
                    {searchResult.covered ? (
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-secondary" />
                        <div>
                          <p className="font-semibold text-secondary">Great! We cover {searchResult.city}!</p>
                          <p className="text-sm opacity-90 mt-1">Your area is covered. Request a quote to get connected.</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-destructive" />
                        <div>
                          <p className="font-semibold text-destructive">Not covered yet</p>
                          <p className="text-sm opacity-90 mt-1">We're expanding soon. Register your interest to get priority.</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>

              {/* Cities and Areas */}
              <div className="space-y-6">
                {cities.map((city, i) => (
                  <motion.div key={city.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                    <h3 className="font-heading font-semibold text-foreground flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      {city.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {city.areas.map((area) => (
                        <span key={area} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-xs font-medium text-foreground hover:bg-muted/80 cursor-pointer transition-colors" onClick={() => setSearchArea(area)}>
                          <CheckCircle className="w-3 h-3 text-secondary" />
                          {area}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="sticky top-24">
              <img src={coverageMap} alt="Coverage map of 21st Electronics network" loading="lazy" className="rounded-2xl w-full object-cover border border-border" />
              <p className="text-center text-muted-foreground text-sm mt-4">
                Not in your area yet? <a href="/#support" className="text-primary font-medium hover:underline">Register your interest</a> and we'll prioritise your location.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
      <BackToTop />
    </div>
  );
};

export default Coverage;
