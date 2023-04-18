import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {
    const sliderSettings = {
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      fade:true,
      autoplaySpeed: 3000,
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
      <div className="slide">
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
  
  export default Slide;
  