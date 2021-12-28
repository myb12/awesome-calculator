import { Container, Skeleton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useResults from '../../hooks/useResults';
import HeaderComponent from '../Shared/HeaderComponent/HeaderComponent';
import { useStyles } from '../Home/HomeStyles';
import InfiniteScroll from 'react-infinite-scroll-component';
import CardComponent from '../Shared/CardComponent/CardComponent';
import Modal from '../Shared/Modal/Modal';
import SweetAlertComponent from '../Shared/SweetAlertComponent/SweetAlertComponent';

const ScreenB = () => {
    const { calculations } = useResults();
    const classes = useStyles();
    const [endIndex, setEndIndex] = useState(3);
    const calculationsToShow = calculations.slice(0, endIndex);
    const [open, setOpen] = useState(false);
    const [seeInput, setSeeInput] = useState(false);
    const [skeleton, setSkeleton] = useState(false);
    const [bottom, setBottom] = useState(false);


    console.log(calculations);


    const fetchMore = () => {
        setSkeleton(true);
        setTimeout(() => {
            setEndIndex(calculations.length);
            setBottom(true);
            setSkeleton(false);
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
            <Container maxWidth="sm" sx={{ mt: 2, border: '2px solid #666' }} id="scrollable2"
            >
                <Box className={classes.mainHeadingContainer}>
                    <Typography variant='h5' className={classes.mainHeading}>
                        Screen B
                    </Typography>
                </Box>
                <Box>
                    <Box>
                        <Typography variant='h5' sx={{ fontWeight: 700, color: '#666' }}>
                            Total Result : {calculations.length}
                        </Typography>
                        <SweetAlertComponent />
                    </Box>
                </Box>

                <InfiniteScroll
                    dataLength={calculations.length}
                    next={fetchMore}
                    scrollableTarget="scrollable2"
                    hasMore={true}
                >
                    {calculationsToShow.map((each, index) => {
                        return (
                            <Box >
                                <CardComponent calculation={each} handleModalOpen={handleModalOpen} />
                            </Box>
                        );
                    })}
                    {
                        skeleton && <>  <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </>
                    }
                    {
                        <p style={{ textAlign: 'center' }}>{bottom && 'All results have been revealed'}</p>
                    }

                </InfiniteScroll>
            </Container>
        </>
    );
};

export default ScreenB;