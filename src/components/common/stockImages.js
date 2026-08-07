/**
 * Curated African-themed stock images from Unsplash (free use).
 * Each entry: { url, alt, credit, search }.
 *
 * To add more: search Unsplash for the keyword and paste the CDN URL.
 * Format: https://images.unsplash.com/<photo-id>?w=1200&q=80&auto=format&fit=crop
 */
export const stockImages = {
  // Hero / generic African tech
  heroAfricanTech:
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1600&q=80&auto=format&fit=crop",
  heroAfricanCity:
    "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&q=80&auto=format&fit=crop",
  heroAfricanLandscape:
    "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&q=80&auto=format&fit=crop",
  heroCoWorking:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format&fit=crop",
  heroDiversity:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80&auto=format&fit=crop",
  heroWomenInTech:
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1600&q=80&auto=format&fit=crop",

  // Service-specific
  cyber:
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80&auto=format&fit=crop",
  consultancy:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop",
  appDev:
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80&auto=format&fit=crop",
  hosting:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&auto=format&fit=crop",
  ai:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80&auto=format&fit=crop",
  hardware:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop",
  sms:
    "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80&auto=format&fit=crop",
  ux:
    "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=1200&q=80&auto=format&fit=crop",

  // Section/feature images
  teamAfrica:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80&auto=format&fit=crop",
  africaMap:
    "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80&auto=format&fit=crop",
  workspace:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80&auto=format&fit=crop",
  codeScreen:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80&auto=format&fit=crop",
  networkCables:
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80&auto=format&fit=crop",
  businessMeeting:
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80&auto=format&fit=crop",
  officeBuilding:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80&auto=format&fit=crop",
  laptopDesk:
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&q=80&auto=format&fit=crop",

  // Testimonial / client avatars (African professionals)
  avatarFemale1:
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80&auto=format&fit=crop",
  avatarFemale2:
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80&auto=format&fit=crop",
  avatarMale1:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop",
  avatarMale2:
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&q=80&auto=format&fit=crop",
};

export const getStockImage = (key) => stockImages[key] || stockImages.heroAfricanTech;
