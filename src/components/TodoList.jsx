
//Material UI components
import { Container } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ButtonGroup from '@mui/material/ButtonGroup';


const TodoList = () => {
    return (
        <Container className="  mx-auto text-center " maxWidth="sm" sx={{ mt: 5 }}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography className="text-gray-500" variant="h5">ToDo List ✅</Typography>
                    <Divider sx={{ my: 2 }} />

                    {/* start Buttons filter*/}
                    <ButtonGroup  variant="outlined" color="danger"  aria-label="Basic button group">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    {/* End Buttons filter*/}
                </CardContent>
            </Card >
        </Container >
    );
}

export default TodoList;