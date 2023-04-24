import Slide from "./Slide"
import Footer from "./Footer"
import { Link } from "react-router-dom"

const Home = () => {

  const homeGalleryImgsArr = ["../src/img/v25 (5).jpg", "../src/img/피네.jpg", "../src/img/프로피조리도구 (20).jpg", "../src/img/오일병 (6).jpg", "../src/img/주물 (8).jpg", "../src/img/저울&타이머 (3).jpg"]

  const homeGalleryImgs = homeGalleryImgsArr.map(img => <Link to="../Brands"><img className="home-gallery-img" src={img}/></Link>)

  return (
    <div className="home">
      <Slide />
      <div className="home-gallery">
        <p>Styling Gallery</p>
        <p></p>
        <p></p>
        {homeGalleryImgs}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
