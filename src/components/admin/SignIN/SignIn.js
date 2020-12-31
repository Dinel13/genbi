import React from "react";
import "./signin.css";

const SignIn = (props) => {
  return (
    <div className="containerr">
      <div className="form-signin">
        <form>
          <img
            className="mb-4 r"
            src="../assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 text-center fw-normal">Please sign in</h1>
          <label htmlFor="inputEmail" className="visually-hidden">
            Alamat email
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            autoFocus
          />
          <label htmlFor="inputPassword" className="visually-hidden">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
          />
          
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
