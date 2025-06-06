"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";

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

// More comprehensive blog data with additional fields
const blogPosts = [
  {
    id: 1,
    title:
      "Mastering Prompt Design in Vertex AI: My Learning Journey with Google Cloud",
    excerpt:
      "In this post, I share my experience learning prompt design in Vertex AI, a powerful tool for building AI applications on Google Cloud.",
    content: "Full content would go here...",
    date: "April 12, 2025",
    readTime: "2 min read",
    image:
      "https://images.unsplash.com/photo-1698434156098-68e834638679?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fE1hc3RlcmluZyUyMFByb21wdCUyMERlc2lnbiUyMGluJTIwVmVydGV4JTIwQUklM0ElMjBNeSUyMExlYXJuaW5nJTIwSm91cm5leSUyMHdpdGglMjBHb29nbGUlMjBDbG91ZHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Google Cloud",
    featured: true,
    author: "Hitkar Miglani",
    authorImage: "/profile-pic.jpg",
    tags: ["Vertex AI", "Google Cloud", "AI"],
    link: "https://medium.com/@miglanihitkar/mastering-prompt-design-in-vertex-ai-my-learning-journey-with-google-cloud-2723c82831c3",
  },
  {
    id: 2,
    title:
      "Mastering Real-World AI Application Design with Gemini and Imagen: My Learning Journey with Google Cloud",
    excerpt:
      "In this post, I share my experience learning how to design real-world AI applications using Gemini and Imagen on Google Cloud.",
    content: "Full content would go here...",
    date: "April 19, 2025",
    readTime: "2 min read",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Gemini AI",
    featured: false,
    author: "Hitkar Miglani",
    authorImage: "/profile-pic.jpg",
    tags: ["Gemini AI", "Imagen", "Google Cloud"],
    link: "https://medium.com/@miglanihitkar/mastering-real-world-ai-application-design-with-gemini-and-imagen-my-learning-journey-with-google-3a2b65b65d0f",
  },
  {
    id: 3,
    title:
      "Mastering Generative AI with the Gemini API in Vertex AI: My Google Cloud Learning Journey",
    excerpt:
      "In this post, I share my journey of mastering generative AI using the Gemini API in Vertex AI on Google Cloud.",
    content: "Full content would go here...",
    date: "April 19, 2025",
    readTime: "2 min read",
    image:
      "https://images.unsplash.com/photo-1740214610868-fe7681c1e121?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEluc3BlY3RpbmclMjBSaWNoJTIwRG9jdW1lbnRzJTIwd2l0aCUyMEdlbWluaSUyME11bHRpbW9kYWxpdHklMjBhbmQlMjBNdWx0aW1vZGFsJTIwUkFHJTNBJTIwTXklMjBHb29nbGUlMjBDbG91ZCUyMExlYXJuaW5nJTIwSm91cm5leXxlbnwwfHwwfHx8MA%3D%3D",
    category: "Generative AI",
    featured: false,
    author: "Hitkar Miglani",
    authorImage: "/profile-pic.jpg",
    tags: ["Generative AI", "Gemini API", "Vertex AI", "Google Cloud"],
    link: "https://medium.com/@miglanihitkar/mastering-generative-ai-with-the-gemini-api-in-vertex-ai-my-google-cloud-learning-journey-06527c0f13d1",
  },
  {
    id: 4,
    title:
      "Inspecting Rich Documents with Gemini Multimodality and Multimodal RAG: My Google Cloud Learning Journey",
    excerpt:
      "In this post, I share my experience learning how to inspect rich documents using Gemini multimodality and multimodal RAG on Google Cloud.",
    content: "Full content would go here...",
    date: "April 25, 2025",
    readTime: "2 min read",
    image:
      "https://images.unsplash.com/photo-1654764450273-59862da1a259?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJldHJpZXZhbCUyMGF1Z21lbnRlZCUyMGdlbmVyYXRpb258ZW58MHx8MHx8fDI%3D",
    category: "Document AI",
    featured: true,
    author: "Hitkar Miglani",
    authorImage: "/profile-pic.jpg",
    tags: ["Gemini Multimodality", "Multimodal RAG", "Google Cloud"],
    link: "https://medium.com/@miglanihitkar/inspecting-rich-documents-with-gemini-multimodality-and-multimodal-rag-my-google-cloud-learning-6a557c38dc3d",
  },
  {
    id: 5,
    title:
      "Building GenAI Apps with Gemini and Streamlit: My Google Cloud Learning Journey",
    excerpt:
      "In this post, I share my experience building generative AI applications using Gemini and Streamlit on Google Cloud.",
    content: "Full content would go here...",
    date: "April 25, 2025",
    readTime: "2 min read",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Streamlit",
    featured: false,
    author: "Hitkar Miglani",
    authorImage: "/profile-pic.jpg",
    tags: ["Gemini", "Streamlit", "Google Cloud"],
    link: "https://medium.com/@miglanihitkar/building-genai-apps-with-gemini-and-streamlit-my-google-cloud-learning-journey-4ef33cae045f",
  },
];

