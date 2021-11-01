import React from 'react';
import logo from "../../assets/images/Gtera-Logo.svg";
import './nav.scss';
import Switcher from '../LanguageSwitcher/Switcher';

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Lang Switcher */}
                    {/* <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Switcher className="nav-link active" />
                            </li>
                        </ul>
                    </div> */}
                </div> 
            </nav>
        </>
    )
}


export default Nav;