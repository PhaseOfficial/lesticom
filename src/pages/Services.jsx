import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaLightbulb,
  FaServer,
  FaCode,
  FaPalette,
  FaLaptop,
  FaCommentDots,
  FaBrain,
  FaArrowRight,
  FaCheckCircle,
  FaPaperPlane,
} from "react-icons/fa";

import Layout from "../components/common/Layout";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import { getStockImage, stockImages } from "../components/common/stockImages";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const services = [
  {
    title: "Cyber Security",
    slug: "cyber-security",
    icon: FaShieldAlt,
    imageKey: "cyber",
    description:
      "Military-grade cybersecurity solutions tailored to protect your data, infrastructure, and reputation — from penetration testing to continuous threat monitoring and endpoint protection.",
  },
  {
    title: "IT Consultancy",
    slug: "it-consultancy",
    icon: FaLightbulb,
    imageKey: "consultancy",
    description:
      "Strategic tech, tactical growth. We align your IT with your business objectives to maximize ROI and eliminate inefficiencies — for startups and enterprises alike.",
  },
  {
    title: "Secure Hosting",
    slug: "secure-hosting",
    icon: FaServer,
    imageKey: "hosting",
    description:
      "Ultra-secure, high-availability hosting tailored for businesses that take uptime and data protection seriously. Servers optimized for speed, resilience, and peace of mind.",
  },
  {
    title: "App Development",
    slug: "app-development",
    icon: FaCode,
    imageKey: "appDev",
    description:
      "From idea to impact. We build sleek, scalable, and secure mobile, web, and cross-platform applications that transform your ideas into engaging digital experiences.",
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    icon: FaPalette,
    imageKey: "ux",
    description:
      "Designs that convert, experiences that stick. We craft human-centered interfaces that drive engagement, usability, and brand loyalty — turning visitors into fans.",
  },
  {
    title: "IT Hardware Supply",
    slug: "hardware",
    icon: FaLaptop,
    imageKey: "hardware",
    description:
      "Tech that works as hard as you do. From laptops and desktops to networking gear and printers, we supply reliable business-grade hardware with post-sales support.",
  },
  {
    title: "SMS Services",
    slug: "sms",
    icon: FaCommentDots,
    imageKey: "sms",
    description:
      "Direct, instant, effective. Cut through the noise with targeted SMS marketing and notifications — bulk messaging, 2-way communication, and OTPs across African networks.",
  },
  {
    title: "Artificial Intelligence",
    slug: "ai-training",
    icon: FaBrain,
    imageKey: "ai",
    description:
      "Empowering Africa through AI. Practical AI training programs and tailored implementations that help you harness intelligent automation and data-driven decision-making.",
  },
];

const faqs = [
  {
    q: "What services does Lesticom provide and who are they for?",
    a: "Lesticom offers end-to-end digital solutions including Bulk SMS, domain registration & hosting, website and application development, graphic design, and Wi-Fi modem sales. Whether you're a startup, SME, corporate, or public institution, our services are designed to boost your visibility, streamline communication, and support business growth.",
  },
  {
    q: "How reliable is Lesticom's Bulk SMS platform for business communication?",
    a: "Our bulk SMS system is robust, fast, and scalable, ensuring real-time delivery across all major networks in Africa. With analytics, API integration, and sender ID options, it's a trusted tool for marketing, alerts, and customer engagement — guaranteed uptime and data security included.",
  },
  {
    q: "What makes Lesticom different from other web and app development providers?",
    a: "We don't just build websites and apps — we create business-ready solutions. Lesticom prioritizes custom development, local market relevance, and SEO optimization, plus we provide post-launch support. You get a partner, not just a service provider.",
  },
];

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;
  const bgImage = stockImages[service.imageKey] || getStockImage("heroAfricanTech");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: "easeOut" }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:border-brand-blue/60 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
    >
      {/* Image background */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={bgImage}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-charcoal/70 via-brand-blue/30 to-transparent" />
        <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur-sm text-brand-blue flex items-center justify-center text-xl shadow-md">
          <Icon />
        </div>
      </div>

      <div className="p-6 space-y-3">
        <h3 className="font-headline-md text-xl text-brand-charcoal leading-snug">
          {service.title}
        </h3>
        <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
          {service.description}
        </p>
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-brand-blue font-label-lg uppercase tracking-widest text-xs pt-1 group-hover:text-brand-blue-dark transition-colors"
        >
          Read More <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Brand-blue accent border on hover */}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-brand-blue scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
    </motion.div>
  );
};

