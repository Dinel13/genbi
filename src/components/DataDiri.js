import React from "react";
import { ErrorMessage } from "@hookform/error-message";

const DataDiri = (props) => {
  const { errors, register } = props;

  return (
    <div className="card shadow mb-5 p-0">
      <div className="card-header bg-secondary p-3">
        <h3 className="ms-3 my-2 text-white fw-bold">Data Diri</h3>
      </div>
      <div className="card-body px-5 pt-4 row">
        <div className="form-floating col-md-7 mb-3 ">
          <input
            name="nama"
            placeholder="Masukkan nama sesuai KTP"
            id="nama"
            defaultValue={props.dataSaveOnLocal.nama}
            className={`form-control ${errors.nama ? "is-invalid" : ""}`}
            ref={register({
              required: "Nama anda wajib dimasukkan",
            })}
          />
          <label className="fw-bold ps-4" htmlFor="nama">
            Nama Lengkap
          </label>
          <ErrorMessage
            className="invalid-feedback"
            name="nama"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-floating col-md-5 mb-3">
          <input
            name="pangilan"
            defaultValue={props.dataSaveOnLocal.pangilan}
            placeholder="Masukkan nama pangilan anda"
            className={`form-control ${errors.pangilan ? "is-invalid" : ""}`}
            ref={register({
              required: "Nama pangilan anda wajib dimasukkan",
            })}
          />
          <label className="fw-bold ps-4">Nama pangilan</label>
          <ErrorMessage
            className="invalid-feedback"
            name="pangilan"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-floating col-md-6 mb-3">
          <input
            name="tangalLahir"
            type="date"
            defaultValue={props.dataSaveOnLocal.tangalLahir}
            className={`form-control form-date   ${
              errors.tangalLahir ? "is-invalid" : ""
            }`}
            ref={register({
              required: "Tanggal Lahir harus diisi",
            })}
          />
          <label className="ps-4 fw-bold">Tanggal lahir</label>
          <ErrorMessage
            className="invalid-feedback"
            name="tangalLahir"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-floating col-md-6 mb-3">
          <input
            name="tempatLahir"
            defaultValue={props.dataSaveOnLocal.tempatLahir}
            type="text"
            placeholder="Masukkan tempat lahir anda"
            className={`form-control form-date   ${
              errors.tempatLahir ? "is-invalid" : ""
            }`}
            ref={register({
              required: "Tempat Lahir harus diisi",
            })}
          />
          <label className="ps-4 fw-bold">Tempat lahir</label>
          <ErrorMessage
            className="invalid-feedback"
            name="tempatLahir"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-floating col-md-6 mb-3">
          <select
            name="gender"
            defaultValue={props.dataSaveOnLocal.gender}
            type="text"
            className={`form-select ${errors.gender ? "is-invalid" : ""}`}
            ref={register({
              required: "Jenis Kelamin harus diisi",
            })}
          >
            <option selected></option>
            <option value="pria">Pria</option>
            <option value="wanita">Wanita</option>
          </select>
          <label className="ps-4 fw-bold ">Jenis Kelamin</label>
          <ErrorMessage
            className="invalid-feedback"
            name="gender"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-floating col-md-6 mb-3">
          <select
            name="agama"
            defaultValue={props.dataSaveOnLocal.agama}
            type="text"
            className={`form-select   ${errors.agama ? "is-invalid" : ""}`}
            ref={register({
              required: "Agama harus diisi",
            })}
          >
            <option selected></option>
            <option value="islam">Islam</option>
            <option value="kristen">Kristen</option>
            <option value="hindu">Hindu</option>
            <option value="budha">Budha</option>
            <option value="konhucu">Konghucu</option>
            <option value="lainya">Lainya</option>
          </select>
          <label className="fw-bold ps-4">Kepercayaan</label>
          <ErrorMessage
            className="invalid-feedback"
            name="agama"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-floating col-md-6 mb-3">
          <input
            name="suku"
            defaultValue={props.dataSaveOnLocal.suku}
            type="text"
            placeholder="Masukkan suku anda"
            className={`form-control form-date   ${
              errors.suku ? "is-invalid" : ""
            }`}
            ref={register({
              required: "Suku anda harus diisi",
            })}
          />
          <label className="ps-4 fw-bold">Suku bangsa</label>
          <ErrorMessage
            className="invalid-feedback"
            name="suku"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-floating col-md-6 mb-3">
          <input
            name="darah"
            defaultValue={props.dataSaveOnLocal.darah}
            type="text"
            placeholder="Masukkan golongan darah anda"
            className={`form-control form-date   ${
              errors.darah ? "is-invalid" : ""
            }`}
            ref={register({
              required: "Golongan darah harus diisi",
            })}
          />
          <label className="ps-4 fw-bold">Golongan darah</label>
          <ErrorMessage
            className="invalid-feedback"
            name="darah"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-floating col-md-6 mb-3">
          <input
            name="anakKe"
            defaultValue={props.dataSaveOnLocal.anakKe}
            type="number"
            placeholder="Anda anak keberapa"
            className={`form-control ${errors.anakKe ? "is-invalid" : ""}`}
            ref={register({
              required: "Anda anak keberapa wajib dimasukkan",
              min: {
                value: 1,
                message: "data yang dimasukkan harus valid",
              },
            })}
          />
          <label className="ps-4 fw-bold ">Anak ke</label>

          <ErrorMessage
            className="invalid-feedback"
            name="anakKe"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-floating col-md-6 mb-3">
          <input
            name="saudara"
            defaultValue={props.dataSaveOnLocal.saudara}
            type="number"
            placeholder="Jumlah Saudara anda"
            className={`form-control ${errors.saudara ? "is-invalid" : ""}`}
            ref={register({
              required: "Jumlah saudara wajib dimasukkan",
              min: {
                value: 0,
                message: "data yang dimasukkan harus valid",
              },
            })}
          />
          <label className="ps-4 fw-bold">Jumlah Saudara</label>
          <ErrorMessage
            className="invalid-feedback"
            name="saudara"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-floating col-12 mb-3">
          <textarea
            style={{ height: "100px" }}
            name="kosan"
            defaultValue={props.dataSaveOnLocal.kosan}
            placeholder="Masukkan alamat selama berkuliah"
            className={`form-control ${errors.kosan ? "is-invalid" : ""}`}
            ref={register({
              required: "Alamat kosan wajib dimasukkan",
            })}
          />
          <label className="ps-4 fw-bold">Alamat selama berkuliah</label>
          <ErrorMessage
            className="invalid-feedback"
            name="kosan"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-floating col-md-6 mb-3">
          <input
            name="hobby"
            defaultValue={props.dataSaveOnLocal.hobby}
            type="text"
            placeholder="Masukkan hobi anda"
            className={`form-control ${errors.hobby ? "is-invalid" : ""}`}
            ref={register({})}
          />
          <label className="ps-4 fw-bold">Hobby</label>
          <ErrorMessage
            className="invalid-feedback"
            name="hobby"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-floating col-md-6 mb-3">
          <input
            name="cita"
            defaultValue={props.dataSaveOnLocal.cita}
            type="text"
            placeholder="Masukkan cita-cita"
            className={`form-control ${errors.cita ? "is-invalid" : ""}`}
            ref={register({})}
          />
          <label className="ps-4 fw-bold">Cita-cita</label>
          <ErrorMessage
            className="invalid-feedback"
            name="cita"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-floating col-md-4 mb-3">
          <input
            name="nomorWa"
            defaultValue={props.dataSaveOnLocal.nomorWa}
            type="number"
            placeholder="Masukkan nomor wa"
            className={`form-control ${errors.nomorWa ? "is-invalid" : ""}`}
            ref={register({
              required: "Nomor wa anda wajib dimasukkan",
            })}
          />
          <label className="ps-4 fw-bold">Nomor Wa:</label>
          <ErrorMessage
            className="invalid-feedback"
            name="nomorWa"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-floating col-md-4 mb-3">
          <input
            name="nomorHp"
            defaultValue={props.dataSaveOnLocal.nomorHp}
            type="number"
            placeholder="Masukkan nomor telepon"
            className={`form-control ${errors.nomorHp ? "is-invalid" : ""}`}
            ref={register({
              required: "Nomor Telepon anda wajib dimasukkan",
            })}
          />
          <label className="ps-4 fw-bold">Nomor Telepon:</label>
          <ErrorMessage
            className="invalid-feedback"
            name="nomorHp"
            as="div"
            errors={errors}
          />
        </div>

        <div className="form-floating col-md-4 mb-3">
          <input
            name="instagram"
            defaultValue={props.dataSaveOnLocal.instagram}
            type="text"
            placeholder="Masukkan akun instagram"
            className={`form-control ${errors.instagram ? "is-invalid" : ""}`}
            ref={register({
              required: "Akun instagram anda wajib dimasukkan",
            })}
          />
          <label className="ps-4 fw-bold">Akun Instagram:</label>
          <ErrorMessage
            className="invalid-feedback"
            name="instagram"
            as="div"
            errors={errors}
          />
          <p className="form-text">Akun instagram harus dipublic</p>
        </div>
        <div className="form-floating col-md-6 mb-3">
          <input
            name="minat"
            type="text"
            defaultValue={props.dataSaveOnLocal.minat}
            placeholder="Masukkan minat atau bakat anda"
            className={`form-control ${errors.minat ? "is-invalid" : ""}`}
            ref={register({})}
          />
          <label className="ps-4 fw-bold">Minat atau bakat</label>
          <ErrorMessage
            className="invalid-feedback"
            name="minat"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-floating col-md-6 mb-3">
          <input
            name="skil"
            defaultValue={props.dataSaveOnLocal.skil}
            type="text"
            placeholder="Masukkan keterampilan anda"
            className={`form-control ${errors.skil ? "is-invalid" : ""}`}
            ref={register({})}
          />
          <label className="ps-4 fw-bold">Keterampilan anda</label>
          <ErrorMessage
            className="invalid-feedback"
            name="skil"
            as="div"
            errors={errors}
          />
        </div>
      </div>
    </div>
  );
};

export default DataDiri;
