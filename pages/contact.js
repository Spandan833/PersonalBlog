import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact - My Personal Blog</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-8 font-mono">
        <h1 className="text-3xl font-bold mb-8">Contact Me</h1>
        <p className="mb-4">
          Feel free to reach out to me for any questions, collaborations, or
          just to say hello!
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Find me on</h3>
            <ul className="list-disc list-inside mb-4">
              <li>
                <a
                  href="https://github.com/your-github-username"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com/your-leetcode-username"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LeetCode
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/your-twitter-username"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
            <p>You can also send me an email at your_email@example.com</p>
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
