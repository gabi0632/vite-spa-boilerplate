import React from 'react'
import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-surface-900 dark:to-surface-800 flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 bg-red-500 transform rotate-45 relative mx-auto mb-6"
        >
          <div className="absolute w-16 h-16 bg-red-500 rounded-full -top-8 left-0"></div>
          <div className="absolute w-16 h-16 bg-red-500 rounded-full top-0 -left-8"></div>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl font-bold text-surface-800 dark:text-surface-100 mb-2"
        >
          VitalWatch
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-surface-600 dark:text-surface-300"
        >
          Your health journey begins now
        </motion.p>
      </div>
    </motion.div>
  )
}

export default LoadingScreen