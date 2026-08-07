import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaDesktop,
  FaNetworkWired,
  FaPrint,
  FaTools,
  FaArrowRight,
  FaCheckCircle,
  FaQuestionCircle,
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

const offerings = [
  {
    icon: FaDesktop,
    title: "Custom PC Builds & Brand-Name Systems",
    description:
      "Tailored workstations, desktops and laptops configured for your workload — whether you need raw compute power, reliability for everyday business tasks, or a sleek brand-name system from a trusted manufacturer.",
  },
  {
    icon: FaNetworkWired,
    title: "Networking Equipment",
    description:
      "Routers, switches and firewalls from leading vendors, sized and configured for the realities of African connectivity. We design networks that stay fast, stable and secure as your business grows.",
  },
  {
    icon: FaPrint,
    title: "Printers, UPS Systems & Accessories",
    description:
      "Business-grade printers, surge-protected UPS units, monitors, peripherals and cabling — everything your team needs to stay productive from day one, sourced from brands we trust.",
  },
  {
    icon: FaTools,
    title: "Maintenance Contracts & Installation",
    description:
      "Scheduled servicing, on-site installation and rapid-response support contracts that keep your hardware healthy, your warranties intact and your downtime to an absolute minimum.",
  },
];

const faqs = [
  {
    q: "What kind of hardware can I purchase from Lesticom?",
    a: "We provide a wide range of business-grade hardware — servers, workstations, laptops, networking gear, and peripherals from top manufacturers. Our solutions support both SMEs and enterprise environments.",
  },
  {
    q: "Do you offer installation, support, or warranties with hardware purchases?",
    a: "Yes. We provide setup, integration, and ongoing support. All hardware is backed by manufacturer warranties, and we offer optional extended service plans for peace of mind.",
  },
];

const Hardware = () => {
  const heroImage = getStockImage("hardware");
  const introImage = getStockImage("workspace");

  return (
    <Layout>
      <Seo
        title="Hardware Sales & Supplies — Tech That Works as Hard as You Do | Lesticom"
        description="Business-grade laptops, desktops, networking gear, printers and UPS systems — sourced from trusted brands with installation and maintenance support across Africa."
        image={heroImage}
      />

      {/* HERO */}
      <PageHero
        breadcrumb="Hardware Sales"
        title="Tech That Works as Hard as You Do"
        subtitle="Reliable, business-grade hardware — from laptops and desktops to networking gear and printers — backed by expert advisory and post-sales support."
        imageUrl={heroImage}
        imageAlt="Business-grade computer hardware and networking equipment"
        accent="gold"
      />

      {/* MAIN CONTENT */}
      <section className="py-stack-lg">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-stack-lg">
            {/* SIDEBAR */}
            <div className="lg:col-span-1">
              <ServiceSidebar activeSlug="hardware" />
            </div>

            {/* MAIN COLUMN */}
            <div className="lg:col-span-2 space-y-stack-lg">
              {/* Intro card */}
              <motion.div
                {...fadeInUp}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200"
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={introImage}
                    alt="Business hardware workstation and peripherals"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-gold-light bg-brand-charcoal/60 backdrop-blur-sm px-3 py-1 rounded-full">
                      <FaDesktop /> Hardware Sales & Supplies
                    </span>
                    <h2 className="mt-3 font-headline-lg text-2xl md:text-3xl text-white leading-tight">
                      Built for the Way African Businesses Actually Work
                    </h2>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="font-body-md text-on-surface-variant leading-relaxed text-lg">
                    From laptops and desktops to networking gear and printers,
                    Lesticom supplies reliable, business-grade hardware that
                    supports your daily operations. We source from trusted
                    brands and offer post-sales support to keep your tech in
                    top form.
                  </p>
                </div>
              </motion.div>

              {/* What We Provide */}
              <div>
                <motion.div {...fadeInUp} className="mb-8">
                  <span className="text-brand-gold font-label-lg uppercase tracking-widest">
                    What We Provide
                  </span>
                  <h3 className="font-headline-lg text-2xl md:text-3xl text-brand-charcoal mt-2 leading-tight">
                    Hardware That Earns Its Keep
                  </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                  {offerings.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: i * 0.08,
                          ease: "easeOut",
                        }}
                        className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-brand-blue/30 transition-all"
                      >
                        <div className="w-12 h-12 rounded-xl bg-brand-blue/10 group-hover:bg-brand-blue text-brand-blue group-hover:text-white flex items-center justify-center text-xl mb-4 transition-colors">
                          <Icon />
                        </div>
                        <h4 className="font-headline-md text-lg text-brand-charcoal mb-2 leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-on-surface-variant font-body-md leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Advisory paragraph */}
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
                    Advisory Services
                  </span>
                  <p className="font-body-md text-white/85 leading-relaxed mt-3 text-lg">
                    Our team understands the unique tech needs of African
                    businesses. We provide advisory services to ensure you buy
                    right the first time — balancing cost, performance, and
                    long-term value. Whether it's setting up a new office or
                    scaling your existing infrastructure, we're your hardware
                    partner.
                  </p>
                </div>
              </motion.div>

              {/* On-site setup note */}
              <motion.div {...fadeInUp} className="flex items-start gap-4">
                <FaCheckCircle className="text-brand-gold text-2xl mt-1 shrink-0" />
                <p className="font-body-md text-on-surface-variant leading-relaxed text-lg">
                  Lesticom also offers on-site setup and IT support to keep
                  your equipment running smoothly from day one.
                </p>
              </motion.div>

              {/* Common Questions */}
              <div>
                <motion.div {...fadeInUp} className="mb-8">
                  <span className="text-brand-gold font-label-lg uppercase tracking-widest">
                    Common Questions
                  </span>
                  <h3 className="font-headline-lg text-2xl md:text-3xl text-brand-charcoal mt-2 leading-tight">
                    Hardware FAQs
                  </h3>
                </motion.div>

                <div className="grid grid-cols-1 gap-stack-md">
                  {faqs.map((faq, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: i * 0.08,
                        ease: "easeOut",
                      }}
                      className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-7 hover:shadow-md hover:border-brand-blue/30 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 shrink-0 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center text-lg">
                          <FaQuestionCircle />
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-headline-md text-lg text-brand-charcoal leading-snug">
                            {faq.q}
                          </h4>
                          <p className="text-on-surface-variant font-body-md leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </div>
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
              Let's Get You Equipped
            </span>
            <h2 className="font-display-lg text-3xl md:text-5xl text-white mt-3 mb-6 leading-tight">
              Need Reliable Hardware?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto font-body-md text-lg leading-relaxed mb-10">
              Whether you're outfitting a new office, scaling up an existing
              team, or replacing aging gear — talk to Lesticom about hardware
              that fits your business and your budget.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-white font-label-lg px-8 py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              >
                Talk to a Hardware Specialist <FaArrowRight />
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

export default Hardware;