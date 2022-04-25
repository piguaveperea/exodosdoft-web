import Head from 'next/head'

import About from '../components/About'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Services from '../components/Services'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ExodoSoft</title>
      </Head>
      <Banner />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
