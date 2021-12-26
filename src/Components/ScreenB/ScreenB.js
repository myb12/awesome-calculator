import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import HeaderComponent from '../Shared/HeaderComponent/HeaderComponent';

const ScreenB = () => {
    return (
        <>
            <HeaderComponent />
            <Container maxWidth="sm" sx={{ mt: 2 }} id="scrollableDiv"
                style={{
                    height: 400,
                    overflowY: 'scroll',
                }}>
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
            </Container>
        </>
    );
};

export default ScreenB;