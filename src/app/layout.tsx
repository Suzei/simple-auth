import '@/app/globals.css'
import { Roboto } from 'next/font/google'

const robotoInit = Roboto({ subsets: ['latin'], weight: ['900', '400', '700'], variable: '--roboto' })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={`${robotoInit.variable}`}>
        {children}
      </body>
    </html >
  );
}
