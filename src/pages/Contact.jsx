import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPaperPlane,
  FaCheckCircle,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

import Layout from "../components/common/Layout";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import { getStockImage } from "../components/common/stockImages";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const PUBLISHED_PHONE = "+263 78 540 2212";
const CANONICAL_PHONE = "+263 77 522 2513";
const PUBLISHED_TEL = "+263785402212";
const CANONICAL_TEL = "+263775222513";
const EMAIL = "support@lesticom.africa";
const ADDRESS_LINE_1 = "275 Herbert Chitepo and 6th";
const ADDRESS_LINE_2 = "Harare, Zimbabwe";

const quickContacts = [
  {
    icon: FaPhone,
    title: "Call Us Today",
    value: PUBLISHED_PHONE,
    href: `tel:${PUBLISHED_TEL}`,
    accent: "blue",
    note: `Canonical line: ${CANONICAL_PHONE}`,
  },
  {
    icon: FaEnvelope,
    title: "Make a Quote",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    accent: "gold",
    note: "We reply within one business day",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    value: `${ADDRESS_LINE_1}, ${ADDRESS_LINE_2}`,
    href: "https://maps.google.com/?q=275+Herbert+Chitepo+and+6th+Harare",
    accent: "charcoal",
    note: "Open in Google Maps",
    external: true,
  },
];

const accentStyles = {
  blue: {
    chip: "bg-brand-blue/10 text-brand-blue",
    hoverChip: "group-hover:bg-brand-blue group-hover:text-white",
    ring: "hover:border-brand-blue/40",
  },
  gold: {
    chip: "bg-brand-gold/10 text-brand-gold-dark",
    hoverChip: "group-hover:bg-brand-gold group-hover:text-white",
    ring: "hover:border-brand-gold/40",
  },
  charcoal: {
    chip: "bg-brand-charcoal/10 text-brand-charcoal",
    hoverChip: "group-hover:bg-brand-charcoal group-hover:text-white",
    ring: "hover:border-brand-charcoal/30",
  },
};

const openingHours = [
  { day: "Monday", hours: "09:00 AM – 05:00 PM" },
  { day: "Tuesday", hours: "09:00 AM – 05:00 PM" },
  { day: "Wednesday", hours: "09:00 AM – 05:00 PM" },
  { day: "Thursday", hours: "09:00 AM – 05:00 PM" },
  { day: "Friday", hours: "09:00 AM – 05:00 PM" },
  { day: "Saturday – Sunday", hours: "Closed" },
];

const mapEmbedSrc =
  "https://www.google.com/maps?q=275+Herbert+Chitepo+and+6th,+Harare,+Zimbabwe&output=embed";
