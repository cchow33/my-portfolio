import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import { motion as m } from "framer-motion";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Carmen Chow</title>
      </Head>
      <AnimatePresence>
        <m.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.75,
          }}
        >
          <Component key={router.pathname} {...pageProps} />
        </m.div>
      </AnimatePresence>
    </>
  );
}
