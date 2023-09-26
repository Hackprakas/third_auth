import './globals.css'
import { Inter } from 'next/font/google'
import providers from './components/provider'
import Providers from './components/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Third Auth',
  description: 'The Next Gen Authencation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        {children}
        </Providers>
        
        </body>
    </html>
  )
}
