import { Button, Container, Skeleton, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
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
import { useStyles } from './HomeStyles';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import stringMath from 'string-math';

const Home = () => {
    const { calculations, setCalculations, disable, setDisable } = useResults();
    const [file, setFile] = useState(null);
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [endIndex, setEndIndex] = useState(3);
    const calculationsToShow = calculations.slice(0, endIndex);
    const [open, setOpen] = useState(false);
    const [seeInput, setSeeInput] = useState(false);
    const [show, setShow] = useState(false);
    const [skeleton, setSkeleton] = useState(false);
    const [bottom, setBottom] = useState(false);
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

        fetch('https://warm-inlet-27539.herokuapp.com/update-results', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(items)
        })
            .then(res => res.json())
            .then(data => { })
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
            const resultValue = stringMath(value);

            formData.append('title', title);
            formData.append('value', value);
            formData.append('output', resultValue);
            formData.append('file', file);

            setTimeout(() => {
                axios.post('https://warm-inlet-27539.herokuapp.com/addCalculation', formData, {
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
        setSkeleton(true);
        setTimeout(() => {
            setEndIndex(calculations.length);
            setSkeleton(false);
            setBottom(true);
        }, 2000);
    };

    return (
        <div style={{ marginBottom: 50 }}>
            <Modal open={open} setOpen={setOpen} seeInput={seeInput} />
            <SweetAlertComponent show={show} setShow={setShow} message={message} />
            <HeaderComponent />
            <Container maxWidth="sm" sx={{ mt: 2, border: '2px solid #666' }} id="scrollable1"
            >
                <Box className={classes.mainHeadingContainer}>
                    <Typography variant='h5' className={classes.mainHeading}>
                        Screen A
                    </Typography>

                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                    <Box>
                        <Typography variant='h5' sx={{ fontWeight: 700, color: '#666' }}>
                            Total Result : {calculations.length}
                        </Typography>
                    </Box>
                    <Box>
                        <Button onClick={() => history.push('/screen-b')} style={{ color: '#666' }}>All results</Button>
                    </Box>
                </Box>

                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="calculations">
                        {(provided) => (
                            <div  {...provided.droppableProps} ref={provided.innerRef}>
                                <InfiniteScroll
                                    dataLength={calculations.length}
                                    next={fetchMore}
                                    scrollableTarget="scrollable1"
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
                                    {
                                        skeleton && <>  <Skeleton />
                                            <Skeleton />
                                            <Skeleton />
                                        </>
                                    }
                                    <p style={{ textAlign: 'center' }}>{bottom && 'All results have been revealed'}</p>
                                </InfiniteScroll>
                                {provided.placeholder}
                            </div>
                        )}

                    </Droppable>
                </DragDropContext>

            </Container>

            <Container maxWidth="sm" sx={{ borderLeft: '2px solid #666', borderRight: '2px solid #666', borderBottom: '2px solid #666' }}>
                <form onSubmit={handleCalculate}>
                    <Box sx={{ mb: 2, pt: 2 }}>
                        <Typography variant="h4" sx={{ mb: 1, color: '#666', fontWeight: 700 }}>
                            Input
                        </Typography>
                        <TextField
                            required
                            label="Calculation title"
                            id="outlined-size-small"
                            size="small"
                            onBlur={handleTitle}
                            className={classes.textField}
                            sx={{ width: '100%' }}
                        />
                    </Box>
                    <Box>
                        <Box className="file-upload">
                            <label htmlFor="file" >
                                <AiOutlineCloudUpload />
                            </label>
                            <input type="file" id="file" name="file" accept=".txt" onChange={handleFileChange} title=" " />
                            <label htmlFor="file" style={{ fontSize: 18, color: '#666' }}>
                                Drop your calculation text file here
                            </label>
                        </Box>
                    </Box>
                    <Box>
                        <Button type="submit" disabled={disable} variant="outlined" style={{ color: '#666', borderColor: '#666', margin: '10px 0', borderRadius: 20 }}>
                            Calculate
                        </Button>
                        <small style={{ color: '#666', marginLeft: 5 }}>{disable && 'Calculating, Please wait...'}</small>

                    </Box>
                </form>
            </Container>
        </div >
    );
};

export default Home;