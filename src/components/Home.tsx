import Slide from "./Slide"
import Footer from "./Footer"
import { Link } from "react-router-dom"

const Home = () => {

  const homeGalleryImgsArr = ["../src/img/img-hubatt (2).jpg", "../src/img/img-hubatt (2).jpg", "../src/img/img-hubatt (2).jpg", "../src/img/img-hubatt (2).jpg","../src/img/img-hubatt (2).jpg","../src/img/img-hubatt (2).jpg"]

  const homeGalleryImgs = homeGalleryImgsArr.map(img => <Link to="../Brands"><img className="home-gallery-img" src={img}/></Link>)

  return (
    <div className="home">
      <Slide />
      <div className="home-gallery">
        {homeGalleryImgs}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
