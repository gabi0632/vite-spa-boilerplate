import './style.css'

// VitalWatch Enhanced Interactive Features
class VitalWatch {
  constructor() {
    this.vitals = {
      heartRate: { value: 72, label: 'BPM', range: [68, 78] },
      hydration: { value: 85, label: '%', range: [80, 95] },
      temperature: { value: 98.6, label: '°F', range: [98.0, 99.2] }
    };
    this.isPageLoaded = false;
    this.init();
  }

  init() {
    this.showLoadingAnimation();
    this.setupSmoothScrolling();
    this.setupAnimatedVitals();
    this.setupInteractiveElements();
    this.setupParallaxEffects();
    this.setupHealthcareAnimations();
    this.setupScrollAnimations();
    this.setupFAQInteractivity();
    this.setupWaitlistForm();
  }

  showLoadingAnimation() {
    // Create and show healthcare-themed loading screen
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
      <div class="loader-heart"></div>
    `;
    document.body.appendChild(loader);
    
    // Hide loader after page loads
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => loader.remove(), 500);
        this.isPageLoaded = true;
        this.triggerEntranceAnimations();
      }, 1500);
    });
  }

  triggerEntranceAnimations() {
    // Trigger section title animations when page loads
    document.querySelectorAll('.section-title').forEach((title, index) => {
      setTimeout(() => {
        title.classList.add('animate');
      }, index * 200);
    });
  }

  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          // Add smooth scroll with healthcare pulse effect
          target.style.transform = 'scale(1.02)';
          target.style.transition = 'transform 0.3s ease';
          
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
          setTimeout(() => {
            target.style.transform = 'scale(1)';
          }, 300);
        }
      });
    });
  }

  setupAnimatedVitals() {
    // Enhanced heart rate animation with healthcare realism
    setInterval(() => {
      const heartRateElement = document.querySelector('.heart-reading .vital-value');
      if (heartRateElement) {
        const [min, max] = this.vitals.heartRate.range;
        const newRate = min + Math.floor(Math.random() * (max - min + 1));
        
        // Add pulse effect during update
        heartRateElement.style.transform = 'scale(1.1)';
        heartRateElement.style.filter = 'brightness(1.2)';
        
        setTimeout(() => {
          heartRateElement.textContent = `${newRate} BPM`;
          heartRateElement.style.transform = 'scale(1)';
          heartRateElement.style.filter = '';
        }, 150);
        
        this.vitals.heartRate.value = newRate;
      }
    }, 3000);

    // Enhanced hydration animation with medical accuracy
    setInterval(() => {
      const hydrationElement = document.querySelector('.hydration-reading .vital-value');
      if (hydrationElement) {
        const [min, max] = this.vitals.hydration.range;
        const currentValue = this.vitals.hydration.value;
        const change = Math.random() > 0.6 ? (Math.random() > 0.5 ? 1 : -1) : 0;
        const newValue = Math.max(min, Math.min(max, currentValue + change));
        
        // Animate value change
        hydrationElement.style.transform = 'scale(1.1)';
        hydrationElement.style.filter = 'brightness(1.2)';
        
        setTimeout(() => {
          hydrationElement.textContent = `${newValue}%`;
          hydrationElement.style.transform = 'scale(1)';
          hydrationElement.style.filter = '';
        }, 150);
        
        this.vitals.hydration.value = newValue;
        this.updateHealthRings();
      }
    }, 4000);

    // Temperature monitoring with healthcare precision
    setInterval(() => {
      const tempElement = document.querySelector('.temperature-reading .vital-value');
      if (tempElement) {
        const [min, max] = this.vitals.temperature.range;
        const newTemp = (min + Math.random() * (max - min)).toFixed(1);
        
        // Add medical precision visual feedback
        tempElement.style.transform = 'scale(1.05)';
        tempElement.style.filter = 'brightness(1.2)';
        
        setTimeout(() => {
          tempElement.textContent = `${newTemp}°F`;
          tempElement.style.transform = 'scale(1)';
          tempElement.style.filter = 'brightness(1)';
        }, 200);
        
        this.vitals.temperature.value = parseFloat(newTemp);
      }
    }, 6000);
  }

  setupInteractiveElements() {
    // Enhanced button interactions with healthcare trust elements
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
      // Add healthcare confidence micro-animation on hover
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px) scale(1.02)';
        
        // Add subtle health pulse
        const pulse = document.createElement('div');
        pulse.style.cssText = `
          position: absolute;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 20px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          animation: healthPulse 0.8s ease-out;
          pointer-events: none;
        `;
        button.style.position = 'relative';
        button.appendChild(pulse);
        setTimeout(() => pulse.remove(), 800);
      });
      
      button.addEventListener('mouseleave', () => {
        button.style.transform = '';
      });

      button.addEventListener('click', (e) => {
        // Create enhanced ripple with healthcare colors
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%);
          border-radius: 50%;
          transform: scale(0);
          animation: healthRipple 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        // Add confidence feedback
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
          button.style.transform = '';
        }, 100);
        
        setTimeout(() => ripple.remove(), 800);
      });
    });
  }

  setupParallaxEffects() {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      // Parallax for hero background elements
      const heroGlow = document.querySelector('.hero::before');
      if (heroGlow) {
        heroGlow.style.transform = `translateY(${rate}px)`;
      }
      
      // Health section background parallax
      const healthGlows = document.querySelectorAll('.health-section::before, .health-section::after');
      healthGlows.forEach((glow, index) => {
        const speed = index === 0 ? 0.3 : 0.7;
        glow.style.transform = `translateY(${scrolled * speed}px)`;
      });
    });
  }

  setupHealthcareAnimations() {
    // Healthcare-specific micro-interactions
    document.querySelectorAll('.feature-card').forEach((card, index) => {
      card.addEventListener('mouseenter', () => {
        // Add healthcare trust glow
        card.style.boxShadow = `0 20px 40px rgba(0, 122, 255, 0.15), 
                                0 0 30px rgba(0, 122, 255, 0.1)`;
        
        // Animate the icon with healthcare precision
        const icon = card.querySelector('.feature-icon');
        if (icon) {
          icon.style.transform = 'translateY(-8px) scale(1.1)';
          icon.style.filter = 'drop-shadow(0 5px 15px rgba(0, 122, 255, 0.3))';
        }
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '';
        const icon = card.querySelector('.feature-icon');
        if (icon) {
          icon.style.transform = '';
          icon.style.filter = '';
        }
      });
    });
    
    // Dashboard cards healthcare feedback
    document.querySelectorAll('.dashboard-card').forEach(card => {
      card.addEventListener('click', () => {
        // Medical data emphasis animation
        card.style.transform = 'scale(1.1)';
        card.style.filter = 'brightness(1.1)';
        
        setTimeout(() => {
          card.style.transform = '';
          card.style.filter = '';
        }, 200);
      });
    });
  }

  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          
          // Add staggered animation for multiple elements
          const siblings = Array.from(entry.target.parentNode.children);
          const index = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${index * 0.1}s`;
        }
      });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.feature-card, .dashboard-card, .design-feature').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      observer.observe(el);
    });
  }

  setupFAQInteractivity() {
    document.querySelectorAll('.faq-item').forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      const toggle = item.querySelector('.faq-toggle');

      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        
        // Close all other FAQ items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('open');
            otherItem.querySelector('.faq-toggle').textContent = '+';
          }
        });

        // Toggle current item
        if (isOpen) {
          item.classList.remove('open');
          toggle.textContent = '+';
        } else {
          item.classList.add('open');
          toggle.textContent = '−';
        }
      });
    });
  }

  setupWaitlistForm() {
    const emailInput = document.getElementById('email-input');
    const joinButton = document.getElementById('join-waitlist-btn');
    const successMessage = document.getElementById('success-message');
    const waitlistForm = document.querySelector('.waitlist-form');

    // Mock data storage for waitlist emails
    this.waitlistEmails = JSON.parse(localStorage.getItem('vitalwatch-waitlist') || '[]');

    joinButton.addEventListener('click', () => {
      const email = emailInput.value.trim();
      
      if (this.isValidEmail(email)) {
        this.addToWaitlist(email);
        this.showSuccessMessage();
      } else {
        this.showEmailError();
      }
    });

    emailInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        joinButton.click();
      }
    });

    // Clear error styling on input
    emailInput.addEventListener('input', () => {
      emailInput.classList.remove('error');
    });
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  addToWaitlist(email) {
    // Check if email already exists
    if (!this.waitlistEmails.includes(email)) {
      this.waitlistEmails.push(email);
      localStorage.setItem('vitalwatch-waitlist', JSON.stringify(this.waitlistEmails));
    }
  }

  showSuccessMessage() {
    const waitlistForm = document.querySelector('.waitlist-form');
    const successMessage = document.getElementById('success-message');
    
    // Hide form with animation
    waitlistForm.style.opacity = '0';
    waitlistForm.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
      waitlistForm.style.display = 'none';
      successMessage.classList.remove('hidden');
      successMessage.style.opacity = '0';
      successMessage.style.transform = 'translateY(20px)';
      
      // Animate success message in
      setTimeout(() => {
        successMessage.style.opacity = '1';
        successMessage.style.transform = 'translateY(0)';
      }, 50);
    }, 300);
  }

  showEmailError() {
    const emailInput = document.getElementById('email-input');
    emailInput.classList.add('error');
    
    // Add shake animation
    emailInput.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
      emailInput.style.animation = '';
    }, 500);
  }
}

// Add enhanced healthcare animation styles
const style = document.createElement('style');
style.textContent = `
  @keyframes healthRipple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  @keyframes healthPulse {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(2);
      opacity: 0;
    }
  }
  
  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInFromRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
  }
`;
document.head.appendChild(style);

// Initialize the VitalWatch app with healthcare precision
document.addEventListener('DOMContentLoaded', () => {
  // Add healthcare-focused meta viewport for mobile optimization
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, user-scalable=no');
  }
  
  // Initialize main application
  new VitalWatch();
  
  // Add healthcare accessibility improvements
  document.body.setAttribute('role', 'application');
  document.body.setAttribute('aria-label', 'VitalWatch Health Monitoring Application');
});
