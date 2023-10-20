import QueryProvider from '@/src/utils/QueryProvider';
import './globals.css'
import type { Metadata } from 'next'
import Provider from './_trpc/Provider';
import Navbar from '@/src/components/Navbar';
import { ThemeProvider } from '@/src/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Open_Sans, Roboto_Mono, DM_Serif_Text, Noto_Sans, Nanum_Gothic } from 'next/font/google'
import N_vertical from '@/src/components/N_vertical';

const openSans = Open_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-opensans',
})

const Nanum = Nanum_Gothic({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-nanum',
	weight: '400',
})

const noto = Noto_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-noto-sans',
	weight: '200',
})

const robotoMono = Roboto_Mono({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto-mono',
})

const dm_serif = DM_Serif_Text({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-dm-serif',
	weight: '400',
})

export const metadata: Metadata = {
	title: 'name',
	description: 'what we do..',
	keywords: ['A', 'B'],
	openGraph: {
		title: 'name',
		description: 'some descripiton',
		url: 'URL',
		siteName: 'search keyword',
		images: [
			{
				url: 'logo path should be absolute',
				width: 800,
				height: 600,
				alt: 'logo'
			},
			{
				url: 'logo path should be absolute',
				width: 1800,
				height: 1600,
				alt: 'logo',
			},
		],
		type: 'website',
	},

};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`${openSans.variable} ${robotoMono.variable} ${dm_serif.variable} ${noto.variable} ${Nanum.variable}`}>
			<body >
				<Provider>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<div className="flex flex-row">
							<N_vertical />
							<div className='mx-auto w-full px-2 '>
								{children}
							</div>
							<Toaster />
						</div>
					</ThemeProvider>
				</Provider>
			</body>
		</html >
	)
}
