// pages/posts/[id].js

import Link from "next/link";
import Head from "next/head";
// Removed Script import as it wasn't used
import Layout from "../../components/Layout.js";
import { getAllPostIds, getPostData } from "../../lib/posts.js";

import utilStyles from "../../styles/Utils.module.css";

export default function Post({ postData }) {
  return (
    <Layout>
      
        <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="max-w-2xl mx-auto prose prose-lg">
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          {/* Tailwind classes might be better here too unless utilStyles is essential */}
          <div className="text-sm text-gray-600 mb-4"> {/* Increased mb slightly */}
            {postData.date}
          </div>
        </div>
        {/* This div now inherits the prose styling */}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

// --- getStaticPaths and getStaticProps remain the same ---

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}