import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <div className="">
        <div className="about-div">
          <div className="about-img-div">
            <img
              className="about-img"
              src="../src/img/about.jpg"
              alt="about image"
            />
          <p>
            카라한은 2006년에 설립된 이래로 제품 개발, 소싱, 마케팅 및 유통에
            이르기까지 다방면에서 전문성을 쌓았습니다.
            뛰어난 품질의 우수한 가치를 지닌 제품을 고객들에게 경쟁력 있는
            가격으로 제공합니다.
            소유욕을 불러일으키는 제품과 만족스러운 사용감을 주는 제품들을
            선보입니다.
          </p>
          </div>
          <div className="about-img-div">
            <img
              className="about-img"
              src="../src/img/about.jpg"
              alt="about image"
            />
            <p>
              ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Commodi sit omnis tempora, neque voluptates, officia laborum dolor
              qui distinctio consectetur alias necessitatibus! Nulla
              perferendis, ipsam autem atque ut minus expedita.
            </p>
          </div>
          <div className="about-img-div">
            <img
              className="about-img"
              src="../src/img/about.jpg"
              alt="about image"
            />
            <p>
              ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Commodi sit omnis tempora, neque voluptates, officia laborum dolor
              qui distinctio consectetur alias necessitatibus! Nulla
              perferendis, ipsam autem atque ut minus expedita.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
