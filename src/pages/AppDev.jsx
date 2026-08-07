import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaSearch, FaRocket, FaProjectDiagram, FaShieldAlt, FaBolt, FaExpandArrowsAlt } from "react-icons/fa";
import Layout from "../components/common/Layout";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import ServiceSidebar from "../components/common/ServiceSidebar";
import { getStockImage } from "../components/common/stockImages";

const AppDev = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  const processSteps = [
    {
      icon: FaSearch,
      title: "User Research & Wireframing",
      description:
        "We dig into your audience, map user journeys, and translate goals into clear wireframes — so every screen earns its place.",
      bullets: ["Audience & competitor research", "User flows & wireframes", "Validated scope before code"],
    },
    {
      icon: FaRocket,
      title: "Rapid Prototyping & Testing",
      description:
        "From clickable prototypes to release-ready builds, we ship fast, test often, and refine based on real user feedback.",
      bullets: ["Interactive prototypes", "Continuous QA cycles", "Performance & usability testing"],
    },
    {
      icon: FaProjectDiagram,
      title: "Agile Workflows",
      description:
        "Iterative sprints keep your project adaptable. Priorities evolve with the market — your app evolves with them.",
      bullets: ["Sprint-based delivery", "Transparent backlogs", "Built to pivot, not break"],
    },
  ];

  const pillars = [
    {
      icon: FaShieldAlt,
      title: "Security",
      description:
        "Hardened architecture, secure coding practices, and proactive threat modelling baked in from day one.",
    },
    {
      icon: FaBolt,
      title: "Speed",
      description:
        "Optimised code paths, lean payloads, and CDN-ready assets so your app feels instant on any device.",
    },
    {
      icon: FaExpandArrowsAlt,
      title: "Scale",
      description:
        "Cloud-native foundations that grow from your first thousand users to your first million — without rewrites.",
    },
  ];

  const faqs = [
    {
      q: "What should customers know about Lesticom's app development process?",
      a: "At Lesticom, our app development process is comprehensive and client-centric. We begin with a thorough analysis of your business objectives and target audience to ensure the app aligns with your goals. Our process includes strategic planning, user-centric design, agile development, rigorous testing, and deployment. We prioritize clear communication and collaboration throughout to deliver a product that meets your expectations and provides an exceptional user experience.",
    },
    {
      q: "How does Lesticom ensure the quality and reliability of the apps developed?",
      a: "Quality and reliability are paramount in our development process. We employ agile methodologies, allowing for iterative development and continuous feedback. Our team conducts extensive testing, including functionality, performance, security, and compatibility assessments, to identify and address any issues promptly. Post-launch, we offer ongoing support and maintenance to keep your app updated and functioning optimally.",
    },
  ];

  return (
    <Layout>
      <Seo
        title="App Development | Lesticom"
        description="Lesticom builds sleek, scalable, secure mobile, web, and cross-platform apps. From idea to impact — agile workflows, rigorous testing, and architecture built to scale."
        image={getStockImage("appDev")}
        url="/services/app-development"
      />

      <PageHero
        breadcrumb="App Development"
        title="From Idea to Impact"
        subtitle="Build sleek, scalable, and secure applications with Lesticom. Whether it's mobile, web, or cross-platform, we transform your ideas into engaging digital experiences built for performance."
        imageUrl={getStockImage("appDev")}
        imageAlt="Developer building a modern mobile application interface"
        accent="blue"
      />

      <section className="py-stack-lg bg-brand-cream">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
            <ServiceSidebar activeSlug="app-development" />

            <div className="lg:col-span-2 space-y-stack-lg">
              {/* Intro card */}
              <motion.div
                {...fadeInUp}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={getStockImage("appDev")}
                    alt="Modern mobile and web app development"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-charcoal/60 via-brand-blue/30 to-transparent" />
                  <span className="absolute top-5 left-5 inline-flex items-center gap-2 bg-white/90 text-brand-blue text-xs font-label-lg uppercase tracking-widest px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    Mobile · Web · Cross-Platform
                  </span>
                </div>
                <div className="p-6 md:p-8 space-y-stack-md">
                  <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-brand-charcoal">
                    Apps that don't just function — they wow.
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    Build sleek, scalable, and secure applications with Lesticom.
                    Whether it's mobile, web, or cross-platform, our app development
                    service transforms your ideas into engaging digital experiences
                    built for performance.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Our process is iterative and client-centered. We begin with user
                    research and wireframing, then move into rapid prototyping and
                    testing. By adopting agile workflows, we ensure your app adapts
                    to changing market needs and user expectations.
                  </p>
                </div>
              </motion.div>

              {/* Process section */}
              <motion.div {...fadeInUp} className="space-y-stack-md">
                <div>
                  <span className="inline-block text-xs font-label-lg uppercase tracking-widest text-brand-blue bg-primary-container px-3 py-1.5 rounded-full">
                    Our Process
                  </span>
                  <h3 className="mt-3 font-headline-lg text-headline-md md:text-headline-lg text-brand-charcoal">
                    Iterative by design. Built around you.
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                  {processSteps.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={step.title}
                        {...fadeInUp}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary-container text-brand-blue flex items-center justify-center mb-stack-md group-hover:bg-brand-blue group-hover:text-white transition-colors">
                          <Icon className="text-xl" />
                        </div>
                        <h4 className="font-headline-md text-lg text-brand-charcoal mb-2">
                          {step.title}
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed mb-stack-sm">
                          {step.description}
                        </p>
                        <ul className="space-y-1.5 text-sm text-slate-700">
                          {step.bullets.map((b) => (
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

              {/* Security / Speed / Scale */}
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
                    Non-Negotiables
                  </span>
                  <h3 className="mt-3 font-headline-lg text-headline-md md:text-headline-lg mb-3">
                    Security, speed, and scalability.
                  </h3>
                  <p className="text-white/80 max-w-2xl leading-relaxed mb-stack-md">
                    Whether you're launching a startup MVP, an enterprise-grade
                    solution, or a consumer-facing tool, we ensure your application
                    is built on robust architecture and optimized for performance.
                    Your app should do more than just function — it should{" "}
                    <span className="text-brand-gold-light font-semibold">wow</span>.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
                    {pillars.map((pillar) => {
                      const Icon = pillar.icon;
                      return (
                        <div
                          key={pillar.title}
                          className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/10 transition-colors"
                        >
                          <Icon className="text-brand-gold-light text-2xl mb-3" />
                          <h4 className="font-headline-md text-lg mb-1.5">
                            {pillar.title}
                          </h4>
                          <p className="text-white/70 text-sm leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <ul className="mt-stack-md grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-white/85">
                    {[
                      "Startup MVPs to enterprise-grade platforms",
                      "Consumer-facing tools engineered for scale",
                      "Robust architecture, optimised performance",
                      "Built to function beautifully — and wow users",
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1 w-5 h-5 rounded-full bg-brand-gold text-brand-charcoal flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-3 h-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42L8.5 12.08l6.79-6.79a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Common Questions */}
              <motion.div {...fadeInUp} className="space-y-stack-md">
                <div>
                  <span className="inline-block text-xs font-label-lg uppercase tracking-widest text-brand-blue bg-primary-container px-3 py-1.5 rounded-full">
                    Common Questions
                  </span>
                  <h3 className="mt-3 font-headline-lg text-headline-md md:text-headline-lg text-brand-charcoal">
                    What clients ask before we build.
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
            Let's Build
          </motion.span>
          <motion.h2
            {...fadeInUp}
            className="font-headline-lg text-headline-md md:text-headline-lg mb-4"
          >
            Ready to Build Your App?
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="text-white/80 max-w-2xl mx-auto mb-stack-md leading-relaxed"
          >
            Tell us where you are and where you want to go. We'll architect,
            design, and ship the app that gets you there — fast, secure, and
            built to scale.
          </motion.p>
          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-white font-label-lg uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              Start Your Project <FaArrowRight className="text-sm" />
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

export default AppDev;