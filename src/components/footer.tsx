import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Stack, Typography } from '@mui/material';
import { Copyright, Healing } from '@mui/icons-material';

const FooterContainer = styled('footer')({
  backgroundColor: "#003366",
  paddingTop: '16px',
  left: 0,
  bottom: 0,
  height: 100,
  width: '100%',
});

const Footer = () => {
  return (
    <FooterContainer>
      <Stack sx={{margin: "auto",  textAlign: 'center',}}>
          <Typography 
            color= "white"
            variant="h6"
            noWrap
            fontWeight= 'bold'
            component="a"
            href="/"
            sx={{
              mr: 2,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              textTransform: 'uppercase',
              padding: 2,
            }}
          >
            <Healing sx={{mr: 1,}}/>
            Pharmezy
          </Typography>
      </Stack>
      <Container>
        <Stack direction="row" 
        >
        <Copyright sx={{
            mr: 0.5,
            fontSize: "0.7rem", 
            fontWeight: "regular", 
            color: "#FFFFFF"}} /> 
        <Typography 
           sx={{
            fontSize: "0.6rem",
            textDecoration: 'none',
            textTransform: 'capitalize',
            fontWeight: "regular", 
            color: "#FFFFFF"
          }}
        >
            Copyright 2023 Pharmezy. 
        </Typography>
        </Stack>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
