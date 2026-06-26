# Hero copy rewrite (section 1 of N)

Keep the current hero layout, fonts, colors, and the journey panel on the right exactly as they are. Only the words in `src/components/Hero.tsx` change. We'll move section by section after this one.

## Positioning shift

- Today: "AI navigators for cross-border medical care" — leads with the tech.
- New: lead with the **Patient Navigator** (a real person who guides you), and frame AI as the quiet engine behind them. Talk to the patient, not to investors.

## Proposed new wording

**Headline** (same three-line rhythm, same italic accent on the last line):

> Patient Navigators
> for *cross-border*
> *medical care.*

**Subhead** (replaces the current paragraph, similar length):

> A real person guides your fertility or aesthetic treatment abroad, from the first call to your final follow-up. AI does the heavy lifting in the background so nothing slips, your navigator does the thinking, listening, and deciding with you.

**Buttons** (unchanged):
- Primary: `Book a 30-min call →` → `/book-call`
- Secondary: `How it works` → `/how-it-works`

## Alternates to pick from

If you'd rather a different angle, say which line to swap and I'll redraft only that line:

- Headline alt A: "A Patient Navigator / for your treatment / *abroad.*"
- Headline alt B: "Your Patient Navigator / for *cross-border* / *medical care.*"
- Subhead alt (shorter): "One person guides your treatment abroad from first call to final follow-up. AI handles the paperwork, your navigator handles you."

## Files touched

- `src/components/Hero.tsx` — replace headline `<h1>` text and the `<p>` subhead only. No structural, style, or import changes.

## SEO follow-up (do at the end, not now)

Once the on-page headline changes, the homepage `<title>` and `og:title` in `src/routes/index.tsx` should echo the new "Patient Navigators" language so social shares match. I'll bundle that with the last section's rewrite so we only touch metadata once.

## Next sections (queued, not done yet)

After you approve and I ship the hero copy, we move to: System section → Founder quote → Field Notes. Same pattern each time: you tell me the angle, I propose copy, you approve.

---

**Approve to ship the hero rewrite above, or tell me which line to swap for an alternate.**