import '@hackclub/theme/fonts/reg-bold.css'
import theme from '@hackclub/theme'
import { ThemeUIProvider } from 'theme-ui'

export default function App({ Component, pageProps }) {
  return (
    <ThemeUIProvider theme={{
      ...theme,
      colors: { ...theme.colors, modes: {} }
    }}>
      <Component {...pageProps} />
    </ThemeUIProvider>
  )
}
