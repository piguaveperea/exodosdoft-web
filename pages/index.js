import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ExodoSoft</title>
        <meta></meta>
      </Head>
      <Banner/>
      <Contact/>
    </div>
  )
}
