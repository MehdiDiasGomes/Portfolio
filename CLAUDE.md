# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Running the project
```bash
bun dev                # Start development server
bun dev:http           # Start dev server with network access (--host)
bun build              # Build for production
bun generate           # Generate static site
bun preview            # Preview production build
```

**Note**: This project uses **Bun** as the runtime and package manager, not npm or yarn.

## Project Architecture

### Technology Stack
- **Framework**: Nuxt.js 3 (v3.15.4) with Vue.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom utility classes
- **UI Components**: shadcn-nuxt + Radix Vue (accessible primitives)
- **Internationalization**: @nuxtjs/i18n (French/English)
- **Content**: @nuxt/content for markdown pages
- **Theme**: @nuxtjs/color-mode for dark/light mode
- **Form Validation**: Vee-validate + Zod schemas
- **Email Service**: EmailJS for contact form
- **Anti-spam**: Vue Recaptcha v3

### Directory Structure

```
components/
├── about/             # About page components (education, experiences, skills)
├── common/            # Shared reusable components
├── education/         # Education-specific components
├── footer/            # Footer components
├── icons/             # Custom icon components (tech logos, social icons)
├── projects/          # Project display components
├── skills/            # Skills display components
└── ui/                # shadcn UI components (buttons, forms, dialogs, etc.)

pages/
├── about/             # About page route
├── contact/           # Contact page route
├── projects/          # Projects page route
├── en/                # English privacy policy
├── fr/                # French privacy policy
└── index.vue          # Homepage

constants/
├── about/             # Personal information data
├── projects/          # Project data and metadata
└── skills/            # Skills and tech stack data

types/                 # TypeScript type definitions
i18n/locales/          # Translation files (fr.json, en.json)
content/               # Markdown content for @nuxt/content
```

### Core Component Organization

**Main layout components**:
- `layouts/default.vue` - Main layout wrapper
- `components/Navbar.vue` - Navigation bar
- `components/Header.vue` - Homepage header
- `components/Footer.vue` - Site footer

**Feature components**:
- `components/Projects.vue` - Projects listing
- `components/WorkXp.vue` - Work experience timeline
- `components/ContactForm.vue` - Contact form with validation
- `components/LangChoice.vue` - Language switcher

**About section** (`components/about/`):
- `About.vue` - Main about section wrapper
- `AboutHeader.vue` - About page header
- `AboutEducation.vue` - Education history
- `AboutExperiences.vue` - Work experiences
- `AboutSkills.vue` - Technical skills display

### Styling System

**Custom Tailwind utilities** (defined in `tailwind.config.js`):
- `.mp-home` - Responsive horizontal padding for main content
- `.text-xxl`, `.text-xl`, `.text-l`, `.text-m`, `.text-s` - Responsive text sizes
- `.text-intro`, `.text-main`, `.text-legend`, `.text-cta` - Semantic text classes

**Custom color tokens**:
- `primaryPerso: '#CBACF9'` - Primary purple accent
- `secondaryPerso: '#7E7E7E'` - Secondary gray
- `backgroundForeground: '#04071D'` - Dark background
- `borderPerso: '#303247'` - Border color

Use these custom classes for consistency across components.

### Internationalization

- Default locale: French (`fr`)
- Supported locales: French (`fr`), English (`en`)
- Translation files: `i18n/locales/fr.json`, `i18n/locales/en.json`
- Access translations in components: `{{ $t('key.path') }}`
- Privacy policies are page-based: `/fr/privacy` and `/en/privacy`

### Path Aliases

Configured in `components.json`:
```typescript
@/components  → components/
@/composables → composables/
@/lib         → lib/
@/lib/utils   → lib/utils
@/components/ui → components/ui/
```

### Form Validation Pattern

Forms use Vee-validate with Zod schemas. Example from `ContactForm.vue`:

```typescript
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const formSchema = toTypedSchema(z.object({
  field: z.string().min(1, 'Required message')
}))
```

### Content Management

- Static data lives in `constants/` directories as TypeScript files
- Blog/markdown content uses `@nuxt/content` from `content/` directory
- Content config: `content.config.ts`

### Icons

- Primary icon library: Lucide Vue Next
- Custom tech/social icons in `components/icons/`
- Import pattern: `import { IconName } from 'lucide-vue-next'`

### Component Library

This project uses **shadcn-nuxt** components which are:
- Located in `components/ui/`
- Based on Radix Vue primitives
- Styled with Tailwind CSS
- Fully accessible and customizable

Common UI components available: Button, Input, Label, Sheet, DropdownMenu, Toast

## Important Notes

- **Color mode**: Uses class-based dark mode (`darkMode: ["class"]` in Tailwind config)
- **reCAPTCHA**: Configured via plugin at `plugins/vue-recaptcha-v3.ts` (client-side only)
- **Component auto-import**: Nuxt auto-imports components from `components/` directory
- **Composables**: Auto-imported from `composables/` directory
- **Type safety**: Project uses strict TypeScript - maintain type definitions in `types/`

## Related Documentation

For detailed project context and structure, see `LLMS.md` which contains comprehensive information about the portfolio content, technologies, and developer profile.
