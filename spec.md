# SecureVault IC

## Current State
The app is a multi-page enterprise document vault landing site. It has a Contact/Request Access form in `ContactSection.tsx` that collects name, email, company, sector, plan, and message. The form currently calls `actor.customLog(...)` to store the submission, but `customLog` is admin-only on the backend -- so anonymous visitors get an "Unauthorized" error and the form silently fails.

## Requested Changes (Diff)

### Add
- A public `submitAccessRequest(request: AccessRequest)` backend function that stores access requests in stable memory, callable by any user (no auth required).
- A `getAccessRequests()` admin-only query function that returns all stored access requests.
- An `AccessRequest` type with fields: name, email, company, sector, plan, message, timestamp.

### Modify
- `ContactSection.tsx`: replace the `actor.customLog(...)` call with `actor.submitAccessRequest({...})` so the form works for all visitors.

### Remove
- Nothing removed.

## Implementation Plan
1. Regenerate backend with the new `submitAccessRequest` (public, no auth) and `getAccessRequests` (admin-only query) functions, and the `AccessRequest` type.
2. Update `ContactSection.tsx` to call `actor.submitAccessRequest(...)` instead of `actor.customLog(...)`, mapping form fields to the new type.
