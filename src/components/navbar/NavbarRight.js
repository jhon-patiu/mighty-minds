import React from "react";
import { Link } from "react-router-dom";

const NavbarRight = () => {
    return (
        <div className="nav-right">
            <Link to="/help-center">Help Center</Link>
            <span className="hr"></span>
            <Link to="/user-profile">Profile</Link>
        </div>
    );
};

export default NavbarRight;
