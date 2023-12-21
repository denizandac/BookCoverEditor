import React, { useState } from "react";

const TexBoxModal = ({ onUpdateStyle, id }) => {
  const [fontSize, setFontSize] = useState("16px");
  const [color, setColor] = useState("black");
  const [letterSpacing, setLetterSpacing] = useState("normal");

  const handleUpdateStyle = () => {
    // Güncellenmiş stil bilgilerini TextBox bileşenine ilet
    onUpdateStyle({
      fontSize,
      color,
      letterSpacing,
    });

    // Modal'ı kapat
    // Modal'ı kapatma işlemleri burada yapılabilir
  };

  return (
    <div className="modal">
      <h2>Text Style Settings</h2>
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
