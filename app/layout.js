import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

export const metadata = {
  title: 'S.S. Jewellers - The New Standard in Gold Ornaments',
  description: 'Exquisite 18k gold ornaments crafted with four decades of excellence. Premium wholesale jewelry partner for retailers across India.',
  keywords: '18k gold jewellery, wholesale jewellery, gold ornaments, luxury jewellery, Indian jewellery',
  openGraph: {
    title: 'S.S. Jewellers - The New Standard in Gold Ornaments',
    description: 'Exquisite 18k Gold. Uncompromising Value. Crafting excellence since 1985.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
          rel="stylesheet" 
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
