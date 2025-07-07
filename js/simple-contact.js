// Simple Contact Form with Email Client (Enhanced Version)

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitButton = this.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        
        // Get form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Basic validation
        if (!name || !email || !message) {
          showNotification('Please fill in all required fields.', 'error');
          return;
        }
        
        if (!isValidEmail(email)) {
          showNotification('Please enter a valid email address.', 'error');
          return;
        }
        
        // Show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Opening Email...';
        
        // Create properly formatted email content
        const recipientEmail = 'everydaywellness2025@gmail.com';
        const subject = 'Contact Form Inquiry - EDE Wellness Studio';
        const emailBody = `Hello EDE Wellness Team,
  
  I am reaching out through your website contact form.
  
  Contact Information:
  • Name: ${name}
  • Email: ${email}
  
  Message:
  ${message}
  
  Please get back to me at your earliest convenience.
  
  Best regards,
  ${name}`;
        
        // Multiple methods to open email client
        const openEmailClient = () => {
          const encodedSubject = encodeURIComponent(subject);
          const encodedBody = encodeURIComponent(emailBody);
          const mailtoLink = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;
          
          // Method 1: Create invisible link and click it
          const link = document.createElement('a');
          link.href = mailtoLink;
          link.style.display = 'none';
          link.target = '_blank';
          document.body.appendChild(link);
          
          try {
            link.click();
            document.body.removeChild(link);
            return true;
          } catch (error) {
            document.body.removeChild(link);
            console.warn('Method 1 failed:', error);
            return false;
          }
        };
        
        // Method 2: Direct window.location
        const openEmailClientFallback = () => {
          try {
            const encodedSubject = encodeURIComponent(subject);
            const encodedBody = encodeURIComponent(emailBody);
            window.location.href = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;
            return true;
          } catch (error) {
            console.warn('Method 2 failed:', error);
            return false;
          }
        };
        
        // Method 3: Window.open fallback
        const openEmailClientWindow = () => {
          try {
            const encodedSubject = encodeURIComponent(subject);
            const encodedBody = encodeURIComponent(emailBody);
            window.open(`mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`, '_self');
            return true;
          } catch (error) {
            console.warn('Method 3 failed:', error);
            return false;
          }
        };
        
        // Try methods in sequence
        setTimeout(() => {
          let success = false;
          
          // Try primary method
          success = openEmailClient();
          
          if (!success) {
            // Try fallback method after short delay
            setTimeout(() => {
              success = openEmailClientFallback();
              
              if (!success) {
                // Try final fallback
                setTimeout(() => {
                  success = openEmailClientWindow();
                  
                  if (!success) {
                    // All methods failed
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalButtonText;
                    showNotification(`Unable to open email client automatically. Please email us directly at: ${recipientEmail}`, 'error');
                    
                    // Copy email to clipboard as final fallback
                    copyEmailToClipboard(recipientEmail);
                  }
                }, 200);
              }
            }, 200);
          }
          
          // If any method was attempted, show success and reset form
          if (success !== false) {
            setTimeout(() => {
              contactForm.reset();
              submitButton.disabled = false;
              submitButton.innerHTML = originalButtonText;
              showNotification('Email client opened! Please send the pre-filled message to complete your inquiry.', 'success');
            }, 1000);
          }
        }, 500);
      });
    }
  });
  
  // Copy email to clipboard as fallback
  function copyEmailToClipboard(email) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(() => {
        showNotification(`Email address copied to clipboard: ${email}`, 'info');
      }).catch(() => {
        // Fallback for clipboard copy
        fallbackCopyToClipboard(email);
      });
    } else {
      fallbackCopyToClipboard(email);
    }
  }
  
  function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      showNotification(`Email address copied: ${text}`, 'info');
    } catch (err) {
      console.error('Fallback copy failed:', err);
    }
    
    document.body.removeChild(textArea);
  }
  
  // Enhanced email validation function
  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email) && email.length <= 254;
  }
  
  // Enhanced notification system
  function showNotification(message, type) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => {
      notification.remove();
    });
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const iconMap = {
      success: 'check-circle',
      error: 'exclamation-triangle',
      info: 'info-circle'
    };
    
    notification.innerHTML = `
      <div class="notification-content">
        <i class="fas fa-${iconMap[type] || 'info-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close" aria-label="Close notification">&times;</button>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification with animation
    setTimeout(() => {
      notification.classList.add('show');
    }, 100);
    
    // Auto-remove after 8 seconds for better readability
    const autoRemoveTimer = setTimeout(() => {
      removeNotification(notification);
    }, 8000);
    
    // Manual close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
      clearTimeout(autoRemoveTimer);
      removeNotification(notification);
    });
    
    // Close on escape key
    const escapeHandler = (e) => {
      if (e.key === 'Escape') {
        clearTimeout(autoRemoveTimer);
        removeNotification(notification);
        document.removeEventListener('keydown', escapeHandler);
      }
    };
    document.addEventListener('keydown', escapeHandler);
  }
  
  function removeNotification(notification) {
    if (notification && notification.parentNode) {
      notification.classList.add('fade-out');
      setTimeout(() => {
        if (notification.parentNode) {
          document.body.removeChild(notification);
        }
      }, 300);
    }
  }
  
  // Add enhanced notification styles
  if (!document.querySelector('#notification-styles')) {
    const notificationStyles = document.createElement('style');
    notificationStyles.id = 'notification-styles';
    notificationStyles.textContent = `
      .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--light-color);
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%) scale(0.9);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        max-width: 450px;
        min-width: 320px;
        border-left: 5px solid var(--primary-color);
        backdrop-filter: blur(10px);
      }
      
      .notification.show {
        opacity: 1;
        transform: translateX(0) scale(1);
      }
      
      .notification.success {
        border-left-color: var(--success-color);
      }
      
      .notification.error {
        border-left-color: var(--error-color);
      }
      
      .notification.info {
        border-left-color: #2196F3;
      }
      
      .notification.fade-out {
        opacity: 0;
        transform: translateX(100%) scale(0.9);
        transition: all 0.3s ease-in-out;
      }
      
      .notification-content {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        padding: 18px;
      }
      
      .notification-content i {
        font-size: 20px;
        color: var(--primary-color);
        margin-top: 2px;
        flex-shrink: 0;
      }
      
      .notification.success .notification-content i {
        color: var(--success-color);
      }
      
      .notification.error .notification-content i {
        color: var(--error-color);
      }
      
      .notification.info .notification-content i {
        color: #2196F3;
      }
      
      .notification-content span {
        flex: 1;
        line-height: 1.5;
        color: var(--secondary-color);
        font-size: 14px;
        word-break: break-word;
      }
      
      .notification-close {
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        color: var(--dark-gray);
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.2s ease;
        flex-shrink: 0;
      }
      
      .notification-close:hover {
        background-color: var(--light-gray);
        color: var(--secondary-color);
      }
      
      @media (max-width: 480px) {
        .notification {
          top: 10px;
          right: 10px;
          left: 10px;
          max-width: none;
          min-width: auto;
          transform: translateY(-100%) scale(0.9);
        }
        
        .notification.show {
          transform: translateY(0) scale(1);
        }
        
        .notification.fade-out {
          transform: translateY(-100%) scale(0.9);
        }
        
        .notification-content {
          padding: 15px;
          font-size: 13px;
        }
      }
    `;
    document.head.appendChild(notificationStyles);
  }