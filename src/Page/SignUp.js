import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { Signup } from "../store/action/AuthAction";
import { Link } from "react-router-dom";
import ErrorModal from "../components/ErrorModal/Error";
import Loading from "../components/Loading/Loading";

export default function FormSignUp() {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, errors, handleSubmit, getValues } = useForm();

  const onSubmit = (values) => {
    dispatch(
      Signup(values.email, values.password, values.nama, setError, setIsLoading)
    );
  };

  return error ? (
    <ErrorModal message={error} setModall={setError} />
  ) : isLoading ? (
    <Loading />
  ) : (
    <div className="container mt-3 main">
      <div className="row justify-content-md-center">
        <div className="card px-0 mt-4 col-md-8 col-lg-6 shadow-lg">
          <div className="card-header text-center">
            <h4>Register Online</h4>
          </div>

          <div className="row card-body px-5">
            <div className="col-lg-12">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-3">
                  <label>Nama Lengkap</label>
                  <input
                    name="nama"
                    placeholder="Masukkan nama anda"
                    className={`form-control ${
                      errors.nama ? "is-invalid" : ""
                    }`}
                    ref={register({
                      required: "Mama anda wajib dimasukkan",
                    })}
                  />
                  {
                    //to validate required
                    errors.nama && (
                      <div className="invalid-feedback">
                        {errors.nama.message}
                      </div>
                    )
                  }
                </div>
                <div className="form-group mb-3">
                  <label>Alamat E-mail</label>
                  <input
                    name="email"
                    placeholder="Masukkan email anda"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    ref={register({
                      required: "Alamat e-mail harus dimasukkan",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Format email belum benar",
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
                  <label className="">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Masukkan password"
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    ref={register({
                      required: "Password wajib dimasukkan",
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
                        {errors.password.message}
                      </div>
                    )
                  }
                </div>
                <div className="form-group mb-3">
                  <label className="">Ulangi Password</label>
                  <input
                    type="password"
                    name="password2"
                    placeholder="Masukkan password lagi"
                    className={`form-control ${
                      errors.password2 ? "is-invalid" : ""
                    }`}
                    ref={register({
                      required: "Password wajib dimasukkan",
                      minLength: {
                        value: 6,
                        message: "Password minimal 6 karakter",
                      },
                      validate: (value) => value === getValues("password"),
                    })}
                  />

                  {
                    //to validate required
                    errors.password2 && (
                      <div className="invalid-feedback">
                        {errors.password2.message}
                      </div>
                    )
                  }
                  {errors.password2?.type === "validate" && (
                    <span className="invalid-feedback">
                      password harus sama
                    </span>
                  )}
                </div>

                <div className="row justify-content-center mt-4">
                  <button type="submit" className="btn btn-primary px-4 col-5">
                    DAFTAR
                  </button>
                  <div className="col-12">
                    <p className="form-text text-center">
                      Sudah punya akun? <Link to="Login">Masuk</Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
