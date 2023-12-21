import Button from "../Button/Button";
import classes from "./DownloadImage.module.css";

const DownloadImage = ({ imageSrc }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = "downloaded-image.jpg";
    link.click();
  };

  return (
    <>
      {imageSrc ? (
        <div className={classes.downloadContainer}>
          <img
            src={imageSrc}
            alt="Selected Cover"
            style={{ height: "450px" }}
          />
          <Button onClick={handleDownload}>Download</Button>
        </div>
      ) : (
        <h2>Image not found...</h2>
      )}
    </>
  );
};

export default DownloadImage;
