import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export default function Modal({ open, setOpen, seeInput }) {
    const { title, value, fileName, output } = seeInput;

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div style={{ maxWidth: 400 }}>
                    <DialogContent>
                        <Box sx={{ my: 2 }}>
                            <span style={{ fontSize: 20, fontWeight: 700 }}>File Name:</span> {fileName}
                        </Box>
                        <Box sx={{ my: 2 }}>
                            <span style={{ fontSize: 20, fontWeight: 700 }}>Title:</span> {title}
                        </Box>
                        <Box sx={{ my: 2 }}>
                            <span style={{ fontSize: 20, fontWeight: 700 }}>Input:</span> {value}
                        </Box>
                        <Box sx={{ my: 2 }}>
                            <span style={{ fontSize: 20, fontWeight: 700 }}>Output:</span> {output}
                        </Box>
                    </DialogContent >
                    <DialogActions>
                        <Button onClick={handleClose} autoFocus>
                            OK
                        </Button>
                    </DialogActions>
                </div >
            </Dialog >
        </div >
    );
}