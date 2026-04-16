import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({
  title = "21st Electronics - Fast Reliable Internet in Kenya",
  description = "Experience fast, reliable, and unlimited internet connectivity across Kenya. Covering Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, Thika, and Homebay.",
  image = "https://21st-electronics.com/og-image.jpg",
  url = "https://21st-electronics.com",
  type = "website",
}: SEOProps) => {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Set meta tags
    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[${name.includes(":") ? "property" : "name"}="${name}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(name.includes(":") ? "property" : "name", name);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    // Core meta tags
    setMeta("description", description);
    setMeta("og:title", title);
    setMeta("og:description", description);
    setMeta("og:image", image);
    setMeta("og:url", url);
    setMeta("og:type", type);
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);
    setMeta("twitter:card", "summary_large_image");

    // Canonical URL
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, image, url, type]);

  return null;
};

export default SEO;
