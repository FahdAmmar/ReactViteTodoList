//Material UI components
import { Container } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import { IconButton, Tooltip, Box } from '@mui/material';
import { Delete as DeleteIcon, CheckCircle as CheckIcon, Edit as EditIcon } from '@mui/icons-material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';



import React from "react";
import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";




function Todo({ todolist, handleCheck }) {
    const { todos, setTodos } = useContext(TodosContext);
    const [open, setOpen] = React.useState(false);
    const [openDialog, setOpenDialog] =React.useState(false);
    const [inputTitle, setInputTitle] = React.useState('');

    function handleCheckclick() {
        // handleCheck(todolist.id);
        const updatedTodos = todos.map((item) => {
            if (item.id === todolist.id) {
                return { ...item, completed: !item.completed };
            }
            return item;
        });
        setTodos(updatedTodos);
    }

    function handleOpenDialogOne() {
        setOpen(true);
    }

    function handleCloseDialogOne() {
        setOpen(false);
    }

      function handleOpenDialogtwo() {
        setOpenDialog(true);

    }

    function handleCloseDialogtwo() {
        setOpenDialog(false);
    }



    function handleDeleteClick() {
        const updatedTodos = todos.filter((item) => item.id !== todolist.id);
        setTodos(updatedTodos);
        // setOpen(false);
    }

    function handleUpdateTile() {

        const updatedTodos=todos.map((item)=>{
            if(item.id===todolist.id){
                return{...item,title:inputTitle};
            }
            return item;
        });                      
        setTodos(updatedTodos);
        setInputTitle('');
        setOpenDialog(false);                                      
    }




    return (
        <Container className="  mx-auto text-center " maxWidth="sm" sx={{ mt: 2 }}>



            <Dialog open={openDialog} onClose={handleCloseDialogtwo}>
                <DialogTitle>Change Title</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                       Are you sure you want to edit this todo?
                    </DialogContentText>
                    <form  id="subscription-form">
                        <TextField value={inputTitle} onChange={(e) => setInputTitle(e.target.value)}
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="email"
                            label="New Title"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialogtwo}>Cancel</Button>
                    <Button type="submit" form="subscription-form" onClick={handleUpdateTile}>
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>



            <Dialog
                open={open}
                onClose={handleCloseDialogOne}
                slots={{
                    transition: 'Transition',
                }}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"❌Delete"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Are you sure you want to delete this todo?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialogOne}>Disagree</Button>
                    <Button onClick={handleDeleteClick}>Agree</Button>
                </DialogActions>
            </Dialog>

            <Card sx={{ Width: 275, backgroundColor: '#292d3e', color: 'white' }} className="hover:py-3">
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid size={8}>
                            <Typography sx={{ textAlign: "left" }}>{todolist.title}</Typography>
                        </Grid>
                        <Grid size={4}>
                            <ButtonGroup
                                variant="outlined"
                                aria-label="مجموعة أزرار الإجراءات"
                                sx={{
                                    borderRadius: 2,
                                    boxShadow: 1,
                                    '& .MuiButtonGroup-grouped': {
                                        borderColor: 'divider',
                                        minWidth: '45px', // حجم مناسب للأيقونات
                                        padding: '8px',
                                        '&:not(:last-of-type)': {
                                            borderRightColor: 'divider',
                                        },
                                    }
                                }}
                            >

                                {/* زر التأكيد - لون أخضر */}
                                <Tooltip title="check" arrow>
                                    <IconButton
                                        color="success"
                                        onClick={handleCheckclick}
                                        style={{
                                            backgroundColor: todolist.completed ? "green" : "white", color: todolist.completed ? 'white' : "green", border: "3px green solid",
                                        }}
                                    >          <CheckIcon fontSize="small" />
                                    </IconButton>
                                </Tooltip>

                                {/* زر التعديل - لون أزرق */}
                                <Tooltip title="change" arrow>
                                    <IconButton
                                        color="primary"
                                        onClick={handleOpenDialogtwo}
                                        style={{
                                            backgroundColor: "white", color: "blue", border:
                                                "3px blue solid"
                                        }}
                                    >
                                        <EditIcon fontSize="small" />
                                    </IconButton>
                                </Tooltip>


                                {/* زر الحذف - لون أحمر */}
                                <Tooltip title="delete" arrow>
                                    <IconButton
                                        color="error"
                                        onClick={handleOpenDialogOne}
                                        style={{
                                            backgroundColor: "white", color: "red", border:
                                                "3px red solid"
                                        }}
                                    >
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
                                </Tooltip>

                            </ButtonGroup>

                        </Grid>
                    </Grid>
                </CardContent>
            </Card >
        </Container >
    )

}

export default Todo;