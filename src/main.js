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
    this.renderApp();
    this.init();
  }

  renderApp() {
    const app = document.getElementById('app');
    if (!app) return;

    // Clear the app container
    app.innerHTML = '';

    // Create all sections
    app.appendChild(this.createNavigation());
    app.appendChild(this.createHeroSection());
    app.appendChild(this.createFeaturesSection());
    app.appendChild(this.createHealthSection());
    app.appendChild(this.createDesignSection());
    app.appendChild(this.createFAQSection());
    app.appendChild(this.createWaitlistSection());
    app.appendChild(this.createCTASection());
    app.appendChild(this.createFooter());
  }

  createElement(tag, className = '', textContent = '') {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
  }

  createNavigation() {
    const nav = this.createElement('nav', 'nav');
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Main navigation');
    const navContainer = this.createElement('div', 'nav-container');
    
    const logo = this.createElement('div', 'nav-logo', 'VitalWatch');
    const navMenu = this.createElement('ul', 'nav-menu');
    
    const menuItems = [
      { href: '#features', text: 'Features' },
      { href: '#health', text: 'Health' },
      { href: '#design', text: 'Design' },
      { href: '#faq', text: 'FAQ' },
      { href: '#waitlist', text: 'Join Waitlist', className: 'cta-link' }
    ];

    menuItems.forEach(item => {
      const li = this.createElement('li');
      const a = this.createElement('a', item.className || '', item.text);
      a.href = item.href;
      a.setAttribute('aria-label', `Navigate to ${item.text} section`);
      li.appendChild(a);
      navMenu.appendChild(li);
    });

    navContainer.appendChild(logo);
    navContainer.appendChild(navMenu);
    nav.appendChild(navContainer);
    
    return nav;
  }

  createHeroSection() {
    const section = this.createElement('section', 'hero');
    const heroContainer = this.createElement('div', 'hero-container');
    
    // Hero content
    const heroContent = this.createElement('div', 'hero-content');
    const title = this.createElement('h1', 'hero-title', 'Take Control of Your Health with VitalWatch');
    const subtitle = this.createElement('p', 'hero-subtitle', 'Continuous, real-time health monitoring for a proactive and healthier you. Revolutionary hydration tracking meets cutting-edge vital sign analysis.');
    
    const heroCTA = this.createElement('div', 'hero-cta');
    const primaryBtn = this.createElement('button', 'btn-primary', 'Shop Now');
    primaryBtn.setAttribute('aria-label', 'Shop for VitalWatch - opens ordering page');
    const secondaryBtn = this.createElement('button', 'btn-secondary', 'Discover the Features');
    secondaryBtn.setAttribute('aria-label', 'Learn more about VitalWatch features');
    heroCTA.appendChild(primaryBtn);
    heroCTA.appendChild(secondaryBtn);

    heroContent.appendChild(title);
    heroContent.appendChild(subtitle);
    heroContent.appendChild(heroCTA);

    // Hero visual
    const heroVisual = this.createElement('div', 'hero-visual');
    const watchDisplay = this.createWatchDisplay();
    heroVisual.appendChild(watchDisplay);

    heroContainer.appendChild(heroContent);
    heroContainer.appendChild(heroVisual);
    section.appendChild(heroContainer);

    return section;
  }

  createWatchDisplay() {
    const watchDisplay = this.createElement('div', 'watch-display');
    const watchContainer = this.createElement('div', 'watch-container');
    
    // Watch band
    const watchBand = this.createElement('div', 'watch-band');
    watchBand.appendChild(this.createElement('div', 'band-left'));
    watchBand.appendChild(this.createElement('div', 'band-right'));
    
    // Watch crown
    const watchCrown = this.createElement('div', 'watch-crown');
    
    // Main watch face
    const watchFace = this.createElement('div', 'watch-face');
    const watchGlow = this.createElement('div', 'watch-glow');
    
    // Health rings
    const healthRings = this.createElement('div', 'health-rings');
    healthRings.appendChild(this.createElement('div', 'health-ring heart-ring'));
    healthRings.appendChild(this.createElement('div', 'health-ring hydration-ring'));
    healthRings.appendChild(this.createElement('div', 'health-ring temperature-ring'));
    
    // Center display
    const centerDisplay = this.createElement('div', 'center-display');
    
    // Vital readings
    const vitals = [
      { class: 'heart-reading', label: 'Heart Rate', value: '77 BPM' },
      { class: 'hydration-reading', label: 'Hydration', value: '84%' },
      { class: 'temperature-reading', label: 'Temperature', value: '98.6°F' }
    ];

    vitals.forEach(vital => {
      const reading = this.createElement('div', `vital-reading ${vital.class}`);
      const label = this.createElement('span', 'vital-label', vital.label);
      const value = this.createElement('span', 'vital-value', vital.value);
      reading.appendChild(label);
      reading.appendChild(value);
      centerDisplay.appendChild(reading);
    });

    watchFace.appendChild(watchGlow);
    watchFace.appendChild(healthRings);
    watchFace.appendChild(centerDisplay);
    
    watchContainer.appendChild(watchBand);
    watchContainer.appendChild(watchCrown);
    watchContainer.appendChild(watchFace);
    
    // Floating indicators
    const floatingIndicators = this.createElement('div', 'floating-indicators');
    
    const indicators = [
      { class: 'ecg-indicator', label: 'ECG', type: 'line' },
      { class: 'spo2-indicator', label: 'SpO₂', value: '98%' },
      { class: 'steps-indicator', label: 'STEPS', value: '8,742' }
    ];

    indicators.forEach(indicator => {
      const div = this.createElement('div', `health-indicator ${indicator.class}`);
      const label = this.createElement('span', 'indicator-label', indicator.label);
      div.appendChild(label);
      
      if (indicator.type === 'line') {
        div.appendChild(this.createElement('div', 'ecg-line'));
      } else {
        const value = this.createElement('span', 'indicator-value', indicator.value);
        div.appendChild(value);
      }
      
      floatingIndicators.appendChild(div);
    });

    // Ambient particles
    const ambientParticles = this.createElement('div', 'ambient-particles');
    ['✨', '💫', '⭐'].forEach(emoji => {
      const particle = this.createElement('div', 'particle', emoji);
      ambientParticles.appendChild(particle);
    });

    watchDisplay.appendChild(watchContainer);
    watchDisplay.appendChild(floatingIndicators);
    watchDisplay.appendChild(ambientParticles);

    return watchDisplay;
  }

  createFeaturesSection() {
    const section = this.createElement('section', 'features');
    section.id = 'features';
    
    // 3D Background Elements
    const featuresBg = this.createElement('div', 'features-bg-3d');
    const icons = [
      { icon: '💊', delay: '0s', duration: '15s' },
      { icon: '🩺', delay: '3s', duration: '18s' },
      { icon: '⚕️', delay: '6s', duration: '12s' },
      { icon: '🧬', delay: '9s', duration: '20s' }
    ];

    icons.forEach(item => {
      const icon = this.createElement('div', 'floating-health-icon', item.icon);
      icon.style.setProperty('--delay', item.delay);
      icon.style.setProperty('--duration', item.duration);
      featuresBg.appendChild(icon);
    });

    const sectionContainer = this.createElement('div', 'section-container');
    const title = this.createElement('h2', 'section-title', 'Revolutionary health monitoring.');
    
    const featuresGrid = this.createElement('div', 'features-grid');
    
    const features = [
      {
        icon: '🌊',
        title: 'Hydration Intelligence',
        description: 'Advanced bio-impedance sensors detect dehydration before symptoms appear. Personalized hydration targets based on your activity, climate, and health goals.'
      },
      {
        icon: '💓',
        title: 'Continuous Vitals',
        description: 'Real-time ECG, heart rate variability, blood oxygen, and body temperature monitoring with medical-grade accuracy. AI-powered trend analysis alerts you to changes.'
      },
      {
        icon: '🧠',
        title: 'Smart Health Insights',
        description: 'Machine learning algorithms analyze your unique patterns to predict health risks, optimize performance, and provide personalized wellness recommendations.'
      },
      {
        icon: '🔋',
        title: 'All-Day Power',
        description: 'Revolutionary power management delivers 18+ hours of continuous monitoring. Fast charge to 80% in just 30 minutes with our advanced battery technology.'
      }
    ];

    features.forEach(feature => {
      const card = this.createElement('div', 'feature-card');
      const icon = this.createElement('div', 'feature-icon', feature.icon);
      const h3 = this.createElement('h3', '', feature.title);
      const p = this.createElement('p', '', feature.description);
      
      card.appendChild(icon);
      card.appendChild(h3);
      card.appendChild(p);
      featuresGrid.appendChild(card);
    });

    sectionContainer.appendChild(title);
    sectionContainer.appendChild(featuresGrid);
    section.appendChild(featuresBg);
    section.appendChild(sectionContainer);

    return section;
  }

  createHealthSection() {
    const section = this.createElement('section', 'health-section');
    section.id = 'health';
    
    const sectionContainer = this.createElement('div', 'section-container');
    const healthContent = this.createElement('div', 'health-content');
    
    // Health text
    const healthText = this.createElement('div', 'health-text');
    const h2 = this.createElement('h2', '', 'Your health. In your hands.');
    const p = this.createElement('p', '', 'VitalWatch goes beyond traditional fitness tracking. Our proprietary sensors work together to paint a complete picture of your health, helping you make informed decisions about your wellness journey.');
    
    const healthFeatures = this.createElement('ul', 'health-features');
    const features = [
      'Continuous hydration monitoring',
      'ECG heart rhythm analysis',
      'Blood oxygen saturation tracking',
      'Core body temperature sensing',
      'Stress level detection',
      'Sleep quality assessment'
    ];

    features.forEach(feature => {
      const li = this.createElement('li', '', feature);
      healthFeatures.appendChild(li);
    });

    healthText.appendChild(h2);
    healthText.appendChild(p);
    healthText.appendChild(healthFeatures);

    // Health visual
    const healthVisual = this.createElement('div', 'health-visual');
    const healthDashboard = this.createElement('div', 'health-dashboard');
    
    const dashboardCards = [
      {
        class: 'hydration',
        title: 'Hydration Level',
        content: { type: 'progress-ring', value: '85%' },
        status: 'Well hydrated'
      },
      {
        class: 'heart-rate',
        title: 'Heart Rate',
        content: { type: 'heart-chart' },
        status: '72 BPM - Normal'
      },
      {
        class: 'temperature',
        title: 'Body Temperature',
        content: { type: 'temp-gauge', value: '98.6°F' },
        status: 'Normal range'
      }
    ];

    dashboardCards.forEach(card => {
      const cardDiv = this.createElement('div', `dashboard-card ${card.class}`);
      const h4 = this.createElement('h4', '', card.title);
      cardDiv.appendChild(h4);
      
      if (card.content.type === 'progress-ring') {
        const progressRing = this.createElement('div', 'progress-ring');
        const progressValue = this.createElement('div', 'progress-value', card.content.value);
        progressRing.appendChild(progressValue);
        cardDiv.appendChild(progressRing);
      } else if (card.content.type === 'heart-chart') {
        const heartChart = this.createElement('div', 'heart-chart');
        const heartLine = this.createElement('div', 'heart-line');
        heartChart.appendChild(heartLine);
        cardDiv.appendChild(heartChart);
      } else if (card.content.type === 'temp-gauge') {
        const tempGauge = this.createElement('div', 'temp-gauge', card.content.value);
        cardDiv.appendChild(tempGauge);
      }
      
      const status = this.createElement('p', '', card.status);
      cardDiv.appendChild(status);
      healthDashboard.appendChild(cardDiv);
    });

    healthVisual.appendChild(healthDashboard);
    healthContent.appendChild(healthText);
    healthContent.appendChild(healthVisual);
    sectionContainer.appendChild(healthContent);
    section.appendChild(sectionContainer);

    return section;
  }

  createDesignSection() {
    const section = this.createElement('section', 'design-section');
    section.id = 'design';
    
    const sectionContainer = this.createElement('div', 'section-container');
    const title = this.createElement('h2', 'section-title', 'Designed for life.');
    const subtitle = this.createElement('p', 'section-subtitle', 'Premium materials meet cutting-edge technology in a design that\'s as beautiful as it is functional.');
    
    const designShowcase = this.createElement('div', 'design-showcase');
    
    const features = [
      {
        title: 'Titanium Excellence',
        description: 'Aerospace-grade titanium case with sapphire crystal display. Lightweight, durable, and hypoallergenic for all-day comfort.'
      },
      {
        title: 'Water Resistant',
        description: 'Swim-proof design with 50m water resistance. Track your hydration even during water activities.'
      },
      {
        title: 'Customizable Bands',
        description: 'Choose from sport, leather, or metal bands. Quick-release mechanism for effortless style changes.'
      }
    ];

    features.forEach(feature => {
      const designFeature = this.createElement('div', 'design-feature');
      const h3 = this.createElement('h3', '', feature.title);
      const p = this.createElement('p', '', feature.description);
      
      designFeature.appendChild(h3);
      designFeature.appendChild(p);
      designShowcase.appendChild(designFeature);
    });

    sectionContainer.appendChild(title);
    sectionContainer.appendChild(subtitle);
    sectionContainer.appendChild(designShowcase);
    section.appendChild(sectionContainer);

    return section;
  }

  createFAQSection() {
    const section = this.createElement('section', 'faq-section');
    section.id = 'faq';
    
    const sectionContainer = this.createElement('div', 'section-container');
    const title = this.createElement('h2', 'section-title', 'Frequently Asked Questions');
    
    const faqGrid = this.createElement('div', 'faq-grid');
    
    const faqs = [
      {
        question: 'How accurate is the hydration monitoring?',
        answer: 'VitalWatch uses advanced bioimpedance sensors with clinical-grade accuracy of ±2%. Our proprietary algorithms analyze tissue hydration levels in real-time, providing more accurate readings than traditional methods.'
      },
      {
        question: 'What\'s the battery life during continuous monitoring?',
        answer: 'With all health sensors active, VitalWatch provides 18 hours of continuous monitoring. In power-saving mode, battery life extends to 7 days. Fast charging technology provides 80% charge in just 45 minutes.'
      },
      {
        question: 'Is VitalWatch suitable for medical diagnosis?',
        answer: 'VitalWatch is designed for wellness monitoring and fitness tracking. While it provides medical-grade sensor accuracy, it should not be used as a replacement for professional medical advice or diagnosis.'
      },
      {
        question: 'What smartphone compatibility is required?',
        answer: 'VitalWatch is compatible with iOS 14+ and Android 8.0+. The companion app requires Bluetooth 5.0 for optimal performance and real-time health data synchronization.'
      },
      {
        question: 'Can I swim or shower with VitalWatch?',
        answer: 'Yes! VitalWatch has 50-meter water resistance (5 ATM) and continues hydration monitoring even during swimming. The titanium case and sapphire crystal are designed for all aquatic activities.'
      },
      {
        question: 'How does the AI health insights feature work?',
        answer: 'Our machine learning algorithms analyze your personal health patterns over time, comparing them with population health data to provide personalized recommendations for hydration, sleep, activity, and overall wellness optimization.'
      }
    ];

    faqs.forEach(faq => {
      const faqItem = this.createElement('div', 'faq-item');
      
      const faqQuestion = this.createElement('div', 'faq-question');
      const h3 = this.createElement('h3', '', faq.question);
      const toggle = this.createElement('span', 'faq-toggle', '+');
      
      faqQuestion.appendChild(h3);
      faqQuestion.appendChild(toggle);
      
      const faqAnswer = this.createElement('div', 'faq-answer');
      const p = this.createElement('p', '', faq.answer);
      faqAnswer.appendChild(p);
      
      faqItem.appendChild(faqQuestion);
      faqItem.appendChild(faqAnswer);
      faqGrid.appendChild(faqItem);
    });

    sectionContainer.appendChild(title);
    sectionContainer.appendChild(faqGrid);
    section.appendChild(sectionContainer);

    return section;
  }

  createWaitlistSection() {
    const section = this.createElement('section', 'waitlist-section');
    section.id = 'waitlist';
    
    const sectionContainer = this.createElement('div', 'section-container');
    const waitlistContent = this.createElement('div', 'waitlist-content');
    
    const h2 = this.createElement('h2', '', 'Join the VitalWatch Waitlist');
    const p = this.createElement('p', '', 'Be among the first to experience the future of health monitoring. Get exclusive early access and special pricing.');
    
    // Modern waitlist form with floating label
    const waitlistForm = this.createElement('div', 'waitlist-form');
    
    const inputContainer = this.createElement('div', 'input-container');
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email-input';
    emailInput.required = true;
    
    const floatingLabel = this.createElement('label', 'floating-label', 'Enter your email address');
    floatingLabel.setAttribute('for', 'email-input');
    
    inputContainer.appendChild(emailInput);
    inputContainer.appendChild(floatingLabel);
    
    const joinButton = this.createElement('button', 'btn-primary', 'Join Waitlist');
    joinButton.id = 'join-waitlist-btn';
    
    waitlistForm.appendChild(inputContainer);
    waitlistForm.appendChild(joinButton);
    
    // Success message
    const successMessage = this.createElement('div', 'success-message hidden');
    successMessage.id = 'success-message';
    
    const successIcon = this.createElement('div', 'success-icon', '✓');
    const successTitle = this.createElement('h3', '', 'Welcome to VitalWatch!');
    const successText = this.createElement('p', '', 'You\'ve successfully joined our waitlist. We\'ll notify you as soon as VitalWatch becomes available.');
    
    successMessage.appendChild(successIcon);
    successMessage.appendChild(successTitle);
    successMessage.appendChild(successText);
    
    // Waitlist benefits
    const waitlistBenefits = this.createElement('div', 'waitlist-benefits');
    const benefits = [
      { icon: '🎯', text: 'Early access to VitalWatch' },
      { icon: '💰', text: 'Exclusive launch pricing' },
      { icon: '📱', text: 'Beta app access' }
    ];

    benefits.forEach(benefit => {
      const benefitDiv = this.createElement('div', 'benefit');
      const icon = this.createElement('span', 'benefit-icon', benefit.icon);
      const text = this.createElement('span', '', benefit.text);
      
      benefitDiv.appendChild(icon);
      benefitDiv.appendChild(text);
      waitlistBenefits.appendChild(benefitDiv);
    });

    waitlistContent.appendChild(h2);
    waitlistContent.appendChild(p);
    waitlistContent.appendChild(waitlistForm);
    waitlistContent.appendChild(successMessage);
    waitlistContent.appendChild(waitlistBenefits);
    
    sectionContainer.appendChild(waitlistContent);
    section.appendChild(sectionContainer);

    return section;
  }

  createCTASection() {
    const section = this.createElement('section', 'cta-section');
    const sectionContainer = this.createElement('div', 'section-container');
    
    const h2 = this.createElement('h2', '', 'Ready to transform your health?');
    const p = this.createElement('p', '', 'Join thousands who\'ve already discovered the future of personal wellness monitoring.');
    
    const ctaButtons = this.createElement('div', 'cta-buttons');
    const primaryBtn = this.createElement('button', 'btn-primary large', 'Order VitalWatch - $599');
    const secondaryBtn = this.createElement('button', 'btn-secondary large', 'Learn More');
    
    ctaButtons.appendChild(primaryBtn);
    ctaButtons.appendChild(secondaryBtn);
    
    sectionContainer.appendChild(h2);
    sectionContainer.appendChild(p);
    sectionContainer.appendChild(ctaButtons);
    section.appendChild(sectionContainer);

    return section;
  }

  createFooter() {
    const footer = this.createElement('footer', 'footer');
    const footerContainer = this.createElement('div', 'footer-container');
    
    // Footer brand
    const footerBrand = this.createElement('div', 'footer-brand');
    const h4 = this.createElement('h4', '', 'VitalWatch');
    const p = this.createElement('p', '', 'The future of health monitoring');
    footerBrand.appendChild(h4);
    footerBrand.appendChild(p);
    
    // Footer links
    const footerLinks = this.createElement('div', 'footer-links');
    
    const columns = [
      {
        title: 'Product',
        links: ['Features', 'Specifications', 'Compatibility']
      },
      {
        title: 'Support',
        links: ['User Guide', 'Contact', 'Warranty']
      },
      {
        title: 'Company',
        links: ['About', 'Privacy', 'Terms']
      }
    ];

    columns.forEach(column => {
      const footerColumn = this.createElement('div', 'footer-column');
      const h5 = this.createElement('h5', '', column.title);
      footerColumn.appendChild(h5);
      
      column.links.forEach(linkText => {
        const a = this.createElement('a', '', linkText);
        a.href = '#';
        footerColumn.appendChild(a);
      });
      
      footerLinks.appendChild(footerColumn);
    });

    footerContainer.appendChild(footerBrand);
    footerContainer.appendChild(footerLinks);
    footer.appendChild(footerContainer);

    return footer;
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
    document.querySelectorAll('.feature-card').forEach((card) => {
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

  updateHealthRings() {
    // Update the health rings visual representation based on current vitals
    // This method could be enhanced to actually update ring progress based on vital values
    const hydrationRing = document.querySelector('.hydration-ring');
    const heartRing = document.querySelector('.heart-ring');
    const temperatureRing = document.querySelector('.temperature-ring');
    
    if (hydrationRing) {
      const hydrationPercent = this.vitals.hydration.value;
      hydrationRing.style.background = `conic-gradient(
        from 0deg,
        #007AFF 0deg,
        #007AFF ${hydrationPercent * 3.6}deg,
        rgba(0, 122, 255, 0.2) ${hydrationPercent * 3.6}deg,
        rgba(0, 122, 255, 0.2) 360deg
      )`;
    }
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
