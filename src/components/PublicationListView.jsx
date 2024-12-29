import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const listColumns = [
    {
      field: 'authors',
      headerName: '1st Author',
      description: 'The corresponding author of the publication is specified here.',
      sortable: true,
      width: 100,
      valueGetter: (value, row) =>  `${value.split('and')[0].split(',')[0] }`,
    },
    { field: 'title', headerName: 'Title', width:500},
    { field: 'publisherShort', headerName: 'Conference', hideable: false, width: 100 },
    { field: 'year', headerName: 'Year', width: 60 },
    { field: 'pages', headerName: 'Pages', width: 80 },
    { 
        field: 'doi', 
        headerName: 'DOI', 
        width: 250,
    },
    { 
        field: 'abstract', 
        headerName: 'Abstract', 
        width: 600,
    }
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
                    rowHeight={50}
                />
            </Box>
        </>
    );

}

export default PublicationListView;