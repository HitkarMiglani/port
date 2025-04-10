'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
          About Me
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I'm a passionate full-stack developer with over 7 years of experience building
              modern web applications. I specialize in creating responsive, accessible, and
              performant user interfaces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-display font-bold mb-4 text-gray-900 dark:text-white">
              My Journey
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              My journey in web development began in college when I built my first website.
              Since then, I've worked with various technologies and frameworks, always
              staying up-to-date with the latest trends and best practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-display font-bold mb-4 text-gray-900 dark:text-white">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-xl font-display font-bold mb-2 text-primary-500">
                  Frontend
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Framer Motion</li>
                </ul>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-xl font-display font-bold mb-2 text-primary-500">
                  Backend
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
} 