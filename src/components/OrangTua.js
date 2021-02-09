import React from "react";
import Wali from "./Wali";
import Pemisah from "./Pemisah";

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
            defaultValue={props.dataSaveOnLocal.namaAyah}
            type="text"
            placeholder="Masukkan nama ayah anda"
            className={`form-control ${errors.namaAyah ? "is-invalid" : ""}`}
            ref={register({
              required: "Nama ayah anda wajib dimasukkan",
            })}
          />
          {
            //to validate required
            errors.namaAyah && (
              <div className="invalid-feedback">{errors.namaAyah.message}</div>
            )
          }
          <label className="ps-4 fw-bold">Nama Ayah</label>
        </div>

        <div className="form-floating col-md-6 mb-3">
          <input
            name="teleponAyah"
            defaultValue={props.dataSaveOnLocal.teleponAyah}
            type="number"
            placeholder="Masukkan nomor telepon ayah anda"
            className={`form-control ${errors.teleponAyah ? "is-invalid" : ""}`}
            ref={register({
              required: "Nomor telepon ayah anda wajib dimasukkan",
            })}
          />
          <label className="ps-4 fw-bold">Nomor Telepon Ayah</label>
          {
            //to validate required
            errors.teleponAyah && (
              <div className="invalid-feedback">{errors.teleponAyah.message}</div>
            )
          }
        </div>
        <div className="form-floating col-12 mb-3">
          <textarea
            style={{ height: "100px" }}
            name="alamatAyah"
            defaultValue={props.dataSaveOnLocal.alamatAyah}
            placeholder="Masukkan alamat rumah ayah anda"
            className={`form-control ${errors.alamatAyah ? "is-invalid" : ""}`}
            ref={register({
              required: "Alamat rumah ayah anda wajib dimasukkan",
            })}
          />
          {
            //to validate required
            errors.alamatAyah && (
              <div className="invalid-feedback">{errors.alamatAyah.message}</div>
            )
          }
          <label className="ps-4 fw-bold">Alamat ayah</label>
        </div>
        <div className="form-floating col-md-6 mb-3">
          <input
            name="pekerjaanAyah"
            type="text"
            defaultValue={props.dataSaveOnLocal.pekerjaanAyah}
            placeholder="Masukkan pekerjaan ayah anda"
            className={`form-control ${
              errors.pekerjaanAyah ? "is-invalid" : ""
            }`}
            ref={register({
              required: "Pekerjaan ayah anda wajib dimasukkan",
            })}
          />
          {
            //to validate required
            errors.pekerjaanAyah && (
              <div className="invalid-feedback">{errors.pekerjaanAyah.message}</div>
            )
          }
          <label className="ps-4 fw-bold">Pekerjaan Ayah</label>
        </div>
        <div className="form-floating col-md-6 mb-3">
          <input
            name="penghasilanAyah"
            type="text"
            defaultValue={props.dataSaveOnLocal.penghasilanAyah}
            placeholder="Penghasilan ayah perbulan"
            className={`form-control ${
              errors.penghasilanAyah ? "is-invalid" : ""
            }`}
            ref={register({
              required: "Penghasilan ayah anda wajib dimasukkan",
            })}
          />
          <label className="ps-4 fw-bold ">
            Penghasilan Ayah
            <span className="text-muted fw-light"> (Rp. /perbulan)</span>
          </label>
          {
            //to validate required
            errors.penghasilanAyah && (
              <div className="invalid-feedback">{errors.penghasilanAyah.message}</div>
            )
          }
        </div>
        <Pemisah />
        <div className="form-floating col-md-6 mb-3">
          <input
            name="namaIbu"
            defaultValue={props.dataSaveOnLocal.namaIbu}
            type="text"
            placeholder="Masukkan nama ibu anda"
            className={`form-control ${errors.namaIbu ? "is-invalid" : ""}`}
            ref={register({
              required: "Nama ibu anda wajib dimasukkan",
            })}
          />
          <label className="ps-4 fw-bold">Nama Ibu</label>
          {
            //to validate required
            errors.namaIbu && (
              <div className="invalid-feedback">{errors.namaIbu.message}</div>
            )
          }
        </div>
        <div className="form-floating col-md-6 mb-3">
          <input
            name="teleponIbu"
            defaultValue={props.dataSaveOnLocal.teleponIbu}
            type="text"
            placeholder="Masukkan nomor telepon ibu anda"
            className={`form-control ${errors.teleponIbu ? "is-invalid" : ""}`}
            ref={register({
              required: "Nomor telepon ibu anda wajib dimasukkan",
            })}
          />
          <label className="ps-4 fw-bold">Nomor Telepon Ibu</label>
          {
            //to validate required
            errors.teleponIbu && (
              <div className="invalid-feedback">{errors.teleponIbu.message}</div>
            )
          }
        </div>
        <div className="form-floating col-12 mb-3">
          <textarea
            style={{ height: "100px" }}
            defaultValue={props.dataSaveOnLocal.alamatIbu}
            name="alamatIbu"
            placeholder="Masukkan alamat rumah ibu anda"
            className={`form-control ${errors.alamatIbu ? "is-invalid" : ""}`}
            ref={register({
              required: "Alamat rumah ibu anda wajib dimasukkan",
            })}
          />
          <label className="ps-4 fw-bold">Alamat ibu</label>
          {
            //to validate required
            errors.alamatIbu && (
              <div className="invalid-feedback">{errors.alamatIbu.message}</div>
            )
          }
        </div>
        <div className="form-floating col-md-6 mb-3">
          <input
            name="pekerjaanIbu"
            defaultValue={props.dataSaveOnLocal.pekerjaanIbu}
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
          {
            //to validate required
            errors.pekerjaanIbu && (
              <div className="invalid-feedback">{errors.pekerjaanIbu.message}</div>
            )
          }
        </div>
        <div className="form-floating col-md-6 mb-3">
          <input
            name="penghasilanIbu"
            defaultValue={props.dataSaveOnLocal.penghasilanIbu}
            type="text"
            placeholder="Masukkan penghasilan ibu anda perbulan"
            className={`form-control ${
              errors.penghasilanIbu ? "is-invalid" : ""
            }`}
            ref={register({
              required: "Penghasilan ibu anda wajib dimasukkan",
            })}
          />
          <label className="ps-4 fw-bold ">
            Penghasilan Ibu
            <span className="text-muted fw-light"> (Rp. /perbulan)</span>
          </label>
          {
            //to validate required
            errors.penghasilanIbu && (
              <div className="invalid-feedback">{errors.penghasilanIbu.message}</div>
            )
          }
        </div>
        <div className="form-group mb-3 row">
          <div className="form-check ps-3">
            <label className="col-form-label fw-bold col-sm-3">
              Orangtua bukan wali anda
            </label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input c"
                type="radio"
                value="iya"
                name="showWali"
                defaultValue={props.dataSaveOnLocal.showWali}
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
                defaultValue={props.dataSaveOnLocal.showWali}
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
        {watchWali === "iya" && (
          <Wali
            errors={errors}
            dataSaveOnLocal={props.dataSaveOnLocal}
            register={register}
          />
        )}
      </div>
    </div>
  );
};
export default OrangTua;
