import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Jadoo</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&family=Volkhov:wght@700&display=swap" rel="stylesheet" />
        <meta name="description" content="Jadoo App Travel" />
        <link rel="icon" href="/favicon.ico" />

        <meta
          property="og:url"
          content="https://jadoo-app-travel-landing-page.vercel.app/"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:title"
          content="Jadoo"
        />
        <meta
          property="og:description"
          content="Travel app, life app, aplikasi travel, aplikasi jalan-jalan, pesan guide, dan sebagainya."
        />
        <meta
          property="og:image"
          content="https://jadoo-app-travel-landing-page.vercel.app/aplikasi-travel-online.jpg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}