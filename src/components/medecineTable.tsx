
import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'producttype', headerName: 'Type', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'brand', headerName: 'Brand', width: 130 },
  { field: 'price', headerName: 'Price', width: 130 },
  { field: 'upc', headerName: 'UPC', width: 130 },
  { field: 'availability', headerName: 'Availability', width: 130 },
  { field: 'details', headerName: 'Details', width: 400 },
];

const rows = [
  { id: 1, producttype: 'Snow', name: 'Jon' ,brand: "paracetamol", price: 35, upc: 125560, availability: "yes" },
  { id: 2, producttype: 'Lannister', name: 'Cersei' ,brand: "paracetamol", price: 42, upc: 125560, availability: "yes" },
  { id: 3, producttype: 'Lannister', name: 'Jaime' ,brand: "paracetamol", price: 45, upc: 125560, availability: "yes" },
  { id: 4, producttype: 'Stark', name: 'Arya' ,brand: "paracetamol", price: 16, upc: 125560, availability: "yes" },
  { id: 5, producttype: 'Targaryen', name: 'Daenerys' ,brand: "paracetamol", price: null, upc: 125560, availability: "yes" },
  { id: 6, producttype: 'Melisandre', name: null ,brand: "paracetamol", price: 150, upc: 125560, availability: "yes" },
  { id: 7, producttype: 'Clifford', name: 'Ferrara' ,brand: "paracetamol", price: 44, upc: 125560, availability: "yes" },
  { id: 8, producttype: 'Frances', name: 'Rossini' ,brand: "paracetamol", price: 36, upc: 125560, availability: "yes" },
  { id: 9, producttype: 'Roxie', name: 'Harvey' ,brand: "paracetamol", price: 65, upc: 125560, availability: "yes" },
];

function MedecineTable() {
  const theme = useTheme();

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.main,
            fontWeight: "bold",
          },
          '& .MuiDataGrid-cell': {
            cursor: "pointer",
          }
        }}
      />
    </div>
  );
}

export default MedecineTable;
