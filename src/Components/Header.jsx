import React from "react";

const Header = ()=>{
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="./src/assets/images/vimal-logo.png" width="40%" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Web Development</a></li>
                        <li><a className="dropdown-item" href="#">Mobile App Dev</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">E-commerce Dev</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Blog</a>
                    </li>
                </ul>
                <div>
                    <button className="btn btn-outline-success">Call Now</button>
                </div>
                
                </div>
            </div>
            </nav>
        </>
    )
};

export default Header;