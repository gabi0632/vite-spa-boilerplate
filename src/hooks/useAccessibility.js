import { useEffect } from 'react'

export const useAccessibility = () => {
  useEffect(() => {
    // Skip links for keyboard navigation
    const skipLink = document.createElement('a')
    skipLink.href = '#main-content'
    skipLink.textContent = 'Skip to main content'
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-primary-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:no-underline'
    skipLink.addEventListener('click', (e) => {
      e.preventDefault()
      const mainContent = document.getElementById('main-content')
      if (mainContent) {
        mainContent.focus()
        mainContent.scrollIntoView({ behavior: 'smooth' })
      }
    })
    document.body.insertBefore(skipLink, document.body.firstChild)

    // Announce page changes to screen readers
    const announcePageChange = (message) => {
      const announcement = document.createElement('div')
      announcement.setAttribute('aria-live', 'polite')
      announcement.setAttribute('aria-atomic', 'true')
      announcement.className = 'sr-only'
      announcement.textContent = message
      document.body.appendChild(announcement)
      
      setTimeout(() => {
        document.body.removeChild(announcement)
      }, 1000)
    }

    // Monitor URL changes for SPA navigation
    const observer = new MutationObserver(() => {
      const currentSection = document.querySelector('section:in-viewport')
      if (currentSection && currentSection.id) {
        announcePageChange(`Navigated to ${currentSection.id} section`)
      }
    })

    observer.observe(document, { childList: true, subtree: true })

    // Cleanup
    return () => {
      observer.disconnect()
      if (skipLink && skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink)
      }
    }
  }, [])

  // Function to announce dynamic content changes
  const announceChange = (message) => {
    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', 'polite')
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'sr-only'
    announcement.textContent = message
    document.body.appendChild(announcement)
    
    setTimeout(() => {
      if (announcement && announcement.parentNode) {
        document.body.removeChild(announcement)
      }
    }, 3000)
  }

  return { announceChange }
}

// Custom hook for managing focus
export const useFocusManagement = () => {
  const trapFocus = (element) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstFocusable = focusableElements[0]
    const lastFocusable = focusableElements[focusableElements.length - 1]

    const handleTabKey = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            lastFocusable.focus()
            e.preventDefault()
          }
        } else {
          if (document.activeElement === lastFocusable) {
            firstFocusable.focus()
            e.preventDefault()
          }
        }
      }
    }

    element.addEventListener('keydown', handleTabKey)
    
    return () => {
      element.removeEventListener('keydown', handleTabKey)
    }
  }

  return { trapFocus }
}

// Reduced motion preference hook
export const useReducedMotion = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  useEffect(() => {
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.01s')
      document.documentElement.style.setProperty('--transition-duration', '0.01s')
    }
  }, [prefersReducedMotion])

  return prefersReducedMotion
}