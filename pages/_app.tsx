import type { AppProps } from 'next/app'
import Head from 'next/head'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>OKgo - AI-Powered Supply Chain Visibility Across Africa</title>
        <meta name="description" content="Track, predict, and protect your shipments and assets in real time with OKgo's AI-powered supply chain visibility solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
} 