import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import Note from "../components/Note";
import DataDiri from "../components/DataDiri";
import OrangTua from "../components/OrangTua";
import DataKampus from "../components/DataKampus";
import EssayBeasiswa from "../components/EssayBeasiswa";
import FilePendukung from "../components/FilePendukung";
import Pemisah from "../components/Pemisah";

const Daftar = (props) => {
  const { register, watch, errors, handleSubmit } = useForm();
  const watchWali = watch("showWali", ""); // you can supply default value as second argument
  const watchKampus = watch("kampus", "");
  const watchJenisBeasiswa = watch("jenisBeasiswa", "");
  const watchGenbi = watch("genbi", "");

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="container">
      <div className="text-center mt-5 mb-4">
        <h1 className="text-decoration-underline">
          Form Pendaftaran beasiswa Bank Indonesia
        </h1>
      </div>
      <Note />
      <form onSubmit={handleSubmit(onSubmit)}>
        <DataDiri errors={errors} register={register} />
        <OrangTua errors={errors} register={register} watchWali={watchWali} />
        <DataKampus errors={errors} register={register} />
        <EssayBeasiswa
          errors={errors}
          register={register}
          watchKampus={watchKampus}
          watchGenbi={watchGenbi}
        />
        <FilePendukung
          errors={errors}
          register={register}
          watchJenisBeasiswa={watchJenisBeasiswa}
        />
        <div class="col-12 mb-3">
          <div className="form-check">
            <input
              className={`form-check-input ${
                errors.arahan ? "is-invalid" : ""
              }`}
              type="checkbox"
              name="arahan"
              id="gridCheck"
              ref={register({
                required: "Pilihan ini garus di centang",
              })}
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Saya bersedia mengikuti dan mematuhi segala persyaratan,
              ketentuan, peraturan dan arahan yang berlaku dalam program
              Beasiswa Bank Indonesia
            </label>
            <ErrorMessage
              className="invalid-feedback"
              name="arahan"
              as="div"
              errors={errors}
            />
          </div>
        </div>
        <div class="col-12 mb-3">
          <div className="form-check">
            <input
              className={`form-check-input ${
                errors.kontribusi ? "is-invalid" : ""
              }`}
              type="checkbox"
              name="kontribusi"
              id="griCheck"
              ref={register({
                required: "Pilihan ini garus di centang",
              })}
            />
            <label className="form-check-label" htmlFor="griCheck">
              Saya bersedia menjaga nama baik Bank Indonesia dan berkontribusi
              positif dalam pengelolaan Generasi Baru Indonesi dan berberan
              aktif dalam kegiatan-kegiatan yang diselenggarakan oleh Bank
              Indonesia sebagai bentuk tanggung jawab moral sebagai insan
              akademis yang bermoral
            </label>
            <ErrorMessage
              className="invalid-feedback"
              name="kontribusi"
              as="div"
              errors={errors}
            />
          </div>
        </div>
        <br/>
        <div className="col-6 mx-auto">
          <input
            type="submit"
            className="btn btn-primary w-100 "
            value="Submit"
          />
          <br />
        </div>
        <br />
      </form>
      <Pemisah />
    </div>
  );
};
export default Daftar;
