import { Paper, Typography } from '@mui/material';

const CategoryCard = ({ item }) => {
    return (
        <Paper elevation={0} sx={{width: 150, mr: 2, bgcolor: 'transparent'}}>
            <img width={'100%'} src={item.img} alt="" />
            <Typography align='center'>{item.title}</Typography>
        </Paper>
    );
}

export default CategoryCard;