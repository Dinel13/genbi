import React from "react";

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
            {
            //to validate required
            errors.kampus && (
              <div className="invalid-feedback">{errors.kampus.message}</div>
            )
          }
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
          {
            //to validate required
            errors.fakultas && (
              <div className="invalid-feedback">{errors.fakultas.message}</div>
            )
          }
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
          {
            //to validate required
            errors.prodi && (
              <div className="invalid-feedback">{errors.prodi.message}</div>
            )
          }
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
          {
            //to validate required
            errors.nim && (
              <div className="invalid-feedback">{errors.nim.message}</div>
            )
          }
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
          {
            //to validate required
            errors.ipk && (
              <div className="invalid-feedback">{errors.ipk.message}</div>
            )
          }
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
          {
            //to validate required
            errors.sks && (
              <div className="invalid-feedback">{errors.sks.message}</div>
            )
          }
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
          {
            //to validate required
            errors.semester && (
              <div className="invalid-feedback">{errors.semester.message}</div>
            )
          }
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
          {
            //to validate required
            errors.angkatan && (
              <div className="invalid-feedback">{errors.angkatan.message}</div>
            )
          }
        </div>
        <div className="form-floating col-md-6 mb-3">
          <select
            name="thnLulus"
            defaultValue={props.dataSaveOnLocal.thnLulus}
            type="text"
            className={`form-select ${errors.thnLulus ? "is-invalid" : ""}`}
            ref={register({
              required: "Tahun rencana lulus harus diisi",
            })}
          >
            <option selected></option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
          <label className="ps-4 fw-bold">Tahun Rencana Lulus</label>
          {
            //to validate required
            errors.thnLulus && (
              <div className="invalid-feedback">{errors.thnLulus.message}</div>
            )
          }
        </div> <div className="form-group mb-3 row">
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
             {
            //to validate required
            errors.prestasi && (
              <div className="invalid-feedback">{errors.prestasi.message}</div>
            )
          }
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
            {
            //to validate required
            errors.organisasi && (
              <div className="invalid-feedback">{errors.organisasi.message}</div>
            )
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataKampus;
