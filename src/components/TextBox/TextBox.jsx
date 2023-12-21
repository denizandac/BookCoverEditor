import React, { useRef, useState, useEffect } from "react";

const TextBox = ({
  text,
  onTextBoxDragEnd,
  draggableAreaRef,
  onClick,
  style,
}) => {
  const textBoxRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDraggingEnded, setIsDraggingEnded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const left = e.clientX - offset.x;
        const top = e.clientY - offset.y;

        const draggableAreaRect =
          draggableAreaRef.current.getBoundingClientRect();
        const textBoxRect = textBoxRef.current.getBoundingClientRect();

        const newLeft = Math.min(
          Math.max(left, draggableAreaRect.left),
          draggableAreaRect.right - textBoxRect.width
        );
        const newTop = Math.min(
          Math.max(top, draggableAreaRect.top),
          draggableAreaRect.bottom - textBoxRect.height
        );

        textBoxRef.current.style.left = `${newLeft}px`;
        textBoxRef.current.style.top = `${newTop}px`;
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
  }, [isDragging, offset, draggableAreaRef]);

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

  return (
    <div
      ref={textBoxRef}
      style={{
        position: "absolute",
        padding: "5px",
        backgroundColor: "transparent",
        cursor: "grab",
        userSelect: "none",
        fontSize: `${style.fontSize}px`,
        color: style.color,
        letterSpacing: `${style.letterSpacing}px`,
        ...style,
      }}
      onMouseDown={(e) => {
        onClick();
        handleMouseDown(e);
      }}
    >
      <h2>{text}</h2>
    </div>
  );
};

export default TextBox;
