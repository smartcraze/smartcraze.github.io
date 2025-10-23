// Load latest blog posts on homepage
async function loadLatestBlogs() {
  const blogContainer = document.getElementById('latest-blogs');
  if (!blogContainer) return;

  try {
    const response = await fetch('/blogs.json');
    const blogs = await response.json();
    
    // Get the latest 3 blogs
    const latestBlogs = blogs.slice(0, 3);
    
    if (latestBlogs.length === 0) {
      blogContainer.innerHTML = '<p>No blog posts yet.</p>';
      return;
    }
    
    blogContainer.innerHTML = latestBlogs.map(blog => `
      <div class="blog-item">
        <h3><a href="/blog/${blog.slug}/">${blog.title}</a></h3>
        <p class="blog-date">${blog.date}</p>
        <p class="blog-description">${blog.description}</p>
        <div class="blog-tags">
          ${blog.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
    `).join('');
  } catch (error) {
    console.log('No blogs found yet');
    blogContainer.innerHTML = '<p>No blog posts yet.</p>';
  }
}

// Load projects on homepage and projects page
async function loadProjects() {
  const projectsContainer = document.getElementById('projects-container');
  if (!projectsContainer) return;

  try {
    const response = await fetch('/projects.json');
    const projects = await response.json();
    
    if (projects.length === 0) {
      projectsContainer.innerHTML = '<p>No projects yet. Add projects to src/projects/ folder.</p>';
      return;
    }
    
    projectsContainer.innerHTML = projects.map(project => `
      <div class="project">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><strong>Tech:</strong> ${project.tech.join(', ')}</p>
        <div>
          ${project.github ? `<a href="${project.github}">GitHub</a>` : ''}
          ${project.live ? `<a href="${project.live}" style="margin-left: 15px;">Live Demo</a>` : ''}
        </div>
      </div>
    `).join('');
  } catch (error) {
    console.log('No projects found yet');
    projectsContainer.innerHTML = '<p>No projects yet.</p>';
  }
}

// Load blogs on page load
document.addEventListener('DOMContentLoaded', () => {
  loadLatestBlogs();
  loadProjects();
});
