import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {Logout} from '../store/action/AuthAction'

const Navbar = (props) => {
  const token = useSelector((state) => state.Auth.token);
  const dispatch = useDispatch()
  const [lokasi, setLokasi] = useState("")

  useEffect(() => {
    if (lokasi === "") {
      setLokasi("h")
      
    }
  })

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${lokasi && "d-none"}`}>
      <div className="container-fluid">
        <a className="navbar-brand ms-3" href="/">
          <img
            src="https://genbiunhas.org/storage/web_assets/genbiUH1.png"
            alt=""
            width="30"
            height="24"
          />
          GenBI
        </a>
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
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/pendaftaran">
                Pendaftaran
              </Link>
            </li>
          </ul>
          <div className="d-flex ">
            {token ? (
              <button onClick={() => dispatch(Logout())} className="btn btn-sm btn-danger me-2">
                Keluar
              </button>
            ) : (
              <>
                <Link to="signup" className="btn btn-sm btn-success me-2">
                  Sign Up
                </Link>
                <Link to="login" className="btn btn-sm btn-success me-2">
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
