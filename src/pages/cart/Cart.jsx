import React, { useContext } from "react";
import { Products } from "../../Products";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import "./cart.css"

function Cart() {

    const navigate = useNavigate();
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    return (
        <div className="cart">
            <div>
                <h1> Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {Products.map((pro) => {

                    if (cartItems[pro.id] !== 0) {
                        return <CartItem data={pro} />
                    }
                })}

            </div>

            {totalAmount > 0 ?
                <div className="checkout">
                    <p>Subtotal:{totalAmount} $</p>
                    <button onClick={() => navigate("/")}>Continue Shopping</button>
                    <button>Checkout</button>
                </div>
                : <h1>Your cart is Empty</h1>}

        </div>
    );
}

export default Cart;