// All unique categories from blog posts
const allCategories = Array.from(
  new Set(blogPosts.map((post) => post.category))
);

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeSuccess, setSubscribeSuccess] = useState<boolean | null>(
    null
  );

  // Filter posts based on search query and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // Featured posts
  const featuredPosts = blogPosts.filter((post) => post.featured);

  // Handle newsletter form submission
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: subscribeEmail }),
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

      setSubscribeSuccess(true);
      setSubscribeEmail("");

      // Reset the success message after 5 seconds
      setTimeout(() => {
        setSubscribeSuccess(null);
      }, 5000);
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      setSubscribeSuccess(false);
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
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
            className="text-4xl md:text-6xl font-display font-bold mb-6 pb-2 bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent text-center"
          >
            My Blog
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12"
          >
            Thoughts, tutorials, and insights on web development, machine
            learning, and other technologies I&apos;m passionate about.
          </motion.p>

          {/* Search and Filter Bar */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              {/* Search input */}
              <div className="md:col-span-5 relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>

              {/* Category filters */}
              <div className="md:col-span-7 flex flex-wrap gap-2 justify-start md:justify-end">
                <button
                  onClick={() => setActiveCategory("All")}
                  className={`px-3 py-1.5 rounded-lg transition-colors text-sm ${
                    activeCategory === "All"
                      ? "bg-primary-500 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  All
                </button>
                {allCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3 py-1.5 rounded-lg transition-colors text-sm ${
                      activeCategory === category
                        ? "bg-primary-500 text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Posts */}
      {searchQuery === "" && activeCategory === "All" && (
        <section className="px-8 md:px-12 lg:px-24 mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              Featured Posts
            </h2>
            <div className="w-20 h-1 bg-primary-500 mb-8" />

            <div className="grid grid-cols-1 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="grid md:grid-cols-12 gap-6 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="md:col-span-5">
                    <div className="relative h-64 md:h-full w-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary-500 text-white text-sm font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                    </div>
                  </div>

                  <div className="p-6 md:col-span-7 flex flex-col">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-gray-900 dark:text-white">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden mr-2">
                          {/* Replace with actual author image when available */}
                          <span className="text-sm font-bold">HM</span>
                          {/* <Image 
                            src={post.authorImage} 
                            alt={post.author} 
                            width={32} 
                            height={32} 
                            className="object-cover"
                          /> */}
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {post.author}
                        </span>
                      </div>
                      <a
                        href={`${post.link}`}
                        className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
                        target="_blank"
                      >
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* All Blog Posts Grid */}
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
              {activeCategory === "All" ? "All Articles" : activeCategory}
            </h2>
            {filteredPosts.length > 0 && (
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                Showing {filteredPosts.length}{" "}
                {filteredPosts.length === 1 ? "post" : "posts"}
              </span>
            )}
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary-500 text-white text-sm rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-display font-bold mb-3 text-gray-900 dark:text-white line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden mr-2">
                          <span className="text-xs font-bold">HM</span>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          {post.author}
                        </span>
                      </div>
                      <a
                        href={`${post.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium text-sm"
                      >
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-12 text-center shadow-md">
              <h3 className="text-2xl font-medium mb-4">No articles found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try changing your search criteria or category
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
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
    </div>
  );
}
