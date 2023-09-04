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
      <body className='max-h-screen'>
        {children}
        <div>
          <h1 className='underline'>Foot</h1>
        </div>
      </body>
    </html>
  )
}
