import Footer from "./Footer";

const StylingGallery = () => {
  const imageFiles = [];
  for (let i = 1; i <= 252; i++) {
    imageFiles.push(`../src/img/img (${i}).jpg`);
  }

  return (
    <div>
      <div className="page-center">
        <div className="styling-gallery-text-div">
          <h2>Styling Gallery</h2>
          <p style={{fontFamily: 'Nanum Gothic'}}>이미지 갤러리를 통해 제품을 발견하고 스타일링 영감을 찾으세요.</p>
        </div>
        <div className="gallery-div">
        {imageFiles.map((filename, index) => (
          <a href={filename} target="_blank"><img src={filename} alt={`Image ${index + 1}`} key={index} className="gallery-img" /></a>
        ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StylingGallery;
