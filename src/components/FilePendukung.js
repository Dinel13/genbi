import React from "react";

const FilePendukung = (props) => {
  const { errors, register, watchJenisBeasiswa } = props;
  return (
    <div className="card shadow mb-4 p-0">
      <div className="card-header bg-secondary p-3">
        <h3 className="ms-3 my-2 text-white fw-bold">File Pendukung</h3>
      </div>
      <div className="card-body px-5 py-3 row">
        <div className="col-lg-10 col-xl-8  mx-auto">
          <div className="alert alert-warning " role="alert">
            <h4 className="alert-heading text-center">Perhatian!</h4>
            <hr />
            <ul>
              <li>
                Setiap file yang anda upload harus memiliki ukuran dibawah 500
                Kb
              </li>
              <li>
                Sertifikat, Piagam prestasi (akademik dan non-akademik) selama
                masa kuliah diupload ke penyimpanan cloud (misalnya google
                drive) dalam satu folder. pastikan folder tersebut dapat diakses
                orang lain
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group mb-3 row">
              <label className="col-md-4 col-form-label fw-bold">
                Pas foto berwarna 4x6
              </label>
              <div className="col">
                <input
                  className={`form-control ${errors.foto ? "is-invalid" : ""}`}
                  type="file"
                  name="foto"
                  accept=".jpg,.png,.jpeg"
                  ref={register({
                    required:
                      "Pas foto harus diisi dan memiliki ukuran dibawah 500 Kb",
                    validate: {
                      maxSize: (value) => value[0].size < 500000,
                    },
                  })}
                />
                {errors.foto?.type === "maxSize" && (
                  <div className="invalid-feedback">
                    Ukuran file anda (
                    {Math.round(props.watchAll.foto[0].size / 1000)} Kb )
                    terlalu besar
                  </div>
                )}
                {
                  //to validate required
                  errors.foto && (
                    <div className="invalid-feedback">
                      {errors.foto.message}
                    </div>
                  )
                }
                <p className="form-text">
                  file harus bertipe jpg, jpeg atau png
                </p>
              </div>
            </div>
            <div className="form-group mb-3 row">
              <label className="col-md-4 col-form-label fw-bold">
                Foto kartu tanda penduduk
              </label>
              <div className="col">
                <input
                  className={`form-control ${errors.ktp ? "is-invalid" : ""}`}
                  type="file"
                  name="ktp"
                  accept=".jpg,.png,.jpeg"
                  ref={register({
                    required:
                      "Kartu tanda penduduk harus diisi dan memiliki ukuran dibawah 500 Kb",
                    validate: {
                      maxSize: (value) => value[0].size < 500000,
                    },
                  })}
                />
                {errors.ktp?.type === "maxSize" && (
                  <div className="invalid-feedback">
                    Ukuran file anda (
                    {Math.round(props.watchAll.ktp[0].size / 1000)} Kb ) terlalu
                    besar
                  </div>
                )}
                {
                  //to validate required
                  errors.ktp && (
                    <div className="invalid-feedback">{errors.ktp.message}</div>
                  )
                }
                <p className="form-text">
                  file harus bertipe jpg, jpeg atau png
                </p>
              </div>
            </div>
            <div className="form-group mb-3 row">
              <label className="col-md-4 col-form-label fw-bold">
                Foto kartu tanda mahasiswa
              </label>
              <div className="col">
                <input
                  className={`form-control ${errors.ktm ? "is-invalid" : ""}`}
                  type="file"
                  name="ktm"
                  accept=".jpg,.png,.jpeg"
                  ref={register({
                    required:
                      "Kartu tanda mahasiswa harus diisi dan memiliki ukuran dibawah 500 Kb",
                    validate: {
                      maxSize: (value) => value[0].size < 500000,
                    },
                  })}
                />
                {errors.ktm?.type === "maxSize" && (
                  <div className="invalid-feedback">
                    Ukuran file anda (
                    {Math.round(props.watchAll.ktm[0].size / 1000)} Kb ) terlalu
                    besar
                  </div>
                )}
                {
                  //to validate required
                  errors.ktm && (
                    <div className="invalid-feedback">{errors.ktm.message}</div>
                  )
                }
                <p className="form-text">
                  file harus bertipe jpg, jpeg atau png
                </p>
              </div>
            </div>
            <div className="form-group mb-3 row">
              <label className="col-form-label fw-bold col-md-4">
                Transkip nilai terbaru terlegalisir
              </label>
              <div className="col">
                <input
                  className={`form-control ${errors.nilai ? "is-invalid" : ""}`}
                  type="file"
                  name="nilai"
                  accept=".pdf"
                  ref={register({
                    required:
                      "transkip nilai harus diisi dan memiliki ukuran dibawah 500 Kb",
                    validate: {
                      maxSize: (value) => value[0].size < 500000,
                    },
                  })}
                />
                {errors.nilai?.type === "maxSize" && (
                  <div className="invalid-feedback">
                    Ukuran file anda (
                    {Math.round(props.watchAll.nilai[0].size / 1000)} Kb )
                    terlalu besar
                  </div>
                )}
                {
                  //to validate required
                  errors.nilai && (
                    <div className="invalid-feedback">
                      {errors.nilai.message}
                    </div>
                  )
                }
                <p className="form-text">file harus bertipe pdf</p>
              </div>
            </div>
            <div className="form-group mb-3 row">
              <label className="col-form-label fw-bold col-md-4">
                Scan buku rekening bang (bagian depan dalam) atas nama mahasiswa
              </label>
              <div className="col">
                <input
                  className={`form-control ${
                    errors.rekening ? "is-invalid" : ""
                  }`}
                  type="file"
                  name="rekening"
                  accept=".pdf"
                  ref={register({
                    required:
                      "scan buku rekening harus diisi dan memiliki ukuran dibawah 500 Kb",
                    validate: {
                      maxSize: (value) => value[0].size < 500000,
                    },
                  })}
                />
                {errors.rekening?.type === "maxSize" && (
                  <div className="invalid-feedback">
                    Ukuran file anda (
                    {Math.round(props.watchAll.rekening[0].size / 1000)} Kb )
                    terlalu besar
                  </div>
                )}
                {
                  //to validate required
                  errors.rekening && (
                    <div className="invalid-feedback">
                      {errors.rekening.message}
                    </div>
                  )
                }
                <p className="form-text">file harus bertipe pdf</p>
              </div>
            </div>
            <div className="form-group mb-3 row">
              <label className="col-form-label fw-bold col-md-4">
                Surat keterangan tidak sedang menerima beasiswa lain
              </label>
              <div className="col">
                <input
                  className={`form-control ${
                    errors.beasiswaLain ? "is-invalid" : ""
                  }`}
                  type="file"
                  name="beasiswaLain"
                  accept=".pdf"
                  ref={register({
                    required:
                      "Surat keterangan tidak sedang menerima beasiswa lain harus diisi dan memiliki ukuran dibawah 500 Kb",
                    validate: {
                      maxSize: (value) => value[0].size < 500000,
                    },
                  })}
                />
                {errors.beasiswaLain?.type === "maxSize" && (
                  <div className="invalid-feedback">
                    Ukuran file anda (
                    {Math.round(props.watchAll.beasiswaLain[0].size / 1000)} Kb
                    ) terlalu besar
                  </div>
                )}
                {
                  //to validate required
                  errors.beasiswaLain && (
                    <div className="invalid-feedback">
                      {errors.beasiswaLain.message}
                    </div>
                  )
                }
                <p className="form-text">file harus bertipe pdf</p>
              </div>
            </div>
            <div className="form-group mb-3 row">
              <label className="col-form-label fw-bold col-md-4">
                Surat Rekomendasi satu
              </label>
              <div className="col">
                <input
                  className={`form-control ${
                    errors.rekomendasi ? "is-invalid" : ""
                  }`}
                  type="file"
                  name="rekomendasi"
                  accept=".pdf"
                  ref={register({
                    required:
                      "Surat rekomendasi harus diisi dan memiliki ukuran dibawah 500 Kb",
                    validate: {
                      maxSize: (value) => value[0].size < 500000,
                    },
                  })}
                />
                {errors.rekomendasi?.type === "maxSize" && (
                  <div className="invalid-feedback">
                    Ukuran file anda (
                    {Math.round(props.watchAll.rekomendasi[0].size / 1000)} Kb )
                    terlalu besar
                  </div>
                )}
                {
                  //to validate required
                  errors.rekomendasi && (
                    <div className="invalid-feedback">
                      {errors.rekomendasi.message}
                    </div>
                  )
                }
                <p className="form-text">file harus bertipe pdf</p>
              </div>
            </div>
            {/*
            to update if schema beasiswa cahnge 
            */}
            {watchJenisBeasiswa === "ungulan" ? (
              <>
                <div className="form-group mb-3 row">
                  <label className="col-form-label fw-bold col-md-4">
                    Surat Rekomendasi dua
                  </label>
                  <div className="col">
                    <input
                      className={`form-control ${
                        errors.rekomendasi2 ? "is-invalid" : ""
                      }`}
                      type="file"
                      name="rekomendasi2"
                      accept=".pdf"
                      ref={register({
                        required:
                          "Surat rekomendasi harus diisi dan memiliki ukuran dibawah 500 Kb",
                        validate: {
                          maxSize: (value) => value[0].size < 500000,
                        },
                      })}
                    />
                    {errors.rekomendasi2?.type === "maxSize" && (
                      <div className="invalid-feedback">
                        Ukuran file anda (
                        {Math.round(props.watchAll.rekomendasi2[0].size / 1000)}{" "}
                        Kb ) terlalu besar
                      </div>
                    )}
                    {
                      //to validate required
                      errors.rekomendasi2 && (
                        <div className="invalid-feedback">
                          {errors.rekomendasi2.message}
                        </div>
                      )
                    }
                    <p className="form-text">file harus bertipe pdf</p>
                  </div>
                </div>
                <div className="form-group mb-3 row">
                  <label className="col-form-label fw-bold col-md-4">
                    Sertifikat TOEFL
                  </label>
                  <div className="col">
                    <input
                      className={`form-control ${
                        errors.toeflFile ? "is-invalid" : ""
                      }`}
                      type="file"
                      name="toeflFile"
                      accept=".pdf"
                      ref={register({
                        required:
                          "Sertifikat TOEFL harus diisi dan memiliki ukuran dibawah 500 Kb",
                        validate: {
                          maxSize: (value) => value[0].size < 500000,
                        },
                      })}
                    />
                    {errors.toeflFile?.type === "maxSize" && (
                      <div className="invalid-feedback">
                        Ukuran file anda (
                        {Math.round(props.watchAll.toeflFile[0].size / 1000)} Kb
                        ) terlalu besar
                      </div>
                    )}
                    {
                      //to validate required
                      errors.toeflFile && (
                        <div className="invalid-feedback">
                          {errors.toeflFile.message}
                        </div>
                      )
                    }
                    <p className="form-text">file harus bertipe pdf</p>
                  </div>
                </div>
              </>
            ) : (
              <div className="form-group mb-3 row">
                <label className="col-form-label fw-bold col-md-4">
                  Surat keterangan tidak mampu
                </label>
                <div className="col">
                  <input
                    className={`form-control ${
                      errors.mampu ? "is-invalid" : ""
                    }`}
                    type="file"
                    name="mampu"
                    accept=".pdf"
                    ref={register({
                      required:
                        "Surat keterangan tidak mampu harus diisi dan memiliki ukuran dibawah 500 Kb",
                      validate: {
                        maxSize: (value) => value[0].size < 500000,
                      },
                    })}
                  />
                  {errors.mampu?.type === "maxSize" && (
                    <div className="invalid-feedback">
                      Ukuran file anda (
                      {Math.round(props.watchAll.mampu[0].size / 1000)} Kb )
                      terlalu besar
                    </div>
                  )}
                  {
                    //to validate required
                    errors.mampu && (
                      <div className="invalid-feedback">
                        {errors.mampu.message}
                      </div>
                    )
                  }
                  <p className="form-text">file harus bertipe pdf</p>
                </div>
              </div>
            )}
            <div className="form-group mb-3 row">
              <label className="col-sm-6 col-md-5 col-lg-4 col-form-label fw-bold">
                Link sertifikat prestasi
              </label>
              <div className="col">
                <input
                  name="sertifikat"
                  type="text"
                  placeholder="Link sertifikat  prestasi"
                  className={`form-control ${
                    errors.sertifikat ? "is-invalid" : ""
                  }`}
                  ref={register({
                    required:
                      "jika tidak memiliki sertifikat prestasi masukkan angka 0",
                  })}
                />
                {
                  errors.sertifikat && (
                    <div className="invalid-feedback">
                      {errors.sertifikat.message}
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilePendukung;
