import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Home = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (values) => {
    // form is valid
    console.log(values);
  };

  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-12 text-center">
          <h1 className="mt-5">React hook form</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Email address</label>
              <input
                name="email"
                placeholder="Enter email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                ref={register({
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address format",
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
            <div className="form-group">
              <label>Nama Lengkap</label>
              <input
                name="nama"
                placeholder="masukkan nama anda"
                className={`form-control ${errors.nama ? "is-invalid" : ""}`}
                ref={register({
                  required: "nama anda wajib dimasukkan",
                  minLength : {
                    value : 3,
                    message : 'moinilal 3'
                  }
                  }
                )}
              />
              <ErrorMessage
                className="invalid-feedback"
                name="nama"
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
  );
};
export default Home;
