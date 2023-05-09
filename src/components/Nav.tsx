import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="./Home">
        <img className="company-logo" src="src/img/logo.png"></img>
      </Link>
      <Link to="./About" className="mobile-invis">
        ABOUT
      </Link>
      <div className="dropdown mobile-invis">
        <button className="dropbtn">BRANDS</button>
        <div className="dropdown-content">
          <Link to="./MariSteiger">MARI STEIGER</Link>
          <Link to="./Prauban">PRAUBAN</Link>
          <Link to="./Hubatt">HUBATT</Link>
          <Link to="./Imported">IMPORTED</Link>
        </div>
      </div>
      <Link to="./StylingGallery" className="mobile-invis">
        STYLING GALLERY
      </Link>
      <Link to="./Store" className="mobile-invis">
        STORE
      </Link>
      <Link to="./Contact" className="mobile-invis">
        CONTACT
      </Link>
      <div className="insta-logo mobile-invis">
        <a target="_blank" href="https://www.instagram.com/maristeiger_store/">
          <img className="insta-logo" src="src/img/insta.svg"></img>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
