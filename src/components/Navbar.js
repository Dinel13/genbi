import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top custom_nav">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="https://genbiunhas.org/storage/web_assets/genbiUH1.png"
            alt=""
            width="30"
            height="24"
          />
          GenBI
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/pendaftaran">
                Pendaftaran
              </Link>
            </li>
          </ul>
          <div className="d-flex ">
            <Link to="signup" className="btn btn-sm btn-success me-2">
              Sign Up
            </Link>
            <Link to="login" className="btn btn-sm btn-success me-2">
              Login
            </Link>
            <button onClick={() => {}} className="btn btn-sm btn-danger me-2">
              Keluar
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
