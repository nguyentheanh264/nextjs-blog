import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link'
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    },
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>ND Quyết</title>
      </Head>
        <section className={utilStyles.headingMd}>
          <p>[Hello, I'm <b>Quyet</b>. I'm a god develop backend JAVA and a translator (English/VietNamese). You can contact me on <a href='https://www.facebook.com/groups/12giodem/'>Facebook</a>]</p>
          <p>Besides code Java, I can code React, there's nothing I can't do!</p>
          <Image 
            src='/images/Programming-Languages.jpg'
            width={400}
            height={250}
          />
          <h2 className={utilStyles.headingLg}>
            Blog
          </h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({id, date, title}) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
    </Layout>
  )
}
