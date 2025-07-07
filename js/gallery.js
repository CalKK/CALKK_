// Gallery JavaScript functionality

document.addEventListener('DOMContentLoaded', () => {
  // Gallery filtering functionality
  const galleryFilters = document.querySelectorAll('.gallery-filter');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryFilters.forEach(filter => {
    filter.addEventListener('click', function() {
      // Update active filter
      galleryFilters.forEach(f => f.classList.remove('active'));
      this.classList.add('active');
      
      const filterValue = this.getAttribute('data-filter');
      
      // Show/hide gallery items based on filter
      galleryItems.forEach(item => {
        if (filterValue === 'all' || item.classList.contains(filterValue)) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
  
  // Lightbox functionality for gallery items
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const imgSrc = this.querySelector('img').getAttribute('src');
      const imgAlt = this.querySelector('img').getAttribute('alt');
      
      // Create lightbox elements
      const lightbox = document.createElement('div');
      lightbox.classList.add('lightbox');
      
      const lightboxContent = document.createElement('div');
      lightboxContent.classList.add('lightbox-content');
      
      const lightboxImg = document.createElement('img');
      lightboxImg.setAttribute('src', imgSrc);
      lightboxImg.setAttribute('alt', imgAlt);
      
      const lightboxClose = document.createElement('span');
      lightboxClose.classList.add('lightbox-close');
      lightboxClose.innerHTML = '&times;';
      
      const lightboxCaption = document.createElement('div');
      lightboxCaption.classList.add('lightbox-caption');
      lightboxCaption.textContent = imgAlt;
      
      // Build lightbox structure
      lightboxContent.appendChild(lightboxImg);
      lightboxContent.appendChild(lightboxCaption);
      lightbox.appendChild(lightboxClose);
      lightbox.appendChild(lightboxContent);
      document.body.appendChild(lightbox);
      
      // Prevent body scrolling when lightbox is open
      document.body.style.overflow = 'hidden';
      
      // Add animation
      setTimeout(() => {
        lightbox.style.opacity = '1';
      }, 50);
      
      // Close lightbox on click
      lightboxClose.addEventListener('click', closeLightbox);
      lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
          closeLightbox();
        }
      });
      
      // Close on ESC key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          closeLightbox();
        }
      });
      
      function closeLightbox() {
        lightbox.style.opacity = '0';
        setTimeout(() => {
          document.body.removeChild(lightbox);
          document.body.style.overflow = 'auto';
        }, 300);
      }
    });
  });
  
  // Add CSS for lightbox if it doesn't exist
  if (!document.querySelector('#lightbox-styles')) {
    const style = document.createElement('style');
    style.id = 'lightbox-styles';
    style.textContent = `
      .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      
      .lightbox-content {
        max-width: 90%;
        max-height: 90%;
        position: relative;
      }
      
      .lightbox-content img {
        max-width: 100%;
        max-height: 80vh;
        object-fit: contain;
        border: 5px solid #fff;
      }
      
      .lightbox-close {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 35px;
        color: #fff;
        cursor: pointer;
        z-index: 10000;
      }
      
      .lightbox-caption {
        color: #fff;
        text-align: center;
        padding: 10px;
        background-color: rgba(0, 0, 0, 0.7);
        margin-top: 10px;
        border-radius: 5px;
      }
    `;
    document.head.appendChild(style);
  }
});