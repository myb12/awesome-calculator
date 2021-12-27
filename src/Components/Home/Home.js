import { Button, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useResults from '../../hooks/useResults';
import CardComponent from '../Shared/CardComponent/CardComponent';
import HeaderComponent from '../Shared/HeaderComponent/HeaderComponent';
import Modal from '../Shared/Modal/Modal';
import SweetAlertComponent from '../Shared/SweetAlertComponent/SweetAlertComponent';
import { useStyles } from './HomeStyles'

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
    const { results, calculations, setCalculations, disable, setDisable } = useResults();
    const [file, setFile] = useState(null);
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [endIndex, setEndIndex] = useState(3);
    const calculationsToShow = calculations.slice(0, endIndex);
    const [open, setOpen] = useState(false);
    const [seeInput, setSeeInput] = useState(false);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const history = useHistory();

    const classes = useStyles();

    const handleModalOpen = (id) => {
        setOpen(true);
        const specific = calculations.find(calc => calc._id === id);
        setSeeInput(specific);
    };

    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const items = Array.from(calculations);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setCalculations(items);
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        const reader = new FileReader();
        reader.readAsText(e.target.files[0]);

        reader.onload = function () {
            const text = reader.result;
            const newValue = text.replace(/\s/g, '');
            setValue(newValue);
        };
    };

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }


    const handleCalculate = (e) => {
        const regex = /^[-+]?\d*\.?\d+(?:[-+*/]?\d+)+?$/;
        const formData = new FormData();

        if (regex.test(value)) {
            setDisable(true);
            const resultValue = eval(value);

            formData.append('title', title);
            formData.append('value', value);
            formData.append('output', resultValue);
            formData.append('file', file);


            setTimeout(() => {
                axios.post('http://localhost:5000/addCalculation', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                    .then(res => {
                        if (res) {
                            console.log('calculated');
                            setDisable(false);
                            setMessage('Successfully calculated!');
                            setShow(true);
                            e.target.reset();
                            setTimeout(() => {
                                setShow(false);
                            }, 3000)
                        }
                    })
            }, 15000)
        } else {
            setMessage('File type not supported! Please insert a .txt file.');
            setShow(true);
        }
        e.preventDefault();
    }

    const fetchMore = () => {
        setTimeout(() => {
            setEndIndex(calculations.length);
        }, 1000);
    };

    return (
        <div >
            <Modal open={open} setOpen={setOpen} seeInput={seeInput} />
            <SweetAlertComponent show={show} setShow={setShow} message={message} />
            <HeaderComponent />
            <Container maxWidth="sm" sx={{ mt: 2 }} id="scrollableDiv"
                style={{
                    height: 400,
                    overflowY: 'scroll',
                }}>
                <Box className={classes.mainHeadingContainer}>
                    <Typography variant='h5' className={classes.mainHeading}>
                        Screen A
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                    <Box>
                        <Typography variant='h5'>
                            Total Result : {calculations.length}
                        </Typography>
                    </Box>
                    <Box>
                        <Button onClick={() => history.push('/screen-b')}>All results</Button>
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
                                            <Draggable key={each._id} draggableId={each._id} index={index}>
                                                {(provided) => (
                                                    <Box ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                        <CardComponent calculation={each} handleModalOpen={handleModalOpen} />
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
            <Container maxWidth="sm" sx={{ mt: 2, }}>
                <form onSubmit={handleCalculate}>
                    <Grid container spacing={2}>
                        <Grid item md={6} >
                            <TextField
                                label="Title"
                                id="outlined-size-small"
                                size="small"
                                onBlur={handleTitle}
                            />
                        </Grid>
                        <Grid item md={6}>
                            <input type="file" id="img" name="img" accept=".txt" onChange={handleFileChange} />
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button disabled={disable} variant="outlined" sx={{ my: 2, }} type="submit">
                            {disable ? 'Calculating Please wait...' : 'Calculate'}
                        </Button>
                    </Box>
                </form>
            </Container>
        </div >
    );
};

export default Home;