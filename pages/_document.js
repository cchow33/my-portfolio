import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="dark">
      <Head />
      <link rel="shortcut icon" href="/favicon/icon.png" />
      <body className="dark:bg-gray-900 dark:text-gray-100 font-family: display">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
