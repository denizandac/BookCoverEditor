import React, { useState } from "react";
import classes from "./TextBoxModal.module.css";

const TexBoxModal = ({ onUpdateStyle, id }) => {
  const [selectedOption, setSelectedOption] = useState("title");
  const [fontSize, setFontSize] = useState("16px");
  const [color, setColor] = useState("black");
  const [letterSpacing, setLetterSpacing] = useState("normal");

  const handleUpdateStyle = () => {
    onUpdateStyle({
      fontSize,
      color,
      letterSpacing,
      selectedOption,
    });
  };

  return (
    <div className={classes.modal}>
      <h2>Select a textbox and style the text</h2>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="title"
            checked={selectedOption === "title"}
            onChange={() => setSelectedOption("title")}
          />
          Title
        </label>
        <label>
          <input
            type="radio"
            value="author"
            checked={selectedOption === "author"}
            onChange={() => setSelectedOption("author")}
          />
          Author
        </label>
      </div>
      <label>
        Font Size:
        <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
          <option value="14px">14px</option>
          <option value="16px">16px</option>
          <option value="18px">18px</option>
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

      <button onClick={handleUpdateStyle}>Apply Changes</button>
    </div>
  );
};

export default TexBoxModal;
