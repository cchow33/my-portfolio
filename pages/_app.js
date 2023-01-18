import '@/styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { ThemeProvider } from 'next-themes'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider enableSystem={true}attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}


