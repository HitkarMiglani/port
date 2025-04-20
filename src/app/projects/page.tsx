"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

// Animation variants
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

// More comprehensive project data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe for payments. Features include product catalog, cart functionality, user authentication, and order management.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    link: "#",
    github: "https://github.com/",
    featured: true,
    category: "web",
    completionDate: "March 2025",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A task management application with real-time updates using Firebase and React. Includes features like task categorization, due dates, notifications, and team collaboration.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Firebase", "Material UI", "Redux"],
    link: "#",
    github: "https://github.com/",
    featured: true,
    category: "web",
    completionDate: "January 2025",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js, Framer Motion, and Tailwind CSS. Features smooth animations, responsive design, and dark mode support.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    link: "#",
    github: "https://github.com/",
    featured: false,
    category: "web",
    completionDate: "December 2024",
  },
  {
    id: 4,
    title: "Image Classification Model",
    description:
      "A machine learning model built with TensorFlow and Python for image classification. Trained on a custom dataset with over 10,000 images across 5 categories.",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Python", "TensorFlow", "Machine Learning", "Computer Vision"],
    link: "#",
    github: "https://github.com/",
    featured: true,
    category: "ml",
    completionDate: "February 2025",
  },
  {
    id: 5,
    title: "Weather Forecast App",
    description:
      "A weather forecast application using React Native that provides real-time weather updates, 7-day forecasts, and location-based services.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: [
      "React Native",
      "API Integration",
      "Geolocation",
      "Mobile Development",
    ],
    link: "#",
    github: "https://github.com/",
    featured: false,
    category: "mobile",
    completionDate: "November 2024",
  },
  {
    id: 6,
    title: "Data Visualization Dashboard",
    description:
      "An interactive dashboard for data visualization using D3.js and React. Features include customizable charts, filters, and export capabilities.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "D3.js", "Data Visualization", "Dashboard"],
    link: "#",
    github: "https://github.com/",
    featured: false,
    category: "data",
    completionDate: "January 2025",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects based on category and search query
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = filter === "all" || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  // Project categories
  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "ml", label: "Machine Learning" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "data", label: "Data Projects" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
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
            className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent text-center"
          >
            My Projects
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12"
          >
            Explore my portfolio of projects spanning web development, machine
            learning, and more. Each project represents my passion for building
            innovative solutions.
          </motion.p>

          {/* Search and Filter Bar */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              {/* Search input */}
              <div className="col-span-1">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              {/* Filter buttons */}
              <div className="col-span-2 flex flex-wrap gap-2 justify-start md:justify-end">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setFilter(category.id)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      filter === category.id
                        ? "bg-primary-500 text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      {filter === "all" && searchQuery === "" && (
        <section className="px-8 md:px-12 lg:px-24 mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary-500 mb-8" />

            <div className="grid grid-cols-1 gap-12">
              {projects
                .filter((p) => p.featured)
                .slice(0, 2)
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`grid md:grid-cols-12 gap-6 items-center bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                      index % 2 === 0 ? "" : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`md:col-span-5 ${
                        index % 2 === 0 ? "md:order-1" : "md:order-2"
                      }`}
                    >
                      <div className="relative h-64 md:h-80 w-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                      </div>
                    </div>

                    <div
                      className={`p-6 md:col-span-7 ${
                        index % 2 === 0 ? "md:order-2" : "md:order-1"
                      }`}
                    >
                      <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 rounded-full mb-4">
                        Featured Project
                      </span>
                      <h2 className="text-2xl font-display font-bold mb-3 text-gray-900 dark:text-white">
                        {project.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <a
                          href={project.link}
                          className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                        >
                          View Demo <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                        <a
                          href={project.github}
                          className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          Source Code <Github className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* All Projects Grid */}
      <section className="px-8 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-3xl font-display font-bold">
              {filter === "all"
                ? "All Projects"
                : categories.find((c) => c.id === filter)?.label}
            </h2>
            {filteredProjects.length > 0 && (
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                Showing {filteredProjects.length}{" "}
                {filteredProjects.length === 1 ? "project" : "projects"}
              </span>
            )}
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                  id={`project-${project.id}`}
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70" />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-md">
                        {project.completionDate}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold mb-2 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex justify-between items-center">
                      <a
                        href={project.link}
                        className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
                      >
                        View Details <ArrowUpRight className="ml-1 h-4 w-4" />
                      </a>
                      <a
                        href={project.github}
                        aria-label="GitHub repository"
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-12 text-center shadow-md">
              <h3 className="text-2xl font-medium mb-4">No projects found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try changing your search criteria or filter
              </p>
              <button
                onClick={() => {
                  setFilter("all");
                  setSearchQuery("");
                }}
                className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </motion.div>
      </section>

      {/* Call to action */}
      <section className="mt-24 px-8 md:px-12 lg:px-24 py-16 bg-gradient-to-r from-primary-500 to-primary-700 text-white">
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
            Let&apos;s discuss how my skills and experience can help bring your
            project to life.
          </p>
          <a
            href="/contact"
            className="px-8 py-3 rounded-lg bg-white text-primary-600 hover:bg-gray-100 font-medium transition-colors inline-flex items-center"
          >
            Contact Me <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
