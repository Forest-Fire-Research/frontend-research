import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Box, Button, Chip, Divider } from '@mui/material';
import { motion } from "framer-motion";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';

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
            <Dialog
                open={openPublication}
                onClose={openPublicationPopup}
                scroll='paper'
                aria-labelledby="alert-publication"
                aria-describedby="alert-publication-description"
            >
                <DialogTitle id="alert-publication-title">
                    {props.publication.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-abstract-description">
                        <Box pb={2}>
                            Authors:
                            {props.publication.authors.split('and').map((author,index) => (
                                <Typography  
                                    variant='body2'
                                    pl={2}
                                >
                                {index+1}. {author.split(',').reverse()} 
                                </Typography>
                            ))}
                        </Box>
                        <Box pb={2}>
                            Publications Details:
                            <Typography variant='body2' pl={2}>    
                                Published in: {props.publication.publisher} ({props.publication.publisherShort})
                            </Typography>
                            <Typography variant='body2' pl={2}>    
                                Location: {props.publication.location} 
                            </Typography>
                            <Typography variant='body2' pl={2}>    
                                DOI: <Link to={doiLink}>{props.publication.doi} </Link> 
                            </Typography>
                            <Typography variant='body2' pl={2}>    
                                Pages: {props.publication.pages}
                            </Typography>
                            <Typography variant='body2' pl={2}>    
                                Year: {props.publication.year}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography>
                                Abstract:
                            </Typography>
                            <Typography
                                variant="body2" 
                            >
                                {props.publication.abstract}
                            </Typography>
                        </Box>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closePublicationPopup}>Close</Button>
                </DialogActions>
            </Dialog>
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