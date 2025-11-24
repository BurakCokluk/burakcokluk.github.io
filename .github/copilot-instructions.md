# AI Coding Agent Instructions - Burak Çokluk Portfolio

## Project Overview
Jekyll-based personal portfolio site showcasing professional experience, projects, and technical skills. Built with custom al-folio theme modifications, deployed as GitHub Pages static site.

## Architecture & Data Flow

### Content Architecture
- **Pages** (`_pages/`): 8 navigation pages using simple markdown → rendered via `page.html`, `projects.html`, `cv.html`, or `blog.html` layouts
- **Projects** (`_projects/`): 10 detailed project cards (numbered 01-10) as individual markdown files with frontmatter (layout, title, description, img, category, tags)
- **CV Data** (`_data/cv.yml`): Structured YAML feeding the resume page via `cv.html` layout
- **Static Assets** (`assets/`): Custom CSS, SVG/PNG images under `assets/img/`, project placeholders in `assets/img/projects/`

### Rendering Pipeline
1. Jekyll reads `_config.yml` for site settings, collections (`pages`, `projects`), plugins
2. Liquid templates in `_layouts/` process markdown through includes (`header.html`, `footer.html`, `head.html`)
3. Collections output to URLs: `_pages/about.md` → `/about/index.html`, `_projects/01_tradeinsight_ai.md` → `/projects/01-tradeinsight-ai/index.html`
4. Build output goes to `_site/` (excluded from git, regenerated on each build)

## Critical Developer Workflows

### Local Development
```bash
# Start dev server (runs on http://localhost:4000)
bundle exec jekyll serve

# Production build (outputs to _site/)
bundle exec jekyll build
```
**Note**: Server auto-reloads on file changes. CSS changes require hard refresh (Cmd+Shift+R).

### Adding New Content

**New Page**: Create `_pages/new-page.md` with frontmatter:
```yaml
---
layout: page
title: Page Title
permalink: /new-page/
nav: true          # Include in navigation (edit _includes/header.html manually)
nav_order: 9
---
```

**New Project**: Create `_projects/##_project-slug.md` (number determines display order):
```yaml
---
layout: page
title: Project Name
description: Brief description
img: /assets/img/projects/placeholder.png
importance: 1
category: AI & FinTech  # Used for grouping
github: https://github.com/user/repo
tags: [Python, FastAPI, ML]
---
```

**Update CV**: Edit `_data/cv.yml` following existing structure (types: `map`, `text`, `list`, `nested_list`)

## Project-Specific Conventions

### Navigation
- **Hardcoded**: Navigation links in `_includes/header.html` (lines 25-50) must be manually updated when adding pages
- **Order**: Follow nav_order in `_config.yml` (about → projects → blog → skills → tools → ai-projects → resume → contact)

### Styling Philosophy
- Custom CSS in `assets/css/custom.css` uses CSS variables (`:root`) for theming
- **Primary color**: `--primary-color: #2563EB` (blue accent throughout)
- **Navbar**: Sticky with blur effect, scrolled state triggers `.header-scrolled` class
- **Dark mode**: Enabled via `enable_darkmode: true` in `_config.yml` (theme-specific implementation)

### Project Numbering
Projects use zero-padded numbers (`01-10`) for consistent sorting:
- `01_tradeinsight_ai.md` renders to `/projects/01-tradeinsight-ai/`
- URL slug auto-generated from filename (underscores → hyphens, numbers preserved)

### Image Handling
- **Logo**: SVG preferred (`/assets/img/logo.svg`) with PNG fallback via `<picture>` tag
- **Project images**: Place in `/assets/img/projects/` and reference as `/assets/img/projects/filename.png`
- **Banner**: `/assets/img/header-banner.svg` used in hero section

## Key Configuration Points

### `_config.yml` Critical Settings
- `collections`: Defines `pages` and `projects` with `output: true` and custom permalinks
- `exclude`: Prevents processing of `node_modules`, `vendor/`, `.jekyll-cache`
- `plugins`: Uses `jekyll-sitemap`, `jekyll-seo-tag`, `jekyll-paginate`
- **Personal info**: Update `title`, `email`, `github_username`, `linkedin_username` here

### Layout Selection Logic
- `default.html`: Basic wrapper with header/footer
- `page.html`: Standard content pages
- `projects.html`: Loops through `site.projects` collection to display project grid
- `cv.html`: Renders `site.data.cv` with conditional logic for section types
- `blog.html`: Paginated post listing (uses `jekyll-paginate`)

## Testing & Validation

### Pre-deployment Checks
1. Run `bundle exec jekyll build` → verify no errors in build output
2. Check `_site/sitemap.xml` exists (SEO requirement)
3. Validate responsive design: navbar collapse on mobile (<992px)
4. Test dark mode toggle if implementing features

### Common Issues
- **404 on new page**: Ensure `permalink` in frontmatter ends with `/`
- **Projects not showing**: Verify file in `_projects/` and collection defined in `_config.yml`
- **CSS not updating**: Hard refresh browser cache or restart Jekyll server
- **Navigation not updating**: Must manually edit `_includes/header.html` navbar links

## Dependencies & Versions
- **Jekyll**: 4.3+ (Ruby gem)
- **Plugins**: `jekyll-sitemap ~> 1.4`, `jekyll-seo-tag ~> 2.8`, `jekyll-paginate ~> 1.1`
- **Ruby**: 3.0+ required (uses `webrick` gem for dev server)
- Install via: `bundle install`

## Deployment
- **Target**: GitHub Pages (static site hosting)
- **Branch**: Typically `main` or `gh-pages`
- **Custom domain**: Configure via `url` in `_config.yml` and CNAME file if needed
- **Build**: GitHub Actions can auto-build, or pre-build `_site/` and push

## Examples from Codebase

### CV Section Structure (`_data/cv.yml`)
```yaml
- title: Section Name
  type: list              # or 'map', 'text', 'nested_list'
  contents:
    - title: Entry Title
      institution: Company Name
      year: 2019 - Present
      description:        # Array of bullet points
        - Achievement 1
        - Achievement 2
```

### Project Frontmatter Pattern (`_projects/01_tradeinsight_ai.md`)
```yaml
---
layout: page
title: TradeInsight AI
description: Real-time technical analysis and automated trading signals powered by machine learning
img: /assets/img/projects/tradeinsight.png
importance: 1
category: AI & FinTech
github: https://github.com/burakcokluk/tradeinsight-ai
tags: [Python, FastAPI, Machine Learning]
---
```

### Custom CSS Variable Usage
Override theme colors by modifying `:root` in `assets/css/custom.css`:
```css
:root {
  --primary-color: #2563EB;    /* Main brand color */
  --accent-color: #F59E0B;     /* Call-to-action buttons */
}
```

---

**When editing**: Always preserve frontmatter YAML structure. Use `bundle exec jekyll serve` for live preview. Check `_site/` output before committing.
