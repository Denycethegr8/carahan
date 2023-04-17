import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const sliderSettings = {
    slidesToScroll: 1,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const imgBrand = [
    {
      imgSrc: "./src/img/main1.png",
      name: "Moneuf",
    },
    {
      imgSrc: "./src/img/main2.jpg",
      name: "lUMI",
    },
    {
      imgSrc: "./src/img/main3.jpg",
      name: "MARI STEIGER",
    },
  ];

  return (
    <div className="home">
      <Slider {...sliderSettings}>
        {imgBrand.map((brand, index) => (
          <article className="article" key={index}>
            <div className="main-img-div">
              <img id="main-img" src={brand.imgSrc}></img>
            </div>
            <p className="main-item-desc">{brand.name}</p>
          </article>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
