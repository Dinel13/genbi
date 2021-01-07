import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Logout } from "../store/action/AuthAction";

const Navbar = (props) => {
  const token = useSelector((state) => state.Auth.token);
  const admin = useSelector((state) => state.Auth.admin);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand ms-3 pe-2" to="/">
          <img
            src="https://genbiunhas.org/storage/web_assets/genbiUH1.png"
            alt=""
            width="30"
            height="24"
          />
          GenBI
        </Link>
        <button
          className="navbar-toggler me-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {!admin && (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/pendaftaran"
                >
                  Pendaftaran
                </Link>
              </li>
            )}
          </ul>
          <div className="d-flex ">
            {token || admin ? (
              <button
                onClick={() => {
                  dispatch(Logout());
                  history.replace("/");
                }}
                className="btn btn-sm btn-danger me-2"
              >
                Keluar
              </button>
            ) : (
              <>
                <Link to="/signup" className="btn btn-sm btn-success me-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-sm btn-success me-2">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
