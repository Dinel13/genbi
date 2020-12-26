import React from 'react'
import { ErrorMessage } from "@hookform/error-message";
 
const DataDiri = props => {
    const {errors , register} = props

    return (
        <div className="card shadow mb-5 p-0">
        <div className="card-header bg-secondary p-3">
          <h3 className="ms-3 my-2 text-white fw-bold">Data Diri</h3>
        </div>
        <div className="card-body px-5 py-3">
          <div className="form-group mb-3 row">
            <label className="col-sm-3 col-form-label fw-bold">Nama Lengkap</label>
            <div className="col">
              <input
                name="nama"
                placeholder="Masukkan nama lengkap anda sesuai KTP"
                className={`form-control ${errors.nama ? "is-invalid" : ""}`}
                ref={register({
                  required: "Nama anda wajib dimasukkan",
                })}
              />
              <ErrorMessage
                className="invalid-feedback"
                name="nama"
                as="div"
                errors={errors}
              />
            </div>
          </div>
          <div className="form-group mb-3 row">
            <label className=" col-sm-3 col-md-3 col-form-label fw-bold ">
              Jenis Kelamin
            </label>
            <div className="col-sm-9 col-md-3">
              <select
                name="gender"
                type="text"
                className={`form-select   ${
                  errors.gender ? "is-invalid" : ""
                }`}
                ref={register({
                  required: "Jenis Kelamin harus diisi",
                })}
              >
                <option selected></option>
                <option value="pria">Pria</option>
                <option value="wanita">Wanita</option>
              </select>
              <ErrorMessage
                className="invalid-feedback"
                name="gender"
                as="div"
                errors={errors}
              />
            </div>
            <label className="col-sm-3 col-md-2 col-form-label fw-bold">
              Kepercayaan
            </label>
            <div className="col-sm-9 col-md-4">
              <select
                name="agama"
                type="text"
                className={`form-select   ${
                  errors.agama ? "is-invalid" : ""
                }`}
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
              <ErrorMessage
                className="invalid-feedback"
                name="agama"
                as="div"
                errors={errors}
              />
            </div>
          </div>
          <div className="form-group mb-3 row">
            <label className="col-sm-3 col-form-label fw-bold">Tanggal lahir</label>
            <div className="col">
              <input
                name="tangalLahir"
                type="date"
                className={`form-control form-date   ${
                  errors.tangalLahir ? "is-invalid" : ""
                }`}
                ref={register({
                  required: "Tanggal Lahir harus diisi",
                })}
              />
              <ErrorMessage
                className="invalid-feedback"
                name="tangalLahir"
                as="div"
                errors={errors}
              />
            </div>
          </div>
          <div className="form-group mb-3 row">
            <label className="col-sm-3 col-form-label fw-bold">Tempat lahir</label>
            <div className="col">
              <input
                name="tempatLahir"
                type="text"
                placeholder="Masukkan tempat lahir anda"
                className={`form-control form-date   ${
                  errors.tempat ? "is-invalid" : ""
                }`}
                ref={register({
                  required: "Tempat Lahir harus diisi",
                })}
              />
              <ErrorMessage
                className="invalid-feedback"
                name="tempatLahir"
                as="div"
                errors={errors}
              />
            </div>
          </div>
          <div className="form-group mb-3 row">
            <label className="col-sm-3 col-form-label fw-bold ">Anak ke</label>
            <div className="col-sm-9 col-md-3 ">
              <input
                name="anakKe"
                type="number"
                placeholder="Anda anak keberapa"
                className={`form-control ${
                  errors.anakKe ? "is-invalid" : ""
                }`}
                ref={register({
                  required: "Anda anak keberapa wajib dimasukkan",
                  min: {
                    value: 1,
                    message: "data yang dimasukkan harus valid",
                  },
                })}
              />
              <ErrorMessage
                className="invalid-feedback"
                name="anakKe"
                as="div"
                errors={errors}
              />
            </div>
            <label className="col-md-2 col-sm-3 col-form-label fw-bold">
              Jumlah Saudara
            </label>
            <div className="col-md-4 col-sm-9 ">
              <input
                name="saudara"
                type="number"
                placeholder="Jumlah Saudara anda"
                className={`form-control ${
                  errors.saudara ? "is-invalid" : ""
                }`}
                ref={register({
                  required: "Jumlah saudara wajib dimasukkan",
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
          <div className="form-group mb-3 row">
            <label className="col-sm-3 col-form-label fw-bold">
              Alamat selama berkuliah
            </label>
            <div className="col-sm-9">
              <textarea
                style={{ height: "80px" }}
                name="kosan"
                placeholder="Masukkan alamat selama berkuliah"
                className={`form-control ${errors.kosan ? "is-invalid" : ""}`}
                ref={register({
                  required: "Alamat kosan wajib dimasukkan",
                })}
              />
              <ErrorMessage
                className="invalid-feedback"
                name="kosan"
                as="div"
                errors={errors}
              />
            </div>
          </div>
          <div className="form-group mb-3 row">
            <label className="col-sm-3 col-form-label fw-bold">
              Nomor Wa/Hp:
            </label>
            <div className="col-sm-9 col-md-3">
              <input
                name="nomorWa"
                type="text"
                placeholder="Masukkan nomor hp/wa"
                className={`form-control ${
                  errors.nomorWa ? "is-invalid" : ""
                }`}
                ref={register({
                  required: "Mama anda wajib dimasukkan",
                })}
              />
              <ErrorMessage
                className="invalid-feedback"
                name="nomorWa"
                as="div"
                errors={errors}
              />
            </div>
            <label className="col-sm-3 col-md-2 col-form-label fw-bold">
              Akun Instagram:
            </label>
            <div className="col-sm-9 col-md-4">
              <input
                name="instagram"
                type="text"
                placeholder="Masukkan akun instagram"
                className={`form-control ${
                  errors.instagram ? "is-invalid" : ""
                }`}
                ref={register({
                  required: "AKun instagram anda wajib dimasukkan",
                })}
              />
              <p className='form-text'>Akun instagram harus dipublic</p>
              <ErrorMessage
                className="invalid-feedback"
                name="instagram"
                as="div"
                errors={errors}
              />
            </div>
          </div>
        </div>
      </div>

    )
}

export default DataDiri