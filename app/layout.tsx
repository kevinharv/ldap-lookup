import './globals.css'
import type { Metadata } from 'next'

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
        <link rel="icon" href="/favicon_dark.png" sizes="any" />
      </head>
      <body className='max-h-screen'>
        {children}
      </body>
        {/* <footer
        className="sticky bottom-0 bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
          <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
            © 2023 Copyright:
            <a
              className="text-neutral-800 dark:text-neutral-400"
              href="https://tailwind-elements.com/"
            >Tailwind Elements</a>
          </div>
        </footer> */}
    </html>
  )
}
