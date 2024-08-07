import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About - My Personal Blog</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-8 font-mono">
        <h1 className="text-3xl font-bold mb-8">About Me</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-1">
            <p className="mb-4">
              Hello! I'm Spandan, an RF Test engineer with a passion for
              building websites. Welcome to my corner of the internet where I
              share my thoughts, experiences, and knowledge about RF engineering
              and web development.
            </p>
            <p className="mb-4">
              I have worked in development of RF measurement software solutions
              using Spectrum Analyzers
            </p>
            <p className="mb-4">
              This blog is a platform for me to share insights from both these
              worlds. You'll find articles about RF engineering concepts,
              testing methodologies, as well as web development tutorials and my
              experiences with different programming languages and frameworks.
            </p>
            <h3 className="text-xl font-bold mb-2">My Interests</h3>
            <ul className="list-disc list-inside mb-4">
              <li>RF Measurements</li>
              <li>Antenna Theory</li>
              <li>Web Development</li>
              <li>Technical Writing</li>
              <li>AI</li>
            </ul>
            <p>
              Feel free to explore my blog posts and don't hesitate to reach out
              if you have any questions or just want to connect!
            </p>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 py-4 mt-12 font-mono">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-600">
          © {new Date().getFullYear()} Spandan's Blog. All rights reserved.
        </div>
      </footer>
    </Layout>
  );
}
