import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {
    const sliderSettings = {
      fade:true,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  
    const imgBrand = [
      {
        imgSrc: "./src/img/main1.png",
        name: "Moneuf",
      },
      {
        imgSrc: "./src/img/main2.jpg",
        name: "LUMI",
      },
      {
        imgSrc: "./src/img/main3.jpg",
        name: "MARI STEIGER",
      },
      {
        imgSrc: "./src/img/main4.jpg",
        name: "MARI STEIGER",
      }
    ];
  
    return (
      <div className="slide">
        <Slider {...sliderSettings}>
          {imgBrand.map((brand, index) => (
              <article className="article" key={index}>
                  <img id="main-img" src={brand.imgSrc}></img>
              </article>
          ))}
        </Slider>
      </div>
    );
  };

  
  export default Slide;
  