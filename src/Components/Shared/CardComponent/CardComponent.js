import React from 'react'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useStyles } from './CardComponentStyles'

const CardComponent = ({ calculation, handleModalOpen }) => {
    const classes = useStyles();
    return (
        <Box className={classes.card}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                    = {calculation.output}
                    <span style={{ fontSize: 18, fontWeight: 700, marginLeft: 16 }}>{calculation.title}</span>
                </Typography>
                <Box className={classes.seeInputBtn} onClick={() => handleModalOpen(calculation._id)}>
                    See Input
                </Box>
            </Box>
        </Box>
    );
}

export default CardComponent;