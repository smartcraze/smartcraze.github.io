# Suraj Vishwakarma - Portfolio & Blog

A clean, minimal personal portfolio and blog website. Write your blog posts in Markdown and manage projects with simple JSON files!

## ✨ Features

- 📝 **Markdown Blog System** - Write blogs in Markdown, automatically converted to HTML
- � **JSON Project Management** - Add projects by creating simple JSON files
- 📱 **Responsive Design** - Clean, minimal design that works on all devices
- ⚡ **Fast & Lightweight** - No heavy frameworks, pure HTML/CSS/JS
- 🎯 **Easy Deployment** - One command to deploy to GitHub Pages

## � Quick Start

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Build the site**
   ```bash
   npm run build
   ```

3. **Preview locally**
   ```bash
   npm run dev
   ```
   Then open http://localhost:3000 in your browser

## � Adding Projects

Projects are managed as JSON files in the `src/projects/` directory.

### Create a New Project

1. Create a new `.json` file in `src/projects/` (e.g., `my-project.json`)
2. Add your project details:

```json
{
  "title": "Project Name",
  "description": "What your project does and why it's useful.",
  "tech": ["Node.js", "Express", "MongoDB"],
  "github": "https://github.com/smartcraze/your-repo",
  "live": "https://your-demo-url.com",
  "featured": true
}
```

3. Build the site: `npm run build`

**That's it!** Your project will automatically appear on your homepage and projects page.

See `src/projects/README.md` for more details.

## 📝 Writing Blog Posts

### Creating a New Blog Post

1. Create a new Markdown file in `src/blogs/` directory:
   ```bash
   src/blogs/my-new-post.md
   ```

2. Add frontmatter at the top of your Markdown file:
   ```markdown
   ---
   title: "Your Blog Post Title"
   date: "2025-10-23"
   description: "A brief description of your blog post"
   tags: ["tag1", "tag2", "tag3"]
   ---

   # Your Blog Post Title

   Your content goes here...
   ```

3. Write your content using Markdown syntax

4. Build the site to generate the HTML:
   ```bash
   npm run build
   ```

### Markdown Syntax Guide

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet point
- Another point

1. Numbered list
2. Second item

[Link text](https://example.com)

![Image alt text](image-url.jpg)

`inline code`

\`\`\`javascript
// Code block
const hello = "world";
\`\`\`

> Blockquote
```

## 🎨 Customization

### Personalizing Content

1. **Update Personal Info** - Edit `src/index.html`:
   - Your profile picture is loaded from GitHub
   - Update your name, title, and bio
   - Update social media links (currently set to surajv354)

2. **Add Projects** - Create JSON files in `src/projects/`:
   - Each file = one project
   - See `src/projects/README.md` for the format

3. **Update Contact Links** - In `src/index.html`:
   - GitHub: smartcraze
   - Twitter/LinkedIn/Instagram: surajv354

### Changing Colors & Theme

The site uses a clean black and white theme. To customize colors, edit `src/css/styles.css`:

```css
/* Change link colors */
a {
  color: #0066cc;  /* Change this */
}

/* Change borders */
border: 1px solid #ddd;  /* Change this */
```

## 🚀 Deployment to GitHub Pages

### First Time Setup

1. **Build your site**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

This will:
- Build your site into the `dist` folder
- Push the `dist` folder to the `gh-pages` branch
- Your site will be live at `https://smartcraze.github.io`

### Subsequent Deployments

After making changes:

1. Update your content (HTML, CSS, blog posts, etc.)
2. Run `npm run deploy`
3. Wait a few minutes for GitHub Pages to update

### Manual Deployment

If you prefer manual deployment:

1. Build: `npm run build`
2. Commit and push the `dist` folder contents
3. Configure GitHub Pages to use the `gh-pages` branch

## 📁 Project Structure

```
smartcraze.github.io/
├── src/
│   ├── blogs/              # Markdown blog posts
│   │   ├── welcome-to-my-blog.md
│   │   ├── getting-started-with-web-development.md
│   │   └── javascript-tips.md
│   ├── projects/           # JSON project files
│   │   ├── example-project.json
│   │   ├── another-project.json
│   │   └── README.md
│   ├── css/
│   │   └── styles.css      # Main stylesheet
│   ├── js/
│   │   └── main.js         # JavaScript functionality
│   ├── templates/
│   │   ├── blog-post.html  # Blog post template
│   │   └── blog-list.html  # Blog listing template
│   ├── index.html          # Homepage
│   └── projects.html       # Projects page
├── dist/                   # Generated site (created on build)
├── build.js               # Build script
├── server.js              # Dev server
├── package.json
└── README.md
```

## 🛠️ Available Scripts

```bash
# Install dependencies
npm install

# Build the site
npm run build

# Run local development server
npm run dev

# Deploy to GitHub Pages
npm run deploy
```

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 968px
- Desktop: > 968px

## 🎯 SEO Best Practices

The site includes:
- Semantic HTML5 elements
- Meta descriptions
- Open Graph tags
- Clean URLs
- Fast loading times

### Adding Meta Tags for Blog Posts

Meta tags are automatically generated from your frontmatter:
- `title` → Page title and og:title
- `description` → Meta description and og:description

## 🐛 Troubleshooting

### Build fails
- Ensure all dependencies are installed: `npm install`
- Check for syntax errors in Markdown files
- Verify frontmatter format is correct

### Deploy fails
- Ensure you have push access to the repository
- Check if `gh-pages` package is installed
- Verify GitHub Pages is enabled in repository settings

### Styles not loading
- Check file paths in HTML files
- Ensure build completed successfully
- Clear browser cache

## 🤝 Contributing

This is a personal website template, but feel free to:
- Fork and customize for your own use
- Report bugs or issues
- Suggest improvements

## 📄 License

MIT License - Feel free to use this for your own portfolio!

## 🙏 Acknowledgments

- Fonts: Google Fonts (Inter, Fira Code)
- Icons: Hand-crafted SVG icons
- Inspiration: Modern web design trends

## 📞 Support

If you need help or have questions:
- Open an issue on GitHub
- Check existing issues for solutions
- Review the documentation above

---

**Built by Suraj Vishwakarma (smartcraze) 🚀**
