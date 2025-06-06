"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, CheckCircle2 } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="px-8 md:px-12 lg:px-24 mb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-6xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-display font-bold mb-8 bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent text-center md:text-left"
          >
            About Me
          </motion.h1>

          <div className="grid md:grid-cols-12 gap-12 items-center">
            {/* `Image Column */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-5 relative"
            >
              <div className="aspect-square w-full max-w-md mx-auto md:ml-0 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                  {/* Replace with your actual image */}
                  <span className="text-7xl font-bold text-gray-300">HM</span>
                  {/* Uncomment and use your own image
                  <Image 
                    src="/profile-full.jpg" 
                    alt="Hitkar Miglani" 
                    fill 
                    className="object-cover"
                  />
                  */}
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-primary-500/30 to-transparent opacity-60" />
              </div>
            </motion.div>

            {/* Info Column */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-7 space-y-6"
            >
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                I&apos;m a motivated Computer Science & Engineering student with
                a passion for AI, Machine Learning, and building modern web
                applications that solve real-world problems.
              </p>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Currently in my 2nd year of study, I&apos;m combining my
                academic knowledge with practical projects to develop a
                well-rounded skill set in software development and data science.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors flex items-center"
                >
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a
                  href="https://docs.google.com/document/d/e/2PACX-1vSC-AvLBkf5zQ67mw9B-qB_EdEHgRUB-Ibk8z9X90GgZsFwU_aXxCRtXfBSjrtB_I5ZoEJqfR1wn0kp/pub?embedded=false"
                  target="_blank noopener noreferrer"
                  className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors flex items-center"
                >
                  Download Resume <Download className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Journey Timeline */}
      <section className="py-12 px-8 md:px-12 lg:px-24 bg-gray-50 dark:bg-gray-900/30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">My Journey</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My path in technology began with a curiosity about how things work
              digitally and has evolved into a passion for creating elegant
              solutions.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-primary-700 z-0" />

            {/* Timeline events */}
            {[
              {
                year: "2020",
                title: "The Beginning",
                description:
                  "As the Lockdown began due to Covid-19, I found the amazing world of tech and programing.",
              },
              {
                year: "2021 - 2022",
                title: "First Programming Experience",
                description:
                  "Started learning Python and C++ through online courses and mentors help, building simple projects to understand programming concepts.",
              },
              {
                year: "2023",
                title: "Started University",
                description:
                  "Began my Computer Science & Engineering (AI) degree program, focusing on core computer science principles and AI.",
              },
              {
                year: "2023",
                title: "First ML Project - Face Emotion Recognition",
                description:
                  "Created my first machine learning model for image classification, solidifying my interest in AI and data science.",
              },
              {
                year: "2024",
                title: "Web Development Journey",
                description:
                  "Explored web development with Next.js and Tailwind CSS, building responsive and interactive web applications.",
              },
              {
                year: "2025",
                title: "Personal Protfolio",
                description:
                  "Developed my personal portfolio website to showcase my projects and skills, using NextJS and Framer Motion.",
              },
              {
                year: "2025",
                title: "Journey Continues...",
                description:
                  "Continuing to learn and grow in AI, machine learning, and web development, with a focus on building impactful projects.",
              },
            ].map((event, index) => (
              <motion.div
                key={`${event.year}-${event.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative z-10 mb-12 flex items-center ${
                  index % 2 === 0
                    ? "justify-start md:justify-end"
                    : "justify-start"
                } ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
              >
                <div
                  className={
                    "absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary-500 shadow-lg z-20"
                  }
                />

                <div className="w-full md:w-5/12">
                  <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 rounded-full mb-2">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills & Education */}
      <section className="py-12 px-8 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-display font-bold mb-6">
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                  <h3 className="text-xl font-display font-bold mb-4 text-primary-500">
                    Programming Languages
                  </h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <div className="mb-3">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Python</span>
                        <span className="text-sm text-gray-500">90%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-primary-500 h-2 rounded-full"
                          style={{ width: "90%" }}
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">C++</span>
                        <span className="text-sm text-gray-500">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-primary-500 h-2 rounded-full"
                          style={{ width: "85%" }}
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">JavaScript</span>
                        <span className="text-sm text-gray-500">80%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-primary-500 h-2 rounded-full"
                          style={{ width: "80%" }}
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Java</span>
                        <span className="text-sm text-gray-500">75%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-primary-500 h-2 rounded-full"
                          style={{ width: "75%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                  <h3 className="text-xl font-display font-bold mb-4 text-primary-500">
                    Technologies & Frameworks
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Frontend</h4>
                      <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                          Next.js
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                          Tailwind CSS
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                          BootStrap
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Backend & ML</h4>
                      <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                          TensorFlow
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                          Node.js
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                          MongoDB
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                  <h3 className="text-xl font-display font-bold mb-4 text-primary-500">
                    Achivements
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong>Google Arcade Champions Milestone</strong> -
                      Achieved the Champions milestone in the Google Arcade
                      event.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-display font-bold mb-6">
                Education & Certifications
              </h2>
              <div className="space-y-6">
                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 rounded-full mb-2">
                    2023 - 2027
                  </span>
                  <h3 className="text-xl font-bold mb-1">
                    BTech in Computer Science & Engineering
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    Chitkara University, Punjab, India
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Currently in my 3rd year, focusing on artificial
                    intelligence, machine learning, and web development
                    technologies.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-display font-bold mb-4 text-primary-500">
                    Certifications
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Machine Learning Specialization",
                        issuer: "Coursera",
                        date: "2024",
                      },
                      {
                        name: "Full-Stack Web Development",
                        issuer: "Udemy",
                        date: "2023",
                      },
                      {
                        name: "Data Structures and Algorithms",
                        issuer: "edX",
                        date: "2023",
                      },
                    ].map((cert) => (
                      <div
                        key={`${cert.name}-${cert.date}`}
                        className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-between"
                      >
                        <div>
                          <h4 className="font-semibold">{cert.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {cert.issuer}
                          </p>
                        </div>
                        <span className="text-sm font-medium bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 rounded">
                          {cert.date}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-12 px-8 md:px-12 lg:px-24 bg-gray-50 dark:bg-gray-900/30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">My Values</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The core principles that guide my work and learning approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                title: "Continuous Learning",
                description:
                  "I believe in constantly expanding my knowledge and skills to stay at the forefront of technology.",
              },
              {
                id: 2,
                title: "Problem Solving",
                description:
                  "I enjoy tackling complex problems and finding elegant, efficient solutions through creative thinking.",
              },
              {
                id: 3,
                title: "Collaborative Growth",
                description:
                  "I value working with others, sharing knowledge, and growing together as a community.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to action */}
      <section className="py-16 px-8 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-display font-bold mb-6">
            Want to know more?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Feel free to check out my projects or reach out directly if you have
            any questions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors flex items-center"
            >
              View My Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
