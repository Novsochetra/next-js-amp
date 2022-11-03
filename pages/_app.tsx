import "../styles/globals.css";
import type { AppProps } from "next/app";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "amp-lightbox": any;
    }
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
