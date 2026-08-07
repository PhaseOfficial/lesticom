import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaBrain,
  FaChalkboardTeacher,
  FaUserTie,
  FaCogs,
  FaShieldAlt,
  FaChartLine,
  FaSearch,
  FaCode,
  FaUsers,
  FaArrowRight,
  FaCheckCircle,
  FaRocket,
  FaRobot,
  FaEye,
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
    icon: FaChalkboardTeacher,
    tag: "Training",
    title: "Beginner to Advanced AI Courses",
    description:
      "Structured learning pathways from foundational AI concepts to advanced deep learning, delivered online and in-person to suit your schedule.",
  },
  {
    icon: FaUserTie,
    tag: "Workforce",
    title: "Corporate & Government AI Upskilling",
    description:
      "Customized reskilling programs for teams and public institutions, embedding AI capabilities into everyday operations and decision-making.",
  },
  {
    icon: FaCogs,
    tag: "Development",
    title: "Custom AI Model Development",
    description:
      "Bespoke model engineering across natural language processing, computer vision, and predictive analytics — built for your data, your domain.",
  },
  {
    icon: FaShieldAlt,
    tag: "Framework",
    title: "Afrocentric AI Solutions & Ethical Frameworks",
    description:
      "Culturally aware AI systems built with transparent ethical frameworks tailored for African contexts, languages, and communities.",
  },
];

const useCases = [
  { icon: FaSearch, label: "Fraud Detection" },
  { icon: FaUsers, label: "Customer Service Automation" },
  { icon: FaChartLine, label: "Predictive Analytics" },
  { icon: FaBrain, label: "Intelligent Document Processing" },
];

const tools = ["Python", "TensorFlow", "PyTorch", "Cloud AI Platforms"];

const implementationSteps = [
  "Problem Scoping",
  "Data Preparation",
  "Model Deployment",
  "Scaling",
];

const capabilities = [
  { icon: FaRobot, label: "NLP" },
  { icon: FaEye, label: "Computer Vision" },
  { icon: FaChartLine, label: "Predictive Analytics" },
];

const faqs = [
  {
    question:
      "How can Lesticom's AI solutions benefit my business?",
    answer:
      "Our AI solutions are designed to enhance operational efficiency, automate processes, and provide valuable insights through data analysis. By integrating AI into your business operations, you can improve decision-making, personalize customer experiences, and gain a competitive edge in your industry.",
  },
  {
    question:
      "What industries does Lesticom cater to with its AI solutions?",
    answer:
      "Lesticom's AI solutions are versatile and can be tailored to various industries, including finance, healthcare, retail, and manufacturing. We work closely with clients to understand their specific needs and develop AI strategies that deliver measurable results.",
  },
];

