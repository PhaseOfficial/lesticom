import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope, FaPhone, FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa";

import Layout from "../components/common/Layout";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import { getStockImage } from "../components/common/stockImages";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

const SECTIONS = [
  {
    number: "1",
    title: "Information We Collect",
    blocks: [
      {
        type: "h3",
        number: "1.1",
        title: "Personal Information",
      },
      {
        type: "p",
        text: "We may collect personally identifiable information such as:",
      },
      {
        type: "ul",
        items: [
          { text: "Name" },
          { text: "Email address" },
          { text: "Phone number" },
          { text: "Physical address" },
          { text: "National ID / passport number" },
          { text: "Payment details (billing information, transactions, etc.)" },
          { text: "Employment details (for consultancy or training purposes)" },
          { text: "Business registration details (for corporate clients)" },
          { text: "Social media handles (for digital marketing services)" },
          {
            text: "Any additional details required for specific services such as AI development or ICT consultancy",
          },
        ],
      },
      {
        type: "h3",
        number: "1.2",
        title: "Non-Personal Information",
      },
      {
        type: "p",
        text: "We also collect non-personal information such as:",
      },
      {
        type: "ul",
        items: [
          { text: "IP address" },
          { text: "Browser type and version" },
          { text: "Device information" },
          { text: "Usage data (e.g., pages visited, time spent on the website)" },
          { text: "Demographic information" },
          { text: "Location data (where applicable)" },
          { text: "Technical logs and analytics data" },
        ],
      },
      {
        type: "h3",
        number: "1.3",
        title: "Information from Third Parties",
      },
      {
        type: "p",
        text: "We may receive information from third-party service providers, partners, and publicly available sources.",
      },
      {
        type: "h3",
        number: "1.4",
        title: "Automated Information Collection",
      },
      {
        type: "p",
        text: "Our website and services may automatically collect certain information through tracking technologies such as cookies, web beacons, and analytics tools to enhance user experience.",
      },
    ],
  },
  {
    number: "2",
    title: "How We Use Your Information",
    blocks: [
      {
        type: "p",
        text: "We use the collected information for various purposes, including:",
      },
      {
        type: "ul",
        items: [
          { text: "Providing, maintaining, and improving our services" },
          { text: "Processing transactions and payments" },
          { text: "Personalizing your experience" },
          { text: "Sending promotional and marketing communications" },
          { text: "Complying with legal and regulatory obligations" },
          { text: "Enhancing cybersecurity and preventing fraud" },
          { text: "Conducting research and analytics" },
          { text: "Developing AI models and ICT solutions" },
          { text: "Offering customized ICT consultancy and training" },
          { text: "Managing bulk SMS campaigns and digital marketing services" },
          { text: "Providing technical support and resolving customer issues" },
          { text: "Conducting surveys and market research" },
          { text: "Facilitating corporate partnerships and business collaborations" },
        ],
      },
    ],
  },
  {
    number: "3",
    title: "How We Share Your Information",
    blocks: [
      {
        type: "p",
        text: "We do not sell your personal information. However, we may share your data with:",
      },
      {
        type: "ul",
        items: [
          {
            label: "Service providers and partners:",
            text: "Third parties who help us deliver services (e.g., payment processors, hosting providers, bulk SMS providers, AI service partners, and IT consultants).",
          },
          {
            label: "Regulatory bodies:",
            text: "When required by law or to comply with legal processes.",
          },
          {
            label: "Business transfers:",
            text: "In case of a merger, acquisition, or sale of assets.",
          },
          {
            label: "Marketing and advertising partners:",
            text: "To provide relevant advertisements and promotions (with your consent).",
          },
          {
            label: "Legal entities and law enforcement agencies:",
            text: "In cases of fraud prevention, compliance, or legal disputes.",
          },
          {
            label: "Research and development teams:",
            text: "For AI model training and data analysis (with anonymization where applicable).",
          },
        ],
      },
    ],
  },
  {
    number: "4",
    title: "Data Security",
    blocks: [
      {
        type: "p",
        text: "We implement industry-standard security measures to protect your personal information, including:",
      },
      {
        type: "ul",
        items: [
          { text: "Encryption of sensitive data" },
          { text: "Secure server infrastructure" },
          { text: "Access control mechanisms" },
          { text: "Regular security assessments and audits" },
          { text: "Compliance with best practices for cybersecurity and AI safety" },
          { text: "Secure data backups and recovery protocols" },
          { text: "Regular employee training on data protection policies" },
          { text: "Multi-factor authentication (MFA) for critical systems" },
        ],
      },
      {
        type: "p",
        text: "Despite these measures, no system is 100% secure. We encourage users to take precautions, such as using strong passwords and keeping their login credentials confidential.",
      },
    ],
  },
  {
    number: "5",
    title: "Your Rights and Choices",
    blocks: [
      {
        type: "p",
        text: "Depending on applicable laws, you may have the following rights:",
      },
      {
        type: "ul",
        items: [
          {
            label: "Access and correction:",
            text: "You can request a copy of your personal data and correct inaccuracies.",
          },
          {
            label: "Data deletion:",
            text: "You may request the deletion of your data, subject to legal requirements.",
          },
          {
            label: "Opt-out of marketing communications:",
            text: "You can unsubscribe from promotional emails and SMS messages.",
          },
          {
            label: "Restrict processing:",
            text: "You may request limitations on how we use your data.",
          },
          {
            label: "Portability:",
            text: "You may request a structured copy of your personal data.",
          },
          {
            label: "Withdraw consent:",
            text: "If you previously provided consent, you can withdraw it at any time.",
          },
        ],
      },
      {
        type: "p",
        children: (
          <>
            To exercise these rights, contact us at{" "}
            <a
              href="mailto:support@lesticom.africa"
              className="text-brand-blue hover:text-brand-gold font-semibold underline underline-offset-2"
            >
              support@lesticom.africa
            </a>
            .
          </>
        ),
      },
    ],
  },
  {
    number: "6",
    title: "Data Retention",
    blocks: [
      {
        type: "p",
        text: "We retain your information as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce agreements. When data is no longer needed, we securely delete or anonymize it.",
      },
    ],
  },
  {
    number: "7",
    title: "Cookies and Tracking Technologies",
    blocks: [
      {
        type: "p",
        text: "We use cookies and similar technologies to enhance user experience, analyze traffic, and improve our services. You can manage your cookie preferences through browser settings.",
      },
      {
        type: "p",
        text: "Types of cookies used:",
      },
      {
        type: "ul",
        items: [
          {
            label: "Essential cookies:",
            text: "Required for website functionality.",
          },
          {
            label: "Analytics cookies:",
            text: "Used to track website performance.",
          },
          {
            label: "Marketing cookies:",
            text: "Used for targeted advertising.",
          },
          {
            label: "Functional cookies:",
            text: "Enhance user experience.",
          },
        ],
      },
    ],
  },
  {
    number: "8",
    title: "International Data Transfers",
    blocks: [
      {
        type: "p",
        text: "If you are accessing our services from outside Zimbabwe, be aware that your data may be transferred to, processed, and stored in Zimbabwe or other jurisdictions with different data protection laws.",
      },
      {
        type: "p",
        text: "We take necessary precautions to ensure that international data transfers comply with applicable legal requirements and industry standards.",
      },
    ],
  },
  {
    number: "9",
    title: "Third-Party Links",
    blocks: [
      {
        type: "p",
        text: "Our website and services may contain links to third-party sites. We are not responsible for their privacy practices, and we encourage you to review their policies.",
      },
    ],
  },
  {
    number: "10",
    title: "Children's Privacy",
    blocks: [
      {
        type: "p",
        text: "Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from minors. If we discover such data has been collected, we will take appropriate action to remove it.",
      },
    ],
  },
  {
    number: "11",
    title: "AI and Automated Decision-Making",
    blocks: [
      {
        type: "p",
        text: "As part of our AI services, we may use automated decision-making systems to:",
      },
      {
        type: "ul",
        items: [
          { text: "Personalize content and recommendations" },
          { text: "Analyze large datasets for AI model development" },
          { text: "Automate IT consultancy processes" },
          { text: "Conduct sentiment analysis and natural language processing" },
          { text: "Enhance cybersecurity through AI-driven threat detection" },
        ],
      },
      {
        type: "p",
        text: "We ensure transparency and ethical use of AI, allowing users to request manual reviews where automated decisions impact them significantly.",
      },
    ],
  },
  {
    number: "12",
    title: "Changes to This Privacy Policy",
    blocks: [
      {
        type: "p",
        text: "We may update this policy periodically. Any changes will be posted on this page with an updated \u201CLast Updated\u201D date. Continued use of our services after modifications indicates acceptance of the new terms.",
      },
    ],
  },
  {
    number: "13",
    title: "Contact Us",
    blocks: [
      {
        type: "p",
        text: "For questions, concerns, or requests related to this Privacy Policy, contact us at:",
      },
      {
        type: "contact",
        company: "Lesticom Wireless",
        address: "275 Herbert Chitepo and 6th, Harare",
        email: "support@lesticom.africa",
        phone: "+263 77 522 2513",
        verificationLabel: "CIPZ Company Verification",
        verificationHref:
          "https://cipz.pfms.gov.zw:8090/Info/Checkacompany?=38482A0242025",
      },
    ],
  },
];

