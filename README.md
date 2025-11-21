# Burak Çokluk's Portfolio

A modern, professional portfolio website built with Jekyll and the al-folio theme.

## Features

- **8 Professional Pages**: About, Projects, Blog, Skills, Tools, AI Projects, Resume, Contact
- **10 Project Showcases**: Detailed case studies with technologies, results, and metrics
- **Responsive Design**: Mobile-friendly interface with dark mode support
- **Complete CV**: Structured YAML-based resume data
- **Modern Styling**: Professional typography, color scheme, and components
- **SEO Optimized**: Proper metadata and structured data

## Project Structure

```
portfolyo/
├── _config.yml           # Jekyll configuration
├── _pages/               # Main navigation pages (About, Projects, etc.)
├── _projects/            # 10 detailed project cards
├── _data/
│   └── cv.yml           # CV resume data
├── _includes/
│   └── header.html      # Navigation header
├── assets/
│   ├── css/
│   │   └── custom.css   # Professional styling
│   └── img/
│       ├── logo.png     # Navbar logo
│       ├── header-banner.svg
│       └── projects/    # Project placeholder images
└── Gemfile              # Ruby dependencies
```

## Pages

### Navigation Pages (_pages/)
- **about.md** - Professional introduction and background
- **projects.md** - Project listing index
- **blog.md** - Technical blog index
- **skills.md** - Detailed technical skills
- **tools.md** - Tools and technologies used
- **ai-projects.md** - AI-powered projects
- **resume.md** - CV display page
- **contact.md** - Contact information

### Project Cards (_projects/)
1. **TradeInsight AI** - ML-powered trading signals platform
2. **HabitCoach** - AI habit tracking with behavioral science
3. **IMA Coach** - Conversational mental health AI
4. **AppMan** - Enterprise deployment automation
5. **Observability Stack** - Zabbix + Grafana monitoring
6. **Ripple Platform** - XRPL-based payment system
7. **Solana dApp** - Token launchpad on Solana
8. **Selenium Analyzer** - E-commerce web scraping
9. **FastAPI E-Commerce** - Full-stack backend
10. **Web3 Infrastructure** - Multi-chain token toolkit

## Setup & Installation

### Prerequisites
- Ruby (3.0+)
- Bundler
- Jekyll (4.3+)

### Local Development

```bash
# Navigate to project
cd portfolyo

# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# Site will be available at http://localhost:4000
```

### Build for Production

```bash
# Generate static site
bundle exec jekyll build

# Output in _site/ directory
```

## Customization

### Update Information
- Edit `_config.yml` to change site title, author, social links
- Update `_data/cv.yml` with your CV information
- Modify individual page files in `_pages/` for content

### Styling
- Color variables defined in `assets/css/custom.css`
- Modify `:root` CSS variables for theme colors
- Update `_includes/header.html` for navigation changes

### Add Content
- New pages: Create `.md` files in `_pages/` with proper YAML front-matter
- New projects: Create `.md` files in `_projects/` with metadata
- Blog posts: Create `.md` files in `_posts/` with date prefix

## Technology Stack

- **Static Site Generator**: Jekyll 4.3+
- **Theme**: al-folio compatible
- **Styling**: CSS3 with responsive design
- **Fonts**: System fonts (Segoe UI, Arial)
- **Icons**: FontAwesome
- **Deployment**: GitHub Pages ready

## Color Scheme

- **Primary Blue**: #0066cc
- **Secondary Cyan**: #00a3e0
- **Accent Orange**: #ff6b35
- **Dark Text**: #1a1a1a
- **Light Background**: #f8f9fa

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### GitHub Pages
1. Push repository to GitHub
2. Enable Pages in repository settings
3. Select main/master branch as source
4. Site will be live at `https://yourusername.github.io/portfolyo`

### Custom Domain
1. Add `CNAME` file to root with your domain
2. Update DNS records to point to GitHub Pages
3. Enable HTTPS in repository settings

### Other Platforms
- Netlify, Vercel, and AWS Amplify are also supported
- Build command: `jekyll build`
- Publish directory: `_site/`

## Performance Optimizations

- Minimal CSS (20KB uncompressed)
- Image optimization with placeholder SVGs
- No JavaScript framework dependencies
- Fast page load times
- Core Web Vitals optimized

## Maintenance

- Update Jekyll regularly: `bundle update jekyll`
- Check for plugin updates: `bundle update`
- Monitor 404s and broken links
- Keep content fresh with regular blog posts
- Test responsive design on multiple devices

## License

This portfolio structure is inspired by al-folio theme. Customize freely for your use.

## Contact

- Email: burak@example.com
- GitHub: github.com/burakcokluk
- LinkedIn: linkedin.com/in/burakcokluk

---

**Last Updated**: November 21, 2025
**Status**: Production Ready ✓
