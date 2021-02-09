import React from "react";
import { ErrorMessage } from "@hookform/error-message";

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
              {errors.jenisBeasiswa && "Jenis beasiswa harus diisi"}
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
                  <ErrorMessage
                    className="invalid-feedback"
                    name="toeflNilai"
                    as="div"
                    errors={errors}
                  />
                </div>
              )
            }
          </div>
        )}

        <div className="form-group mb-3 row">
          <div className="form-check ps-3">
            <label className="col-form-label fw-bold col-md-6">
              Tidak Sedang Menerima Beasiswa atau Ikatan Dinas
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
            {errors.ikatan && "Field ini harus dipilih"}
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
            {errors.alumni && "Field ini harus dipilih"}
          </div>
        </div>
        {watchJenisBeasiswa === "ungulan" && (
          <h4 >
            Semua essay harus diisi dengan bahasa ingris
          </h4>
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
              <ErrorMessage
                className="invalid-feedback"
                name="alumniThn"
                as="div"
                errors={errors}
              />
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
              <ErrorMessage
                className="invalid-feedback"
                name="alumniJabatan"
                as="div"
                errors={errors}
              />
            </div>
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
              <ErrorMessage
                className="invalid-feedback"
                name="motif"
                as="div"
                errors={errors}
              />
            </div>
          </>
        )}
        {watchJenisBeasiswa === "ungulan" && (
          <div className="form-floating col-md-6 mb-3">
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
            <ErrorMessage
              className="invalid-feedback"
              name="toeflNilai"
              as="div"
              errors={errors}
            />
          </div>
        )}
        <div className="form-floating col-12 mb-3">
          <textarea
            name="bergenbi"
            defaultValue={props.dataSaveOnLocal.bergenbi}
            placeholder="Masukkan pengalaman menerima beasiswa BI"
            className={`form-control ${errors.bergenbi ? "is-invalid" : ""}`}
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
          <ErrorMessage
            className="invalid-feedback"
            name="bergenbi"
            as="div"
            errors={errors}
          />
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
          <ErrorMessage
            className="invalid-feedback"
            name="rencana"
            as="div"
            errors={errors}
          />
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
          <ErrorMessage
            className="invalid-feedback"
            name="pantas"
            as="div"
            errors={errors}
          />
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
          <ErrorMessage
            className="invalid-feedback"
            name="lulus"
            as="div"
            errors={errors}
          />
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
          <ErrorMessage
            className="invalid-feedback"
            name="sosial"
            as="div"
            errors={errors}
          />
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
          <ErrorMessage
            className="invalid-feedback"
            name="saran"
            as="div"
            errors={errors}
          />
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
          <ErrorMessage
            className="invalid-feedback"
            name="kelemahan"
            as="div"
            errors={errors}
          />
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
              <label className="form-check-label">Tidak bersedia</label>
            </div>
            {errors.genbi && "Jenis beasiswa harus diisi"}
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
            <ErrorMessage
              className="invalid-feedback"
              name="siapMengurus"
              as="div"
              errors={errors}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default EssayBeasiswa;
