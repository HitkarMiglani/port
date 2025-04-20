"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, HandHelping } from "lucide-react";

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with improved layout and CTA */}
      <section className="pt-24 pb-12 px-8 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block py-1 px-3 mb-4 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 text-sm font-medium"
            >
              Full-Stack Developer & ML Enthusiast
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent"
            >
              Hello, I&apos;m Hitkar Miglani
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              A motivated 2nd-year Computer Science & Engineering student
              passionate about AI, Machine Learning, and building innovative
              web applications.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/projects"
                className="px-6 py-3 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors flex items-center"
              >
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
              >
                Contact Me
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center space-x-4"
            >
              <a
                href="https://github.com/HitkarMiglani"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/hitkar-miglani/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <HandHelping className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative hidden md:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent rounded-full blur-3xl" />
            <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              {/* Replace with your actual profile image */}
              <p className="text-5xl font-bold text-gray-300">HM</p>
              {/* Uncomment and use your own image
              <Image 
                src="/profile-pic.jpg" 
                alt="Hitkar Miglani" 
                fill 
                className="object-cover"
              />
              */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience & Skills Section */}
      <section className="py-12 px-8 md:px-12 lg:px-24 bg-gray-50 dark:bg-gray-900/30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">
              Skills & Experience
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto"/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-display font-bold mb-6">
                Experience
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-md bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-500">
                    <span className="font-bold text-sm">3+</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Python & C++</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Building applications and solving complex problems
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-md bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-500">
                    <span className="font-bold text-sm">2+</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      Machine Learning & Data Science
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Creating models and analyzing data
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-md bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-500">
                    <span className="font-bold text-sm">1+</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Web Development</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Building responsive and interactive web applications
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-display font-bold mb-6">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Python", level: 90 },
                  { name: "C++", level: 85 },
                  { name: "Java", level: 75 },
                  { name: "Next.js", level: 80 },
                  { name: "Machine Learning", level: 85 },
                  { name: "DSA", level: 80 },
                  { name: "Docker", level: 70 },
                  { name: "Git & GitHub", level: 85 },
                ].map((skill, index) => (
                  <div key={index} className="mb-3">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-primary-500 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 px-8 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects. Check out my projects page
              for more.
            </p> 
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: project * 0.1 }}
                className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-400">Project Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Project {project}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    A brief description of this amazing project and the
                    technologies used.
                  </p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300">
                      React
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300">
                      Python
                    </span>
                  </div>
                  <Link
                    href={`/projects#project-${project}`}
                    className="text-primary-500 font-medium flex items-center"
                  >
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-primary-500 hover:bg-primary-500 hover:text-white font-medium transition-colors"
            >
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Call to action */}
      <section className="py-16 px-8 md:px-12 lg:px-24 bg-gradient-to-r from-primary-500 to-primary-700 text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Interested in working together?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 rounded-lg bg-white text-primary-600 hover:bg-gray-100 font-medium transition-colors inline-flex items-center"
          >
            Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
