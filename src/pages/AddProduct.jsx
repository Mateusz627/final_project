import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function AddProduct() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stockCount, setStockCount] = useState("");

    const navigate = useNavigate();

    async function handleAddProduct(event) {
        event.preventDefault();
        const product = await addProduct({
            name,
            description,
            price,
            stockCount,
        });
        navigate(`/product/${product.id}`);
    }

    async function addProduct(data) {
        const response = await fetch("http://localhost:3000/products", {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        return response.json();
    }

    return (
        <h1>Dodaj produkt </h1>
        <Grid item xs={12} md={8}>
            <Typography sx={{ mb: 3 }} variant="h2" component="h1">
                Add new product
            </Typography>
            <form
                onSubmit={handleAddProduct}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 15,
                }}
            >
                <div>
                    <TextField
                        id="name"
                        name="name"
                        label="Name"
                        variant="filled"
                        fullWidth
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        id="description"
                        name="description"
                        label="Description"
                        variant="filled"
                        fullWidth
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        multiline
                    />
                </div>
                <div>
                    <TextField
                        id="price"
                        name="price"
                        label="Price"
                        variant="filled"
                        fullWidth
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                        type="number"
                    />
                </div>
                <div>
                    <TextField
                        id="stockCount"
                        name="stockCount"
                        label="Stock count"
                        variant="filled"
                        fullWidth
                        value={stockCount}
                        onChange={(event) => setStockCount(event.target.value)}
                        type="number"
                    />
                </div>
                <Button
                    sx={{ alignSelf: "flex-end" }}
                    variant="contained"
                    type="submit"
                >
                    Add product
                </Button>
            </form>
        </Grid>
    );
}

export default AddProduct;