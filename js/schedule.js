// Enhanced Schedule JavaScript functionality with scrollable dropdowns

document.addEventListener('DOMContentLoaded', () => {
  // Schedule tabs functionality
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Update active button
      tabButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Show the selected tab pane
      const targetDay = this.getAttribute('data-day');
      
      tabPanes.forEach(pane => {
        if (pane.id === targetDay) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });
    });
  });
  
  // Enhanced pricing dropdown functionality with scrolling support
  const pricingDropdowns = document.querySelectorAll('.pricing-dropdown');
  
  pricingDropdowns.forEach(dropdown => {
    const header = dropdown.querySelector('.pricing-dropdown-header');
    const content = dropdown.querySelector('.pricing-dropdown-content');
    const icon = dropdown.querySelector('.pricing-dropdown-icon');
    
    header.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      // Close other dropdowns
      pricingDropdowns.forEach(otherDropdown => {
        if (otherDropdown !== dropdown && otherDropdown.classList.contains('active')) {
          otherDropdown.classList.remove('active');
          // Reset scroll position when closing
          const otherContent = otherDropdown.querySelector('.pricing-dropdown-content');
          if (otherContent) {
            otherContent.scrollTop = 0;
          }
        }
      });
      
      // Toggle current dropdown
      const isActive = dropdown.classList.contains('active');
      dropdown.classList.toggle('active');
      
      // Add smooth scroll behavior and focus management
      if (!isActive) {
        // Opening dropdown
        setTimeout(() => {
          if (content) {
            content.scrollTop = 0; // Reset scroll to top when opening
            content.focus(); // Focus for keyboard navigation
          }
        }, 100);
      }
      
      // Add accessibility attributes
      header.setAttribute('aria-expanded', !isActive);
      if (content) {
        content.setAttribute('aria-hidden', isActive);
      }
    });
    
    // Keyboard navigation support
    header.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
      }
      if (e.key === 'Escape') {
        dropdown.classList.remove('active');
        header.focus();
      }
    });
    
    // Scroll event handling for dropdown content
    if (content) {
      content.addEventListener('scroll', function() {
        // Add shadow effect when scrolled
        if (content.scrollTop > 0) {
          content.style.boxShadow = 'inset 0 10px 10px -10px rgba(0,0,0,0.1)';
        } else {
          content.style.boxShadow = 'none';
        }
        
        // Add bottom shadow when not at bottom
        if (content.scrollTop < content.scrollHeight - content.clientHeight) {
          content.style.borderBottom = '1px solid var(--medium-gray)';
        } else {
          content.style.borderBottom = 'none';
        }
      });
      
      // Smooth scrolling for pricing items
      const pricingItems = content.querySelectorAll('.pricing-item');
      pricingItems.forEach((item, index) => {
        item.addEventListener('click', function() {
          // Add selection effect
          pricingItems.forEach(otherItem => otherItem.classList.remove('selected'));
          item.classList.add('selected');
          
          // Store selected pricing info (could be used for booking)
          const packageName = item.querySelector('.pricing-item-name').textContent;
          const packagePrice = item.querySelector('.pricing-item-price').textContent;
          const packageDuration = item.querySelector('.pricing-item-duration').textContent;
          
          // Store in sessionStorage for potential use in booking
          sessionStorage.setItem('selectedPackage', JSON.stringify({
            name: packageName,
            price: packagePrice,
            duration: packageDuration,
            category: dropdown.querySelector('h4').textContent
          }));
          
          // Visual feedback
          item.style.backgroundColor = 'var(--primary-light)';
          item.style.color = 'var(--light-color)';
          
          setTimeout(() => {
            item.style.backgroundColor = '';
            item.style.color = '';
          }, 200);
        });
      });
    }
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.pricing-dropdown')) {
      pricingDropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
        const content = dropdown.querySelector('.pricing-dropdown-content');
        if (content) {
          content.scrollTop = 0; // Reset scroll when closing
        }
      });
    }
  });
  
  // Enhanced booking functionality for schedule items
  const bookButtons = document.querySelectorAll('.schedule-item .btn');
  
  bookButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get class details
      const scheduleItem = this.closest('.schedule-item');
      const className = scheduleItem.querySelector('h4').textContent;
      const time = scheduleItem.querySelector('.schedule-time').textContent;
      const instructor = scheduleItem.querySelector('p').textContent.replace('Instructor: ', '');
      
      // Store booking details in sessionStorage
      sessionStorage.setItem('bookingClass', className);
      sessionStorage.setItem('bookingTime', time);
      sessionStorage.setItem('bookingInstructor', instructor);
      
      // Visual feedback
      button.style.transform = 'scale(0.95)';
      button.textContent = 'Selected!';
      
      setTimeout(() => {
        button.style.transform = '';
        button.textContent = 'Book';
      }, 1000);
      
      // Scroll to booking section
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        window.scrollTo({
          top: bookingSection.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add scroll indicators for dropdowns
  function addScrollIndicators() {
    pricingDropdowns.forEach(dropdown => {
      const content = dropdown.querySelector('.pricing-dropdown-content');
      if (content) {
        const indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        indicator.innerHTML = '<i class="fas fa-chevron-down"></i>';
        indicator.style.cssText = `
          position: absolute;
          bottom: 10px;
          right: 15px;
          color: var(--primary-color);
          font-size: 12px;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        `;
        
        dropdown.appendChild(indicator);
        
        // Show indicator when there's more content to scroll
        content.addEventListener('scroll', function() {
          const hasMoreContent = content.scrollTop < content.scrollHeight - content.clientHeight - 10;
          indicator.style.opacity = hasMoreContent ? '1' : '0';
        });
        
        // Initial check
        setTimeout(() => {
          const hasMoreContent = content.scrollHeight > content.clientHeight;
          indicator.style.opacity = hasMoreContent ? '1' : '0';
        }, 500);
      }
    });
  }
  
  // Initialize scroll indicators
  addScrollIndicators();
  
  // Accessibility improvements
  pricingDropdowns.forEach(dropdown => {
    const header = dropdown.querySelector('.pricing-dropdown-header');
    const content = dropdown.querySelector('.pricing-dropdown-content');
    
    // Add ARIA attributes
    header.setAttribute('role', 'button');
    header.setAttribute('aria-expanded', 'false');
    header.setAttribute('tabindex', '0');
    
    if (content) {
      content.setAttribute('role', 'region');
      content.setAttribute('aria-hidden', 'true');
    }
  });
});

// Utility function to handle smooth scrolling within dropdowns
function smoothScrollToItem(container, item) {
  const containerRect = container.getBoundingClientRect();
  const itemRect = item.getBoundingClientRect();
  
  if (itemRect.bottom > containerRect.bottom || itemRect.top < containerRect.top) {
    const scrollTop = container.scrollTop + itemRect.top - containerRect.top - 10;
    container.scrollTo({
      top: scrollTop,
      behavior: 'smooth'
    });
  }
}

// Add CSS for selected pricing items
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
  .pricing-item.selected {
    background-color: var(--primary-light) !important;
    color: var(--light-color) !important;
    transform: translateX(5px);
  }
  
  .scroll-indicator {
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-5px);
    }
    60% {
      transform: translateY(-3px);
    }
  }
`;
document.head.appendChild(additionalStyles);