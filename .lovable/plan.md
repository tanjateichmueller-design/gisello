## Goal

Reorganize `src/routes/index.tsx` so the landing page reads like TMTC's home (proven funnel: hero → treatments → trust → journey → savings → comparison → aftercare/vault → doctors → hospitals → press → testimonials → blog → footer), but in Gisello's voice (Patient Navigator, AI matching, multi-corridor: Georgia, Turkey, Spain, Poland, UAE) and Gisello's existing visual system (navy, ochre, EB Garamond + Inter Tight, no em dashes, "Patient Navigator" terminology, slashed-circle logo).

Keep what already works. Discard the bento/system/field-notes layout that drifted away from the TMTC pattern.

## New section order on `/`

1. **Hero** (keep current `Hero.tsx`)
   - Background slideshow already implemented.
   - Headline unchanged: "World-class care. Zero wait. A patient navigator by your side."
   - CTA: Book a 30 minute call. Scroll hint to treatments.

2. **Treatments grid** (keep current `TreatmentsSection.tsx`)
   - 4 cards: Fertility, Orthopedics, Dental, Wellness.
   - Section heading already aligned with TMTC.

3. **Trusted by / Press strip** (new `PressStrip.tsx`)
   - Thin band of press / partner logos placeholders ("As seen in"). Grayscale, monochrome on white.
   - If no real press yet, use placeholder slot labels the user can swap.

4. **Patient Journey** (keep current `PatientJourneySection.tsx`)
   - Before / During / After, Day 0 → Week 8+.
   - Already matches TMTC's "Your journey…" beat.

5. **Savings banner** (new `SavingsBanner.tsx`)
   - Full-width navy band: "Save up to 60% vs. UK/US private care."
   - One-line supporting copy, Book a call CTA.
   - Mirrors TMTC's "Save up to 70%" insert.

6. **Cost comparison table** (new `CostComparisonSection.tsx`)
   - Heading: "World-class care, without the price tag."
   - Rows: Hip Replacement, Knee Replacement, 3 Dental Implants, IVF (own eggs), IVF (donor eggs), Full-Body Health Check.
   - Columns: Treatment | UK/EU private price | Gisello partner price (from £/€).
   - Footnote: indicative, final price after Navigator consultation.

7. **Patient Vault teaser** (new `VaultTeaserSection.tsx`)
   - Replaces TMTC's "Aftercare centre" beat with Gisello's differentiator: the encrypted Patient Vault holding records across borders.
   - 3 icon points: Records you own, GDPR/UK-GDPR/PDPL aligned, Shared with your Navigator only.
   - Link: Learn how it works → `/how-it-works`.

8. **Meet your Patient Navigators** (new `NavigatorsSection.tsx`)
   - Mirror TMTC's "Meet our doctors" but for human Navigators, not doctors (Gisello does not employ doctors).
   - 3 to 6 portrait cards, name + languages + corridors covered (e.g. "Tanja, DE/EN, Germany ↔ Georgia").
   - Placeholder data, easy to edit later.

9. **Partner clinics & corridors** (new `PartnerClinicsSection.tsx`)
   - Heading: "Vetted clinics across our corridors."
   - Logo wall placeholder + flag chips for Georgia, Turkey, Spain, Poland, UAE.

10. **Testimonials** (reuse pattern, new `TestimonialsCarousel.tsx`)
    - 3 to 5 quote cards with patient first name + origin country flag.
    - Use existing testimonial image asset.

11. **Field notes / blog teaser** (keep or trim current `FieldNotes.tsx`)
    - 3 latest posts, link to a future `/journal` index.

12. **Footer CTA band + Footer**
    - Keep existing `Footer.tsx` with company legal name and socials.
    - Add a final "Talk to a Patient Navigator" CTA strip above the footer (`FinalCTA.tsx`).

## Files to add

- `src/components/PressStrip.tsx`
- `src/components/SavingsBanner.tsx`
- `src/components/CostComparisonSection.tsx`
- `src/components/VaultTeaserSection.tsx`
- `src/components/NavigatorsSection.tsx`
- `src/components/PartnerClinicsSection.tsx`
- `src/components/TestimonialsCarousel.tsx`
- `src/components/FinalCTA.tsx`

## Files to update

- `src/routes/index.tsx`: replace current composition with the 12-section flow above. Remove imports of `SystemSection`, `JourneyPanel`, `FounderQuoteBlock` from this route (keep files until confirmed unused elsewhere).

## Files to remove (after confirming nothing else imports them)

- `src/components/SystemSection.tsx`
- `src/components/JourneyPanel.tsx`
- `src/components/FounderQuoteBlock.tsx`

## Design constraints (already locked)

- Colors: navy `#0B1B3F`, ochre accent, paper white background.
- Type: EB Garamond display, Inter Tight body, JetBrains Mono for small labels.
- No em dashes in copy. Use "Patient Navigator", never "Patient Manager".
- Logo: slashed circle from `CompanionMark.tsx`.
- No rounded-2xl plastic cards or generic SaaS purple gradients.

## Out of scope

- New routes for Doctors / Hospitals / Press detail pages.
- Real testimonial / press / clinic data (placeholders for now, user fills later).
- Backend, forms wiring, CMS, i18n.

## Open question for the user

Two before I build:

1. **Patient Navigators section**: keep it (recommended, it's your real differentiator vs TMTC's doctor roster) or skip until you have real Navigator bios?
2. **Cost comparison currency**: lead with **£ GBP** (TMTC's choice, UK-targeted) or **€ EUR** (your DE/EU pilot focus)?
