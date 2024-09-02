import React from "react";
import {Link} from "react-router-dom";

function Header(){
    return (
        <header>
            <img src="./src/assets/images/logo.png"></img>
            <div className="vertical-line"></div>
            <h1>BATTERY CHARGE TRACKER</h1>
            <Link to="/about">
                <div className="links">About</div>
            </Link>

            <Link to="/">
                <div className="links">Home</div>
            </Link>
            
        </header>
    );
}

export default Header;