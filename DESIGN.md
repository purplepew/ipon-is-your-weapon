# Design System Specification: High-End Tactical Commerce

## 1. Overview & Creative North Star
**The Creative North Star: "The Precision Armory"**

This design system moves away from the bright, cluttered density of traditional e-commerce (like the MegaMart reference) and pivots toward a high-stakes, editorial aesthetic. It is built on the pillars of **Security, Authority, and Mechanical Precision**. 

While the layout structure borrows the high-conversion efficiency of a large-scale marketplace, the visual execution is inspired by high-end horology and premium automotive interfaces. We break the "template" look through:
*   **Intentional Asymmetry:** Hero sections use off-center typography and overlapping product photography to create a sense of depth and motion.
*   **Tonal Depth:** Replacing high-contrast lines with stacked "Tactical Layers" of charcoal and deep gray.
*   **High-Contrast Accents:** Using Tactical Orange (`primary`) and Crimson (`tertiary`) sparingly against the void-like background to draw the eye to critical conversion points.

---

## 2. Colors
Our palette is rooted in low-light environments, prioritizing readability and "stealth" elegance.

### The "No-Line" Rule
To achieve a premium feel, **1px solid borders are prohibited** for sectioning. Boundaries must be defined solely through background color shifts. For instance, a product grid utilizing `surface-container-low` should sit directly atop a `surface` background. The shift in hex value provides a cleaner, more sophisticated separation than a mechanical line.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the surface-container tiers to create nested depth:
*   **Base Layer:** `surface` (#131313) – The primary canvas.
*   **Section Layer:** `surface-container-low` (#1C1B1B) – Large content blocks.
*   **Interactive Layer:** `surface-container-high` (#2A2A2A) – Cards and hover states.
*   **Action Layer:** `surface-bright` (#393939) – Popovers and modals.

### The "Glass & Gradient" Rule
Floating elements (like navigation bars or hovering "Quick View" buttons) should utilize **Glassmorphism**. Apply `surface-container` colors at 80% opacity with a `20px` backdrop-blur. 
*   **Signature Textures:** For primary CTAs, use a subtle linear gradient from `primary` (#FFB5A0) to `primary-container` (#CB3500) at 135 degrees. This adds a "metallic" soul to the button that flat color cannot replicate.

---

## 3. Typography
The typography strategy balances high-tech precision with human-centric readability.

*   **Display & Headlines (Space Grotesk):** This typeface offers a clean, geometric, and "engineered" feel. Use `display-lg` for hero statements with tight letter-spacing (-0.02em) to convey bold authority.
*   **Body & Labels (Manrope):** A highly legible sans-serif that balances the aggressive headlines. Its modern proportions ensure that technical specifications and product descriptions feel accessible and professional.
*   **The Hierarchy of Trust:** Use `headline-sm` for product titles to maintain weight, while using `label-md` in `on-surface-variant` (#E4BEB4) for technical specs (e.g., "Caliber," "Weight," "Capacity").
*   **Responsive Typography Guardrail:** Keep the existing responsive breakpoint behavior and fluid scaling in the theme unless a task explicitly asks to change it. Design tasks should improve typographic tone, hierarchy, spacing, and readability without redefining the breakpoint system.

---

## 4. Elevation & Depth
In this system, depth is "baked-in" through tonal layering rather than artificial lighting.

*   **The Layering Principle:** Place a `surface-container-lowest` (#0E0E0E) card on a `surface-container-low` section to create a "recessed" look, or a `surface-container-highest` card to create a "lifted" look.
*   **Ambient Shadows:** For floating modals or "floating" product images, use extra-diffused shadows. 
    *   *Spec:* `0px 24px 48px rgba(0, 0, 0, 0.4)`. 
    *   The shadow should never be pure black; it should feel like a dark atmospheric glow.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility (e.g., input focus), use the `outline-variant` token (#5B4039) at **20% opacity**. Never use 100% opaque borders.

---

## 5. Components

### Buttons
*   **Primary:** Gradient of `primary` to `primary-container`. `md` (0.375rem) roundedness. All-caps for `label-md` to instill a tactical vibe.
*   **Secondary:** `surface-container-highest` background with `on-surface` text. No border.
*   **Tertiary:** No background. `primary` text color with a high-contrast hover state that reveals a 10% opacity `primary` fill.

### Cards & Lists
*   **The "No Divider" Rule:** Forbid the use of divider lines in lists. Use `1.5` (0.375rem) spacing or a subtle shift from `surface-container-low` to `surface-container-high` to separate items.
*   **Product Cards:** Use `surface-container-low`. On hover, transition to `surface-container-highest` and apply the "Ambient Shadow."

### Input Fields
*   **Field Style:** Solid fills using `surface-container-highest`. 
*   **States:** Underline active state with a 2px `primary` bar rather than a full box stroke. This maintains the "Precision Armory" look.

### Additional Signature Components
*   **Inventory Status Chip:** A semi-transparent `tertiary-container` (#C93626) pill with a "breathing" animation on the dot to indicate live stock.
*   **Technical Spec Grid:** A tight, 2-column grid within product pages using `label-sm` for keys and `body-sm` bold for values, separated by vertical whitespace only.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts in the Hero section to mimic high-end editorial magazines.
*   **Do** leverage "Negative Space" as a luxury feature. High-end products need room to breathe.
*   **Do** use `primary` (#FFB5A0) exclusively for "Money" actions (Add to Cart, Checkout).
*   **Do** keep the current responsive typography scale intact and refine it in place when improving the theme.

### Don't
*   **Don't** use 1px borders to separate content sections. It breaks the immersive dark theme.
*   **Don't** use pure white (#FFFFFF) for text. Use `on-surface` (#E5E2E1) to reduce eye strain and maintain the sophisticated atmosphere.
*   **Don't** use standard "Drop Shadows." Use tonal layering first; if shadows are needed, keep them diffused and atmospheric.
*   **Don't** use rounded corners above `xl` (0.75rem). This is a tactical system; it should feel sharp and intentional, not "bubbly" or friendly.
*   **Don't** alter typography breakpoints or responsiveness as part of a general design pass unless the request specifically calls for it.