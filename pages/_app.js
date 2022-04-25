import '../styles/globals.css'
import Script from 'next/script'
function MyApp({ Component, pageProps }) {
  return (
    <>
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
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
