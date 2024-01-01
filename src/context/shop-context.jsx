import React, { createContext, useState } from "react";
import { Products } from "../Products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < Products.length + 1; i++) {//start with 1 because the first id in Products array
        cart[i] = 0;
    }
    return cart;
}

function ShopContextProvider(props) {//כאן נגדיר מה שקשור לסייטס והלוגיקה של הפרוייקט שלנו

    const [cartItems, setCartItems] = useState(getDefaultCart());


    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = Products.find((product) => product.id === Number(item));
                totalAmount+= cartItems[item]*itemInfo.price;
            }

            /*
            1:0
            2:0
            3:0
            ...
            יוצרים רשימה שהתז זה האינדקס והכמות זה הערך -ואז נוכל להתאים לתז של מוצרים שלנו
            */


        }
   return totalAmount;
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => { //(prev) = means the previos value of itemId
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 })); //...prev means we want to keep it like it was, just change the value -1
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
    }

    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount ,getTotalCartAmount};

    console.log(cartItems);

    return (

        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export { ShopContextProvider }
