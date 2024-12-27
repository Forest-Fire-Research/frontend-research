import React from 'react';
import { Box, Typography } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import "./Home.css"

const Home = () => (
  <>
      <Box id="welcome" m={3}>
        <FormatQuoteIcon fontSize="large" color='primary' />
        <Typography id="welcome-text" variant='h5' p={3} color="white">
          Our group, WIfire REsearch - Analytics Initiative (WIRE-AI), has been working on an NSERC Alliance Mission project since 2022. Our goal is to assist forest fire researchers and practitioners with machine learning/deep learning (ML/DL) models, tools, frameworks, and advanced datasets. These resources enable the application of data-driven techniques to model forest fire growth, predict forest fire risk, and estimate burnt areas. Our research objectives also include the use of IoT-based sensors, drones, crowd-sourced data, and state-of-the-art  communication technologies for remote forest monitoring, forest fire suppression planning, and ensuring public safety.
        </Typography>
      </Box>

  </>
);

export default Home;