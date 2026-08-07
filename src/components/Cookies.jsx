import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCookieBite } from "react-icons/fa";

const STORAGE_KEY = "lesticom-cookie-consent";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const consent = localStorage.getItem(STORAGE_KEY);
      if (!consent) setIsVisible(true);
    } catch {
      setIsVisible(true);
    }
  }, []);

  const persist = (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setIsVisible(false);
  };

  const handleAccept = () => persist("accepted");
  const handleDecline = () => persist("declined");

  // Floating reopen button (only after consent decision has been made)
  if (mounted && !isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-6 left-6 bg-brand-blue text-white p-3 rounded-full shadow-lg shadow-brand-blue/30 hover:bg-brand-blue-dark hover:-translate-y-0.5 z-50 transition-all active:scale-95 border border-white/20"
        title="Cookie settings"
        aria-label="Open cookie settings"
      >
        <FaCookieBite className="text-lg" />
      </button>
    );
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="cookie-banner"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 z-[100] w-[calc(100%-2rem)] md:w-full max-w-lg pointer-events-auto"
        >
          <div className="bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 backdrop-blur">
            <div className="flex items-start gap-3 mb-3">
              <span className="inline-flex w-10 h-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue shrink-0">
                <FaCookieBite className="text-lg" />
              </span>
              <div>
                <p className="font-label-lg text-sm uppercase tracking-widest text-brand-gold">
                  Privacy &amp; Cookies
                </p>
                <p className="font-headline-md text-base text-brand-charcoal mt-0.5">
                  We value your privacy
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              Lesticom uses cookies to ensure you get the best experience on our
              website. This helps us improve our IT, AI and cybersecurity
              services and provide content that is relevant to your business.
              Read more in our{" "}
              <a
                href="#/privacy-policy"
                className="text-brand-blue underline underline-offset-2 hover:text-brand-gold"
              >
                Privacy Policy
              </a>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={handleDecline}
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-brand-charcoal px-5 py-2.5 rounded-lg font-label-lg text-sm uppercase tracking-wider transition-colors"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 bg-brand-blue hover:bg-brand-blue-dark text-white px-5 py-2.5 rounded-lg font-label-lg text-sm uppercase tracking-wider shadow-md shadow-brand-blue/20 transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
