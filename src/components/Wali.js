import React from "react";
import { ErrorMessage } from "@hookform/error-message";

const Wali = (props) => {
  const { register, errors } = props;
  return (
    <>
      <hr />
      <div className="form-floating col-md-6 mb-3">
        <input
          name="namaWali"
          type="text"
          placeholder="Masukkan nama Wali anda"
          className={`form-control ${errors.namaWali ? "is-invalid" : ""}`}
          ref={register({
            required: "Nama Wali anda wajib dimasukkan",
          })}
        />
        <label className="ps-4 fw-bold">Nama Wali</label>
        <ErrorMessage
          className="invalid-feedback"
          name="namaWali"
          as="div"
          errors={errors}
        />
      </div>
      <div className="form-floating col-md-6 mb-3">
        <textarea
          style={{ height: "100px" }}
          name="alamatWali"
          placeholder="Masukkan alamat rumah wali anda"
          className={`form-control ${errors.alamatWali ? "is-invalid" : ""}`}
          ref={register({
            required: "Alamat rumah wali anda wajib dimasukkan",
          })}
        />
        <label className="ps-4 fw-bold">Alamat wali</label>
        <ErrorMessage
          className="invalid-feedback"
          name="alamatWali"
          as="div"
          errors={errors}
        />
      </div>
      <div className="form-group mb-3 row">
        <label className="col-2 col-sm-3 col-form-label">Pekerjaan Wali</label>
        <div className="col">
          <input
            name="pekerjaanWali"
            type="text"
            placeholder="Masukkan pekerjaan wali anda"
            className={`form-control ${
              errors.pekerjaanWali ? "is-invalid" : ""
            }`}
            ref={register({
              required: "Pekerjaan wali anda wajib dimasukkan",
            })}
          />
          <ErrorMessage
            className="invalid-feedback"
            name="pekerjaanWali"
            as="div"
            errors={errors}
          />
        </div>
      </div>
      <div className="form-group mb-3 row">
        <label className="col-2 col-sm-3 col-form-label">
          Nomor Telepon Wali
        </label>
        <div className="col">
          <input
            name="teleponWali"
            type="text"
            placeholder="Masukkan nomor telepon wali anda"
            className={`form-control ${errors.teleponWali ? "is-invalid" : ""}`}
            ref={register({
              required: "Nomor telepon wali anda wajib dimasukkan",
            })}
          />
          <ErrorMessage
            className="invalid-feedback"
            name="teleponWali"
            as="div"
            errors={errors}
          />
        </div>
      </div>
      <div className="form-group mb-3 row">
        <label className=" col-sm-3 col-form-label">Penghasilan Wali</label>
        <div className="col">
          <input
            name="penghasilanWali"
            type="text"
            placeholder="Masukkan penghasilan wali anda perbulan"
            className={`form-control ${
              errors.penghasilanWali ? "is-invalid" : ""
            }`}
            ref={register({
              required: "Penghasilan wali anda wajib dimasukkan",
            })}
          />
          <ErrorMessage
            className="invalid-feedback"
            name="penghasilanWali"
            as="div"
            errors={errors}
          />
        </div>
      </div>
      <div className="form-group mb-3 row">
        <label className="col-sm-3 col-form-label">Jumlah Saudara</label>
        <div className="col">
          <input
            name="saudara"
            type="number"
            placeholder="Masukkan jumlah saudara anda"
            className={`form-control ${errors.saudara ? "is-invalid" : ""}`}
            ref={register({
              required: "Jumlah saudara anda wajib dimasukkan",
              min: {
                value: 0,
                message: "data yang dimasukkan harus valid",
              },
            })}
          />
          <ErrorMessage
            className="invalid-feedback"
            name="saudara"
            as="div"
            errors={errors}
          />
        </div>
      </div>
    </>
  );
};
export default Wali;
