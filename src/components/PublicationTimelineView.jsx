import { Button } from '@mui/material';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import StarsIcon from '@mui/icons-material/Stars';
import CardPublication from "./CardPublication";

const PublicationTimelineView = (props) => {
    return (
        <Timeline 
            position="left"
        >
            {props.publications.map((publication, index) => 
                <TimelineItem
                    style={{
                        display: 'flex',
                    }}
                    sx={{
                        position: index%2===0 ? 'left' : 'left',
                        flexDirection: {
                            sm: 'row',
                            md: index%2===0 ? 'row-reverse' : 'row'
                        }
                    }}
                >
                    <TimelineOppositeContent 
                        alignContent='center'
                        style={{
                            flex: 1
                        }}
                        sx={{
                            display: {
                                xs: 'none',   
                                sm: 'none',   
                                md: 'flow-root'
                            },
                            textAlign: index%2===0 ? 'left' : 'right'
                        }}
                    >
                        <Button
                                color='primary'
                            variant="rounded"
                            disableRipple
                        >
                            <img src={publication.logo} height="100px" alt="logo"/>
                        </Button>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color='primary'>
                        <StarsIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent 
                        style={{
                            flex: 1
                        }}
                    >
                        <CardPublication 
                            disableImage
                            publication={publication} 
                        />
                    </TimelineContent>
                </TimelineItem>
            )}
        </Timeline>
    )
}

export default PublicationTimelineView;