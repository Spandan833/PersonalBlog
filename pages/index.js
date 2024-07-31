import getSortedPostsData from "../lib/posts.js";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import MasonryBlogLayout from "../components/MasonryBlogLayout.js";

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Spandan's Blog</title>
      </Head>
      <main className="max-w-8xl mx-auto px-4 py-2 font-mono">
        <h1 className="text-3xl font-bold mb-8">My Personal Blog</h1>
        <MasonryBlogLayout allPostsData={allPostsData} />
      </main>
      <footer className="bg-gray-100 py-4 mt-12 font-mono">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          © {new Date().getFullYear()} My Personal Blog. All rights reserved.
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
