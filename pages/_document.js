import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import jQuery from 'jquery'


export default function Document() {
  return (
    <Html>
      <Head>
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        {/* CSS ================================================== */}
        <link
          href="./assets/css/owl.carousel.min.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <link
          href="./assets/css/timber.scss.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="./assets/css/theme.scss.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="./assets/css/themepunch.revolution.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="./assets/css/megastore.scss.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="./assets/css/slick.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="./assets/css/rating.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
       
      </Head>
      <body>
        <Main />
        <NextScript />

      </body>
    </Html>
  )
}