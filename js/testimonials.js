// Testimonials JavaScript functionality

document.addEventListener('DOMContentLoaded', () => {
  // Testimonial slider functionality
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.dot');
  const prevButton = document.querySelector('.testimonial-prev');
  const nextButton = document.querySelector('.testimonial-next');
  
  let currentSlide = 0;
  const totalSlides = testimonialSlides.length;
  
  // Function to show a specific slide
  function showSlide(index) {
    // Handle index bounds
    if (index < 0) {
      index = totalSlides - 1;
    } else if (index >= totalSlides) {
      index = 0;
    }
    
    // Update current slide
    currentSlide = index;
    
    // Hide all slides and remove active class from dots
    testimonialSlides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show the current slide and set active dot
    testimonialSlides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }
  
  // Next button click handler
  if (nextButton) {
    nextButton.addEventListener('click', () => {
      showSlide(currentSlide + 1);
    });
  }
  
  // Previous button click handler
  if (prevButton) {
    prevButton.addEventListener('click', () => {
      showSlide(currentSlide - 1);
    });
  }
  
  // Dot click handlers
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });
  
  // Auto-slide functionality
  let slideInterval = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);
  
  // Pause auto-slide on hover
  const testimonialSlider = document.querySelector('.testimonial-slider');
  if (testimonialSlider) {
    testimonialSlider.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });
    
    testimonialSlider.addEventListener('mouseleave', () => {
      slideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
      }, 5000);
    });
  }
  
  // Handle keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      showSlide(currentSlide - 1);
    } else if (e.key === 'ArrowRight') {
      showSlide(currentSlide + 1);
    }
  });
  
  // Touch swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  if (testimonialSlider) {
    testimonialSlider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    testimonialSlider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }
  
  function handleSwipe() {
    // Detect swipe direction
    if (touchEndX < touchStartX - 50) {
      // Swipe left - show next slide
      showSlide(currentSlide + 1);
    } else if (touchEndX > touchStartX + 50) {
      // Swipe right - show previous slide
      showSlide(currentSlide - 1);
    }
  }
});