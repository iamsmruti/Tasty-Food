import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const InstructionCard = ({ item }) => {
    return (
        <Card
            sx={{
                mb: 3
            }}
        >
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions
            >
                <Button endIcon={<ArrowForwardIcon />} sx={{ml: 'auto'}} size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default InstructionCard;