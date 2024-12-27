import { Typography, Button } from '@mui/material';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import StarsIcon from '@mui/icons-material/Stars';
import CardPublication from "./CardPublication";

const PublicationTimelineView = (props) => {
    return (
        <Timeline 
            // sx={{
            //     position: {
            //         xl: 'alternate',   // Extra large screens (large desktops)
            //         xs: 'left',   // Extra small screens (phones)
            //         sm: 'right',   // Small screens (tablets)
            //         md: 'alternate',   // Medium screens (laptops)
            //         lg: 'alternate',   // Large screens (desktops)
            //     },
            // }}
            // position="alternate"
            position="right"
            // sx={{
            //     [`& .${timelineOppositeContentClasses.root}`]: {
            //       flex: {md: 0.4, lg: 0.2 },
            //     },
            //   }}
        >
            {props.publications.map((publication, index) => 
                <TimelineItem
                style={{
                    display: 'flex',
                }}
                sx={{
                    flexDirection: {
                        sm: 'row',
                        md: index%2===0 ? 'row-reverse' : 'row'
                }}}
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
                        }}
                    >
                        <Button
                            variant="rounded"
                            disableRipple
                            sx={{
                                borderRadius: 10,
                                boxShadow: 10,
                                bgcolor: "#ffffffea",
                            }}
                        >
                            <Typography 
                                color='primary'
                                sx={{
                                    variant: {
                                      xs: 'body2',   // Extra small screens (phones)
                                      sm: 'h5',   // Small screens (tablets)
                                      md: 'h4',   // Medium screens (laptops)
                                      lg: 'h3',   // Large screens (desktops)
                                      xl: 'h2',   // Extra large screens (large desktops)
                                    },
                                  }}
                            >
                                {publication.publisherShort} {publication.year}
                            </Typography>
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
                        <CardPublication publication={publication} />
                    </TimelineContent>
                </TimelineItem>
            )}
        </Timeline>
    )
}

export default PublicationTimelineView;