import React from "react";
import { Button } from "antd";
import { ReactComponent as IntroIcon } from "../../images/IntroIcon.svg";
import "./Intro.css";

export default function Intro() {
  return (
    <div id="intro">
      <div className="content">
        <span className="main-title">
          Gtera<span className="sign">,</span> <br /> Tech Years Ahead
        </span>
        <p className="intro-content">
          Ut faucibus vehicula nibh non placerat. Cras pellentesque efficitur mi
          sit amet suscipit. Morbi eget lacus convallis, volutpat arcu at, ali
          orci etiam nunc nisl, iaculis id augue quis, sodales ferme ante. Nulla
          pretium felis risus, at ornare justo et.
        </p>
        <Button className="start-project-btn gtera-btn">
          <span className="btn-text"> Start A Project</span>
        </Button>
      </div>
      <IntroIcon />
    </div>
  );
}
