import { Inconsolata } from 'next/font/google'
import { Doto } from 'next/font/google'
import { Gemunu_Libre as FontDefault } from 'next/font/google'

const font = Inconsolata({
	subsets: ['latin'],
})
const font2 = Doto({
	subsets: ['latin'],
})
const font3 = FontDefault({
	subsets: ['latin'],
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={font3.className}>
			<body>{children}</body>
		</html>
	)
}