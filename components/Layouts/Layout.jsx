import CookieConsent from './CookieConsent'
import Footer from './Footer'
import NavBar from './Navbar'
import React from 'react'
import Head from 'next/head'

export default function Layout({ title, children, router }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark" />
        <meta name="application-name" content="GPUFinder.ovh" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="GPUFinder.ovh" />
        <meta name="description" content="Tracker for PC parts and consoles" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="og:title" content="GPUFinder" />
        <link rel="shortcut icon" href="/images/logos/StockFinderLogo.svg" />
        <title>{title}</title>
      </Head>
      
      <NavBar path={router.asPath} />
      {children}
      <CookieConsent />
      <Footer />
    </>
  )
}
