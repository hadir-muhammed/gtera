import React from "react";
import Intro from "../Intro/Intro";
import { Button } from "antd";
import { ReactComponent as GteraLogo } from "../../assets/images/Gtera-Logo.svg";
import Nav from "./Nav";
import "./header.scss";

export default function Header() {
  return (
    <header>
      <Nav />
      <div className="gtera-header">
        <div className="background-layer">
          <div className="header">
            <div className="gtera-logo">
              <GteraLogo />
            </div>
            <div className="navbar">
              <ul className="navbar-nav">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <Button>
                    {" "}
                    <a href="#join-our-team">Join Our Team</a>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <Intro />
        </div>
      </div>
    </header>
  );
}
