# Kauaʻi Drip website refresh

This is a static, deployment-ready preview for Kauaʻi Drip. It uses semantic HTML, organized CSS, and minimal JavaScript. Appointments and private intake are routed to Jane. No forms, analytics, advertising trackers, cookies, passwords, API keys, or patient information are included.

## Folder structure

```text
dist/
├── index.html
├── services.html
├── about.html
├── faq.html
├── visit.html
├── privacy.html
├── hipaa.html
├── terms.html
├── medical-disclaimer.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── _headers
└── assets/
    ├── css/styles.css
    ├── fonts/black-diamond-subset.otf
    ├── images/
    └── js/script.js
```

Also review `CLIENT_APPROVAL_NEEDED.md` and `PRELAUNCH_TESTING_CHECKLIST.md`.

## Preview locally

```bash
python3 -m http.server 8080 --directory dist
```

Open `http://localhost:8080/`.

## GitHub Pages preview

For the simplest client preview, upload the **contents inside `dist`** to the repository root. `index.html`, `404.html`, `_headers`, `robots.txt`, `sitemap.xml`, and `assets` should appear directly on the repository’s main page.

In **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save. The preview will be at `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.

The canonical metadata intentionally uses the final `https://www.kauaidrip.com/` domain. Keep a temporary sample private when possible or turn off Pages after review.

## Cloudflare Pages launch

1. Complete the approval list and prelaunch checklist.
2. Connect this repository to Cloudflare Pages or use Direct Upload.
3. With this project structure, use no build command and set output directory to `dist`.
4. Add the root and `www` domains, choose one preferred hostname, and redirect the other.
5. Preserve MX, SPF, DKIM, and DMARC records before changing DNS.
6. Back up Squarespace and DNS before cutover.
7. Verify the site, Jane links, policies, email, and HTTPS before disconnecting Squarespace.
8. Submit the sitemap in Google Search Console after launch.

## Updating content

- Homepage wording and links: `dist/index.html`
- Service directory: `dist/services.html`
- Ashley's story: `dist/about.html`
- Questions and answers: `dist/faq.html`
- Directions, contact and group services: `dist/visit.html`
- Draft policies: `dist/privacy.html`, `dist/hipaa.html`, `dist/terms.html`, and `dist/medical-disclaimer.html`
- Design: `dist/assets/css/styles.css`
- Mobile navigation: `dist/assets/js/script.js`
- SEO files: `dist/robots.txt` and `dist/sitemap.xml`
- Cloudflare security headers: `dist/_headers`

Optimize new photography as WebP and use descriptive filenames and alt text.

## Privacy and assets

Google Maps and Jane are third-party services. The site tells visitors not to send medical or sensitive information by ordinary email or text. If the map embed is not approved, remove the iframe and keep the directions link.

The design uses Noto Serif Display and DM Sans through Google Fonts. The supplied Black Diamond webfont is reserved for the “Kauaʻi Drip” hero wordmark so it matches the client’s existing script identity; the full supplied logo appears at the far right of the navigation and in the footer. Confirm all font rights, continued use of the external Google font service, and publication permission for the logo and photographs before launch.
