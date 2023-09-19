import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper, { Navbar } from '@/components/LayoutWrapper'
import SectionContainer from '@/components/SectionContainer'
import { ClientReload } from '@/components/ClientReload'
import { useRouter } from 'next/router';

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const isProjectPage = router.pathname.startsWith('/work/')

  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      {isProjectPage ? (
        <>
          <SectionContainer>
            <Navbar />
          </SectionContainer>
          <Component {...pageProps} />
        </>
      ) : (
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      )}
    </ThemeProvider>
  )
}
