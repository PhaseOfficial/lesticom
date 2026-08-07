---
name: Java Haus
colors:
  surface: '#fcf9f4'
  surface-dim: '#dcdad5'
  surface-bright: '#fcf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ee'
  surface-container: '#f0ede8'
  surface-container-high: '#ebe8e3'
  surface-container-highest: '#e5e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#56423c'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f3f0eb'
  outline: '#8a726b'
  outline-variant: '#ddc0b8'
  surface-tint: '#a04022'
  primary: '#9f3f21'
  on-primary: '#ffffff'
  primary-container: '#bf5737'
  on-primary-container: '#ffffff'
  inverse-primary: '#ffb59f'
  secondary: '#606049'
  on-secondary: '#ffffff'
  secondary-container: '#e3e1c5'
  on-secondary-container: '#64644d'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cca730'
  on-tertiary-container: '#4f3d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb59f'
  on-primary-fixed: '#3a0a00'
  on-primary-fixed-variant: '#80290c'
  secondary-fixed: '#e6e4c8'
  secondary-fixed-dim: '#c9c8ad'
  on-secondary-fixed: '#1c1c0b'
  on-secondary-fixed-variant: '#484833'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#fcf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e5e2dd'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  subheading:
    fontFamily: Bricolage Grotesque
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  unit: 8px
  margin-mobile: 20px
  margin-desktop: 64px
  gutter: 24px
  patchwork-gap: 40px
---

## Brand & Style
The design system embodies the "Afrofuturism meets handmade African streetwear" aesthetic. It targets a global audience of culturally conscious fashion enthusiasts who value artisanal heritage and futuristic silhouettes. The UI avoids sterile minimalism in favor of a textured, "hand-stitched" digital experience.

The visual style is **Tactile & Expressive**, blending organic textures (mud cloth, woven fibers) with sharp, geometric Afrofuturist motifs. Key brand characteristics include:
- **Earthy Luxury:** A sophisticated interpretation of heritage colors.
- **Handmade Precision:** Imperfect edges, torn-paper transitions, and hand-drawn doodles contrasted against high-fashion photography.
- **Tribal Geometry:** Systematic use of repetitive patterns and structural borders inspired by West African textiles.

## Colors
The palette is rooted in the earth but elevated for a premium luxury market. 

- **Primary (Terracotta/Burnt Orange):** Used for primary actions and energetic focal points.
- **Secondary (Olive/Deep Brown):** Used for structural elements and grounding the vibrant accents.
- **Tertiary (Gold):** Reserved for high-luxury callouts, limited editions, and premium iconography.
- **Neutral (Cream/Off-White):** The "Sand" and "Cream" shades serve as the canvas, replacing pure white to maintain a warm, organic feel.
- **Matte Black:** Used for high-contrast text and "heavy" borders to provide a modern, streetwear edge.

## Typography
The typographic hierarchy creates a tension between classical editorial elegance and technical streetwear.

- **Headlines:** `Bodoni Moda` provides high-contrast, luxury editorial weight. It should be used for product names and major section titles.
- **Body Text:** `Hanken Grotesk` offers a clean, contemporary sans-serif balance that ensures readability for product descriptions.
- **Labels/Technical:** `Space Mono` is used for pricing, SKUs, and functional labels to lean into the Afrofuturist/tech aesthetic.
- **Handwritten Accents:** `Bricolage Grotesque` (at lighter weights or specific styles) or custom hand-drawn SVGs should be used for "doodle" annotations and organic notes throughout the layout.

## Layout & Spacing
The layout philosophy is **Patchwork & Asymmetrical**. Instead of a rigid grid, this design system uses "Stitched Sections" that can overlap or have intentionally uneven margins.

- **Grid:** Use a 12-column fluid grid for desktop, but allow "Hero" images to break the container or bleed off-edge.
- **Patchwork Model:** Group related content in "blocks" that resemble textile swatches. Use varying vertical rhythms to mimic the handmade nature of the brand.
- **Mobile:** Transition to a single-column stack with heavy top/bottom padding (40px+) to maintain the sense of "luxury space."

## Elevation & Depth
This design system avoids traditional shadows in favor of **Tonal Layering and Material Texture**.

- **Stacked Depth:** Use "Paper-on-Paper" layering. Elements are elevated by changing background colors (e.g., a Terracotta card on a Cream background) rather than using blurs.
- **Stitched Borders:** Instead of shadows, use 1px or 2px solid borders in `Matte Black` or `Deep Brown`. For a more "handmade" feel, use a dashed stroke style (the "Stitch") for secondary containers.
- **Torn Edges:** Use SVG masks on the top or bottom of section dividers to create a "torn paper" effect, adding physical depth to the digital scroll.

## Shapes
The shape language is **Sharp & Geometric**. 

- **Corners:** Use 0px border-radius for almost all components (Buttons, Images, Cards) to reflect the precision of woven patterns and futuristic architecture.
- **Tribal Motifs:** Integrate triangles, diamonds, and repetitive line patterns as decorative dividers or background watermarks.
- **Hand-drawn Accents:** Contrast the sharp geometry with "organic circles" or "scribble underlines" in a mustard yellow or rust red to highlight key conversion points.

## Components
- **Buttons:** Rectangular with 0px radius. Primary buttons use a `Matte Black` background with `Cream` text and a `Gold` 1px right/bottom "drop-border" (not a shadow).
- **Input Fields:** Bottom-border only, using a 2px `Deep Brown` stroke. Labels use the `Space Mono` font style.
- **Cards:** Product cards should use the "Patchwork" style—large imagery with minimal padding, with the price and name set in a high-contrast label bar at the bottom.
- **Chips/Tags:** Use a "stitched" look—dashed borders with `Space Mono` text.
- **Section Dividers:** Replace standard lines with "Mud Cloth" patterns or "Torn Paper" SVG edges.
- **Special Feature (The Stitch):** A recurring decorative element where two sections meet, featuring a zigzag or dashed line graphic to reinforce the "handmade" narrative.