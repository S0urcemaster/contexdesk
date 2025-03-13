import { Inconsolata } from 'next/font/google'
 
const font = Inconsolata({
  subsets: ['latin'],
})

export default function RootLayout({
	children,
  }: {
	children: React.ReactNode
  }) {
	return (
	  <html lang="en" className={font.className}>
		<body>{children}</body>
	  </html>
	)
  }