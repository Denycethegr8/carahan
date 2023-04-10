const Nav = () => {
  return (
    <nav className="nav">
      <img className="company-logo" src="src/img/logo.png"></img>
      <a href="/" className="mobile-invis">
        BRANDS
      </a>
      <a href="/" className="mobile-invis">
        ABOUT
      </a>
      <a href="/" className="mobile-invis">
        STYLING GALLERY
      </a>
      <a href="/" className="mobile-invis">
        STORE
      </a>
      <a href="/" className="mobile-invis">
        CONTACT
      </a>
      <div className="insta-logo mobile-invis">
        <a target="_blank" href="https://www.instagram.com/maristeiger_store/">
          <img className="insta-logo" src="src/img/insta.svg"></img>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
