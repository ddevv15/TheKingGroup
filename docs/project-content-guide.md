# The King Group - Project Content Guide & Dummy Content Inventory

> **Purpose:** This document serves as a comprehensive guide for understanding The King Group website project and identifying all dummy/placeholder content that needs to be replaced with real company data.

> **Last Updated:** January 27, 2025  
> **Status:** MVP Complete - Ready for Content Migration

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Business Context](#business-context)
3. [Technology Stack Summary](#technology-stack-summary)
4. [Content Inventory - Real vs Dummy](#content-inventory---real-vs-dummy)
5. [Dummy Content Identification by Page](#dummy-content-identification-by-page)
6. [Content Replacement Guidelines](#content-replacement-guidelines)
7. [File Structure & Content Locations](#file-structure--content-locations)
8. [AI Assistant Training Guidelines](#ai-assistant-training-guidelines)

---

## Project Overview

**The King Group** is a corporate website for a global agri-export company specializing in connecting quality agricultural products from Asia (primarily India, Vietnam, Thailand) to markets across Africa, Middle East, Europe, Americas, and Oceania.

### Website Purpose

- **Primary Goal:** Establish online presence and showcase company capabilities
- **Target Audience:** B2B clients (distributors, manufacturers, retailers, importers)
- **Key Functions:**
  - Product catalog and specifications
  - Company credibility and trust building
  - Lead generation (contact forms, quote requests)
  - Global presence demonstration
  - Leadership team introduction

### Current Status

- ✅ **Technical Implementation:** Complete (all pages functional)
- ✅ **Design System:** Complete (responsive, modern UI)
- ✅ **Backend Integration:** Complete (Supabase for feedback)
- ⚠️ **Content:** **100% Dummy/Placeholder Data** (needs replacement)

---

## Business Context

### Company Profile

- **Industry:** Agricultural Export & Commodity Trading
- **Business Model:** B2B wholesale/export
- **Geographic Focus:** Asia → Global markets
- **Product Categories:** 8+ categories (Rice, Cashew, Cotton, Oilseeds, Spices, Tiles, Pharma, FMCG)

### Key Business Information (To Be Confirmed)

- **Founded:** Currently shows "2008" (dummy - needs verification)
- **Headquarters:** Gujarat, India (address appears real: "8, The King House, Surmay Banglows, Vijapur, Dist-Mehsana, Gujarat, India. Pin code-382870")
- **Contact:**
  - Phone: +91 909 904 9384 (appears real)
  - Email: info@thekinggroup.in (appears real)
- **Global Offices:** Claims 6 offices (some addresses are dummy)

### Business Values (Current - May Need Refinement)

- Quality Assurance
- Global Network
- Sustainability
- Reliable Supply
- Customer Partnership
- Innovation

---

## Technology Stack Summary

### Frontend

- **Framework:** Next.js 15.2.4 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4.1.9
- **Components:** Radix UI primitives
- **Icons:** Lucide React
- **Animations:** GSAP (navigation)

### Backend

- **Database:** Supabase (PostgreSQL)
- **Forms:** React Hook Form + Zod validation
- **Feedback System:** Supabase `feedback` table

### Typography

- **Brand Logo:** DM Serif Display
- **Headings (h1-h3):** Raleway
- **Body Text:** Source Sans 3

### Deployment

- **Platform:** Vercel (assumed)
- **Analytics:** @vercel/analytics (installed)

---

## Content Inventory - Real vs Dummy

### ✅ REAL CONTENT (Verified/Appears Authentic)

1. **Company Name:** "The King Group" ✅
2. **Headquarters Address:**
   - "8, The King House, Surmay Banglows, Vijapur, Dist-Mehsana, Gujarat, India. Pin code-382870" ✅
3. **Contact Information:**
   - Phone: +91 909 904 9384 ✅
   - Email: info@thekinggroup.in ✅
   - Email: cmo@thekinggroup.in ✅
4. **Leadership Team (Partial Real):**
   - Vicky Patel (Chairman & Founder) - LinkedIn link appears real ✅
   - Yashrajsinh Zala (CMO) - LinkedIn link appears real ✅
   - Photo: `/public/Yashraj.jpeg` ✅

### ⚠️ DUMMY/PLACEHOLDER CONTENT (Needs Replacement)

**ALL OTHER CONTENT IS DUMMY**, including but not limited to:

1. **Company History & Timeline**

   - Founding year (currently "2008" or "1995" - inconsistent)
   - Company milestones
   - Growth story narrative

2. **Leadership Team**

   - Most team member names, titles, bios
   - Professional photos (except Yashraj.jpeg)
   - Email addresses (except verified ones)
   - LinkedIn profiles (except verified ones)

3. **Product Information**

   - Product descriptions
   - Specifications
   - Varieties lists
   - Origin countries
   - Export destinations
   - Product images (using placeholder images)

4. **Global Presence**

   - Office locations (most are dummy)
   - Office addresses (most repeat headquarters address)
   - Phone numbers (most are dummy)
   - Email addresses (most are dummy)
   - Country lists and statistics
   - Partner counts
   - Export volumes

5. **Certifications & Standards**

   - Certification lists
   - Quality assurance claims
   - Compliance information

6. **Sustainability Data**

   - Initiatives and achievements
   - Statistics and percentages
   - Goals and timelines

7. **Company Values & Mission**

   - Mission statement
   - Vision statement
   - Core values descriptions

8. **Images**
   - Most product images (using stock/placeholder images)
   - Team photos (except Yashraj.jpeg)
   - Office/facility images

---

## Dummy Content Identification by Page

### 1. Homepage (`app/page.jsx`)

#### ✅ Real Elements:

- Company name: "The King Group"
- Basic structure and layout

#### ⚠️ Dummy Content:

- **Hero Section:**

  - Tagline: "Global Excellence in Agri-Export"
  - Description: "Connecting quality agricultural products from Asia to markets across Africa, Middle East, Europe, and the Americas"
  - Hero image: `/agricultural-fields-with-golden-wheat-and-rice-cro.jpg` (stock image)

- **Mission Statement:**

  - Text: "The King Group stands as a trusted partner in global agri-export, delivering premium products sourced from the finest regions of India, Vietnam, and West Africa. With decades of expertise and an unwavering commitment to quality, we serve distributors, manufacturers, and retailers across four continents."

- **Products Grid:**

  - All 11 products listed (Rice, Cashew, Cotton, Oilseeds, Spices, Tiles, Pharma, Supermarket Products, Edible Oil, Castor Oil, Pulses)
  - Product descriptions
  - Product images (all stock images)

- **Global Reach Preview:**

  - Regions: "West Africa", "Middle East", "Europe", "SouthEast Asia", "South Asia"
  - Country counts: "15+ Countries", "8+ Countries", etc.

- **Values Section:**
  - 4 values with descriptions (Quality Assurance, Global Network, Sustainability, Reliable Supply)

---

### 2. About Page (`app/about/page.jsx`)

#### ⚠️ All Content is Dummy:

- **Company Story:**

  - "Founded in 1995" (inconsistent with homepage showing 2008)
  - Narrative about starting as "modest rice exporter in Mumbai"
  - Growth story details

- **Mission & Vision:**

  - Mission statement text
  - Vision statement text

- **Core Values:**

  - 4 values: Quality First, Customer Partnership, Reliability, Innovation
  - Descriptions for each value

- **Certifications:**

  - List: ISO 9001:2015, HACCP, FSSAI, Organic, Fair Trade, Global GAP
  - (Need to verify which certifications company actually holds)

- **Timeline/Milestones:**

  - 5 milestones: 2008, 2014, 2016, 2019, 2025
  - Titles and descriptions for each milestone

- **Images:**
  - Placeholder images for facilities

---

### 3. Leadership Page (`app/leadership/page.jsx`)

#### ✅ Real Elements:

- Vicky Patel (Chairman & Founder) - LinkedIn appears real
- Yashrajsinh Zala (CMO) - LinkedIn real, photo real (`/Yashraj.jpeg`)

#### ⚠️ Dummy Content:

- **Board Members:**

  - Priya Sharma (CEO) - Name, bio, photo, email, LinkedIn all dummy
  - Michael Chen (CFO) - All dummy
  - Yashrajsinh Zala (CMO) - Name and LinkedIn real, but bio may need verification

- **Executive Team (Currently Commented Out):**

  - Amit Patel (COO) - All dummy
  - David Martinez (Head of Supply Chain) - All dummy
  - Fatima Al-Rashid (Regional Director) - All dummy
  - James Thompson (Regional Director) - All dummy
  - Dr. Ananya Reddy (Head of QA) - All dummy
  - Robert Kim (Head of Business Development) - All dummy

- **Leadership Philosophy:**

  - Three principles: Integrity, Innovation, Partnership
  - Descriptions for each

- **Images:**
  - All team photos except `/Yashraj.jpeg` are stock images

---

### 4. Products Page (`app/products/page.jsx`)

#### ⚠️ All Content is Dummy:

- **Product List (8 products):**

  1. **Rice**
     - Description, origin countries, destinations, varieties, specifications
  2. **Cashew Nuts**
     - Description, origin countries, destinations, varieties, specifications
  3. **Cotton**
     - Description, origin countries, destinations, varieties, specifications
  4. **Oilseeds**
     - Description, origin countries, destinations, varieties, specifications
  5. **Spices**
     - Description, origin countries, destinations, varieties, specifications
  6. **Tiles**
     - Description, origin countries, destinations, varieties, specifications
  7. **Pharmaceutical Products**
     - Description, origin countries, destinations, varieties, specifications
  8. **Supermarket Products**
     - Description, origin countries, destinations, varieties, specifications

- **Product Images:**

  - All using stock/placeholder images from `/public/` folder

- **Services Section:**
  - Sourcing & Procurement description
  - Quality Control description
  - Logistics & Delivery description

---

### 5. Global Presence Page (`app/global-presence/page.jsx`)

#### ✅ Real Elements:

- Headquarters address (Gujarat, India)
- Headquarters phone: +91 909 904 9384
- Headquarters email: info@thekinggroup.in

#### ⚠️ Dummy Content:

- **Statistics:**

  - "40+ Countries Served"
  - "260+ Active Partners"
  - "6 Global Offices"
  - "50K+ Tons Exported Annually"

- **Regional Breakdown:**

  - **Africa:** 15 countries list, stats (120+ partners, 45% volume, +18% growth)
  - **Middle East:** 8 countries list, stats (65+ partners, 30% volume, +22% growth)
  - **Europe:** 12 countries list, stats (45+ partners, 15% volume, +12% growth)
  - **Americas:** 6 countries list, stats (30+ partners, 10% volume, +25% growth)
  - **Oceania:** 2 countries list, stats (30+ partners, 10% volume, +25% growth)

- **Office Locations:**

  1. **Headquarters** (Gujarat, India) - ✅ Real address
  2. **Vietnam Office** - Dummy address, phone, email
  3. **Australia Office** - Dummy (repeats headquarters address)
  4. **UAE Office** - Dummy address, phone, email
  5. **Ghana Office** - Dummy (repeats headquarters address)
  6. **Tanzania Office** - Dummy (repeats headquarters address)

- **Office Details:**
  - Most office addresses are dummy
  - Most phone numbers are dummy
  - Most email addresses are dummy
  - Business hours are dummy
  - Office descriptions are dummy

---

### 6. Contact Page (`app/contact/page.jsx`)

#### ✅ Real Elements:

- Headquarters address
- Phone: +91 909 904 9384
- Email: info@thekinggroup.in
- Email: cmo@thekinggroup.in

#### ⚠️ Dummy Content:

- **Contact Form:**

  - Form structure is real, but form submission is currently simulated (not connected to backend)
  - Form fields are appropriate but need backend integration

- **Quick Contact Section:**

  - "General Inquiries" email: info@thekinggroup.com (different domain - needs verification)
  - Phone: +91 22 1234 5678 (different from real phone - needs verification)
  - Business hours: "Mon - Fri: 9:00 AM - 6:00 PM IST" (needs verification)

- **Sales & Quotes:**

  - Email: sales@thekinggroup.com (different domain - needs verification)
  - Currently shows: cmo@thekinggroup.in (real)

- **Documentation:**

  - Email: docs@thekinggroup.com (different domain - needs verification)
  - Currently shows: info@thekinggroup.in (real)

- **FAQ Section:**
  - All FAQ questions and answers are dummy/placeholder content

---

### 7. Sustainability Page (`app/sustainability/page.jsx`)

#### ⚠️ All Content is Dummy:

- **Commitment Statement:**

  - Entire paragraph about sustainability commitment

- **Sustainability Initiatives (6 initiatives):**

  1. Sustainable Sourcing - Description, achievements (60% suppliers certified, zero deforestation, 200+ farmers)
  2. Water Conservation - Description, achievements (30% reduction, rainwater harvesting, drip irrigation)
  3. Waste Reduction - Description, achievements (85% recycling, biodegradable packaging, zero waste goal)
  4. Carbon Neutrality - Description, achievements (carbon neutral since 2023, solar power, optimized routes)
  5. Community Development - Description, achievements (500+ farmers trained, healthcare access, scholarships)
  6. Fair Labor Practices - Description, achievements (compliance, living wage, safety training)

- **Certifications:**

  - Organic Certification (USDA, EU Organic)
  - Fair Trade Certified
  - Rainforest Alliance
  - ISO 14001
  - Carbon Trust Standard
  - SA8000

- **Quality Assurance Section:**

  - Source Verification description
  - Laboratory Testing description
  - Traceability description
  - Continuous Monitoring description

- **Future Goals (2030 Roadmap):**

  - 2025: 100% renewable energy
  - 2026: Zero waste to landfill
  - 2027: 50% reduction in emissions
  - 2030: 100% sustainable sourcing

- **Images:**
  - Placeholder images for quality control laboratory

---

### 8. Footer (`components/footer.jsx`)

#### ✅ Real Elements:

- Company name: "The King Group"
- Headquarters address
- Phone: +91 909 904 9384
- Email: info@thekinggroup.in

#### ⚠️ Dummy Content:

- **Company Description:**

  - "Global leader in agri-export, delivering quality products from India, Vietnam, and Thailand to markets worldwide."

- **Product Categories:**

  - List of 8 products (may need verification if all are actually offered)

- **Social Media Links:**

  - LinkedIn, Facebook, Twitter links are all "#" (placeholder)

- **Quick Links:**

  - Navigation links are real (point to actual pages)

- **Export Regions:**

  - List: Africa, Middle East, Europe, Americas, Asia Pacific

- **Privacy Policy & Terms:**
  - Links point to "#" (not implemented)

---

## Content Replacement Guidelines

### Priority Levels

#### 🔴 **CRITICAL (Replace Immediately):**

1. Company founding year and history
2. Mission and vision statements
3. Leadership team (real names, titles, bios, photos)
4. Product catalog (real products, descriptions, specifications)
5. Contact information (verify all emails, phones)
6. Office locations (real addresses, phones, emails)

#### 🟡 **HIGH PRIORITY (Replace Soon):**

1. Global presence statistics (countries, partners, volumes)
2. Certifications list (only include real certifications)
3. Sustainability initiatives (only include real programs)
4. Company values (align with actual company culture)
5. Product images (replace with real product photos)

#### 🟢 **MEDIUM PRIORITY (Can Be Refined Later):**

1. FAQ content (based on real customer inquiries)
2. Service descriptions (align with actual services)
3. Timeline/milestones (use real company milestones)
4. Social media links (add real profiles)

### Content Verification Checklist

Before replacing dummy content, verify:

- [ ] **Company Information:**

  - [ ] Actual founding year
  - [ ] Real company history
  - [ ] Accurate mission/vision
  - [ ] Real company values

- [ ] **Leadership:**

  - [ ] Real names and titles
  - [ ] Accurate biographies
  - [ ] Professional photos
  - [ ] Correct email addresses
  - [ ] Valid LinkedIn profiles

- [ ] **Products:**

  - [ ] Actual products offered
  - [ ] Real product descriptions
  - [ ] Accurate specifications
  - [ ] Real origin countries
  - [ ] Actual export destinations
  - [ ] Real product varieties
  - [ ] Authentic product images

- [ ] **Global Presence:**

  - [ ] Real countries served
  - [ ] Actual office locations
  - [ ] Correct office addresses
  - [ ] Valid phone numbers
  - [ ] Working email addresses
  - [ ] Accurate statistics

- [ ] **Certifications:**

  - [ ] Only list certifications actually held
  - [ ] Verify certification bodies
  - [ ] Include certification numbers if applicable

- [ ] **Contact:**
  - [ ] Verify all email addresses work
  - [ ] Confirm phone numbers
  - [ ] Verify business hours
  - [ ] Test contact form submission

---

## File Structure & Content Locations

### Page Files (Main Content)

```
app/
├── page.jsx                    # Homepage - Products preview, values, hero
├── about/page.jsx              # Company story, mission, vision, timeline
├── leadership/page.jsx         # Board members, executive team
├── products/page.jsx           # Product catalog with filtering
├── products/overview/page.jsx  # Product overview (if exists)
├── global-presence/page.jsx    # Offices, regions, statistics
├── contact/page.jsx           # Contact form, contact info
└── sustainability/page.jsx    # Sustainability initiatives, certifications
```

### Component Files (Reusable Content)

```
components/
├── header.jsx                 # Navigation (minimal content)
├── footer.jsx                 # Footer with company info, links
├── feedback-form.jsx          # Feedback form (functional)
└── card-nav.jsx               # Navigation component (minimal content)
```

### Static Assets

```
public/
├── fonts/                     # Custom fonts (real)
├── *.jpg                      # Product/team images (mostly dummy)
└── Yashraj.jpeg               # Real team photo ✅
```

### Configuration Files

```
lib/
├── supabase.js                # Supabase client (real, functional)
└── utils.ts                   # Utility functions (real)
```

---

## AI Assistant Training Guidelines

### How to Use This Document

When training an AI assistant to help with content replacement:

1. **Reference This Document:** Always check this guide before making content changes
2. **Verify Before Replacing:** Never replace content without verifying it's dummy
3. **Maintain Structure:** Keep the same component structure, only change content
4. **Preserve Formatting:** Maintain Tailwind classes and styling
5. **Update Consistently:** If a fact appears in multiple places, update all instances

### Content Replacement Workflow

1. **Identify Content Type:**

   - Check this document to confirm if content is dummy
   - Note which page(s) contain the content
   - Check if content appears in multiple locations

2. **Gather Real Data:**

   - Collect verified information from company sources
   - Verify accuracy with stakeholders
   - Ensure consistency across all pages

3. **Make Replacement:**

   - Update content in source files
   - Maintain HTML structure and CSS classes
   - Preserve component functionality
   - Update all instances if content appears multiple times

4. **Verify Changes:**
   - Check that content displays correctly
   - Verify links and contact information work
   - Ensure responsive design still works
   - Test form submissions if applicable

### Common Patterns to Recognize

#### Dummy Content Patterns:

- Generic descriptions ("premium quality", "international standards")
- Placeholder numbers ("40+", "260+", "50K+")
- Stock image references (`/placeholder.svg`, stock photos)
- Generic email domains (`@thekinggroup.com` vs `@thekinggroup.in`)
- Repeated addresses (multiple offices with same address)
- Placeholder LinkedIn URLs (`#`)

#### Real Content Patterns:

- Specific addresses (headquarters address)
- Real phone numbers (+91 909 904 9384)
- Real email domains (@thekinggroup.in)
- Actual LinkedIn URLs (with real profile IDs)
- Real photos (Yashraj.jpeg)

### Content Update Commands for AI Assistant

When requesting content updates, use these patterns:

```
"Replace the dummy [CONTENT TYPE] on [PAGE] with [REAL DATA]"
"Update all instances of [DUMMY CONTENT] with [REAL CONTENT]"
"Verify and replace [SPECIFIC ELEMENT] with real company data"
"Remove dummy [CONTENT] and replace with [REAL CONTENT]"
```

### Example Prompts:

1. **Leadership Update:**

   ```
   "Replace the dummy CEO information on the leadership page with:
   Name: [Real Name], Title: [Real Title], Bio: [Real Bio],
   Email: [Real Email], LinkedIn: [Real URL], Photo: [Photo Path]"
   ```

2. **Product Update:**

   ```
   "Update the Rice product description on the products page with:
   [Real Description]. Also update specifications: [Real Specs],
   Origin: [Real Countries], Destinations: [Real Regions]"
   ```

3. **Office Update:**
   ```
   "Replace the dummy Vietnam office information with real address:
   [Address], Phone: [Phone], Email: [Email], Hours: [Hours]"
   ```

---

## Quick Reference: Dummy Content Summary

### Pages with 100% Dummy Content:

- ❌ Sustainability Page
- ❌ Products Page (product details)
- ❌ About Page (history, mission, vision)

### Pages with Mixed Content:

- ⚠️ Homepage (structure real, content dummy)
- ⚠️ Leadership Page (2 real members, rest dummy)
- ⚠️ Global Presence Page (headquarters real, others dummy)
- ⚠️ Contact Page (some emails real, form dummy, FAQ dummy)
- ⚠️ Footer (address/phone real, description dummy)

### Verified Real Content:

- ✅ Company Name: "The King Group"
- ✅ Headquarters Address: Gujarat, India (full address)
- ✅ Phone: +91 909 904 9384
- ✅ Email: info@thekinggroup.in
- ✅ Email: cmo@thekinggroup.in
- ✅ Vicky Patel (Chairman) - LinkedIn
- ✅ Yashrajsinh Zala (CMO) - LinkedIn, Photo

---

## Next Steps

1. **Content Audit:** Review this document with stakeholders
2. **Data Collection:** Gather all real company data
3. **Prioritization:** Decide which content to replace first
4. **Replacement:** Systematically replace dummy content
5. **Verification:** Test all updated content
6. **Documentation:** Update this guide as content is replaced

---

**Document Status:** Living Document - Update as content is replaced

**Maintained By:** Development Team

**Last Review:** January 27, 2025
