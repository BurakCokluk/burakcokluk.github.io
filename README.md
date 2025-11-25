# Burak Çokluk's Portfolio

Professional portfolio site built with Jekyll and a customized al-folio theme, showcasing infrastructure, DevOps, AI, and Web3 work.

## Highlights

- **Eight Sectioned Pages**: About, Projects, Blog, Skills, Tools, AI Projects, Resume, Contact
- **Project Case Studies**: Ten detailed project write-ups with technology stacks and outcomes
- **Radial Quick Launcher**: Floating JS-driven radial menu with ESC/outside click dismissal
- **Responsive UI**: Sticky glassmorphism navbar, dark mode support, mobile-friendly layouts
- **Structured Data**: Resume powered by `_data/cv.yml`, skills grid sourced from `_data/skills.yml`
- **Performance Ready**: Minimal dependencies, optimized SVG icons, SEO metadata

## Repository Layout

```
portfolyo/
├── _config.yml            # Global Jekyll + theme configuration
├── _pages/                # Top-level navigation pages
├── _projects/             # Project case study markdown files (01-10)
├── _data/
│   ├── cv.yml             # Resume sections and entries
│   └── skills.yml         # Skill grid entries and icon paths
├── _includes/
│   ├── header.html        # Primary navbar with social links
│   ├── footer.html        # Footer markup
│   └── ui/
│       ├── radial-menu.html   # Floating radial quick navigation
│       └── skills-grid.html   # Reusable skills grid partial
├── _layouts/              # Page, projects, blog, CV templates
├── assets/
│   ├── css/custom.css     # Custom theme overrides and components
│   ├── img/
│   │   ├── logo.svg/png   # Brand assets
│   │   └── skills/        # Inline-ready SVG skill icons
│   └── js/                # Navbar scroll + visual enhancements
├── Gemfile                # Ruby dependencies
└── README.md
```

## Content Overview

- `_pages/*.md`: Individual page content with YAML front matter controlling permalinks and navigation order
- `_projects/*.md`: Numbered project entries controlling display order and generated slugs
- `_data/cv.yml`: Nested sections for the resume page, supporting text, list, and map formats
- `_data/skills.yml`: Source list for the skills grid include; each entry supplies a label and icon path
- `_includes/ui/skills-grid.html`: Renders skills as cards with inline SVGs or fallback emoji
- `_includes/ui/radial-menu.html`: Menu items defined via a JavaScript array for quick edits

## Radial Menu Configuration

- Update the `menuItems` array in `_includes/ui/radial-menu.html` to change labels, destinations, or add external links
- Icon markup lives in the `iconMap` registry—drop in custom `<svg>` snippets to align branding
- Menu auto-closes when a link is clicked, focus leaves the menu, or the `Escape` key is pressed
- Positioning recalculates on window resize; radius and transition timing can be tuned in the same file or via `custom.css`

## Skills Grid Customization

- Edit `_data/skills.yml` to add, remove, or reorder skill cards (SVG paths are relative to the site root)
- SVG files live in `assets/img/skills/`; ensure they include proper namespaces for inline usage
- The include `{% include ui/skills-grid.html %}` can be dropped into any page section for consistent presentation

## Local Development

### Requirements

- Ruby 3.0+
- Bundler
- Jekyll 4.3+

### Workflow

```bash
# Install dependencies
bundle install

# Serve with live reload (default: http://localhost:4000)
bundle exec jekyll serve --host 127.0.0.1 --port 4000

# Production build
bundle exec jekyll build
```

Generated HTML outputs to `_site/`; the directory is git-ignored and rebuilt for each serve/build command.

## Theme & Styling Notes

- Core overrides live in `assets/css/custom.css`
- Palette derives from CSS variables: `--primary-color: #667EEA`, `--secondary-color: #764BA2`, `--accent-color: #4FACFE`
- Navbar and radial menu use glassmorphism-inspired backgrounds with blur filters
- Dark mode is toggled at the theme level via `enable_darkmode: true` in `_config.yml`

## Adding Content

- **Pages**: Create new markdown files under `_pages/` with the `layout` and `permalink` defined in front matter
- **Projects**: Copy an existing `_projects/` file, increment the numeric prefix to control ordering, and adjust metadata
- **Resume**: Follow the structured schema in `_data/cv.yml` (supports nested bullet lists and map layouts)
- **Blog Posts**: Add dated markdown files to `_posts/` (standard Jekyll convention) if blogging is enabled

## Deployment

- Designed for GitHub Pages—push to `main` (or configured branch) and enable Pages in repository settings
- For custom domains, provide a `CNAME` file and update DNS A/AAAA records to GitHub Pages endpoints
- Alternative hosts (Netlify, Vercel, AWS Amplify) can run `jekyll build` and publish the `_site/` directory

## Tooling Stack

- **Static Site Generator**: Jekyll 4.3+
- **Theme Base**: al-folio with bespoke overrides
- **Enhancements**: Vanilla JavaScript (radial menu, navbar scroll effects)
- **Icons**: Font Awesome for social links, inline SVGs for skills and menu glyphs
- **Deployment Target**: GitHub Pages-ready out of the box

## Maintenance Checklist

- `bundle update` periodically to receive security and plugin updates
- Rebuild locally before deploying to confirm no Liquid or Markdown errors
- Validate responsive behaviour (desktop, tablet, mobile) after major layout changes
- Monitor SEO outputs (`_site/sitemap.xml`, meta tags via `jekyll-seo-tag`)

## Contact

- Email: burak@example.com
- GitHub: https://github.com/burakcokluk
- LinkedIn: https://linkedin.com/in/burakcokluk

---

**Last Updated**: November 26, 2025  
**Status**: Production ready ✓
