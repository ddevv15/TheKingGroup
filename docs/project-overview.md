# The King Group - Project Overview

> **Last Updated:** November 7, 2025  
> **Project Type:** Corporate Website for Global Agri-Export Business  
> **Status:** MVP In Development - Static Content, Interactive Map Removed

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Technology Stack](#technology-stack)
3. [Project Architecture](#project-architecture)
4. [Features & Pages](#features--pages)
5. [Development History](#development-history)
6. [Design System](#design-system)
7. [Product Requirements Document (PRD)](#product-requirements-document-prd)
8. [Future Roadmap](#future-roadmap)

---

## Executive Summary

**The King Group** is a corporate website for a global agri-export company that specializes in connecting quality agricultural products from Asia to markets across Africa, Middle East, Europe, and the Americas. The website serves as a digital presence to showcase the company's products, global reach, leadership team, and commitment to sustainability.

### Project Goals
- Establish strong online presence for The King Group
- Showcase diverse product portfolio (Rice, Cashew, Cotton, Oilseeds, Spices, Tiles, Pharma, Supermarket Products)
- Display global presence across 40+ countries
- Highlight leadership team and company values
- Enable customer feedback and inquiries
- Provide comprehensive information about quality standards and certifications

### Current Status
The project has completed its MVP phase with all core pages implemented using **static/dummy content**. The site features a modern, responsive design with custom typography and an integrated feedback system powered by Supabase.

---

## Technology Stack

### Frontend Framework
- **Next.js 15.2.4** (React 19) - App Router architecture
- **React 19** with React DOM
- **JavaScript/JSX** (no TypeScript for page components)

### Styling
- **Tailwind CSS 4.1.9** with PostCSS
- **Custom CSS** with @font-face declarations
- **tailwindcss-animate** for animations
- **class-variance-authority** & **clsx** for dynamic styling

### UI Components
- **Radix UI** - Comprehensive primitive component library:
  - Accordion, Alert Dialog, Avatar, Badge
  - Button, Card, Carousel, Chart
  - Checkbox, Collapsible, Command, Context Menu
  - Dialog, Dropdown Menu, Hover Card
  - Input, Label, Menubar, Navigation Menu
  - Popover, Progress, Radio Group, Scroll Area
  - Select, Separator, Slider, Switch
  - Tabs, Textarea, Toast, Toggle, Tooltip
- **Lucide React** (0.454.0) - Icon library
- **GSAP** - Animation library for navigation

### Backend & Database
- **Supabase** - BaaS (Backend as a Service)
  - `@supabase/supabase-js` (2.75.0)
  - `@supabase/ssr` (0.7.0)
  - `@supabase/auth-helpers-nextjs` (0.10.0)
  - Used for feedback form submissions
  - Database includes `feedback` table

### Form Management
- **React Hook Form** (7.60.0)
- **Zod** (3.25.67) - Schema validation
- **@hookform/resolvers** (3.10.0)

### Additional Libraries
- **date-fns** (4.1.0) - Date manipulation
- **embla-carousel-react** (8.5.1) - Carousel functionality
- **recharts** (2.15.4) - Charting library
- **sonner** (1.7.4) - Toast notifications
- **vaul** (1.1.1) - Drawer component
- **next-themes** (0.4.6) - Theme management
- **@vercel/analytics** - Analytics integration

### Typography
Custom fonts loaded via `@font-face`:
- **DM Serif Display** - Brand logo ("The King Group")
- **Raleway** - All heading elements (h1, h2, h3)
- **Source Sans 3** - Body text, paragraphs, lists, buttons

---

## Project Architecture

### Directory Structure

```
TheKingGroup/
├── app/                          # Next.js App Router pages
│   ├── about/                    # About page
│   ├── contact/                  # Contact page
│   ├── debug/supabase/          # Supabase health check (dev only)
│   ├── global-presence/         # Global offices & markets
│   ├── leadership/              # Board & executive team
│   ├── products/                # Product catalog
│   │   └── overview/            # Product overview page
│   ├── sustainability/          # Sustainability initiatives
│   ├── layout.jsx               # Root layout with metadata
│   ├── page.jsx                 # Homepage
│   └── globals.css              # Global styles & fonts
├── components/                   # Reusable components
│   ├── ui/                      # Radix UI component wrappers (57 files)
│   ├── card-nav.jsx             # Animated navigation with GSAP
│   ├── client-error-boundary.jsx # Client-side error boundary wrapper
│   ├── error-boundary.jsx       # Error boundary component
│   ├── feedback-button.jsx      # Floating feedback button
│   ├── feedback-form.jsx        # Feedback form with Supabase
│   ├── footer.jsx               # Site footer
│   ├── header.jsx               # Site header
│   └── theme-provider.tsx       # Theme context provider
├── data/                        # Data directory (empty - ready for new data)
├── hooks/                       # Custom React hooks
│   ├── use-mobile.ts           # Mobile detection hook
│   └── use-toast.ts            # Toast notification hook
├── lib/                         # Utilities
│   ├── supabase.js             # Supabase client
│   └── utils.ts                # Tailwind utilities
├── public/                      # Static assets
│   ├── fonts/                  # Custom font files (DM Serif, Raleway, Source Sans 3)
│   ├── worldmap.png            # World map image (not integrated)
│   ├── hero_bg.mp4             # Hero background video (Git LFS)
│   └── [images]                # Product & team images (86 files total)
├── docs/                        # Documentation
│   ├── activity.md             # Development activity log
│   ├── project-overview.md     # This document
│   ├── project-content-guide.md # Content replacement guide
│   └── video-hosting-solutions.md # Video hosting documentation
├── scripts/                     # Database scripts
│   └── create-feedback-table.sql
└── styles/                      # Legacy styles directory
    └── globals.css
```

### Page Routes

| Route | Purpose | Status |
|-------|---------|--------|
| `/` | Homepage with hero, products preview, global reach | ✅ Complete |
| `/about` | Company story, mission, vision, values, certifications, timeline | ✅ Complete |
| `/leadership` | Board of directors & executive team | ✅ Complete |
| `/products` | Product catalog with filtering | ✅ Complete |
| `/products/overview` | Product overview page | ✅ Complete |
| `/global-presence` | Regional markets & office locations | ✅ Complete |
| `/sustainability` | Sustainability initiatives | ✅ Complete |
| `/contact` | Contact form and information | ✅ Complete |
| `/debug/supabase` | Supabase integration test page | ✅ Complete (Dev) |

---

## Features & Pages

### 1. Homepage (`/`)
**Purpose:** Primary landing page showcasing company overview

**Sections:**
- **Hero Section:** Full-screen hero with video background (`hero_bg.mp4`), tagline, and CTA
- **Mission Statement:** Company introduction and value proposition
- **Products Carousel:** 11 products with carousel navigation (4 visible at a time)
  - Rice, Cashew, Cotton, Oilseeds, Spices, Tiles, Pharma, Supermarket Products, Edible Oil, Castor Oil, Pulses
  - Left/Right navigation buttons
  - Carousel indicators (dots)
- **Global Reach Section:** 
  - Section header with placeholder for map component
  - "View Full Map" button linking to `/global-presence`
  - Background: White tiles image
- **Values Section:** 4 core values with icons (Quality Assurance, Global Network, Sustainability, Reliable Supply)
  - Background: White tiles image (shared with Global Reach)
- **CTA Section:** Partnership call-to-action with tiles background image

**Key Features:**
- Video background with autoplay and loop
- Interactive product carousel
- GPU-optimized animations (`.gpu-accelerated`, `.gpu-scale-hover`, `.gpu-lift-hover` CSS classes)
- Responsive grid layouts
- Hover animations on product cards
- White tiles background for multiple sections
- Smooth transitions

---

### 2. About Page (`/about`)
**Purpose:** Tell the company story and establish credibility

**Sections:**
- **Hero Section:** Page title and intro
- **Company Story:** Founding narrative (1995 origin story)
- **Mission & Vision:** Core purpose and future goals
- **Core Values:** 4 detailed values with descriptions
- **Quality Assurance:** Certification details and quality processes
  - ISO 9001:2015, HACCP, FSSAI, Organic, Fair Trade, Global GAP
- **Timeline:** 5 company milestones (1995-2023)
- **CTA Section:** Partnership invitation

**Key Features:**
- Visual timeline with year markers
- Certification badges
- Multi-column layouts
- Quality assurance checkpoints

---

### 3. Leadership Page (`/leadership`)
**Purpose:** Introduce board members and executive team

**Sections:**
- **Board of Directors:** 4 board members
  - Chairman & Founder, CEO, CFO, Independent Director
- **Executive Leadership Team:** 6 executives
  - COO, Head of Supply Chain, Regional Directors (2), Head of QA, Head of Business Development
- **Leadership Philosophy:** 3 core principles (Integrity, Innovation, Partnership)

**Key Features:**
- Profile cards with photos and bios
- Expandable biography text
- Contact links (email, LinkedIn)
- Hover effects on cards
- Professional headshots

**Team Members (Placeholder):**
- Rajesh Kumar (Chairman)
- Priya Sharma (CEO)
- Michael Chen (CFO)
- Sarah Williams (Independent Director)
- Amit Patel (COO)
- David Martinez (Head of Supply Chain)
- Fatima Al-Rashid (Regional Director - Middle East & Africa)
- James Thompson (Regional Director - Europe & Americas)
- Dr. Ananya Reddy (Head of Quality Assurance)
- Robert Kim (Head of Business Development)

---

### 4. Products Page (`/products`)
**Purpose:** Comprehensive product catalog with detailed specifications

**Features:**
- **Category Filter:** Fixed position filter bar with 9 categories (scrolls with page - not sticky)
  - All, Grains, Nuts, Fibers, Seeds, Spices, Building Materials, Healthcare, FMCG
- **Product Cards:** 11 detailed product entries with uniform height (400px)
  - Product image with category badge
  - Description and origin countries (fixed height containers)
  - Export destinations (regional: West Africa, Middle East, Europe, SouthEast Asia, South Asia)
  - Available varieties (fixed height with overflow handling)
  - Expandable specifications section (absolute positioned dropdown)
  - "Request Quote" CTA
- **Uniform Card Heights:** All cards are exactly 400px tall for consistent grid layout
- **State-Controlled Specifications:** React state manages expanded/collapsed specs per product

**Products:**
1. Rice (Grains)
2. Cashew (Nuts)
3. Cotton (Fibers)
4. Oilseeds (Seeds)
5. Spices (Spices)
6. Tiles (Building Materials)
7. Pharmaceutical Products (Healthcare)
8. Supermarket Products (FMCG)
9. Edible Oil (FMCG)
10. Castor Oil (FMCG)
11. Pulses (Grains)

**Product Details:**
Each product includes:
- Name, category, description
- Origin countries
- Destination regions (updated to match new regional structure)
- Varieties (4+ per product)
- Technical specifications (expandable dropdown)
- Quality parameters

**Services Section:**
- Sourcing & Procurement
- Quality Control
- Logistics & Delivery

---

### 5. Global Presence Page (`/global-presence`)
**Purpose:** Showcase international reach and office network

**Sections:**
- **Stats Overview:** 4 key metrics
  - 40+ Countries Served
  - 260+ Active Partners
  - 6 Global Offices
  - 50K+ Tons Exported Annually

- **Regional Breakdown:** 5 regions with detailed stats
  - West Africa: 15 countries, 120+ partners, 45% volume, +18% growth
  - Middle East: 8 countries, 65+ partners, 30% volume, +22% growth
  - Europe: 12 countries, 45+ partners, 15% volume, +12% growth
  - SouthEast Asia: 6 countries, 40+ partners, 8% volume, +20% growth
  - South Asia: 6 countries, 260+ partners, 35% volume, +15% growth

- **Office Locations:** 6 offices worldwide
  - Vijapur, India (Headquarters) - Gujarat
  - Ho Chi Minh City, Vietnam
  - Dubai, UAE
  - Accra, Ghana (West Africa)
  - Dar es Salaam, Tanzania (East Africa)
  - Sydney, Australia

**Each Office Includes:**
- Address, phone, email
- Business hours with timezone
- Office type (Headquarters/Regional/Representative)
- Description of operations

**Note:** Interactive world map removed as of November 7, 2025. Ready for fresh implementation.

---

### 6. Sustainability Page (`/sustainability`)
**Purpose:** Communicate environmental and social commitment

**Expected Sections (to be implemented with real data):**
- Sustainability mission
- Carbon footprint initiatives
- Ethical sourcing practices
- Community development programs
- Environmental certifications
- Future sustainability goals

---

### 7. Contact Page (`/contact`)
**Purpose:** Enable customer inquiries and provide contact information

**Expected Features (to be implemented):**
- Contact form
- Office addresses
- Phone numbers and email
- Contact hours
- Interactive map (optional)

---

### 8. Feedback System (Site-wide)
**Purpose:** Collect user feedback and bug reports

**Components:**
- **Feedback Button:** Fixed position floating button (bottom-right)
- **Feedback Form:** Slide-in panel from right
  - Name (optional)
  - Email (optional)
  - Feedback Type (dropdown: General, Bug Report, Feature Request, Improvement)
  - Message (required)
  - Current page URL (auto-captured)

**Backend:**
- Supabase `feedback` table
- Real-time form validation
- Success/error notifications
- Auto-close after submission

---

### 9. Navigation System
**Purpose:** Animated, user-friendly navigation

**Features:**
- **CardNav Component:** Custom animated navigation
- **GSAP Animations:** Smooth dropdown transitions
- **Mega Menu Structure:**
  - Company (About, Leadership, Sustainability, Global Presence)
  - Products (Overview, Catalog)
  - Connect (Contact)
- **Responsive Design:** Mobile-friendly hamburger menu
- **Brand Typography:** "The King Group" in DM Serif Display

---

## Development History

### October 16, 2025 - Initial Development Sprint

#### 1. Project Analysis & Supabase Integration
**Prompt:** "Firstly scan the entire codebase and get a perfect understanding of the project, after that create me an env file so I can integrate my supabase keys to the project"

**Actions Taken:**
- Scanned entire project structure
- Identified Supabase usage in `lib/supabase.js` and `components/feedback-form.jsx`
- Created `.env.example` with required environment variables:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Confirmed `.gitignore` properly excludes `.env*` files

**Outcome:**
- Environment configuration ready for Supabase integration
- Secure credential management in place

---

#### 2. Supabase Health Check Implementation
**Prompt:** "Do not push the changes to the vcs yet, I have added keys to the env local file lets try and test out if the integration was successful?"

**Actions Taken:**
- Created debug page at `app/debug/supabase/page.jsx`
- Implemented health check with:
  - Environment variable validation
  - SELECT query test (read access)
  - Optional INSERT query test (write access)
- Added test buttons for manual verification

**Usage:**
- Navigate to `/debug/supabase` in development
- Click "Run SELECT test" to verify read access
- Click "Run INSERT test" to verify write access (requires RLS policy)

**Outcome:**
- Verified Supabase connection successful
- Confirmed database read/write permissions

---

#### 3. Brand Font Implementation (DM Serif Display)
**Prompt:** "Now there are some fonts changes I need you to make, the text 'The King Group' which is inside the navbar will use the fon DM Serif Display, @DM_Serif_Display/ lets move on with the changes"

**Actions Taken:**
- Added `@font-face` declarations in `app/globals.css`
- Configured font paths: `public/fonts/DM_Serif_Display/`
- Applied font to navbar brand text in `components/card-nav.jsx`
- Added unique ID: `navbar-brand-the-king-group`
- Set fallback fonts: `Georgia, serif`

**CSS Implementation:**
```css
@font-face {
  font-family: 'DM Serif Display';
  src: url('/fonts/DM_Serif_Display/DMSerifDisplay-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
```

**Outcome:**
- Brand logo now displays in DM Serif Display font
- Enhanced visual brand identity

---

#### 4. Heading Font Implementation (Raleway)
**Prompt:** "I want to change the font for all section headings on the website. Please update the font-family for all heading tags, specifically h1, h2, and h3, so that all section titles—like 'Global Excellence in Agri-Export', 'Bridging Continents Through Quality', and 'Our Products'—use the new font consistently across the site. Make sure this applies site-wide and overrides any previous heading styles. Use Raleway font family for that @Raleway/"

**Actions Taken:**
- Restored `@font-face` for Raleway (variable and italic)
- Added global CSS override for `h1, h2, h3` with `!important`
- Configured variable font with full weight range
- Set fallback fonts: `sans-serif`

**CSS Implementation:**
```css
@font-face {
  font-family: 'Raleway';
  src: url('/fonts/Raleway/Raleway-VariableFont_wght.ttf') format('truetype');
  font-weight: 100 900;
  font-style: normal;
}

h1, h2, h3 {
  font-family: 'Raleway', sans-serif !important;
}
```

**Outcome:**
- All major headings site-wide use Raleway
- Consistent typography hierarchy
- Improved readability and brand consistency

---

#### 5. Body Text Font Implementation (Source Sans 3)
**Prompt:** "I would like to change the font for all text content on the website except for the main branding/logo ('The King Group') and all heading/title elements. Please update the font-family for all paragraph tags (p), list items (li), and any regular text elements that are not heading tags (h1–h6) or the logo/brand text. Make sure this new font applies consistently for all general website text, including section descriptions, body copy, and buttons, but does not affect the site headings or the primary brand/logo. Use the Source_Sans_3 for that @Source_Sans_3/"

**Actions Taken:**
- Added `@font-face` for Source Sans 3 (variable and italic)
- Set body base `font-family` to Source Sans 3
- Ensured heading exclusions maintained Raleway
- Ensured brand logo exclusion maintained DM Serif Display

**CSS Implementation:**
```css
@font-face {
  font-family: 'Source Sans 3';
  src: url('/fonts/Source_Sans_3/SourceSans3-VariableFont_wght.ttf') format('truetype');
  font-weight: 200 900;
  font-style: normal;
}

body {
  font-family: 'Source Sans 3', sans-serif;
}
```

**Outcome:**
- All body text uses Source Sans 3
- Paragraphs, lists, buttons, inputs consistently styled
- Complete typography system implemented

---

### Typography System Summary

| Element | Font | Weight | Usage |
|---------|------|--------|-------|
| Brand Logo | DM Serif Display | 400 | "The King Group" in navbar |
| Headings (h1-h3) | Raleway | Variable (100-900) | All section titles |
| Body Text | Source Sans 3 | Variable (200-900) | Paragraphs, lists, buttons, general text |

**Font File Locations:**
- `/public/fonts/DM_Serif_Display/`
- `/public/fonts/Raleway/`
- `/public/fonts/Source_Sans_3/`

---

## Design System

### Color Palette
The site uses a CSS custom properties system (likely defined in Tailwind config):
- **Primary:** Company brand color (blue tones)
- **Accent:** Gold/yellow (`#d4af37` mentioned in navigation)
- **Secondary:** Light gray backgrounds
- **Muted:** Text secondary color
- **Foreground:** Default text color

### Spacing & Layout
- **Container:** Centered max-width container
- **Padding:** Consistent section padding (py-20, py-24)
- **Grid Systems:** 
  - 1-2-4 column responsive grids
  - Auto-fit/auto-fill for product cards

### Component Patterns
- **Card-based layouts:** Product cards, team cards, region cards
- **Hover states:** Scale, shadow, color transitions
- **CTAs:** High-contrast buttons with clear hierarchy
- **Icons:** Lucide React icons throughout

### Responsive Design
- **Breakpoints:** `sm`, `md`, `lg`, `xl`
- **Mobile-first approach**
- **Touch-friendly targets**
- **Collapsible navigation on mobile**

### Animation Philosophy
- **Subtle hover effects:** Scale, translate, shadow
- **GSAP for complex animations:** Navigation dropdown
- **Transition durations:** 200-500ms
- **Smooth page loads**

---

## Product Requirements Document (PRD)

### Problem Statement
The current website contains **100% static, dummy content**. While it successfully demonstrates the design system, user interface, and technical implementation, it does not represent real company data, actual products, genuine team members, or authentic business information.

### Objective
Transform the static prototype into a production-ready website with real, accurate content that truly represents The King Group's business, products, team, and operations.

---

### Phase 1: Content Audit & Collection

#### 1.1 Company Information
**Required Real Data:**
- [ ] Actual company founding year and history
- [ ] Real mission and vision statements
- [ ] Authentic company values and culture
- [ ] Actual certifications held (ISO, HACCP, etc.)
- [ ] Real milestone years and achievements
- [ ] Legal entity information and registration details
- [ ] Company size (employees, revenue - if public)

**Responsible:** Management/Marketing Team  
**Format:** Word document or Google Doc with verified information

---

#### 1.2 Leadership Team
**Required Real Data:**
- [ ] Actual board members and executives
- [ ] Real names, titles, and professional backgrounds
- [ ] Verified biographical information
- [ ] Professional headshots (high-resolution)
- [ ] Actual contact emails (or decision if emails should be generic)
- [ ] LinkedIn profile URLs (with permission)

**Responsible:** HR/Executive Team  
**Format:** Spreadsheet with columns: Name, Title, Bio (200 words), Photo, Email, LinkedIn  
**Photo Requirements:** Professional headshots, 1200x1200px minimum, square format

---

#### 1.3 Product Catalog
**Required Real Data for Each Product:**
- [ ] Actual products offered (confirm 8 products or adjust)
- [ ] Real product varieties and specifications
- [ ] Accurate origin countries and sourcing locations
- [ ] True destination markets and export regions
- [ ] Technical specifications (moisture content, purity, etc.)
- [ ] Certifications per product category
- [ ] Pricing structure (if to be displayed)
- [ ] MOQ (Minimum Order Quantity) information
- [ ] Product photography (high-quality, branded)

**Responsible:** Product Management/Sales Team  
**Format:** Product specification sheets with:
- Product name
- Category
- Description (50 words)
- Long description (200 words) 
- Varieties list
- Origin countries
- Export destinations
- Technical specs (bullet points)
- Images (1800x1200px minimum)

**Priority Products:** Rice, Cashew, Cotton, Oilseeds, Spices (core products first)

---

#### 1.4 Global Presence
**Required Real Data:**
- [ ] Actual countries where products are sold
- [ ] Real office locations and addresses
- [ ] Working phone numbers for each office
- [ ] Functional email addresses
- [ ] Actual business hours per location
- [ ] Regional distribution of sales (percentages)
- [ ] Number of partners/clients per region (if available)
- [ ] Export volume data (if public)

**Responsible:** Operations/Regional Managers  
**Format:** Office contact sheet per location with verified addresses and contact details

---

#### 1.5 Sustainability
**Required Real Data:**
- [ ] Actual sustainability initiatives and programs
- [ ] Real environmental certifications
- [ ] Carbon footprint data (if available)
- [ ] Ethical sourcing policies
- [ ] Community development programs
- [ ] Sustainability goals and timelines
- [ ] Third-party audit reports (if public)

**Responsible:** Sustainability Officer/CSR Team  
**Format:** Sustainability report or fact sheet

---

#### 1.6 Contact Information
**Required Real Data:**
- [ ] General inquiry email
- [ ] Sales contact email
- [ ] Support email
- [ ] Main office phone/fax
- [ ] Headquarters address (verified)
- [ ] Business registration details
- [ ] Preferred contact method
- [ ] Expected response time

**Responsible:** Customer Service/Admin  
**Format:** Contact information sheet

---

### Phase 2: Content Management System (CMS) Evaluation

#### 2.1 Current State
- All content is hardcoded in JSX components
- No dynamic content management
- Updates require developer intervention
- No content versioning or workflow

#### 2.2 CMS Options to Consider

**Option A: Headless CMS**
- **Recommended:** Sanity, Contentful, or Strapi
- **Pros:** 
  - Content editors can update without code changes
  - Preview functionality
  - Content versioning
  - Media management
  - Structured content with relationships
- **Cons:** 
  - Additional cost (Sanity/Contentful) or hosting (Strapi)
  - Learning curve for content team
  - Migration effort required

**Option B: Markdown/MDX Files**
- **Approach:** Git-based content management
- **Pros:**
  - No additional cost
  - Version control via Git
  - Simple for developers
  - Works well with Next.js
- **Cons:**
  - Requires technical knowledge
  - No preview interface
  - Limited for non-technical editors

**Option C: Keep Static (Short-term)**
- **Approach:** Replace dummy content directly in components
- **Pros:**
  - Fastest implementation
  - No architecture changes
  - Simple deployment
- **Cons:**
  - Difficult to maintain long-term
  - Requires developer for any update
  - No content workflow

**Recommendation:** Start with Option C for immediate launch, plan migration to headless CMS (Option A) in Phase 3 if content updates will be frequent.

---

### Phase 3: Feature Enhancements

#### 3.1 Contact Form Implementation
**Current State:** Contact page exists but incomplete

**Requirements:**
- [ ] Form fields: Name, Company, Email, Phone, Country, Product Interest, Message
- [ ] Form validation (Zod schema)
- [ ] Supabase integration (new `contacts` table)
- [ ] Email notifications (via Supabase functions or SendGrid)
- [ ] Auto-response email to sender
- [ ] Admin notification email
- [ ] CAPTCHA/spam protection (hCaptcha or reCAPTCHA)
- [ ] Success page or modal
- [ ] CRM integration (optional - HubSpot, Salesforce)

**Priority:** High (essential for lead generation)

---

#### 3.2 Product Inquiry System
**Feature:** Allow customers to request quotes for specific products

**Requirements:**
- [ ] "Request Quote" buttons on product pages (already present, need backend)
- [ ] Quote form: Product pre-selected, Quantity, Destination, Company info
- [ ] File upload for specifications (optional)
- [ ] Email notification to sales team
- [ ] Quote request tracking (admin dashboard)
- [ ] Follow-up system

**Priority:** High (core business function)

---

#### 3.3 Search Functionality
**Feature:** Site-wide search for products, pages, content

**Requirements:**
- [ ] Search bar in navigation
- [ ] Algolia or similar search integration
- [ ] Product search with filters
- [ ] Results page with highlighting
- [ ] Search analytics

**Priority:** Medium (nice-to-have for larger catalogs)

---

#### 3.4 Multi-language Support (i18n)
**Feature:** Website in multiple languages for international markets

**Requirements:**
- [ ] Language selection dropdown
- [ ] next-intl or similar i18n library
- [ ] Translated content for key languages:
  - English (primary)
  - Arabic (Middle East)
  - French (Africa)
  - Spanish (Americas)
- [ ] RTL support for Arabic
- [ ] Language-specific formatting (dates, numbers)

**Priority:** Medium (depends on target markets)

---

#### 3.5 Analytics & Tracking
**Feature:** Comprehensive analytics for business insights

**Requirements:**
- [ ] Vercel Analytics (already installed, needs configuration)
- [ ] Google Analytics 4 (GA4)
- [ ] Product page views tracking
- [ ] Conversion tracking (form submissions)
- [ ] User behavior analysis (Hotjar or similar)
- [ ] Performance monitoring (Vercel Speed Insights)

**Priority:** High (business intelligence)

---

#### 3.6 Admin Dashboard
**Feature:** Internal dashboard for managing content and inquiries

**Requirements:**
- [ ] Authentication system (Supabase Auth)
- [ ] View and manage feedback submissions
- [ ] View and manage contact inquiries
- [ ] View and manage quote requests
- [ ] Export data to CSV
- [ ] User roles (admin, sales, support)
- [ ] Activity log

**Tech Stack:** Next.js API routes + Supabase + Radix UI components

**Priority:** High (operational efficiency)

---

### Phase 4: SEO & Performance Optimization

#### 4.1 SEO Enhancements
**Current State:** Basic metadata in layout.jsx

**Requirements:**
- [ ] Unique meta titles for each page
- [ ] Unique meta descriptions (155 characters)
- [ ] Open Graph tags for social sharing
- [ ] Twitter Card tags
- [ ] JSON-LD structured data (Organization, Product, BreadcrumbList)
- [ ] XML sitemap generation
- [ ] robots.txt configuration
- [ ] Canonical URLs
- [ ] Alt text for all images (with real descriptions)
- [ ] Semantic HTML improvements

**Tools:**
- `next-sitemap` package
- Google Search Console
- Bing Webmaster Tools

**Priority:** High (organic discovery)

---

#### 4.2 Performance Optimization
**Requirements:**
- [ ] Image optimization (Next.js Image component)
- [ ] Convert images to WebP/AVIF format
- [ ] Lazy loading for off-screen content
- [ ] Code splitting audit
- [ ] Bundle size optimization
- [ ] Font loading optimization (font-display: swap)
- [ ] Lighthouse audit >90 score
- [ ] Core Web Vitals optimization

**Metrics to Achieve:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**Priority:** Medium (user experience)

---

#### 4.3 Accessibility (a11y)
**Requirements:**
- [ ] WCAG 2.1 Level AA compliance
- [ ] Keyboard navigation testing
- [ ] Screen reader compatibility (NVDA, JAWS)
- [ ] Color contrast ratios (4.5:1 minimum)
- [ ] ARIA labels for interactive elements
- [ ] Focus indicators
- [ ] Skip to main content link
- [ ] Accessible form error messages

**Tools:**
- axe DevTools
- Lighthouse accessibility audit
- WAVE browser extension

**Priority:** Medium (inclusive design)

---

### Phase 5: Security & Compliance

#### 5.1 Security Measures
**Requirements:**
- [ ] Environment variables properly secured
- [ ] Supabase Row Level Security (RLS) policies reviewed
- [ ] Rate limiting on form submissions
- [ ] HTTPS enforcement (Vercel handles this)
- [ ] Content Security Policy (CSP) headers
- [ ] Input sanitization for all forms
- [ ] SQL injection prevention (Supabase handles this)
- [ ] XSS prevention
- [ ] CSRF protection

**Priority:** High (data protection)

---

#### 5.2 Privacy & Legal
**Requirements:**
- [ ] Privacy Policy page
- [ ] Terms of Service page
- [ ] Cookie consent banner (if using cookies/analytics)
- [ ] GDPR compliance (if serving EU)
- [ ] Data retention policies
- [ ] User data deletion process
- [ ] Contact for data protection officer

**Priority:** High (legal requirement)

---

### Phase 6: Testing & Quality Assurance

#### 6.1 Testing Checklist
**Functional Testing:**
- [ ] All navigation links work
- [ ] Forms submit successfully
- [ ] Feedback system works
- [ ] Contact forms work
- [ ] Quote request system works
- [ ] Error handling displays properly
- [ ] Success messages display correctly

**Cross-Browser Testing:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

**Responsive Testing:**
- [ ] Mobile (375px - 767px)
- [ ] Tablet (768px - 1023px)
- [ ] Desktop (1024px+)
- [ ] Large desktop (1920px+)
- [ ] Ultra-wide (2560px+)

**Performance Testing:**
- [ ] Page load times < 3s
- [ ] Lighthouse scores
- [ ] Real-user monitoring

**Security Testing:**
- [ ] Form validation bypass attempts
- [ ] SQL injection attempts
- [ ] XSS attempts
- [ ] Rate limiting effectiveness

**Priority:** High (quality assurance)

---

### Phase 7: Deployment & Launch

#### 7.1 Pre-launch Checklist
- [ ] All dummy content replaced with real content
- [ ] All images replaced with branded photography
- [ ] Contact information verified
- [ ] Forms tested with real submissions
- [ ] Email notifications working
- [ ] Analytics tracking installed
- [ ] SEO metadata complete
- [ ] Sitemap submitted to search engines
- [ ] 404 page designed and implemented
- [ ] Error boundaries implemented
- [ ] Loading states for all async operations
- [ ] Favicon and app icons added
- [ ] Social media preview images set

#### 7.2 Domain & Hosting
- [ ] Domain name registered (e.g., thekinggroup.com)
- [ ] DNS configured
- [ ] SSL certificate active (Vercel handles)
- [ ] Email hosting configured
- [ ] Professional email addresses created

#### 7.3 Post-Launch
- [ ] Monitor error logs (Vercel logs)
- [ ] Monitor analytics for unusual patterns
- [ ] Collect user feedback
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Create backup strategy for Supabase data
- [ ] Document maintenance procedures

**Priority:** Critical (go-live)

---

## Future Roadmap

### Short-term (1-3 months)
1. **Content Migration:** Replace all dummy content with real data
2. **Contact & Quote Forms:** Implement functional inquiry system
3. **Analytics Setup:** Install and configure tracking
4. **SEO Optimization:** Complete on-page SEO
5. **Launch:** Deploy to production domain

### Medium-term (3-6 months)
1. **CMS Integration:** Implement headless CMS for content management
2. **Admin Dashboard:** Build internal management interface
3. **Multi-language:** Add Arabic and French translations
4. **Product Catalog Expansion:** Add more product details and specifications
5. **Customer Portal:** Login system for tracking orders/quotes

### Long-term (6-12 months)
1. **E-commerce Integration:** Online ordering system (if applicable)
2. **Customer Portal:** Order tracking and account management
3. **Blog/News Section:** Content marketing and company updates
4. **Certification Repository:** Downloadable certificates and quality docs
5. **Supplier Portal:** Separate portal for suppliers and farmers
6. **API for Partners:** B2B API for large customers

### Potential Advanced Features
- **Live Chat:** Customer support chat (Intercom, Zendesk)
- **Video Content:** Product videos, virtual facility tours
- **3D Product Viewers:** Interactive product visualization
- **Augmented Reality:** AR for tiles/building materials
- **Blockchain Traceability:** Supply chain transparency
- **AI Chatbot:** Automated customer inquiries

---

## Technical Debt & Maintenance

### Current Technical Debt
1. **TypeScript Migration:** Some components are JSX, others are TSX - inconsistent
2. **Component Documentation:** No Storybook or component documentation
3. **Test Coverage:** No unit tests, integration tests, or E2E tests
4. **Error Boundaries:** Limited error handling in components
5. **Loading States:** Some components lack loading indicators
6. **Code Splitting:** Could be optimized further
7. **Unused Dependencies:** Audit package.json for unused packages

### Maintenance Plan
- **Weekly:** Review and respond to feedback submissions
- **Monthly:** Dependency updates and security patches
- **Quarterly:** Performance audit and optimization
- **Annually:** Major version updates and refactoring

---

## Success Metrics

### Business KPIs
- **Lead Generation:** Number of quote requests per month
- **Contact Form Submissions:** Inquiries via contact page
- **Email Signups:** Newsletter subscriptions (if implemented)
- **Partnership Inquiries:** New business opportunities

### Technical KPIs
- **Page Load Time:** < 3 seconds (target < 2 seconds)
- **Lighthouse Score:** > 90 across all categories
- **Uptime:** > 99.9%
- **Error Rate:** < 0.1%
- **Mobile Traffic:** Expected 40-60% of traffic

### User Experience KPIs
- **Bounce Rate:** < 40%
- **Average Session Duration:** > 2 minutes
- **Pages per Session:** > 3
- **Form Completion Rate:** > 60%

---

## Appendix

### A. Technology Versions

| Package | Version | Purpose |
|---------|---------|---------|
| Next.js | 15.2.4 | Framework |
| React | 19 | UI Library |
| Tailwind CSS | 4.1.9 | Styling |
| Supabase JS | 2.75.0 | Backend |
| Radix UI | Various | Components |
| Lucide React | 0.454.0 | Icons |
| GSAP | latest | Animations |
| React Hook Form | 7.60.0 | Forms |
| Zod | 3.25.67 | Validation |

### B. Browser Support
- **Chrome:** Last 2 versions
- **Firefox:** Last 2 versions
- **Safari:** Last 2 versions
- **Edge:** Last 2 versions
- **iOS Safari:** Last 2 versions
- **Chrome Android:** Last 2 versions

### C. Contact for This Project
- **Developer:** [To be filled]
- **Project Manager:** [To be filled]
- **Content Manager:** [To be filled]
- **Stakeholder:** [To be filled]

---

## Revision History

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| 2025-10-30 | 1.0 | Initial project overview document created | AI Assistant |
| 2025-11-07 | 1.1 | Updated to reflect current state: interactive world map removed, product catalog expanded to 11 products, regional structure updated, Git LFS video integration documented, GPU optimization classes added, directory structure corrected | AI Assistant |

---

## Recent Changes (November 7, 2025)

### Removed Components
- **Interactive World Map Integration:** All map-related components removed for fresh reimplementation
  - Removed: `components/global-reach-map.jsx`
  - Removed: `components/global-reach-map.module.css`
  - Removed: `components/office-marker.jsx`
  - Removed: `components/office-tooltip.jsx`
  - Removed: `data/offices.js`
- Homepage Global Reach section now has placeholder comment for future map implementation

### Updated Features
- **Product Catalog:** Expanded from 8 to 11 products
  - Added: Edible Oil, Castor Oil, Pulses
  - Product images updated to match homepage
- **Regional Structure:** Updated from 4 to 5 regions
  - Changed: "Africa" → "West Africa"
  - Added: "SouthEast Asia" (6 countries)
  - Added: "South Asia" (6 countries)
  - Removed: "Americas", "Oceania"
- **Homepage Hero:** Video background (`hero_bg.mp4`) via Git LFS
- **GPU Optimization:** Custom CSS utility classes for hardware acceleration
- **Products Carousel:** Interactive carousel showing 4 products at a time with navigation

### Technical Updates
- Git LFS configured for large video files (`*.mp4`)
- Build system verified and working
- All linter errors resolved
- Data directory now empty (ready for new data structures)

---

**Document Status:** Living Document - Update as project evolves

**Last Review Date:** November 7, 2025

**Next Review Date:** December 7, 2025

