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
      <div className="card-body px-5 pt-4 row">
        <div className="form-floating col-md-6 mb-3">
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
          <label className="ps-4 fw-bold">Nama Ayah</label>
        </div>
        <div className="form-floating col-md-6 mb-3">
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
          <label className="ps-4 fw-bold">Pekerjaan Ayah</label>
        </div>
        <div className="form-floating col-12 mb-3">
          <textarea
            style={{ height: "100px" }}
            name="alamatAyah"
            placeholder="Masukkan alamat rumah ayah anda"
            className={`form-control ${errors.alamatAyah ? "is-invalid" : ""}`}
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
          <label className="ps-4 fw-bold">Alamat ayah</label>
        </div>
        <div className="form-floating col-md-6 mb-3">
          <input
            name="teleponAyah"
            type="number"
            placeholder="Masukkan nomor telepon ayah anda"
            className={`form-control ${errors.teleponAyah ? "is-invalid" : ""}`}
            ref={register({
              required: "Nomor telepon ayah anda wajib dimasukkan",
            })}
          />
          <label className="ps-4 fw-bold">Nomor Telepon Ayah</label>
          <ErrorMessage
            className="invalid-feedback"
            name="teleponAyah"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-floating col-md-6 mb-3">
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
          <label className="ps-4 fw-bold">Penghasilan Ayah</label>
          <ErrorMessage
            className="invalid-feedback"
            name="penghasilanAyah"
            as="div"
            errors={errors}
          />
        </div>

        <div className="form-floating col-md-6 mb-3">
          <input
            name="namaIbu"
            type="text"
            placeholder="Masukkan nama ibu anda"
            className={`form-control ${errors.namaIbu ? "is-invalid" : ""}`}
            ref={register({
              required: "Nama ibu anda wajib dimasukkan",
            })}
          />
          <label className="ps-4 fw-bold">Nama Ibu</label>
          <ErrorMessage
            className="invalid-feedback"
            name="namaIbu"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-floating col-md-6 mb-3">
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
          <label className="ps-4 fw-bold">Pekerjaan Ibu</label>
          <ErrorMessage
            className="invalid-feedback"
            name="pekerjaanIbu"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-floating col-12 mb-3">
          <textarea
            style={{ height: "100px" }}
            name="alamatIbu"
            placeholder="Masukkan alamat rumah ibu anda"
            className={`form-control ${errors.alamatIbu ? "is-invalid" : ""}`}
            ref={register({
              required: "Alamat rumah ibu anda wajib dimasukkan",
            })}
          />
          <label className="ps-4 fw-bold">Alamat ibu</label>
          <ErrorMessage
            className="invalid-feedback"
            name="alamatIbu"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-floating col-md-6 mb-3">
          <input
            name="teleponIbu"
            type="text"
            placeholder="Masukkan nomor telepon ibu anda"
            className={`form-control ${errors.teleponIbu ? "is-invalid" : ""}`}
            ref={register({
              required: "Nomor telepon ibu anda wajib dimasukkan",
            })}
          />
          <label className="fp-4 fw-bold">Nomor Telepon Ibu</label>
          <ErrorMessage
            className="invalid-feedback"
            name="teleponIbu"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-floating col-md-6 mb-3">
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
          <label className="ps-4 fw-bold">Penghasilan Ibu</label>
          <ErrorMessage
            className="invalid-feedback"
            name="penghasilanIbu"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-group mb-3 row">
          <div className="form-check ps-3">
            <label className="col-form-label fw-bold col-sm-3">
              Orangtua bukan wali anda : 
            </label>
            <div className="form-check form-check-inline col">
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
