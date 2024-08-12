import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul>
                <li> <NavLink to="/cruds/new" > Create </NavLink></li>
                <li> <NavLink to="/cruds"> CRUDs </NavLink></li>
                <li> <NavLink to="/cruds/grid-view"> grid view </NavLink></li>
                <li> <NavLink to="/cruds/list-view"> list-view </NavLink></li>
                <li> <NavLink to="/cruds"> CRUDs </NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;