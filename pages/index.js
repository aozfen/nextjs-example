import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import Comments from '../components/Comments'
import BasicTheme from '../themes/basic'

import styles from '../styles/Home.module.css'

function Home({stars}) {
  const [isShow, setIsShow] = useState(false)
  const [theme, setTheme] = useState("BASIC")

  return (
    <div className={styles.container}>
      <Head>
        <title>E-Commorce</title>
        <meta name="author" content="Wemosoft" />
        <meta name="description" content="Coming Soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Next.js! {stars}
        </h1>
        <button onClick={() => setIsShow(!isShow)}>Göster/Gizle</button>
        {
          isShow &&<Comments />
        }
        
        {theme === "BASIC" ? <BasicTheme /> : null}
        

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="images/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}


Home.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count + Math.floor(Math.random() * 100) + 1 }
}

export default Home
