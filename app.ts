import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vedant Ahir | AI Developer & Full Stack Engineer',
  description: 'Building intelligent systems, scalable backend solutions, and modern digital experiences. AI & Data Science student passionate about machine learning, backend development, and innovative solutions.',
  keywords: [
    'Vedant Ahir',
    'AI Developer',
    'Full Stack Developer',
    'Backend Developer',
    'Data Science',
    'Machine Learning',
    'Android Development',
    'Mumbai Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Vedant Ahir' }],
  creator: 'Vedant Ahir',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '[vedantahir.dev](https://vedantahir.dev)',
    siteName: 'Vedant Ahir Portfolio',
    title: 'Vedant Ahir | AI Developer & Full Stack Engineer',
    description: 'Building intelligent systems, scalable backend solutions, and modern digital experiences.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vedant Ahir - Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vedant Ahir | AI Developer & Full Stack Engineer',
    description: 'Building intelligent systems, scalable backend solutions, and modern digital experiences.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-primary-white dark:bg-primary-black text-primary-black dark:text-primary-white antialiased">
        {children}
      </body>
    </html>
  )
}
