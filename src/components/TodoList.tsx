// src/components/TodoList.tsx

import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Todo from './Todo';
import { useTodos } from '../contexts/TodosContext';
import { FilterType } from '../types/types';

// Material UI
import { Container, Grid, TextField, Button, Typography, Divider, ToggleButtonGroup, ToggleButton, Card, CardContent } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const TodoList: React.FC = () => {
    const { todos, dispatch, filter } = useTodos();
    const [inputTitle, setInputTitle] = useState < string > ('');

    const handleAddClick = (): void => {
        if (inputTitle.trim() === '') return;

        const newTodo = {
            id: uuid(),
            title: inputTitle.trim(),
            completed: false
        };

        dispatch({ type: 'ADD_TODO', payload: newTodo });
        setInputTitle('');
    };

    const handleFilterChange = (
        event: React.MouseEvent<HTMLElement>,
        newFilter: FilterType | null
    ): void => {
        if (newFilter) {
            dispatch({ type: 'FILTER_TODOS', payload: newFilter });
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent): void => {
        if (e.key === 'Enter') {
            handleAddClick();
        }
    };

    return (
        <Container className="mx-auto text-center" maxWidth="sm">
            <Card sx={{ minWidth: 350 }}>
                <CardContent>
                    <Typography className="text-gray-500" variant="h5">
                        ToDo List ✅
                    </Typography>
                    <Divider sx={{ my: 2 }} />

                    {/* Filter Buttons */}
                    <ToggleButtonGroup
                        exclusive
                        value={filter}
                        onChange={handleFilterChange}
                        sx={{ mb: 2 }}
                    >
                        <ToggleButton value="all">All</ToggleButton>
                        <ToggleButton value="com">Completed</ToggleButton>
                        <ToggleButton value="noncom">Not Completed</ToggleButton>
                    </ToggleButtonGroup>

                    {/* Render Todo Items */}
                    {todos.length === 0 ? (
                        <Typography color="textSecondary" sx={{ my: 3 }}>
                            No todos yet. Add one below! 🎯
                        </Typography>
                    ) : (
                        todos.map((todo) => (
                            <Todo key={todo.id} todo={todo} />
                        ))
                    )}

                    {/* Add New Todo */}
                    <Grid container sx={{ mt: 2 }} spacing={2}>
                        <Grid item xs={8}>
                            <TextField
                                value={inputTitle}
                                onChange={(e) => setInputTitle(e.target.value)}
                                onKeyPress={handleKeyPress}
                                label="Add your task..."
                                variant="filled"
                                fullWidth
                                sx={{
                                    '& .MuiFilledInput-underline.Mui-focused:after': {
                                        borderBottomColor: '#292d3e',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Button
                                variant="contained"
                                endIcon={<SendIcon />}
                                onClick={handleAddClick}
                                disabled={inputTitle.trim() === ''}
                                fullWidth
                                sx={{
                                    padding: 1.2,
                                    background: 'rgb(41, 45, 62)',
                                    height: '100%'
                                }}
                            >
                                Add
                            </Button>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </Container>
    );
};

export default TodoList;