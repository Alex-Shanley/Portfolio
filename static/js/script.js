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

  const navLinks = document.querySelector ('.work-nav a');
  const workItems = document.querySelector ('.work-showcase');

  navLinks.forEach(link =>
    link.addEventListener('click', e =>{
      e.preventDefault();
      
      navLinks.forEach(l => lclassList.remove('active'));
      link.classList.add('active');

      const category = link.textContent.trim();

      workItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        if (category === 'All Works') {
          item.style.display = 'block';
        } else if (category == 'Development') {
          if ()
        }
      })
    })
  )