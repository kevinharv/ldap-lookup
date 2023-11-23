import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'LDAP Lookup',
  description: 'Lookup LDAP information.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon_dark.png" media="(prefers-color-scheme: dark)" sizes="any" />
        <link rel="icon" href="/favicon_light.png" media="(prefers-color-scheme: light)" sizes="any" />
      </head>
      <body className="max-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
