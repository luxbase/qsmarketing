# Qualis Studio

**Visual transformation for real estate listings — delivered in under 24 hours.**

Qualis Studio helps real estate professionals turn ordinary property photos into polished, market-ready visual content through **digital staging, photo enhancement, and AI-assisted transformation**.

Built for the **Paraguayan real estate market**, Qualis Studio combines a fast, lightweight workflow with a simple customer experience: submit a property, receive transformed visuals, and publish.

**Live Demo:**
https://luxbase.github.io/qs/

---

## The Opportunity

Real estate listings compete on visual presentation.

Empty rooms, poor lighting, outdated furniture, and inconsistent photography can make otherwise valuable properties harder to market. Professional staging and photography can improve the perceived quality of a listing, but traditional solutions can be expensive, slow, or difficult to coordinate.

**Qualis Studio turns that process into a simple, fast service.**

### The promise

**Better-looking listings. Faster turnaround. Lower friction.**

---

## What We Do

Qualis Studio focuses on three core visual services:

* **Digital Staging** — Furnish empty rooms with realistic, market-appropriate interiors.
* **Photo Enhancement** — Improve lighting, composition, color, and overall presentation.
* **AI-Assisted Visual Content** — Create polished marketing visuals while preserving the property's essential characteristics.

The initial service is intentionally simple and service-driven rather than dependent on a complex SaaS workflow.

---

## Product Experience

The website is designed as a lightweight commercial funnel:

1. **Show the transformation** — Visual examples communicate the value immediately.
2. **Explain the service** — Simple comparisons and FAQs reduce friction.
3. **Capture the lead** — Customers can submit an inquiry through the contact form.
4. **Move to WhatsApp** — Qualified conversations continue through a familiar communication channel.
5. **Deliver within 24 hours** — The service is optimized around fast turnaround.

The goal is not to make customers learn another platform.
**The goal is to make ordering visual transformation as easy as possible.**

---

## Live Product

**[Qualis Studio](https://luxbase.github.io/qs/)**

![Qualis Studio screenshot](docs/screenshot.png)

The current website is a production-oriented static landing experience supporting three languages:

**Español · English · Português**

---

## Technology

Qualis Studio is intentionally built as a **fast, low-maintenance static website**.

| Layer         | Technology                      |
| :------------ | :------------------------------ |
| Framework     | [Astro](https://astro.build/) 6 |
| Rendering     | Static HTML                     |
| Hosting       | GitHub Pages                    |
| Form Handling | SubmitKit                       |
| Contact       | WhatsApp                        |
| Languages     | ES / EN / PT                    |
| CI/CD         | GitHub Actions                  |

There is **no custom backend**.

The site is compiled into static HTML and deployed directly to GitHub Pages. The contact form submits to a public SubmitKit endpoint from the client side.

This keeps infrastructure simple, inexpensive, and easy to maintain while the business is being validated.

---

## Architecture

```text
src/
├── i18n/               # ES / EN / PT translations
│
├── components/         # Reusable UI components
│   ├── Hero
│   ├── Comparison
│   ├── FAQ
│   ├── ContactModal
│   └── ...
│
├── layouts/             # Global layout and metadata
│   └── OG / Twitter / JSON-LD
│
├── pages/
│   ├── index
│   ├── [lang]/
│   ├── privacy
│   └── thank-you
│
└── constants.ts         # WhatsApp configuration

docs/
└── ops/                 # Internal operational documentation
    ├── intake
    └── credential policy
```

---

## Multilingual by Design

The website supports three markets from a single codebase:

* 🇵🇾 **Spanish** — Primary market
* 🇺🇸 **English**
* 🇧🇷 **Portuguese**

Translations are maintained through the `src/i18n` dictionaries, allowing the UI and marketing content to evolve without duplicating the application.

---

## Local Development

### Requirements

* Node.js
* npm

### Install

```bash
npm install
```

### Development server

```bash
npm run dev
```

### Production build

```bash
npm run build
```

Output:

```text
dist/
```

### Tests / CI verification

```bash
npm test
```

`npm test` runs the same Astro build verification used by the CI pipeline.

No environment variables are required.

---

## Deployment

Deployment is automated through GitHub Actions.

Every push to `main` runs:

```text
npm audit
     ↓
npm test
     ↓
Astro build
     ↓
GitHub Pages deployment
```

The GitHub Pages base path is configured in:

```text
astro.config.mjs
```

with:

```text
base: '/qs/'
```

Deployment workflow:

```text
.github/workflows/deploy.yml
```

---

## Operational Philosophy

Qualis Studio is deliberately starting **service-first rather than software-first**.

The website provides the customer-facing experience while the actual transformation workflow can remain flexible behind the scenes.

This approach allows the business to:

* Validate demand before building unnecessary infrastructure
* Improve the service based on real customer requests
* Keep operating costs low
* Maintain a fast turnaround
* Introduce automation only where it creates measurable value

**The product is the outcome — not the software itself.**

---

## Roadmap

The platform is designed to evolve as the service gains traction.

Potential future capabilities include:

* Automated order intake
* Customer dashboards
* Property/project management
* Before/after galleries
* Automated image processing
* Agent and brokerage accounts
* API-based integrations
* White-label workflows
* Automated delivery and notifications

These capabilities will be introduced based on validated customer demand rather than upfront complexity.

---

## Status

**Early-stage / MVP**

Qualis Studio is currently focused on validating the core proposition:

> **Can high-quality visual transformation be delivered quickly and affordably enough to become a repeatable service for real estate professionals in Paraguay?**

The current website is the first layer of that experiment.

---

## License

Private project. All rights reserved.
