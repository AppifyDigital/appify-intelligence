import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata = {
  title: 'AI Development & Automation Specialists | Appify Intelligence Ireland',
  description: 'Appify Intelligence delivers award-nominated AI, web, and mobile development. Experts in AI automation, workflow, and custom agency solutions.',
  keywords: 'AI development, AI automation, AI workflow, app development Ireland, AI web solutions, mobile app AI, agency management tool, AppifyWebX, AppifyX',
  openGraph: {
    title: 'AI Development & Automation Specialists | Appify Intelligence',
    description: 'Discover Appify Intelligence\'s award-nominated AI expertise—custom solutions for web, mobile, automation, and agency management across Ireland.',
    type: 'website',
    url: 'https://www.appifyintelligence.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Development & Automation Specialists | Appify Intelligence',
    description: 'AI-powered software, web, and mobile solutions. Explore our award-nominated expertise and innovative in-house AI products.',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
