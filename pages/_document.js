import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    // <Html lang="en">
    <Html className="dark">
      <Head />
      <body className="dark:bg-gray-900 dark:text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
