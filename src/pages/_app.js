import "lazysizes"
import "lazysizes/plugins/attrchange/ls.attrchange"
import React from "react"
import Head from "next/head"
import Link from "next/link"
import classcat from "classcat"

import "styles/index.css"
import SEO from "components/seo"
import Nprogress from "components/nprogress"
import ActiveLink from "components/active-link"
import BottomNavigation from "components/bottom-navigation"

import { menus } from "config"

export default function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#24292e" />
        <meta name="apple-mobile-web-app-title" content="The Monody\'s Blog" />
        <meta name="application-name" content="The Monody\'s Blog" />
        <meta name="msapplication-TileColor" content="#1366E9" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <SEO />
      <div className="w-full text-black bg-white">
        <header className="w-full">
          <div className="container pt-16">
            <Link href="/">
              <a className="flex items-center mb-2">
                <img src="/favicon-32x32.png" alt="logo" />
                <strong className="pl-2 font-mono">
                  The Monody&apos;s Blog
                </strong>
              </a>
            </Link>
            <nav className="hidden tablet:block">
              <div className="flex items-center font-mono">
                {menus.map((item, index) => (
                  <div key={index}>
                    <ActiveLink key={item.path} href={item.path}>
                      {(active) => (
                        <span
                          className={classcat([
                            active ? "text-primary" : "text-black",
                          ])}
                        >
                          {item.title}
                        </span>
                      )}
                    </ActiveLink>
                    {index !== menus.length - 1 ? (
                      <span className="px-4">/</span>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </header>

        <main className="pb-16">
          <div className="container">
            <Component {...pageProps} />
          </div>
        </main>

        <BottomNavigation
          menus={menus}
          className="fixed bottom-0 left-0 tablet:hidden"
        />
        <Nprogress />
      </div>
    </React.StrictMode>
  )
}
