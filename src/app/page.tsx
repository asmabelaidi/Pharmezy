"use client"
import React, { useState } from "react";
import { Box, Button, Container, Stack, styled, Typography } from "@mui/material";
import { Edit, FilterList } from "@mui/icons-material";

  // -------- Styled Components -------- 
  
  const Title = styled(Typography)({
    fontWeight: "bold"
  });

export default function Home() {
    // ------------ States ----------------
   const [prodNumber, setProdNumber] = useState(20000)
  return (
       <Container>
         <Stack direction="row" gap={2} sx={{mt:"7rem"}}>
            <Title variant="h5" color="primary">
                Products <Edit />
            </Title>
            <Typography variant="subtitle2" color="primary.dark"
               sx={{padding: "0.5rem"}}
            >
              {prodNumber} {prodNumber > 1 ?  "Products":  "Product" }  
            </Typography>
         </Stack>
         <Stack direction="row" mt={2}>
          <Button variant="outlined" sx={{fontWeight: "bold"}} startIcon={<FilterList />}>Filter</Button>
         </Stack>
       </Container>
  
  );
}
