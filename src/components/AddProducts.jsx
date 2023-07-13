import React, { useState } from "react";

function AddProduct() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // W tym miejscu możesz dodać logikę obsługi wysyłania danych produktu do API lub bazy danych

        // Zresetuj formularz
        setName("");
        setDescription("");
        setPrice("");
    };

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>
                <br />
                <label>
                    Description:
                    <textarea
                        value={description}
                        onChange={handleDescriptionChange}
                    ></textarea>
                </label>
                <br />
                <label>
                    Price:
                    <input type="text" value={price} onChange={handlePriceChange} />
                </label>
                <br />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default AddProduct;
