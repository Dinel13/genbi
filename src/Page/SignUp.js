import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useDispatch } from "react-redux";

import { Signup , SignupAdmin} from "../store/action/AuthAction";
import { Link } from "react-router-dom";

export default function FormSignUp() {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit, getValues } = useForm();

  const onSubmit = (values) => {
    dispatch(SignupAdmin(values.email, values.password, values.nama));
    console.log(values);
  };

  return (
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
                  <ErrorMessage
                    className="invalid-feedback"
                    name="nama"
                    as="div"
                    errors={errors}
                  />
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
                  <ErrorMessage
                    className="invalid-feedback"
                    name="email"
                    as="div"
                    errors={errors}
                  />
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
                  <ErrorMessage
                    className="invalid-feedback"
                    name="password"
                    as="div"
                    errors={errors}
                  />
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

                  <ErrorMessage
                    className="invalid-feedback"
                    name="password2"
                    as="div"
                    errors={errors}
                  />
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
