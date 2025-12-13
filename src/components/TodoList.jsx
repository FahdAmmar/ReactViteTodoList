import {useState,useContext,useEffect } from "react";
//uuid library
import { v4 as uuid } from 'uuid';
// Components
import Todo from "./Todo";
import { TodosContext } from "../contexts/TodosContext";


//Material UI components
import { Container, Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ToggleButtonGroup from '@mui/material/ButtonGroup';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';


const TodoList = () => {

    const { todos, setTodos } = useContext(TodosContext);
    const [inputTitle, setInputTitle] = useState("")
    const [filter, setFilter] = useState("all");

    
    useEffect(() => {
        console.log("this is todos:");
        const storedTodos = JSON.parse(localStorage.getItem("todos"));
        setTodos(storedTodos || []);
    },[]);
    
    const checkedTodos = todos.filter((todo) => todo.completed);
    console.log("Checked todos:", checkedTodos);
    
    
    function handleAddclick() {
        if (inputTitle.trim() === "") {
            return;
        } else {2
            const newTodo = { id: uuid(), title: inputTitle, completed: false }
            const updapteTodos = [...todos, newTodo]
            setTodos(updapteTodos)
            localStorage.setItem("todos", JSON.stringify(updapteTodos));
            setInputTitle("")
        }
    }
    
    function handleCheckclick(todoid) {
        const updatedTodos = todos.map((item) => {
            if (item.id === todoid) {
                return { ...item, completed: !item.completed };
            }
            return item;
        });
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        
    }
    
   
    const complatedTodos = todos.filter((todo) => todo.completed);
    const noncomplatedTodos = todos.filter((todo) => !todo.completed);
    let allTodos=todos
    if (filter === "com") {
        allTodos = complatedTodos;
    } else if (filter === "noncom") {
        allTodos = noncomplatedTodos;
    }

    
    
    const todosjsx =allTodos.map((item) => <Todo key={item.id} todolist={item} handleCheck={handleCheckclick} />)

    return (
            <Container className="mx-auto text-center" maxWidth="sm" >
                <Card sx={{ minWidth: 350}} >
                    <CardContent >
                        <Typography className="text-gray-500" variant="h5">ToDo List ✅</Typography>
                        <Divider sx={{ my: 2 }} />





                        {/* start Buttons filter*/}
                        <ToggleButtonGroup exclusive value={filter} onClick={(e)=>setFilter(e.target.value)}  sx={{mb: 2 }}>
                            <ToggleButton value={"all"}>All</ToggleButton>
                            <ToggleButton value={'com'}>Complate</ToggleButton>
                            <ToggleButton value={'noncom'}>Not complated</ToggleButton>
                        </ToggleButtonGroup>
                        {/* End Buttons filter*/}


                        {/* Start Render Todo items*/}
                        {todosjsx}
                        {/* End Render Todo items*/}



                        {/*Start Add new Todo*/}
                        <Grid container sx={{ mt: 2, display: "flex", alignItems: "center", justifyContent: "center", maxWidth: "885" }} >
                            <Grid size={4}>   <Button sx={{ padding: ".8rem", background: "rgb(41, 45, 62)" }} variant="contained" endIcon={<SendIcon />} onClick={() => { handleAddclick() }}
                            disabled={inputTitle.trim() === "" ? true : false} color="red">
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