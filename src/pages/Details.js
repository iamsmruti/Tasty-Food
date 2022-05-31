import { Container, Box, Typography, Grid } from '@mui/material';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import CategoryCard from '../components/CategoryCard';
import FaqCard from '../components/FaqCard';
import InstructionCard from '../components/InstructionCard';

const Details = () => {
    const [item, setItem] = useState([])
    const [categories, setCategories] = useState([])
    const [faqs, setFaqs] = useState([])
    const [instructions, setInstructions] = useState([])
    const [blogs, setBlogs] = useState([])

    const { id } = useParams()

    useEffect(() => {
        fetch(`https://foooodify.herokuapp.com/api/foods/${id}`)
            .then((res) => res.json())
            .then((data) => setItem(data))
    }, []);

    useEffect(() => {
        setCategories(item.categories)
        setFaqs(item.faqs)
        setBlogs(item.blogs)
        setInstructions(item.instructions)
    }, [item])

    console.log(item.categories)

    return (
        <Box>
            <Box
                sx={{
                    maxHeight: '100vh',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <img width={'60%'} src={item.banner} alt="" />
            </Box>

            <Container>
                <Box>
                    <Typography
                        align='center'
                        variant='h4'
                        sx={{ textTransform: 'uppercase', fontWeight: 700 }}
                    >how it works</Typography>
                    <Typography
                        align='center'
                        variant='body2'
                        sx={{ mt: 1 }}
                    >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                </Box>

                <Box sx={{ mt: 10 }}>
                    <Typography
                        align='left'
                        variant='h5'
                        sx={{ textTransform: 'uppercase', fontWeight: 700 }}
                    >Categories</Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            marginTop: 2
                        }}
                    >
                        {categories?.map((item) => (
                            <CategoryCard item={item} />
                        ))}
                    </Box>
                </Box>

                <Box sx={{ mt: 10 }}>
                    <Typography
                        align='center'
                        variant='h4'
                        sx={{ textTransform: 'uppercase', fontWeight: 700 }}
                    >A Glance at our Product</Typography>

                    <Box
                        pt={4}
                    >
                        <img width={'100%'} src={item.video} alt="" />
                    </Box>
                </Box>

                <Box sx={{ mt: 10 }}>
                    <Typography
                        align='center'
                        variant='h4'
                        sx={{ textTransform: 'uppercase', fontWeight: 700 }}
                    >Faqs</Typography>

                    {faqs?.map((item) => (
                        <FaqCard item={item} />
                    ))}
                </Box>

                <Box sx={{ mt: 10 }}>
                    <Typography
                        align='center'
                        variant='h4'
                        sx={{ textTransform: 'uppercase', fontWeight: 700 }}
                    >Have a read</Typography>

                    {instructions?.map((item) => (
                        <InstructionCard item={item} />
                    ))}
                </Box>

                <Box
                    sx={{
                        mt: 10
                    }}
                >
                    <Typography
                        align='center'
                        variant='h4'
                        sx={{ textTransform: 'uppercase', fontWeight: 700 }}
                    >Topics you can't miss</Typography>

                    <Grid sx={{mt: 4}} container spacing={3}>
                        {blogs?.map((item) => (
                            <Grid item xs={12} md={4}>
                                <BlogCard item={item} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default Details;