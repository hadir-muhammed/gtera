import React, { useState } from "react";
import { Button, Progress } from "antd";
import { ReactComponent as GteraLogo } from "../../images/Gtera-Logo.svg";
import { ReactComponent as Sandwatch } from "../../images/sandwatch.svg";
import { ReactComponent as Message } from "../../images/message.svg";
import { ReactComponent as Group } from "../../images/Group.svg";
import ContactUs from "../ContactUs/ContactUs";
import "./Home.css";

export default function Home() {
  const [showContactUs, setShowContactUs] = useState(false);

  const showContactUsDrawer = (value: boolean) => {
    setShowContactUs(value);
  };
  return (
    <div className="home-page">
      <div className="home-page-body">
        <GteraLogo />
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
        <Group />
        <span className="footer-text">
          All rights reserved to Gtera Solutions Company.2021
        </span>
      </div>
      <ContactUs
        drawerIsShown={showContactUs}
        showDrawer={showContactUsDrawer}
      />
    </div>
  );
}
