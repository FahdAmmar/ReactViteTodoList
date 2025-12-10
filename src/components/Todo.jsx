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




function Todo({ todolist, handleCheck}) {

      function handleCheckclick() {
        handleCheck(todolist.id);
      }



    return (
        <Container className="  mx-auto text-center " maxWidth="sm" sx={{ mt: 2 }}>
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
                                            backgroundColor: "white", color: "green", border:
                                                "3px green solid"
                                        }}
                                    >          <CheckIcon fontSize="small" />
                                    </IconButton>
                                </Tooltip>

                                {/* زر التعديل - لون أزرق */}
                                <Tooltip title="change" arrow>
                                    <IconButton
                                        color="primary"
                                        // onClick={}
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
                                        // onClick={}
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