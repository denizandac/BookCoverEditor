import { useState } from "react";
import TextBox from "../TextBox/TextBox";

const ImageUploader = ({ onUpload, book }) => {
  const [selectedImage, setSelectedImage] = useState(null);

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
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
        <>
          <TextBox text={book ? book.title : "title"} />
          <TextBox text={book ? book.author : "author"} />
          <img
            src={selectedImage}
            alt="Selected Cover"
            style={{ maxWidth: "100%" }}
          />
        </>
      )}
    </div>
  );
};

export default ImageUploader;
