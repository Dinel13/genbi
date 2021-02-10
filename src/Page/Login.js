import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { Login } from "../store/action/AuthAction";
import { Link, useHistory } from "react-router-dom";

const FormLogin = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (values) => {
    dispatch(Login(values.email, values.password));
    history.replace("/pendaftaran");
  };
  return (
    <div>
      <div className="container mt-3 main">
        <div className="row justify-content-md-center">
          {props.alert && (
            <div className="row justify-content-md-center">
              <div className="col-12, col-sm-10 col-md-8 col-lg-6">
                <div
                  className="alert alert-warning alert-dismissible fade show shadow mb-4"
                  role="alert"
                >
                  <strong>Mohon maaf!</strong> Anda harus login terlebih dahulu
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
            </div>
          )}
          <div className="card px-0 shadow-lg col-md-8 col-lg-6">
            <div className="card-header text-center">
              <h4>Form Login</h4>
            </div>
            <div className="row card-body px-5">
              <div className="col-lg-12">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group mb-3">
                    <label>Alamat E-mail</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Masukkan email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      ref={register({
                        required: "Email harus dimasukkan",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "format email belum betul",
                        },
                      })}
                    />
                    {
                      //to validate required
                      errors.email && (
                        <div className="invalid-feedback">
                          {errors.email.message}
                        </div>
                      )
                    }
                  </div>
                  <div className="form-group mb-3">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Masukkan password"
                      className={`form-control ${
                        errors.password ? "is-invalid" : ""
                      }`}
                      ref={register({
                        required: "Password harus dimasukkan",
                        minLength: {
                          value: 6,
                          message: "Password minimal 6 karakter",
                        },
                      })}
                    />
                    {
                      //to validate required
                      errors.password && (
                        <div className="invalid-feedback">
                          {errors.password.email}
                        </div>
                      )
                    }
                  </div>
                  <div className="row justify-content-center mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary px-4 col-5"
                    >
                      LOGIN
                    </button>
                    <div className="col-12">
                      <p className="form-text text-center">
                        Belum punya akun? <Link to="SignUp">Daftar</Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
