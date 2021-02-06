import React, { useState } from "react";
import { useParams } from "react-router-dom";
import image from "../../images/sala.jpg";
import { useSelector } from "react-redux";

import { PENDAFTAR_FIElD } from "../../constant/pendaftarField";
import ErrorModal from "../../components/ErrorModal/Error";
import Loading from "../../components/Loading/Loading";
import Modal from "../../shared/Modal";

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
  const [pendaftar, setPendaftar] = useState({nilai1 : 3});

  /* to print pdf
  const { setElementId, setPdfHeader } = props;
  React.useEffect(() => {
    setElementId("print");
    setPdfHeader("testy - salahuddin");
  }, [setElementId, setPdfHeader]);
*/

  const { from } = props;
  //to fetch the data of pendaftar
  React.useEffect(() => {
    //if this component from pendaftar just take pendaftar from props
    if (from) {
      setPendaftar(from);
    } else {
      setIsLoading(true);
      fetch("http://localhost:8080/graphql", {
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

  const submitNilaiSatu = async (e) => {
    e.preventDefault();
    if (!nilai1) {
      setError("masukkan nilai yang valid");
      return;
    }
    if (nilai1 < 0) {
      setError("masukkan nilai yang valid");
      return;
    }
    console.log(nilai1);
    try {
      setIsLoading(false);
      const response = await fetch("http://localhost:8080/graphql", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + admin,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
        mutation {
          addNilaiWawancara(nilaiWawancaraInput: {pendaftarId : "${pendaftarId}",
          adminId : "${adminId}" untuk : "nilaiWawancara1", nilai : "${nilai1}"}) {
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
      setPendaftar(resData.data.pendaftar);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  const submitNilaiDua = async (e) => {
    e.preventDefault();
    if (!nilai2) {
      setError2("masukkan nilai yang valid");
      return;
    }
    if (nilai2 < 0) {
      setError2("masukkan nilai yang valid");
      return;
    }
    console.log(nilai2);
    try {
      setIsLoading(false);
      const response = await fetch("http://localhost:8080/graphql", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + admin,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
        mutation {
          addNilaiWawancara(nilaiWawancaraInput: {pendaftarId : "${pendaftarId}",
          adminId : "${adminId}" untuk : "nilaiWawancara2", nilai : "${nilai2}"}) {
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
      setPendaftar(resData.data.pendaftar);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  return isError ? (
    <ErrorModal message={isError.toString()} setModall={setIsError} />
  ) : isLoading ? (
    <Loading />
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
                src={image}
                className="figure-img img-fluid rounded"
                alt="..."
              />
              <figcaption className="figure-caption text-center">
                Pas Foto
              </figcaption>
              <hr />
              {props.wawancara && (
                <h5 className="text-center">
                  <span className="text-muted">Nilai wawancara</span> 100
                </h5>
              )}
            </figure>
            {props.berkas && (
              <>
                {pendaftar.nilai1 ? (
                  <p>Nilai 1 : <strong className="ps-2 fw-bolder">{pendaftar.nilai1}</strong></p>
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
                        onClick={submitNilaiSatu}
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
                {pendaftar.nilai2 ? (
                  <p>Nilai 1 <strong className="ps-2 fw-bolder">{pendaftar.nilai2}</strong></p>
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
                        onClick={submitNilaiDua}
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
              </>
            )}
            <button className="btn btn-primary btn-lg col-12">Terima</button>
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
              <p className="pe-1 col-3">Suku Bangsa</p>
              <p className="fw-bold col-9">{pendaftar.suku}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Tempat dan tanggal lahir</p>
              <p className="fw-bold col-9">
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
              <p className="fw-bold col-9">{pendaftar.hobby}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Cita-cita</p>
              <p className="fw-bold col-9">{pendaftar.cita}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Alamat selama berkuliah</p>
              <p className="fw-bold col-9">{pendaftar.kosan}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Nomor Telepon</p>
              <p className="pe-1 col-3 fw-bold ">{pendaftar.noHp}</p>
              <p className="pe-1 col-3">Nomor Wa</p>
              <p className="fw-bold col-3">{pendaftar.noWa}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Akun Instagram</p>
              <p className="fw-bold col-3">{pendaftar.instagram}</p>
              <p className="pe-1 col-3">Alamat email</p>
              <p className="fw-bold pe-1 col-3">salahuddin_hafid@gmail.com</p>
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
              <p className="fw-bold col-9">{pendaftar.teleonIbu}</p>
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
              <p className="pe-1 col-3">Tahun masuk kuliah</p>
              <p className="pe-1 col-3 fw-bold ">2018</p>
              <p className="pe-1 col-3">Tahun rencana lulus</p>
              <p className="fw-bold col-3">{pendaftar.lulus}</p>
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
              <p className="fw-bold col-9">
                lorem v fdvfd fdvf fdfvwcwc f dwvd
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pendaftar;
