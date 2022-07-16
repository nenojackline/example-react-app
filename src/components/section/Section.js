import "./Section.css";
import SideA from "./SideA";
import { useState } from "react";

function Section() {
  return (
    <div className="section ">
      <SideA />
      <SideB />
    </div>
  );
}

const SideB = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Text");

  const style = {
    fontSize: "2rem",
    color: "blue"
  };

  //handle click listener butttons
  const handleClick = () => {
    if (count === 10) setText("Stop the click");
    setCount(count + 1);
  };

  return (
    <div className="side sideB" style={style}>
      <h4>
        {text} {count}
      </h4>
      <input type="button" value="Click me" onClick={handleClick} />
    </div>
  );
};

export default Section;
