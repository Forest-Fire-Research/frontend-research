import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Chip, Divider } from '@mui/material';
import { motion } from "framer-motion";
import PreviewPublication from './PreviewPublication';

const CardPublication = (props) => {
    const doiLink = 'https://doi.org/' + props.publication.doi

    const handelDoiRedirect = () => {
        window.location.href = doiLink
    }

    const [openPublication, setOpenPublication] = React.useState(false);

    const openPublicationPopup = () => {
        setOpenPublication(true)
    }

    const closePublicationPopup = () => {
        setOpenPublication(false)
    }

    return (
        <React.Fragment>
            <PreviewPublication
                isOpen={openPublication}
                publication={props?.publication}
                onClose={closePublicationPopup}
            />
            <motion.div 
                transition={{ duration: 1 }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1}}
                viewport={{ once: true }}
            >
                <Card
                    sx={{
                        borderRadius: 5,
                        bgcolor: '#000000aa',
                        backgroundImage: "radial-gradient( circle at 50% 50%, #1b5e2088, #1b5e20aa, #1b5e2088, #1b5e20aa )",
                        backgroundSize: "0.6rem 0.6rem",
                        backdropFilter: "blur(0.3rem) brightness(20%)",
                        boxShadow: 10,
                    }}  
                >   
                    {props?.disableImage ? <></>:
                        <CardMedia
                            component="img"
                            alt="logo"
                            height="140"
                            width="50%"
                            image={props?.publication?.logo}
                        />
                    }
                    <CardContent>
                        <Typography 
                            gutterBottom 
                            color="white"
                            variant="h6" 
                            component="div"
                            textAlign="center"
                            sx={{
                                display: '-webkit-box',
                                WebkitLineClamp: 1, 
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            {props.publication.title}
                        </Typography>
                        {props.publication.publisherShort ? 
                            <Divider textAlign="space-evenly" > 
                                <Chip color="success" label={props.publication.publisherShort + " " + props.publication.year} size="small" />
                            </Divider>
                        :
                            <></>
                        }
                        <Typography 
                            variant="body2" 
                            color="lightgray"
                            textAlign="justify"
                            sx={{
                                display: '-webkit-box',
                                WebkitLineClamp: 5, 
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            {props.publication.abstract}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton color="success" size="small" onClick={openPublicationPopup}> 
                            <VisibilityIcon /> 
                        </IconButton>
                        <IconButton color="success" size="small" onClick={handelDoiRedirect}> 
                            <PictureAsPdfIcon /> 
                        </IconButton>
                    </CardActions>
                </Card>
            </motion.div>
        </React.Fragment>
    )
};

export default CardPublication;