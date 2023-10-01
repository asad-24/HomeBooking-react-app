import { useState } from "react";
import "./Header.css"
function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

const toggleNav = () => {
  setIsNavOpen((prev) => !prev);
};
  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light py-4 shadow-lg border">
      <div className="container-fluid">
        <a href="/" className="navbar-brand text-primary text-lg font-medium">
          Ultimate Beach Adobe
        </a>
        <div className="d-flex roomDetail">
        <p className=" mt-3">Marcoola, Qld</p>
        <p className="mt-3 px-2 ">
          10 guests, 5 bedrooms, 7 beds, 2.5 baths
        </p></div>

        <button
          className="navbar-toggler "
          type="button"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto ms-auto  d-flex justify-content-center align-items-center">
            <li className="nav-item">
              <button className="btn btn-outline-dark header-btn px-3 mx-md-2 my-md-3 text-sm" onClick={toggleNav}>
                Book Now
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-dark header-btn px-3  mx-3  text-sm ml-2" onClick={toggleNav}>
                Photo Gallery
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-dark header-btn px-3 mx-md-3  my-md-3
              text-sm ml-2" onClick={toggleNav}>
                Map
              </button>
            </li>
            <li className="nav-items d-lg-none">
              <h4 className="fw-bold ">Other Detail</h4>
              <p className=" mx-3">Marcoola, Qld</p>
        <p className=" px-3 ">
          10 guests, 5 bedrooms, 7 beds, 2.5 baths
        </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      
    </div>
  )
}

export default Header
