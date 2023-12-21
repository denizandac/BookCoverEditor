import React, { useRef, useState, useEffect } from "react";

const TextBox = ({ id, text, onTextBoxDragEnd }) => {
  const textBoxRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDraggingEnded, setIsDraggingEnded] = useState(false);
  const [style, setStyle] = useState({
    fontSize: 16,
    color: "black",
    letterSpacing: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const left = e.clientX - offset.x;
        const top = e.clientY - offset.y;

        textBoxRef.current.style.left = `${left}px`;
        textBoxRef.current.style.top = `${top}px`;
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsDraggingEnded(true);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, offset]);

  useEffect(() => {
    if (isDraggingEnded) {
      onTextBoxDragEnd && onTextBoxDragEnd(textBoxRef.current);
      setIsDraggingEnded(false);
    }
  }, [isDraggingEnded, onTextBoxDragEnd]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = textBoxRef.current.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const updateStyle = ({ fontSize, color, letterSpacing }) => {
    setStyle({ fontSize, color, letterSpacing });
  };

  return (
    <div
      ref={textBoxRef}
      style={{
        position: "absolute",
        padding: "5px",
        backgroundColor: "transparent",
        cursor: "grab",
        userSelect: "none",
        border: "1px solid black",
        fontSize: `${style.fontSize}px`,
        color: style.color,
        letterSpacing: `${style.letterSpacing}px`,
      }}
      onMouseDown={handleMouseDown}
    >
      <h2>{text}</h2>
    </div>
  );
};

export default TextBox;
