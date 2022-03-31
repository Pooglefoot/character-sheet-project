import '../styles/globals.css'
import type { AppProps } from 'next/app'
import CharacterProvider from '../hooks/CharacterContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CharacterProvider>
      <Component {...pageProps} />
    </CharacterProvider>
  )
}

export default MyApp
