import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className ="nav">
      <Link to="./Home">
        <img className="company-logo" src="src/img/logo.png"></img></Link>
      <Link to="./Brands" className="mobile-invis">
        BRANDS
      </Link>
      <Link to="./About" className="mobile-invis">
        ABOUT
      </Link>
      <Link to="/" className="mobile-invis">
        STYLING GALLERY
      </Link>
      <Link to="/" className="mobile-invis">
        STORE
      </Link>
      <Link to="/" className="mobile-invis">
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
