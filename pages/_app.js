import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Flag from '../components/Flag'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Flag />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
