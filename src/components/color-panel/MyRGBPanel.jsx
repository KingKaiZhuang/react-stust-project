import React from "react";
import { useState } from "react";
import MySlider from "../color-panel/MySlider";
import "../../assets/scss/_ColorPanel.scss";

export default function MyRGBPanel() {
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(128);

  const updateR = (value) => {
    setR(value);
  };

  const updateG = (value) => {
    setG(value);
  };

  const updateB = (value) => {
    setB(value);
  };

  return (
    <>
      <div className="class-title">
        <h2
          style={{
            color: `rgb(${r}, ${g}, ${b})`,
          }}
        >
          5b0g0024 莊鈞凱 Slider
        </h2>
      </div>
      <div className="color-group">
        <div
          className="color-item"
          style={{
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
          }}
        ></div>
        <div>
          <span>R: </span>
          <MySlider onChange={updateR} />
          <span>G: </span>
          <MySlider onChange={updateG} />
          <span>B: </span>
          <MySlider onChange={updateB} />
        </div>
      </div>
    </>
  );
}
