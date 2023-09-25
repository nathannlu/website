import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { useEffect } from 'react'
import axios from 'axios';

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

  useEffect(() => {
    // Check for query parameters on every route change
    const handleRouteChange = (url) => {
      const queryParams = new URLSearchParams(url.split('?')[1]);
      const paramE = queryParams.get('e');
      const paramId = queryParams.get('id');

      if (paramE && paramId) {
        const url = `https://artemis-sys.vercel.app/api/w?e=${paramE}&id=${paramId}`

        axios.get(url).then(res=>console.log('true')).catch(err=> console.log(err))
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);


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
