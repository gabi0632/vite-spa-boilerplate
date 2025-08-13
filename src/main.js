import './style.css'

// VitalWatch Interactive Features
class VitalWatch {
  constructor() {
    this.vitals = {
      heartRate: { value: 72, label: 'BPM' },
      hydration: { value: 85, label: '%' },
      temperature: { value: 98.6, label: '°F' }
    };
    this.init();
  }

  init() {
    this.setupSmoothScrolling();
    this.setupAnimatedVitals();
    this.setupInteractiveElements();
  }

  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  setupAnimatedVitals() {
    // Animate heart rate with realistic variation
    setInterval(() => {
      const heartRateElement = document.querySelector('.vital-item:nth-child(1) .vital-value');
      if (heartRateElement) {
        const newRate = 70 + Math.floor(Math.random() * 8); // 70-77 range
        heartRateElement.textContent = `${newRate} BPM`;
      }
    }, 3000);

    // Animate hydration level
    setInterval(() => {
      const hydrationElement = document.querySelector('.vital-item:nth-child(2) .vital-value');
      if (hydrationElement) {
        const currentValue = parseInt(hydrationElement.textContent);
        const newValue = Math.max(80, Math.min(90, currentValue + (Math.random() > 0.5 ? 1 : -1)));
        hydrationElement.textContent = `${newValue}%`;
        
        // Update progress ring
        const progressRing = document.querySelector('.progress-ring');
        const progressValue = document.querySelector('.progress-value');
        if (progressRing && progressValue) {
          progressRing.style.background = `conic-gradient(var(--color-primary) ${newValue}%, var(--color-surface) ${newValue}%)`;
          progressValue.textContent = `${newValue}%`;
        }
      }
    }, 5000);
  }

  setupInteractiveElements() {
    // Add click animations to buttons
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
      button.addEventListener('click', (e) => {
        // Create ripple effect
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
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s ease-out;
          pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
      });
    });

    // Add intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe feature cards and sections
    document.querySelectorAll('.feature-card, .dashboard-card, .design-feature').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.6s ease';
      observer.observe(el);
    });
  }
}

// Add ripple animation styles
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Initialize the VitalWatch app
document.addEventListener('DOMContentLoaded', () => {
  new VitalWatch();
});
