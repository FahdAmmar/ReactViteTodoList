// src/components/Todo.tsx

import React, { useState } from 'react';
import { useTodos } from '../contexts/TodosContext';
import { Todo as TodoType } from '../types/types';

// Material UI
import { Container, Card, CardContent, Typography, Grid, ButtonGroup, IconButton, Tooltip, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField, Box } from '@mui/material';
import { Delete as DeleteIcon, CheckCircle as CheckIcon, Edit as EditIcon } from '@mui/icons-material';

interface TodoProps {
    todo: TodoType;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
    const { dispatch } = useTodos();

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [editTitle, setEditTitle] = useState(todo.title);

    const handleToggleComplete = (): void => {
        dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
    };

    const handleDelete = (): void => {
        dispatch({ type: 'DELETE_TODO', payload: todo.id });
        setOpenDeleteDialog(false);
    };

    const handleUpdate = (): void => {
        if (editTitle.trim() !== '') {
            dispatch({
                type: 'UPDATE_TODO',
                payload: { id: todo.id, title: editTitle.trim() }
            });
            setOpenEditDialog(false);
        }
    };

    const handleCloseEditDialog = (): void => {
        setOpenEditDialog(false);
        setEditTitle(todo.title);
    };

    return (
        <Container className="mx-auto text-center" maxWidth="sm" sx={{ mt: 1, p: 0 }}>

            {/* Edit Dialog */}
            <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
                <DialogTitle>Edit Todo</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ mb: 2 }}>
                        Update the title of your todo:
                    </DialogContentText>
                    <TextField
                        autoFocus
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        label="New Title"
                        type="text"
                        fullWidth
                        variant="standard"
                        onKeyPress={(e) => e.key === 'Enter' && handleUpdate()}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEditDialog}>Cancel</Button>
                    <Button onClick={handleUpdate} variant="contained" color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Delete Dialog */}
            <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
                <DialogTitle>❌ Delete Todo</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete "{todo.title}"?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDeleteDialog(false)}>Cancel</Button>
                    <Button onClick={handleDelete} color="error" variant="contained">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Todo Card */}
            <Card sx={{
                backgroundColor: '#292d3e',
                color: 'white',
                my: 1,
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.02)' }
            }}>
                <CardContent>
                    <Grid container spacing={35} alignItems="center">
                        <Grid item xs={8}>
                            <Typography
                                sx={{
                                    textAlign: "left",
                                    textDecoration: todo.completed ? "line-through" : "none",
                                    opacity: todo.completed ? 0.7 : 1
                                }}
                            >
                                {todo.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <ButtonGroup variant="outlined" size="small">

                                {/* Check Button */}
                                <Tooltip title={todo.completed ? "Mark as incomplete" : "Mark as complete"} arrow>
                                    <IconButton
                                        size="small"
                                        onClick={handleToggleComplete}
                                        sx={{
                                            backgroundColor: todo.completed ? "green" : "transparent",
                                            color: todo.completed ? "white" : "green",
                                            border: "2px solid green",
                                            '&:hover': {
                                                backgroundColor: todo.completed ? "darkgreen" : "rgba(0, 128, 0, 0.1)",
                                            }
                                        }}
                                    >
                                        <CheckIcon fontSize="small" />
                                    </IconButton>
                                </Tooltip>

                                {/* Edit Button */}
                                <Tooltip title="Edit" arrow>
                                    <IconButton
                                        size="small"
                                        onClick={() => setOpenEditDialog(true)}
                                        sx={{
                                            backgroundColor: "transparent",
                                            color: "blue",
                                            border: "2px solid blue",
                                            '&:hover': { backgroundColor: "rgba(0, 0, 255, 0.1)" }
                                        }}
                                    >
                                        <EditIcon fontSize="small" />
                                    </IconButton>
                                </Tooltip>

                                {/* Delete Button */}
                                <Tooltip title="Delete" arrow>
                                    <IconButton
                                        size="small"
                                        onClick={() => setOpenDeleteDialog(true)}
                                        sx={{
                                            backgroundColor: "transparent",
                                            color: "red",
                                            border: "2px solid red",
                                            '&:hover': { backgroundColor: "rgba(255, 0, 0, 0.1)" }
                                        }}
                                    >
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
                                </Tooltip>

                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Todo;