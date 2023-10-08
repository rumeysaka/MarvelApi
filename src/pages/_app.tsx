import "bootstrap/dist/css/bootstrap.min.css"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { wrapper } from "../redux/store"
import { useEffect } from "react";

function App({ Component, pageProps }: AppProps) {

useEffect(() => {
  require("bootstrap/dist/js/bootstrap.bundle.min.js");
}, []);

  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)
