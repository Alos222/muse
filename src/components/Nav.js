import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";



const Nav = (props) => {
    return (
        <div className="navigation">
            <div>
                <Link to="/">
                    <img src={Logo} className="logoimg" alt="Logo" />
                </Link>
            </div>
            <div id="auth_links">
                <Link to="/">
                    <div>Sign in</div>
                </Link>
                <Link to="/">
                    <div>Sign up</div>
                </Link>
            </div>
        </div>
    );
};

export default Nav;