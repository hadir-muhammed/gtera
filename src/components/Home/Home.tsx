import React, { useState } from "react";
import { Button, Progress } from "antd";
import { ReactComponent as GteraLogo } from "../../images/Gtera-Logo.svg";
import { ReactComponent as Sandwatch } from "../../images/sandwatch.svg";
import { ReactComponent as Message } from "../../images/message.svg";
import { ReactComponent as Group } from "../../images/Group.svg";
import { ReactComponent as CallIcon } from "../../images/call_black.svg";
import { ReactComponent as LocationIcon } from "../../images/fmd_good.svg";
import { ReactComponent as LinkedIn } from "../../images/linkedin.svg";
import { ReactComponent as Twitter } from "../../images/twitter.svg";
import { ReactComponent as Facebook } from "../../images/facebook.svg";

import ContactUs from "../ContactUs/ContactUs";
import "./Home.scss";

export default function Home() {
  const [showContactUs, setShowContactUs] = useState(false);

  const showContactUsDrawer = (value: boolean) => {
    setShowContactUs(value);
  };
  return (
    <div className="home-page">
      <div className="home-page-body">
        <div className="gtera-logo">
          <GteraLogo />
        </div>
        <div className="gtera-wrapper">
          <div className="waiting">
            <div>
              <div className="first-paragraph">
                <span>We are still</span>
              </div>
              <div className="paragraph-title">
                <span>Cooking Our Website...</span>
              </div>
              <div className="details">
                <span className="arrow">{`<`}</span>
                <span className="second-paragraph">
                  We are working on our website and going to launch it soon,
                  Stay Tuned.
                </span>
                <span className="arrow">{`/>`}</span>
              </div>
              <Button
                onClick={() => setShowContactUs(true)}
                className="contact-us-btn"
              >
                <Message />
                <span className="btn-text"> Contact Us</span>
              </Button>
            </div>
            <Progress
              strokeColor={{
                "0%": "#384B5E",
                "100%": "#EC5F60",
              }}
              percent={20}
            />
          </div>
          <div className="sandwatch-icon">
            <Sandwatch />
          </div>
        </div>
      </div>
      <div className="footer">
        <div>
          <div className="footer-info">
            <div>
              <CallIcon />
            </div>
            <div>
              <span className="desktop">
                Egypt: +20 1033 033 411 / Qatar: +974 3000 1629
              </span>
              <p className="mobile">Egypt: +20 1033 033 411</p>
              <p className="mobile">Qatar: +974 3000 1629</p>
            </div>
          </div>
          <div className="footer-info">
            <div>
              <LocationIcon />
            </div>
            <div>
              <p className="egypt-location">
                Egypt: 20 Greentowers Compound, 20 St., Smouha, Alexandria.
              </p>
              <p className="qatar-location">
                Qatar: Building 34, 319 St., Zone 69, Marina Twin Towers,
                Lusail.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="social-media-icons">
            <a href="ggoge.com" target="_blank">
              <LinkedIn />
            </a>
            <a href="google" target="_blank">
              <Facebook />
            </a>
            <a href="google" target="_blank">
              <Twitter />
            </a>
          </div>
          <div className="footer-rights-container">
            <Group />
            <span className="footer-rights">
              All rights reserved to Gtera Solutions Company.2021
            </span>
          </div>
        </div>
      </div>
      <ContactUs
        drawerIsShown={showContactUs}
        showDrawer={showContactUsDrawer}
      />
    </div>
  );
}
