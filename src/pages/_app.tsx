import "lazysizes";
import "lazysizes/plugins/attrchange/ls.attrchange";
import type { AppProps } from "next/app";
import { StrictMode } from "react";
import "styles/index.css";

import SEO from "components/seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <SEO />
      <Component {...pageProps} />
    </StrictMode>
  );
}
