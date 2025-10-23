const fs = require('fs-extra');
const path = require('path');
const matter = require('gray-matter');
const MarkdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
}).use(markdownItAnchor);

// Directories
const srcDir = path.join(__dirname, 'src');
const distDir = path.join(__dirname, 'dist');
const blogsDir = path.join(srcDir, 'blogs');
const projectsDir = path.join(srcDir, 'projects');
const templatesDir = path.join(srcDir, 'templates');

// Clean and create dist directory
fs.emptyDirSync(distDir);

// Copy static assets
const staticDirs = ['css', 'js', 'images'];
staticDirs.forEach(dir => {
  const srcPath = path.join(srcDir, dir);
  const distPath = path.join(distDir, dir);
  if (fs.existsSync(srcPath)) {
    fs.copySync(srcPath, distPath);
  }
});

// Read templates
const blogTemplate = fs.readFileSync(path.join(templatesDir, 'blog-post.html'), 'utf-8');
const blogListTemplate = fs.readFileSync(path.join(templatesDir, 'blog-list.html'), 'utf-8');

// Process blog markdown files
const blogs = [];
const blogFiles = fs.readdirSync(blogsDir).filter(file => file.endsWith('.md'));

blogFiles.forEach(file => {
  const filePath = path.join(blogsDir, file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(fileContent);
  
  // Convert markdown to HTML
  const htmlContent = md.render(content);
  
  // Generate blog slug
  const slug = path.basename(file, '.md');
  
  // Create blog object
  const blog = {
    title: frontmatter.title || 'Untitled',
    date: frontmatter.date || new Date().toISOString().split('T')[0],
    description: frontmatter.description || '',
    tags: frontmatter.tags || [],
    slug: slug,
    content: htmlContent
  };
  
  blogs.push(blog);
  
  // Generate individual blog page
  let blogHtml = blogTemplate
    .replace(/{{title}}/g, blog.title)
    .replace(/{{date}}/g, blog.date)
    .replace(/{{content}}/g, blog.content)
    .replace(/{{description}}/g, blog.description)
    .replace(/{{tags}}/g, blog.tags.map(tag => `<span class="tag">${tag}</span>`).join(''));
  
  // Create blog directory and save HTML
  const blogDir = path.join(distDir, 'blog', slug);
  fs.ensureDirSync(blogDir);
  fs.writeFileSync(path.join(blogDir, 'index.html'), blogHtml);
});

// Sort blogs by date (newest first)
blogs.sort((a, b) => new Date(b.date) - new Date(a.date));

// Generate blog list HTML
const blogListHtml = blogs.map(blog => `
  <div class="blog-item">
    <h3><a href="/blog/${blog.slug}/">${blog.title}</a></h3>
    <p class="blog-date">${blog.date}</p>
    <p class="blog-description">${blog.description}</p>
    <div class="blog-tags">
      ${blog.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
    </div>
  </div>
`).join('');

// Generate blog listing page
let blogListPageHtml = blogListTemplate.replace('{{blogList}}', blogListHtml);
fs.ensureDirSync(path.join(distDir, 'blog'));
fs.writeFileSync(path.join(distDir, 'blog', 'index.html'), blogListPageHtml);

// Copy index.html and other root files
const rootFiles = ['index.html', 'projects.html'];
rootFiles.forEach(file => {
  const srcPath = path.join(srcDir, file);
  const distPath = path.join(distDir, file);
  if (fs.existsSync(srcPath)) {
    fs.copySync(srcPath, distPath);
  }
});

// Generate blog data JSON for dynamic loading
fs.writeFileSync(
  path.join(distDir, 'blogs.json'),
  JSON.stringify(blogs.map(b => ({
    title: b.title,
    date: b.date,
    description: b.description,
    tags: b.tags,
    slug: b.slug
  })), null, 2)
);

// Process project JSON files
const projects = [];
if (fs.existsSync(projectsDir)) {
  const projectFiles = fs.readdirSync(projectsDir).filter(file => file.endsWith('.json'));
  
  projectFiles.forEach(file => {
    const filePath = path.join(projectsDir, file);
    const projectData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    projects.push(projectData);
  });
}

// Generate projects data JSON
fs.writeFileSync(
  path.join(distDir, 'projects.json'),
  JSON.stringify(projects, null, 2)
);

console.log('✅ Build completed successfully!');
console.log(`📝 Generated ${blogs.length} blog post(s)`);
console.log(`🚀 Generated ${projects.length} project(s)`);
