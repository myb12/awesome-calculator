import { Button, Container, Divider, Grid, Input, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import CardComponent from '../Shared/CardComponent/CardComponent';
import HeaderComponent from '../Shared/HeaderComponent/HeaderComponent';
import { BiUpload } from 'react-icons/bi';

const Home = () => {
    // const [file, setFile] = useState(null);
    // const handleFileChange = (file) => {
    //     setFile(file);
    // };
    return (
        <div >
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
                <CardComponent />
                <CardComponent />
            </Container>
            <Container maxWidth="md" sx={{ mt: 2 }}>
                <Divider />
            </Container>
            <Container maxWidth="sm" sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}>
                <Grid container>
                    <Grid item md={6}>
                        <TextField
                            label="Title"
                            id="outlined-size-small"
                            size="small"
                        />
                    </Grid>
                    <Grid item md={6}>
                        <input type="file" id="img" name="img" accept=".txt" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Home;