const Intelligence = () => {
  const heroImage = getStockImage("ai");

  return (
    <Layout>
      <Seo
        title="AI Training & Implementation | Lesticom — Empowering Africa Through AI"
        description="Lesticom is leading the AI revolution in Southern Africa. We offer practical AI training programs and tailored implementations to help you harness intelligent automation and data-driven decision-making."
        image={heroImage}
        url="/services/ai-training"
      />

      {/* HERO */}
      <PageHero
        breadcrumb="AI Services"
        title="Empowering Africa Through AI"
        subtitle="Lesticom is leading the AI revolution in Southern Africa. Whether you're an individual, institution, or enterprise, we offer practical AI training programs and tailored implementations to help you harness the power of intelligent automation and data-driven decision-making."
        imageUrl={heroImage}
        imageAlt="Artificial intelligence and neural network visualization"
        accent="blue"
      />

      {/* MAIN CONTENT */}
      <section className="py-stack-lg bg-brand-cream">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-stack-lg">
            {/* SIDEBAR */}
            <div className="lg:col-span-1">
              <ServiceSidebar activeSlug="ai-training" />
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
                    alt="AI technology and neural networks"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/85 via-brand-charcoal/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-gold-light bg-brand-charcoal/60 backdrop-blur-sm px-3 py-1 rounded-full">
                      <FaBrain /> Intelligence
                    </span>
                    <h2 className="mt-3 font-headline-lg text-2xl md:text-3xl text-white leading-tight">
                      The AI Revolution, African-led
                    </h2>
                  </div>
                  {/* Capability badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {capabilities.map((cap) => {
                      const Icon = cap.icon;
                      return (
                        <span
                          key={cap.label}
                          className="inline-flex items-center gap-2 text-xs font-semibold bg-white/15 backdrop-blur-md text-white px-3 py-1.5 rounded-full border border-white/20"
                        >
                          <Icon className="text-brand-gold-light" />
                          {cap.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="font-body-md text-on-surface-variant leading-relaxed text-lg">
                    Lesticom is leading the AI revolution in Southern Africa.
                    Whether you're an individual, institution, or enterprise,
                    we offer practical AI training programs and tailored
                    implementations to help you harness the power of
                    intelligent automation and data-driven decision-making.
                  </p>
                </div>
              </motion.div>

              {/* Our Offerings */}
              <div>
                <motion.div {...fadeInUp} className="mb-8">
                  <span className="text-brand-gold font-label-lg uppercase tracking-widest">
                    Our Offerings
                  </span>
                  <h3 className="font-headline-lg text-2xl md:text-3xl text-brand-charcoal mt-2 leading-tight">
                    From Classrooms to Production AI
                  </h3>
                  <p className="text-on-surface-variant mt-3 max-w-2xl font-body-md leading-relaxed">
                    Comprehensive AI programs tailored for African impact —
                    learning pathways, workforce upskilling, custom model
                    engineering, and ethically grounded frameworks.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                  {offerings.map((offering, i) => {
                    const Icon = offering.icon;
                    return (
                      <motion.div
                        key={offering.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: i * 0.08,
                          ease: "easeOut",
                        }}
                        className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-blue/30 transition-all"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 rounded-xl bg-brand-blue/10 group-hover:bg-brand-blue text-brand-blue group-hover:text-white flex items-center justify-center text-xl transition-colors">
                            <Icon />
                          </div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                            {offering.tag}
                          </span>
                        </div>
                        <h4 className="font-headline-md text-lg text-brand-charcoal mb-2 leading-snug">
                          {offering.title}
                        </h4>
                        <p className="text-on-surface-variant font-body-md leading-relaxed text-sm">
                          {offering.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Real-world use cases */}
              <motion.div
                {...fadeInUp}
                className="bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-charcoal text-white rounded-2xl p-6 md:p-10 shadow-lg relative overflow-hidden"
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
                    Real-World Use Cases
                  </span>
                  <h3 className="font-headline-lg text-2xl md:text-3xl mt-2 mb-6 leading-tight">
                    From Fraud Detection to Intelligent Automation
                  </h3>
                  <p className="font-body-md text-white/85 leading-relaxed text-lg mb-8">
                    We cover real-world use cases such as fraud detection,
                    customer service automation, predictive analytics, and
                    intelligent document processing. Our hands-on courses equip
                    learners with tools like Python, TensorFlow, PyTorch, and
                    cloud-based AI platforms.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                    {useCases.map((use) => {
                      const Icon = use.icon;
                      return (
                        <div
                          key={use.label}
                          className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-4 flex flex-col items-center text-center hover:bg-white/20 transition-colors"
                        >
                          <Icon className="text-2xl text-brand-gold-light mb-2" />
                          <span className="text-sm font-medium leading-tight">
                            {use.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <FaCode className="text-brand-gold-light" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold-light">
                      Hands-on Tools
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-medium hover:bg-white/15 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* End-to-end implementation */}
              <motion.div
                {...fadeInUp}
                className="bg-white rounded-2xl p-6 md:p-10 border border-slate-200 shadow-sm"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center flex-shrink-0">
                    <FaRocket className="text-xl" />
                  </div>
                  <div>
                    <span className="text-brand-gold font-label-lg uppercase tracking-widest">
                      End-to-End Implementation
                    </span>
                    <h3 className="font-headline-lg text-2xl md:text-3xl text-brand-charcoal mt-1 leading-tight">
                      From Problem to Production
                    </h3>
                  </div>
                </div>
                <p className="font-body-md text-on-surface-variant leading-relaxed text-lg">
                  For businesses, we offer end-to-end implementation — from
                  problem scoping and data preparation to model deployment and
                  scaling. We focus on high-impact solutions tailored to your
                  industry.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
                  {implementationSteps.map((step, i) => (
                    <div
                      key={step}
                      className="relative bg-brand-cream rounded-xl p-4 border border-slate-200 hover:border-brand-blue/30 transition-colors"
                    >
                      <span className="absolute top-2 right-3 text-3xl font-bold text-brand-blue/20 leading-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex items-center gap-2 mt-6">
                        <FaCheckCircle className="text-brand-gold text-sm" />
                        <span className="text-sm font-semibold text-brand-charcoal">
                          {step}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Common Questions */}
              <div>
                <motion.div {...fadeInUp} className="mb-8">
                  <span className="text-brand-gold font-label-lg uppercase tracking-widest">
                    Common Questions
                  </span>
                  <h3 className="font-headline-lg text-2xl md:text-3xl text-brand-charcoal mt-2 leading-tight">
                    AI FAQs
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
                      className="bg-white rounded-2xl p-6 md:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-full bg-brand-blue text-white flex items-center justify-center flex-shrink-0">
                          <FaQuestionCircle className="text-lg" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-headline-md text-lg text-brand-charcoal mb-3 leading-snug">
                            {faq.question}
                          </h4>
                          <div className="h-px bg-gradient-to-r from-brand-gold/40 via-brand-gold/20 to-transparent mb-3" />
                          <p className="text-on-surface-variant font-body-md leading-relaxed">
                            {faq.answer}
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
            <span className="text-brand-gold-light font-label-lg uppercase tracking-widest inline-flex items-center gap-2">
              <FaBrain /> Take The Next Step
            </span>
            <h2 className="font-display-lg text-3xl md:text-5xl text-white mt-3 mb-6 leading-tight">
              Ready to Harness AI?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto font-body-md text-lg leading-relaxed mb-10">
              Partner with Lesticom to bring practical AI training and
              production-grade AI implementations to your team or business.
              Let's build Africa's intelligent future, together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-white font-label-lg px-8 py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              >
                Start the Conversation <FaArrowRight />
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

export default Intelligence;
