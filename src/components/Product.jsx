import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch} from "react-redux";


import imagePlaceholder from "../assets/david_beckham.jpg";
import {addToCart} from "../redux/cartSlice.jsx";

export default function MediaCard({ name, description, image, price, id }) {

    const dispatch = useDispatch()
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    return (

        <Card sx={{ maxWidth: 345, flexGrow: 1 }} className=" media-card">
            <CardMedia
                className="img"
                sx={{ height: 200 }}
                image={imagePlaceholder}
                title={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: {price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => handleAddToCart({
                    name,price,description,image,id
                })} size="small">Dodaj do koszyka</Button>
            </CardActions>
        </Card>
    );
}
