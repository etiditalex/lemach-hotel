# Lemach Hotel Website

This repository contains the static website for **Lemach Hotel** — *Coastal calm, Swahili warmth*.

## Structure

- `index.html` — Home page
- `about.html` — About us
- `menu.html` — The Lemach Kitchen menu
- `blog.html` — Blog index, with sample posts in `/blog/`
- `contact.html` — Contact page with form and WhatsApp quick link
- `book.html` — Reservation page (WhatsApp & email submission)
- `partials/` — Shared header and footer
- `assets/css/styles.css` — Styles (brand palette, responsive design)
- `assets/js/main.js` — Shared JS (header/footer injection, mobile nav)
- `images/` — Placeholder images (replace with real photos)
- `menu.pdf` — (optional) restaurant menu PDF

## How to Edit

1. **Contact Info** — Replace all `+254700000000` numbers with your real WhatsApp line.  
   Update `stay@lemachhotel.co.ke` if needed.
2. **Images** — Replace placeholder images in `/images/` with actual hotel, rooms, and restaurant photos.
3. **Map** — Insert your Google Maps link/embed in `about.html` and `contact.html`.
4. **Menu** — Upload `menu.pdf` (or remove the link in `menu.html`).
5. **SEO** — Adjust `og:image`, descriptions, and keywords in the `<head>` section of each page.

## Deployment

### GitHub Pages
1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Source: *Deploy from branch*, choose `main` and `/root`.
4. Site will be live at `https://<username>.github.io/lemach-hotel/`.

### Custom Domain
1. Add a file `CNAME` at repo root with your domain (e.g., `www.lemachhotel.co.ke`).
2. Update your DNS with a CNAME pointing to `<username>.github.io`.
3. Enable HTTPS in GitHub Pages settings.

## Notes

- This is a **static HTML site**. Forms are implemented via `mailto:` and WhatsApp links.
- For advanced functionality (dynamic availability, payments, CMS), you’ll need a backend or third‑party integrations.
- The design uses **Google Fonts (DM Serif Display & Inter)**.

---

© Lemach Hotel. All rights reserved.
