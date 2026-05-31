# Abhijith K — Dual-Profile Portfolio Website

A premium, minimalist, and highly polished dual-profile personal website. This project showcases **Abhijith K's** professional software engineering profile alongside a creative writing and hobbies showcase. It uses a bespoke design system with zero CSS frameworks, built on hand-crafted CSS Modules and smooth animations.

---

## 🎨 Dual-Profile Design Concept

The application dynamically detects the active profile via routing and switches the color palette, typography, and content on the fly.

1. **Developer Profile (Dark Mode)**
   - **Default Route:** `/` (and `/dev/*` sub-routes)
   - **Aesthetic:** Sleek dark-space background (`#0b0d19`), neon-cyan accents (`#00f0ff`), and clean monospace subtitles.
   - **Content:** Core skills, project showcase, experience timeline, professional certifications, and technical repositories.

2. **Creative Writer Profile (Warm Light Mode)**
   - **Route:** `/writing` (and `/writing/*` sub-routes)
   - **Aesthetic:** Warm cream/paper background (`#fcfbfa`), rich editorial serif typography (Playfair Display), and deep burgundy accents (`#7d1c32`).
   - **Content:** Featured novel progress (synopsis & writing status), blog posts, short stories, and non-IT hobbies.

*Users can transition seamlessly between profiles using the custom sliding segmented pill control in the navigation bar.*

---

## 🛠️ Technology Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Core Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** CSS Modules & Vanilla CSS (using variables dynamically driven by `data-profile="dev" | "writing"` attributes in [globals.css](file:///e:/projects/personal-website/app/globals.css))
- **Iconography:** [Lucide React](https://lucide.dev/)

---

## 📁 Directory Structure

```text
├── app/
│   ├── dev/                 # Developer subpages (projects, skills, etc.)
│   ├── writing/             # Writer subpages (blog, stories, hobbies)
│   ├── contact/             # Contact page (shared across profiles)
│   ├── fonts/               # Local typography assets
│   ├── globals.css          # Design system & core variables
│   └── layout.tsx           # Global HTML shell & navigation wrapper
├── components/
│   ├── dev/                 # Dev-only components (Timeline, Skill cards)
│   ├── shared/              # Reusable UI (Navbar, Footer, Section headers)
│   └── writing/             # Writer-only components (Novel showcase, Blog cards)
├── context/
│   └── ProfileContext.tsx   # React context for tracking profile states
├── data/
│   # EDIT THESE FILES TO UPDATE CONTENT (See detailed instructions below)
│   ├── personal.ts          # Contact & social profile details
│   ├── skills.ts            # Dev skills
│   ├── projects.ts          # Dev project details
│   ├── experience.ts        # Dev career timeline
│   ├── certifications.ts    # Dev certifications
│   ├── stories.ts           # Creative short stories
│   ├── blogPosts.ts         # Blog post details
│   └── hobbies.ts           # Creative hobbies
├── package.json
└── README.md
```

---

## ⚡ Getting Started

### 1. Installation
Install the project dependencies. Since npm may encounter package version compatibility warnings with peer configurations, run using peer dependency bypass:

```bash
npm install --legacy-peer-deps
```

### 2. Development Server
Run the local hot-reloading development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Build & Production Start
To build the optimized static asset bundle for production:

```bash
npm run build
npm run start
```

---

## ✏️ How to Customize Your Content

All visible text, links, and profile details are driven by modular TypeScript configuration files located inside the [`/data`](file:///e:/projects/personal-website/data) folder. Open these files to replace the template information with your own details:

- **General Info & Socials:** Edit [personal.ts](file:///e:/projects/personal-website/data/personal.ts) to update names, phone numbers, email, GitHub, Medium, and LinkedIn profile URLs.
- **IT & Developer Skills:** Edit [skills.ts](file:///e:/projects/personal-website/data/skills.ts) to manage categories, tags, proficiency levels, and Lucide icons.
- **Projects:** Edit [projects.ts](file:///e:/projects/personal-website/data/projects.ts) to add or modify software projects, GitHub repositories, descriptions, and feature lists.
- **Work History:** Edit [experience.ts](file:///e:/projects/personal-website/data/experience.ts) to alter roles, timelines, company details, and descriptions of past achievements.
- **Certificates:** Edit [certifications.ts](file:///e:/projects/personal-website/data/certifications.ts) to update your professional achievements and verification codes/links.
- **Creative Writing:** Edit [stories.ts](file:///e:/projects/personal-website/data/stories.ts) to list your creative shorts or novels and where readers can access them.
- **Blog Posts:** Edit [blogPosts.ts](file:///e:/projects/personal-website/data/blogPosts.ts) to configure blog summaries and redirect URLs to your Medium articles.
- **Hobbies:** Edit [hobbies.ts](file:///e:/projects/personal-website/data/hobbies.ts) to describe other non-IT fields you are passionate about.

---

## 🚀 Deployment (Vercel)

The website is fully optimized for hosting on **Vercel**:

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Log into [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import this repository.
4. Vercel will automatically detect **Next.js** and build settings. No override is required.
5. Click **Deploy**. Vercel will serve your app and support your dual-profile dynamic routes natively.
