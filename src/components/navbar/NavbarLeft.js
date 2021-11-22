import React from "react";
import { Link } from "react-router-dom";

const NavbarLeft = () => {
    return (
        <div className="nav-left">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/classes">Classes</Link>
                </li>
                <li>
                    <Link to="/planner">Planner</Link>
                </li>
                <li>
                    <Link to="/school-data">School Data</Link>
                </li>
                <li>
                    <Link to="/library">Library</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavbarLeft;
