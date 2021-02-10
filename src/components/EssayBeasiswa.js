import React from "react";

const EssayBeasiswa = (props) => {
  const {
    errors,
    register,
    watchKampus,
    watchGenbi,
    watchAlumni,
    watchJenisBeasiswa,
  } = props;
  return (
    <div className="card shadow mb-5 p-0">
      <div className="card-header bg-secondary p-3">
        <h3 className="ms-3 my-2 text-white fw-bold">Essay Beasiswa</h3>
      </div>
      <div className="card-body px-5 pt-4 row">
        <div className="col-md-10 col-lg-8 mx-auto">
          <div className="alert alert-warning " role="alert">
            <h4 className="alert-heading">Perhatian!</h4>
            <hr />
            <ul>
              <li>
                Essay yang ada masukkan sangat menentukan peluang anda lolos ke
                tahap berikutnya
              </li>
              <li>Setiap field hanya dapat diisi maksimal 300 karakter</li>
            </ul>
          </div>
        </div>
        {watchKampus === "unhas" && (
          <div className="form-group mb-3 row">
            <div className="form-check col-md-8 ps-3">
              <label className="col-form-label fw-bold col-sm-3">
                Skema beasiswa
              </label>
              <div className="form-check form-check-inline">
                <input
                  className={`form-check-input ${
                    errors.jenisBeasiswa ? "is-invalid" : ""
                  }`}
                  type="radio"
                  value="ungulan"
                  name="jenisBeasiswa"
                  ref={register({
                    required: "Jenis beasiswa harus diisi",
                  })}
                />
                <label className="form-check-label">Ungulan</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className={`form-check-input ${
                    errors.jenisBeasiswa ? "is-invalid" : ""
                  }`}
                  type="radio"
                  value="reguler"
                  name="jenisBeasiswa"
                  ref={register({
                    required: "Jenis beasiswa harus diisi",
                  })}
                />
                <label className="form-check-label">Reguler</label>
              </div>
              {errors.jenisBeasiswa && (
                <div className="text-danger">
                  Jenis beasiswa harus diisi
                </div>
              )}
            </div>

            {
              //to update if scema beasiswa is ungulan
              watchJenisBeasiswa === "ungulan" && (
                <div className="form-floating col-sm-6 col-md-4">
                  <input
                    name="toeflNilai"
                    type="text"
                    defaultValue={props.dataSaveOnLocal.toeflNilai}
                    placeholder="Masukkan Nilai Toefl anda"
                    className={`form-control ${
                      errors.toeflNilai ? "is-invalid" : ""
                    }`}
                    ref={register({})}
                  />
                  <label className="ps-4 fw-bold">Nilai Toefl</label>
                  {
                    //to validate required
                    errors.toeflNilai && (
                      <div className="invalid-feedback">
                        {errors.toeflNilai.message}
                      </div>
                    )
                  }
                </div>
              )
            }
          </div>
        )}

        <div className="form-group mb-3 row">
          <div className="form-check ps-3">
            <label className="col-form-label fw-bold col-md-6">
              Sedang menerima beasiswa lain atau ikatan dinas
            </label>
            <div className="form-check form-check-inline">
              <input
                className={`form-check-input ${
                  errors.ikatan ? "is-invalid" : ""
                }`}
                type="radio"
                value="ya"
                name="ikatan"
                ref={register({
                  required: "Field ini harus dipilih",
                })}
              />
              <label className="form-check-label">Ya</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className={`form-check-input ${
                  errors.ikatan ? "is-invalid" : ""
                }`}
                type="radio"
                value="tidak"
                name="ikatan"
                ref={register({
                  required: "Field ini harus dipilih",
                })}
              />
              <label className="form-check-label">Tidak</label>
            </div>
            {errors.ikatan && (
              <span className="text-danger"> Field ini harus dipilih</span>
            )}
          </div>
        </div>
        <div className="form-group mb-3 row">
          <div className="form-check ps-3">
            <label className="col-form-label fw-bold col-md-6">
              Pernah menerima beasiswa Bank Indonesia
            </label>
            <div className="form-check form-check-inline">
              <input
                className={`form-check-input ${
                  errors.alumni ? "is-invalid" : ""
                }`}
                type="radio"
                value="ya"
                name="alumni"
                ref={register({
                  required: "Field ini harus dipilih",
                })}
              />
              <label className="form-check-label">Ya</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className={`form-check-input ${
                  errors.alumni ? "is-invalid" : ""
                }`}
                type="radio"
                value="tidak"
                name="alumni"
                ref={register({
                  required: "Field ini harus dipilih",
                })}
              />
              <label className="form-check-label">Tidak</label>
            </div>
            {errors.alumni && (
              <span className="text-danger"> Field ini harus dipilih</span>
            )}
          </div>
        </div>
        {watchJenisBeasiswa === "ungulan" && (
          <div className="alert alert-danger text-center" role="alert">
            <h4 className="fw-bold">
              Semua essay harus diisi dengan bahasa inggris
            </h4>
          </div>
        )}
        {watchAlumni === "ya" && (
          <>
            <div className="form-floating col-md-6 mb-3">
              <input
                name="alumniThn"
                type="text"
                defaultValue={props.dataSaveOnLocal.alumniThn}
                placeholder="Masukkan tahun anda diterima"
                className={`form-control ${
                  errors.alumniThn ? "is-invalid" : ""
                }`}
                ref={register({})}
              />
              <label className="ps-4 fw-bold">Tahun menerima beasiswa BI</label>
              {
                //to validate required
                errors.alumniThn && (
                  <div className="invalid-feedback">
                    {errors.alumniThn.message}
                  </div>
                )
              }
            </div>
            <div className="form-floating col-md-6 mb-3">
              <input
                name="alumniJabatan"
                defaultValue={props.dataSaveOnLocal.alumniJabatan}
                type="text"
                placeholder="Masukkan jabatan anda"
                className={`form-control ${
                  errors.alumniJabatan ? "is-invalid" : ""
                }`}
                ref={register({})}
              />
              <label className="ps-4 fw-bold">Jabatan di Genbi</label>
              {
                //to validate required
                errors.alumniJabatan && (
                  <div className="invalid-feedback">
                    {errors.alumniJabatan.message}
                  </div>
                )
              }
            </div>
            <div className="form-floating col-12 mb-3">
              <textarea
                name="bergenbi"
                defaultValue={props.dataSaveOnLocal.bergenbi}
                placeholder="Masukkan pengalaman menerima beasiswa BI"
                className={`form-control ${
                  errors.bergenbi ? "is-invalid" : ""
                }`}
                style={{ height: "180px" }}
                ref={register({
                  required: "Pengalaman anda harus diisi",
                  maxLength: {
                    value: 300,
                    message: "maksimal 300 karakter",
                  },
                })}
              />
              <label className=" ps-4 fw-bold">
                Pengalaman menerima beasiswa Bank Indonesia:
              </label>
              {
                //to validate required
                errors.bergenbi && (
                  <div className="invalid-feedback">
                    {errors.bergenbi.message}
                  </div>
                )
              }
            </div>
          </>
        )}
        <div className="form-floating col-12 mb-3">
          <textarea
            name="motif"
            defaultValue={props.dataSaveOnLocal.motif}
            placeholder="Masukkan alasan anda dengan maksimal 300 karakter"
            className={`form-control ${errors.motif ? "is-invalid" : ""}`}
            style={{ height: "180px" }}
            ref={register({
              required: "Alasan anda mendaftar harus diisi",
              maxLength: {
                value: 300,
                message: "maksimal 300 karakter",
              },
            })}
          />
          <label className=" ps-4 fw-bold">
            Alasan mendaftar beasiswa ini:
          </label>
          {
            //to validate required
            errors.motif && (
              <div className="invalid-feedback">{errors.motif.message}</div>
            )
          }
        </div>

        <div className="form-floating col-12 mb-3">
          <textarea
            name="rencana"
            defaultValue={props.dataSaveOnLocal.rencana}
            placeholder="Masukkan rencana anda dengan maksimal 300 karakter"
            className={`form-control ${errors.rencana ? "is-invalid" : ""}`}
            style={{ height: "180px" }}
            ref={register({
              required: "Rencana pengunaan beasiswaharus diisi",
              maxLength: {
                value: 300,
                message: "maksimal 300 karakter",
              },
            })}
          />
          <label className="ps-4 fw-bold">Rencana pengunaan beasiswa:</label>
          {
            //to validate required
            errors.rencana && (
              <div className="invalid-feedback">{errors.rencana.message}</div>
            )
          }
        </div>
        <div className="form-floating col-12 mb-3">
          <textarea
            name="pantas"
            defaultValue={props.dataSaveOnLocal.pantas}
            placeholder="Masukkan jawaban anda dengan maksimal 300 karakter"
            className={`form-control ${errors.pantas ? "is-invalid" : ""}`}
            style={{ height: "180px" }}
            ref={register({
              required: "Anda harus memasukkan jawaban",
              maxLength: {
                value: 300,
                message: "maksimal 300 karakter",
              },
            })}
          />
          <label className="ps-4 fw-bold">
            Kenapa anda pantas mendapatkan beasiswa ini:
          </label>
          {
            //to validate required
            errors.pantas && (
              <div className="invalid-feedback">{errors.pantas.message}</div>
            )
          }
        </div>
        <div className="form-floating col-12 mb-3">
          <textarea
            name="lulus"
            defaultValue={props.dataSaveOnLocal.lulus}
            placeholder="Masukkan jawaban anda dengan maksimal 300 karakter"
            className={`form-control ${errors.lulus ? "is-invalid" : ""}`}
            style={{ height: "180px" }}
            ref={register({
              required: "Anda harus memasukkan jawaban",
              maxLength: {
                value: 300,
                message: "maksimal 300 karakter",
              },
            })}
          />
          <label className="ps-4 fw-bold">
            Rencana anda setelah lulus kuliah:
          </label>
          {
            //to validate required
            errors.lulus && (
              <div className="invalid-feedback">{errors.lulus.message}</div>
            )
          }
        </div>
        <div className="form-floating col-12 mb-3">
          <textarea
            name="sosial"
            defaultValue={props.dataSaveOnLocal.sosial}
            placeholder="Masukkan jawaban anda dengan maksimal 300 karakter"
            className={`form-control ${errors.sosial ? "is-invalid" : ""}`}
            style={{ height: "180px" }}
            ref={register({
              required:
                "jika tidak memimiliki aktivitas sosial masukkan angka 0",
              maxLength: {
                value: 300,
                message: "maksimal 300 karakter",
              },
            })}
          />
          <label className="ps-4 fw-bold">
            Aktivitas sosial yang biasa di lakukan
          </label>
          {
            //to validate required
            errors.sosial && (
              <div className="invalid-feedback">{errors.sosial.message}</div>
            )
          }
        </div>
        <div className="form-floating col-12 mb-3">
          <textarea
            name="saran"
            defaultValue={props.dataSaveOnLocal.saran}
            placeholder="Masukkan jawaban anda dengan maksimal 300 karakter"
            className={`form-control ${errors.saran ? "is-invalid" : ""}`}
            style={{ height: "180px" }}
            ref={register({
              required: "jika tidak memimiliki saran masukkan angka 0",
              maxLength: {
                value: 300,
                message: "maksimal 300 karakter",
              },
            })}
          />
          <label className="ps-4 fw-bold">
            Saran untuk peneriam Beasiswa Bank Indonesia:
          </label>
          {
            //to validate required
            errors.saran && (
              <div className="invalid-feedback">{errors.saran.message}</div>
            )
          }
        </div>
        <div className="form-floating col-12 mb-3">
          <textarea
            name="kelemahan"
            defaultValue={props.dataSaveOnLocal.kelemahan}
            placeholder="Masukkan jawaban anda dengan maksimal 300 karakter"
            className={`form-control ${errors.kelemahan ? "is-invalid" : ""}`}
            style={{ height: "150px" }}
            ref={register({
              required: "jika tidak memimiliki kelemahan masukkan angka 0",
              maxLength: {
                value: 300,
                message: "maksimal 300 karakter",
              },
            })}
          />
          <label className="ps-4 fw-bold">Kelemahan yang anda miliki:</label>
          {
            //to validate required
            errors.kelemahan && (
              <div className="invalid-feedback">{errors.kelemahan.message}</div>
            )
          }
        </div>
        <div className="form-group mb-3 row">
          <div className="form-check ps-3">
            <label className="col-form-label fw-bold col-sm-7">
              Apakah anda siap berperan aktif dalam kepengurusan dan kegiatan
              komunitas penerima beasiswa Bank Indonesia
            </label>
            <div className="form-check form-check-inline">
              <input
                className={`form-check-input ${
                  errors.genbi ? "is-invalid" : ""
                }`}
                type="radio"
                value="bersedia"
                name="genbi"
                ref={register({
                  required: "pilihan ini harus dipilih",
                })}
              />
              <label className="form-check-label">Bersedia</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className={`form-check-input ${
                  errors.genbi ? "is-invalid" : ""
                }`}
                type="radio"
                value="tidak bersedia"
                name="genbi"
                ref={register({
                  required: "pilihan ini harus dipilih",
                })}
              />
              <label className="form-check-label">Tidak</label>

            </div>
            {errors.genbi && (
              <span className="text-danger">Hrus memilih salah-satu</span>
            )}
          </div>
         
        </div>
        {watchGenbi && (
          <div className="form-floating col-12 mb-3">
            <textarea
              name="siapMengurus"
              defaultValue={props.dataSaveOnLocal.siapMengurus}
              placeholder={`Masukkan alasan anda ${watchGenbi} mengurus dan mengikuti kegiatan`}
              className={`form-control ${
                errors.siapMengurus ? "is-invalid" : ""
              }`}
              style={{ height: "180px" }}
              ref={register({
                required: "Anda harus memasukkan jawaban",
                maxLength: {
                  value: 300,
                  message: "maksimal 300 karakter",
                },
              })}
            />
            <label className="ps-4 fw-bold">
              {`Masukkan alasan kenapa anda ${watchGenbi} `}
            </label>
            {
              //to validate required
              errors.siapMengurus && (
                <div className="invalid-feedback">
                  {errors.siapMengurus.message}
                </div>
              )
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default EssayBeasiswa;
