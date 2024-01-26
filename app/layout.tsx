import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './components/header'

import { ReactNode } from 'react'
import { ContactForm } from '@/app/components/contact-form'
import { Footer } from '@/app/components/footer'
import { BackToTop } from '@/app/components/back-to-top'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Header />
        {children}
        <ContactForm />
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
