"use client"

import Navbar from "@/components/navbar";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
export default function Home() {
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
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
}
