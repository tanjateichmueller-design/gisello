## New page: `/treatments/fertility-care`

Mirrors TMTC fertility-care page layout, fully rebranded in Gisello design language (white paper, EB Garamond display, ink/blue/ochre tokens, ochre underline accent under H2s, square corners, no rounded radii). All five user-specified treatments featured.

### Route & wiring
- Create `src/routes/treatments.fertility-care.tsx` (nested route under `/treatments/fertility-care`).
- Add `head()` with unique SEO title, meta description, canonical, og tags, og:image.
- Link each fertility card in `TreatmentsSection.tsx` (Fertility Care tile) to this route.
- Add the route to `sitemap[.]xml.ts`.

### Sections (top to bottom)

1. **Hero**
   - Full-bleed clinical image with dark-blue tint overlay; transparent NavBar/SubNav over it (same pattern as homepage Hero).
   - H1: "World-class fertility care, without the wait."
   - Sub: short Gisello-voice paragraph (Patient Navigator + AI matching to top fertility clinics abroad).
   - Primary CTA: "Book a 30 minute call" → `/book-call`. Secondary: "See treatments" (anchor to #treatments).

2. **Why Gisello** (4 value cards, replaces TMTC's "Why TMTC")
   - Patient Navigator-led care · AI-matched clinics · Save up to 60% · End-to-end coordination.
   - Square cards, mono eyebrow, EB Garamond title, ochre underline under section H2.

3. **Your Journey with Gisello** (8-step horizontal/numbered timeline)
   - Reuse the existing `PatientJourneySection` styling pattern but fertility-specific copy (intake → AI match → shortlist → virtual consults → travel → treatment → recovery → follow-up at home).

4. **Expert-Led Fertility Solutions** (treatment cards grid — the core of the request)
   Five cards, 3-up on desktop, square, hover-zoom image, ochre rule, "Learn more" link:
   - **IVF with Own Eggs** — In-vitro fertilisation using your own eggs and partner/donor sperm.
   - **IVF with Donor Eggs** — IVF cycle with carefully screened donor eggs, when own-egg IVF isn't the right path.
   - **Embryo Freezing** — Cryopreserve embryos after IVF for future transfers, fertility preservation, or family planning.
   - **Egg Freezing** — Preserve your fertility on your timeline; oocyte vitrification at accredited clinics.
   - **Genetic Testing (PGT-A / PGT-M)** — Pre-implantation genetic testing to screen embryos for chromosomal and inherited conditions.
   - **Surrogacy** — Coordinated gestational surrogacy in jurisdictions where it is legally regulated, with full legal and medical oversight.
   - (6 cards total — 3×2 grid.)
   - Each card links to `/book-call` for now (no deep treatment subpages in scope).

5. **Cost comparison strip**
   - Short intro line + 4-row table (Own-egg IVF, Donor-egg IVF, Egg Freezing, Embryo Freezing) with "Home country (private)", "Gisello partner clinic", "You save". Indicative copy; numbers as placeholders user can later override.

6. **Compliance band**
   - Quiet navy band: "Our partner clinics meet GDPR, UK GDPR, UAE PDPL and applicable ART regulation. Patient Navigator oversight on every case."

7. **Final CTA band**
   - Headline + "Book a 30 minute call" button, same hover-to-ochre style as Hero.

8. **Footer** (existing component).

### Design notes
- Reuse tokens from `src/styles.css` (no new colors). Section heading pattern matches `TreatmentsSection` (EB Garamond + ochre SVG underline).
- Square corners, no shadows beyond subtle paper-pure cards.
- Images: generate 6 fertility-relevant photojournalistic JPGs in `src/assets/` (own-egg lab, donor-egg consultation, embryologist freezing tank, egg-freezing patient consult, genetic-testing lab, surrogacy family). Reuse existing `treatment-fertility.jpg` for the hero.
- No em dashes anywhere (per project rule).
- "Patient Navigator" only — never "Patient Manager".

### Files to create
- `src/routes/treatments.fertility-care.tsx`
- `src/components/FertilityHero.tsx`
- `src/components/FertilityWhyGisello.tsx`
- `src/components/FertilityJourney.tsx`
- `src/components/FertilityTreatments.tsx`
- `src/components/FertilityCostStrip.tsx`
- `src/components/FertilityCTA.tsx`
- 6 generated images under `src/assets/fertility-*.jpg`

### Files to edit
- `src/components/TreatmentsSection.tsx` — wrap Fertility Care card in a `<Link to="/treatments/fertility-care">`.
- `src/routes/sitemap[.]xml.ts` — add the new URL.

### Out of scope
- Individual sub-pages per treatment (IVF own-egg page, etc.) — can be added in a later pass.
- Pricing numbers are placeholder copy; user to confirm real figures.
