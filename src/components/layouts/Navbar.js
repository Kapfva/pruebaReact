import React from "react";
import { Link } from "react-router-dom";

import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid mx-auto">
                    <a className="navbar-brand p-2 logo " href="#">
                        {/* col-sm-10 col-md-7 col-lg-9 col-xl-7 col-xxl-7 */}
                        <img
                            className=" img-fluid rounded float-left logo-nav"
                            src={process.env.PUBLIC_URL+'/logo_petroblast.png'}
                            alt="Petroblast S.A.S"
                            to="/Home"
                        />
                    </a>
                    <button
                        className="navbar-toggler m-2"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse col-md-5 col-lg-5"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav m-2 d-flex align-items-center">
                            <li className="nav-item flex-fill">
                                {
                                    <Link
                                        className="nav-link "
                                        activeclass="active"
                                        to="About"
                                    >
                                        ¿Quiénes somos?
                                    </Link>
                                }
                            </li>
                            <li className="nav-item">
                                {
                                    <Link
                                        className="nav-link"
                                        activeclass=""
                                        to="Services"
                                    >
                                        Servicios
                                    </Link>
                                }
                            </li>
                            <li className="nav-item ">
                                {
                                    <Link
                                        className="nav-link"
                                        activeclass=""
                                        to="Jobs"
                                    >
                                        Trabajos
                                    </Link>
                                }
                            </li>
                            <li className="nav-item ">
                                {
                                    <Link
                                        className="nav-link"
                                        activeclass=""
                                        to="Contact"
                                    >
                                        Contacto
                                    </Link>
                                }
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
