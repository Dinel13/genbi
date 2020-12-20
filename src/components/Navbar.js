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
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
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
          <div className="d-flex">
            <a
              href="#"
              data-toggle="modal"
              data-target={"#register_online"}
              className="btn btn-sm btn-success"
            >
              Register Online
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
