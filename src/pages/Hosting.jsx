import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaShieldAlt,
  FaHdd,
  FaCheckCircle,
  FaExpandArrowsAlt,
  FaServer,
  FaHeadset,
  FaLock,
} from "react-icons/fa";
import Layout from "../components/common/Layout";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import ServiceSidebar from "../components/common/ServiceSidebar";
import { getStockImage } from "../components/common/stockImages";

const Hosting = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  const highlights = [
    {
      icon: FaShieldAlt,
      title: "DDoS Protection & SSL",
      description:
        "Multi-layer DDoS mitigation and always-on SSL keep malicious traffic out and your visitors' data encrypted in transit.",
    },
    {
      icon: FaHdd,
      title: "Encrypted Backups & Server Hardening",
      description:
        "Automated, encrypted off-site backups paired with hardened server configs — so your data is recoverable and your perimeter is tight.",
    },
    {
      icon: FaCheckCircle,
      title: "99.99% Uptime Guarantee",
      description:
        "Redundant power, network, and hardware keep your site online. We back it with a credible SLA — not marketing fluff.",
    },
    {
      icon: FaExpandArrowsAlt,
      title: "Scalable Plans for Every Business",
      description:
        "From a small brochure site to a high-traffic enterprise platform, our plans scale with you — no painful migrations mid-growth.",
    },
  ];

  const faqs = [
    {
      q: "What types of web hosting packages does Lesticom offer?",
      a: "We offer shared, VPS, and dedicated hosting solutions depending on your performance needs. Whether you're running a small blog or a high-traffic eCommerce site, we've got scalable hosting tailored to your growth.",
    },
    {
      q: "How do you guarantee uptime and security for hosted websites?",
      a: "Our hosting infrastructure is built on high-availability architecture with 24/7 monitoring, regular backups, and DDoS protection. We offer 99.9% uptime and ensure your data stays safe and accessible.",
    },
  ];

  return (
    <Layout>
      <Seo
        title="Secure Hosting | Lesticom"
        description="Ultra-secure, high-availability hosting for businesses that take uptime and data protection seriously. DDoS protection, SSL, encrypted backups, and 99.99% uptime."
        image={getStockImage("hosting")}
        url="/services/secure-hosting"
      />

      <PageHero
        breadcrumb="Secure Hosting"
        title="Sleep Easy Knowing Your Site is Safe"
        subtitle="Ultra-secure, high-availability hosting tailored for businesses that take uptime and data protection seriously — built for speed, resilience, and total peace of mind."
        imageUrl={getStockImage("hosting")}
        imageAlt="Secure server infrastructure powering reliable web hosting"
        accent="blue"
      />

      <section className="py-stack-lg bg-brand-cream">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
            <ServiceSidebar activeSlug="secure-hosting" />

            <div className="lg:col-span-2 space-y-stack-lg">
              {/* Intro card */}
              <motion.div
                {...fadeInUp}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={getStockImage("hosting")}
                    alt="Secure hosting infrastructure"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-charcoal/60 via-brand-blue/30 to-transparent" />
                  <span className="absolute top-5 left-5 inline-flex items-center gap-2 bg-white/90 text-brand-blue text-xs font-label-lg uppercase tracking-widest px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    Secure · Reliable · Monitored
                  </span>
                </div>
                <div className="p-6 md:p-8 space-y-stack-md">
                  <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-brand-charcoal">
                    Bulletproof hosting for businesses that can't afford downtime.
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    Your digital presence deserves bulletproof hosting. At Lesticom,
                    we offer ultra-secure, high-availability hosting tailored for
                    businesses that take uptime and data protection seriously. Our
                    servers are optimized for speed, resilience, and total peace of
                    mind.
                  </p>
                </div>
              </motion.div>

              {/* Hosting Highlights */}
              <motion.div {...fadeInUp} className="space-y-stack-md">
                <div>
                  <span className="inline-block text-xs font-label-lg uppercase tracking-widest text-brand-blue bg-primary-container px-3 py-1.5 rounded-full">
                    Hosting Highlights
                  </span>
                  <h3 className="mt-3 font-headline-lg text-headline-md md:text-headline-lg text-brand-charcoal">
                    Built for uptime. Hardened for safety.
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  {highlights.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        {...fadeInUp}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary-container text-brand-blue flex items-center justify-center mb-stack-md group-hover:bg-brand-blue group-hover:text-white transition-colors">
                          <Icon className="text-xl" />
                        </div>
                        <h4 className="font-headline-md text-lg text-brand-charcoal mb-2">
                          {item.title}
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Infrastructure / Custom config dark panel */}
              <motion.div
                {...fadeInUp}
                className="bg-gradient-to-br from-brand-charcoal to-brand-blue-dark text-white rounded-2xl p-6 md:p-10 shadow-lg relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z'/%3E%3Cpath d='M30 10L50 30L30 50L10 30Z'/%3E%3Ccircle cx='30' cy='30' r='8'/%3E%3C/g%3E%3C/svg%3E\")",
                  }}
                />
                <div className="relative z-10">
                  <span className="inline-block text-xs font-label-lg uppercase tracking-widest text-brand-gold-light bg-white/10 px-3 py-1.5 rounded-full">
                    Infrastructure & Support
                  </span>
                  <h3 className="mt-3 font-headline-lg text-headline-md md:text-headline-lg mb-3">
                    Cert-grade data centers. Round-the-clock engineers.
                  </h3>
                  <p className="text-white/80 max-w-2xl leading-relaxed mb-stack-md">
                    Our data centers are strategically located and comply with
                    top-tier industry certifications. Whether you're running an
                    e-commerce store, an online portal, or a mission-critical
                    enterprise platform, we provide the bandwidth, storage, and
                    security infrastructure to keep your digital operations running
                    smoothly.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <FaServer className="text-brand-gold-light text-2xl mb-3" />
                      <h4 className="font-headline-md text-lg mb-1.5">
                        Certified Facilities
                      </h4>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Strategically located data centers with top-tier
                        compliance and redundant power.
                      </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <FaLock className="text-brand-gold-light text-2xl mb-3" />
                      <h4 className="font-headline-md text-lg mb-1.5">
                        Hardened by Default
                      </h4>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Every server ships hardened — patches, firewalls, and
                        encryption configured on day one.
                      </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <FaHeadset className="text-brand-gold-light text-2xl mb-3" />
                      <h4 className="font-headline-md text-lg mb-1.5">
                        24/7 Engineers
                      </h4>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Migration, optimization, monitoring, and troubleshooting —
                        handled by humans, around the clock.
                      </p>
                    </div>
                  </div>

                  <p className="mt-stack-md text-white/85 leading-relaxed">
                    Need custom configurations or managed hosting? No problem. Our
                    engineers are available 24/7 to assist with migration,
                    optimization, monitoring, and troubleshooting. With Lesticom,
                    your business is online,{" "}
                    <span className="text-brand-gold-light font-semibold">
                      always
                    </span>
                    .
                  </p>
                </div>
              </motion.div>

              {/* Common Questions */}
              <motion.div {...fadeInUp} className="space-y-stack-md">
                <div>
                  <span className="inline-block text-xs font-label-lg uppercase tracking-widest text-brand-blue bg-primary-container px-3 py-1.5 rounded-full">
                    Common Questions
                  </span>
                  <h3 className="mt-3 font-headline-lg text-headline-md md:text-headline-lg text-brand-charcoal">
                    What clients ask before they migrate.
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-stack-md">
                  {faqs.map((faq, i) => (
                    <motion.div
                      key={i}
                      {...fadeInUp}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-headline-md text-lg text-brand-charcoal mb-3 flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center text-sm font-bold">
                          {i + 1}
                        </span>
                        <span>{faq.q}</span>
                      </h4>
                      <p className="text-slate-700 leading-relaxed pl-11">
                        {faq.a}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
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
            Hosting That Holds The Line
          </motion.span>
          <motion.h2
            {...fadeInUp}
            className="font-headline-lg text-headline-md md:text-headline-lg mb-4"
          >
            Need Bulletproof Hosting?
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="text-white/80 max-w-2xl mx-auto mb-stack-md leading-relaxed"
          >
            Talk to our engineers about a hosting plan tailored to your business —
            from a single site to a high-traffic enterprise platform. We'll handle
            the migration, you focus on the business.
          </motion.p>
          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-white font-label-lg uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              Get Started <FaArrowRight className="text-sm" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-label-lg uppercase tracking-wider px-8 py-4 rounded-xl transition-all"
            >
              Explore Other Services
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Hosting;
