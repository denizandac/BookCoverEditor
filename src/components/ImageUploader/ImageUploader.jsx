import { useState, useRef } from "react";
import TextBox from "../TextBox/TextBox";
import TextBoxModal from "../TextBoxModal/TextBoxModal";
import classes from "./ImageUploader.module.css";
import html2canvas from "html2canvas";
import Button from "../Button/Button";

const ImageUploader = ({ onUpload, book, setActiveTab }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTextBox, setSelectedTextBox] = useState(null);
  const [newTitleStyle, setNewTitleStyle] = useState({
    fontSize: 16,
    color: "black",
    letterSpacing: 0,
  });
  const [newAuthorStyle, setNewAuthorStyle] = useState({
    fontSize: 16,
    color: "black",
    letterSpacing: 0,
  });
  const draggableAreaRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleTextBoxClick = (id) => {
    setSelectedTextBox(id);
  };

  const updateTitleHandler = (newStyle) => {
    setNewTitleStyle(newStyle);
  };

  const updateAuthorHandler = (newStyle) => {
    setNewAuthorStyle(newStyle);
  };

  const setFinalImage = () => {
    const element = document.getElementById("finalImage");
    html2canvas(element).then((canvas) => {
      const dataURL = canvas.toDataURL();
      setSelectedImage(dataURL);
      onUpload(dataURL);
      setActiveTab(2);
    });
  };

  return (
    <div className={classes.imageUploader}>
      <input
        className={classes.input}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {selectedImage && (
        <>
          <div className={classes.selectedImage}>
            {selectedTextBox === 2 ? (
              <TextBoxModal onUpdateStyle={updateAuthorHandler} />
            ) : (
              <TextBoxModal onUpdateStyle={updateTitleHandler} />
            )}
            <div id="finalImage">
              <img
                ref={draggableAreaRef}
                src={selectedImage}
                alt="Selected Cover"
                style={{ height: "450px" }}
              />
              <TextBox
                id={1}
                draggableAreaRef={draggableAreaRef}
                text={book ? book.title : "title"}
                onClick={() => handleTextBoxClick(1)}
                style={{
                  border: selectedTextBox === 1 ? "1px solid red" : "",
                  ...newTitleStyle,
                }}
              />
              <TextBox
                id={2}
                draggableAreaRef={draggableAreaRef}
                text={book ? book.author : "author"}
                onClick={() => handleTextBoxClick(2)}
                style={{
                  border: selectedTextBox === 2 ? "1px solid red" : "",
                  ...newAuthorStyle,
                }}
              />
            </div>
          </div>
          <Button onClick={setFinalImage}>Generate Final Image</Button>
        </>
      )}
    </div>
  );
};

export default ImageUploader;
