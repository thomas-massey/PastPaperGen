import { Html, Head, Main, NextScript } from 'next/document'

// add title and favicon

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>PastPaperGen</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
