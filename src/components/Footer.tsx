import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="footer">        
      <img src="src/img/logo.png"></img>
        <section className="footer-menu">
          <Link to="./Brands" className="footer-link">BRANDS</Link>
          <Link to="/" className="footer-link">STORE</Link>
          <Link to="./About" className="footer-link">ABOUT</Link>
          <Link to="/" className="footer-link">CONTACT</Link>
          <Link to="/" className="footer-link">STYLING GALLERY</Link>
       </section>
        <div className="footer-company">
          <p>상호 : 주식회사 카라한 대표이사 : 한창민</p>
          <br />
          <p>본점 소재지 : (13217) 경기도 성남시 중원구 갈마치로 215, A동 307호</p>
          <p>(상대원동, 금강펜테리움IT타워)</p>
          <p>고객센터 : 1688-8292</p>
          <br />
          <p>곤지암 물류센터 : (12811) 경기도 광주시 도척면 도척로 76-55</p>
          <p>물류센터 : 070-4800-6258</p>
        </div></div>
        <p className='copyright'>COPYRIGHT(C) CARAHAN Inc. ALL RIGHT RESERVED.</p>
    </footer>
  );
};

export default Footer;
