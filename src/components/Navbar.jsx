import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {

    return (
        <nav
            // className="navbar is-primary"
            role="navigation"
        // aria-label="main navigation"
        >
            <div className="container">

                <div >
                    <div className="navbar-start">
                        <NavLink to="/">
                            Home
                        </NavLink>

                        <NavLink
                            to="/Attendance"
                        >
                            Atendimento
                        </NavLink>

                        <NavLink
                            to="/Kitchen"
                        >
                            Cozinha
                        </NavLink>

                        <NavLink
                            to="/Client"
                        >
                            Área do cliente
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};