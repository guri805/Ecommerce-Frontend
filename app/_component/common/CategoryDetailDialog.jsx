'use client';
import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Slide,
    Button,
    Box,
    Typography
} from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CategoryDetailsDialog = ({ open, onClose, category }) => {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={onClose}
            aria-describedby="category-dialog-description"
        >
            <DialogTitle>Category Details</DialogTitle>
            <DialogContent>
                {category && (
                    <Box id="category-dialog-description">
                        <Typography variant="body1" component="p" fontWeight="bold">
                            Name: <span className="font-normal">{category.categoryName}</span>
                        </Typography>
                        <img
                            src={category.categoryImages}
                            alt="Category"
                            className="w-48 h-auto mt-4 rounded-md"
                        />
                    </Box>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CategoryDetailsDialog;
