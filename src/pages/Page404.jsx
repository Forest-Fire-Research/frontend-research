import { Box, Typography } from '@mui/material';
import React from 'react';

const Page404 = () => (
  <>
    <Box paddingTop={6} >
      <Typography variant='h1' textAlign='center' color="primary.main">
        Oops!!! 
      </Typography>
      <Typography variant='h4' textAlign='center' color="gray">
        This page does not exist...
      </Typography>
    </Box>
  </>
);

export default Page404;