const SectionHeading = ({ number, title }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-sm border border-brand-blue/20">
      {number}
    </span>
    <h2
      id={`section-${number}`}
      className="font-headline-lg text-2xl md:text-3xl text-brand-charcoal leading-tight scroll-mt-24"
    >
      {title}
    </h2>
  </div>
);

const SubHeading = ({ number, title }) => (
  <h3
    id={`section-${number}`}
    className="font-headline-md text-lg md:text-xl text-brand-charcoal mt-6 mb-3 scroll-mt-24"
  >
    {number} {title}
  </h3>
);

const BulletList = ({ items }) => (
  <ul className="list-disc pl-6 space-y-2 text-on-surface-variant leading-relaxed marker:text-brand-blue/60 mb-5">
    {items.map((item, i) => (
      <li key={i}>
        {item.label && (
          <strong className="text-brand-charcoal font-semibold">
            {item.label}{" "}
          </strong>
        )}
        {item.text}
      </li>
    ))}
  </ul>
);

const ContactBlock = ({
  company,
  address,
  email,
  phone,
  verificationLabel,
  verificationHref,
}) => (
  <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <p className="font-headline-md text-lg text-brand-charcoal mb-4">
      {company}
    </p>
    <ul className="space-y-3 text-on-surface-variant">
      <li className="flex items-start gap-3">
        <FaMapMarkerAlt className="text-brand-blue mt-1 shrink-0" />
        <span>{address}</span>
      </li>
      <li className="flex items-start gap-3">
        <FaEnvelope className="text-brand-blue mt-1 shrink-0" />
        <a
          href={`mailto:${email}`}
          className="hover:text-brand-gold transition-colors break-all"
        >
          {email}
        </a>
      </li>
      <li className="flex items-start gap-3">
        <FaPhone className="text-brand-blue mt-1 shrink-0" />
        <a
          href={`tel:${phone.replace(/\s+/g, "")}`}
          className="hover:text-brand-gold transition-colors"
        >
          {phone}
        </a>
      </li>
      <li className="flex items-start gap-3">
        <FaShieldAlt className="text-brand-blue mt-1 shrink-0" />
        <a
          href={verificationHref}
          target="_blank"
          rel="noreferrer"
          className="text-brand-blue hover:text-brand-gold underline underline-offset-2"
        >
          {verificationLabel}
        </a>
      </li>
    </ul>
  </div>
);

const PrivacyPolicy = () => {
  const heroImage = getStockImage("workspace");

  return (
    <Layout>
      <Seo
        title="Privacy Policy \u2014 Lesticom"
        description="How Lesticom collects, uses, and protects your information."
        image={heroImage}
        url="/privacy-policy"
      />

      <PageHero
        breadcrumb="Privacy Policy"
        title="Privacy Policy"
        subtitle="Last updated: March 15, 2025"
        imageUrl={heroImage}
        imageAlt="Quiet workspace representing data privacy and trust"
        accent="blue"
      />

      {/* POLICY CONTENT */}
      <section className="py-stack-lg bg-brand-cream relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#1e40af 0.6px, transparent 0.6px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid lg:grid-cols-[220px_minmax(0,1fr)] gap-10 lg:gap-12">
            {/* STICKY TOC — desktop only */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <p className="text-xs font-label-lg uppercase tracking-widest text-brand-gold mb-3">
                  On this page
                </p>
                <nav aria-label="Table of contents">
                  <ol className="space-y-2 border-l border-outline-variant/40 pl-4">
                    {SECTIONS.map((s) => (
                      <li key={s.number}>
                        <a
                          href={`#section-${s.number}`}
                          className="group flex items-baseline gap-2 text-sm text-on-surface-variant hover:text-brand-blue transition-colors leading-snug"
                        >
                          <span className="font-label-lg text-brand-blue/70 group-hover:text-brand-gold tabular-nums">
                            {s.number}.
                          </span>
                          <span className="group-hover:underline underline-offset-2">
                            {s.title}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </aside>

            {/* MAIN POLICY ARTICLE */}
            <article className="max-w-3xl w-full">
              {/* Intro card */}
              <motion.div
                {...fadeInUp}
                className="mb-10 rounded-2xl border border-outline-variant/40 bg-white p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 text-brand-gold text-xs font-label-lg uppercase tracking-widest mb-3">
                  <FaShieldAlt />
                  <span>Our Commitment</span>
                </div>
                <p className="text-on-surface leading-relaxed text-base md:text-lg">
                  Lesticom Wireless (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
                  &ldquo;us&rdquo;) is committed to protecting your privacy. This
                  Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you visit our website, use our
                  services, or engage with us in any way. By using our services,
                  you agree to the practices described in this policy.
                </p>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-sm text-on-surface-variant">
                  <p>
                    <span className="font-semibold text-brand-charcoal">
                      Effective Date:
                    </span>{" "}
                    January 01, 2019
                  </p>
                  <p>
                    <span className="font-semibold text-brand-charcoal">
                      Last Updated:
                    </span>{" "}
                    March 15, 2025
                  </p>
                </div>
              </motion.div>

              {/* Sections */}
              {SECTIONS.map((section, idx) => (
                <motion.section
                  key={section.number}
                  {...fadeInUp}
                  transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
                  className={
                    idx === 0
                      ? "mb-12"
                      : "mb-12 pt-10 border-t border-outline-variant/40"
                  }
                >
                  <SectionHeading
                    number={section.number}
                    title={section.title}
                  />
                  <div className="text-on-surface-variant leading-relaxed">
                    {section.blocks.map((block, i) => {
                      if (block.type === "h3") {
                        return (
                          <SubHeading
                            key={i}
                            number={block.number}
                            title={block.title}
                          />
                        );
                      }
                      if (block.type === "p") {
                        return (
                          <p key={i} className="mb-4">
                            {block.children ?? block.text}
                          </p>
                        );
                      }
                      if (block.type === "ul") {
                        return <BulletList key={i} items={block.items} />;
                      }
                      if (block.type === "contact") {
                        return (
                          <ContactBlock
                            key={i}
                            company={block.company}
                            address={block.address}
                            email={block.email}
                            phone={block.phone}
                            verificationLabel={block.verificationLabel}
                            verificationHref={block.verificationHref}
                          />
                        );
                      }
                      return null;
                    })}
                  </div>
                </motion.section>
              ))}

              {/* Closing acknowledgment */}
              <motion.div
                {...fadeInUp}
                className="mt-2 rounded-xl bg-brand-blue/5 border border-brand-blue/15 p-5 md:p-6"
              >
                <p className="text-on-surface leading-relaxed italic">
                  By using our services, you acknowledge that you have read and
                  understood this Privacy Policy and consent to our data
                  handling practices as described.
                </p>
              </motion.div>
            </article>
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
            Privacy Questions?
          </motion.span>
          <motion.h2
            {...fadeInUp}
            className="font-headline-lg text-headline-md md:text-headline-lg mb-4"
          >
            Questions about privacy? Contact us.
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="text-white/80 max-w-2xl mx-auto mb-stack-md leading-relaxed"
          >
            Our team is happy to clarify anything in this policy or help you
            exercise your data rights. Reach out and we&rsquo;ll respond
            promptly.
          </motion.p>
          <motion.div
            {...fadeInUp}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-white font-label-lg uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              Contact Us <FaArrowRight className="text-sm" />
            </Link>
            <a
              href="mailto:support@lesticom.africa"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-label-lg uppercase tracking-wider px-8 py-4 rounded-xl transition-all"
            >
              <FaEnvelope /> support@lesticom.africa
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
