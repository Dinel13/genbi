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
        <div className="col-lg-4">
          <div className="alert alert-warning " role="alert">
            <h4 className="alert-heading">Perhatian!</h4>
            <hr />
            <p className="mb-0">
              Setiap file yang anda upload harus memiliki ukuran dibawah 500 Kb
            </p>
          </div>
        </div>
        <div className="col">
          <div className="form-group mb-3 row">
            <label className="col-sm-3 col-form-label fw-bold">
              Foto kartu tanda mahasiswa
            </label>
            <div className="col-sm-9 col-md-7">
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
              <p className="form-text">file harus bertipe jpg, jpeg atau png</p>
            </div>
          </div>
          <div className="form-group mb-3 row">
            <label className="col-form-label fw-bold col-sm-3">
              Transkip nilai terakhir
            </label>
            <div className="col-sm-9 col-md-7">
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
              <p className="form-text">file harus bertipe pdf</p>
            </div>
          </div>
          <div className="form-group mb-3 row">
            {watchJenisBeasiswa === "ungulan" && (
              <>
                <div className="form-group mb-3 row">
                  <label className="col-form-label fw-bold col-sm-3">
                    Surat Rekomendasi satu
                  </label>
                  <div className="col-sm-9 col-md-7">
                    <input
                      class={`form-control ${
                        errors.rekomendasi ? "is-invalid" : ""
                      }`}
                      type="file"
                      name="rekomendasi"
                      accept=".pdf"
                      ref={register({
                        required: "Surat rekomendasi harus diisi",
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
                  <label className="col-form-label fw-bold col-sm-3">
                    Surat Rekomendasi dua
                  </label>
                  <div className="col-sm-9 col-md-7">
                    <input
                      class={`form-control ${
                        errors.rekomendasi2 ? "is-invalid" : ""
                      }`}
                      type="file"
                      name="rekomendasi2"
                      accept=".pdf"
                      ref={register({
                        required: "Surat rekomendasi harus diisi",
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
              </>
            )}
            {watchJenisBeasiswa !== "ungulan" && (
              <>
                <div className="form-group mb-3 row">
                  <label className="col-form-label fw-bold col-sm-3">
                    Surat Rekomendasi
                  </label>
                  <div className="col-sm-9 col-md-7">
                    <input
                      class={`form-control ${
                        errors.rekomendasi ? "is-invalid" : ""
                      }`}
                      type="file"
                      name="rekomendasi"
                      accept=".pdf"
                      ref={register({
                        required: "Surat rekomendasi harus diisi",
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
                  <label className="col-form-label fw-bold col-sm-3">
                    Surat keterangan tidak mampu
                  </label>
                  <div className="col-sm-9 col-md-7">
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
                    <p className="form-text">file harus bertipe pdf</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilePendukung;
