# SecureVault IC

## Current State
- Fresh project with an empty backend (no Motoko actors defined yet) and a minimal React/TypeScript frontend shell.
- No pages, sections, or components exist beyond scaffolding.

## Requested Changes (Diff)

### Add
- Full single-page marketing website with 10 sections (Hero, Who It's For, Key Features, How It Works, Why Internet Computer, Trust Badges, Testimonials, Pricing, Request Access Form, Footer).
- Animated hero background (particle/grid canvas effect).
- Smooth scroll entrance animations via Intersection Observer.
- Hover effects on cards, buttons, and interactive elements.
- Contact/access request form that stores submissions in the backend (organization name, contact name, email, org type, message).
- Backend actor with a `submitAccessRequest` method to persist form submissions, and a `getAccessRequests` query for admin review.

### Modify
- `index.css` — apply deep navy/electric blue/gold design tokens and Inter font.

### Remove
- Nothing (fresh project).

## Implementation Plan
1. Generate Motoko backend with `AccessRequest` record type and `submitAccessRequest`/`getAccessRequests` functions.
2. Build all 10 frontend sections as React components using the brand palette and design system.
3. Wire the contact form to the backend `submitAccessRequest` actor call.
4. Add canvas-based animated background to the hero section.
5. Implement Intersection Observer scroll animations for all major sections.
6. Ensure full responsiveness across mobile, tablet, and desktop breakpoints.
