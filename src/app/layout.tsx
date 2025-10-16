import type { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
import { Raleway, Open_Sans, Montserrat } from 'next/font/google'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'
import { cn } from '@/lib/utils'

config.autoAddCss = false

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const open_sans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: 'John Lomat | WordPress & WooCommerce Expert',
  description:
    'Expert WordPress developer specializing in custom websites, WooCommerce, Elementor, Divi, ACF, and SEO. Proven track record with 26 websites delivered.',
  verification: {
    google: 'O9Fqju7f6cW3gK_PGBAX3w5xL0rvMKqtuwFLeQoPIxY',
  },
  openGraph: {
    title: 'John Lomat | WordPress & WooCommerce Expert',
    description:
      'Expert WordPress developer specializing in custom websites, WooCommerce, Elementor, Divi, ACF, and SEO. Proven track record with 26 websites delivered.',
    images:
      'https://res.cloudinary.com/dhaveyc4z/image/upload/v1722674666/portfolio/1722674662539_john-lomat-og-image.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-5M87LX5" />
      <body
        className={cn('page-container', raleway.variable, montserrat.variable, open_sans.variable)}
      >
        {children}
        <Footer />
      </body>
    </html>
  )
}
