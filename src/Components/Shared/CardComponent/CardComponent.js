import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { Box } from '@mui/system';

const CardComponent = () => {
    return (
        <Card>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Title
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between',}}>
                        <Typography >
                            = 254
                        </Typography>
                        <Button variant="outlined">See Input</Button>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CardComponent;