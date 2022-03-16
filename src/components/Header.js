import { Link } from "react-router-dom";
import Logo from "../img/logo2.png";
import Auth from "./auth";

const Header = () => {
    return (
        <div className="navigation">
            <div id="header">
                <Link to="/">
                    <img src={Logo} className="logoimg" alt="Logo" />
                </Link>
                <Auth /> 
            </div>
        </div>
    );
};

export default Header;