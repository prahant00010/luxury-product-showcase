# Lumière Privée – Haute Parfumerie Showcase

Lumière Privée is a frontend-only product showcase for a fictional luxury perfume house based between Grasse and Paris. The experience focuses on considered typography, restrained colour, and a calm, editorial layout that feels closer to a design studio than an online shop.

The project demonstrates a premium landing page, a curated product listing, and detailed product views with complete fragrance specifications – all powered by static data and modern React tooling.

## Tech stack

- **React (JavaScript)**: Component-based UI, client-side routing, and state for filters.
- **Vite**: Fast local development and lean production builds.
- **React Router**: URL-based navigation for listing and product detail views, including graceful handling of invalid IDs.
- **Vanilla CSS**: A small, purpose-built design system (spacing scale, typography, colour tokens) instead of a generic UI library, to keep the visual language specific to the brand.

JavaScript was chosen over TypeScript here to keep the footprint light and keep the focus on layout, composition, and visual polish.

## Getting started

From the project root:

```bash
npm install
npm run dev
```

Then open the printed localhost URL (typically `http://localhost:5173`) in your browser.

## Brand & design decisions

- **Brand concept**: Lumière Privée is a “quiet luxury” perfume house for clients who prefer understatement to logos – think small-batch extraits, Paris apartments, and gallery evenings. Copy across the site leans into architecture, light, and tactility rather than generic fragrance adjectives.
- **Typography**: 
  - Headings use `Playfair Display` to evoke classic editorial mastheads.
  - Body copy uses `Inter` for clarity and legibility on dense paragraphs.
  - A strict hierarchy is enforced through utility classes such as `heading--xl`, `heading--md`, `body`, and `body--muted`.
- **Colour palette** (defined as CSS variables in `src/styles.css`):
  - Background: warm neutral parchment (`--color-bg`)
  - Surface: clean white cards (`--color-surface`)
  - Ink: deep espresso (`--color-ink`)
  - Muted: soft taupe for secondary text (`--color-muted`)
  - Accent: brushed gold (`--color-accent`) used sparingly
  - The palette is intentionally tight to avoid “template” gradients and keep the feel modern and quiet.
- **Spacing scale**:
  - A simple, reusable scale (`--space-1` to `--space-8`) drives padding, gaps, and margins across sections, cards, and grids.
  - Layout classes (`section`, `page`, `hero`, `product-grid`) consume this scale for rhythmic, predictable spacing.
- **Layout**:
  - Landing hero uses a two-column grid: copy left, imagery right on desktop, stacking naturally on mobile.
  - Product listing uses a responsive CSS grid: 3–4 columns on desktop, 2 on tablet, 1 on mobile.
  - Product detail view uses a split layout: large image on the left, text and specs on the right; this collapses to a vertical stack on smaller screens.
- **Motion**:
  - Hover states on cards and buttons use 200–280ms ease transitions.
  - No bouncy or elastic easing – motion is subtle and used strictly for feedback (e.g. card lift, image zoom).
- **Imagery**:
  - All product imagery uses warm, softly lit perfume bottle photography with consistent tones to avoid a “moodboard” feel.
  - Images are displayed with `object-fit: cover` and fixed aspect ratios to prevent stretching.

## Feature overview

- **Landing page**
  - Hero section with brand mark, tagline, and clear CTA into the collection.
  - Brand introduction copy tailored specifically to Lumière Privée (restraint, architecture, small batches).
  - Featured products section presenting 3 key extraits with a more editorial layout.

- **Product listing**
  - Grid of product cards with image, name, short description, price, and “View details”.
  - Responsive column behaviour: 3–4 columns on desktop, 2 on tablets, 1 on mobile.
  - Consistent image dimensions via fixed aspect ratios and `object-fit: cover`.
  - Optional quality-of-life features:
    - Mood-based filter (daylight / evening / signature).
    - Sorting by curator’s recommendation or by price.

- **Product detail view**
  - Large product image with a text column showing:
    - Full description.
    - Price.
    - Complete specs: top / heart / base notes, size, longevity, and recommended occasions.
  - Layout gracefully stacks on mobile while preserving emphasis on the imagery.
  - Invalid product IDs are caught and render a soft error card with copy and navigation back to the collection or home.

## Code structure

- `src/main.jsx` – React entry; sets up the router and global styles.
- `src/App.jsx` – Top-level routes and shell layout (including a 404-style route).
- `src/components/Layout.jsx` – Header, navigation, and footer framing the experience.
- `src/components/ProductCard.jsx` – Reusable product card used in the listing grid.
- `src/components/FeaturedProducts.jsx` – Featured products band with a more editorial card treatment.
- `src/components/FilterBar.jsx` – Filter and sort controls for the listing.
- `src/components/ProductSpecs.jsx` – Structured specs block for the detail view.
- `src/pages/LandingPage.jsx` – Brand hero and featured products.
- `src/pages/ProductListingPage.jsx` – Filterable, responsive product grid.
- `src/pages/ProductDetailPage.jsx` – Full product detail with specs and error handling.
- `src/data/products.js` – Static, realistic product data for the perfume line.
- `src/styles.css` – All tokens, layout primitives, and component styles.

## Known limitations & trade-offs

- **No backend / persistence**: The entire experience is static and read-only. There is no cart, checkout, or account system – intentionally, to keep focus on presentation and UI craft.
- **Routing strategy**: Uses client-side routing (React Router) and expects to be served via Vite or a static host that supports SPA fallbacks. Direct navigation to deep links may require a catch-all route configuration on some hosts.
- **Accessibility**: Basic semantics and focus flows are handled, but a full accessibility pass (aria attributes, focus outlines on every control, colour contrast audits) would be a next step for production.
- **Limited theming**: The palette and typography are opinionated for this brand. Multi-brand or dark-mode support is not implemented, but the CSS token approach would support it with additional work.

