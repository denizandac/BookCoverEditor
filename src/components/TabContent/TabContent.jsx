import DownloadImage from "../DownloadImage/DownloadImage";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import ImageUploader from "../ImageUploader/ImageUploader";
import { useState } from "react";

const TabContent = ({ activeTab, setActiveTab }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  const bookChangeHandler = (book) => {
    setSelectedBook(book);
  };
  const imageUploadHandler = (image) => {
    setSelectedImage(image);
  };
  const ActiveTabHandler = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  return (
    <>
      {activeTab === 0 && <DropdownMenu onBookChange={bookChangeHandler} />}
      {activeTab === 1 && (
        <ImageUploader
          onUpload={imageUploadHandler}
          book={selectedBook ? selectedBook : null}
          setActiveTab={ActiveTabHandler}
        />
      )}
      {activeTab === 2 && <DownloadImage imageSrc={selectedImage} />}
    </>
  );
};

export default TabContent;
