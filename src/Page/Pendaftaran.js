import React from "react";
import { useForm } from "react-hook-form";
import Note from "../components/Note";
import DataDiri from "../components/DataDiri";
import OrangTua from "../components/OrangTua";
import DataKampus from "../components/DataKampus";
import EssayBeasiswa from "../components/EssayBeasiswa";
import FilePendukung from "../components/FilePendukung";

const Daftar = (props) => {
  const { register, watch, errors, handleSubmit } = useForm();
  const watchWali = watch("showWali", ""); // you can supply default value as second argument
  const watchKampus = watch("kampus", "");
  const watchJenisBeasiswa = watch("jenisBeasiswa", "");

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="container">
      <div className="text-center my-5">
        <h1 className='text-decoration-underline'>Form Pendaftaran beasiswa</h1>
      </div>
      <Note />
      <form onSubmit={handleSubmit(onSubmit)}>
        <DataDiri errors={errors} register={register} />
        <OrangTua errors={errors} register={register} watchWali={watchWali} />
        <DataKampus errors={errors} register={register} />
        <EssayBeasiswa errors={errors} register={register} watchKampus={watchKampus}/>
        <FilePendukung errors={errors} register={register} watchJenisBeasiswa={watchJenisBeasiswa}/>
        <div className="col-1 mx-auto">
        <input
          type="submit"
          className="btn btn-primary "
          value="Submit"
        />
        <br/>
        </div>
        <br/>
      </form>
    </div>
  );
};
export default Daftar;
