import "./Section.css";
import { useState } from "react";

function SideA() {
  const [bulb, lightBulb] = useState(false);

  //change light
  //const switchLights = lightBulb(true);

  return (
    <div className="side sideA ">
      <h4>Section A </h4>
      <input
        type="button"
        value={!bulb ? "Bulb off" : "bulb On"}
        onClick={() => lightBulb(true)}
      />
    </div>
  );
}

export default SideA;
