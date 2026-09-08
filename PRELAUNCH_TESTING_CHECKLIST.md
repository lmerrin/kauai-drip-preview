# Kauaʻi Drip prelaunch testing checklist

## Client and content approval

- [ ] Ashley has approved the hero wording, service descriptions, biography, address, final hours, and mobile-visit language.
- [ ] Ashley has approved the three Google-review excerpts, abbreviated attribution, and republication permission.
- [ ] Ashley has approved all photography and confirmed permission to use it online.
- [ ] Logo and font web-use rights are confirmed.
- [ ] Current clinic policies and legally reviewed HIPAA/privacy content will remain available after the domain cutover.
- [ ] The four draft policy pages have received appropriate legal/compliance review and approved effective dates.
- [ ] Google Maps embed and its third-party privacy implications are approved.

## Links and booking

- [ ] Every navigation link reaches the correct section by mouse and keyboard.
- [ ] Every Jane link opens the correct appointment category in a new tab.
- [ ] Gift-card and package-purchase links open the correct Jane screens.
- [ ] Phone links call `+1 808-470-7970` on supported devices.
- [ ] The SMS link opens a message to `+1 808-470-7970` on supported devices.
- [ ] The email link addresses `ashley@kauaidrip.com`.
- [ ] Google directions opens the correct building in Kapaʻa.
- [ ] Instagram, Google reviews, policy, and terms links are live and correct.
- [ ] No button or text link has an empty, placeholder, or `#`-only destination.

## Responsive and visual review

- [ ] Review at 320 px, 375 px, 768 px, 1024 px, 1440 px, and a large desktop width.
- [ ] Confirm the hero photo crop keeps the clinic environment legible on phone, tablet, and desktop.
- [ ] Confirm the Black Diamond “Kauaʻi Drip” hero wordmark, Noto Serif Display headings, and DM Sans body text display correctly, including the ʻokina.
- [ ] Confirm no photo is unintentionally repeated.
- [ ] Check text contrast, focus outlines, and hover states against their backgrounds.
- [ ] Confirm the four highlight cards, expanded service grid, FAQ accordions, event section, and three process cards remain balanced at every breakpoint.

## Accessibility and interaction

- [ ] Navigate the complete site using only Tab, Shift+Tab, Enter, Space, and Escape.
- [ ] Confirm the mobile menu announces its expanded state and closes with Escape.
- [ ] Confirm the skip link appears on keyboard focus and reaches main content.
- [ ] Run an automated accessibility check and resolve critical or serious findings.
- [ ] Confirm all meaningful images have accurate alt text and decorative graphics remain hidden from assistive technology.
- [ ] Test at 200% browser zoom without losing content or controls.
- [ ] Confirm reduced-motion preferences are respected.

## SEO and technical

- [ ] Confirm final canonical URLs use the selected preferred hostname.
- [ ] Confirm the page title and meta description are accurate and unique.
- [ ] Confirm every services, about, FAQ, visit, and policy page has accurate canonical and social metadata.
- [ ] Validate Open Graph and social-sharing metadata after the final domain is live.
- [ ] Replace the temporary portrait-oriented Open Graph image with an approved 1200 × 630 social card if desired.
- [ ] Validate the `MedicalClinic` structured data in a schema testing tool.
- [ ] Confirm `robots.txt` loads and references the live sitemap.
- [ ] Confirm `sitemap.xml` loads, validates, and contains every approved indexable page.
- [ ] Confirm the branded 404 page is returned with an actual HTTP 404 status.
- [ ] Confirm the favicon appears in supported browsers.
- [ ] Confirm HTTPS works without mixed-content warnings.
- [ ] Confirm Cloudflare applies every header in `_headers`.
- [ ] Run performance testing on mobile and address material regressions.

## Privacy, security, and launch

- [ ] Confirm the source contains no private information, passwords, tokens, or API keys.
- [ ] Confirm there are no analytics, advertising trackers, consent banners, or unapproved cookies.
- [ ] Confirm no form requests medical, financial, or other sensitive information.
- [ ] Verify the visible notice directs sensitive information to Jane rather than email or SMS.
- [ ] Preserve and verify MX, SPF, DKIM, and DMARC records before changing DNS.
- [ ] Back up the current Squarespace site and DNS configuration before cutover.
- [ ] Keep the old site available until the new deployment, booking flow, policy pages, and email are verified.
- [ ] Submit the sitemap and request indexing after launch.
