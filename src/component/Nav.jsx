import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Nav.css";

function Nav(){

    return (
        <div className="navbar">
            <div className="links">
                <Link to="/"> Shop </Link>
                <Link to="cart"> 
                <ShoppingCart size={32}/>
                 </Link>
            </div>
        </div>
    );
}

export default Nav;

