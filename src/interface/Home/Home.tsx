import React, { useState } from "react";

import ContactUs from "../ContactUs/ContactUs";
import Loading from "./Loading";
import "./Home.scss";

export default function Home() {
  const [showContactUs, setShowContactUs] = useState(false);

  const showContactUsDrawer = (value: boolean) => {
    setShowContactUs(value);
  };

  return (
    <div className="container h-100">
      <div className="row h-100">
        <Loading setShowContactUs={setShowContactUs} />

        <ContactUs
          drawerIsShown={showContactUs}
          showDrawer={showContactUsDrawer}
        />
      </div>
    </div>
  );
}
