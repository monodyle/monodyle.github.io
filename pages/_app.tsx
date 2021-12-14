import type { AppProps } from "next/app"
import { StrictMode } from "react"
import { SettingsProvider } from "~components/blog/post/settings/context"

import "~components/app/global.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <SettingsProvider>
        <Component {...pageProps} />
      </SettingsProvider>
    </StrictMode>
  )
}
