import React, { useEffect, useState } from 'react';
import axios from "axios";
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import { Box, Tab, Tabs } from '@mui/material';
import PublicationCardView from '../../components/PublicationCardView';
import PublicationTimelineView from '../../components/PublicationTimelineView';
import { TabContext, TabPanel } from '@mui/lab';
import "./Publications.css"
import PublicationListView from '../../components/PublicationListView';

const PUBLICATIOSN_URL = "https://raw.githubusercontent.com/Forest-Fire-Research/website-assets/main/data/publications.json"

const Publications = () => {

  const [publications, setPublications] = useState([])

  useEffect(() => {
    axios.get(PUBLICATIOSN_URL).then((res) => {
      setPublications(res?.data?.papers)
    });
  }, []);

  const [activeType, setActiveType] = useState('grid view')

  return (
    <Box sx={{paddingX:{sm:0,md:2}}}>
      <TabContext value={activeType} >
        <Tabs
          value={activeType}
          onChange={(event, newValue) => {setActiveType(newValue)}}
          centered
          aria-label="scrollable publication filter"
          variant="scrollable"
          allowScrollButtonsMobile
          style={{
            position: 'fixed',
            left: 0,
            right: 0,
            top: 0,
            zIndex: 99,
            color: "white",
            paddingTop: "5rem",
            backgroundImage: "radial-gradient( circle at 50% 50%, #00c71488, #00c714aa, #00c71455, #00c714aa )",
            backgroundSize: "0.4rem 0.4rem",
            backdropFilter: "blur(0.2rem) brightness(10%)",
          }}
        >
          <Tab 
            label="timeline view"
            value="time view" 
            iconPosition='top' 
            icon={<ScatterPlotIcon />}
            style={{
              color: "white",
            }}
           />
          <Tab 
            label="grid view" 
            value="grid view" 
            iconPosition='top' 
            icon={<GridViewIcon />}
            style={{
              color: "white",
            }}
          />
          <Tab 
            label="list view" 
            value="list view" 
            iconPosition='top' 
            icon={<ViewListIcon />}
            style={{
              color: "white",
            }}
          />
        </Tabs>
        <TabPanel value="time view" >
          <PublicationTimelineView publications={publications} />
        </TabPanel>
        <TabPanel value="grid view">
          <PublicationCardView publications={publications}/>
        </TabPanel>
        <TabPanel value="list view">
          <PublicationListView publications={publications}/>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default Publications;