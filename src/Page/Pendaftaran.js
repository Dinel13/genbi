import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import Note from "../components/Note";
import DataDiri from "../components/DataDiri";
import OrangTua from "../components/OrangTua";
import DataKampus from "../components/DataKampus";
import EssayBeasiswa from "../components/EssayBeasiswa";
import FilePendukung from "../components/FilePendukung";
import Pemisah from "../components/Pemisah";
import ErrorModal from "../components/ErrorModal/Error";
import Loading from "../components/Loading/Loading";
import Pendaftar from "./admin/pendaftar";
import { PENDAFTAR_FIElD } from "../constant/pendaftarField";
import Modal from "../shared/Modal";

const Daftar = (props) => {
  const token = useSelector((state) => state.Auth.token);
  const userId = useSelector((state) => state.Auth.userId);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [pendaftar, setPendaftar] = useState(false);
  const [dataSaveOnLocal, setDataSaveOnLocal] = useState({});
  const { register, watch, errors, handleSubmit } = useForm({
    defaultValues: {
      jenisBeasiswa: "reguler",
    },
  });
  const watchWali = watch("showWali", ""); // you can supply default value as second argument
  const watchKampus = watch("kampus", "");
  const watchAlumni = watch("alumni", "");
  const watchJenisBeasiswa = watch("jenisBeasiswa", "reguler");
  const watchGenbi = watch("genbi", "");
  const watchAll = watch();

  //to check if user already registered
  React.useEffect(() => {
    setIsLoading(true);
    fetch("http://47.254.192.86:85/graphql", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` query { userIsRegister(userId: "${userId}") {${PENDAFTAR_FIElD}}}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.errors) {
          throw data.errors[0].message;
        }
        setIsLoading(false);
        setPendaftar(data.data.userIsRegister);
      })
      .catch((error) => {
        setPendaftar(false);
        setIsLoading(false);
        setIsError(error);
      });
  }, [userId, token]);

  const onSubmit = async (values) => {
    console.log(values);
    setIsLoading(true);
    let endpoint = "file";
    const formData = new FormData();
    formData.append("jenisBeasiswa", values.jenisBeasiswa);
    formData.append("ktm", values.ktm[0]);
    formData.append("ktp", values.ktp[0]);
    formData.append("foto", values.foto[0]);
    formData.append("rekening", values.rekening[0]);
    formData.append("transkip", values.nilai[0]);
    formData.append("rekomendasi", values.rekomendasi[0]);
    formData.append("beasiswaLain", values.beasiswaLain[0]);
    if (values.jenisBeasiswa === "ungulan") {
      endpoint = "unggulan";
      formData.append("rekomendasi2", values.rekomendasi2[0]);
      formData.append("sertifikat", values.sertifikat[0]);
    } else {
      formData.append("mampu", values.mampu[0]);
      endpoint = "file";
    }

    try {
      const response = await fetch(`http://47.254.192.86:85/${endpoint}`, {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      });
      const resData = await response.json();
      if (resData.errors) {
        throw new Error(resData.errors[0].message);
      }
      const graphqlQuery = {
        query: `
        mutation {
            createPendaftar(pendaftarInput: {agama: "${values.agama}", alamatAyah: 
            "${values.alamatAyah}", alamatIbu: "${values.alamatIbu}", alamatKtp: 
            "${values.alamatKtp}", alamatWali: "${values.alamatWali}", alumni: 
            "${values.alumni}", alumniJabatan: "${values.alumniJabatan}", alumniThn: 
            "${values.alumniThn}", anakKe: "${values.anakKe}", angkatan: "${values.angkatan}",
            arahan: "${values.arahan}", beasiswaLain: "${resData.beasiswaLain}", bergenbi: 
            "${values.bergenbi}", cita: "${values.cita}", darah: "${values.darah}", email: 
            "${values.email}", fakultas: "${values.fakultas}", foto: "${resData.foto}",
            genbi: "${values.genbi}", gender: "${values.gender}", hobby: "${values.hobby}", 
            ikatan: "${values.ikatan}", instagram: "${values.instagram}", ipk: "${values.ipk}", 
            jenisBeasiswa: "${values.jenisBeasiswa}", kampus: "${values.kampus}",  kelemahan: 
            "${values.kelemahan}", kontribusi: "${values.kontribusi}", kosan: "${values.kosan}",
            ktm: "${resData.ktm}", ktp: "${resData.ktp}", lulus: "${values.lulus}",  mampu: 
            "${resData.mampu}", minat: "${values.minat}", motif: "${values.motif}", nama: 
            "${values.nama}", namaAyah: "${values.namaAyah}", namaIbu: "${values.namaIbu}", 
            namaWali: "${values.namaWali}", nilai: "${resData.transkip}", nim: "${values.nim}", 
            nomorHp: "${values.nomorHp}", nomorWa: "${values.nomorWa}", organisasi: 
            "${values.organisasi}", pangilan: "${values.pangilan}", pantas: "${values.pantas}",
            pekerjaanAyah: "${values.pekerjaanAyah}", pekerjaanIbu: "${values.pekerjaanIbu}", 
            pekerjaanWali: "${values.pekerjaanWali}", penghasilanAyah: "${values.penghasilanAyah}", 
            penghasilanIbu: "${values.penghasilanIbu}", penghasilanWali: "${values.penghasilanWali}",
            prestasi: "${values.prestasi}", prodi: "${values.prodi}", rekening: "${resData.rekening}", 
            rekomendasi: "${resData.rekomendasi}", rekomendasi2: "${resData.rekomendasi2}",
            rencana: "${values.rencana}", saran: "${values.saran}", saudara: "${values.saudara}", 
            semester: "${values.semester}", sertifikat: "${values.sertifikat}",  showWali: 
            "${values.showWali}", siapMengurus: "${values.siapMengurus}", skil: "${values.skil}",  
            sks: "${values.sks}",sosial: "${values.sosial}",  suku: "${values.suku}",  tangalLahir: 
            "${values.tangalLahir}", teleponAyah: "${values.teleponAyah}", teleponIbu: 
           "${values.teleponIbu}",  teleponWali: "${values.teleponWali}", tempatLahir: 
           "${values.tempatLahir}", thnLulus: "${values.thnLulus}", toeflFile: 
            "${resData.toeflFile}", toeflNilai: "${values.toeflNilai}", usia: "${values.usia}"}) {
              ${PENDAFTAR_FIElD}
            }
          }
        `,
      };
      const responseFinish = await fetch("http://47.254.192.86:85/graphql", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(graphqlQuery),
      });
      const resDataFinish = await responseFinish.json();
      if (resDataFinish.errors) {
        throw new Error(resDataFinish.errors[0].message);
      }
      setPendaftar(resDataFinish.data.pendaftar);
      setIsLoading(false);
      localStorage.removeItem("dataPendaftar");
    } catch (err) {
      setPendaftar(false);
      setIsLoading(false);
      setIsError(err);
    }
  };
  const test = () => localStorage.removeItem("dataPendaftar");
  //to save data form to local storage
  const simpanHandler = async () => {
    localStorage.setItem(
      "dataPendaftar",
      JSON.stringify({
        watchAll,
      })
    );
  };

  // to get data from local storage
  // setValue not work
  React.useEffect(() => {
    const storedDataPendaftar = JSON.parse(
      localStorage.getItem("dataPendaftar")
    );
    if (storedDataPendaftar && storedDataPendaftar.watchAll) {
      const dataPendaftar = storedDataPendaftar.watchAll;
      for (const item in dataPendaftar) {
        if (item !== "ktm") {
          if (item !== "mampu") {
            if (item !== "nilai") {
              if (item !== "rekomendasi") {
                if (dataPendaftar[item]) {
                  setDataSaveOnLocal((prevState) => ({
                    ...prevState,
                    [item]: dataPendaftar[item],
                  }));
                }
              }
            }
          }
        }
      }
    }
  }, []);

  return isError ? (
    <ErrorModal message={isError.toString()} setModall={setIsError} />
  ) : isLoading ? (
    <Loading />
  ) : pendaftar ? (
    <>
      <Modal notFull={true}
        header="Selamat, Pendaftaran anda berhasil"
        body="Pengumuman dapat di lihat di laman ini dan email anda pada
    tanggal 20 Februari 2020"
      />
      <Pendaftar from={pendaftar} />
    </>
  ) : (
    <div className="container">
      <div className="position-fixed bottom-0 end-0">
        <div className="pe-4 pb-4">
          <button className="btn btn-primary" onClick={simpanHandler}>
            simpan
          </button>
        </div>
      </div>
      <div className="text-center mt-5 mb-4">
        <h1 className="text-decoration-underline">
          Form Pendaftaran beasiswa Bank Indonesia
        </h1>
      </div>
      <Note />
      <form onSubmit={handleSubmit(onSubmit)}>
        <DataDiri
          errors={errors}
          register={register}
          dataSaveOnLocal={dataSaveOnLocal}
        />
        <OrangTua
          errors={errors}
          register={register}
          watchWali={watchWali}
          dataSaveOnLocal={dataSaveOnLocal}
        />
        <DataKampus
          errors={errors}
          register={register}
          dataSaveOnLocal={dataSaveOnLocal}
        />
        <EssayBeasiswa
          errors={errors}
          register={register}
          watchKampus={watchKampus}
          watchGenbi={watchGenbi}
          watchAlumni={watchAlumni}
          watchJenisBeasiswa={watchJenisBeasiswa}
          dataSaveOnLocal={dataSaveOnLocal}
        />
        <FilePendukung
          errors={errors}
          register={register}
          watchAll={watchAll}
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
                required: "Pilihan ini harus dicentang",
              })}
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Saya bersedia mengikuti dan mematuhi segala persyaratan,
              ketentuan, peraturan dan arahan yang berlaku dalam program
              Beasiswa Bank Indonesia
            </label>
            {
              //to validate required
              errors.arahan && (
                <div className="invalid-feedback">{errors.arahan.message}</div>
              )
            }
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
                required: "Pilihan ini harus dicentang",
              })}
            />
            <label className="form-check-label" htmlFor="griCheck">
              Saya bersedia menjaga nama baik Bank Indonesia dan berkontribusi
              positif dalam pengelolaan Generasi Baru Indonesi dan berberan
              aktif dalam kegiatan-kegiatan yang diselenggarakan oleh Bank
              Indonesia sebagai bentuk tanggung jawab moral sebagai insan
              akademis yang bermoral
            </label>
            {
              //to validate required
              errors.kontribusi && (
                <div className="invalid-feedback">
                  {errors.kontribusi.message}
                </div>
              )
            }
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
