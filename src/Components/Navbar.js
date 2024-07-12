import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src={`${process.env.PUBLIC_URL}/images/brand_logo.png`} alt="Brand Logo" />
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Location</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contact</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn px-4" type="submit">Login</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
