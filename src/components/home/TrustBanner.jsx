import { motion } from "framer-motion";
import PaintStroke from "../common/PaintStroke";
import { FaDownload } from "react-icons/fa";

import before1 from "../../assets/cieling under construction.jpeg";
import after1 from "../../assets/SUSPENDED cieling painting job.png";

import before2 from "../../assets/builder working on kitchen cabinets.jpeg";
import after2 from "../../assets/finished fitted kitchen cabinets .jpeg";

import companyProfile from "../../assets/Takaz Investments Company Profile 1.pdf";

const TrustBanner = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <section className="py-stack-lg bg-surface text-left">
      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-stack-lg">
          <motion.div {...fadeInUp}>
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tight">
              Signature{" "}
              <PaintStroke color="var(--secondary)">
                Transformations
              </PaintStroke>
            </h2>

            <p className="text-on-surface-variant mt-2">
              Hover to experience the Takaz finishing touch.
            </p>
          </motion.div>

          {/* Download Button */}
          <a
            href={companyProfile}
            download
            className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-6 py-3 rounded-lg font-label-lg hover:scale-105 hover:brightness-95 transition-all duration-300 shadow-md"
          >
            <FaDownload />
            Company Profile
          </a>
        </div>

        {/* Transformation Grid */}
        <div className="grid md:grid-cols-2 gap-stack-lg">

          {/* Transformation Card 1 */}
          <motion.div
            {...fadeInUp}
            className="relative aspect-video group overflow-hidden rounded-2xl shadow-lg cursor-ew-resize"
          >
            {/* BEFORE IMAGE */}
            <img
              src={before1}
              alt="Ceiling before transformation"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* AFTER IMAGE */}
            <div className="absolute inset-0 w-0 group-hover:w-full transition-all duration-700 ease-in-out overflow-hidden">
              <img
                src={after1}
                alt="Ceiling after transformation"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Divider Line */}
            <div className="absolute top-0 left-0 h-full w-1 bg-white/80 group-hover:left-full transition-all duration-700 ease-in-out z-10" />

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full z-20">
              BEFORE
            </div>

            <div className="absolute top-4 right-4 bg-secondary text-white text-sm px-3 py-1 rounded-full z-20">
              AFTER
            </div>

            {/* Title */}
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full font-label-lg text-primary z-20">
              CEILING TRANSFORMATION
            </div>
          </motion.div>

          {/* Transformation Card 2 */}
          <motion.div
            {...fadeInUp}
            className="relative aspect-video group overflow-hidden rounded-2xl shadow-lg cursor-ew-resize"
          >
            {/* BEFORE IMAGE */}
            <img
              src={before2}
              alt="Kitchen before transformation"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* AFTER IMAGE */}
            <div className="absolute inset-0 w-0 group-hover:w-full transition-all duration-700 ease-in-out overflow-hidden">
              <img
                src={after2}
                alt="Kitchen after transformation"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Divider Line */}
            <div className="absolute top-0 left-0 h-full w-1 bg-white/80 group-hover:left-full transition-all duration-700 ease-in-out z-10" />

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full z-20">
              BEFORE
            </div>

            <div className="absolute top-4 right-4 bg-secondary text-white text-sm px-3 py-1 rounded-full z-20">
              AFTER
            </div>

            {/* Title */}
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full font-label-lg text-primary z-20">
              KITCHEN REVEAL
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
