import { useEffect } from "react";

function setMeta(selector, attribute, value) {
  const element = document.querySelector(selector);
  if (element && value) element.setAttribute(attribute, value);
}

export default function Seo({ title, description, canonicalPath = "/", image }) {
  useEffect(() => {
    const url = new URL(canonicalPath, window.location.origin).toString();
    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);

    if (image) {
      const imageUrl = new URL(image, window.location.origin).toString();
      setMeta('meta[property="og:image"]', "content", imageUrl);
      setMeta('meta[name="twitter:image"]', "content", imageUrl);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", url);
  }, [canonicalPath, description, image, title]);

  return null;
}
