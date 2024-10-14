import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './styles/globals.scss'

const soraBold = localFont({
  src: './styles/fonts/Sora-Bold.ttf',
  variable: '--font-sora-bold',
  weight: '700'
})
const soraReg = localFont({
  src: './styles/fonts/Sora-Regular.ttf',
  variable: '--font-sora-reg',
  weight: '400'
})

export const metadata: Metadata = {
  title: "Mandy Find's A Job",
  description:
    'A React app built to log job applications and statuses of those applications'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${soraReg.variable} ${soraBold.variable}`}>
        {children}
      </body>
    </html>
  )
}
