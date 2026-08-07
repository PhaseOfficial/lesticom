import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCompass,
  FaCloud,
  FaHandshake,
  FaShieldAlt,
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

const deliverables = [
  {
    icon: FaCompass,
    title: "IT Strategy & Digital Transformation Planning",
    description:
      "Roadmaps that turn business goals into a staged, measurable technology plan — from cloud adoption to process automation and digital channels.",
  },
  {
    icon: FaCloud,
    title: "Infrastructure & Cloud Optimization",
    description:
      "Right-sized, cost-efficient infrastructure. We audit, re-architect and optimize on-premise, hybrid and cloud environments for performance, resilience and spend.",
  },
  {
    icon: FaHandshake,
    title: "Technology Procurement & Vendor Management",
    description:
      "Independent vendor selection, RFP management and contract negotiation that gets you the right technology at the right terms — without the upsell.",
  },
  {
    icon: FaShieldAlt,
    title: "Project Risk Mitigation",
    description:
      "Proactive risk identification, dependency mapping and contingency planning so critical projects ship on time, on budget and within scope.",
  },
];

const faqs = [
  {
    q: "What IT consulting services does Lesticom offer?",
    a: "We offer a range of IT consulting services, including IT strategy development, infrastructure assessment, cybersecurity solutions, and digital transformation guidance. Our team of experts collaborates with your organization to identify challenges and implement effective technology solutions that drive growth and efficiency.",
  },
  {
    q: "How does Lesticom tailor its IT consulting services to individual business needs?",
    a: "We understand that each business is unique. Our approach involves a detailed analysis of your current IT infrastructure, business objectives, and industry landscape. Based on this assessment, we develop customized strategies and solutions that align with your goals and enhance your technological capabilities.",
  },
];

const openingHours = [
  { day: "Mon – Friday", hours: "08.30 AM – 5.00 PM" },
  { day: "Saturday", hours: "09.00 AM – 4.00 PM" },
  { day: "Sunday", hours: "Closed" },
  { day: "Emergency", hours: "24 hours" },
];

const Consultancy = () => {
  const heroImage = getStockImage("consultancy");

  return (
    <Layout>
      <Seo
        title="IT Consultancy — Strategic Tech, Tactical Growth | Lesticom"
        description="Results-driven IT consultancy for African businesses. Align your technology with your business objectives — IT strategy, cloud, procurement and risk mitigation from Lesticom."
        image={heroImage}
      />

      {/* HERO */}
      <PageHero
        breadcrumb="IT Consultancy"
        title="Strategic Tech, Tactical Growth"
        subtitle="We align your IT with your business objectives to maximize ROI and eliminate inefficiencies — from strategy to execution."
        imageUrl={heroImage}
        imageAlt="IT consultancy strategy and planning session"
        accent="blue"
      />

      {/* MAIN CONTENT */}
      <section className="py-stack-lg">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-stack-lg">
            {/* SIDEBAR */}
            <div className="lg:col-span-1">
              <ServiceSidebar
                activeSlug="it-consultancy"
                openingHours={openingHours}
                phone="+263 77 522 2513"
              />
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
                    src={heroImage}
                    alt="Lesticom IT consultants in strategy session"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-gold-light bg-brand-charcoal/60 backdrop-blur-sm px-3 py-1 rounded-full">
                      <FaCompass /> IT Consultancy
                    </span>
                    <h2 className="mt-3 font-headline-lg text-2xl md:text-3xl text-white leading-tight">
                      Results-Driven Transformation, Not Just Advice
                    </h2>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="font-body-md text-on-surface-variant leading-relaxed text-lg">
                    Lesticom&rsquo;s IT consultancy isn&rsquo;t just about
                    advice&mdash;it&rsquo;s about results-driven transformation. We
                    align your IT with your business objectives to maximize ROI
                    and eliminate inefficiencies. Whether you&rsquo;re a startup
                    or an enterprise, our team brings fresh insight and technical
                    rigor to every project.
                  </p>
                </div>
              </motion.div>

              {/* What We Deliver */}
              <div>
                <motion.div {...fadeInUp} className="mb-8">
                  <span className="text-brand-gold font-label-lg uppercase tracking-widest">
                    What We Deliver
                  </span>
                  <h3 className="font-headline-lg text-2xl md:text-3xl text-brand-charcoal mt-2 leading-tight">
                    Consulting That Moves The Needle
                  </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                  {deliverables.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
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

              {/* Closing paragraphs */}
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
                    Beyond The Surface
                  </span>
                  <p className="font-body-md text-white/85 leading-relaxed mt-3 text-lg">
                    Our consultants go beyond the surface to uncover hidden costs,
                    underperforming systems, and gaps in scalability. We help you
                    plan, procure, implement, and measure technology investments
                    that push you ahead of your competitors.
                  </p>
                </div>
              </motion.div>

              <motion.div
                {...fadeInUp}
                className="flex items-start gap-4"
              >
                <FaCheckCircle className="text-brand-gold text-2xl mt-1 shrink-0" />
                <p className="font-body-md text-on-surface-variant leading-relaxed text-lg">
                  Lesticom believes in actionable insights. We combine business
                  acumen with deep technical knowledge to deliver solutions that
                  are sustainable, measurable, and aligned with your growth
                  goals. Whether you&rsquo;re adopting cloud technologies,
                  upgrading infrastructure, or streamlining operations, we
                  provide the strategic guidance to help you thrive.
                </p>
              </motion.div>

              {/* Common Questions */}
              <div>
                <motion.div {...fadeInUp} className="mb-8">
                  <span className="text-brand-gold font-label-lg uppercase tracking-widest">
                    Common Questions
                  </span>
                  <h3 className="font-headline-lg text-2xl md:text-3xl text-brand-charcoal mt-2 leading-tight">
                    IT Consultancy FAQs
                  </h3>
                </motion.div>

                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="bg-white border border-slate-200 rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all"
                    >
                      <h3 className="font-headline-md text-lg md:text-xl text-brand-charcoal mb-3 leading-snug">
                        {faq.q}
                      </h3>
                      <p className="text-on-surface-variant font-body-md leading-relaxed">
                        {faq.a}
                      </p>
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
              Need Strategic IT Guidance?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto font-body-md text-lg leading-relaxed mb-10">
              Talk to our consultants about a tailored IT strategy for your
              organization &mdash; from digital transformation and cloud
              optimization to vendor procurement and risk mitigation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-white font-label-lg px-8 py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              >
                Book a Strategy Session <FaArrowRight />
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

export default Consultancy;
