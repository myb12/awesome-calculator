import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CardComponent from '../Shared/CardComponent/CardComponent';
import HeaderComponent from '../Shared/HeaderComponent/HeaderComponent';

const Home = () => {
    return (
        <div>
            <HeaderComponent />
            <Container maxWidth="sm" sx={{ mt: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                    <Box>
                        <Typography variant='h5'>
                            Total Result : 10
                        </Typography>
                    </Box>
                    <Box>
                        <Button variant="contained">All results</Button>
                    </Box>
                </Box>
                <CardComponent />
            </Container>
        </div>
    );
};

export default Home;