import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Note from "../components/Note";

const Daftar = (props) => {
  const { register, watch, errors, handleSubmit } = useForm();
  const watchWali = watch("showWali", ""); // you can supply default value as second argument
  //const watchAllFields = watch(); // when pass nothing as argument, you are watching everything
  //const watchFields = watch(["showAge", "number"]); // you can also target specific fields by their names

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="container">
      <br />

      <Note />
      <div class="progress my-5">
        <div
          class="progress-bar"
          role="progressbar"
          style={{ width: "100%" }}
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          25%
        </div>
      </div>
      <div className="text-center mb-3">
        <h1>Form Pendaftaran beasiswa</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="checkbox" name="showAge" ref={register} />
        {watchWali && (
          <input type="number" name="age" ref={register({ min: 50 })} />
        )}
        <div className="card shadow mb-4 p-0">
          <div className="card-header p-3">
            <h3 className="ms-3">Data Diri</h3>
          </div>
          <div className="card-body px-5 py-3">
            <div className="form-group mb-3 row">
              <label className="col-sm-3 col-form-label">Nama Lengkap</label>
              <div className="col">
                <input
                  name="nama"
                  placeholder="Masukkan nama lengkap anda sesuai KTP/KTM"
                  className={`form-control ${errors.nama ? "is-invalid" : ""}`}
                  ref={register({
                    required: "Mama anda wajib dimasukkan",
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
              <label className=" col-sm-3 col-md-3 col-form-label">
                Jenis Kelamin
              </label>
              <div className="col-sm-9 col-md-3 mb-sm-3">
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
              <label className="col-sm-3 col-md-2 col-form-label">
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
              <label className="col-sm-3 col-form-label">Tanggal lahir</label>
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
              <label className="col-sm-3 col-form-label">Tempat lahir</label>
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
              <label className="col-sm-3 col-form-label ">Anak ke</label>
              <div className="col-sm-9 col-md-3 mb-sm-3">
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
              <label className="col-md-2 col-sm-3 col-form-label">
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
              <label className="col-2 col-sm-3 col-form-label">
                Alamat selama berkuliah
              </label>
              <div className="col">
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
              <label className="col-2 col-sm-3 col-form-label">
                Nomor Wa/Hp:
              </label>
              <div className="col">
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
            </div>
          </div>
        </div>

        {/* 
        data orang tua/wali        
        */}
        <div className="card shadow mb-4 p-0">
          <div className="card-header p-3">
            <h3 className="ms-3">Data Orangtua/Wali </h3>
          </div>
          <div className="card-body px-5 py-3">
            {/*data ayah */}
            <div className="form-group mb-3 row">
              <label className="col-2 col-sm-3 col-form-label">Nama Ayah</label>
              <div className="col">
                <input
                  name="namaAyah"
                  type="text"
                  placeholder="Masukkan nama ayah anda"
                  className={`form-control ${
                    errors.namaAyah ? "is-invalid" : ""
                  }`}
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
              <label className="col-2 col-sm-3 col-form-label">
                Alamat ayah
              </label>
              <div className="col">
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
              <label className="col-2 col-sm-3 col-form-label">
                Pekerjaan Ayah
              </label>
              <div className="col">
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
              <label className="col-2 col-sm-3 col-form-label">
                Nomor Telepon Ayah
              </label>
              <div className="col">
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
            </div>
            <div className="form-group mb-3 row">
              <label className="col-2 col-sm-3 col-form-label">
                Penghasilan Ayah
              </label>
              <div className="col">
                <input
                  name="penghasilanAyah"
                  type="text"
                  placeholder="Masukkan penghasilan ayah anda perbulan"
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

            {/*data ibu */}

            <div className="form-group mb-3 row">
              <label className="col-2 col-sm-3 col-form-label">Nama Ibu</label>
              <div className="col">
                <input
                  name="namaIbu"
                  type="text"
                  placeholder="Masukkan nama ibu anda"
                  className={`form-control ${
                    errors.namaIbu ? "is-invalid" : ""
                  }`}
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
              <label className="col-2 col-sm-3 col-form-label">
                Alamat ibu
              </label>
              <div className="col">
                <textarea
                  style={{ height: "80px" }}
                  name="alamatIbu"
                  placeholder="Masukkan alamat rumah ibu anda"
                  className={`form-control ${
                    errors.alamatIbu ? "is-invalid" : ""
                  }`}
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
              <label className="col-2 col-sm-3 col-form-label">
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
              <label className="col-2 col-sm-3 col-form-label">
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
              <label className=" col-sm-3 col-form-label">
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
              <label className="col-sm-3 col-form-label">Jumlah Saudara</label>
              <div className="col">
                <input
                  name="saudara"
                  type="number"
                  placeholder="Masukkan jumlah saudara anda"
                  className={`form-control ${
                    errors.saudara ? "is-invalid" : ""
                  }`}
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
            <div className="form-group mb-3 row">
              <label className="col-sm-4 col-form-label">
                Wali Anda bukan Orangtua
              </label>
              <div className="col-sm-2">
                <input
                  type="radio"
                  value="iya"
                  name="showWali"
                  ref={register}
                />
                <span>Iya</span>
                </div>
                <div className="col-sm-2">
                  <input
                    type="radio"
                    value="tidak"
                    name="showWali"
                    ref={register}
                  />
                  <span>Tidak</span>
                </div>
            </div>
            <div className="form-group mb-3 row">
              {watchWali === "iya" && (
                <>
                  <label className="col-sm-3 col-form-label">
                    Wali Anda bukan Orangtua
                  </label>
                  <input type="number" className="form-control" name="age" />
                </>
              )}
            </div>
          </div>
        </div>

        {/* 
        data akademik
        
        */}
        <div className="card shadow mb-4 p-0">
          <div className="card-header p-3">
            <h3 className="ms-3">Data Akademik</h3>
          </div>
          <div className="card-body px-5 py-3">
            <div className="form-group mb-3 row">
              <label className="col-2 col-sm-3 col-form-label">
                Perguruan Tinggi
              </label>
              <div className="col">
                <select
                  name="kampus"
                  type="text"
                  className={`form-select   ${
                    errors.kampus ? "is-invalid" : ""
                  }`}
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
            <div className="form-group mb-3 row">
              <label className="col-sm-3 col-form-label">Fakultas</label>
              <div className="col">
                <input
                  name="fakultas"
                  type="text"
                  placeholder="Masukkan Fakultas anda"
                  className={`form-control ${
                    errors.fakultas ? "is-invalid" : ""
                  }`}
                  ref={register({
                    required: "Fakultas anda wajib dimasukkan",
                  })}
                />
                <ErrorMessage
                  className="invalid-feedback"
                  name="fakultas"
                  as="div"
                  errors={errors}
                />
              </div>
            </div>
            <div className="form-group mb-3 row">
              <label className="col-sm-3 col-form-label">Program studi</label>
              <div className="col">
                <input
                  name="prodi"
                  type="text"
                  placeholder="Masukkan Program studi anda"
                  className={`form-control ${errors.prodi ? "is-invalid" : ""}`}
                  ref={register({
                    required: "Program studi anda wajib dimasukkan",
                  })}
                />
                <ErrorMessage
                  className="invalid-feedback"
                  name="prodi"
                  as="div"
                  errors={errors}
                />
              </div>
            </div>
            <div className="form-group mb-3 row">
              <label className="col-sm-3 col-form-label">
                Nomor induk mahasiswa
              </label>
              <div className="col">
                <input
                  name="nim"
                  type="text"
                  placeholder="Masukkan nomor induk mahasiswa anda"
                  className={`form-control ${errors.nim ? "is-invalid" : ""}`}
                  ref={register({
                    required: "Nomor induk mahasiswwa anda wajib dimasukkan",
                  })}
                />
                <ErrorMessage
                  className="invalid-feedback"
                  name="nim"
                  as="div"
                  errors={errors}
                />
              </div>
            </div>
            <div className="form-group mb-3 row">
              <label className="col-2 col-sm-3  col-form-label">
                Tahun Masuk Kuliah
              </label>
              <div className="col">
                <select
                  name="angkatan"
                  aria-label="Floating label select example"
                  className={`form-select ${
                    errors.angkatan ? "is-invalid" : ""
                  }`}
                  ref={register({
                    required: "Tahun angkatan harus diisi",
                  })}
                >
                  <option selected></option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                </select>
                <ErrorMessage
                  className="invalid-feedback"
                  name="angkatan"
                  as="div"
                  errors={errors}
                />
              </div>
            </div>
            <div className="form-group mb-3 row">
              <label className="col-2 col-sm-3  col-form-label">
                Tahun rencana lulus
              </label>
              <div className="col">
                <select
                  name="lulus"
                  aria-label="Floating label select example"
                  className={`form-select ${errors.lulus ? "is-invalid" : ""}`}
                  ref={register({
                    required: "Tahun rencana lulus harus diisi",
                  })}
                >
                  <option selected></option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
                <ErrorMessage
                  className="invalid-feedback"
                  name="lulus"
                  as="div"
                  errors={errors}
                />
              </div>
            </div>
            <div className="form-group mb-3 row">
              <label className="col-2 col-sm-3  col-form-label">
                Jenjang pendidikan
              </label>
              <div className="col">
                <select
                  name="jenjang"
                  aria-label="Floating label select example"
                  className={`form-select ${
                    errors.jenjang ? "is-invalid" : ""
                  }`}
                  ref={register({
                    required: "Tahun rencana lulus harus diisi",
                  })}
                >
                  <option selected></option>
                  <option value="S1">S1</option>
                  <option value="D-III">D-III</option>
                  <option value="D-IV">D-IV</option>
                </select>
                <ErrorMessage
                  className="invalid-feedback"
                  name="jenjang"
                  as="div"
                  errors={errors}
                />
              </div>
            </div>
            <div className="form-group mb-3 row">
              <label className="col-sm-3 col-form-label">
                Nilai IPK terakhir
              </label>
              <div className="col">
                <input
                  name="ipk"
                  type="decimal"
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
                <ErrorMessage
                  className="invalid-feedback"
                  name="ipk"
                  as="div"
                  errors={errors}
                />
              </div>
            </div>
            <div className="form-group mb-3 row">
              <label className="col-sm-3 col-form-label">
                Prestasi selama berkuliah
              </label>
              <div className="col">
                <input
                  name="prestasi"
                  type="decimal"
                  placeholder="Masukkan nilai ipk anda"
                  className={`form-control ${errors.ipk ? "is-invalid" : ""}`}
                  ref={register({
                    required: "Nilai IPK anda wajib dimasukkan",
                  })}
                />
                <ErrorMessage
                  className="invalid-feedback"
                  name="ipk"
                  as="div"
                  errors={errors}
                />
              </div>
            </div>
            <div className="form-group mb-3 row">
              <label className="col-sm-3 col-form-label">
                organisasi yang pernah diikuti
              </label>
              <div className="col">
                <input
                  name="organisasi"
                  type="decimal"
                  placeholder="Masukkan nilai ipk anda"
                  className={`form-control ${errors.ipk ? "is-invalid" : ""}`}
                  ref={register({
                    required: "Nilai IPK anda wajib dimasukkan",
                  })}
                />
                <ErrorMessage
                  className="invalid-feedback"
                  name="ipk"
                  as="div"
                  errors={errors}
                />
              </div>
            </div>
          </div>
        </div>

        {/*
         */}
        <div className="form-group mb-3 row">
          <label className=" col-sm-3  col-form-label">
            Alasan mendaftar beasiswa ini:
          </label>
          <div className="col">
            <textarea
              name="motif"
              placeholder="Masukkan alasan anda minimal 100 karakter dan maksimal 300 karakter"
              className={`form-control ${errors.motif ? "is-invalid" : ""}`}
              style={{ height: "150px" }}
              ref={register({
                required: "Alasan anda mendaftar harus diisi",
                minLength: {
                  value: 10,
                  message: "minimal 100 karakter",
                },
                maxLength: {
                  value: 30,
                  message: "maksimal 300 karakter",
                },
              })}
            />
            <ErrorMessage
              className="invalid-feedback"
              name="motif"
              as="div"
              errors={errors}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label className="col-sm-3 col-form-label">
            Foto kartu tanda mahasiswa
          </label>
          <div className="col">
            <input
              class={`form-control ${errors.ktm ? "is-invalid" : ""}`}
              type="file"
              name="ktm"
              accept=".jpg,.png,.jpeg"
              ref={register({
                required: "Kartu tanda mahasiswa harus diisi",
              })}
            />
            <ErrorMessage
              className="invalid-feedback"
              name="ktm"
              as="div"
              errors={errors}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label className="col-form-label col-sm-3">
            Transkip nilai terakhir
          </label>
          <div className="col">
            <input
              class={`form-control ${errors.nilai ? "is-invalid" : ""}`}
              type="file"
              name="nilai"
              accept=".pdf"
              ref={register({
                required: "transkip nilai harus diisi",
              })}
            />
            <ErrorMessage
              className="invalid-feedback"
              name="nilai"
              as="div"
              errors={errors}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label className="col-form-label col-sm-3">
            Surat keterangan tidak mampu{" "}
          </label>
          <div className="col">
            <input
              class={`form-control ${errors.mampu ? "is-invalid" : ""}`}
              type="file"
              name="mampu"
              accept=".pdf"
              ref={register({
                required: "Surat keterangan tidak mampu harus diisi",
              })}
            />
            <ErrorMessage
              className="invalid-feedback"
              name="mampu"
              as="div"
              errors={errors}
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <div className="form-check mb-3">
            <label className="col-form-label col-sm-3">jenis beasiswa</label>
            <div class="form-check form-check-inline">
              <input
                class={`form-check-input ${
                  errors.jenisBeasiswa ? "is-invalid" : ""
                }`}
                type="radio"
                value="Ungulan"
                for="inlineCheckbox1"
                name="jenisBeaiswa"
                ref={register({
                  required: "Surat keterangan tidak mampu harus diisi",
                })}
              />
              <label class="form-check-label" for="inlineCheckbox1">
                Ungulan
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class={`form-check-input ${
                  errors.jenisBeasiswa ? "is-invalid" : ""
                }`}
                type="radio"
                for="inlineCheckbox2"
                value="reguler"
                name="jenisBeaiswa"
                ref={register({
                  required: "Surat keterangan tidak mampu harus diisi",
                })}
              />
              <label class="form-check-label" for="inlineCheckbox2">
                Reguler
              </label>
            </div>
            <ErrorMessage
              className="invalid-feedback"
              name="jenisBeasiswa"
              as="div"
              errors={errors}
            />
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-primary col-8 mx-auto"
          value="Submit"
        />
        <br />
      </form>
    </div>
  );
};
export default Daftar;
