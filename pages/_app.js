import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { motion } from "framer-motion";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <AnimatePresence onExitComplete>
        <motion.div
          key={router.route}
          initial="initalState"
          animate="animateState"
          exit="exitState"
          transition={{ duration: 0.75 }}
          variants={{
            initialState: {
              opacity: 0,
            },
            animateState: {
              opactiy: 1,
            },
            exitState: {},
          }}
        >
          <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
            <title>Carmen Chow</title>
          </Head>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
