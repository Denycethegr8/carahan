import { useState, useEffect, useRef } from "react";

const Home = () => {
  const [imgSrc, setImgSrc] = useState("src/img/main1.png");
  const [itemDesc, setItemDesc] = useState("MONEUF");
  const countRef = useRef(0);

  useEffect(() => {
      setTimeout(() => {
        switch (countRef.current) {
          case 0:
            setImgSrc("src/img/main1.png");
            setItemDesc("MONEUF");
            break;
          case 1:
            setImgSrc("src/img/main2.jpg");
            setItemDesc("LUMI");
            break;
          case 2:
            setImgSrc("src/img/main3.jpg");
            setItemDesc("MARI STEIGER");
            break;
          default:
            break;
        }
        
        countRef.current += 1;
      }, 1000);
  }, [countRef, imgSrc, itemDesc]);

  return (
    <div className="home">
      <article className="article">
        <div className="main-img-div">
          <img id="main-img" src={imgSrc}></img>
        </div>
        <p className="main-item-desc">{itemDesc}</p>
      </article>
    </div>
  );
};

export default Home;
