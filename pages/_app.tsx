import '../styles/globals.css';
import 'antd/dist/antd.min.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react"

import AppContext from '../lib/AppContext';
import * as config from '../config.json'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return <AppContext.Provider value={config}>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  </AppContext.Provider>
}

export default MyApp
