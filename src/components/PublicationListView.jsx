import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const listColumns: GridColDef[] = [
    {
      field: 'authors',
      headerName: '1st Author',
      description: 'The corresponding author of the publication is specified here.',
      sortable: true,
      width: 100,
      valueGetter: (value, row) =>  `${value.split('and')[0].split(',')[0] }`,
    },
    { field: 'title', headerName: 'Title', width:500},
    { field: 'publisherShort', headerName: 'Conference/Journal', width: 100 },
    { field: 'year', headerName: 'Year', width: 60 },
    { field: 'pages', headerName: 'Pages', width: 80 },
    { 
        field: 'doi', 
        headerName: 'DOI', 
        width: 250,
    },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    // },
  ];


const paginationModel = { page: 0, pageSize: 5 };

const PublicationListView = (props) => {
    return (
        <>
            <Box
                mt={6}
                sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                }}
            >
                <DataGrid
                    rows={props?.publications}
                    columns={listColumns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10, 15]}
                    //   checkboxSelection
                    sx={{ border: 0 }}
                />
            </Box>
        </>
    );

}

export default PublicationListView;