const mapDirectionsHref =
  "https://www.google.com/maps/dir/?api=1&destination=275+Herbert+Chitepo+and+6th,+Harare,+Zimbabwe";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <Layout>
      <Seo
        title="Contact Lesticom — IT & AI Experts in Zimbabwe"
        description="Get in touch with Lesticom. Visit us in Harare or call +263 77 522 2513."
        image={getStockImage("officeBuilding")}
        url="/contact"
      />

      <PageHero
        breadcrumb="Contact Us"
        title="Ready to Get Started?"
        subtitle="Send us a message — we'll get back to you promptly to discuss how Lesticom can support your goals."
        imageUrl={getStockImage("heroAfricanCity") || getStockImage("officeBuilding")}
        imageAlt="Lesticom office in Harare, Zimbabwe"
        accent="blue"
      />

      {/* QUICK CONTACT CARDS */}
      <section className="py-stack-lg bg-brand-cream">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <motion.div {...fadeInUp} className="text-center mb-stack-md">
            <span className="inline-block text-xs font-label-lg uppercase tracking-widest text-brand-blue bg-primary-container px-3 py-1.5 rounded-full">
              Reach Us Directly
            </span>
            <h2 className="mt-3 font-headline-lg text-3xl md:text-headline-md text-brand-charcoal">
              Three ways to start a conversation
            </h2>
            <p className="mt-3 text-on-surface-variant max-w-2xl mx-auto font-body-md leading-relaxed">
              Pick the channel that suits you. Our team responds across phone,
              email and in-person visits at our Harare office.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {quickContacts.map((card, i) => {
              const Icon = card.icon;
              const styles = accentStyles[card.accent];
              return (
                <motion.a
                  key={card.title}
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noreferrer" : undefined}
                  {...fadeInUp}
                  transition={{ delay: i * 0.1 }}
                  className={`group bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all ${styles.ring}`}
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 transition-colors ${styles.chip} ${styles.hoverChip}`}
                  >
                    <Icon />
                  </div>
                  <h3 className="font-headline-md text-xl text-brand-charcoal mb-2">
                    {card.title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed break-words">
                    {card.value}
                  </p>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-blue group-hover:text-brand-blue-dark transition-colors">
                    {card.note}
                    <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  </p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FORM + LOCATION */}
      <section className="py-stack-lg bg-white">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-stretch">
            {/* LEFT — CONTACT FORM */}
            <motion.div
              {...fadeInUp}
              className="bg-brand-cream border border-slate-200 rounded-2xl p-6 md:p-10 shadow-sm relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' stroke='%23000000' stroke-width='1'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z'/%3E%3Cpath d='M30 10L50 30L30 50L10 30Z'/%3E%3Ccircle cx='30' cy='30' r='8'/%3E%3C/g%3E%3C/svg%3E\")",
                }}
              />
              <div className="relative z-10">
                <span className="inline-block text-xs font-label-lg uppercase tracking-widest text-brand-blue bg-white px-3 py-1.5 rounded-full border border-brand-blue/20">
                  Send a Message
                </span>
                <h2 className="mt-4 font-headline-lg text-2xl md:text-3xl text-brand-charcoal leading-tight">
                  Tell us about your project
                </h2>
                <p className="mt-3 text-on-surface-variant font-body-md leading-relaxed">
                  Fill in the form and our team will get back to you within one
                  business day with a tailored response.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-brand-charcoal mb-1.5"
                    >
                      Your name <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-brand-charcoal placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-brand-charcoal mb-1.5"
                    >
                      Your email <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-brand-charcoal placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-brand-charcoal mb-1.5"
                    >
                      Write message <span className="text-brand-gold">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us a little about your goals, timeline, and how Lesticom can help..."
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-brand-charcoal placeholder:text-slate-400 resize-none focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-label-lg uppercase tracking-wider px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all w-full sm:w-auto"
                  >
                    Send Message <FaPaperPlane className="text-sm" />
                  </button>
                </form>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 flex items-start gap-3 bg-green-50 border border-green-200 text-green-800 rounded-xl p-4"
                    role="status"
                    aria-live="polite"
                  >
                    <FaCheckCircle className="text-green-600 text-xl mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold">Message sent!</p>
                      <p className="text-sm">
                        Thanks for reaching out. A Lesticom team member will
                        respond within one business day.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* RIGHT — LOCATION + MAP + WHATSAPP */}
            <motion.div {...fadeInUp} className="flex flex-col gap-stack-md">
              {/* Map */}
              <div className="relative bg-brand-charcoal rounded-2xl overflow-hidden shadow-md h-72 md:h-80">
                <iframe
                  title="Lesticom office location map"
                  src={mapEmbedSrc}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-brand-charcoal text-xs font-label-lg uppercase tracking-widest px-3 py-1.5 rounded-full shadow">
                  <FaMapMarkerAlt className="text-brand-gold" />
                  Harare · Zimbabwe
                </div>
              </div>

              {/* Location card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 className="font-headline-md text-xl text-brand-charcoal mb-1">
                  Visit Our Office
                </h3>
                <p className="text-on-surface-variant font-body-md leading-relaxed">
                  {ADDRESS_LINE_1}
                  <br />
                  {ADDRESS_LINE_2}
                </p>

                <div className="mt-5 flex items-start gap-3 rounded-xl bg-brand-cream border border-brand-blue/10 p-4">
                  <FaClock className="text-brand-blue text-xl mt-0.5 shrink-0" />
                  <div className="w-full">
                    <p className="font-label-lg text-sm uppercase tracking-widest text-brand-blue">
                      Opening Hours
                    </p>
                    <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-on-surface-variant font-body-md">
                      {openingHours.map((row) => (
                        <li
                          key={row.day}
                          className="flex items-center justify-between gap-3 border-b border-slate-200/70 pb-1 last:border-b-0"
                        >
                          <span className="font-medium text-brand-charcoal">
                            {row.day}
                          </span>
                          <span>{row.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={mapDirectionsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-label-lg uppercase tracking-wider px-5 py-3 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <FaMapMarkerAlt /> Get Directions
                  </a>
                  <a
                    href={`https://wa.me/${CANONICAL_TEL.replace(
      /^\+/,
      ""
    )}?text=${encodeURIComponent(
      "Hi Lesticom, I'd like to enquire about your services."
    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-label-lg uppercase tracking-wider px-5 py-3 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <FaWhatsapp className="text-lg" /> Chat on WhatsApp
                  </a>
                </div>

                <div className="mt-5 pt-5 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <a
                    href={`tel:${CANONICAL_TEL}`}
                    className="flex items-center gap-2 text-brand-charcoal hover:text-brand-blue transition-colors font-medium"
                  >
                    <FaPhone className="text-brand-blue" /> {CANONICAL_PHONE}
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-2 text-brand-charcoal hover:text-brand-blue transition-colors font-medium break-all"
                  >
                    <FaEnvelope className="text-brand-blue" /> {EMAIL}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
