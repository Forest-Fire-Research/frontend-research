import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Chip, Divider } from '@mui/material';
import { FaOrcid } from "react-icons/fa";

const CardTeam = (props) => {
    const handelLinkInRedirect = () => {
        window.location.href = props.link
    }

    const handelGithubRedirect = () => {
        window.location.href = 'https://github.com/' + props.github
    }

    const handelLinkedInRedirect = () => {
        window.location.href = 'https://www.linkedin.com/in/' + props.linkedin
    }

    const handelOrcidRedirect = () => { 
        window.location.href = 'https://orcid.org/' + props.orcid
    }

    const imageFile = props.image == null ? "Author_UNF" : props.image

    const imageURL = 'https://raw.githubusercontent.com/Forest-Fire-Research/website-assets/main/assets/headshots/' + imageFile + ".jpg"

    return (
        <Card
            sx={{
                color: 'white',
                borderRadius: 5,
                bgcolor: '#000000aa',
                backgroundImage: "radial-gradient( circle at 50% 50%, #1b5e2066, #1b5e20aa, #1b5e2066, #1b5e20aa )",
                backgroundSize: "0.4rem 0.4rem",
                backdropFilter: "blur(0.3rem) brightness(90%)",
                boxShadow: 10,
                margin: {
                    xs: "2rem",
                    sm: "0rem"
                }
            }}  
        >
            <CardMedia
                component="img"
                alt="green iguana"
                maxHeight="500"
                maxWidth="400"
                image={imageURL}
            />
            <CardContent>
                <Typography 
                    gutterBottom 
                    variant="h6" 
                    component="div"
                    sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 1, // Limit to 1 lines
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                >
                    {props.name}
                </Typography>
                <Divider color="white" textAlign="center" > 
                    <Chip color="success" label={props.type} size="small" />
                </Divider>
                <Typography 
                    mt={2}
                    variant="body2" 
                    // color="text.secondary"
                    sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 7, // Limit to 3 lines
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                >
                    {props.bio}
                </Typography>
            </CardContent>
            <CardActions>
                {
                    props.link?
                        <IconButton 
                            size="small" 
                            onClick={handelLinkInRedirect}
                        > 
                            <VisibilityIcon /> 
                        </IconButton>
                    :
                        <></>
                }
                {
                    props.github?
                        <IconButton 
                            size="small"
                            onClick={handelGithubRedirect}
                        > 
                            <GitHubIcon /> 
                        </IconButton>
                    :
                        <></>
                }
                {
                    props.linkedin?
                    <IconButton 
                        size="small"
                        onClick={handelLinkedInRedirect}
                    > 
                        <LinkedInIcon /> 
                    </IconButton>
                    :
                        <></>
                }
                {
                    props.orcid?
                    <IconButton 
                        size="small"
                        onClick={handelOrcidRedirect}
                    > 
                        <FaOrcid /> 
                    </IconButton>
                    :
                        <></>
                }
            </CardActions>
        </Card>
    )
};

export default CardTeam;