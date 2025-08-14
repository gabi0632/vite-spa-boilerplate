import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import TrustSection from './components/TrustSection'
import HealthSection from './components/HealthSection'
import DesignSection from './components/DesignSection'
import FAQSection from './components/FAQSection'
import WaitlistSection from './components/WaitlistSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import { useAccessibility, useReducedMotion } from './hooks/useAccessibility'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const { announceChange } = useAccessibility()
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    // Check for saved dark mode preference or default to system preference
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
      announceChange('VitalWatch app loaded successfully')
    }, 2000)

    return () => clearTimeout(timer)
  }, [announceChange])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      announceChange('Dark mode enabled')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      announceChange('Light mode enabled')
    }
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Screen reader announcement for app state */}
      <div 
        aria-live="polite" 
        aria-atomic="true" 
        className="sr-only"
        role="status"
      >
        VitalWatch health monitoring application
      </div>

      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.5 }}
          className="min-h-screen bg-gradient-to-br from-surface-50 to-surface-100 dark:from-surface-900 dark:to-surface-800"
        >
          <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          
          <main 
            role="main" 
            id="main-content"
            tabIndex="-1"
            aria-label="VitalWatch main content"
          >
            <HeroSection />
            <FeaturesSection />
            <TrustSection />
            <HealthSection />
            <DesignSection />
            <FAQSection />
            <WaitlistSection />
            <CTASection />
          </main>

          <Footer />
        </motion.div>
      )}
    </div>
  )
}

export default App