import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaShieldAlt,
} from "react-icons/fa";

import Layout from "../components/common/Layout";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import { getStockImage } from "../components/common/stockImages";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const introParagraph = `Welcome to Lesticom Wireless ("Company," "we," "our," or "us"). By accessing or using our website, software, applications, ICT services, bulk SMS solutions, AI agency services, media services, ICT skills training, IT consultancy, and other related services ("Services"), you agree to comply with and be bound by the following Terms and Conditions. If you do not agree, please do not use our Services.`;

const sections = [
  {
    id: "definitions",
    number: "01",
    title: "Definitions",
    blocks: [
      {
        type: "list",
        items: [
          <><strong>"User," "You," "Your"</strong> refers to any individual or entity accessing or using our Services.</>,
          <><strong>"Services"</strong> include software development, web and application development, bulk SMS, AI agency solutions, media services, ICT training, IT consultancy, and related offerings.</>,
          <><strong>"Content"</strong> refers to all text, graphics, software, applications, designs, and any other materials made available by Lesticom Wireless.</>,
          <><strong>"Third-Party Services"</strong> refer to any external services, software, applications, or platforms used in conjunction with our Services.</>,
          <><strong>"Force Majeure"</strong> refers to any unforeseen events beyond our control, including but not limited to acts of God, cyberattacks, regulatory changes, and technical failures.</>,
        ],
      },
    ],
  },
  {
    id: "use-of-services",
    number: "02",
    title: "Use of Services",
    blocks: [
      {
        type: "list",
        items: [
          <>You must be at least 18 years old to use our Services.</>,
          <>You agree to use our Services only for lawful purposes and in compliance with all applicable Zimbabwean laws and international regulations.</>,
          <>Unauthorized use, such as hacking, scraping, reverse engineering, or interfering with our systems, is strictly prohibited.</>,
          <>You shall not use our Services to distribute harmful, fraudulent, or illegal content, including spam, malware, or deceptive information.</>,
          <>You acknowledge that we reserve the right to deny service to any individual or entity at our sole discretion.</>,
        ],
      },
    ],
  },
  {
    id: "user-accounts",
    number: "03",
    title: "User Accounts and Responsibilities",
    blocks: [
      {
        type: "list",
        items: [
          <>You may be required to create an account to access certain Services.</>,
          <>You are responsible for maintaining the confidentiality of your login credentials.</>,
          <>You agree to provide accurate, current, and complete information.</>,
          <>We reserve the right to suspend or terminate your account if you violate these Terms.</>,
          <>You agree to notify us immediately of any unauthorized access or security breaches.</>,
        ],
      },
    ],
  },
  {
    id: "payment-billing",
    number: "04",
    title: "Payment, Billing, and Refunds",
    blocks: [
      {
        type: "list",
        items: [
          <>Certain Services may require payment. Fees, billing cycles, and payment terms will be communicated at the time of purchase.</>,
          <>Payments are non-refundable except as required by applicable laws.</>,
          <>If a payment fails or is disputed, we may suspend or terminate access to paid Services.</>,
          <>We are not responsible for any additional fees charged by banks, payment processors, or third-party financial services.</>,
          <>All pricing is subject to change, and continued use of Services after a price adjustment constitutes acceptance of new rates.</>,
        ],
      },
    ],
  },
  {
    id: "intellectual-property",
    number: "05",
    title: "Intellectual Property Rights",
    blocks: [
      {
        type: "list",
        items: [
          <>All intellectual property rights, including copyrights, trademarks, and patents, in our Services and Content are owned by Lesticom Wireless.</>,
          <>You may not copy, modify, distribute, or use our Content without prior written permission.</>,
          <>You retain rights to any intellectual property you create while using our Services, but grant us a non-exclusive license to use your content where necessary for service delivery.</>,
          <>Unauthorized reproduction, modification, or distribution of our intellectual property may result in legal action.</>,
        ],
      },
    ],
  },
  {
    id: "privacy-data",
    number: "06",
    title: "Privacy and Data Protection",
    blocks: [
      {
        type: "list",
        items: [
          <>We collect and process user data in accordance with our <Link to="/privacy-policy" className="text-brand-blue font-semibold hover:underline">Privacy Policy</Link>.</>,
          <>By using our Services, you consent to data collection and processing as outlined in the Privacy Policy.</>,
          <>We implement industry-standard security measures but cannot guarantee absolute data security.</>,
          <>You acknowledge that electronic communications and data transmissions may be subject to interception or unauthorized access beyond our control.</>,
        ],
      },
    ],
  },
  {
    id: "service-availability",
    number: "07",
    title: "Service Availability and Disruptions",
    blocks: [
      {
        type: "list",
        items: [
          <>We strive to ensure uninterrupted access to our Services but do not guarantee 100% uptime.</>,
          <>We may suspend or modify our Services for maintenance, upgrades, or legal reasons without prior notice.</>,
          <>We are not responsible for service interruptions caused by third-party providers, cyberattacks, or unforeseen events.</>,
          <>In no event shall we be liable for losses arising from the unavailability of Services.</>,
        ],
      },
    ],
  },
  {
    id: "limitation-liability",
    number: "08",
    title: "Limitation of Liability",
    blocks: [
      {
        type: "list",
        items: [
          <>Lesticom Wireless is not liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our Services.</>,
          <>We provide Services &ldquo;as is&rdquo; without warranties of any kind, express or implied.</>,
          <>We are not responsible for losses resulting from third-party actions, cyber threats, or user negligence.</>,
          <>Our total liability, in any case, shall not exceed the amount paid by you for the Services in the last 12 months.</>,
        ],
      },
    ],
  },
  {
    id: "indemnification",
    number: "09",
    title: "Indemnification",
    blocks: [
      {
        type: "p",
        text: "You agree to indemnify, defend, and hold Lesticom Wireless harmless from any claims, damages, liabilities, costs, or expenses arising from:",
      },
      {
        type: "list",
        items: [
          <>Your use of our Services</>,
          <>Your violation of these Terms</>,
          <>Any third-party claims related to your actions on our platform</>,
          <>Breach of intellectual property rights</>,
        ],
      },
    ],
  },
  {
    id: "termination",
    number: "10",
    title: "Termination and Suspension",
    blocks: [
      {
        type: "list",
        items: [
          <>We reserve the right to terminate or suspend your access to our Services at our sole discretion, without prior notice, if you violate these Terms.</>,
          <>Upon termination, your right to use our Services ceases immediately, and any outstanding obligations remain enforceable.</>,
        ],
      },
    ],
  },
  {
    id: "third-party",
    number: "11",
    title: "Third-Party Services and Links",
    blocks: [
      {
        type: "list",
        items: [
          <>Our Services may contain links to third-party websites, tools, or applications. We are not responsible for their content, policies, or practices.</>,
          <>You acknowledge that third-party services may have their own terms, and we do not endorse or assume responsibility for their actions.</>,
        ],
      },
    ],
  },
  {
    id: "legal-compliance",
    number: "12",
    title: "Legal Compliance and User Responsibility",
    blocks: [
      {
        type: "list",
        items: [
          <>You are responsible for ensuring your use of our Services complies with all applicable local, national, and international laws.</>,
          <>We shall not be held responsible for any illegal activity conducted by users through our Services.</>,
          <>If legal action is taken against us due to a user&rsquo;s unlawful conduct, the user shall indemnify us from all liabilities, costs, and expenses.</>,
        ],
      },
    ],
  },
  {
    id: "force-majeure",
    number: "13",
    title: "Force Majeure",
    blocks: [
      {
        type: "list",
        items: [
          <>We are not responsible for any failure to perform obligations due to circumstances beyond our control, including natural disasters, cyberattacks, government actions, or network failures.</>,
          <>If a force majeure event occurs, we shall make reasonable efforts to resume Services as soon as possible.</>,
        ],
      },
    ],
  },
  {
    id: "governing-law",
    number: "14",
    title: "Governing Law and Dispute Resolution",
    blocks: [
      {
        type: "list",
        items: [
          <>These Terms shall be governed by and construed in accordance with the laws of Zimbabwe.</>,
          <>Any disputes shall first be attempted to be resolved amicably. If unresolved, disputes shall be settled through arbitration in Zimbabwe.</>,
          <>You waive the right to participate in any class-action lawsuit against Lesticom Wireless.</>,
        ],
      },
    ],
  },
  {
    id: "changes-terms",
    number: "15",
    title: "Changes to These Terms",
    blocks: [
      {
        type: "list",
        items: [
          <>We reserve the right to modify these Terms at any time. Updates will be posted on our website with the &ldquo;Last Updated&rdquo; date.</>,
          <>Continued use of our Services after changes take effect constitutes acceptance of the revised Terms.</>,
        ],
      },
    ],
  },
  {
    id: "contact",
    number: "16",
    title: "Contact Information",
    blocks: [
      {
        type: "p",
        text: "If you have any questions or concerns regarding these Terms, please contact us at:",
      },
      { type: "contact" },
      {
        type: "p",
        text: "By using our Services, you confirm that you have read, understood, and agreed to these Terms and Conditions.",
      },
    ],
  },
];

const Terms = () => {
  const heroImage = getStockImage("workspace");

  return (
    <Layout>
      <Seo
        title="Terms & Conditions — Lesticom"
        description="The terms and conditions governing use of Lesticom's services."
        image={heroImage}
      />

      <PageHero
        breadcrumb="Terms & Conditions"
        title="Terms & Conditions of Use"
        subtitle="Last updated: March 15, 2025"
        imageUrl={heroImage}
        imageAlt="Quiet workspace with legal documents"
        accent="blue"
      />

      <section className="py-stack-lg bg-brand-cream">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <span className="block font-label-lg uppercase tracking-widest text-brand-gold mb-4">
                  On This Page
                </span>
                <nav aria-label="Table of contents">
                  <ul className="space-y-2 border-l-2 border-brand-blue/15 pl-4">
                    {sections.map((s) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className="block py-1 text-sm text-on-surface-variant hover:text-brand-blue hover:font-semibold transition-colors leading-snug"
                        >
                          <span className="text-brand-gold-light mr-2 font-semibold">
                            {s.number}
                          </span>
                          {s.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            <article className="max-w-3xl mx-auto lg:mx-0 w-full">
              <motion.div
                {...fadeInUp}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 mb-12"
              >
                <span className="inline-flex items-center gap-2 font-label-lg uppercase tracking-widest text-brand-blue bg-primary-container px-3 py-1.5 rounded-full">
                  <FaShieldAlt className="text-xs" /> Effective Date: January
                  01, 2019
                </span>
                <p className="mt-5 text-on-surface-variant leading-relaxed text-lg">
                  {introParagraph}
                </p>
              </motion.div>

              {sections.map((section, index) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  {...fadeInUp}
                  className="scroll-mt-28"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center font-headline-md text-base">
                      {section.number}
                    </span>
                    <h2 className="font-headline-lg text-2xl md:text-3xl text-brand-charcoal leading-tight pt-2">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-4 text-on-surface-variant leading-relaxed text-base md:text-lg">
                    {section.blocks.map((block, i) => {
                      if (block.type === "p") {
                        return <p key={i}>{block.text}</p>;
                      }
                      if (block.type === "list") {
                        return (
                          <ul key={i} className="space-y-2.5 list-none pl-0">
                            {block.items.map((item, j) => (
                              <li
                                key={j}
                                className="flex items-start gap-3"
                              >
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                                <span className="flex-1">{item}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      if (block.type === "contact") {
                        return (
                          <div
                            key={i}
                            className="bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-charcoal rounded-2xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden not-prose"
                          >
                            <div
                              className="absolute inset-0 opacity-[0.08] pointer-events-none"
                              style={{
                                backgroundImage:
                                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z'/%3E%3Cpath d='M30 10L50 30L30 50L10 30Z'/%3E%3Ccircle cx='30' cy='30' r='8'/%3E%3C/g%3E%3C/svg%3E\")",
                              }}
                            />
                            <div className="relative z-10">
                              <span className="font-label-lg uppercase tracking-widest text-brand-gold-light">
                                Lesticom Wireless
                              </span>
                              <ul className="mt-4 space-y-3">
                                <li className="flex items-start gap-3 text-white/90">
                                  <FaMapMarkerAlt className="text-brand-gold-light mt-1 flex-shrink-0" />
                                  <span>
                                    275 Herbert Chitepo and 6th, Harare
                                  </span>
                                </li>
                                <li className="flex items-start gap-3 text-white/90">
                                  <FaEnvelope className="text-brand-gold-light mt-1 flex-shrink-0" />
                                  <a
                                    href="mailto:customercare@lesticom.africa"
                                    className="hover:text-brand-gold-light transition-colors underline-offset-4 hover:underline"
                                  >
                                    customercare@lesticom.africa
                                  </a>
                                </li>
                                <li className="flex items-start gap-3 text-white/90">
                                  <FaPhone className="text-brand-gold-light mt-1 flex-shrink-0" />
                                  <a
                                    href="tel:+263775222513"
                                    className="hover:text-brand-gold-light transition-colors underline-offset-4 hover:underline"
                                  >
                                    +263 77 522 2513
                                  </a>
                                </li>
                                <li className="flex items-start gap-3 text-white/90">
                                  <FaShieldAlt className="text-brand-gold-light mt-1 flex-shrink-0" />
                                  <a
                                    href="https://cipz.pfms.gov.zw:8090/Info/Checkacompany?=38482A0242025"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-brand-gold-light transition-colors underline-offset-4 hover:underline break-all"
                                  >
                                    CIPZ Company Verification
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>

                  {index < sections.length - 1 && (
                    <hr className="my-12 border-t border-slate-200" />
                  )}
                </motion.section>
              ))}
            </article>
          </div>
        </div>
      </section>

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
              Get In Touch
            </span>
            <h2 className="font-display-lg text-3xl md:text-5xl text-white mt-3 mb-6 leading-tight">
              Questions about these terms?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto font-body-md text-lg leading-relaxed mb-10">
              Our team is happy to clarify anything in these Terms &mdash; or
              discuss how our services can support your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-white font-label-lg px-8 py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              >
                Contact Us <FaArrowRight />
              </Link>
              <Link
                to="/privacy-policy"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-label-lg px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
              >
                Read Privacy Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Terms;
