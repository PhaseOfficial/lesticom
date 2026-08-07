import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronDown,
  FaQuestionCircle,
  FaArrowRight,
  FaSearch,
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

const FILTERS = [
  { id: "all", label: "All" },
  { id: "services", label: "Services" },
  { id: "ai", label: "AI" },
  { id: "hardware", label: "Hardware" },
  { id: "sms", label: "SMS" },
  { id: "hosting", label: "Hosting" },
];

const faqs = [
  {
    category: "services",
    q: "What services does Lesticom offer?",
    a: "Lesticom provides a full suite of digital solutions including AI training & implementation, software and app development, Cybersecurity, bulk SMS services, secure hosting, IT consultancy, branding, and hardware sales (laptops, desktops, and mobile devices).",
  },
  {
    category: "ai",
    q: "Who can benefit from your AI training programs?",
    a: "Our AI training is designed for individuals, professionals, educational institutions, and corporates looking to upskill in machine learning, data science, and AI implementation for real-world applications.",
  },
  {
    category: "sms",
    q: "Can I send bulk SMS messages to different groups or regions?",
    a: "Yes. Our bulk SMS platform supports targeted messaging by group, region, or custom lists. It's fast, reliable, and ideal for schools, businesses, NGOs, and campaign managers.",
  },
  {
    category: "services",
    q: "Do you develop both mobile and web applications?",
    a: "Yes, we build scalable, secure mobile apps (Android & iOS) and web applications tailored to your business needs, using modern frameworks and user-first design.",
  },
  {
    category: "services",
    q: "Do you offer branding or digital identity services?",
    a: "Yes. We offer full branding services — including logo design, corporate identity, and visual asset creation — to give your business a professional and consistent presence.",
  },
  {
    category: "hosting",
    q: "What kind of hosting services do you offer?",
    a: "We provide secure, high-uptime hosting solutions including shared, VPS, and dedicated hosting — along with domain registration and email hosting services.",
  },
  {
    category: "hardware",
    q: "Can Lesticom help us choose the right hardware for our organization?",
    a: "Absolutely. We supply and consult on hardware needs — including laptops, desktops, and mobile phones — ensuring you get the right tech for your budget and performance requirements.",
  },
  {
    category: "all",
    q: "How do I get started with Lesticom's services?",
    a: "Simply contact us via the website or request a consultation. We'll walk you through your options, define your needs, and tailor a solution that fits your goals and budget.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");
  const [query, setQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    return faqs.filter((item) => {
      const matchesFilter =
        activeFilter === "all" ||
        item.category === activeFilter ||
        item.category === "all";
      const matchesQuery =
        !query ||
        item.q.toLowerCase().includes(query.toLowerCase()) ||
        item.a.toLowerCase().includes(query.toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <Layout>
      <Seo
        title="FAQs — Lesticom"
        description="Answers to common questions about Lesticom's IT, AI, cybersecurity and digital services."
        image={getStockImage("heroDiversity")}
        url="/faqs"
      />

      <PageHero
        breadcrumb="FAQs"
        title="Frequently Asked Questions"
        subtitle="Know more about our services"
        imageUrl={getStockImage("heroDiversity")}
        imageAlt="Lesticom team answering customer questions"
        accent="blue"
      />

      {/* FAQ Section */}
      <section className="py-stack-lg bg-brand-cream relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#1e40af 0.6px, transparent 0.6px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          {/* Section intro */}
          <motion.div
            {...fadeInUp}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="inline-flex items-center gap-2 text-xs font-label-lg uppercase tracking-widest text-brand-blue bg-primary-container px-4 py-1.5 rounded-full">
              <FaQuestionCircle className="text-brand-gold" />
              Help Centre
            </span>
            <h2 className="mt-4 font-headline-lg text-headline-md md:text-headline-lg text-brand-charcoal">
              Quick answers to what people ask most.
            </h2>
            <p className="mt-3 text-on-surface-variant leading-relaxed">
              Can't find what you're looking for? Reach out and our team will
              respond within one business day.
            </p>
          </motion.div>

          {/* Filters + Search */}
          <motion.div
            {...fadeInUp}
            className="max-w-3xl mx-auto mb-10 space-y-5"
          >
            <div className="flex flex-wrap justify-center gap-2">
              {FILTERS.map((filter) => {
                const isActive = activeFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm font-label-lg transition-all duration-200 ${
                      isActive
                        ? "bg-brand-blue text-white shadow-md scale-[1.02]"
                        : "bg-white text-brand-charcoal border border-slate-200 hover:border-brand-blue hover:text-brand-blue"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>

            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-brand-charcoal placeholder:text-slate-400"
              />
            </div>
          </motion.div>

          {/* Accordion list */}
          <div className="max-w-3xl mx-auto space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredFaqs.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-white border border-slate-200 rounded-2xl p-10 text-center text-on-surface-variant"
                >
                  No questions match your search. Try a different filter or
                  keyword.
                </motion.div>
              ) : (
                filteredFaqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <motion.div
                      key={faq.q}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className={`bg-white border rounded-2xl overflow-hidden shadow-sm transition-all ${
                        isOpen
                          ? "border-brand-blue/40 shadow-md"
                          : "border-slate-200 hover:border-brand-blue/40"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        aria-expanded={isOpen}
                        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                      >
                        <span className="flex items-start gap-3">
                          <span
                            className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                              isOpen
                                ? "bg-brand-blue text-white"
                                : "bg-primary-container text-brand-blue"
                            }`}
                          >
                            {index + 1}
                          </span>
                          <span className="font-headline-md text-base md:text-lg text-brand-charcoal leading-snug pt-1">
                            {faq.q}
                          </span>
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                            isOpen
                              ? "bg-brand-blue text-white"
                              : "bg-slate-100 text-brand-charcoal"
                          }`}
                        >
                          <FaChevronDown className="text-xs" />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.35,
                              ease: [0.04, 0.62, 0.23, 0.98],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 pt-1 pl-[4.25rem] text-on-surface-variant leading-relaxed border-t border-slate-100 mt-1">
                              <p className="pt-4">{faq.a}</p>
                              <div className="mt-4 flex flex-wrap gap-2">
                                <span className="text-[11px] uppercase tracking-wider font-label-lg text-brand-blue bg-primary-container px-2.5 py-1 rounded-full">
                                  Category: {faq.category}
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-stack-lg bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-charcoal relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z'/%3E%3Cpath d='M30 10L50 30L30 50L10 30Z'/%3E%3Ccircle cx='30' cy='30' r='8'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop text-center text-white">
          <motion.span
            {...fadeInUp}
            className="inline-block text-xs font-label-lg uppercase tracking-widest text-brand-gold-light bg-white/10 px-3 py-1.5 rounded-full mb-5"
          >
            Still Have Questions?
          </motion.span>
          <motion.h2
            {...fadeInUp}
            className="font-headline-lg text-headline-md md:text-headline-lg mb-4"
          >
            Let's talk about your project.
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="text-white/80 max-w-2xl mx-auto mb-stack-md leading-relaxed"
          >
            Whether you're exploring AI, scaling infrastructure, or ready to
            build your next app — our team is one message away.
          </motion.p>
          <motion.div
            {...fadeInUp}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-white font-label-lg uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              Get In Touch <FaArrowRight className="text-sm" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-label-lg uppercase tracking-wider px-8 py-4 rounded-xl transition-all"
            >
              Browse Services
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Faq;