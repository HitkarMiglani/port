"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      // Handle non-JSON responses
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        console.error("Non-JSON response received:", await response.text());
        throw new Error("Server returned an invalid response format");
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Server error occurred");
      }

      setSubmitSuccess(true);
      setEmail("");

      // Reset the success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(null);
      }, 5000);
    } catch (error) {
      console.error("Error submitting newsletter form:", error);
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Section */}
        <div className="mb-16 pb-16 border-b border-gray-200 dark:border-gray-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center"
          >
            <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Stay Connected
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Subscribe to my newsletter to receive updates on my latest
              projects, blog posts, and tech insights.
            </p>

            {submitSuccess === true && (
              <div className="mb-6 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd" />
                </svg>
                <span>Thank you for subscribing to our newsletter!</span>
              </div>
            )}

            {submitSuccess === false && (
              <div className="mb-6 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd" />
                </svg>
                <span>
                  There was an error with your subscription. Please try again.
                </span>
              </div>
            )}

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-2.5 rounded-lg flex-grow border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500" />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-5 py-2.5 bg-primary-500 text-white font-medium rounded-lg transition-colors ${isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-primary-600"}`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Subscribing...
                  </div>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          </motion.div>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Hitkar Miglani
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Motivated 2nd-year CSE student with a foundation in AI, ML, and
              Data Science. Passionate about solving challenges through
              AI-driven solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/HitkarMiglani"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/hitkar-miglani"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com/HitkarM"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/HitkarMiglani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/hitkar-miglani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.geeksforgeeks.org/user/hitkar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  GeeksForGeeks
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com/hitkar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  LeetCode
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={16} className="text-primary-500 mr-2" />
                <a
                  href="mailto:miglanihitkar@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  miglanihitkar@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="text-primary-500 mr-2 mt-1" />
                <span className="text-gray-600 dark:text-gray-400">
                  New Delhi, India
                </span>
              </div>
              <div className="pt-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
                >
                  Get in touch <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          </motion.div>
          </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
          &copy; {currentYear} Hitkar Miglani. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <Link
            href="/privacy"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
    );
}