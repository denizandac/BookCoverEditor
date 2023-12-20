import React, { useRef, useState, useEffect } from "react";

const TextBox = ({ text }) => {
  const textBoxRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const left = e.clientX - offset.x;
        const top = e.clientY - offset.y;

        const parentRect =
          textBoxRef.current.parentElement.getBoundingClientRect();
        const rect = textBoxRef.current.getBoundingClientRect();

        const minX = parentRect.left;
        const minY = parentRect.top;
        const maxX = parentRect.right - rect.width;
        const maxY = parentRect.bottom - rect.height;

        textBoxRef.current.style.left = `${Math.min(
          Math.max(left, minX),
          maxX
        )}px`;
        textBoxRef.current.style.top = `${Math.min(
          Math.max(top, minY),
          maxY
        )}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging, offset]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = textBoxRef.current.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
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
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <h2>{text}</h2>
    </div>
  );
};

export default TextBox;
