import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';



import imagePlaceholder from "../assets/david_beckham.jpg";

export default function MediaCard({ name, description, image, price }) {


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
                {/*<Typography variant="body2" color="text.secondary">*/}
                {/*    {description}*/}
                {/*</Typography>*/}
                <Typography variant="body2" color="text.secondary">
                    Price: {price}
                </Typography>
            </CardContent>
            <CardActions>
                {/*<Box*/}
                {/*    sx={{*/}
                {/*        '& > legend': { mt: 2 },*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <Typography component="legend">Controlled</Typography>*/}
                {/*    <Rating*/}
                {/*        name="simple-controlled"*/}
                {/*        value={value}*/}
                {/*        onChange={(event, newValue) => {*/}
                {/*            setValue(newValue);*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</Box>*/}
                <Button size="small">But now</Button>
            </CardActions>
        </Card>
    );
}
