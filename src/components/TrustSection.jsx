import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const TrustSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Cardiologist, Johns Hopkins',
      quote: 'VitalWatch has revolutionized how my patients monitor their cardiovascular health. The accuracy rivals our clinical equipment.',
      avatar: '👩🏻‍⚕️',
      rating: 5,
      verified: true
    },
    {
      name: 'Michael Rodriguez',
      title: 'Marathon Runner & Coach',
      quote: 'The hydration monitoring saved my marathon. I knew exactly when to hydrate during my 26-mile run. Game-changing technology.',
      avatar: '🏃🏽‍♂️',
      rating: 5,
      verified: true
    },
    {
      name: 'Emma Thompson',
      title: 'Wellness Entrepreneur',
      quote: 'As someone who tracks everything health-related, VitalWatch provides insights I never knew I needed. My sleep and recovery have improved dramatically.',
      avatar: '👩🏼‍💼',
      rating: 5,
      verified: true
    },
    {
      name: 'Dr. James Park',
      title: 'Sports Medicine Physician',
      quote: 'I recommend VitalWatch to all my athletes. The real-time biometric data helps prevent injuries and optimize performance like nothing else.',
      avatar: '👨🏻‍⚕️',
      rating: 5,
      verified: true
    }
  ]

  const mediaLogos = [
    { name: 'TechCrunch', featured: 'Featured in TechCrunch' },
    { name: 'Forbes', featured: 'Forbes Health Award' },
    { name: 'Wired', featured: 'Wired Innovation Award' },
    { name: 'Harvard Health', featured: 'Harvard Health Publishing' },
    { name: 'Men\'s Health', featured: 'Best Health Tech 2024' },
    { name: 'Apple', featured: 'Apple Store Featured' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface-50 to-white dark:from-surface-900 dark:to-surface-800" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm font-medium mb-4">
              ⭐ Trusted Worldwide
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-surface-100 mb-6"
          >
            Trusted by{' '}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              health-conscious people
            </span>{' '}
            everywhere
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-surface-600 dark:text-surface-400 max-w-3xl mx-auto leading-relaxed"
          >
            Join over 50,000 users who trust VitalWatch with their most important asset—their health.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {[
            { number: '50,000+', label: 'Active Users', icon: '👥' },
            { number: '99.2%', label: 'Accuracy Rate', icon: '🎯' },
            { number: '4.9/5', label: 'User Rating', icon: '⭐' },
            { number: '24/7', label: 'Health Monitoring', icon: '🩺' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center bg-white dark:bg-surface-800 rounded-2xl p-6 shadow-lg border border-surface-200 dark:border-surface-700"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                {stat.number}
              </div>
              <div className="text-surface-600 dark:text-surface-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-surface-800 rounded-3xl p-8 lg:p-12 shadow-2xl border border-surface-200 dark:border-surface-700 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-4xl text-primary-200 dark:text-primary-800">"</div>
              
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl text-center text-surface-800 dark:text-surface-200 font-medium leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center">
                <div className="text-4xl mr-4">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div className="text-center">
                  <div className="font-semibold text-surface-900 dark:text-surface-100 flex items-center justify-center">
                    {testimonials[currentTestimonial].name}
                    {testimonials[currentTestimonial].verified && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center"
                      >
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    )}
                  </div>
                  <div className="text-surface-600 dark:text-surface-400">
                    {testimonials[currentTestimonial].title}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-surface-200 dark:bg-surface-700 hover:bg-surface-300 dark:hover:bg-surface-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeftIcon className="w-6 h-6 text-surface-600 dark:text-surface-400" />
              </motion.button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial
                        ? 'bg-primary-500'
                        : 'bg-surface-300 dark:bg-surface-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-surface-200 dark:bg-surface-700 hover:bg-surface-300 dark:hover:bg-surface-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRightIcon className="w-6 h-6 text-surface-600 dark:text-surface-400" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Media Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-surface-800 dark:text-surface-200 mb-8">
              Featured & Trusted By
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {mediaLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="group cursor-pointer"
                  title={logo.featured}
                >
                  <div className="bg-white dark:bg-surface-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-surface-200 dark:border-surface-700 group-hover:border-primary-300 dark:group-hover:border-primary-600">
                    <div className="text-lg font-bold text-surface-600 dark:text-surface-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {logo.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustSection