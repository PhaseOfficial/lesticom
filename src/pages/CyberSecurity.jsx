import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaNetworkWired,
  FaClipboardCheck,
  FaUserShield,
  FaChevronDown,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import Layout from "../components/common/Layout";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import ServiceSidebar from "../components/common/ServiceSidebar";
import { getStockImage } from "../components/common/stockImages";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const edgeFeatures = [
  {
    icon: FaShieldAlt,
    title: "Real-time Threat Detection & Response",
    description:
      "Continuous monitoring and instant incident response to neutralize attacks before they impact your operations.",
  },
  {
    icon: FaNetworkWired,
    title: "Network Hardening & Firewall Deployment",
    description:
      "Hardened network architecture and next-generation firewalls that segment traffic and lock down your perimeter.",
  },
  {
    icon: FaClipboardCheck,
    title: "Security Audits & Compliance",
    description:
      "End-to-end audits mapped to ISO 27001, GDPR, POPIA and other frameworks so you stay compliant and audit-ready.",
  },
  {
    icon: FaUserShield,
    title: "Endpoint Protection & Secure Authentication",
    description:
      "Zero-trust access, MFA and hardened endpoints that keep every device and identity in your organization secure.",
  },
];

const faqs = [
  {
    q: "How does Lesticom protect my business from cyber threats?",
    a: "We provide end-to-end cybersecurity solutions including network monitoring, vulnerability assessments, penetration testing, endpoint protection, and incident response. Our proactive approach helps identify and neutralize threats before they impact your operations.",
  },
  {
    q: "Do you offer customized cybersecurity plans based on business size and industry?",
    a: "Yes. Our cybersecurity services are tailored to your specific risk profile, compliance requirements, and infrastructure. Whether you're a startup or an enterprise, we build a defense strategy aligned with your unique threat landscape.",
  },
];

