import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBolt,
  FaChartLine,
  FaCode,
  FaTags,
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

const benefits = [
  {
    icon: FaBolt,
    title: "High deliverability & speed",
    description:
      "Reach customers quickly with reliable delivery built for time-sensitive alerts, reminders, and promotions.",
  },
  {
    icon: FaCode,
    title: "API integration",
    description:
      "Connect SMS directly to your apps and workflows with straightforward APIs that fit your existing systems.",
  },
  {
    icon: FaChartLine,
    title: "Campaign tracking & analytics",
    description:
      "See how every campaign performs with delivery metrics that help you refine messaging and improve ROI.",
  },
  {
    icon: FaTags,
    title: "Competitive pricing",
    description:
      "Scale bulk messaging cost-effectively with pricing designed to keep every customer conversation efficient.",
  },
];

const faqs = [
  {
    question: "What kind of businesses benefit from Lesticom's SMS services?",
    answer:
      "Any business that needs direct, real-time communication with customers can benefit—from e-commerce platforms and service providers to healthcare and financial institutions. SMS is ideal for alerts, reminders, OTPs, and marketing.",
  },
  {
    question: "Are your SMS services scalable and secure?",
    answer:
      "Absolutely. We support both transactional and bulk messaging with high deliverability rates. Our platform is secured with encryption and complies with local regulations to protect customer data and privacy.",
  },
];

const SmsServices = () => {
  const smsImage = getStockImage("sms");

  return (
    <Layout>
      <Seo
        title="SMS Services | Lesticom"
        description="Targeted SMS marketing, notifications, bulk messaging, 2-way communication, and OTPs from Lesticom. Reach customers instantly with reliable delivery and ROI-focused tools."
        image={smsImage}
        url="/services/sms"
      />

      <PageHero
        breadcrumb="SMS Services"
        title="Direct. Instant. Effective."
        subtitle="Cut through the noise with targeted SMS marketing and notifications that get seen and acted upon. From bulk messaging to 2-way communication and OTPs, Lesticom's SMS platform delivers reach, reliability, and ROI."
        imageUrl={smsImage}
        imageAlt="Mobile phone displaying business messaging and SMS notifications"
        accent="blue"
      />

      <section className="py-stack-lg bg-brand-cream">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
            <ServiceSidebar activeSlug="sms" />

            <div className="lg:col-span-2 space-y-stack-lg">
              <motion.div
                {...fadeInUp}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={smsImage}
                    alt="Business SMS messaging on a mobile phone"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-charcoal/70 via-brand-blue/30 to-transparent" />
                  <span className="absolute top-5 left-5 inline-flex items-center gap-2 bg-white/90 text-brand-blue text-xs font-label-lg uppercase tracking-widest px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    Bulk · 2-Way · OTP
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-brand-charcoal mb-4">
                    Messages that move business forward.
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    Cut through the noise with targeted SMS marketing and
                    notifications that get seen and acted upon. From bulk
                    messaging to 2-way communication and OTPs, Lesticom&apos;s SMS
                    platform delivers reach, reliability, and ROI.
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeInUp}>
                <div className="mb-8">
                  <span className="inline-block text-xs font-label-lg uppercase tracking-widest text-brand-blue bg-primary-container px-3 py-1.5 rounded-full">
                    Why Lesticom SMS
                  </span>
                  <h3 className="mt-3 font-headline-lg text-headline-md md:text-headline-lg text-brand-charcoal">
                    Direct communication, built for results.
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <motion.div
                        key={benefit.title}
                        {...fadeInUp}
                        transition={{ delay: index * 0.08 }}
                        className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-brand-blue/30 transition-all"
                      >
                        <div className="w-12 h-12 rounded-xl bg-brand-blue/10 group-hover:bg-brand-blue text-brand-blue group-hover:text-white flex items-center justify-center text-xl mb-4 transition-colors">
                          <Icon />
                        </div>
                        <h4 className="font-headline-md text-lg text-brand-charcoal mb-2 leading-snug">
                          {benefit.title}
                        </h4>
                        <p className="text-slate-600 leading-relaxed">
                          {benefit.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                {...fadeInUp}
                className="bg-brand-charcoal text-white rounded-2xl p-6 md:p-8 shadow-sm"
              >
                <span className="text-brand-gold-light font-label-lg uppercase tracking-widest">
                  Built for attention
                </span>
                <p className="font-body-md text-white/85 leading-relaxed mt-3 text-lg">
                  With open rates of over 90%, SMS is still the king of direct
                  communication. Use our platform for promotions, customer
                  engagement, alerts, reminders, and transactional messages.
                </p>
              </motion.div>

              <motion.div
                {...fadeInUp}
                className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary-container text-brand-blue flex items-center justify-center text-xl shrink-0">
                    <FaChartLine />
                  </div>
                  <div>
                    <span className="text-brand-gold font-label-lg uppercase tracking-widest">
                      One clear view
                    </span>
                    <h3 className="font-headline-lg text-xl md:text-2xl text-brand-charcoal mt-2 mb-3">
                      Control every campaign from one dashboard.
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-lg">
                      Our web-based dashboard gives you full control over your
                      messaging campaigns. You can schedule sends, manage
                      contact groups, personalize content, and review delivery
                      metrics—all from one intuitive interface. For developers,
                      our APIs make it easy to embed SMS functionality directly
                      into your apps and workflows.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="space-y-stack-md">
                <div>
                  <span className="inline-block text-xs font-label-lg uppercase tracking-widest text-brand-blue bg-primary-container px-3 py-1.5 rounded-full">
                    Common Questions
                  </span>
                  <h3 className="mt-3 font-headline-lg text-headline-md md:text-headline-lg text-brand-charcoal">
                    Answers before you start sending.
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-stack-md">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={faq.question}
                      {...fadeInUp}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-headline-md text-lg text-brand-charcoal mb-3 flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </span>
                        <span>{faq.question}</span>
                      </h4>
                      <p className="text-slate-700 leading-relaxed pl-11">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-stack-lg bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-charcoal relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop text-center text-white">
          <motion.span
            {...fadeInUp}
            className="inline-block text-xs font-label-lg uppercase tracking-widest text-brand-gold-light bg-white/10 px-3 py-1.5 rounded-full mb-5"
          >
            Get More From Every Message
          </motion.span>
          <motion.h2
            {...fadeInUp}
            className="font-headline-lg text-headline-md md:text-headline-lg mb-4"
          >
            Start Sending Smarter SMS
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="text-white/80 max-w-2xl mx-auto mb-stack-md leading-relaxed"
          >
            Put direct, reliable communication to work for your business with a
            platform designed for reach, speed, and measurable ROI.
          </motion.p>
          <motion.div {...fadeInUp}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-white font-label-lg uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              Talk to Our SMS Team <FaArrowRight className="text-sm" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SmsServices;
