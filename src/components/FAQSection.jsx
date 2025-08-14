import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0) // Start with first FAQ open
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const faqs = [
    {
      question: 'How accurate is the hydration monitoring?',
      answer: 'VitalWatch uses advanced bioimpedance sensors with clinical-grade accuracy of ±2%. Our proprietary algorithms analyze tissue hydration levels in real-time, providing more accurate readings than traditional methods. The technology has been validated through multiple clinical studies.',
      category: 'Technology'
    },
    {
      question: 'What\'s the battery life during continuous monitoring?',
      answer: 'With all health sensors active, VitalWatch provides 18+ hours of continuous monitoring. In power-saving mode, battery life extends to 7 days. Our revolutionary fast-charging technology provides 80% charge in just 30 minutes, so you\'re never without health insights.',
      category: 'Battery'
    },
    {
      question: 'Is VitalWatch suitable for medical diagnosis?',
      answer: 'VitalWatch is FDA-cleared for wellness monitoring and fitness tracking. While it provides medical-grade sensor accuracy, it should complement, not replace, professional medical advice or diagnosis. Always consult healthcare professionals for medical concerns.',
      category: 'Medical'
    },
    {
      question: 'What smartphone compatibility is required?',
      answer: 'VitalWatch is compatible with iOS 15+ and Android 9.0+. The companion app requires Bluetooth 5.0 for optimal performance and real-time health data synchronization. Works seamlessly with Apple Health and Google Fit.',
      category: 'Compatibility'
    },
    {
      question: 'Can I swim or shower with VitalWatch?',
      answer: 'Absolutely! VitalWatch has 50-meter water resistance (5 ATM) and continues hydration monitoring even during swimming. The titanium case and sapphire crystal are designed for all aquatic activities, from showering to deep-sea diving.',
      category: 'Durability'
    },
    {
      question: 'How does the AI health insights feature work?',
      answer: 'Our machine learning algorithms analyze your personal health patterns over time, comparing them with population health data to provide personalized recommendations. The AI learns your unique patterns and can predict potential health issues before they become problems.',
      category: 'AI Features'
    },
    {
      question: 'What\'s included in the box?',
      answer: 'Every VitalWatch includes: the watch with your selected band, wireless charging pad, USB-C cable, quick start guide, warranty information, and access to our premium health app with 1 year of advanced analytics included.',
      category: 'Package'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes! We ship worldwide with free shipping on all orders over $500. International customers receive full warranty support and localized customer service in 12 languages. Delivery typically takes 3-7 business days.',
      category: 'Shipping'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index)
  }

  const handleKeyPress = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggleFAQ(index)
    }
  }

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface-50 to-white dark:from-surface-900 dark:to-surface-800" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 rounded-full text-sm font-medium mb-4">
              ❓ Got Questions?
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-surface-100 mb-6"
          >
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-surface-600 dark:text-surface-400 max-w-3xl mx-auto leading-relaxed"
          >
            Everything you need to know about VitalWatch. Can't find what you're looking for? 
            Contact our support team anytime.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-surface-800 rounded-2xl shadow-lg border border-surface-200 dark:border-surface-700 overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                onKeyDown={(e) => handleKeyPress(e, index)}
                className="w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                aria-expanded={openFAQ === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-xs font-medium mr-3">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100 pr-8">
                      {faq.question}
                    </h3>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDownIcon className="w-6 h-6 text-surface-500 dark:text-surface-400" />
                  </motion.div>
                </div>
              </motion.button>

              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="border-t border-surface-200 dark:border-surface-700 pt-4">
                        <p className="text-surface-600 dark:text-surface-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Support CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12 p-8 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-3xl border border-primary-200 dark:border-primary-700"
        >
          <h3 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-4">
            Still have questions?
          </h3>
          <p className="text-surface-600 dark:text-surface-400 mb-6 max-w-2xl mx-auto">
            Our health tech experts are here to help 24/7. Get personalized answers about VitalWatch 
            and how it can transform your wellness journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-colors btn-ripple"
            >
              📧 Email Support
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 rounded-full font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
            >
              💬 Live Chat
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 rounded-full font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
            >
              📞 Call Us
            </motion.button>
          </div>

          {/* Support Hours */}
          <div className="mt-6 text-sm text-surface-500 dark:text-surface-400">
            <p>🌍 Available 24/7 • 🗣️ 12 Languages • ⚡ Average response: 2 minutes</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection