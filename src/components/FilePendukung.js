import React from "react";
import { ErrorMessage } from "@hookform/error-message";

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
            <h4 className="alert-heading text-center"  >Perhatian!</h4>
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
                })}
              />
              <ErrorMessage
                className="invalid-feedback"
                name="foto"
                as="div"
                errors={errors}
              />
              <p className="form-text">file harus bertipe jpg, jpeg atau png</p>
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
                    "Kartu tanda pendudukharus diisi dan memiliki ukuran dibawah 500 Kb",
                })}
              />
              <ErrorMessage
                className="invalid-feedback"
                name="ktp"
                as="div"
                errors={errors}
              />
              <p className="form-text">file harus bertipe jpg, jpeg atau png</p>
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
                })}
              />
              <ErrorMessage
                className="invalid-feedback"
                name="ktm"
                as="div"
                errors={errors}
              />
              <p className="form-text">file harus bertipe jpg, jpeg atau png</p>
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
                })}
              />
              <ErrorMessage
                className="invalid-feedback"
                name="nilai"
                as="div"
                errors={errors}
              />
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
                })}
              />
              <ErrorMessage
                className="invalid-feedback"
                name="rekening"
                as="div"
                errors={errors}
              />
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
                name="beasiswaLain "
                accept=".pdf"
                ref={register({
                  required:
                    "Surat keterangan tidak sedang menerima beasiswa lain harus diisi dan memiliki ukuran dibawah 500 Kb",
                })}
              />
              <ErrorMessage
                className="invalid-feedback"
                name="beasiswaLain"
                as="div"
                errors={errors}
              />
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
                    })}
                  />
                  <ErrorMessage
                    className="invalid-feedback"
                    name="rekomendasi"
                    as="div"
                    errors={errors}
                  />
                  <p className="form-text">file harus bertipe pdf</p>
                </div>
              </div>
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
                    })}
                  />
                  <ErrorMessage
                    className="invalid-feedback"
                    name="rekomendasi2"
                    as="div"
                    errors={errors}
                  />
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
                    })}
                  />
                  <ErrorMessage
                    className="invalid-feedback"
                    name="toeflFile"
                    as="div"
                    errors={errors}
                  />
                  <p className="form-text">file harus bertipe pdf</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="form-group mb-3 row">
                <label className="col-form-label fw-bold col-md-4">
                  Surat Rekomendasi
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
                    })}
                  />
                  <ErrorMessage
                    className="invalid-feedback"
                    name="rekomendasi"
                    as="div"
                    errors={errors}
                  />
                  <p className="form-text">file harus bertipe pdf</p>
                </div>
              </div>
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
                    })}
                  />
                  <ErrorMessage
                    className="invalid-feedback"
                    name="mampu"
                    as="div"
                    errors={errors}
                  />
                  <p className="form-text">file harus bertipe pdf</p>
                </div>
              </div>
            </>
          )}
          <div className="form-group mb-3 row">
            <label className="col-form-label fw-bold col-md-4">
              Surat keterangan tidak mampu
            </label>
            <div className="col">
              <input
                className={`form-control ${errors.mampu ? "is-invalid" : ""}`}
                type="file"
                name="mampu"
                accept=".pdf"
                ref={register({
                  required:
                    "Surat keterangan tidak mampu harus diisi dan memiliki ukuran dibawah 500 Kb",
                })}
              />
              <ErrorMessage
                className="invalid-feedback"
                name="mampu"
                as="div"
                errors={errors}
              />
              <p className="form-text">file harus bertipe pdf</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FilePendukung;
