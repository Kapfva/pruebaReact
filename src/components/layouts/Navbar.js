import React from 'react';
// SMOOT SCROLL
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark fixed-top ">
				<div className="container-fluid ">
					<div className="d-flex flex-row">
						<Link className="navbar-brand  logo " to="/">
							{/* col-sm-10 col-md-7 col-lg-9 col-xl-7 col-xxl-7 */}
							<img
								className=" img-fluid rounded float-left logo-nav"
								src={process.env.PUBLIC_URL + '/logo_petroblast.webp'}
								alt="Petroblast S.A.S"
								to="/"
							/>
						</Link>
						<button
							className="navbar-toggler "
							type="button"
							data-toggle="collapse"
							data-target="#navbarNavAltMarkup"
							aria-controls="navbarNavAltMarkup"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
					</div>
					<div
						className="collapse navbar-collapse col-sm-4 col-md-4 col-lg-4"
						id="navbarNavAltMarkup"
					>
						<div className="navbar-nav d-flex align-items-left">
							<li className="nav-item flex-fill">
								{
									<Link
										className="nav-link "
										activeclassname="active active-Link"
										to="/about"
									>
										¿Quiénes somos?
									</Link>
								}
							</li>
							<li className="nav-item">
								{
									<Link
										className="nav-link"
										activeclassname="active-Link"
										to="/services"
									>
										Servicios
									</Link>
								}
							</li>
							<li className="nav-item ">
								{
									<Link className="nav-link" activeclassname="" to="/jobs">
										Trabajos
									</Link>
								}
							</li>
							<li className="nav-item ">
								{
									<Link className="nav-link" activeclassname="" to="/contact">
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
