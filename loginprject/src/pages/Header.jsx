import { useEffect, useState } from "react";

function Header() {

  const [HeaderText, setHeaderText] = useState('Home');

  useEffect(() => {
    const currentPath = window.location.pathname;
    switch (currentPath) {
      case '/student':
        setHeaderText('Logout');
        break;
      case '/teacher':
        setHeaderText('Logout');
        break;
      case '/admin':
        setHeaderText('Logout');
        break;
      default:
        setHeaderText('Login');
    }
  }, []);
  return (
    <div>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <img src="assets/ete logo black.png" alt="ETE Logo " style={{ height: "100%", width: "auto" }} />
          {/* <h2 className="m-0 text-primary m-4">Dept. of ETE</h2> */}
        </a>
        {/* <div className="collapse navbar-collapse" id="navbarCollapse"> */}
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <a href="/" className="nav-item nav-link">Home</a>
          <a href="#About" className="nav-item nav-link">About</a>
          <a href="/faculties" className="nav-item nav-link">Faculties</a>
          <a href="https://alumni-ete-cuet.netlify.app/?fbclid=IwAR0HCp0F7QXw-GWn8Y3F_O574PxSl4XH7M_TFkXJ1yWGPM8cQ-c4IrA9_eY"
            className="nav-item nav-link">Alumni</a>
          <a href="/photo" className="nav-item nav-link">Photo Gallery</a>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle">More</a>
            <div className="dropdown-menu fade-up m-0">
              <a href="#" className="dropdown-item">Offered Degrees</a>
              <a href="#Notice" className="dropdown-item">Notices</a>
              <a href="#" className="dropdown-item">Our Research</a>
              <a href="contact" className="dropdown-item">Contact</a>
            </div>
          </div>
        </div>
        <a href="/login" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">{HeaderText}<i
          className="fa fa-arrow-right ms-3"></i></a>
        {/* </div> */}
      </nav>
      {/* Navbar End */}
    </div>
  )
}

export default Header
