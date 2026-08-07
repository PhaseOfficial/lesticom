import { useEffect } from "react";

/**
 * Lightweight client-side SEO updater. Updates document.title and the
 * standard meta description / OG tags. For a full SSR solution use
 * react-helmet-async, but for this static-style site this is enough.
 */
const Seo = ({ title, description, image, url }) => {
  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (selector, attr, value) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement(selector.startsWith("meta")
          ? "meta"
          : "link");
        const match = selector.match(/\[([^="]+)="([^"]+)"\]/);
        if (match) el.setAttribute(match[1], match[2]);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
      setMeta('meta[property="twitter:description"]', "content", description);
    }
    if (title) {
      setMeta('meta[property="og:title"]', "content", title);
      setMeta('meta[property="twitter:title"]', "content", title);
    }
    if (image) {
      setMeta('meta[property="og:image"]', "content", image);
      setMeta('meta[property="twitter:image"]', "content", image);
    }
    if (url) {
      setMeta('meta[property="og:url"]', "content", url);
      setMeta('meta[property="twitter:url"]', "content", url);
    }
  }, [title, description, image, url]);

  return null;
};

export default Seo;
