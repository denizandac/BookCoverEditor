import { useState } from "react";
import TextBox from "../TextBox/TextBox";
import TextBoxModal from "../TextBoxModal/TextBoxModal";
import classes from "./ImageUploader.module.css";

const ImageUploader = ({ onUpload, book }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const doNothing = () => {};
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
        onUpload(reader.result);
      };

      reader.readAsDataURL(file);
    }
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
        <div className={classes.selectedImage}>
          <TextBoxModal onUpdateStyle={doNothing} />
          <div>
            <TextBox text={book ? book.title : "title"} />
            <TextBox text={book ? book.author : "author"} />
            <img
              src={selectedImage}
              alt="Selected Cover"
              style={{ height: "450px" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
