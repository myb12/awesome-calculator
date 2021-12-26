import React from 'react';
import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import './HeaderComponent.css'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const HeaderComponent = () => {
    const history = useHistory();
    const location = useLocation();
    const currentPage = location.pathname.slice(1);
    const handleScreenA = () => {
        history.push('/')
    }
    const handleScreenB = () => {
        history.push('/screen-b')
    }

    return (
        <Box className="header-container">
            <Container maxWidth='md' className="header">
                <img src="https://i.ibb.co/p0s93QF/header-dots.png" alt="Three dots" />
                <span className="color-primary font-bold ml-5">
                    {
                        currentPage === 'screen-b' ? <Button variant="outlined" onClick={handleScreenA}>
                            Go to Screen A
                        </Button> : <Button variant="outlined" onClick={handleScreenB}>
                            Go to Screen B
                        </Button>
                    }
                </span>
                <img src="https://i.ibb.co/p0s93QF/header-dots.png" alt="Three dots" />
            </Container>
        </Box>
    );
};

export default HeaderComponent;