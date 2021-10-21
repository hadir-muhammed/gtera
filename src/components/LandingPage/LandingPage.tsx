import React from "react";
import About from "../About/AboutUs";
import Services from "../Services/Services";
import Careers from "../Careers/Careers";
import ContactUs from "../ContactUs/ContactUs";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <About />
      <Services />
      <Careers />
      <ContactUs />
    </div>
  );
}
