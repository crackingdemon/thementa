import '../styles/globals.css'
// import "../sass/main.scss";
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>thementa</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:title" content="The Menta" key="ogtitle" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
