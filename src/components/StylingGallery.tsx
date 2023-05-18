import Footer from "./Footer";

const StylingGallery = () => {
  const imageFiles = [];
  for (let i = 1; i <= 248; i++) {
    imageFiles.push(`../src/img/img (${i}).jpg`);
  }

  return (
    <div>
      <div className="page-center">
        <h2>Styling Gallery</h2>
        <p style={{fontFamily: 'Nanum Gothic'}}>이미지 갤러리를 통해 제품을 발견하고 스타일링 영감을 찾으세요.</p>
        <div className="gallery-div">
        {imageFiles.map((filename, index) => (
          <img src={filename} alt={`Image ${index + 1}`} key={index} className="gallery-img" />
        ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StylingGallery;
