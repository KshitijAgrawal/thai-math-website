import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MathThai - เรียนคณิตศาสตร์ออนไลน์ภาษาไทย',
  description: 'เว็บไซต์เรียนคณิตศาสตร์ออนไลน์ที่ครบครัน สำหรับนักเรียนไทยทุกระดับชั้น ด้วยวิดีโอบทเรียน แบบฝึกหัด และเครื่องมือช่วยเรียนรู้ที่ทันสมัย',
  keywords: 'คณิตศาสตร์, เรียนออนไลน์, ไทย, mathematics, online learning, thai education',
  authors: [{ name: 'MathThai Team' }],
  creator: 'MathThai',
  publisher: 'MathThai',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://thai-math-website.azurewebsites.net'),
  openGraph: {
    title: 'MathThai - เรียนคณิตศาสตร์ออนไลน์ภาษาไทย',
    description: 'เว็บไซต์เรียนคณิตศาสตร์ออนไลน์ที่ครบครัน สำหรับนักเรียนไทยทุกระดับชั้น',
    url: 'https://thai-math-website.azurewebsites.net',
    siteName: 'MathThai',
    locale: 'th_TH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MathThai - เรียนคณิตศาสตร์ออนไลน์ภาษาไทย',
    description: 'เว็บไซต์เรียนคณิตศาสตร์ออนไลน์ที่ครบครัน สำหรับนักเรียนไทยทุกระดับชั้น',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className={inter.className}>{children}</body>
    </html>
  )
}