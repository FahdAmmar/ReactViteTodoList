import { useState } from "react";

// Components
import Todo from "./Todo";


//Material UI components
import { Container, Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ButtonGroup from '@mui/material/ButtonGroup';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

//uuid library
import { v4 as uuid } from 'uuid';


import { TodosContext } from "../contexts/TodosContext";
import { useContext } from "react";



const TodoList = () => {

    const { todos, setTodos } = useContext(TodosContext);
    const [inputTitle, setInputTitle] = useState("")

    const todosjsx = todos.map((item) => <Todo key={item.id} todolist={item} handleCheck={handleCheckclick} />)


    function handleAddclick() {
        const newTodo = { id: uuid(), title: inputTitle, completed: false }
        const updapteTodos = [...todos, newTodo]
        setTodos(updapteTodos)
        setInputTitle("")
    }

    function handleCheckclick(todoid) {
        const updatedTodos = todos.map((item) => {
            if (item.id === todoid) {
                return { ...item, completed: !item.completed };
            }
            return item;
        });
        setTodos(updatedTodos);
    }



    return (
            <Container className="  mx-auto text-center" maxWidth="sm" sx={{ mt: 5 }} >
                <Card sx={{ minWidth: 275 }} >
                    <CardContent >
                        <Typography className="text-gray-500" variant="h5">ToDo List ✅</Typography>
                        <Divider sx={{ my: 2 }} />





                        {/* start Buttons filter*/}
                        <ButtonGroup variant="outlined" color="danger">
                            <Button>All</Button>
                            <Button>Complate</Button>
                            <Button>Not complated</Button>
                        </ButtonGroup>
                        {/* End Buttons filter*/}


                        {/* Start Render Todo items*/}
                        {todosjsx}
                        {/* End Render Todo items*/}



                        {/*Start Add new Todo*/}
                        <Grid container sx={{ mt: 2, display: "flex", alignItems: "center", justifyContent: "center", maxWidth: "885" }} >
                            <Grid size={4}>   <Button sx={{ padding: ".8rem", background: "rgb(41, 45, 62)" }} variant="contained" endIcon={<SendIcon />} onClick={() => { handleAddclick() }}>
                                Add
                            </Button></Grid>
                            <Grid size={8}>
                                <TextField value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} id="filled-basic" label="Add your list" variant="filled" sx={{
                                    width: '90%', // للـ Filled: إزالة الخط التحتي الأزرق عند التركيز
                                    '& .MuiFilledInput-underline.Mui-focused:after': {
                                        borderBottomColor: '#292d3e',
                                    },
                                    // تغيير لون التحديد (Selection)
                                    '& .MuiInputBase-input': {
                                        color: '#292d3e',
                                    },
                                }} />
                            </Grid>

                        </Grid>
                        {/*End Add new Todo*/}


                    </CardContent>
                </Card >
            </Container >
        );
    }

    export default TodoList;