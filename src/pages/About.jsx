import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaBullseye,
  FaEye,
  FaArrowRight,
  FaGlobeAfrica,
  FaMobileAlt,
  FaApple,
  FaClock,
  FaTv,
  FaWifi,
  FaQuoteLeft,
  FaShieldAlt,
} from "react-icons/fa";
import Layout from "../components/common/Layout";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import { getStockImage } from "../components/common/stockImages";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: { staggerChildren: 0.1 },
    },
    viewport: { once: true },
  };

  const staggerItem = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const missionVision = [
    {
      icon: FaBullseye,
      label: "Our Mission",
      title: "Designing solutions that evolve with you.",
      body: "We strive to design and deliver tech solutions that are always improving, reliable and adaptable to meet the needs and expectations of our customers.",
    },
    {
      icon: FaEye,
      label: "Our Vision",
      title: "Transforming Africa through technology.",
      body: "Our vision is to leverage our unparalleled expertise in challenging and diverse settings to deliver innovative and comprehensive technology solutions and services that empower and transform Africa and the world.",
    },
  ];

  const skills = [
    {
      icon: FaGlobeAfrica,
      title: "WebTech",
      desc: "Modern web platforms, portals, and progressive apps engineered for scale.",
    },
    {
      icon: FaMobileAlt,
      title: "Android",
      desc: "Native and cross-platform Android apps with delightful user experiences.",
    },
    {
      icon: FaApple,
      title: "iOS",
      desc: "Premium iOS applications crafted for the Apple ecosystem.",
    },
    {
      icon: FaClock,
      title: "Watch",
      desc: "Wearable experiences — apps that travel with your customers.",
    },
    {
      icon: FaTv,
      title: "TV",
      desc: "Connected TV and streaming interfaces for the modern living room.",
    },
    {
      icon: FaWifi,
      title: "IoT",
      desc: "Smart devices, telemetry, and connected systems that talk to each other.",
    },
  ];

  const projects = [
    {
      title: "KayaIQ",
      tag: "Smart Home System",
      desc: "An intelligent home automation platform bringing comfort, security, and efficiency together.",
      image: getStockImage("heroAfricanTech"),
    },
    {
      title: "Funda",
      tag: "A.I. Driven Education App",
      desc: "Personalised learning journeys powered by adaptive AI for learners across the continent.",
      image: getStockImage("appDev"),
    },
    {
      title: "Taska",
      tag: "Job Aider Tool",
      desc: "A smart job-matching companion that connects talent with opportunity in real time.",
      image: getStockImage("workspace"),
    },
  ];

  const tags = ["Cyber Security", "IT Solution", "Technology", "Data Security"];

  return (
    <Layout>
      <Seo
        title="About Lesticom — Pioneering IT Solutions in Africa"
        description="At Lesticom, we fuse innovation with reliability to deliver powerful digital solutions that drive business success. From cutting-edge web and app development to secure hosting, A.I, bulk SMS, and modern connectivity, we're dedicated to helping African entrepreneurs and enterprises thrive in an increasingly connected world."
        image={getStockImage("teamAfrica")}
        url="/about"
      />

      <PageHero
        breadcrumb="About Us"
        title="Driving Africa's Digital Future"
        subtitle="7 Years of experience pioneering IT solutions, AI and cybersecurity across the continent."
        imageUrl={getStockImage("teamAfrica")}
        imageAlt="Lesticom team across Africa collaborating on technology"
        accent="blue"
      />

      {/* Mission / Vision */}
      <section className="py-stack-lg bg-brand-cream">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <motion.div
            {...fadeInUp}
            className="text-center max-w-3xl mx-auto mb-stack-md"
          >
            <span className="inline-flex items-center gap-2 text-xs font-label-lg uppercase tracking-widest text-brand-blue bg-primary-container px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              Who We Are
            </span>
            <h2 className="mt-4 font-headline-lg text-headline-md md:text-headline-lg text-brand-charcoal leading-tight">
              7 Years of experience powering Africa's boldest ideas.
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              From a small team in Harare to a trusted partner for entrepreneurs
              and enterprises across the continent — Lesticom exists to make
              world-class technology accessible, reliable, and built for Africa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {missionVision.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  {...fadeInUp}
                  transition={{ delay: i * 0.1, duration: 0.7, ease: "easeOut" }}
                  className="group relative bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="absolute top-6 right-6 text-brand-blue/10 group-hover:text-brand-gold/20 transition-colors">
                    <FaQuoteLeft className="text-3xl" />
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white flex items-center justify-center text-2xl transition-colors mb-stack-md">
                    <Icon />
                  </div>
                  <span className="text-xs font-label-lg uppercase tracking-widest text-brand-gold">
                    {item.label}
                  </span>
                  <h3 className="mt-2 font-headline-lg text-2xl md:text-3xl text-brand-charcoal leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-slate-700 leading-relaxed">
                    {item.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Empowering Digital Growth */}
      <section className="relative py-stack-lg overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={getStockImage("africaMap")}
            alt="Map of Africa representing continental digital growth"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal/90 via-brand-blue-dark/85 to-brand-charcoal/95" />
        </div>
        <div
          className="absolute inset-0 opacity-10 pointer-events-none z-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z'/%3E%3Cpath d='M30 10L50 30L30 50L10 30Z'/%3E%3Ccircle cx='30' cy='30' r='8'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative z-10 max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <motion.div {...fadeInUp} className="lg:col-span-7 text-white">
              <span className="inline-flex items-center gap-2 text-xs font-label-lg uppercase tracking-widest text-brand-gold-light bg-white/10 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-light" />
                Empowering Digital Growth
              </span>
              <h2 className="mt-4 font-headline-lg text-headline-md md:text-headline-lg leading-tight">
                Empowering Digital Growth Across Africa.
              </h2>
              <p className="mt-5 text-white/85 leading-relaxed text-lg">
                At Lesticom, we fuse innovation with reliability to deliver
                powerful digital solutions that drive business success. From
                cutting-edge web and app development to secure hosting, A.I,
                bulk SMS, and modern connectivity, we're dedicated to helping
                African entrepreneurs and enterprises thrive in an increasingly
                connected world.
              </p>

              <div className="mt-stack-md grid grid-cols-2 sm:grid-cols-4 gap-stack-md">
                {[
                  { num: "7+", label: "Years" },
                  { num: "50+", label: "Projects" },
                  { num: "12+", label: "Countries" },
                  { num: "24/7", label: "Support" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm"
                  >
                    <div className="font-display-lg text-3xl text-brand-gold-light">
                      {stat.num}
                    </div>
                    <div className="text-xs uppercase tracking-widest text-white/70 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={getStockImage("workspace")}
                  alt="Lesticom team at work"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-brand-charcoal/80 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-gold text-brand-charcoal flex items-center justify-center">
                      <FaShieldAlt />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        Trusted IT Partner
                      </div>
                      <div className="text-xs text-white/70">
                        ISO-aligned practices · Secure by design
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills & Services */}
      <section className="py-stack-lg bg-brand-cream">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <motion.div
            {...fadeInUp}
            className="text-center max-w-3xl mx-auto mb-stack-md"
          >
            <span className="inline-flex items-center gap-2 text-xs font-label-lg uppercase tracking-widest text-brand-blue bg-primary-container px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              Our Skills & Services
            </span>
            <h2 className="mt-4 font-headline-lg text-headline-md md:text-headline-lg text-brand-charcoal leading-tight">
              We are proficient across every screen — and beyond.
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              From the web to the wrist, from the living room to the factory
              floor — Lesticom engineers solutions across the full spectrum of
              modern connected devices.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter"
          >
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  variants={staggerItem}
                  className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand-blue/30 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white flex items-center justify-center text-2xl transition-colors mb-stack-md">
                    <Icon />
                  </div>
                  <h3 className="font-headline-lg text-xl text-brand-charcoal mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {skill.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-stack-lg bg-white">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <motion.div
            {...fadeInUp}
            className="text-center max-w-3xl mx-auto mb-stack-md"
          >
            <span className="inline-flex items-center gap-2 text-xs font-label-lg uppercase tracking-widest text-brand-blue bg-primary-container px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              Featured Projects
            </span>
            <h2 className="mt-4 font-headline-lg text-headline-md md:text-headline-lg text-brand-charcoal leading-tight">
              Some incredible projects we have done.
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              A glimpse at the solutions we've built for clients across Africa —
              from smart homes to AI-driven education and job-matching tools.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-gutter"
          >
            {projects.map((project) => (
              <motion.article
                key={project.title}
                variants={staggerItem}
                className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent" />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-2 bg-white/95 text-brand-blue text-[11px] font-label-lg uppercase tracking-widest px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    {project.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-headline-lg text-2xl text-brand-charcoal group-hover:text-brand-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-brand-blue text-sm font-label-lg uppercase tracking-widest group-hover:gap-3 transition-all">
                    <span>View case study</span>
                    <FaArrowRight className="text-xs" />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="mt-stack-md flex flex-wrap justify-center gap-2"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center text-xs font-label-lg uppercase tracking-widest text-brand-charcoal bg-brand-cream border border-slate-200 px-4 py-2 rounded-full"
              >
                {tag}
              </span>
            ))}
          </motion.div>
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
            className="inline-flex items-center gap-2 text-xs font-label-lg uppercase tracking-widest text-brand-gold-light bg-white/10 px-3 py-1.5 rounded-full mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-light" />
            Let's Build Together
          </motion.span>
          <motion.h2
            {...fadeInUp}
            className="font-headline-lg text-headline-md md:text-headline-lg mb-4 leading-tight"
          >
            Let's Build Something Together.
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="text-white/80 max-w-2xl mx-auto mb-stack-md leading-relaxed"
          >
            Have a vision for the next big thing in your industry? Lesticom is
            ready to design, build, and ship it with you — from idea to launch
            and beyond.
          </motion.p>
          <motion.div
            {...fadeInUp}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-white font-label-lg uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              Get in Touch <FaArrowRight className="text-sm" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-label-lg uppercase tracking-wider px-8 py-4 rounded-xl transition-all"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
