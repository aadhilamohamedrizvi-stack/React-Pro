import React, { createContext, useState } from 'react';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    // Your state and logic here
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    
    // Example context value
    const contextValue = {
        cart,
        setCart,
        products,
        setProducts
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;