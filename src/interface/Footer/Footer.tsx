import React from 'react';

import CallIcon from "../../assets/images/call_black.svg";
import LocationIcon from "../../assets/images/fmd_good.svg";
import LinkedIn from "../../assets/images/linkedin.svg";
import Twitter from "../../assets/images/twitter.svg";
import Facebook from "../../assets/images/facebook.svg";

import './footer.scss';
import useTranslations from '../../config/i18n/useTranslations';

const Footer = () => {
    const msgs = useTranslations();

    return (
        <footer className="container-fluid">
            <div className="row">
                <div className="col-sm-8">
                    <ul>
                        <li>
                            <img src={CallIcon} />
                            <div className="details">
                                <span>
                                    {msgs.footer.address}
                                </span>
                            </div>
                        </li >
                        <li>
                            <img src={LocationIcon} />
                            <div className="details">
                                <span>
                                    {msgs.footer.eg}
                                </span>
                                <span>
                                    {msgs.footer.qa}
                                </span>
                            </div>
                        </li >
                    </ul>
                </div>
                <div className="col-sm-4 social mt-auto">
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
                            &copy; {msgs.footer.cr}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;