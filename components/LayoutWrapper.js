import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';


const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
              <div className="flex items-center justify-between">
                <Link href="/" aria-label={siteMetadata.headerTitle}>
                  <div className="font-bold text-xl mr-3">
                    Nathan Lu
                  </div>
                </Link>
                <Link href="https://github.com/nathannlu" aria-label={siteMetadata.headerTitle}>
                  <div className="font-bold text-xl mr-3">
                    <AiFillGithub />
                  </div>
                </Link>
                <Link href="https://www.linkedin.com/in/nathanlu/" aria-label={siteMetadata.headerTitle}>
                  <div className="font-bold text-xl mr-3">
                    <AiFillLinkedin />
                  </div>
                </Link>

              </div>


          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            {/*
            <ThemeSwitch />
            */}
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
