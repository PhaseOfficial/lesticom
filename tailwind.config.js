/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Lesticom Brand — Afrocentric Tech Blue + Gold Accent
        "surface-variant": "#f5efe6",       // warm cream
        "surface-bright": "#fdfaf5",          // lightest cream
        "tertiary-container": "#0c1929",     // deep navy near-black
        "on-secondary-container": "#0c4a6e", // deep sky
        "surface-container-highest": "#e6dfd2",
        "on-secondary-fixed": "#0c1e36",
        "primary-container": "#dbeafe",      // light blue tint
        "inverse-primary": "#93c5fd",
        "surface": "#fdfaf5",
        "on-tertiary-fixed": "#1e293b",
        "surface-dim": "#e8e1d4",
        "surface-container-lowest": "#ffffff",
        "on-error": "#ffffff",
        "primary": "#1e40af",                // Lesticom royal blue
        "background": "#fdfaf5",             // warm cream background
        "inverse-surface": "#0c1929",
        "on-primary-fixed": "#dbeafe",
        "secondary": "#1e40af",              // royal blue
        "accent": "#d97706",                 // African gold / ochre
        "inverse-on-surface": "#f1f5f9",
        "on-tertiary-fixed-variant": "#475569",
        "on-surface-variant": "#475569",
        "error-container": "#fecaca",
        "on-primary": "#ffffff",
        "outline": "#64748b",
        "surface-container": "#f5efe6",
        "tertiary-fixed": "#e2e8f0",
        "surface-container-high": "#ebe4d6",
        "on-surface": "#0c1929",
        "on-primary-fixed-variant": "#1e40af",
        "on-secondary": "#ffffff",
        "error": "#dc2626",
        "tertiary-fixed-dim": "#cbd5e1",
        "surface-container-low": "#f9f3e9",
        "tertiary": "#0c1929",
        "on-error-container": "#7f1d1d",
        "on-background": "#0c1929",
        "on-tertiary-container": "#64748b",
        "secondary-container": "#dbeafe",
        "outline-variant": "#cbd5e1",
        "secondary-fixed-dim": "#1d4ed8",
        "on-primary-container": "#1e3a8a",
        "primary-fixed": "#dbeafe",
        "surface-tint": "#1e40af",
        "on-tertiary": "#ffffff",
        "on-secondary-fixed-variant": "#0c1e36",
        "primary-fixed-dim": "#93c5fd",
        "secondary-fixed": "#2563eb",        // hover blue

        // Custom Lesticom brand tokens
        "brand-blue": "#1e40af",
        "brand-blue-light": "#3b82f6",
        "brand-blue-dark": "#1e3a8a",
        "brand-gold": "#d97706",
        "brand-gold-light": "#f59e0b",
        "brand-cream": "#fdfaf5",
        "brand-charcoal": "#0c1929",
        "brand-indigo": "#312e81"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "stack-md": "24px",
        "stack-lg": "48px",
        "margin-desktop": "48px",
        "gutter": "24px",
        "unit": "8px",
        "stack-sm": "12px",
        "margin-mobile": "16px",
        "container-max-width": "1280px"
      },
      fontFamily: {
        "display-lg-mobile": ["Montserrat", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "label-sm": ["Inter", "sans-serif"],
        "label-lg": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "headline-md": ["Montserrat", "sans-serif"],
        "headline-lg": ["Montserrat", "sans-serif"],
        "display-lg": ["Montserrat", "sans-serif"]
      },
      fontSize: {
        "display-lg-mobile": ["40px", {"lineHeight": "48px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
        "label-sm": ["12px", {"lineHeight": "16px", "fontWeight": "500"}],
        "label-lg": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600"}],
        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
        "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
        "headline-lg": ["32px", {"lineHeight": "40px", "fontWeight": "700"}],
        "display-lg": ["64px", {"lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
      },
      backgroundImage: {
        // Subtle African-inspired geometric pattern (data URI)
        "african-pattern": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' stroke='%231e40af' stroke-opacity='0.08' stroke-width='1'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z'/%3E%3Cpath d='M30 10L50 30L30 50L10 30Z'/%3E%3Ccircle cx='30' cy='30' r='8'/%3E%3C/g%3E%3C/svg%3E\")",
        "african-pattern-gold": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' stroke='%23d97706' stroke-opacity='0.12' stroke-width='1'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z'/%3E%3Cpath d='M30 10L50 30L30 50L10 30Z'/%3E%3Ccircle cx='30' cy='30' r='8'/%3E%3C/g%3E%3C/svg%3E\")"
      }
    },
  },
  plugins: [],
};
