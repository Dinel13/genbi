import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import Pemisah from "./Pemisah";

const Wali = (props) => {
  const { register, errors } = props;
  return (
    <>
      <Pemisah />
      <div className="form-floating col-md-6 mb-3">
        <input
          name="namaWali"
          defaultValue={props.dataSaveOnLocal.namaWali}
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
        <input
          name="teleponWali"
          defaultValue={props.dataSaveOnLocal.teleponWali}
          type="text"
          placeholder="Masukkan nomor telepon wali anda"
          className={`form-control ${errors.teleponWali ? "is-invalid" : ""}`}
          ref={register({
            required: "Nomor telepon wali anda wajib dimasukkan",
          })}
        />
        <label className="ps-4 fw-bold">Nomor Telepon Wali</label>
        <ErrorMessage
          className="invalid-feedback"
          name="teleponWali"
          as="div"
          errors={errors}
        />
      </div>
      <div className="form-floating col-12 mb-3">
        <textarea
          style={{ height: "100px" }}
          defaultValue={props.dataSaveOnLocal.alamatWali}
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
      <div className="form-floating col-md-6 mb-3">
        <input
          name="pekerjaanWali"
          defaultValue={props.dataSaveOnLocal.pekerjaanWali}
          type="text"
          placeholder="Masukkan pekerjaan wali anda"
          className={`form-control ${errors.pekerjaanWali ? "is-invalid" : ""}`}
          ref={register({
            required: "Pekerjaan wali anda wajib dimasukkan",
          })}
        />
        <label className="ps-4 fw-bold">Pekerjaan Wali</label>
        <ErrorMessage
          className="invalid-feedback"
          name="pekerjaanWali"
          as="div"
          errors={errors}
        />
      </div>

      <div className="form-floating col-md-6 mb-3">
        <input
          name="penghasilanWali"
          defaultValue={props.dataSaveOnLocal.penghasilanWali}
          type="text"
          placeholder="Masukkan penghasilan wali anda perbulan"
          className={`form-control ${
            errors.penghasilanWali ? "is-invalid" : ""
          }`}
          ref={register({
            required: "Penghasilan wali anda wajib dimasukkan",
          })}
        />
        <label className="ps-4 fw-bold ">
            Penghasilan wali<span className="text-muted fw-light"> (Rp. /perbulan)</span>
          </label>
        <ErrorMessage
          className="invalid-feedback"
          name="penghasilanWali"
          as="div"
          errors={errors}
        />
      </div>
    </>
  );
};
export default Wali;