const CyberSecurity = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const toggleFaq = (i) => setActiveFaq(activeFaq === i ? null : i);

  const heroImage = getStockImage("cyber");

  return (
    <Layout>
      <Seo
        title="Cyber Security — Your Digital Fortress Starts Here | Lesticom"
        description="Enterprise-grade cybersecurity solutions tailored for African businesses — threat monitoring, penetration testing, endpoint protection and compliance from Lesticom."
        image={heroImage}
      />

      {/* HERO */}
      <PageHero
        breadcrumb="Cyber Security"
        title="Your Digital Fortress Starts Here"
        subtitle="Enterprise-grade cybersecurity tailored to protect your data, infrastructure, and reputation from evolving threats."
        imageUrl={heroImage}
        imageAlt="Cybersecurity operations and network monitoring"
        accent="blue"
      />

      {/* MAIN CONTENT */}
      <section className="py-stack-lg">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-stack-lg">
            {/* SIDEBAR */}
            <div className="lg:col-span-1">
              <ServiceSidebar activeSlug="cyber-security" />
            </div>

            {/* MAIN COLUMN */}
            <div className="lg:col-span-2 space-y-stack-lg">
              {/* Intro hero card with main paragraph */}
              <motion.div
                {...fadeInUp}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200"
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={heroImage}
                    alt="Cyber security operations center"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-gold-light bg-brand-charcoal/60 backdrop-blur-sm px-3 py-1 rounded-full">
                      <FaShieldAlt /> Cyber Defense
                    </span>
                    <h2 className="mt-3 font-headline-lg text-2xl md:text-3xl text-white leading-tight">
                      Built to Outpace Modern Threats
                    </h2>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="font-body-md text-on-surface-variant leading-relaxed text-lg">
                    In a world where threats evolve faster than trends, Lesticom
                    delivers enterprise-grade cybersecurity solutions tailored to
                    protect your data, infrastructure, and reputation. From
                    penetration testing to continuous threat monitoring and
                    endpoint protection, we shield your business from ransomware,
                    phishing attacks, data breaches, and more.
                  </p>
                </div>
              </motion.div>

              {/* Our Edge */}
              <div>
                <motion.div {...fadeInUp} className="mb-8">
                  <span className="text-brand-gold font-label-lg uppercase tracking-widest">
                    Our Edge
                  </span>
                  <h3 className="font-headline-lg text-2xl md:text-3xl text-brand-charcoal mt-2 leading-tight">
                    A Defense Strategy That Stays Ahead
                  </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                  {edgeFeatures.map((feature, i) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                        className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-brand-blue/30 transition-all"
                      >
                        <div className="w-12 h-12 rounded-xl bg-brand-blue/10 group-hover:bg-brand-blue text-brand-blue group-hover:text-white flex items-center justify-center text-xl mb-4 transition-colors">
                          <Icon />
                        </div>
                        <h4 className="font-headline-md text-lg text-brand-charcoal mb-2 leading-snug">
                          {feature.title}
                        </h4>
                        <p className="text-on-surface-variant font-body-md leading-relaxed">
                          {feature.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Approach paragraph */}
              <motion.div
                {...fadeInUp}
                className="bg-brand-charcoal text-white rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z'/%3E%3Cpath d='M30 10L50 30L30 50L10 30Z'/%3E%3Ccircle cx='30' cy='30' r='8'/%3E%3C/g%3E%3C/svg%3E\")",
                  }}
                />
                <div className="relative z-10">
                  <span className="text-brand-gold-light font-label-lg uppercase tracking-widest">
                    Our Approach
                  </span>
                  <p className="font-body-md text-white/85 leading-relaxed mt-3 text-lg">
                    Our cybersecurity experts work closely with your in-house team
                    to identify vulnerabilities before attackers do. We help you
                    develop an end-to-end strategy that includes employee training,
                    secure access protocols, encryption policies, and incident
                    response planning. With Lesticom, you're not just securing
                    systems — you're building digital resilience.
                  </p>
                </div>
              </motion.div>

              {/* Industry customization */}
              <motion.div {...fadeInUp} className="flex items-start gap-4">
                <FaCheckCircle className="text-brand-gold text-2xl mt-1 shrink-0" />
                <p className="font-body-md text-on-surface-variant leading-relaxed text-lg">
                  We understand that every industry has unique risks. Whether
                  you're in finance, healthcare, education, or e-commerce, we
                  customize our cybersecurity frameworks to match your compliance
                  requirements and operational environment.
                </p>
              </motion.div>

              {/* FAQ */}
              <div>
                <motion.div {...fadeInUp} className="mb-8">
                  <span className="text-brand-gold font-label-lg uppercase tracking-widest">
                    Common Questions
                  </span>
                  <h3 className="font-headline-lg text-2xl md:text-3xl text-brand-charcoal mt-2 leading-tight">
                    Cyber Security FAQs
                  </h3>
                </motion.div>

                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <motion.div
                      key={i}
                      {...fadeInUp}
                      transition={{ duration: 0.6, delay: i * 0.05 }}
                      className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm"
                    >
                      <button
                        onClick={() => toggleFaq(i)}
                        className="w-full flex justify-between items-center px-6 py-5 text-left font-headline-md text-brand-charcoal hover:bg-slate-50 transition-colors"
                      >
                        <span className="pr-4">{faq.q}</span>
                        <motion.span
                          animate={{ rotate: activeFaq === i ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-brand-blue text-lg shrink-0"
                        >
                          <FaChevronDown />
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {activeFaq === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 py-5 text-on-surface-variant font-body-md leading-relaxed border-t border-slate-100 bg-brand-cream/50">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop">
        <motion.div
          {...fadeInUp}
          className="max-w-container-max-width mx-auto bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-charcoal rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-xl"
        >
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z'/%3E%3Cpath d='M30 10L50 30L30 50L10 30Z'/%3E%3Ccircle cx='30' cy='30' r='8'/%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
          <div className="relative z-10">
            <span className="text-brand-gold-light font-label-lg uppercase tracking-widest">
              Take The Next Step
            </span>
            <h2 className="font-display-lg text-3xl md:text-5xl text-white mt-3 mb-6 leading-tight">
              Ready to Secure Your Business?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto font-body-md text-lg leading-relaxed mb-10">
              Talk to our cybersecurity experts about a tailored defense strategy
              for your organization — from audits and penetration testing to
              24/7 monitoring and incident response.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-white font-label-lg px-8 py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              >
                Get a Security Assessment <FaArrowRight />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-label-lg px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default CyberSecurity;
