import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function Modal({ open, setOpen }) {

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
                <div style={{ width: 300 }}>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            FileName
                        </DialogContentText>
                        <DialogContentText id="alert-dialog-description">
                            Title
                        </DialogContentText>
                        <DialogContentText id="alert-dialog-description">
                            Input
                        </DialogContentText>
                        <DialogContentText id="alert-dialog-description">
                            Output
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} autoFocus>
                            OK
                        </Button>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    );
}