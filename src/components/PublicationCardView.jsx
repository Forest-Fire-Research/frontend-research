import * as React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import CardPublication from './CardPublication';

const PublicationCardView = (props) => {
    
    return (
        <Grid container paddingTop={10} spacing={2}>
        {
          props.publications?.map(publication => 
            <Grid xs={12} sm={12} md={6} lg={4}>
              <CardPublication publication={publication} />
            </Grid>
        )}
      </Grid>
    )
}

export default PublicationCardView