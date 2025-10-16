## 2025-10-16

- Prompt: "Firstly scan the entire codebase and get a perfect understanding of the project, after that create me an env file so I can integrate my supabase keys to the project"

- Actions:

  - Scanned the project and identified Supabase usage in `lib/supabase.js` and `components/feedback-form.jsx`.
  - Created `env.example` with `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` placeholders.
  - Confirmed `.gitignore` already ignores local env files (`.env*`).

- Notes:
  - To use: copy `.env.example` to `.env.local` and fill in your Supabase Project URL and Anon Key.
  - Feedback submissions insert into the `feedback` table via the Supabase client.

## 2025-10-16 (Health Check)

- Prompt: "Do not push the changes to the vcs yet, I have added keys to the env local file lets try and test out if the integration was successful?"

- Actions:

  - Added a Supabase health-check page at `app/debug/supabase/page.jsx`.
  - Page verifies env presence, runs SELECT and optional INSERT against `feedback`.

- How to use:
  - Visit `/debug/supabase` in dev.
  - Click "Run SELECT test" to verify read access.
  - Optionally click "Run INSERT test" to verify write access (requires RLS policy).

## 2025-10-16 (Brand Font)

- Prompt: "Now there are some fonts changes I need you to make, the text \"The King Group\" which is inside the navbar will use the fon DM Serif Display, @DM_Serif_Display/ lets move on with the changes"

- Actions:

  - Added `@font-face` for `DM Serif Display` in `app/globals.css`, pointing to `public/fonts/DM_Serif_Display`.
  - Applied the font to the navbar brand span in `components/card-nav.jsx` with a unique `id` (`navbar-brand-the-king-group`).

- Notes:
  - Brand text now uses `DM Serif Display`; fallback `Georgia, serif`.

## 2025-10-16 (Headings Font)

- Prompt: "I want to change the font for all section headings on the website. Please update the font-family for all heading tags, specifically h1, h2, and h3, so that all section titles—like 'Global Excellence in Agri-Export', 'Bridging Continents Through Quality', and 'Our Products'—use the new font consistently across the site. Make sure this applies site-wide and overrides any previous heading styles. Use Raleway font family for that@Raleway/"

- Actions:

  - Restored `@font-face` for Raleway variable and italic variable in `app/globals.css`.
  - Added a global override for `h1, h2, h3` to use Raleway, with `!important` to ensure precedence.

- Notes:
  - This enforces Raleway for key section headings site-wide.

## 2025-10-16 (Body Text Font)

- Prompt: "I would like to change the font for all text content on the website except for the main branding/logo ('The King Group') and all heading/title elements. Please update the font-family for all paragraph tags (p), list items (li), and any regular text elements that are not heading tags (h1–h6) or the logo/brand text. Make sure this new font applies consistently for all general website text, including section descriptions, body copy, and buttons, but does not affect the site headings or the primary brand/logo. Use the Source_Sans_3 for that @Source_Sans_3/"

- Actions:

  - Added `@font-face` for Source Sans 3 (variable and italic variable) in `app/globals.css`.
  - Set body base font-family to Source Sans 3.
  - Ensured `h1–h6` keep Raleway and brand logo keeps DM Serif Display via `#navbar-brand-the-king-group` exclusion.

- Notes:
  - General text elements (`p, li, a, buttons, inputs, etc.`) now use Source Sans 3 site-wide.
