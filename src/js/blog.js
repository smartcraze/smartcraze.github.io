document.addEventListener('DOMContentLoaded', () => {
  // Highlight all code blocks
  hljs.highlightAll();
  
  // Add copy buttons to all code blocks
  document.querySelectorAll('pre code').forEach((block) => {
    const pre = block.parentElement;
    
    // Create wrapper div
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);
    
    // Create copy button
    const button = document.createElement('button');
    button.className = 'copy-btn';
    button.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
    
    // Add copy functionality
    button.addEventListener('click', async () => {
      const code = block.textContent;
      
      try {
        await navigator.clipboard.writeText(code);
        button.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        button.classList.add('copied');
        
        setTimeout(() => {
          button.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
          button.classList.remove('copied');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
        button.innerHTML = '<i class="fa-solid fa-xmark"></i> Failed';
        setTimeout(() => {
          button.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
        }, 2000);
      }
    });
    
    wrapper.appendChild(button);
  });
});
