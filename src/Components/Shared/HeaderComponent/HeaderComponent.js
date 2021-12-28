import React from 'react';
import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { useStyles } from './HeaderComponentStyles'

const HeaderComponent = () => {
    const classes = useStyles();
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
        <Box className={classes.headerContainer}>
            <Container maxWidth='md' className={classes.header}>
                <img src="https://i.ibb.co/p0s93QF/header-dots.png" alt="Three dots" />
                <span>
                    {
                        currentPage === 'screen-b' ? <Button variant="outlined" onClick={handleScreenA} style={{ color: '#666', borderColor: '#666' }}>
                            Go to Screen A
                        </Button> : <Button variant="outlined" onClick={handleScreenB} style={{ color: '#666', borderColor: '#666' }}>
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