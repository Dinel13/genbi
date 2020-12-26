import React from "react";
import { ErrorMessage } from "@hookform/error-message";

const EssayBeasiswa = (props) => {
  const { errors, register, watchKampus } = props;
  return (
    <div className="card shadow mb-5 p-0">
      <div className="card-header bg-secondary p-3">
        <h3 className="ms-3 my-2 text-white fw-bold">Essay Beasiswa</h3>
      </div>
      <div className="card-body px-5 py-3">
        {watchKampus === "unhas" && (
          <div className="form-group mb-3 row">
            <div className="form-check ps-3">
              <label className="col-form-label fw-bold col-sm-3">
                Jenis beasiswa
              </label>
              <div className="form-check form-check-inline">
                <input
                  className={`form-check-input ${
                    errors.jenisBeasiswa ? "is-invalid" : ""
                  }`}
                  type="radio"
                  value="ungulan"
                  name="jenisBeasiswa"
                  ref={register({
                    required: "Jenis beasiswa harus diisi",
                  })}
                />
                <label className="form-check-label">Ungulan</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className={`form-check-input ${
                    errors.jenisBeasiswa ? "is-invalid" : ""
                  }`}
                  type="radio"
                  value="reguler"
                  name="jenisBeasiswa"
                  ref={register({
                    required: "Jenis beasiswa harus diisi",
                  })}
                />
                <label className="form-check-label">Reguler</label>
              </div>
              {errors.jenisBeasiswa && "Jenis beasiswa harus diisi"}
            </div>
          </div>
        )}
        <div className="form-group mb-3 row">
          <label className=" col-sm-3  col-form-label fw-bold">
            Alasan mendaftar beasiswa ini:
          </label>
          <div className="col">
            <textarea
              name="motif"
              placeholder="Masukkan alasan anda dengan maksimal 300 karakter"
              className={`form-control ${errors.motif ? "is-invalid" : ""}`}
              style={{ height: "180px" }}
              ref={register({
                required: "Alasan anda mendaftar harus diisi",
                maxLength: {
                  value: 300,
                  message: "maksimal 300 karakter",
                },
              })}
            />
            <ErrorMessage
              className="invalid-feedback"
              name="motif"
              as="div"
              errors={errors}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label className="col-sm-3  col-form-label fw-bold">
            Rencana pengunaan beasiswa:
          </label>
          <div className="col">
            <textarea
              name="rencana"
              placeholder="Masukkan rencana anda dengan maksimal 300 karakter"
              className={`form-control ${errors.rencana ? "is-invalid" : ""}`}
              style={{ height: "180px" }}
              ref={register({
                required: "Rencana pengunaan beasiswaharus diisi",
                maxLength: {
                  value: 300,
                  message: "maksimal 300 karakter",
                },
              })}
            />
            <ErrorMessage
              className="invalid-feedback"
              name="rencana"
              as="div"
              errors={errors}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label className="col-sm-3  col-form-label fw-bold">
            Kenapa anda pantas mendapatkan beasiswa ini:
          </label>
          <div className="col">
            <textarea
              name="pantas"
              placeholder="Masukkan jawaban anda dengan maksimal 300 karakter"
              className={`form-control ${errors.pantas ? "is-invalid" : ""}`}
              style={{ height: "180px" }}
              ref={register({
                required: "Anda harus memasukkan jawaban",
                maxLength: {
                  value: 300,
                  message: "maksimal 300 karakter",
                },
              })}
            />
            <ErrorMessage
              className="invalid-feedback"
              name="pantas"
              as="div"
              errors={errors}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label className="col-sm-3  col-form-label fw-bold">
            Rencana anda setelah lulus kuliah:
          </label>
          <div className="col">
            <textarea
              name="lulus"
              placeholder="Masukkan jawaban anda dengan maksimal 300 karakter"
              className={`form-control ${errors.lulus ? "is-invalid" : ""}`}
              style={{ height: "180px" }}
              ref={register({
                required: "Anda harus memasukkan jawaban",
                maxLength: {
                  value: 300,
                  message: "maksimal 300 karakter",
                },
              })}
            />
            <ErrorMessage
              className="invalid-feedback"
              name="lulus"
              as="div"
              errors={errors}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EssayBeasiswa;
