import type { AppProps } from 'next/app'
import 'mapbox-gl/dist/mapbox-gl.css';
import ContextProvider from 'app-context';

function MyApp({ Component, pageProps }: AppProps) {
  return <ContextProvider><Component {...pageProps} /></ContextProvider>
}

export default MyApp
