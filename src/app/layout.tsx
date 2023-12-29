import { Inter } from 'next/font/google'
import './globals.css'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata() {
  const data = await axios.get(`${process.env.SITE_URL}/api/get-metadata-by-page`)
  // console.log('--------------hello----------------')
  return { ...data.data }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
