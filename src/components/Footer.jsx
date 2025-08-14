import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#features' },
        { text: 'Health Monitoring', href: '#health' },
        { text: 'Design', href: '#design' },
        { text: 'Pricing', href: '#pricing' },
        { text: 'Specifications', href: '#specs' },
        { text: 'Compatibility', href: '#compatibility' }
      ]
    },
    {
      title: 'Support',
      links: [
        { text: 'Help Center', href: '#help' },
        { text: 'User Guide', href: '#guide' },
        { text: 'Contact Support', href: '#contact' },
        { text: 'Warranty', href: '#warranty' },
        { text: 'Returns & Exchanges', href: '#returns' },
        { text: 'Shipping Info', href: '#shipping' }
      ]
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '#about' },
        { text: 'Our Mission', href: '#mission' },
        { text: 'Careers', href: '#careers' },
        { text: 'Press Kit', href: '#press' },
        { text: 'Blog', href: '#blog' },
        { text: 'Investors', href: '#investors' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: '#privacy' },
        { text: 'Terms of Service', href: '#terms' },
        { text: 'Cookie Policy', href: '#cookies' },
        { text: 'GDPR Compliance', href: '#gdpr' },
        { text: 'Accessibility', href: '#accessibility' },
        { text: 'Medical Disclaimer', href: '#medical' }
      ]
    }
  ]

  const socialPlatforms = [
    { 
      name: 'Twitter', 
      icon: '🐦', 
      href: 'https://twitter.com/vitalwatch',
      hoverColor: 'hover:text-blue-400'
    },
    { 
      name: 'Instagram', 
      icon: '📷', 
      href: 'https://instagram.com/vitalwatch',
      hoverColor: 'hover:text-pink-400'
    },
    { 
      name: 'Facebook', 
      icon: '📘', 
      href: 'https://facebook.com/vitalwatch',
      hoverColor: 'hover:text-blue-600'
    },
    { 
      name: 'LinkedIn', 
      icon: '💼', 
      href: 'https://linkedin.com/company/vitalwatch',
      hoverColor: 'hover:text-blue-700'
    },
    { 
      name: 'YouTube', 
      icon: '📺', 
      href: 'https://youtube.com/vitalwatch',
      hoverColor: 'hover:text-red-500'
    },
    { 
      name: 'TikTok', 
      icon: '🎵', 
      href: 'https://tiktok.com/@vitalwatch',
      hoverColor: 'hover:text-pink-500'
    }
  ]

  const certifications = [
    'FDA Cleared',
    'CE Marked', 
    'ISO 13485',
    'GDPR Compliant',
    'SOC 2 Type II',
    'HIPAA Ready'
  ]

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-surface-900 text-surface-300 pt-16 pb-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <button 
                onClick={handleScrollToTop}
                className="group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg p-2 -m-2"
                aria-label="Scroll to top"
              >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent group-hover:from-primary-300 group-hover:to-accent-300 transition-all duration-300">
                  VitalWatch
                </h2>
              </button>
              
              <p className="text-surface-400 mt-2 mb-4">
                The future of health monitoring
              </p>
              
              <p className="text-surface-400 leading-relaxed mb-6 max-w-md">
                Advanced wearable technology that puts your health insights at your fingertips. 
                Monitor, analyze, and optimize your wellness journey with medical-grade precision.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialPlatforms.map((platform, index) => (
                  <motion.button
                    key={platform.name}
                    onClick={() => handleLinkClick(platform.href)}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-2xl ${platform.hoverColor} transition-colors duration-300 p-2 rounded-lg hover:bg-surface-800`}
                    aria-label={`Follow us on ${platform.name}`}
                    title={`Follow us on ${platform.name}`}
                  >
                    {platform.icon}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-surface-100 font-semibold text-lg">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.button
                      onClick={() => handleLinkClick(link.href)}
                      whileHover={{ x: 5 }}
                      className="text-surface-400 hover:text-primary-400 transition-colors duration-300 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 py-1 -mx-2"
                    >
                      {link.text}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-surface-800 pt-8 mb-8"
        >
          <div className="max-w-md mx-auto lg:mx-0 text-center lg:text-left">
            <h3 className="text-surface-100 font-semibold text-lg mb-2">
              Stay Updated
            </h3>
            <p className="text-surface-400 mb-4">
              Get the latest health tech insights and VitalWatch updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-surface-800 border border-surface-700 rounded-xl text-surface-100 placeholder-surface-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                aria-label="Email for newsletter subscription"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 transition-colors btn-ripple"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-surface-800 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-surface-500 text-center lg:text-left"
            >
              <p>
                © {currentYear} VitalWatch. All rights reserved. 
                <span className="block sm:inline sm:ml-2">
                  Made with ❤️ for your health.
                </span>
              </p>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center lg:justify-end gap-2"
            >
              {certifications.map((cert, index) => (
                <motion.span
                  key={cert}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(10, 132, 255, 0.1)' }}
                  className="px-3 py-1 bg-surface-800 text-surface-400 text-xs font-medium rounded-full border border-surface-700 hover:border-primary-500 transition-all duration-300 cursor-help"
                  title={`${cert} certified`}
                >
                  {cert}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Made with Claude Code */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-6 pt-6 border-t border-surface-800"
          >
            <p className="text-surface-500 text-sm">
              🤖 Generated with{' '}
              <a 
                href="https://claude.ai/code" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors underline decoration-dotted underline-offset-2"
              >
                Claude Code
              </a>
            </p>
            <p className="text-surface-600 text-xs mt-1">
              Co-Authored-By: Claude &lt;noreply@anthropic.com&gt;
            </p>
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            onClick={handleScrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 p-3 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-surface-900 z-30"
            aria-label="Scroll to top"
          >
            <motion.svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </motion.svg>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer