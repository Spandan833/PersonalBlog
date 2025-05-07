import getSortedPostsData from "../lib/posts.js";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight, Rss, ChevronRight, Mail, Calendar } from "lucide-react";
import Layout from "../components/Layout";
import ArticleCard from "../components/ArticleCard";

export default function Home({ allPostsData }) {
  const topics = [
    {
      name: "RF Engineering",
      description: "Antenna design, RF circuits, and wireless systems",
      icon: "📡",
    },
    {
      name: "Web Development",
      description: "Modern frameworks, best practices, and web architecture",
      icon: "🌐",
    },
    {
      name: "Network Analysis",
      description: "Signal processing and network optimization",
      icon: "📊",
    },
    {
      name: "JavaScript",
      description: "Advanced concepts and practical applications",
      icon: "⚡",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Spandan's Blog - RF Engineer & Web Developer</title>
        <meta
          name="description"
          content="Personal blog of Spandan, an RF engineer and web developer sharing insights on RF engineering, web development, and more."
        />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        {/* Hero Section */}
        <section className="py-20 lg:py-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Tech Insights & Engineering Excellence
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Bridging the gap between RF Engineering and Modern Web
              Development. Join me on a journey through electromagnetic waves
              and digital innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore My Work
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/rss"
                className="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-800 rounded-xl hover:bg-gray-200 transition-all duration-300"
              >
                <Rss className="mr-2" size={20} />
                RSS Feed
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-8 bg-gray-50 rounded-3xl px-8 mb-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPostsData.slice(0, 3).map((post) => (
                <ArticleCard key={post.id} post={post} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/articles"
                className="group inline-flex items-center px-6 py-3 text-blue-600 hover:text-blue-700 font-medium transition duration-300"
              >
                Browse All Articles
                <ChevronRight className="ml-1 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Topics Grid */}
        <section className="py-8 mb-16"> 
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <span className="bg-purple-100 text-purple-600 p-2 rounded-lg mr-4">
              🎯
            </span>
            Explore Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topics.map((topic) => (
              <Link
                key={topic.name}
                href={`/topics/${topic.name.toLowerCase().replace(" ", "-")}`}
                className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <span className="text-4xl">{topic.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                      {topic.name}
                    </h3>
                    <p className="text-gray-600">{topic.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-lg opacity-90 mb-8">
              Get the latest articles, tutorials, and tech insights delivered
              straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Subscribe
                <Mail className="ml-2 inline-block" size={20} />
              </button>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData().slice(0, 6);
  return {
    props: { allPostsData },
  };
}
