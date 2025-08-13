// VitalWatch HTML Template Module
export const htmlTemplate = `
  <!-- Navigation -->
  <nav class="nav">
    <div class="nav-container">
      <div class="nav-logo">VitalWatch</div>
      <ul class="nav-menu">
        <li><a href="#features">Features</a></li>
        <li><a href="#health">Health</a></li>
        <li><a href="#design">Design</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#waitlist" class="cta-link">Join Waitlist</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">The ultimate device for a healthy life.</h1>
        <p class="hero-subtitle">VitalWatch revolutionizes personal health monitoring with advanced hydration tracking, real-time vitals, and intelligent insights.</p>
        <div class="hero-cta">
          <button class="btn-primary">Order VitalWatch</button>
          <button class="btn-secondary">Watch the film</button>
        </div>
      </div>
      <div class="hero-visual">
        <div class="watch-display">
        <!-- Clean watch design based on reference -->
        <div class="watch-container">
          <!-- Watch band -->
          <div class="watch-band">
            <div class="band-left"></div>
            <div class="band-right"></div>
          </div>
          
          <!-- Watch crown -->
          <div class="watch-crown"></div>
          
          <!-- Main watch face -->
          <div class="watch-face">
            <!-- Background glow -->
            <div class="watch-glow"></div>
            
            <!-- Health rings -->
            <div class="health-rings">
              <div class="health-ring heart-ring"></div>
              <div class="health-ring hydration-ring"></div>
              <div class="health-ring temperature-ring"></div>
            </div>
            
            <!-- Center display -->
            <div class="center-display">
              <div class="vital-reading heart-reading">
                <span class="vital-label">Heart Rate</span>
                <span class="vital-value">77 BPM</span>
              </div>
              <div class="vital-reading hydration-reading">
                <span class="vital-label">Hydration</span>
                <span class="vital-value">84%</span>
              </div>
              <div class="vital-reading temperature-reading">
                <span class="vital-label">Temperature</span>
                <span class="vital-value">98.6°F</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Floating health indicators positioned around watch -->
        <div class="floating-indicators">
          <div class="health-indicator ecg-indicator">
            <span class="indicator-label">ECG</span>
            <div class="ecg-line"></div>
          </div>
          <div class="health-indicator spo2-indicator">
            <span class="indicator-label">SpO₂</span>
            <span class="indicator-value">98%</span>
          </div>
          <div class="health-indicator steps-indicator">
            <span class="indicator-label">STEPS</span>
            <span class="indicator-value">8,742</span>
          </div>
        </div>
        
        <!-- Subtle background particles -->
        <div class="ambient-particles">
          <div class="particle">✨</div>
          <div class="particle">💫</div>
          <div class="particle">⭐</div>
        </div>
      </div>
    </div>
    </div>
  </section>

  <!-- Features Section -->
  <section id="features" class="features">
    <!-- 3D Background Elements -->
    <div class="features-bg-3d">
      <div class="floating-health-icon" style="--delay: 0s; --duration: 15s;">💊</div>
      <div class="floating-health-icon" style="--delay: 3s; --duration: 18s;">🩺</div>
      <div class="floating-health-icon" style="--delay: 6s; --duration: 12s;">⚕️</div>
      <div class="floating-health-icon" style="--delay: 9s; --duration: 20s;">🧬</div>
    </div>
    <div class="section-container">
      <h2 class="section-title">Revolutionary health monitoring.</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">💧</div>
          <h3>Hydration Intelligence</h3>
          <p>Advanced sensors detect dehydration before you feel thirsty. Get personalized hydration reminders and track your daily water intake with precision.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">❤️</div>
          <h3>Comprehensive Vitals</h3>
          <p>Monitor heart rate, blood oxygen, body temperature, and stress levels in real-time. AI-powered insights help you understand your body better.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📊</div>
          <h3>Personal Health Insights</h3>
          <p>Machine learning algorithms analyze your health patterns and provide actionable recommendations for better wellness and performance.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>All-Day Battery</h3>
          <p>Up to 18 hours of battery life with fast charging. Never miss a beat with our power-efficient health monitoring technology.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Health Monitoring Section -->
  <section id="health" class="health-section">
    <div class="section-container">
      <div class="health-content">
        <div class="health-text">
          <h2>Your health. In your hands.</h2>
          <p>VitalWatch goes beyond traditional fitness tracking. Our proprietary sensors work together to paint a complete picture of your health, helping you make informed decisions about your wellness journey.</p>
          <ul class="health-features">
            <li>Continuous hydration monitoring</li>
            <li>ECG heart rhythm analysis</li>
            <li>Blood oxygen saturation tracking</li>
            <li>Core body temperature sensing</li>
            <li>Stress level detection</li>
            <li>Sleep quality assessment</li>
          </ul>
        </div>
        <div class="health-visual">
          <div class="health-dashboard">
            <div class="dashboard-card hydration">
              <h4>Hydration Level</h4>
              <div class="progress-ring">
                <div class="progress-value">85%</div>
              </div>
              <p>Well hydrated</p>
            </div>
            <div class="dashboard-card heart-rate">
              <h4>Heart Rate</h4>
              <div class="heart-chart">
                <div class="heart-line"></div>
              </div>
              <p>72 BPM - Normal</p>
            </div>
            <div class="dashboard-card temperature">
              <h4>Body Temperature</h4>
              <div class="temp-gauge">98.6°F</div>
              <p>Normal range</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Design Section -->
  <section id="design" class="design-section">
    <div class="section-container">
      <h2 class="section-title">Designed for life.</h2>
      <p class="section-subtitle">Premium materials meet cutting-edge technology in a design that's as beautiful as it is functional.</p>
      <div class="design-showcase">
        <div class="design-feature">
          <h3>Titanium Excellence</h3>
          <p>Aerospace-grade titanium case with sapphire crystal display. Lightweight, durable, and hypoallergenic for all-day comfort.</p>
        </div>
        <div class="design-feature">
          <h3>Water Resistant</h3>
          <p>Swim-proof design with 50m water resistance. Track your hydration even during water activities.</p>
        </div>
        <div class="design-feature">
          <h3>Customizable Bands</h3>
          <p>Choose from sport, leather, or metal bands. Quick-release mechanism for effortless style changes.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section id="faq" class="faq-section">
    <div class="section-container">
      <h2 class="section-title">Frequently Asked Questions</h2>
      <div class="faq-grid">
        <div class="faq-item">
          <div class="faq-question">
            <h3>How accurate is the hydration monitoring?</h3>
            <span class="faq-toggle">+</span>
          </div>
          <div class="faq-answer">
            <p>VitalWatch uses advanced bioimpedance sensors with clinical-grade accuracy of ±2%. Our proprietary algorithms analyze tissue hydration levels in real-time, providing more accurate readings than traditional methods.</p>
          </div>
        </div>
        <div class="faq-item">
          <div class="faq-question">
            <h3>What's the battery life during continuous monitoring?</h3>
            <span class="faq-toggle">+</span>
          </div>
          <div class="faq-answer">
            <p>With all health sensors active, VitalWatch provides 18 hours of continuous monitoring. In power-saving mode, battery life extends to 7 days. Fast charging technology provides 80% charge in just 45 minutes.</p>
          </div>
        </div>
        <div class="faq-item">
          <div class="faq-question">
            <h3>Is VitalWatch suitable for medical diagnosis?</h3>
            <span class="faq-toggle">+</span>
          </div>
          <div class="faq-answer">
            <p>VitalWatch is designed for wellness monitoring and fitness tracking. While it provides medical-grade sensor accuracy, it should not be used as a replacement for professional medical advice or diagnosis.</p>
          </div>
        </div>
        <div class="faq-item">
          <div class="faq-question">
            <h3>What smartphone compatibility is required?</h3>
            <span class="faq-toggle">+</span>
          </div>
          <div class="faq-answer">
            <p>VitalWatch is compatible with iOS 14+ and Android 8.0+. The companion app requires Bluetooth 5.0 for optimal performance and real-time health data synchronization.</p>
          </div>
        </div>
        <div class="faq-item">
          <div class="faq-question">
            <h3>Can I swim or shower with VitalWatch?</h3>
            <span class="faq-toggle">+</span>
          </div>
          <div class="faq-answer">
            <p>Yes! VitalWatch has 50-meter water resistance (5 ATM) and continues hydration monitoring even during swimming. The titanium case and sapphire crystal are designed for all aquatic activities.</p>
          </div>
        </div>
        <div class="faq-item">
          <div class="faq-question">
            <h3>How does the AI health insights feature work?</h3>
            <span class="faq-toggle">+</span>
          </div>
          <div class="faq-answer">
            <p>Our machine learning algorithms analyze your personal health patterns over time, comparing them with population health data to provide personalized recommendations for hydration, sleep, activity, and overall wellness optimization.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Waitlist Section -->
  <section id="waitlist" class="waitlist-section">
    <div class="section-container">
      <div class="waitlist-content">
        <h2>Join the VitalWatch Waitlist</h2>
        <p>Be among the first to experience the future of health monitoring. Get exclusive early access and special pricing.</p>
        <div class="waitlist-form">
          <input type="email" id="email-input" placeholder="Enter your email address" required>
          <button id="join-waitlist-btn" class="btn-primary">Join Waitlist</button>
        </div>
        <div id="success-message" class="success-message hidden">
          <div class="success-icon">✓</div>
          <h3>Welcome to VitalWatch!</h3>
          <p>You've successfully joined our waitlist. We'll notify you as soon as VitalWatch becomes available.</p>
        </div>
        <div class="waitlist-benefits">
          <div class="benefit">
            <span class="benefit-icon">🎯</span>
            <span>Early access to VitalWatch</span>
          </div>
          <div class="benefit">
            <span class="benefit-icon">💰</span>
            <span>Exclusive launch pricing</span>
          </div>
          <div class="benefit">
            <span class="benefit-icon">📱</span>
            <span>Beta app access</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta-section">
    <div class="section-container">
      <h2>Ready to transform your health?</h2>
      <p>Join thousands who've already discovered the future of personal wellness monitoring.</p>
      <div class="cta-buttons">
        <button class="btn-primary large">Order VitalWatch - $599</button>
        <button class="btn-secondary large">Learn More</button>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-brand">
        <h4>VitalWatch</h4>
        <p>The future of health monitoring</p>
      </div>
      <div class="footer-links">
        <div class="footer-column">
          <h5>Product</h5>
          <a href="#">Features</a>
          <a href="#">Specifications</a>
          <a href="#">Compatibility</a>
        </div>
        <div class="footer-column">
          <h5>Support</h5>
          <a href="#">User Guide</a>
          <a href="#">Contact</a>
          <a href="#">Warranty</a>
        </div>
        <div class="footer-column">
          <h5>Company</h5>
          <a href="#">About</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </div>
  </footer>
`;