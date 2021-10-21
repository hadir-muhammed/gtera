import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Header from "../Header/Header";

function AppRoutes() {
  return (
    <BrowserRouter>
      <div className="gtera-container">
        <Header />
        <Route path="/" component={LandingPage} />
        <Route path="/about" component={LandingPage} />
        <Route path="/careers" component={LandingPage} />
        <Route path="/services" component={LandingPage} />
        <Route path="/contact" component={LandingPage} />
      </div>
    </BrowserRouter>
  );
}

export default AppRoutes;
