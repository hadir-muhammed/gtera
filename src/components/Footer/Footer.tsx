import React from 'react';

import CallIcon from "../../assets/images/call_black.svg";
import LocationIcon from "../../assets/images/fmd_good.svg";
import LinkedIn from "../../assets/images/linkedin.svg";
import Twitter from "../../assets/images/twitter.svg";
import Facebook from "../../assets/images/facebook.svg";

import './footer.scss';

const Footer = () => {
    return (
        <footer className="container-fluid">
            <div className="row">
                <div className="col-8">
                    <ul>
                        <li>
                            <img src={CallIcon} />
                            <div className="details">
                                <span>
                                    Egypt: +20 1033 033 411 / Qatar: +974 3000 1629
                                </span>
                                <span>Egypt: +20 1033 033 411</span>
                                <span>Qatar: +974 3000 1629</span>
                            </div>
                        </li >
                        <li>
                            <img src={LocationIcon} />
                            <div className="details">
                                <span>
                                    Egypt: 20 Greentowers Compound, 20 St., Smouha, Alexandria.
                                </span>
                                <span>
                                    Qatar: Building 34, 319 St., Zone 69, Marina Twin Towers,
                                    Lusail.
                                </span>
                            </div>
                        </li >
                    </ul>
                </div>
                <div className="col-4 social">
                    <ul className="social-media">
                        <li>
                            <a href="ggoge.com" target="_blank">
                                <img src={LinkedIn} />
                            </a>
                        </li>
                        <li>
                            <a href="google" target="_blank">
                                <img src={Facebook} />
                            </a>
                        </li>
                        <li>
                            <a href="google" target="_blank">
                                <img src={Twitter} />
                            </a>
                        </li>
                    </ul>
                    <div className="footer-rights">
                        <span>
                            &copy; All rights reserved to Gtera Solutions Company.2021
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;