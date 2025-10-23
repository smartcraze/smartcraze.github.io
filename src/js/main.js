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
        <div class="project-meta">
          <span class="project-category">${project.category}</span>
        </div>
        <div class="project-tech">
          ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          ${project.github ? `<a href="${project.github}" target="_blank">GitHub →</a>` : ''}
          ${project.live ? `<a href="${project.live}" target="_blank">Live Demo →</a>` : ''}
          ${project.video ? `<a href="#" class="video-link" data-video="${project.video}">Watch Demo →</a>` : ''}
        </div>
      </div>
    `).join('');
    
    // Add video modal listeners
    setupVideoModal();
  } catch (error) {
    console.log('No projects found yet');
    projectsContainer.innerHTML = '<p>No projects yet.</p>';
  }
}

// Setup video modal
function setupVideoModal() {
  // Create modal if it doesn't exist
  if (!document.getElementById('video-modal')) {
    const modal = document.createElement('div');
    modal.id = 'video-modal';
    modal.className = 'video-modal';
    modal.innerHTML = `
      <div class="video-modal-content">
        <button class="video-modal-close">&times;</button>
        <iframe id="video-iframe" allowfullscreen></iframe>
      </div>
    `;
    document.body.appendChild(modal);
    
    // Close modal on click outside or close button
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('video-modal-close')) {
        closeVideoModal();
      }
    });
  }
  
  // Add click listeners to video links
  document.querySelectorAll('.video-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const videoUrl = link.getAttribute('data-video');
      openVideoModal(videoUrl);
    });
  });
}

function openVideoModal(videoUrl) {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('video-iframe');
  iframe.src = videoUrl;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('video-iframe');
  iframe.src = '';
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Load blogs on page load
document.addEventListener('DOMContentLoaded', () => {
  loadLatestBlogs();
  loadProjects();
});
