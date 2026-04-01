import '@hackclub/theme/fonts/reg-bold.css'
import theme from '@hackclub/theme'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { ThemeUIProvider } from 'theme-ui'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeUIProvider theme={{
        ...theme,
        colors: { ...theme.colors, modes: {} }
      }}>
        <Component {...pageProps} />
      </ThemeUIProvider>
      <SpeedInsights />
      <Analytics />
    </>
  )
}
