import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

/**
 * Reusable page hero with breadcrumb + title + subtitle.
 *
 * @param {string} title         - H1 title (without arrow icons)
 * @param {string} subtitle      - Short tagline below title
 * @param {string} breadcrumb    - Last segment of breadcrumb e.g. "Cyber Security"
 * @param {string} imageUrl      - Background image (Unsplash URL)
 * @param {string} imageAlt      - Alt text for the bg image
 * @param {string} accent        - "blue" | "gold"  (default blue)
 */
const PageHero = ({
  title,
  subtitle,
  breadcrumb,
  imageUrl,
  imageAlt = "",
  accent = "blue",
  children,
}) => {
  const accentClass =
    accent === "gold"
      ? "from-brand-gold/90 via-brand-charcoal/85 to-brand-charcoal/95"
      : "from-brand-blue/90 via-brand-charcoal/85 to-brand-charcoal/95";

  return (
    <section className="relative pt-24 md:pt-28 pb-16 md:pb-20 overflow-hidden">
      {/* Background image */}
      {imageUrl && (
        <div className="absolute inset-0 z-0">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-br ${accentClass}`}
          />
          {/* African pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z'/%3E%3Cpath d='M30 10L50 30L30 50L10 30Z'/%3E%3Ccircle cx='30' cy='30' r='8'/%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
        </div>
      )}

      <div className="relative z-10 max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop text-white">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-sm mb-6"
        >
          <Link
            to="/"
            className="text-white/70 hover:text-brand-gold-light transition-colors"
          >
            Home
          </Link>
          <FaArrowRight className="text-white/40 text-[10px]" />
          {breadcrumb && (
            <span className="text-white/90 font-medium">{breadcrumb}</span>
          )}
        </motion.nav>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display-lg text-4xl md:text-display-lg-mobile lg:text-5xl max-w-3xl leading-tight mb-4"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-white/90 max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {children}
      </div>
    </section>
  );
};

export default PageHero;
