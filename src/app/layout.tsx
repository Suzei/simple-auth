"use client"

import '@/app/globals.css'
import { Roboto } from 'next/font/google'
import logo from './assets/logo.svg'
import Image from 'next/image';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const robotoInit = Roboto({ subsets: ['latin'], weight: ['900', '400', '700'], variable: '--roboto' })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const queryClient = new QueryClient()

  return (
    <html lang="en">
      <head>
        <title>Pruu</title>
      </head>
      <body className={`${robotoInit.variable} wrapper`}>
        <Image src={logo} alt="Logo do administrador" width={215} />
        <QueryClientProvider client={queryClient}>

          {children}
        </QueryClientProvider>
        <sub>© Copyright 2022 a 2024 - Todos os direitos reservados.</sub>
      </body>
    </html >
  );
}
