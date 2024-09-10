import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import getSortedPostsData from "../lib/posts.js";
import Link from "next/link";

export default function Articles({ allPostsData }) {
  // Assuming articles prop is passed

  return (
    <Layout>
      <Head>
        <title>Articles - My Personal Blog</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-8 font-mono">
        <h1 className="text-3xl font-bold mb-8">All Articles</h1>
        <ul className="article-list">
          {allPostsData.map((article) => (
            <li key={article.id || article.title} className="article-item">
              <a href={`/posts/${article.id}`} rel="noopener noreferrer">
                <h3>{article.title}</h3>
              </a>
              {/* Display title if no URL */}
              <p className="article-excerpt">{article.excerpt}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer className="bg-gray-100 py-4 mt-12 font-mono">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-600">
          © {new Date().getFullYear()} Spandan's Blog. All rights reserved.
        </div>
      </footer>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData },
  };
}
