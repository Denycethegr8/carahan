import Slide from "./Slide"
import Footer from "./Footer"
import { Link } from "react-router-dom"

const Home = () => {

  const homeGalleryImgsArr = ["../src/img/img (1).jpg", "../src/img/img (6).jpg", "../src/img/img (49).jpg", "../src/img/img (230).jpg", "../src/img/img (185).jpg", "../src/img/img (151).jpg"]

  const homeGalleryImgs = homeGalleryImgsArr.map(img => <Link to="../Brands"><img className="home-gallery-img" src={img}/></Link>)

  return (
    <div className="home">
      <Slide />
      <section className="page-center">
        <p className="styling-gallery">Styling Gallery</p>
        <div className="home-gallery">
          {homeGalleryImgs}
        </div>
        <Link to="../Brands"><p className="view-more">VIEW MORE</p></Link>
      </section>
      <section>
        <div className="home-intro">
        <div className="home-intro-imgs">
          <img className="intro-img1" src="../src/img/img (10).jpg" />
          <img className="intro-img2" src="../src/img/img (100).jpg" />
        </div>
          <p>
              우리는 가치있는 상품을 개발, 유통하는 전문가 입니다.<br />
              전세계의 다양한 디자이너, 브랜드, 공장과의 협력을 통해 <br />
              고객이 원하는 라이프스타일을 만들수 있도록 
              최상의 제품, 만족스러운 가격을 제공합니다.
          </p>
          </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
