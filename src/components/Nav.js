import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";



const Nav = (props) => {
    return (
        <div className="nav">
            <Link to="/">
                <img src={Logo} className="logoimg" alt="Logo"/>
            </Link>
            <Link to="/">
                <div>Sign in</div>
            </Link>
            <Link to="/">
                <div>Sign up</div>
            </Link>
        </div>
    );
};

export default Nav;