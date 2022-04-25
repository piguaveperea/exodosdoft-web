import Head from 'next/head'
import Script from 'next/script'
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
        <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-1J2BSE1K4Q`} />
        <Script strategy="lazyOnload" >
          {
            `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1J2BSE1K4Q');
          `
          }
        </Script>
      </Head>
      <Banner />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
