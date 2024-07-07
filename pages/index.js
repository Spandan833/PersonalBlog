import getSortedPostsData from "../lib/posts.js";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>My Personal Blog</title>
      </Head>
      <main className="max-w-6xl mx-auto px-4 py-8 font-mono">
        <h1 className="text-3xl font-bold mb-8">My Personal Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPostsData.map(({ id, date, title, author, excerpt, image }) => (
            <div
              key={id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <Image
                  src={image || "/images/placeholder.jpg"}
                  alt={title}
                  width={400}
                  height={200}
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-sm text-gray-600 mb-2">{`${author} - ${date}`}</p>
                <p className="text-gray-700 mb-4">{excerpt}</p>
                <Link href={`/posts/${id}`}>
                  <a className="text-blue-600 hover:underline">Read more</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
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
