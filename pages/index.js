import getSortedPostsData from "../lib/posts.js";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Rss } from "lucide-react";
import Layout from "../components/Layout";
import ArtilcleCard from "../components/ArticleCard";

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Spandan's Blog - RF Engineer & Web Developer</title>
        <meta
          name="description"
          content="Personal blog of Spandan, an RF engineer and web developer sharing insights on RF engineering, web development, and more."
        />
      </Head>
      <main className="max-w-6xl mx-auto px-4 py-12 font-mono">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to My Tech Universe
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Exploring the realms of RF Engineering and Web Development
          </p>
          <Link href="/about">
            <a className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
              Learn More About Me
              <ArrowRight className="ml-2" size={20} />
            </a>
          </Link>
        </section>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPostsData.slice(0, 3).map((post) => (
              <ArtilcleCard key={post.id} post={post} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/articles">
              <a className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition duration-300">
                View All Articles
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Link>
          </div>
        </section>

        {/* Topics Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Explore Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "RF Engineering",
              "Web Development",
              "Network Analysis",
              "JavaScript",
              "Python",
              "Antennas",
            ].map((topic) => (
              <Link
                href={`/topics/${topic.toLowerCase().replace(" ", "-")}`}
                key={topic}
              >
                <a className="bg-gray-100 rounded-lg p-4 text-center hover:bg-gray-200 transition duration-300">
                  {topic}
                </a>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-blue-100 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-6">
            Subscribe to my newsletter for the latest articles and insights
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
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
