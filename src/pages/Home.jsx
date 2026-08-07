import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaLightbulb,
  FaCode,
  FaServer,
  FaCheckCircle,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaRocket,
  FaBrain,
  FaMicrochip,
  FaSms,
  FaQuoteLeft,
  FaCogs,
  FaUserTie,
  FaBriefcase,
} from "react-icons/fa";
import Layout from "../components/common/Layout";
import Seo from "../components/common/Seo";
import { getStockImage, stockImages } from "../components/common/stockImages";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const SectionHeading = ({ eyebrow, title, subtitle, light = false }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    className="text-center max-w-3xl mx-auto mb-stack-lg"
  >
    {eyebrow && (
      <p
        className={`font-label-lg text-label-lg uppercase tracking-widest mb-3 ${
          light ? "text-brand-gold" : "text-brand-gold"
        }`}
      >
        {eyebrow}
      </p>
    )}
    <h2
      className={`font-display-lg text-headline-md md:text-headline-lg mb-3 ${
        light ? "text-white" : "text-brand-charcoal"
      }`}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        className={`font-body-md text-body-md ${
          light ? "text-white/80" : "text-brand-charcoal/70"
        }`}
      >
        {subtitle}
      </p>
    )}
  </motion.div>
);

const Hero = () => (
  <section className="relative h-screen min-h-[640px] flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        className="w-full h-full object-cover scale-105"
        src={getStockImage("heroAfricanTech")}
        alt="African technology and innovation"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal/85 via-brand-blue/75 to-brand-charcoal/80"></div>
      <div className="absolute inset-0 bg-african-pattern opacity-40 mix-blend-overlay"></div>
    </div>

    <div className="relative z-10 max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop text-white w-full">
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="max-w-3xl"
      >
        <motion.p
          variants={fadeUp}
          className="font-label-lg text-label-lg uppercase tracking-[0.3em] text-brand-gold mb-4"
        >
          Experts in IT Consultancy · AI · Cybersecurity
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="font-display-lg text-display-lg-mobile md:text-display-lg leading-[1.05] mb-5"
        >
          Pioneering{" "}
          <span className="text-brand-gold">Digital Transformation</span> in
          Africa
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="font-body-md text-body-md md:text-body-lg text-white/85 mb-stack-lg max-w-2xl"
        >
          Lesticom empowers Africa's growth with intelligent technologies,
          tailored solutions, and future-ready infrastructure.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap gap-gutter">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-white font-label-lg text-label-lg px-8 py-4 rounded-none transition-all shadow-xl"
          >
            Explore Our Services <FaArrowRight />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border-2 border-white/60 backdrop-blur-md text-white font-label-lg text-label-lg px-8 py-4 rounded-none hover:bg-white hover:text-brand-blue transition-all"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/70 text-xs font-label-lg tracking-widest uppercase"
    >
      Scroll
      <div className="mx-auto mt-2 h-10 w-[2px] bg-white/40 animate-pulse"></div>
    </motion.div>
  </section>
);

