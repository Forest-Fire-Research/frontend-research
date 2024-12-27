import { useState, useEffect } from 'react';
import axios from "axios";
import Grid from '@mui/material/Unstable_Grid2';
import CardTeam from '../../components/CardTeam';
import { Box, Paper, Tab, Tabs } from '@mui/material';
import "./About.css"

const TEAM_URL = "https://raw.githubusercontent.com/Forest-Fire-Research/website-assets/main/data/team.json"

const About = () => {
  const [team, setTeam] = useState([])

  const teamTypes = ['All', ...new Set(team.map(member => member.type))];

  const [activeType, setActiveType] = useState('All')

  useEffect(() => {
    axios.get(TEAM_URL).then((res) => {
      setTeam(res?.data?.team)
    });
  }, []);

  return (
    <Box>
      <Paper elevation={3}>
        <Tabs
          value={activeType}
          onChange={(event, newValue) => {setActiveType(newValue)}}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable team filter"
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
          {
            teamTypes.map(teamType => 
              <Tab 
                wrapped
                label={teamType} 
                value={teamType}
                style={{
                  color: "white",
                }}
              />
            )
          }
        </Tabs>
      </Paper>
      <Grid container paddingTop={7} spacing={2}>
        {
          team.filter(team => team.type === activeType | activeType === 'All')
          .map(member => 
            <Grid xs={12} sm={6} md={3} lg={2}>
              <CardTeam 
                name={member.name}
                type={member.type}
                image={member.image}
                bio={member.bio}
                link={member.link}
                github={member.github}
                linkedin={member.linkedin}
                orcid={member.orcid}
              />
            </Grid>
        )}
      </Grid>
    </Box>
  )
};

export default About;