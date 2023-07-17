import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    const addToCart = (product, quantity) => {
        const newItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
        };

        setCartItems([...cartItems, newItem]);
        setTotal(total + product.price * quantity);
    };

    const removeFromCart = (itemId) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
        const removedItem = cartItems.find((item) => item.id === itemId);

        setCartItems(updatedCartItems);
        setTotal(total - removedItem.price * removedItem.quantity);
    };

    const updateQuantity = (itemId, newQuantity) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.id === itemId) {
                const priceDiff = item.price * (newQuantity - item.quantity);
                return { ...item, quantity: newQuantity, price: item.price + priceDiff };
            }
            return item;
        });

        setCartItems(updatedCartItems);
        setTotal(
            total +
            cartItems.find((item) => item.id === itemId).price *
            (newQuantity - cartItems.find((item) => item.id === itemId).quantity)
        );
    };

    const clearCart = () => {
        setCartItems([]);
        setTotal(0);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                total,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
