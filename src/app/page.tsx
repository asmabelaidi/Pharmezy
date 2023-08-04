"use client"
import React, { useState } from "react";
import { Autocomplete, Box, Button, Container, Stack, styled, TextField, Typography } from "@mui/material";
import { Edit, FilterList, HealthAndSafety, Search } from "@mui/icons-material";
import MedecineTable from "@/components/medecineTable";
import Footer from "@/components/footer";

  // -------- Styled Components -------- 
  
  const Title = styled(Typography)({
    fontWeight: "bold"
  });

export default function Home() {
    // ------------ States ----------------
   const [prodNumber, setProdNumber] = useState(20000)
   const [products, setProducts] = useState([{name:"", price:0, reference: "", exipreDate: Date()}])
  return (
  <>
       <Container>
         <Stack direction="row" gap={2} sx={{mt:"7rem"}}>
            <Title variant="h5" color="primary">
                Products <HealthAndSafety />
            </Title>
            <Typography variant="subtitle2" color="primary.light"
               sx={{padding: "0.5rem"}}
            >
              {prodNumber} {prodNumber > 1 ?  "Products":  "Product" }  
            </Typography>
         </Stack>
         <Stack direction="row" mt={2} gap={4}>
         <Button variant="outlined" sx={{fontWeight: "bold",width: "10%",}} startIcon={<FilterList />}>Filter</Button>
          
           <Autocomplete
              sx={{width: "30%",}}
              freeSolo 
              id="search-product"
              options={products.map((product) => product.name)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search Product"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
            />
         </Stack>
         <Stack mt={5}>
            <MedecineTable />
         </Stack>
  

       </Container>

       <Footer />

  </>
  );
}
