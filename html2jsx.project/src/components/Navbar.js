const Navbar = ()=>{

    return(
        <>
  <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
    {/* Avatar image in top left corner */}
    <img src="	https://www.w3schools.com/w3images/avatar_smoke.jpg" style={{ width: "100%" }} alt="navbarcorner" />
    <a href="#home" className="w3-bar-item w3-button w3-padding-large w3-black">
      <i className="fa fa-home w3-xxlarge" />
      <p>HOME</p>
    </a>
    <a
      href="#about"
      className="w3-bar-item w3-button w3-padding-large w3-hover-black"
    >
      <i className="fa fa-user w3-xxlarge" />
      <p>ABOUT</p>
    </a>
    <a
      href="#photos"
      className="w3-bar-item w3-button w3-padding-large w3-hover-black"
    >
      <i className="fa fa-eye w3-xxlarge" />
      <p>PHOTOS</p>
    </a>
    <a
      href="#contact"
      className="w3-bar-item w3-button w3-padding-large w3-hover-black"
    >
      <i className="fa fa-envelope w3-xxlarge" />
      <p>CONTACT</p>
    </a>
  </nav>
  {/* Navbar on small screens (Hidden on medium and large screens) */}
  <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
    <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
      <a
        href="#home"
        className="w3-bar-item w3-button"
        style={{ width: "25% !important" }}
      >
        HOME
      </a>
      <a
        href="#about"
        className="w3-bar-item w3-button"
        style={{ width: "25% !important" }}
      >
        ABOUT
      </a>
      <a
        href="#photos"
        className="w3-bar-item w3-button"
        style={{ width: "25% !important" }}
      >
        PHOTOS
      </a>
      <a
        href="#contact"
        className="w3-bar-item w3-button"
        style={{ width: "25% !important" }}
      >
        CONTACT
      </a>
    </div>
  </div>
</>



    )
}

export default Navbar