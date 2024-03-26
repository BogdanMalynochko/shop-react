import React, { createContext, useState, useEffect } from 'react';
import { products } from '../products';

export const ShopContext = createContext(null);

const getDefaultCard = () => {
    let card = {};
    for (let i = 1; i < products.length + 1; i++) {
        card[i] = 0;
    }

    return card;
};

const ShopContextProvider = ({ children, ...props }) => {
    const [cardItems, setCardItems] = useState(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCartItems) {
            return JSON.parse(savedCartItems);
        } else {
            return getDefaultCard();
        }
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cardItems));
    }, [cardItems]);

    const addToCard = itemId => {
        setCardItems(prev => ({
            ...prev,
            [itemId]: prev[itemId] + 1,
        }));
    };

    const removeFromCard = itemId => {
        setCardItems(prev => ({
            ...prev,
            [itemId]: prev[itemId] - 1,
        }));
    };

    const updateCartItemCount = (newAmout, itemId) => {
        setCardItems(prev => ({
            ...prev,
            [itemId]: newAmout,
        }));
    };

    const getTotalCartAmount = () => {
        let total = 0;
        for (let i = 1; i < products.length + 1; i++) {
            total += cardItems[i] * products[i - 1].price;
        }

        return total;
    };

    const getTotalProductsAmount = () => {
        let totalProducts = 0;
        for (let i = 1; i < products.length + 1; i++) {
            totalProducts += cardItems[i];
        }

        return totalProducts;
    };

    return (
        <ShopContext.Provider
            value={{
                cardItems,
                addToCard,
                removeFromCard,
                updateCartItemCount,
                getTotalCartAmount,
                getTotalProductsAmount,
            }}
        >
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
