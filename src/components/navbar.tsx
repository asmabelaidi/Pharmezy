"use client"

import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Healing, Login } from '@mui/icons-material';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  return (
    <AppBar position="fixed" color ="inherit" sx={{borderBottom: "2px solid #F6F8FB"}}>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Healing  color= "primary" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography 
          color= "primary"
          variant="h6"
          noWrap
          fontWeight= 'fontWeightBold'
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            letterSpacing: '.3rem',
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}
        >
          Pharmezy
        </Typography>

        <Box sx={{display: { xs: 'none', md: 'flex' }, margin: 'auto' }}>
          {pages.map((page) => (
            <Button
              key={page}
              sx={{ ml:4 , my: 2, color: 'white', display: 'block' }}
            >
              <Typography fontWeight= 'fontWeightBold' color= "primary" textTransform="capitalize">{page}</Typography>
            </Button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0 }}>

           <Button color="inherit" sx={{borderLeft:" 2px solid gray", borderRadius: "0px" }}>
             <Login fontWeight= 'fontWeightBold' color= "primary" />
           </Button>
         
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default Navbar