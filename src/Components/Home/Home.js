import { Button, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import InfiniteScroll from 'react-infinite-scroll-component';
import CardComponent from '../Shared/CardComponent/CardComponent';
import HeaderComponent from '../Shared/HeaderComponent/HeaderComponent';

const calculationsData = [
    {
        id: '1',
        title: 'Title-1',
        result: 456
    },
    {
        id: '2',
        title: 'Title-2',
        result: 446
    },
    {
        id: '3',
        title: 'Title-3',
        result: 256
    },
    {
        id: '4',
        title: 'Title-4',
        result: 756
    },
    {
        id: '5',
        title: 'Title-5',
        result: 386
    },
    {
        id: '6',
        title: 'Title-6',
        result: 386
    },
    {
        id: '7',
        title: 'Title-7',
        result: 386
    },
    {
        id: '8',
        title: 'Title-8',
        result: 386
    },
    {
        id: '9',
        title: 'Title-9',
        result: 386
    },
    {
        id: '10',
        title: 'Title-10',
        result: 386
    },
]

const Home = () => {
    const [file, setFile] = useState(null);
    const [calculations, setCalculations] = useState(calculationsData);
    const [endIndex, setEndIndex] = useState(3);
    const calculationsToShow = calculations.slice(0, endIndex);

    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const items = Array.from(calculations);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setCalculations(items);
    }
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const fetchMore = () => {
        setTimeout(() => {
            setEndIndex(calculations.length);
        }, 1000);
    };

    return (
        <div >
            <HeaderComponent />
            <Container maxWidth="sm" sx={{ mt: 2 }} id="scrollableDiv"
                style={{
                    height: 400,
                    overflowY: 'scroll',
                }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                    <Box>
                        <Typography variant='h5'>
                            Total Result : {calculations.length}
                        </Typography>
                    </Box>
                    <Box>
                        <Button variant="contained">All results</Button>
                    </Box>
                </Box>

                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="calculations">
                        {(provided) => (
                            <div  {...provided.droppableProps} ref={provided.innerRef}>
                                <InfiniteScroll
                                    dataLength={calculations.length}
                                    next={fetchMore}
                                    scrollableTarget="scrollableDiv"
                                    hasMore={true}
                                >
                                    {calculationsToShow.map((each, index) => {
                                        return (
                                            <Draggable key={each.id} draggableId={each.id} index={index}>
                                                {(provided) => (
                                                    <Box ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                        <CardComponent calculation={each} />
                                                    </Box>
                                                )}
                                            </Draggable>
                                        );
                                    })}

                                </InfiniteScroll>
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>

            </Container>
            <Container maxWidth="md" sx={{ mt: 2 }}>
                <Divider />
            </Container>
            <Container maxWidth="sm" sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <TextField
                            label="Title"
                            id="outlined-size-small"
                            size="small"
                        />
                    </Grid>
                    <Grid item md={6}>
                        <input type="file" id="img" name="img" accept=".txt" onChange={handleFileChange} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Home;