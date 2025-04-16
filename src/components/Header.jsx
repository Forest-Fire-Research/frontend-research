import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

import { motion, useScroll } from "framer-motion"
import { useNavigate } from 'react-router-dom';
import LogoComponent from './LogoComponent';
import { Divider, Drawer, List, ListItem } from '@mui/material';

const Header = () => {
  const { scrollYProgress } = useScroll();

  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navigationStates = {
    "Publications" : "/publications",
    "Work in Review": "/work-in-review",
    // "Work in Progress": "/work-in-progress",
    "About": "/about",
  }

  return (
    <div 
      style={{
        padding: 50,
      }}
    >
      <AppBar 
        position="fixed" 
        component="nav"
        sx={{
          px: 3,
          py: 1,
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            border: 'solid',
            bgcolor: '#2e7d32dd',
            borderColor: "#1b5e2099",
            backdropFilter: 'blur(5px)',
            boxShadow: 10,
            overflow: 'hidden' ,
          }}
        >
          <motion.div 
            style={{ 
              scaleX: scrollYProgress, 
              position:'fixed',
              bottom: 0,
              right: 0,
              left:0,
              height: "100%",
              backgroundImage: "radial-gradient( circle at 50% 50%, #1b5e20ff, #1b5e20ee, #1b5e20aa, #1b5e20dd )",
              backgroundSize: "0.5rem 0.5rem",
              overflow: 'hidden',
              transformOrigin: "0%",
            }} 
          /> 
          <LogoComponent width={50} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {
              Object.keys(navigationStates)?.map(action => 
                <Button 
                  color="inherit"
                  onClick={() => navigate(navigationStates[action])}
                >
                    {action}
                </Button>
            )}
          </Box>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <Drawer 
              anchor='right'
              open={mobileOpen} 
              onClose={handleDrawerToggle}
              style={{
              }}
            >
              <Box 
                sx={{ 
                  width: 250,
                  height: '100%',
                  backgroundImage: "radial-gradient( circle at 50% 50%, #1b5e2055, #1b5e20aa, #1b5e2055, #1b5e20aa )",
                  backgroundSize: "0.5rem 0.5rem",
                  backdropFilter: "blur(0.2rem) brightness(20%)",
                }} 
                role="presentation" 
                onClick={handleDrawerToggle}
              >
                <List>
                  {
                    Object.keys(navigationStates)?.map(action => 
                      <>
                        <ListItem>
                          <Button 
                            color="inherit"
                            onClick={() => navigate(navigationStates[action])}
                            style={{
                              color:"white",
                            }}
                            >
                              {action}
                          </Button>
                        </ListItem>
                        <Divider sx={{ bgcolor: "primary.dark" }}/>
                      </>
                  )}
                </List>
              </Box>
            </Drawer>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              ml: 'auto', 
              display: { sm: 'none' } 
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar> 
    </div>
  )
};

export default Header;