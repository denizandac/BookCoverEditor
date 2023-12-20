const DownloadImage = ({ imageSrc }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = "downloaded-image.jpg";
    link.click();
  };

  return (
    <div>
      <img src={imageSrc} alt="Book Cover" style={{ maxWidth: "100%" }} />
      <button onClick={handleDownload}>Download Image</button>
    </div>
  );
};

export default DownloadImage;
