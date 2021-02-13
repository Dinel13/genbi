import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { LoginAdmin } from "../../store/action/AuthAction";
import { useHistory } from "react-router-dom";

import ErrorModal from "../../components/ErrorModal/Error";
import Loading from "../../components/Loading/Loading";

export default function FormLogin() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values) => {
    const test = await dispatch(LoginAdmin(values.email, values.password, setError, setIsLoading));
    test && history.replace("/admin");
  };

  return error ? (
    <ErrorModal message={error} setModall={setError} />
  ) : isLoading ? (
    <Loading />
  ) : (
    <div>
      <div className="container mt-3 main">
        <div className="row justify-content-md-center">
          <div className="card px-0 shadow-lg col-md-8 col-lg-6 mt-4">
            <div className="card-header text-center">
              <h4>Login Admin</h4>
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
                        {errors.password.message}
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
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
