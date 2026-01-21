import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Skyreti | Global Digital Solutions Agency',
  description: 'Comprehensive digital solutions for schools, universities, HR departments, startups, and influencers. Website development, app creation, social media management, and digital transformation.',
  keywords: 'digital agency, web development, social media management, startups, universities, schools, HR, influencers',
  openGraph: {
    title: 'Skyreti | Global Digital Solutions Agency',
    description: 'Transform your digital presence with Skyreti',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Viewport for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen`}>
        {children}
      </body>
    </html>
  )
}