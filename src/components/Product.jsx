import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import imagePlaceholder from '../assets/david_beckham.jpg';
import { addToCart } from '../redux/cartSlice.jsx';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MediaCard({ name, description, image, price, id }) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        handleClick(); // Dodajemy produkt do koszyka i wyświetlamy Snackbar
    };

    return (
        <Card sx={{ maxWidth: 345, flexGrow: 1 }} className="media-card">
            <CardMedia
                className="img"
                sx={{ height: 200 }}
                image={image || imagePlaceholder} // Użyj imagePlaceholder, jeśli image jest puste lub niezdefiniowane
                title={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Cena: {price} zł
                </Typography>
            </CardContent>
            <CardActions>
                <Stack spacing={2} sx={{ width: '100%' }}>
                    <Button onClick={() => handleAddToCart({ name, price, description, image, id })} size="small">
                        Dodaj do koszyka
                    </Button>
                    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Produkt został dodany do koszyka!
                        </Alert>
                    </Snackbar>
                </Stack>
            </CardActions>
        </Card>
    );
}
