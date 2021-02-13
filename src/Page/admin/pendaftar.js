import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { PENDAFTAR_FIElD } from "../../constant/pendaftarField";
import ErrorModal from "../../components/ErrorModal/Error";
import Loading from "../../components/Loading/Loading";
import Modal from "../../shared/Modal";
import ModalConfirm from "../../components/Modal/Modal";

const Pendaftar = (props) => {
  const admin = useSelector((state) => state.Auth.admin);
  const adminId = useSelector((state) => state.Auth.adminId);
  let { pendaftarId } = useParams();
  const [nilai1, setNilai1] = useState(undefined);
  const [nilai2, setNilai2] = useState(undefined);
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isNeedConfirm, setIsNeedCOnfirm] = useState(false);
  const [confirmTo, setConfirmTo] = useState("");
  const [pendaftar, setPendaftar] = useState(undefined);

  const { from } = props;

  //to fetch the data of pendaftar
  React.useEffect(() => {
    //if this component from pendaftaran just take pendaftar from props
    if (from) {
      setPendaftar(from);
    } else {
      setIsLoading(true);
      fetch("http://47.254.192.86:85/graphql", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + admin,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: ` query { pendaftar(pendaftarId: "${pendaftarId}") {
            ${PENDAFTAR_FIElD}
      }}`,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.errors) {
            throw data.errors[0].message;
          }
          setIsLoading(false);
          setPendaftar(data.data.pendaftar);
      })
        .catch((error) => {
          setIsLoading(false);
          setIsError(error);
        });
    }
  }, [admin, pendaftarId, from]);

  const lolosWawancaraHandler = (pendaftarId, terima) => {
    setIsLoading(true);
    fetch("http://47.254.192.86:85/graphql", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + admin,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` 
          mutation {
            lolosWawancara(pendaftarAndAdminInput: {pendaftarId: "${pendaftarId}",
            adminId : "${adminId}", terima : "${terima}"}) {
              lolosWawancara
            }
          }
        `,
      }),
    })
      .then((response) => response.json())
      .then((resData) => {
        if (resData.errors) {
          throw resData.errors[0].message;
        }
        //to update the whole data with new lolosBerkas data item
        let newPendaftar = {...pendaftar}
        newPendaftar.lolosWawancara = resData.data.lolosWawancara.lolosWawancara
        setPendaftar(newPendaftar);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(setIsLoading(false));
  };

  //to vlidate input nilai 1
  //if pass will show modal confirm to save nilai
  const validateSatu = () => {
    if (!nilai1) {
      setError("masukkan nilai yang valid");
      return;
    }
    if (nilai1 < 0) {
      setError("masukkan nilai yang valid");
      return;
    }
    setConfirmTo("nilai1");
    setIsNeedCOnfirm(true);
  };

  const validateDua = () => {
    if (!nilai2) {
      setError2("masukkan nilai yang valid");
      return;
    }
    if (nilai2 < 0) {
      setError2("masukkan nilai yang valid");
      return;
    }
    setConfirmTo("nilai2");
    setIsNeedCOnfirm(true);
  };
  const submitNilaiSatu = async () => {
    try {
      setIsLoading(false);
      const response = await fetch("http://47.254.192.86:85/graphql", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + admin,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
        mutation {
          addNilaiWawancara(nilaiWawancaraInput: {pendaftarId : "${pendaftarId}",
          adminId : "${adminId}", untuk : "nilaiWawancara1", nilai : "${nilai1}"}) {
            ${PENDAFTAR_FIElD}
          }
        }
      `,
        }),
      });
      const resData = await response.json();
      if (resData.errors) {
        throw resData.errors[0].message;
      }
      setIsLoading(false);
      setPendaftar(resData.data.addNilaiWawancara);
    } catch (err) {
      setIsLoading(false);
      setIsError(err);
    }
  };

  const submitNilaiDua = async () => {
    try {
      setIsLoading(false);
      const response = await fetch("http://47.254.192.86:85/graphql", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + admin,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
        mutation {
          addNilaiWawancara(nilaiWawancaraInput: {pendaftarId : "${pendaftarId}",
          adminId : "${adminId}", untuk : "nilaiWawancara2", nilai : "${nilai2}"}) {
            ${PENDAFTAR_FIElD}
          }
        }
      `,
        }),
      });
      const resData = await response.json();
      if (resData.errors) {
        throw resData.errors[0].message;
      }
      setIsLoading(false);
      setPendaftar(resData.data.addNilaiWawancara);
    } catch (err) {
      setIsLoading(false);
      setIsError(err);
    }
  };

  return isError ? (
    <ErrorModal message={isError.toString()} setModall={setIsError} />
  ) : isLoading ? (
    <Loading />
  ) : isNeedConfirm ? (
    <ModalConfirm
      header="Apakah anda yakain"
      body={
        confirmTo === "nilai1"
          ? `Anda akan memberi ${nilai1} point untuk nilai wawancara satu`
          : `Anda akan memberi ${nilai2} point untuk nilai wawancara dua`
      }
      modall={isNeedConfirm}
      setModall={setIsNeedCOnfirm}
      onYakin={() => {
        confirmTo === "nilai1" ? submitNilaiSatu() : submitNilaiDua();
      }}
    />
  ) : !pendaftar ? (
    <Modal
      header="Mohon maaf"
      body="Pendaftar tidak bisa ditemukan, periksa koneksi anda atau coba lagi nanti"
    />
  ) : (
    <div className="container mt-4">
      <div className="row">
        <div className="col-3 order-sm-last ">
          <div className="sticky-top" style={{ maxWidth: "380px" }}>
            <figure className="figure p-3 rounded shadow  ">
              <img
                src={"http://47.254.192.86:85/" + pendaftar.foto}
                className="figure-img img-fluid rounded"
                alt={pendaftar.nama}
              />
              <figcaption className="figure-caption text-center">
                Pas Foto <span className="fw-bold">{pendaftar.pangilan}</span>
              </figcaption>
              {props.wawancara && (
                <h5 className="text-center">
                  <hr />
                  <span className="text-muted">Nilai wawancara</span> 100
                </h5>
              )}
            </figure>
            {!props.wawancara && !props.berkas && (
              <button className="btn btn-primary btn-lg col-12">
                lolos Berkas
              </button>
            )}
            {props.wawancara && (
              <button className="btn btn-primary btn-lg col-12">
                Batalkan lolos Wawancara
              </button>
            )}
            {props.berkas && (
              <>
                {pendaftar.nilaiWawancara1 ? (
                  <p>
                    Nilai 1 :{" "}
                    <strong className="ps-2 fw-bolder">
                      {pendaftar.nilaiWawancara1}
                    </strong>
                  </p>
                ) : (
                  <div className="d-flex-inline row mb-3 align-items-center">
                    <div className="form-floating pe-0 col-sm-7 ">
                      <input
                        name="prodi"
                        value={nilai1}
                        onChange={(e) => {
                          setError(false);
                          setNilai1(e.target.value);
                        }}
                        type="number"
                        placeholder="Masukkan nilai"
                        className={`form-control  ${error ? "is-invalid" : ""}`}
                      />
                      <label className="ps-4 fw-bold">Nilai 1</label>
                    </div>
                    <div className="col-sm-5 ps-1">
                      <button
                        onClick={() => validateSatu()}
                        type="button"
                        className="w-100 btn btn-sm btn-success"
                      >
                        Simpan
                      </button>
                    </div>
                    {error && (
                      <div className="form-text text-danger">{error}</div>
                    )}
                  </div>
                )}
                {pendaftar.nilaiWawancara2 ? (
                  <p>
                    Nilai 2{" "}
                    <strong className="ps-2 fw-bolder">
                      {pendaftar.nilaiWawancara2}
                    </strong>
                  </p>
                ) : (
                  <div className="d-flex-inline row mb-3 align-items-center">
                    <div className="form-floating pe-0 col-sm-7 ">
                      <input
                        name="nilai2"
                        value={nilai2}
                        onChange={(e) => {
                          setError2(false);
                          setNilai2(e.target.value);
                        }}
                        type="number"
                        placeholder="Masukkan nilai"
                        className={`form-control  ${
                          error2 ? "is-invalid" : ""
                        }`}
                      />
                      <label className="ps-4 fw-bold">Nilai 2</label>
                    </div>
                    <div className="col-sm-5 ps-1">
                      <button
                        onClick={() => validateDua()}
                        type="button"
                        className="w-100 btn btn-sm btn-success"
                      >
                        Simpan
                      </button>
                    </div>
                    {error2 && (
                      <div className="form-text text-danger">{error2}</div>
                    )}
                  </div>
                )}
                {pendaftar.lolosWawancara === false ? (
                  <button
                    onClick={() => lolosWawancaraHandler(pendaftarId, true)}
                    className="btn btn-primary btn-lg col-12"
                  >
                    Lolos Wawancara
                  </button>
                ) : (
                  <button
                    onClick={() => lolosWawancaraHandler(pendaftarId, false)}
                    className="btn btn-danger btn-lg col-12"
                  >
                    Batal lolos Wawancara
                  </button>
                )}
              </>
            )}
          </div>
        </div>
        <div className="col-9" id="print">
          <div className="card shadow rounded list-group list-group-flush mb-5 p-0">
            <div className="card-header bg-secondary p-3 pb-2 col">
              <h3 className=" text-white fw-bold">Data Diri</h3>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Nama Lengkap </p>
              <p className="fw-bold col-9">{pendaftar.nama}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Nama Pangilan </p>
              <p className="fw-bold col-3">{pendaftar.pangilan}</p>
              <p className="pe-1 col-3">Jenis-Kelamin </p>
              <p className="fw-bold col-3">{pendaftar.gender}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Agama</p>
              <p className="fw-bold col-3">{pendaftar.agama}</p>
              <p className="pe-1 col-3">Golongan Darah</p>
              <p className="fw-bold col-3">{pendaftar.darah}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Usia</p>
              <p className="fw-bold col-3">{pendaftar.usia}</p>
              <p className="pe-1 col-3">Suku Bangsa</p>
              <p className="fw-bold col-3">{pendaftar.suku}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-4">Tempat dan tanggal lahir</p>
              <p className="fw-bold col-8">
                {pendaftar.tempatLahir},{pendaftar.tangalLahir}
              </p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Anak ke</p>
              <p className="pe-1 col-2 fw-bold ">{pendaftar.anakKe}</p>
              <p className="pe-1 col-3">Dari Jumlah saudara</p>
              <p className="fw-bold col-4">{pendaftar.saudara}</p>
            </div>

            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Hobi</p>
              <p className="fw-bold col-3">
                {pendaftar.hobby}
              </p>
              <p className="pe-1 col-3">Cita-cita</p>
              <p className="fw-bold col-3">
                {pendaftar.cita}
              </p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Alamat selama berkuliah</p>
              <p className="fw-bold col-9">{pendaftar.kosan}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Alamat selama berkuliah</p>
              <p className="fw-bold col-9">{pendaftar.alamatKtp}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Nomor Telepon</p>
              <p className="pe-1 col-3 fw-bold ">{pendaftar.nomorHp}</p>
              <p className="pe-1 col-3">Nomor Wa</p>
              <p className="fw-bold col-3">{pendaftar.nomorWa}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Akun Instagram</p>
              <p className="fw-bold col-3">{pendaftar.instagram}</p>
              <p className="pe-1 col-3">Alamat email</p>
              <p className="fw-bold pe-1 col-3">{pendaftar.email}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Minat atau Bakat</p>
              <p className="pe-1 col-3 fw-bold ">{pendaftar.minat}</p>
              <p className="pe-1 col-3">Keterampilan hidup</p>
              <p className="fw-bold col-3">{pendaftar.skil} </p>
            </div>
          </div>
          <div className="card shadow rounded list-group list-group-flush mb-5">
            <div className="card-header bg-secondary p-3 pb-2">
              <h3 className=" text-white fw-bold">Data Orangtua/Wali</h3>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Nama Ayah</p>
              <p className="fw-bold col-9">{pendaftar.namaAyah}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Nomor Telepon Ayah</p>
              <p className="fw-bold col-9">{pendaftar.teleponAyah}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Alamat Ayah</p>
              <p className="fw-bold col-9">{pendaftar.alamatAyah} </p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Pekerjaan Ayah</p>
              <p className="pe-1 col-3 fw-bold ">{pendaftar.pekerjaanAyah}</p>
              <p className="pe-1 col-3">Penghasilan Ayah</p>
              <p className="fw-bold col-3">{pendaftar.penghasilanAyah}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Nama ibu</p>
              <p className="fw-bold col-9">{pendaftar.namaIbu}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Nomor Telepon ibu</p>
              <p className="fw-bold col-9">{pendaftar.teleponIbu}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Alamat ibu</p>
              <p className="fw-bold col-9">{pendaftar.alamatIbu}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Pekerjaan ibu</p>
              <p className="pe-1 col-3 fw-bold ">{pendaftar.pekerjaanIbu}</p>
              <p className="pe-1 col-3">Penghasilan ibu</p>
              <p className="fw-bold col-3">{pendaftar.penghasilanIbu}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Orangtua bukan wali</p>
              <p className="pe-1 col-9 fw-bold ">
                {pendaftar.showWali === "iya" ? "Benar" : "Tidak"}
              </p>
            </div>
            {pendaftar.showWali === "iya" && (
              <>
                <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
                  <p className="pe-1 col-3">Nama Wali</p>
                  <p className="fw-bold col-9">{pendaftar.namaWali}</p>
                </div>
                <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
                  <p className="pe-1 col-3">Nomor Telepon Wali</p>
                  <p className="fw-bold col-9">{pendaftar.teleponWali}</p>
                </div>
                <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
                  <p className="pe-1 col-3">Alamat Wali</p>
                  <p className="fw-bold col-9">{pendaftar.alamatWali}</p>
                </div>
                <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
                  <p className="pe-1 col-3">Pekerjaan Wali</p>
                  <p className="pe-1 col-3 fw-bold ">
                    {pendaftar.pekerjaanWali}
                  </p>
                  <p className="pe-1 col-3">Penghasilan Wali</p>
                  <p className="fw-bold col-3">{pendaftar.penghasilanWali}</p>
                </div>
              </>
            )}
          </div>
          <div className="card shadow rounded list-group list-group-flush mb-5">
            <div className="card-header bg-secondary p-3 pb-2">
              <h3 className=" text-white fw-bold">Data akademik</h3>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Perguruan tinggi</p>
              <p className="fw-bold col-9">{pendaftar.kampus}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Fakultas</p>
              <p className="pe-1 col-3 fw-bold ">{pendaftar.fakultas}</p>
              <p className="pe-1 col-3">Program Studi</p>
              <p className="fw-bold col-3">{pendaftar.prodi}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">NIM</p>
              <p className="pe-1 col-3 fw-bold ">{pendaftar.nim}</p>
              <p className="pe-1 col-3">IP semester terakhir</p>
              <p className="fw-bold col-3">{pendaftar.ipk}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Semester sekarang</p>
              <p className="pe-1 col-3 fw-bold ">{pendaftar.semester}</p>
              <p className="pe-1 col-3">SKS yang dilulusi</p>
              <p className="fw-bold col-3">{pendaftar.sks}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Tahun masuk kuliah</p>
              <p className="pe-1 col-3 fw-bold ">{pendaftar.angkatan}</p>
              <p className="pe-1 col-3">Tahun rencana lulus</p>
              <p className="fw-bold col-3">{pendaftar.thnLulus}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Prestasi selama berkuliah</p>
              <p className="fw-bold col-9">{pendaftar.prestasi}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">
                Organisasi yang pernah dan sedang diikuti
              </p>
              <p className="fw-bold col-9">{pendaftar.organisasi}</p>
            </div>
          </div>
          <div className="card shadow rounded list-group list-group-flush mb-5">
            <div className="card-header bg-secondary p-3 pb-2">
              <h3 className=" text-white fw-bold">Essay Beasiswa</h3>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              {pendaftar.kampus === "unhas" && (
                <>
                  <p className="pe-1 col-3">Schema Beasiswa</p>
                  <p className="pe-1 col-3 fw-bold ">
                    {pendaftar.jenisBeasiswa}
                  </p>
                </>
              )}
              {pendaftar.jenisBeasiswa === "ungulan" && (
                <>
                  <p className="pe-1 col-3">Nilai toefl</p>
                  <p className="pe-1 col-3 fw-bold ">{pendaftar.toeflNilai}</p>
                </>
              )}
              <p className="pe-1 col-4">
                Sedang Menerima Beasiswa lain atau Ikatan Dinas
              </p>
              <p className="fw-bold col-2 text-uppercase">{pendaftar.ikatan}</p>
              <p className="pe-1 col-4">
                Pernah menerima beasiswa Bank Indonesia
              </p>
              <p className="fw-bold col-2 text-uppercase">{pendaftar.alumni}</p>
            </div>
            {pendaftar.alumni === "ya" && (
              <>
                <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
                  <p className="pe-1 col-3">Tahun menerima beasiswa BI</p>
                  <p className="pe-1 col-3 fw-bold ">{pendaftar.alumniThn}</p>
                  <p className="pe-1 col-3">Jabatan di Genbi</p>
                  <p className="fw-bold col-3">{pendaftar.alumniJabatan}</p>
                </div>
                <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
                  <p className="pe-1 col-3">Pengalaman menerima Beasiswa BI</p>
                  <p className="fw-bold col-9">{pendaftar.bergenbi}</p>
                </div>
              </>
            )}
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Alasan mendaftar beasiswa</p>
              <p className="fw-bold col-9">{pendaftar.motif}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Rencana pengunaan beasiswa</p>
              <p className="fw-bold col-9">{pendaftar.rencana}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3 pe-1">
                Kenapa pantas mendapatkan beasiswa
              </p>
              <p className="fw-bold col-9">{pendaftar.pantas}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3 pe-1">Rencana setelah lulus kuliah</p>
              <p className="fw-bold col-9">{pendaftar.lulus}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3 pe-1">
                Aktivitas sosial yang biasa di lakukan
              </p>
              <p className="fw-bold col-9">{pendaftar.sosial}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3 pe-1">
                Saran untuk peneriam Beasiswa Bank Indonesia
              </p>
              <p className="fw-bold col-9">{pendaftar.saran}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3 pe-1">Kelemahan yang anda miliki</p>
              <p className="fw-bold col-9">{pendaftar.kelemahan}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3 pe-1">
                Alasan {pendaftar.genbi} mengurus di Genbi
              </p>
              <p className="fw-bold col-9">{pendaftar.siapMengurus}</p>
            </div>
          </div>
          <div className="card shadow rounded list-group list-group-flush mb-5">
            <div className="card-header bg-secondary p-3 pb-2">
              <h3 className=" text-white fw-bold">File Pendukung</h3>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">KTP</p>
              <img
                src={"http://47.254.192.86:85/" + pendaftar.ktp}
                className="figure-img img-fluid rounded col-9"
                alt={pendaftar.nama}
              />
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">KTM</p>
              <img
                src={"http://47.254.192.86:85/" + pendaftar.ktm}
                className="figure-img img-fluid rounded col-9"
                alt={pendaftar.nama}
              />
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-4">Transkip Nilai</p>
              {pendaftar.nilai ? (
                <a
                  className="stretched-link fw-bold"
                  href={"http://47.254.192.86:85/" + pendaftar.nilai}
                >
                  Lihat file
                </a>
              ) : (
                <p className="fw-bold text-danger">Tidak ada data !</p>
              )}
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-4">Buku rekening</p>
              {pendaftar.rekening ? (
                <a
                  className="stretched-link fw-bold"
                  href={"http://47.254.192.86:85/" + pendaftar.rekening}
                >
                  Lihat file
                </a>
              ) : (
                <p className="fw-bold text-danger">Tidak ada data !</p>
              )}
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-4">Surat tidak menerima beasiswa lain</p>
              {pendaftar.beasiswaLain ? (
                <a
                  className="stretched-link fw-bold"
                  href={"http://47.254.192.86:85/" + pendaftar.beasiswaLain}
                >
                  Lihat file
                </a>
              ) : (
                <p className="fw-bold text-danger">Tidak ada data !</p>
              )}
            </div>
            {pendaftar.jenisBeasiswa === "ungulan" ? (
              <>
                <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
                  <p className="pe-1 col-3">Surat rekomendasi satu</p>
                  {pendaftar.rekomendasi ? (
                    <a
                      className="stretched-link fw-bold"
                      href={"http://47.254.192.86:85/" + pendaftar.rekomendasi}
                    >
                      Lihat file
                    </a>
                  ) : (
                    <p className="fw-bold text-danger">Tidak ada data !</p>
                  )}
                </div>
                <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
                  <p className="pe-1 col-3">Surat rekomendasi dua</p>
                  {pendaftar.rekomendasi2 ? (
                    <a
                      className="stretched-link fw-bold"
                      href={"http://47.254.192.86:85/" + pendaftar.rekomendasi2}
                    >
                      Lihat file
                    </a>
                  ) : (
                    <p className="fw-bold text-danger">Tidak ada data !</p>
                  )}
                </div>
                <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
                  <p className="pe-1 col-4">Sertifikat toefl</p>
                  {pendaftar.toeflFile ? (
                    <a
                      className="stretched-link fw-bold"
                      href={"http://47.254.192.86:85/" + pendaftar.toeflFile}
                    >
                      Lihat file
                    </a>
                  ) : (
                    <p className="fw-bold text-danger">Tidak ada data !</p>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
                  <p className="pe-1 col-4">Surat Rekomendasi</p>
                  {pendaftar.rekomendasi ? (
                    <a
                      className="stretched-link fw-bold"
                      href={"http://47.254.192.86:85/" + pendaftar.rekomendasi}
                    >
                      Lihat file
                    </a>
                  ) : (
                    <p className="fw-bold text-danger">Tidak ada data !</p>
                  )}
                </div>
                <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
                  <p className="pe-1 col-4">Surat Keterangan tidak mampu</p>
                  {pendaftar.mampu ? (
                    <a
                      className="stretched-link fw-bold"
                      href={"http://47.254.192.86:85/" + pendaftar.mampu}
                    >
                      Lihat file
                    </a>
                  ) : (
                    <p className="fw-bold text-danger">Tidak ada data !</p>
                  )}
                </div>
              </>
            )}
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-4">Link sertifikat prestasi</p>
              <p className="fw-bold col-9">{pendaftar.sertifikat}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pendaftar;
