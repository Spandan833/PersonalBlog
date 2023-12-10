import Head from 'next/head'
import Link from 'next/link'
import Layout, {siteTitle} from '../components/Layout'
import utilStyles from '../styles/Utils.module.css'
import getSortedPostsData from '../lib/posts.js'

export default function Home({allPostsData}) {
  return (
    <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Hello, I am a RF Test engineer who ocassionally builds websites </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  return {
    props : {allPostsData,}
  }
}