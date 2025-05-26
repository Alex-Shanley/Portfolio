document.addEventListener('DOMContentLoaded', () => {
    const customCursor = document.getElementById('Blog-cursor');
    const articles = document.querySelectorAll('.article');
  
    
    articles.forEach(article => {
      article.addEventListener('mouseenter', () => {
        customCursor.style.opacity = '1';
      });
  
      article.addEventListener('mouseleave', () => {
        customCursor.style.opacity = '0';
      });
    });
  
    
    document.addEventListener('mousemove', (e) => {
      customCursor.style.left = e.clientX + 'px';
      customCursor.style.top = e.clientY + 'px';
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const customCursor = document.getElementById('My-work-cursor');
    const articles = document.querySelectorAll('.work-showcase');
  
    
    articles.forEach(article => {
      article.addEventListener('mouseenter', () => {
        customCursor.style.opacity = '1';
      });
  
      article.addEventListener('mouseleave', () => {
        customCursor.style.opacity = '0';
      });
    });
  
    
    document.addEventListener('mousemove', (e) => {
      customCursor.style.left = e.clientX + 'px';
      customCursor.style.top = e.clientY + 'px';
    });
  });