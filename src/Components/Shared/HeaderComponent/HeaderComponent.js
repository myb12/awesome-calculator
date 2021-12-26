import React from 'react';
import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import './HeaderComponent.css'

const HeaderComponent = () => {
    return (
        <Box className="header-container">
            <Container maxWidth='md' className="header">
                <img src="https://i.ibb.co/p0s93QF/header-dots.png" alt="Three dots" />
                <span className="color-primary font-bold ml-5">
                    <Button variant="outlined">
                        Screen A
                    </Button>
                </span>
                <img src="https://i.ibb.co/p0s93QF/header-dots.png" alt="Three dots" />
            </Container>
        </Box>
    );
};

export default HeaderComponent;