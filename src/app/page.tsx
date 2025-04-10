'use client'

import { motion } from 'framer-motion'
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <>
      <SpeedInsights/>
      <main className="min-h-screen p-8 md:p-12 lg:p-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent"
          >
            Hello, I'm Hitkar Miglani
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
          >
            A developer passionate about building modern web applications
            that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-display font-bold mb-4">Experience</h2>
              <p className="text-gray-600 dark:text-gray-300">
                7+ years of building scalable web applications
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-display font-bold mb-4">Skills</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Full-stack development, UI/UX design, and cloud architecture
              </p>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </>
  )
}
