import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function Login() {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (values) => {
    // form is valid
    console.log(values);
  };
  return (
    <div>
      <div className="container mt-3">
        <div className="row justify-content-md-center">
          <div className="card px-0 col-md-8 col-lg-6">
            <div className="card-header text-center">
              <h4>Form Login</h4>
            </div>
            <div className="row card-body">
              <div className="col-lg-12">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group mb-3">
                    <label >Alamat E-mail</label>
                    <input
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
                    <ErrorMessage
                      className="invalid-feedback"
                      name="email"
                      as="div"
                      errors={errors}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label >Password</label>
                    <input
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
                    <ErrorMessage
                      className="invalid-feedback"
                      name="password"
                      as="div"
                      errors={errors}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-block">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
