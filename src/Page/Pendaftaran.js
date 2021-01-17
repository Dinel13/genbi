import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useSelector } from "react-redux";

import Note from "../components/Note";
import DataDiri from "../components/DataDiri";
import OrangTua from "../components/OrangTua";
import DataKampus from "../components/DataKampus";
import EssayBeasiswa from "../components/EssayBeasiswa";
import FilePendukung from "../components/FilePendukung";
import Pemisah from "../components/Pemisah";

const Daftar = (props) => {
  const token = useSelector((state) => state.Auth.token);
  const { register, watch, errors, handleSubmit } = useForm();
  const watchWali = watch("showWali", ""); // you can supply default value as second argument
  const watchKampus = watch("kampus", "");
  const watchJenisBeasiswa = watch("jenisBeasiswa", "");
  const watchGenbi = watch("genbi", "");

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append("ktm", values.ktm[0]);
    formData.append("transkip", values.nilai[0]);
    formData.append("rekomendasi", values.rekomendasi[0]);
    values.jenisBeasiswa === "reguler"
      ? formData.append("mampu", values.mampu[0])
      : formData.append("rekomendasi2", values.rekomendasi2[0]);

    try {
      const response = await fetch("http://localhost:8080/file", {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      });
      const resData = await response.json();
      const imageUrl = resData.filePath;
      const graphqlQuery = {
        query: `
        mutation {
            createPendaftar(pendaftarInput: {fakultas: "${values.fakultas}", gender:"${values.gender}" ktm : "${imageUrl}"}) {
              nama
              fakultas
              ktm
            }
          }
        `,
      };
      const responseFinish = await fetch("http://localhost:8080/graphql", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(graphqlQuery),
      });
      const resDataFinish = await responseFinish.json();
      if (!resDataFinish.ok) {
        console.log("bad");
      }
      if (resDataFinish.errors) {
        throw new Error(resDataFinish.errors[0].message);
      }
      console.log(resDataFinish);
    } catch (err) {
      console.log(err);
    }
    /*
    const graphqlQuery = {
      query: `
      mutation {
          createPendaftar(pendaftarInput: {fakultas: "${values.fakultas}", gender:"${values.gender}"}) {
            nama
            fakultas
          }
        }
      `,
    };
    try {
      const response = await fetch("http://localhost:8080/graphql", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(graphqlQuery),
      });
      const resData = await response.json();
      if (!resData.ok) {
        console.log("bad");
      }
      if (resData.errors) {
        throw new Error(resData.errors[0].message);
      }
      console.log(resData);
    } catch (err) {
      console.log(err);
    } */
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
        <div className="col-12 mb-3">
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
        <div className="col-12 mb-3">
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
        <br />
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
