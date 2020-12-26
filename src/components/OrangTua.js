import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import Wali from "./Wali";

const OrangTua = (props) => {
  const { errors, register, watchWali } = props;
  return (
    <div className="card shadow mb-5 p-0">
      <div className="card-header bg-secondary p-3">
        <h3 className="ms-3 my-2 text-white fw-bold">Data Orangtua/Wali </h3>
      </div>
      <div className="card-body px-5 py-3">
        {/*data ayah */}
        <div className="form-group mb-3 row">
          <label className="col-sm-3 col-form-label fw-bold">Nama Ayah</label>
          <div className="col-sm-9">
            <input
              name="namaAyah"
              type="text"
              placeholder="Masukkan nama ayah anda"
              className={`form-control ${errors.namaAyah ? "is-invalid" : ""}`}
              ref={register({
                required: "Nama ayah anda wajib dimasukkan",
              })}
            />
            <ErrorMessage
              className="invalid-feedback"
              name="namaAyah"
              as="div"
              errors={errors}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label className="col-sm-3 col-form-label fw-bold">Alamat ayah</label>
          <div className="col-sm-9">
            <textarea
              style={{ height: "80px" }}
              name="alamatAyah"
              placeholder="Masukkan alamat rumah ayah anda"
              className={`form-control ${
                errors.alamatAyah ? "is-invalid" : ""
              }`}
              ref={register({
                required: "Alamat rumah ayah anda wajib dimasukkan",
              })}
            />
            <ErrorMessage
              className="invalid-feedback"
              name="alamatAyah"
              as="div"
              errors={errors}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label className="col-sm-3 col-form-label fw-bold">
            Pekerjaan Ayah
          </label>
          <div className="col-sm-9">
            <input
              name="pekerjaanAyah"
              type="text"
              placeholder="Masukkan pekerjaan ayah anda"
              className={`form-control ${
                errors.pekerjaanAyah ? "is-invalid" : ""
              }`}
              ref={register({
                required: "Pekerjaan ayah anda wajib dimasukkan",
              })}
            />
            <ErrorMessage
              className="invalid-feedback"
              name="pekerjaanAyah"
              as="div"
              errors={errors}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label className="col-md-3 col-sm-3 col-form-label fw-bold">
            Nomor Telepon Ayah
          </label>
          <div className="col-sm-9 col-md-3">
            <input
              name="teleponAyah"
              type="text"
              placeholder="Masukkan nomor telepon ayah anda"
              className={`form-control ${
                errors.teleponAyah ? "is-invalid" : ""
              }`}
              ref={register({
                required: "Nomor telepon ayah anda wajib dimasukkan",
              })}
            />
            <ErrorMessage
              className="invalid-feedback"
              name="teleponAyah"
              as="div"
              errors={errors}
            />
          </div>
          <label className="col-md-2 col-sm-3 col-form-label fw-bold">
            Penghasilan Ayah
          </label>
          <div className="col-sm-9 col-md-4">
            <input
              name="penghasilanAyah"
              type="text"
              placeholder="Penghasilan ayah perbulan"
              className={`form-control ${
                errors.penghasilanAyah ? "is-invalid" : ""
              }`}
              ref={register({
                required: "Penghasilan ayah anda wajib dimasukkan",
              })}
            />
            <ErrorMessage
              className="invalid-feedback"
              name="penghasilanAyah"
              as="div"
              errors={errors}
            />
          </div>
        </div>
        <hr className="my-3"/>

        <div className="form-group mb-3 row">
          <label className="col-2 col-sm-3 col-form-label fw-bold">
            Nama Ibu
          </label>
          <div className="col">
            <input
              name="namaIbu"
              type="text"
              placeholder="Masukkan nama ibu anda"
              className={`form-control ${errors.namaIbu ? "is-invalid" : ""}`}
              ref={register({
                required: "Nama ibu anda wajib dimasukkan",
              })}
            />
            <ErrorMessage
              className="invalid-feedback"
              name="namaIbu"
              as="div"
              errors={errors}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label className="col-2 col-sm-3 col-form-label fw-bold">
            Alamat ibu
          </label>
          <div className="col">
            <textarea
              style={{ height: "80px" }}
              name="alamatIbu"
              placeholder="Masukkan alamat rumah ibu anda"
              className={`form-control ${errors.alamatIbu ? "is-invalid" : ""}`}
              ref={register({
                required: "Alamat rumah ibu anda wajib dimasukkan",
              })}
            />
            <ErrorMessage
              className="invalid-feedback"
              name="alamatIbu"
              as="div"
              errors={errors}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label className="col-2 col-sm-3 col-form-label fw-bold">
            Pekerjaan Ibu
          </label>
          <div className="col">
            <input
              name="pekerjaanIbu"
              type="text"
              placeholder="Masukkan pekerjaan ibu anda"
              className={`form-control ${
                errors.pekerjaanIbu ? "is-invalid" : ""
              }`}
              ref={register({
                required: "Pekerjaan ibu anda wajib dimasukkan",
              })}
            />
            <ErrorMessage
              className="invalid-feedback"
              name="pekerjaanIbu"
              as="div"
              errors={errors}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label className="col-2 col-sm-3 col-form-label fw-bold">
            Nomor Telepon Ibu
          </label>
          <div className="col">
            <input
              name="teleponIbu"
              type="text"
              placeholder="Masukkan nomor telepon ibu anda"
              className={`form-control ${
                errors.teleponIbu ? "is-invalid" : ""
              }`}
              ref={register({
                required: "Nomor telepon ibu anda wajib dimasukkan",
              })}
            />
            <ErrorMessage
              className="invalid-feedback"
              name="teleponIbu"
              as="div"
              errors={errors}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label className=" col-sm-3 col-form-label fw-bold">
            Penghasilan Ibu
          </label>
          <div className="col">
            <input
              name="penghasilanIbu"
              type="text"
              placeholder="Masukkan penghasilan ibu anda perbulan"
              className={`form-control ${
                errors.penghasilanIbu ? "is-invalid" : ""
              }`}
              ref={register({
                required: "Penghasilan ibu anda wajib dimasukkan",
              })}
            />
            <ErrorMessage
              className="invalid-feedback"
              name="penghasilanIbu"
              as="div"
              errors={errors}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <div className="form-check ps-3">
            <label className="col-form-label fw-bold col-sm-3">
              Orangtua bukan wali anda
            </label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                value="iya"
                name="showWali"
                ref={register({
                  required: "Field ini harus dipilih",
                })}
              />
              <label className="form-check-label">Benar</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                value="tidak"
                name="showWali"
                ref={register({
                  required: "Field ini harus dipilih",
                })}
              />
              <label className="form-check-label">Salah</label>
            </div>
            {/* BUGGG
                ERROR NOT SHOW IF WE USING DIV, SPAN OR ErrorMessage
            */}
            {errors.showWali && "Field ini harus dipilih"}
          </div>
        </div>
        {watchWali === "iya" && <Wali errors={errors} register={register} />}
      </div>
    </div>
  );
};
export default OrangTua;
