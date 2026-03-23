import '@hackclub/theme/fonts/reg-bold.css'
import theme from '@hackclub/theme'
import { ThemeProvider } from 'theme-ui'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={{
      ...theme,
      colors: { ...theme.colors, modes: {} }
    }}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
