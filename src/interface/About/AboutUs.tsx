import React from "react";
import { ReactComponent as AboutImage } from "../../assets/images/about-img.svg";
import { ReactComponent as Cloud } from "../../assets/images/cloud.svg";
import { ReactComponent as Smartphone } from "../../assets/images/smartphone.svg";
import { ReactComponent as Smartwatch } from "../../assets/images/smartwatch.svg";
import { ReactComponent as Laptop } from "../../assets/images/laptop.svg";
// import { ReactComponent as Loupe } from ".../../assets/images/loupe.svg";
import "./About.scss";

export default function AboutUs() {
  return (
    <div id="about">
      <div className="about-us">
        <AboutImage />
        <div className="about-us-content">
          <span className="title">We Are Gtera.</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos
            adipisci, iusto repellendus quibusdam illum eligendi, modi similique
            iste incidunt, blanditiis rerum corrupti voluptates enim? Iusto illo
            laborum ipsum laboriosam?
          </p>
        </div>
      </div>
      <div className="description">
        <span className="title">
          What We Do<span className="sign"> ?</span>
        </span>
        <p>
          Donec tincidunt mollis ipsum quis efficitur. Praesent pharetra
          fermentum lacus. Pellentesque tempor laoreet ultrices. Donec malesuada
          aliquam sapien.
        </p>
        <div>
          <Laptop />
          <Smartphone />
          <Smartwatch />
          {/* <Loupe /> */}
          <Cloud />
        </div>
      </div>
    </div>
  );
}
