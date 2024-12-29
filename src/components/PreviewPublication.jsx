import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { Box, Button, ListItemButton } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';

const PreviewPublication = (props) => {
    const doiLink = 'https://doi.org/' + props.publication.doi

    return (
        <Dialog
            open={props?.isOpen}
            onClose={props?.onClose}
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
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="preview-author-view"
                            id="preview-author-view"
                        >
                            <Typography component="span">Authors</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List dense={true}>
                                {props.publication.authors.split(' and ').map((author,index) => (
                                    <ListItemButton key={index}>  
                                        <ListItem>
                                            <ListItemText
                                                primary={"" + (index+1) + "." + author.split(',').reverse()} 
                                            />    
                                        </ListItem>
                                    </ListItemButton>
                                ))}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="preview-abstract-view"
                            id="preview-abstract-view"
                        >
                            <Typography component="span">Abstract</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                variant="body2" 
                            >
                                {props.publication.abstract}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props?.onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    )
};

export default PreviewPublication;