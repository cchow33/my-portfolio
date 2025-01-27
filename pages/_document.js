import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="dark">
      <Head />
      <link rel="shortcut icon" href="/favicon/icon.png" />
      <body className="font-family: display">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
