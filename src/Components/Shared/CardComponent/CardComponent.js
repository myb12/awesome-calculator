import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useStyles } from './CardComponentStyles'

const CardComponent = ({ calculation, handleModalOpen }) => {
    const classes = useStyles();
    return (
        <Card sx={{ my: 2 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {calculation.title}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                    <Typography >
                        = {calculation.output}
                    </Typography>
                    <Box className={classes.seeInputBtn} onClick={() => handleModalOpen(calculation._id)}>
                        See Input
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

export default CardComponent;