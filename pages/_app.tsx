import type { AppProps } from "next/app"
import { StrictMode } from "react"
import "~components/app/global.css"
import { SettingsProvider } from "~components/blog/post/settings/context"
import SEO from "~components/seo/seo"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <SettingsProvider>
        <SEO />
        <Component {...pageProps} />
      </SettingsProvider>
    </StrictMode>
  )
}