const Services = () => {
  const heroImage = getStockImage("heroAfricanCity");
  const heroImageAlt = getStockImage("heroAfricanTech") ? "African city technology" : "African tech solutions";

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <Layout>
      <Seo
        title="Our Services — Lesticom"
        description="Bulk SMS, IT consultancy, AI, cyber security, UX/UI design, hardware sales, software & more from Lesticom."
        image={heroImage}
        url="/services"
      />

      {/* HERO */}
      <PageHero
        breadcrumb="Services"
        title="We Provide the Best Quality"
        subtitle="End-to-end digital solutions for African businesses — from AI to hardware."
        imageUrl={heroImage}
        imageAlt={heroImageAlt}
        accent="blue"
      />

      {/* SERVICES GRID */}
      <section className="py-stack-lg bg-brand-cream">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block text-xs font-label-lg uppercase tracking-widest text-brand-blue bg-primary-container px-3 py-1.5 rounded-full">
              What We Offer
            </span>
            <h2 className="mt-3 font-headline-lg text-headline-md md:text-headline-lg text-brand-charcoal">
              Solutions Built for African Business
            </h2>
            <p className="mt-3 text-on-surface-variant max-w-2xl mx-auto font-body-md leading-relaxed">
              Eight core services covering every layer of your digital stack —
              from infrastructure to intelligence, design to delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-stack-md">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-stack-lg bg-white">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="inline-block text-xs font-label-lg uppercase tracking-widest text-brand-blue bg-primary-container px-3 py-1.5 rounded-full">
              FAQs
            </span>
            <h2 className="mt-3 font-headline-lg text-headline-md md:text-headline-lg text-brand-charcoal">
              What to Know About Our Services
            </h2>
            <p className="mt-3 text-on-surface-variant max-w-2xl mx-auto font-body-md leading-relaxed">
              Quick answers to the most common questions we hear from clients
              across Southern Africa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-brand-cream border border-slate-200 rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-md hover:border-brand-blue/40 transition-all"
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-blue text-white flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  <h3 className="font-headline-md text-lg text-brand-charcoal leading-snug">
                    {faq.q}
                  </h3>
                </div>
                <p className="text-on-surface-variant font-body-md leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TALK TO US — CONTACT FORM */}
      <section className="py-stack-lg bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-charcoal text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z'/%3E%3Cpath d='M30 10L50 30L30 50L10 30Z'/%3E%3Ccircle cx='30' cy='30' r='8'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative z-10 max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
            <motion.div {...fadeInUp}>
              <span className="inline-block text-xs font-label-lg uppercase tracking-widest text-brand-gold-light bg-white/10 px-3 py-1.5 rounded-full">
                How May We Help You
              </span>
              <h2 className="mt-4 font-headline-lg text-headline-md md:text-headline-lg leading-tight">
                Talk to Us
              </h2>
              <p className="mt-4 text-white/80 font-body-md leading-relaxed max-w-lg">
                Have a project in mind or a question about our services? Drop us
                a message and our team will get back to you within 24 hours.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-white/85">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-brand-gold-light mt-1 shrink-0" />
                  <span>Trusted across Zimbabwe, Zambia, Malawi &amp; Mozambique</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-brand-gold-light mt-1 shrink-0" />
                  <span>Tailored solutions for startups, SMEs &amp; enterprises</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-brand-gold-light mt-1 shrink-0" />
                  <span>Local expertise with international standards</span>
                </li>
              </ul>
            </motion.div>

            <motion.form
              {...fadeInUp}
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-label-lg uppercase tracking-widest text-white/70 mb-2"
                >
                  Your Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-gold-light focus:bg-white/10 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-label-lg uppercase tracking-widest text-white/70 mb-2"
                >
                  Your Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-gold-light focus:bg-white/10 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-label-lg uppercase tracking-widest text-white/70 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or question..."
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 resize-none focus:outline-none focus:border-brand-gold-light focus:bg-white/10 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white font-label-lg uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Send Message <FaPaperPlane className="text-sm" />
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* SUCCESS TOAST */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 bg-brand-charcoal text-white px-5 py-4 rounded-xl shadow-2xl border border-brand-gold/40 flex items-center gap-3 max-w-sm"
          >
            <FaCheckCircle className="text-brand-gold-light text-xl shrink-0" />
            <div>
              <p className="font-label-lg uppercase tracking-widest text-xs text-brand-gold-light">
                Message Sent
              </p>
              <p className="font-body-md text-sm text-white/85">
                Thanks — we'll be in touch within 24 hours.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Services;
