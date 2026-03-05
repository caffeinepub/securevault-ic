# SecureVault IC

## Current State
- Full landing page with 11 sections: Hero, Sectors, Features, How It Works, Why IC, Trust Badges, Testimonials, Pricing, About, Contact, Footer.
- Backend has `submitAccessRequest` and `getAccessRequests` endpoints.
- Pricing section has three tiers: Starter ($499/mo), Professional ($1,499/mo), Government (Custom).
- CTA buttons on all three pricing cards currently scroll to the Contact section — no payment flow.

## Requested Changes (Diff)

### Add
- Stripe payment integration via the Caffeine Stripe component.
- Backend Stripe checkout session creation for Starter and Professional plans (fixed monthly prices).
- Government plan CTA continues to scroll to Contact (custom pricing, no direct checkout).
- Frontend wiring: Starter and Professional CTA buttons trigger Stripe checkout; Government CTA scrolls to Contact as before.
- Stripe publishable key stored in frontend env config.

### Modify
- `PricingSection.tsx`: Replace `onClick={scrollToContact}` for Starter and Professional with Stripe checkout initiation logic. Keep Government CTA as scroll-to-contact.
- Backend `main.mo`: Add Stripe checkout session creation endpoint for the two paid plans.

### Remove
- Nothing removed.

## Implementation Plan
1. Select Stripe Caffeine component.
2. Regenerate backend with Stripe checkout session creation for Starter ($499/mo) and Professional ($1,499/mo) plans.
3. Update `PricingSection.tsx` to call the backend checkout endpoint for Starter and Professional, redirect user to Stripe checkout URL, keep Government CTA unchanged.
4. Store Stripe publishable key (`pk_test_51T7DPG4HckXhQMMg6n88tsO5IWfMonuusq29Pywla7cGfplb6OF2PILOd6M1fgu8y3pZD6kTxbF24fhkrGvGzqW6008fdQNimD`) in frontend environment config.
5. Deploy.
