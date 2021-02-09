import React from "react";
import { ErrorMessage } from "@hookform/error-message";

const DataKampus = (props) => {
  const { errors, register } = props;
  return (
    <div className="card shadow mb-5 p-0">
      <div className="card-header bg-secondary p-3">
        <h3 className="ms-3 my-2 text-white fw-bold">Data Akademik</h3>
      </div>
      <div className="card-body px-5 pt-4 row">
        <div className="form-group mb-3 row">
          <label className="col-3 col-sm-3 col-form-label fw-bold">
            Perguruan Tinggi
          </label>
          <div className="col">
            <select
              name="kampus"
              type="text"
              className={`form-select   ${errors.kampus ? "is-invalid" : ""}`}
              ref={register({
                required: "Perguruan tinggi harus diisi",
              })}
            >
              <option selected></option>
              <option value="unhas">Universitas Hasanuddin</option>
              <option value="unm">Universitas Negri Makassar</option>
              <option value="uin">UIN Alauddin Makassar</option>
            </select>
            <ErrorMessage
              className="invalid-feedback"
              name="angkatan"
              as="div"
              errors={errors}
            />
          </div>
        </div>
        <div className="form-floating col-md-6 mb-3">
          <input
            name="fakultas"
            defaultValue={props.dataSaveOnLocal.fakultas}
            type="text"
            placeholder="Masukkan Fakultas anda"
            className={`form-control ${errors.fakultas ? "is-invalid" : ""}`}
            ref={register({
              required: "Fakultas anda wajib dimasukkan",
            })}
          />
          <label className="ps-4 fw-bold">Fakultas</label>
          <ErrorMessage
            className="invalid-feedback"
            name="fakultas"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-floating col-md-6 mb-3">
          <input
            name="prodi"
            defaultValue={props.dataSaveOnLocal.prodi}
            type="text"
            placeholder="Masukkan Program studi anda"
            className={`form-control ${errors.prodi ? "is-invalid" : ""}`}
            ref={register({
              required: "Program studi anda wajib dimasukkan",
            })}
          />
          <label className="ps-4 fw-bold">Program studi</label>
          <ErrorMessage
            className="invalid-feedback"
            name="prodi"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-floating col-md-6 mb-3">
          <input
            name="nim"
            defaultValue={props.dataSaveOnLocal.nim}
            type="text"
            placeholder="Masukkan nomor induk mahasiswa anda"
            className={`form-control ${errors.nim ? "is-invalid" : ""}`}
            ref={register({
              required: "Nomor induk mahasiswwa anda wajib dimasukkan",
            })}
          />
          <label className="ps-4 fw-bold">Nomor induk mahasiswa</label>
          <ErrorMessage
            className="invalid-feedback"
            name="nim"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-floating col-md-6 mb-3">
          <input
            name="ipk"
            type="decimal"
            defaultValue={props.dataSaveOnLocal.ipk}
            placeholder="Masukkan nilai ipk anda, contohnya 3.8"
            className={`form-control ${errors.ipk ? "is-invalid" : ""}`}
            ref={register({
              required: "Nilai IPK anda wajib dimasukkan",
              pattern: {
                value: "/[1-9]+.[1-9]",
                message: "test",
              },
            })}
          />
          <label className="ps-4 fw-bold">Nilai IPK terakhir</label>
          <ErrorMessage
            className="invalid-feedback"
            name="ipk"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-floating col-md-6 mb-3">
          <input
            name="sks"
            type="number"
            defaultValue={props.dataSaveOnLocal.sks}
            placeholder="Masukkan sks yang telah dilulusi"
            className={`form-control ${errors.sks ? "is-invalid" : ""}`}
            ref={register({
              required: "SKS yang telah dilulusi anda wajib dimasukkan",
            })}
          />
          <label className="ps-4 fw-bold">SKS yang telah dilulusi</label>
          <ErrorMessage
            className="invalid-feedback"
            name="sks"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-floating col-md-6 mb-3">
          <input
            name="semester"
            type="number"
            defaultValue={props.dataSaveOnLocal.semester}
            placeholder="Masukkan semester anda sekarang"
            className={`form-control ${errors.semester ? "is-invalid" : ""}`}
            ref={register({
              required: "Semester anda wajib dimasukkan",
            })}
          />
          <label className="ps-4 fw-bold">Semester saat ini</label>
          <ErrorMessage
            className="invalid-feedback"
            name="semester"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-floating col-md-6 mb-3">
          <select
            name="angkatan"
            defaultValue={props.dataSaveOnLocal.angkatan}
            aria-label="Floating label select example"
            className={`form-select ${errors.angkatan ? "is-invalid" : ""}`}
            ref={register({
              required: "Tahun angkatan harus diisi",
            })}
          >
            <option selected></option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
          </select>
          <label className="ps-4 fw-bold">Tahun Masuk Kuliah</label>
          <ErrorMessage
            className="invalid-feedback"
            name="angkatan"
            as="div"
            errors={errors}
          />
        </div>
        <div className="form-floating col-md-6 mb-3">
          <select
            name="thnLulus"
            defaultValue={props.dataSaveOnLocal.thnLulus}
            type="text"
            className={`form-select ${errors.ThnLulus ? "is-invalid" : ""}`}
            ref={register({
              required: "Tahun rencana lulus harus diisi",
            })}
          >
            <option selected></option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
          </select>
          <label className="ps-4 fw-bold">Tahun Rencana Lulus</label>
          <ErrorMessage
            className="invalid-feedback"
            name="thnLulus"
            as="div"
            errors={errors}
          />
        </div>
        {/*<div className="form-floating col-md-6 mb-3">
          <select
            name="jenjang"
            aria-label="Floating label select example"
            className={`form-select ${errors.jenjang ? "is-invalid" : ""}`}
            ref={register({
              required: "Tahun rencana lulus harus diisi",
            })}
          >
            <option selected></option>
            <option value="S1">S1</option>
            <option value="D-III">D-III</option>
            <option value="D-IV">D-IV</option>
          </select>
          <label className="ps-4 fw-bold">Jenjang pendidikan</label>
          <ErrorMessage
            className="invalid-feedback"
            name="jenjang"
            as="div"
            errors={errors}
          />
          </div>*/}

        <div className="form-group mb-3 row">
          <label className="col-sm-3 col-form-label fw-bold">
            Prestasi selama berkuliah
          </label>
          <div className="col">
            <textarea
              name="prestasi"
              type="text"
              defaultValue={props.dataSaveOnLocal.prestasi}
              style={{ height: "150px" }}
              placeholder="Format penulisan prestasi adalah 'Nama prestasi_Penyelengara_Tahun diraih'. Pisahkan 
              prestasi dengan prestasi lain dengan tanda koma (,). Contohnya, Juara 1 lomba KTI_Kemendikbud_2020, Juara 2 kontes robot_Kemendikbud_2020"
              className={`form-control ${errors.prestasi ? "is-invalid" : ""}`}
              ref={register({
                required: "Jika tidak memiliki prestasi masukkan angka 0",
              })}
            />
            <ErrorMessage
              className="invalid-feedback"
              name="prestasi"
              as="div"
              errors={errors}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label className="col-sm-3 col-form-label fw-bold">
            Organisasi yang pernah dan sedang diikuti
          </label>
          <div className="col">
            <textarea
              style={{ height: "150px" }}
              name="organisasi"
              defaultValue={props.dataSaveOnLocal.organisasi}
              type="text"
              placeholder="Format penulisan organisasi adalah 'Jabatan_Nama orgsanisasi_Tahun aktif'.
               Pisahkan prestasi dengan prestasi lain dengan tanda koma (,).
               Contohnya, Ketua_pramuka_2018-2020, Angota_Paskibraka-2018 "
              className={`form-control ${
                errors.organisasi ? "is-invalid" : ""
              }`}
              ref={register({
                required: "Jika tidak memiliki Organisasi, masukkan anggka 0",
              })}
            />
            <ErrorMessage
              className="invalid-feedback"
              name="organisasi"
              as="div"
              errors={errors}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataKampus;
