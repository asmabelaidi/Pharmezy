"use client"
import { ThemeProvider, createTheme } from '@mui/material'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

const theme = createTheme({
  palette: {
    primary: {
      main: "#003366",
      light: "#CBD6E2",
      dark: "#708FAF",
    }
  }, 
  typography:{
     fontFamily: 'Quicksand',
     fontWeightLight: 300,
     fontWeightRegular: 400,
     fontWeightMedium: 500, 
     fontWeightBold: 700, 
  }
 })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <ThemeProvider theme={theme}>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
        
      </ThemeProvider>
      
       
    </html>
  )
}
