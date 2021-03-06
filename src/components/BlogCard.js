import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BlogCard({item}) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={item.title}
      />
      <CardMedia
        component="img"
        height="194"
        image={item.img}
        alt={item.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Button endIcon={<ArrowForwardIcon />} sx={{ml: 'auto'}} size="small">View Post</Button>
      </CardActions>
    </Card>
  );
}
