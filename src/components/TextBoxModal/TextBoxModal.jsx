import React, { useState, useEffect } from "react";
import classes from "./TextBoxModal.module.css";

const TextBoxModal = ({ onUpdateStyle, onResetStyle }) => {
  const [fontSize, setFontSize] = useState("16px");
  const [color, setColor] = useState("black");
  const [letterSpacing, setLetterSpacing] = useState("normal");

  useEffect(() => {
    onUpdateStyle({
      fontSize,
      color,
      letterSpacing,
    });
  }, [fontSize, color, letterSpacing]);

  return (
    <div className={classes.modal}>
      <h2>Select a textbox and style the text</h2>
      <label>
        Font Size:
        <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
          <option value="14px">10px</option>
          <option value="16px">14px</option>
          <option value="18px">18px</option>
          <option value="22px">22px</option>
        </select>
      </label>

      <label>
        Color:
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="red">Red</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
      </label>

      <label>
        Letter Spacing:
        <select
          value={letterSpacing}
          onChange={(e) => setLetterSpacing(e.target.value)}
        >
          <option value="normal">Normal</option>
          <option value="2px">2px</option>
          <option value="4px">4px</option>
        </select>
      </label>
    </div>
  );
};

export default TextBoxModal;
