import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useResults from '../../hooks/useResults';
import HeaderComponent from '../Shared/HeaderComponent/HeaderComponent';
import { useStyles } from '../Home/HomeStyles';
import InfiniteScroll from 'react-infinite-scroll-component';
import CardComponent from '../Shared/CardComponent/CardComponent';
import Modal from '../Shared/Modal/Modal';
import SweetAlertComponent from '../Shared/SweetAlertComponent/SweetAlertComponent';

const ScreenB = () => {
    const { results, calculations, setCalculations } = useResults();
    const classes = useStyles();
    const [endIndex, setEndIndex] = useState(3);
    const calculationsToShow = calculations.slice(0, endIndex);
    const [open, setOpen] = useState(false);
    const [seeInput, setSeeInput] = useState(false);

    console.log(calculations);


    const fetchMore = () => {
        setTimeout(() => {
            setEndIndex(calculations.length);
        }, 1000);
    };

    const handleModalOpen = (id) => {
        setOpen(true);
        const specific = calculations.find(calc => calc._id === id);
        setSeeInput(specific);
    };
    return (
        <>
            <Modal open={open} setOpen={setOpen} seeInput={seeInput} />
            <HeaderComponent />
            <Container maxWidth="sm" sx={{ mt: 2 }} id="scrollableDiv"
                style={{
                    height: 400,
                    overflowY: 'scroll',
                }}>
                <Box className={classes.mainHeadingContainer}>
                    <Typography variant='h5' className={classes.mainHeading}>
                        Screen B
                    </Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
                    <Box>
                        <Typography variant='h5'>
                            Total Result : {calculations.length}
                        </Typography>
                        <SweetAlertComponent />
                    </Box>
                </Box>

                <InfiniteScroll
                    dataLength={calculations.length}
                    next={fetchMore}
                    scrollableTarget="scrollableDiv"
                    hasMore={true}
                >
                    {calculationsToShow.map((each, index) => {
                        return (
                            <Box >
                                <CardComponent calculation={each} handleModalOpen={handleModalOpen} />
                            </Box>
                        );
                    })}

                </InfiniteScroll>
            </Container>
        </>
    );
};

export default ScreenB;