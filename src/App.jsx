import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Page404 from './pages/Page404';
import Publications from './pages/Publications/Publications';
import { Box, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Footer from './components/Footer';
import "./App.css"

const theme = createTheme({
  palette: {
    primary: {
      main: "#00c714",
      light: "#00c71455",
      dark: "#00c714aa",
      contrastText: "#fff",
    },
    secondary: {
      main: "#7cea00",
      light: "#7cea0055",
      dark: "#7cea00aa",
      contrastText: "#fff",
    }
  }
})

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Box sx={{paddingX: {
          sm:"0.5rem",
          md:"4rem"
        }}}>
          <Routes>
            <Route path="*" element={<Page404 />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About /> } />
            <Route exact path="/Publications" element={<Publications />} />
          </Routes>
        </Box>
      </BrowserRouter>
      <Footer/>

      {/* <Forest1 />
      <Forest3 /> */}
    </ThemeProvider>
    </>
  );
}

export default App;