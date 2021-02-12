import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import brand from "../images/brand.png";
import { Logout } from "../store/action/AuthAction";

const Navbar = (props) => {
  const token = useSelector((state) => state.Auth.token);
  const admin = useSelector((state) => state.Auth.admin);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container-fluid">
        <Link className="navbar-brand ms-3 pe-2" to="/">
          <img
            className="img-fluid pe-2"
            src={brand}
            alt="Genbi Sulsel"
            style={{ maxHeight: "47px" }}
          />
          <h4 className="fw-bolder d-inline fs-3">GenBI Sulsel</h4>
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
          <ul className="navbar-nav me-auto ms-lg-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fs-5" aria-current="page" to="/">
                Beranda
              </Link>
            </li>
            {!admin ? (
              <li className="nav-item">
                <Link
                  className="nav-link fs-5"
                  aria-current="page"
                  to="/pendaftaran"
                >
                  Daftar Beasiswa
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link
                  className="nav-link fs-5"
                  aria-current="page"
                  to="/admin"
                >
                  Admin
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
                className="btn  btn-outline-danger me-2"
              >
                Keluar
              </button>
            ) : (
              <>
                <Link to="/signup" className="btn btn-outline-primary me-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-outline-primary me-2">
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
