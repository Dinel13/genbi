import React from "react";
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
        {
            //to validate required
            errors.namaWali && (
              <div className="invalid-feedback">{errors.namaWali.message}</div>
            )
          }
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
        {
            //to validate required
            errors.teleponWali && (
              <div className="invalid-feedback">{errors.teleponWali.message}</div>
            )
          }
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
        {
            //to validate required
            errors.alamatWali && (
              <div className="invalid-feedback">{errors.alamatWali.message}</div>
            )
          }
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
        {
            //to validate required
            errors.pekerjaanWali && (
              <div className="invalid-feedback">{errors.pekerjaanWali.message}</div>
            )
          }
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
          {
            //to validate required
            errors.penghasilanWali && (
              <div className="invalid-feedback">{errors.penghasilanWali.message}</div>
            )
          }
      </div>
    </>
  );
};
export default Wali;
