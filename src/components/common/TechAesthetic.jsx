import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaServer,
  FaCloud,
  FaCode,
  FaBrain,
  FaWifi,
  FaRobot,
  FaLock,
  FaDatabase,
  FaMicrochip,
  FaBug,
  FaFingerprint,
} from "react-icons/fa";

/**
 * Floating tech-themed ambient icons for Lesticom (IT/AI/Cybersecurity).
 * Subtle, low-opacity, slow animations. pointer-events-none so they
 * never block interaction.
 */
const TechIcon = ({ Icon, x, y, rotate, delay, size = 40, color = "text-brand-blue/30" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.15, 0.35, 0.15],
      scale: 1,
      y: [0, -20, 0],
      rotate: [rotate, rotate + 8, rotate],
    }}
    transition={{
      opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
      scale: { duration: 1, delay },
      y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    }}
    className={`fixed pointer-events-none z-[5] ${color}`}
    style={{ left: x, top: y }}
  >
    <Icon size={size} />
  </motion.div>
);

/** Small static data-dot — like a node on a network graph */
const DataDot = ({ x, y, size = 6 }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: [0.2, 0.6, 0.2] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
    className="fixed pointer-events-none z-[5] rounded-full bg-brand-blue/30"
    style={{ left: x, top: y, width: size, height: size }}
  />
);

/** Faint code-style monospace fragment — purely decorative */
const CodeFragment = ({ text, x, y, rotate = -8 }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: [0.05, 0.12, 0.05] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    className="fixed pointer-events-none z-[5] font-mono text-xs text-brand-blue/40 select-none"
    style={{ left: x, top: y, transform: `rotate(${rotate}deg)` }}
  >
    {text}
  </motion.div>
);

const TechAesthetic = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[5]">
      {/* Soft brand-glow blobs in corners */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-blue/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-brand-gold/10 blur-[100px] rounded-full" />

      {/* Core tech icons */}
      <TechIcon Icon={FaShieldAlt} x="5%"  y="15%" rotate={-15} delay={0.2} size={56} color="text-brand-blue/25" />
      <TechIcon Icon={FaServer}    x="88%" y="12%" rotate={20}  delay={0.4} size={48} color="text-brand-charcoal/20" />
      <TechIcon Icon={FaCloud}     x="12%" y="72%" rotate={10}  delay={0.6} size={52} color="text-brand-blue/25" />
      <TechIcon Icon={FaCode}      x="85%" y="78%" rotate={-20} delay={0.8} size={58} color="text-brand-charcoal/20" />
      <TechIcon Icon={FaBrain}     x="48%" y="88%" rotate={8}   delay={1.0} size={42} color="text-brand-gold/40" />
      <TechIcon Icon={FaWifi}      x="92%" y="48%" rotate={25}  delay={1.2} size={36} color="text-brand-blue/30" />
      <TechIcon Icon={FaRobot}     x="3%"  y="48%" rotate={-12} delay={1.4} size={44} color="text-brand-gold/35" />
      <TechIcon Icon={FaLock}      x="50%" y="10%" rotate={30}  delay={1.6} size={34} color="text-brand-blue/30" />

      {/* Scattered network data dots */}
      <DataDot x="20%" y="30%" />
      <DataDot x="75%" y="22%" />
      <DataDot x="35%" y="55%" />
      <DataDot x="68%" y="65%" />
      <DataDot x="22%" y="82%" />
      <DataDot x="78%" y="90%" />
      <DataDot x="55%" y="40%" />
      <DataDot x="40%" y="20%" />

      {/* Tiny code fragments */}
      <CodeFragment text="{ AI }"            x="18%" y="22%" rotate={-6} />
      <CodeFragment text="<secure/>"         x="78%" y="40%" rotate={8} />
      <CodeFragment text="0xAFRICA"          x="62%" y="75%" rotate={-10} />
      <CodeFragment text="npm run build"     x="8%"  y="60%" rotate={6} />
      <CodeFragment text="SELECT * FROM afri" x="72%" y="58%" rotate={-4} />

      {/* Slow horizontal scan-line (like a network scan) */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{ duration: 12, repeat: Infinity, repeatDelay: 8, ease: "linear" }}
        className="fixed top-1/2 left-0 w-[35%] h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent"
      />

      {/* Vertical data stream lines */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 2, delay: 1, ease: "easeOut" }}
        className="fixed top-0 left-[22%] w-px h-24 bg-gradient-to-b from-brand-blue/15 to-transparent origin-top"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
        className="fixed top-0 left-[78%] w-px h-16 bg-gradient-to-b from-brand-gold/15 to-transparent origin-top"
      />
    </div>
  );
};

export default TechAesthetic;
