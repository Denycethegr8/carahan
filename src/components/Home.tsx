import Slide from "./Slide"
import Footer from "./Footer"
import { Link } from "react-router-dom"

const Home = () => {

  const homeGalleryImgsArr = ["../src/img/v25 (5).jpg", "../src/img/피네 (2).jpg", "../src/img/프로피조리도구 (20).jpg", "../src/img/오일병 (6).jpg", "../src/img/주물 (8).jpg", "../src/img/가죽매트 (2).jpg"]

  const homeGalleryImgs = homeGalleryImgsArr.map(img => <Link to="../Brands"><img className="home-gallery-img" src={img}/></Link>)

  return (
    <div className="home">
      <Slide />
      <div className="home-flex">
        <p className="styling-gallery">Styling Gallery</p>
        <div className="home-gallery">
          {homeGalleryImgs}
        </div>
        <Link to="../Brands"><p className="view-more">VIEW MORE</p></Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
