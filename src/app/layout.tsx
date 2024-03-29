import './globals.css'
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css'
import 'primeicons/primeicons.css'
import 'primereact/resources/primereact.min.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

import { Toaster } from 'sonner'
import NavbarServer from '@/components/organism/Navbar/Navbar-server'

const inter = Inter({ subsets: ['latin'] })
export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang='en' className='dark'>
      <body className={inter.className}>
        <Providers>
          <Toaster richColors position='top-center' />
          <NavbarServer>
            {children}
          </NavbarServer>
        </Providers>
      </body>
    </html>
  )
}
