import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaUsers,
  FaPencilRuler,
  FaMobileAlt,
  FaFlask,
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

const approachCards = [
  {
    icon: FaUsers,
    title: "User Research & Persona Creation",
    description:
      "We dig into real users — their goals, frustrations, and contexts — and translate those insights into clear personas that anchor every design decision.",
    bullets: ["Stakeholder & audience interviews", "Behavioural personas & journey maps", "Evidence over assumption"],
  },
  {
    icon: FaPencilRuler,
    title: "Wireframing & Interactive Prototyping",
    description:
      "From low-fidelity sketches to clickable prototypes, we validate structure and flow before a single pixel is finalised.",
    bullets: ["Low-fi to hi-fi wireframes", "Clickable Figma prototypes", "Validated before visual polish"],
  },
  {
    icon: FaMobileAlt,
    title: "Responsive, Mobile-First Design",
    description:
      "Designed for the smallest screen first, then scaled up — so every interaction feels natural on phones, tablets, and desktops alike.",
    bullets: ["Mobile-first layouts", "Fluid grids & breakpoints", "Touch-friendly interactions"],
  },
  {
    icon: FaFlask,
    title: "A/B Testing & Usability Audits",
    description:
      "We measure what matters — running experiments and audits to refine interfaces until they convert and delight.",
    bullets: ["A/B & multivariate tests", "Heuristic usability reviews", "Data-driven iteration"],
  },
];

const faqs = [
  {
    q: "How do you ensure the design aligns with our brand and user needs?",
    a: "We start by understanding your brand voice, business goals, and user personas. Through collaborative workshops and feedback loops, we align every design element with your vision and user expectations.",
  },
  {
    q: "What's included in your UX/UI design service?",
    a: "We cover the full design lifecycle — user research, wireframing, prototyping, visual design, and usability testing. Our goal is to create intuitive, beautiful interfaces that drive engagement and conversions.",
  },
];

const UxDesign = () => {
  const heroImage = getStockImage("ux");

  return (
    <Layout>
      <Seo
        title="UI/UX Design — Designs That Convert, Experiences That Stick | Lesticom"
        description="Human-centered UI/UX design from Lesticom — research, wireframing, prototyping, and usability testing that turn visitors into loyal users."
        image={heroImage}
      />

      <PageHero
        breadcrumb="UI/UX Design"
        title="Designs That Convert, Experiences That Stick"
        subtitle="We don't just design interfaces — we craft human-centered experiences that drive engagement, usability, and brand loyalty. At Lesticom, UI/UX isn't an afterthought; it's a strategic tool to turn visitors into users and users into fans."
        imageUrl={heroImage}
        imageAlt="Designer crafting a modern user interface experience"
        accent="blue"
      />

      <section className="py-stack-lg bg-brand-cream">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-stack-lg">
            <ServiceSidebar activeSlug="ui-ux-design" />

            <div className="lg:col-span-2 space-y-stack-lg">
              {/* Intro card */}
              <motion.div
                {...fadeInUp}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={heroImage}
                    alt="Human-centered UI/UX design workspace"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-charcoal/70 via-brand-blue/30 to-transparent" />
                  <span className="absolute top-5 left-5 inline-flex items-center gap-2 bg-white/90 text-brand-blue text-xs font-label-lg uppercase tracking-widest px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    Human-Centered · Conversion-Focused
                  </span>
                  <div className="absolute bottom-5 left-5 right-5">
                    <h2 className="font-headline-lg text-2xl md:text-3xl text-white leading-tight">
                      Interfaces built around real humans.
                    </h2>
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-stack-md">
                  <p className="text-slate-700 leading-relaxed text-lg">
                    We don't just design interfaces — we craft human-centered
                    experiences that drive engagement, usability, and brand
                    loyalty. At Lesticom, UI/UX isn't an afterthought; it's a
                    strategic tool to turn visitors into users and users into
                    fans.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Every screen earns its place. Every interaction earns the
                    click. We blend visual aesthetics with user psychology so
                    your product feels as good as it looks — and converts as
                    well as it performs.
                  </p>
                </div>
              </motion.div>

              {/* Our Design Approach */}
              <motion.div {...fadeInUp} className="space-y-stack-md">
                <div>
                  <span className="inline-block text-xs font-label-lg uppercase tracking-widest text-brand-blue bg-primary-container px-3 py-1.5 rounded-full">
                    Our Design Approach
                  </span>
                  <h3 className="mt-3 font-headline-lg text-headline-md md:text-headline-lg text-brand-charcoal">
                    A process tuned for clarity, conversion, and craft.
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  {approachCards.map((card, i) => {
                    const Icon = card.icon;
                    return (
                      <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                        className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-brand-blue/30 transition-all group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary-container text-brand-blue flex items-center justify-center mb-stack-md group-hover:bg-brand-blue group-hover:text-white transition-colors">
                          <Icon className="text-xl" />
                        </div>
                        <h4 className="font-headline-md text-lg text-brand-charcoal mb-2 leading-snug">
                          {card.title}
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed mb-stack-sm">
                          {card.description}
                        </p>
                        <ul className="space-y-1.5 text-sm text-slate-700">
                          {card.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Intuitive layouts paragraph */}
              <motion.div {...fadeInUp} className="flex items-start gap-4">
                <FaCheckCircle className="text-brand-gold text-2xl mt-1 shrink-0" />
                <p className="font-body-md text-slate-700 leading-relaxed text-lg">
                  We create intuitive layouts that guide users naturally and
                  elegantly toward action — whether it's signing up, purchasing,
                  or engaging with content. Our team blends visual aesthetics
                  with user psychology to optimize conversions.
                </p>
              </motion.div>

              {/* Scaling paragraph */}
              <motion.div
                {...fadeInUp}
                className="bg-gradient-to-br from-brand-charcoal to-brand-blue-dark text-white rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z'/%3E%3Cpath d='M30 10L50 30L30 50L10 30Z'/%3E%3Ccircle cx='30' cy='30' r='8'/%3E%3C/g%3E%3C/svg%3E\")",
                  }}
                />
                <div className="relative z-10">
                  <span className="inline-block text-xs font-label-lg uppercase tracking-widest text-brand-gold-light bg-white/10 px-3 py-1.5 rounded-full">
                    Built to Scale
                  </span>
                  <p className="font-body-md text-white/85 leading-relaxed mt-4 text-lg">
                    From startup MVPs to full-scale enterprise systems, we
                    deliver UI/UX that enhances functionality, reflects your
                    brand, and delivers measurable impact — design systems that
                    grow with you, not against you.
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
                    What clients ask before we design.
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
              Ready to Elevate Your Design?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto font-body-md text-lg leading-relaxed mb-10">
              Tell us about your product, your users, and the experience you
              want to create. We'll design interfaces that convert — and
              experiences people remember.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-white font-label-lg px-8 py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              >
                Start Your Design <FaArrowRight />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-label-lg px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
              >
                Explore Other Services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default UxDesign;