const AboutSnippet = () => {
  const bullets = [
    {
      icon: <FaCogs />,
      title: "End-to-End Digital Solutions",
      text: "From strategy and design to deployment and support — we cover the full technology lifecycle.",
    },
    {
      icon: <FaRocket />,
      title: "Africa-Centric Innovation",
      text: "Solutions built around African realities, markets, and opportunities — not bolted on.",
    },
    {
      icon: <FaBrain />,
      title: "Skills for the Future",
      text: "AI, software, and digital skills training that empower teams and institutions to thrive.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={fadeUp}
            className="font-label-lg text-label-lg uppercase tracking-widest text-brand-gold mb-3"
          >
            About Lesticom
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display-lg text-headline-md md:text-headline-lg text-brand-charcoal mb-5"
          >
            Driving Innovation, Enabling Growth
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-body-md text-body-md text-brand-charcoal/75 mb-stack-lg"
          >
            Lesticom is a forward-thinking technology company committed to
            delivering smart, scalable solutions across Africa. We specialize
            in AI training and implementation, software development, bulk SMS,
            web services, and ICT equipment sales. Our mission is to empower
            businesses, institutions, and professionals with cutting-edge tools
            and skills to thrive in the digital age. From strategy to execution,
            we build with purpose — transforming ideas into impact.
          </motion.p>
          <motion.ul variants={stagger} className="space-y-4">
            {bullets.map((b, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="flex items-start gap-4 p-4 bg-white border border-brand-charcoal/5 rounded-lg shadow-sm"
              >
                <span className="shrink-0 w-11 h-11 rounded-md bg-brand-blue text-white flex items-center justify-center text-xl">
                  {b.icon}
                </span>
                <div>
                  <h3 className="font-headline-md text-headline-md text-brand-charcoal mb-1 text-lg">
                    {b.title}
                  </h3>
                  <p className="font-body-md text-body-md text-brand-charcoal/70">
                    {b.text}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-african-pattern-gold rounded-lg"></div>
          <img
            src={getStockImage("workspace")}
            alt="Lesticom team workspace"
            className="relative rounded-lg shadow-2xl w-full h-[520px] object-cover"
          />
          <div className="absolute -bottom-6 -left-6 bg-brand-blue text-white p-6 rounded-lg shadow-xl hidden md:block">
            <p className="font-headline-md text-headline-md text-brand-gold mb-1">
              261+
            </p>
            <p className="font-label-lg text-label-sm uppercase tracking-widest">
              Satisfied Clients
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatsBand = () => {
  const stats = [
    { value: "261+", label: "Satisfied Clients", icon: <FaUserTie /> },
    { value: "120+", label: "Finished Projects", icon: <FaBriefcase /> },
    { value: "15+", label: "Skilled Experts", icon: <FaLightbulb /> },
    { value: "3,97+", label: "Media Posts", icon: <FaQuoteLeft /> },
  ];

  return (
    <section className="bg-brand-charcoal py-16 md:py-20 bg-african-pattern relative">
      <div className="absolute inset-0 bg-brand-charcoal/95"></div>
      <div className="relative max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeading
          eyebrow="Who We Are"
          title="Leading the way in Afrocentric Tech solutions"
          subtitle="Numbers that reflect our commitment to African digital transformation."
          light
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-stack-lg"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-lg text-center hover:border-brand-gold transition-colors"
            >
              <span className="inline-flex w-12 h-12 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold text-xl mb-3">
                {s.icon}
              </span>
              <p className="font-display-lg text-4xl md:text-5xl text-brand-gold mb-2 leading-none">
                {s.value}
              </p>
              <p className="font-label-lg text-label-sm uppercase tracking-widest text-white/70">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const services = [
  {
    key: "cyber",
    icon: <FaShieldAlt />,
    title: "Cyber Security",
    text: "Advanced, enterprise-grade cybersecurity to safeguard your data, infrastructure, and operations — so you can grow with confidence.",
    link: "/cyber-security",
  },
  {
    key: "consultancy",
    icon: <FaLightbulb />,
    title: "IT Consultancy",
    text: "Strategic guidance to align technology with business goals, optimize operations, and drive sustainable digital transformation.",
    link: "/consultancy",
  },
  {
    key: "appDev",
    icon: <FaCode />,
    title: "App Development",
    text: "Custom mobile and web applications that are intuitive, high-performing, and built to solve real business challenges.",
    link: "/appdev",
  },
  {
    key: "hosting",
    icon: <FaServer />,
    title: "Secure Hosting",
    text: "Reliable, secure, always-on infrastructure with data protection you can trust — a stable foundation for your business.",
    link: "/services",
  },
];

const ServicesGrid = () => (
  <section className="py-20 md:py-28 bg-surface">
    <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
      <SectionHeading
        eyebrow="What We Do"
        title="We solve IT problems with technology"
        subtitle="Four core pillars — built for performance, reliability, and growth across Africa."
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {services.map((s) => (
          <motion.div
            key={s.key}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="group relative bg-white border border-brand-charcoal/5 rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-shadow"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={stockImages[s.key]}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/40 to-transparent"></div>
              <span className="absolute bottom-3 left-3 inline-flex w-11 h-11 items-center justify-center rounded-md bg-brand-gold text-white text-xl shadow-lg">
                {s.icon}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-headline-md text-headline-md text-brand-charcoal mb-2">
                {s.title}
              </h3>
              <p className="font-body-md text-body-md text-brand-charcoal/70 mb-4">
                {s.text}
              </p>
              <Link
                to={s.link}
                className="inline-flex items-center gap-2 font-label-lg text-label-lg text-brand-blue hover:text-brand-gold transition-colors"
              >
                Read more <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const WorkProcess = () => {
  const steps = [
    {
      n: "01",
      title: "Choose a Service",
      text: "Explore our wide range of digital solutions — from AI training and software development to secure hosting, bulk SMS, and hardware sales.",
    },
    {
      n: "02",
      title: "Define Requirements",
      text: "Tell us what you need. We'll assess your goals and recommend the most efficient, scalable approach tailored to your business.",
    },
    {
      n: "03",
      title: "Schedule a Consultation",
      text: "Meet with our experts to refine your strategy, ask questions, and get clear guidance on the best implementation roadmap.",
    },
    {
      n: "04",
      title: "Get Your Custom Solution",
      text: "We deliver a complete, tested, and secure solution — ready to deploy, with ongoing support to keep your operations running smoothly.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-brand-cream bg-african-pattern-gold relative">
      <div className="absolute inset-0 bg-brand-cream/90"></div>
      <div className="relative max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeading
          eyebrow="How We Work"
          title="Standard Work Process"
          subtitle="A clear, proven path from idea to impact."
        />
        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-4 gap-6 relative"
        >
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              variants={fadeUp}
              className="relative bg-white border border-brand-charcoal/5 rounded-lg p-6 shadow-sm hover:shadow-xl transition-shadow"
            >
              <span className="absolute -top-4 -left-2 font-display-lg text-5xl text-brand-gold/30 leading-none">
                {s.n}
              </span>
              <span className="block font-display-lg text-brand-blue text-2xl mb-3">
                {s.n}
              </span>
              <h3 className="font-headline-md text-headline-md text-brand-charcoal mb-2">
                {s.title}
              </h3>
              <p className="font-body-md text-body-md text-brand-charcoal/70">
                {s.text}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
};

const ClientsBand = () => {
  const clients = [
    {
      sector: "Churches",
      name: "House of Prayer Ministries",
      logo: "/clients/house-of-prayer-ministries.svg",
      site: "https://houseofprayerzim.org",
    },
    {
      sector: "Government",
      name: "Ministry of Higher & Tertiary Education",
      logo: "/clients/zimbabwe-coat-of-arms.svg",
      site: "https://mhtestd.gov.zw",
    },
    {
      sector: "Parastatals",
      name: "ZESA Pension Fund",
      logo: "/clients/zesa-logo.svg",
      site: "https://www.zesa.co.zw",
    },
    {
      sector: "Education Sector",
      name: "Chibi High School",
      logo: "/clients/chibi-high-school.svg",
      site: "https://chibihigh.ac.zw",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeading
          eyebrow="Trusted Across Africa"
          title="Some of our clients"
          subtitle="From ministries to corporates, schools to parastatals — organisations trust Lesticom."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {clients.map((c, i) => (
            <motion.a
              key={i}
              href={c.site}
              target="_blank"
              rel="noreferrer"
              variants={fadeUp}
              className="group bg-brand-cream border border-brand-charcoal/5 rounded-lg p-6 text-center hover:border-brand-blue hover:shadow-md transition-all"
            >
              <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center">
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <p className="font-label-lg text-label-sm uppercase tracking-widest text-brand-gold mb-1">
                {c.sector}
              </p>
              <p className="font-headline-md text-lg text-brand-charcoal leading-tight">
                {c.name}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const tags = [
  "SMS & USSD Solutions",
  "Mobile Applications",
  "Training Services",
  "Software Development",
  "Web Development",
  "Hosting Services",
  "Value Added Services",
  "Cyber Security",
  "IT Consultancy",
  "Graphic Design",
  "A.I & Machine Learning",
  "Green Energy Solutions",
];

const ServicesTags = () => (
  <section className="py-16 md:py-20 bg-brand-blue text-white bg-african-pattern relative">
    <div className="absolute inset-0 bg-brand-blue/95"></div>
    <div className="relative max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center"
      >
        <p className="font-label-lg text-label-lg uppercase tracking-widest text-brand-gold mb-3">
          Full Capability Stack
        </p>
        <h2 className="font-display-lg text-headline-md md:text-headline-lg mb-stack-lg">
          Stay Connected With Cutting Edge Technology
        </h2>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        >
          {tags.map((t) => (
            <motion.span
              key={t}
              variants={fadeUp}
              className="px-5 py-2 border border-white/20 rounded-full font-label-lg text-label-sm uppercase tracking-widest text-white hover:bg-brand-gold hover:border-brand-gold transition-colors cursor-default"
            >
              {t}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const Testimonials = () => {
  const items = [
    {
      avatar: stockImages.avatarFemale1,
      quote:
        "Lesticom's bulk SMS platform has transformed the way we communicate with students. From exam reminders to urgent alerts, it's fast, reliable, and easy to use. Their support team is responsive and always ready to assist.",
      name: "Mrs S Kimbini",
      role: "Admin, ITTD",
      org: "Harare",
    },
    {
      avatar: stockImages.avatarFemale2,
      quote:
        "We needed a complete digital facelift — Lesticom delivered. From professional email setup to a bold, modern brand identity, everything was done with precision and creativity. Our internal communication has never been smoother.",
      name: "Miss N Manda",
      role: "C.E.O",
      org: "Nenceville Trucking",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our clients say"
          subtitle="Real stories from teams and organisations we've partnered with."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-6 md:gap-8"
        >
          {items.map((t, i) => (
            <motion.figure
              key={i}
              variants={fadeUp}
              className="bg-white border border-brand-charcoal/5 rounded-lg p-8 shadow-sm hover:shadow-xl transition-shadow relative"
            >
              <FaQuoteLeft className="text-brand-gold text-3xl mb-4 opacity-70" />
              <blockquote className="font-body-md text-body-md text-brand-charcoal/80 italic mb-6 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="flex items-center gap-4 pt-4 border-t border-brand-charcoal/10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-gold"
                />
                <div>
                  <p className="font-headline-md text-lg text-brand-charcoal leading-tight">
                    {t.name}
                  </p>
                  <p className="font-label-lg text-label-sm uppercase tracking-widest text-brand-gold">
                    {t.role} · {t.org}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const UnlockingSuccess = () => {
  const cards = [
    {
      tag: "01",
      title: "A.I Training Services",
      text: "Practical AI training for professionals, teams, and institutions.",
      img: stockImages.ai,
      link: "/intelligence",
      icon: <FaBrain />,
    },
    {
      tag: "02",
      title: "Hardware that works",
      text: "Quality technology. Trusted brands. Devices that drive productivity.",
      img: stockImages.hardware,
      link: "/hardware",
      icon: <FaMicrochip />,
    },
    {
      tag: "03",
      title: "SMS Based Services",
      text: "Powerful SMS solutions for business, schools, and campaigns.",
      img: stockImages.sms,
      link: "/sms-services",
      icon: <FaSms />,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeading
          eyebrow="Unlocking Your Success"
          title="Technology for business success"
          subtitle="Three pillars that turn digital ambition into operational reality."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {cards.map((c, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group bg-brand-charcoal text-white rounded-lg overflow-hidden shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent"></div>
                <span className="absolute top-4 left-4 inline-flex items-center justify-center w-11 h-11 rounded-md bg-brand-gold text-white text-xl">
                  {c.icon}
                </span>
                <span className="absolute bottom-4 right-4 font-display-lg text-5xl text-brand-gold/40">
                  {c.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-headline-md text-white mb-2">
                  {c.title}
                </h3>
                <p className="font-body-md text-body-md text-white/70 mb-4">
                  {c.text}
                </p>
                <Link
                  to={c.link}
                  className="inline-flex items-center gap-2 font-label-lg text-label-lg text-brand-gold hover:text-white transition-colors"
                >
                  Learn more <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="relative py-20 md:py-28 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src={getStockImage("heroCoWorking")}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal/95 via-brand-blue/85 to-brand-charcoal/90"></div>
      <div className="absolute inset-0 bg-african-pattern opacity-30"></div>
    </div>
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="relative max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center text-white"
    >
      <p className="font-label-lg text-label-lg uppercase tracking-widest text-brand-gold mb-3">
        Let's Build Together
      </p>
      <h2 className="font-display-lg text-headline-md md:text-headline-lg mb-4">
        Ready to Start Your Digital Journey?
      </h2>
      <p className="font-body-md text-body-md md:text-body-lg text-white/80 max-w-2xl mx-auto mb-stack-lg">
        Whether you're scaling operations, securing infrastructure, or training
        your team — Lesticom is your strategic technology partner across Africa.
      </p>
      <div className="flex flex-wrap justify-center gap-gutter mb-stack-lg">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-white font-label-lg text-label-lg px-8 py-4 rounded-none transition-all shadow-xl"
        >
          Contact Us <FaArrowRight />
        </Link>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 border-2 border-white/60 backdrop-blur-md text-white font-label-lg text-label-lg px-8 py-4 rounded-none hover:bg-white hover:text-brand-blue transition-all"
        >
          Explore Our Services
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-6 text-white/80 font-label-lg text-label-sm uppercase tracking-widest">
        <span className="inline-flex items-center gap-2">
          <FaPhone className="text-brand-gold" /> +263 77 522 2513
        </span>
        <span className="inline-flex items-center gap-2">
          <FaEnvelope className="text-brand-gold" /> support@lesticom.africa
        </span>
        <span className="inline-flex items-center gap-2">
          <FaMapMarkerAlt className="text-brand-gold" /> Harare, Zimbabwe
        </span>
        <span className="inline-flex items-center gap-2">
          <FaClock className="text-brand-gold" /> Mon–Fri · 08:00–17:00
        </span>
      </div>
    </motion.div>
  </section>
);

const Home = () => {
  return (
    <Layout>
      <Seo
        title="Lesticom | Experts in IT Consultancy, AI & Cybersecurity"
        description="Empowering Africa with intelligent digital solutions — AI training, software & app development, bulk SMS, secure hosting, IT consultancy."
      />
      <Hero />
      <AboutSnippet />
      <StatsBand />
      <ServicesGrid />
      <WorkProcess />
      <ClientsBand />
      <ServicesTags />
      <Testimonials />
      <UnlockingSuccess />
      <FinalCTA />
    </Layout>
  );
};

export default Home;
