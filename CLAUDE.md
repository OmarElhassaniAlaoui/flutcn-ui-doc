# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Flutcn UI is a documentation website for a Flutter CLI tool that provides pre-built widgets and themes. The site is built with Next.js 15 and serves as both documentation and a registry API that the Flutter CLI can query to download widget code and themes.

**Key Architecture:**
- **Documentation Site**: Next.js app using Fumadocs for MDX-based documentation
- **Registry API**: Next.js API routes that serve Flutter/Dart code files (.dart) as plain text
- **Widget Registry**: File-based registry in `/registry` containing Flutter widget implementations and themes organized by style variants

## Common Commands

```bash
# Development
pnpm dev                    # Start development server (localhost:3000)

# Build and deployment
pnpm build                  # Build for production
pnpm start                  # Start production server

# Post-install
pnpm postinstall            # Runs fumadocs-mdx to process MDX files
```

## Project Structure

### Registry System (`/registry`)

The registry is the heart of the project - it stores Flutter widget code that the CLI downloads:

```
registry/
├── new-york/              # Primary style variant
│   ├── app_theme.dart     # Base theme configuration
│   ├── widgets/           # Widget implementations (.dart files)
│   │   ├── button.dart
│   │   └── avatar.dart
│   └── color-scheme/      # Color palette variants
│       ├── zinc/app_palette.dart
│       ├── gray/app_palette.dart
│       ├── red/app_palette.dart
│       └── blue/app_palette.dart
└── default/               # Alternative style variant (future)
```

**Registry API Routes:**
- `GET /api/registry/widgets` → Lists all available widgets
- `GET /api/registry/widgets/[style]/[name]` → Returns widget .dart file content
- `GET /api/registry/theme/[style]` → Returns app_theme.dart
- `GET /api/registry/colorScheme/[style]/[palette]` → Returns app_palette.dart

### Documentation (`/content/docs`)

MDX files processed by Fumadocs:

```
content/docs/
├── index.mdx              # Homepage documentation
├── gettingstarted.mdx     # Setup guide
├── widgets/               # Widget documentation
│   └── avatar.mdx         # Example: installation and usage docs
└── themes/                # Theme customization docs
```

### Source Code (`/src`)

- **App Router**: `/src/app` - Next.js 15 app directory
  - `(home)/` - Homepage route group
  - `docs/[[...slug]]/` - Dynamic documentation routes
  - `api/` - API routes
  - `registry/` - Registry API endpoints

- **Libraries**: `/src/lib`
  - `source.ts` - Fumadocs loader configurations for docs, widgets, and themes
  - `utils.ts` - Utility functions

- **Components**: `/src/components`
  - `ui/` - Reusable UI components (React/TypeScript)
  - `layout/` - Layout components like footer

## Configuration Files

- **`source.config.ts`**: Fumadocs MDX configuration defining content collections (`docs`, `widgets`)
- **`components.json`**: shadcn/ui configuration for component styling (New York style, using Lucide icons)
- **`tsconfig.json`**: TypeScript configuration with path aliases (@/*)

## Key Technologies

- **Next.js 15** with App Router (React Server Components)
- **Fumadocs**: Documentation framework (v15.0.13) for MDX processing
- **Tailwind CSS v4**: Styling with PostCSS
- **TypeScript**: Type-safe development
- **Zod**: Schema validation
- **pnpm**: Package manager

## Development Patterns

### Adding New Widgets

1. Create the widget .dart file in `/registry/[style]/widgets/[name].dart`
2. Add documentation in `/content/docs/widgets/[name].mdx`
3. The API route `/api/registry/widgets` automatically discovers .dart files
4. Widget docs should include: title, description, installation command, usage examples, and properties table

### Widget Structure

Flutter widgets follow shadcn/ui patterns with:
- Enum-based variants (e.g., `ButtonVariant.primary`, `ButtonVariant.outline`)
- Size enums (e.g., `ButtonSize.sm`, `ButtonSize.md`)
- Named constructors for common configurations
- Theme integration via `AppPalette.colors`

### Registry API Patterns

All registry routes:
- Use async params: `const params = await context.params`
- Return plain text for .dart files: `Content-Type: text/plain`
- Handle 404s for missing files
- Use `process.cwd()` + `path.join()` for file paths

### Documentation Structure

MDX files use frontmatter schema defined in `source.config.ts`:
```yaml
---
title: Widget Name
description: Brief description
index: false  # Optional: whether to show in index
---
```

## Path Aliases

TypeScript paths configured in tsconfig.json and components.json:
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`
- `@/` → `src/`

## Important Notes

- The registry serves **Flutter/Dart code**, not React components
- All .dart files in `/registry/[style]/widgets/` are automatically discovered
- Documentation is separate from implementation - docs are in `/content`, code is in `/registry`
- The site uses Fumadocs' built-in search via `/api/search/route.ts`
- Theme system expects color palette files at `/registry/[style]/color-scheme/[palette]/app_palette.dart`
