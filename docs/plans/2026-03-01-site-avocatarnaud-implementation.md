# Site Caroline Arnaud - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a 5-page static responsive website for Caroline Arnaud, labor law attorney in Bordeaux.

**Architecture:** Pure HTML/CSS/JS, mobile-first responsive, no frameworks. Formspree for contact form. Google Fonts for typography. Google Maps embed for location.

**Tech Stack:** HTML5, CSS3 (flexbox/grid, custom properties, media queries), vanilla JS, Formspree, Google Fonts CDN

---

### Task 1: CSS Foundation

**Files:**
- Create: `css/style.css`

**Step 1: Write complete CSS file**

The CSS file contains: CSS reset, custom properties (colors, fonts, spacing), base typography, layout utilities, header (fixed, semi-transparent, responsive), navigation (desktop horizontal + mobile burger), hero section, content sections (domaines, chiffres, reassurance, expertise cards), footer, forms, responsive breakpoints (480px, 768px, 1024px), animations, utility classes.

Key design tokens:
- `--color-primary: #2A6F6F` (teal)
- `--color-accent: #C8A96E` (gold)
- `--color-bg: #FAFAF8` (off-white)
- `--color-bg-alt: #F0EFEB` (light gray)
- `--color-text: #4A4A4A` (warm gray)
- `--font-heading: 'Playfair Display', serif`
- `--font-body: 'Inter', sans-serif`

Mobile-first approach: base styles are mobile, then `@media (min-width: 768px)` for tablet, `@media (min-width: 1024px)` for desktop.

**Step 2: Commit**

```bash
git add css/style.css
git commit -m "feat: add complete CSS foundation with responsive design system"
```

---

### Task 2: Homepage (index.html)

**Files:**
- Create: `index.html`

**Step 1: Write index.html**

Full page with:
- `<head>`: meta charset, viewport, description, Google Fonts links, CSS link
- Header: fixed nav with logo typo "Caroline Arnaud | Avocate", nav links (Accueil, Expertise, Le Cabinet, Contact), CTA button
- Mobile burger button (hamburger icon via CSS)
- Hero section: h1 "Votre avocate en droit du travail a Bordeaux", subtitle about defending both employees and employers, 2 CTAs, placeholder for photo
- Domaines section: 3 cards (Salaries, Employeurs, Contentieux) with SVG icons
- Chiffres section: stats band (17+ ans, Barreau de Bordeaux, 2009)
- Reassurance section: quote/values
- CTA banner: "Besoin d'un conseil ?" with contact link
- Footer: coordonnees, nav links, mentions legales link, barreau mention

**Step 2: Verify in browser**

Open `index.html` in browser. Check:
- Header is fixed and visible
- Hero displays correctly
- All sections render
- Footer is complete

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add homepage with hero, domaines, chiffres, and CTA sections"
```

---

### Task 3: Expertise Page (expertise.html)

**Files:**
- Create: `expertise.html`

**Step 1: Write expertise.html**

Same head/header/footer as index.html. Content:
- Breadcrumb: Accueil > Domaines d'expertise
- Intro section: Caroline's approach to labor law
- Section "Droit des salaries": cards listing services (licenciement abusif, harcelement, prud'hommes, contrat de travail, negociation rupture conventionnelle, discrimination, heures supplementaires)
- Section "Droit des employeurs": cards listing services (redaction contrats, procedure disciplinaire, licenciement, restructuration, conseil RH, elections CSE, accords collectifs)
- CTA at bottom of each section linking to contact

**Step 2: Verify in browser**

Check layout, responsive behavior, navigation links work.

**Step 3: Commit**

```bash
git add expertise.html
git commit -m "feat: add expertise page with employee and employer law sections"
```

---

### Task 4: Cabinet Page (cabinet.html)

**Files:**
- Create: `cabinet.html`

**Step 1: Write cabinet.html**

Same head/header/footer. Content:
- Breadcrumb: Accueil > Le Cabinet
- Portrait section: photo placeholder + biography text
- Parcours: formation, barreau 2009, 17 years experience
- Cabinet CALL AVOCATS presentation
- Values section: 4 blocks (Ecoute, Rigueur, Engagement, Proximite) with icons
- Location mention: Bordeaux centre, easy access

**Step 2: Verify in browser**

**Step 3: Commit**

```bash
git add cabinet.html
git commit -m "feat: add cabinet page with biography, values, and firm presentation"
```

---

### Task 5: Contact Page (contact.html)

**Files:**
- Create: `contact.html`

**Step 1: Write contact.html**

Same head/header/footer. Content:
- Breadcrumb: Accueil > Contact
- Two-column layout (stacked on mobile):
  - Left: contact info (phone with tel: link, email with mailto:, address, office hours)
  - Right: Formspree form (name, email, phone, select type salarie/employeur/autre, textarea message, submit button)
- Google Maps embed: iframe centered on "87 rue de la Course, 33000 Bordeaux"
- Mobile sticky call button at bottom

Formspree action URL: `https://formspree.io/f/{id}` (placeholder, user will replace with real ID)

**Step 2: Verify in browser**

Check form layout, responsive stacking, map displays.

**Step 3: Commit**

```bash
git add contact.html
git commit -m "feat: add contact page with form, map, and contact details"
```

---

### Task 6: Mentions Legales (mentions-legales.html)

**Files:**
- Create: `mentions-legales.html`

**Step 1: Write mentions-legales.html**

Same head/header/footer. Content:
- Breadcrumb: Accueil > Mentions legales
- Section Identite: Maitre Caroline Arnaud, Barreau de Bordeaux, Case 1287, Cabinet CALL AVOCATS
- Section Hebergeur: placeholder for hosting provider
- Section RGPD: data collection policy, cookie info, user rights
- Section Credits: site creation credits

**Step 2: Commit**

```bash
git add mentions-legales.html
git commit -m "feat: add legal mentions page"
```

---

### Task 7: JavaScript (main.js)

**Files:**
- Create: `js/main.js`

**Step 1: Write main.js**

Features:
- Mobile burger menu: toggle nav visibility, close on link click, close on outside click
- Header scroll effect: add class on scroll for background opacity change
- Smooth scroll for anchor links
- Contact form validation: required fields, email format, phone format, show inline errors
- Form submission success message (Formspree handles actual send)
- Intersection Observer for subtle scroll animations (fade-in sections)

**Step 2: Verify in browser**

Test on mobile viewport: burger opens/closes. Test form validation. Test scroll effects.

**Step 3: Commit**

```bash
git add js/main.js
git commit -m "feat: add JS for burger menu, form validation, and scroll effects"
```

---

### Task 8: Final Polish & Push

**Step 1: Create img directory and placeholder**

```bash
mkdir -p img
```

**Step 2: Review all pages in browser**

Open each page, check:
- All nav links work between pages
- Responsive at 375px, 768px, 1024px, 1440px
- Footer consistent across pages
- No broken styles or layout issues

**Step 3: Add remote and push**

```bash
git remote add origin https://github.com/julienmessagingme/carolinearnaud.git
git branch -M main
git push -u origin main
```

---

## Execution Notes

- Photo of Caroline will be provided by user and placed in `img/caroline-arnaud.jpg`
- Formspree ID needs to be created at formspree.io and replaced in contact.html
- Google Maps embed coordinates should be verified for exact office location
- All text content is written in French
- @frontend-design skill should be used for the actual HTML/CSS implementation to ensure high design quality
