import React from "react";
import { ErrorMessage } from "@hookform/error-message";

const EssayBeasiswa = (props) => {
  const { errors, register, watchKampus, watchGenbi } = props;
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
            <div className="form-check ps-3">
              <label className="col-form-label fw-bold col-sm-3">
                Jenis beasiswa
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
          </div>
        )}
        <div className="form-floating col-12 mb-3">
          <textarea
            name="motif"
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
        <div className="form-floating col-12 mb-3">
          <textarea
            name="rencana"
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
              {`Masukkan alasan anda ${watchGenbi} mengurus dan mengikuti kegiatan komunitas penerima beasiswa Bank Indonesia`}
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
