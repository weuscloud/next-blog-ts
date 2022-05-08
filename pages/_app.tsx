
import "antd/dist/antd.min.css";
import "../styles/nprogress.css";

import "../styles/globals.css";

import type { AppProps } from "next/app";
import Router from "next/router";
import nProgress from "nprogress";
import { SessionProvider, useSession,signIn } from "next-auth/react";

import AppContext from "../lib/AppContext";
import * as config from "../config.json";

import Loading from "../components/loading";
import { useState } from "react";
import useTimeout from "../hooks/useTimeout";
import type { NextComponentType } from "next"; //Import Component type

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

//Add custom auth type with using union in type
type CustomAppProps = AppProps & {
  Component: NextComponentType & {
    auth?: boolean,
  };
};

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: CustomAppProps) {
  return (
    <AppContext.Provider value={config}>
      <SessionProvider session={session}>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </SessionProvider>
    </AppContext.Provider>
  );
}

function Auth({ children }: any) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
     signIn("github")
    },
  })
  
  const [Load, setLoading] = useState(true);
  const cLoad = () => setLoading(false);
  useTimeout(cLoad, 300);
  return Load || status === "loading" ? (
    <Loading text="Authenticating." />
  ) : (
    children
  );
}
export default MyApp;
