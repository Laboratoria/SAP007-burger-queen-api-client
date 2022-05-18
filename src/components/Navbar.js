import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <nav
            // className="navbar is-primary"
            role="navigation"
        // aria-label="main navigation"
        >
            <div className="container">

                <div className={`navbar-menu ${isOpen && "is-active"}`}>
                    <div className="navbar-start">
                        <NavLink className="navbar-item" activeClassName="is-active" to="/">
                            Home
                        </NavLink>

                        <NavLink
                            className="navbar-item"
                            activeClassName="is-active"
                            to="/Attendance"
                        >
                            Atendimento
                        </NavLink>

                        <NavLink
                            className="navbar-item"
                            activeClassName="is-active"
                            to="/profile"
                        >
                            Perfil
                        </NavLink>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-white">Log in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};