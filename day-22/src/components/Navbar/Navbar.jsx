import React from "react";
import "./Navbar.css";
function Header({ cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#">
          Shop Bootstrap
        </a>
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link active" href="#">
                About
              </a>
            </li>
            <li>
              <a className="nav-link active" href="#">
                Shop
              </a>
            </li>
          </ul>
          <form
            className="d-flex"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <button className="btn btn-outline-dark" type="submit">
              <i className="bi-cart-fill me-1"></i> Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {cartCount}
              </span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
