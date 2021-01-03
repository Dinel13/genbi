import React, { useState } from "react";
import { useParams } from "react-router-dom";
import image from "../../images/sala.jpg";

const Pendaftar = (props) => {
  let { topicId } = useParams();
  const [nilai1, setNilai1] = useState(undefined);
  const [nilai2, setNilai2] = useState(undefined);
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);

  const submitNilaiSatu = (e) => {
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
  };

  const submitNilaiDua = (e) => {
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
  };

  return (
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
              <hr/>
            {props.wawancara && <h5 className="text-center"><span className="text-muted">Nilai wawancara</span> 100</h5>}
            </figure>
            {props.berkas && (
              <>
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
                    <label className="ps-4 fw-bold">Niali 1</label>
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
                      className={`form-control  ${error2 ? "is-invalid" : ""}`}
                    />
                    <label className="ps-4 fw-bold">Niali 2</label>
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
              </>
            )}
            <button className="btn btn-primary btn-lg col-12">Terima</button>
          </div>
        </div>
        <div className="col-9">
          <div className="card shadow rounded list-group list-group-flush mb-5 p-0">
            <div className="card-header bg-secondary p-3 pb-2 col">
              <h3 className=" text-white fw-bold">Data Diri</h3>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Nama Lengkap </p>
              <p className="fw-bold col-9">{topicId}</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Nama Pangilan </p>
              <p className="fw-bold col-3">huddin</p>
              <p className="pe-1 col-3">Jenis-Kelamin </p>
              <p className="fw-bold col-3">Laki-laki</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Agama</p>
              <p className="fw-bold col-3">Islam</p>
              <p className="pe-1 col-3">Golongan Darah</p>
              <p className="fw-bold col-3">0</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Suku Bangsa</p>
              <p className="fw-bold col-9">Massenrempulu-Enrekang</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Tempat dan tanggal lahir</p>
              <p className="fw-bold col-9">Larompong, 13 Maret 1998</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Anak ke</p>
              <p className="pe-1 col-2 fw-bold ">3</p>
              <p className="pe-1 col-3">Dari Jumlah saudara</p>
              <p className="fw-bold col-4">4</p>
            </div>

            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Hobi</p>
              <p className="fw-bold col-9">Baca buku, dengar musik</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Cita-cita</p>
              <p className="fw-bold col-9">ENterprenuer, programer</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Alamat selama berkuliah</p>
              <p className="fw-bold col-9">
                Pondok zavair, jl Nangka, Bontomarannu , Gowa
              </p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Nomor Telepon</p>
              <p className="pe-1 col-3 fw-bold ">082346462435</p>
              <p className="pe-1 col-3">Nomor Wa</p>
              <p className="fw-bold col-3">082346462435</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Akun Instagram</p>
              <p className="fw-bold col-3">salahuddin_hafid</p>
              <p className="pe-1 col-3">Alamat email</p>
              <p className="fw-bold pe-1 col-3">salahuddin_hafid@gmail.com</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Minat atau Bakat</p>
              <p className="pe-1 col-3 fw-bold ">Programing</p>
              <p className="pe-1 col-3">Keterampilan hidup</p>
              <p className="fw-bold col-3">
                BUat website, buat aplikasi mobile
              </p>
            </div>
          </div>
          <div className="card shadow rounded list-group list-group-flush mb-5">
            <div className="card-header bg-secondary p-3 pb-2">
              <h3 className=" text-white fw-bold">Data Orangtua/Wali</h3>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Nama Ayah</p>
              <p className="fw-bold col-9">Lahapi</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Nomor Telepon Ayah</p>
              <p className="fw-bold col-9">082346462345</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Alamat Ayah</p>
              <p className="fw-bold col-9">
                Jl. SInergi MUlya, Topamdanmg , BUKIT Sutra
              </p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Pekerjaan Ayah</p>
              <p className="pe-1 col-3 fw-bold ">Petani</p>
              <p className="pe-1 col-3">Penghasilan Ayah</p>
              <p className="fw-bold col-3">Rp 4.000.000</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Nama ibu</p>
              <p className="fw-bold col-9">Sanaria</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Nomor Telepon ibu</p>
              <p className="fw-bold col-9">082346462345</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Alamat ibu</p>
              <p className="fw-bold col-9">
                Jl. SInergi MUlya, Topamdanmg , BUKIT Sutra
              </p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Pekerjaan ibu</p>
              <p className="pe-1 col-3 fw-bold ">Petani</p>
              <p className="pe-1 col-3">Penghasilan ibu</p>
              <p className="fw-bold col-3">Rp 500.000</p>
            </div>
          </div>
          <div className="card shadow rounded list-group list-group-flush mb-5">
            <div className="card-header bg-secondary p-3 pb-2">
              <h3 className=" text-white fw-bold">Data akademik</h3>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Perguruan tinggi</p>
              <p className="fw-bold col-9">Universitas Hasanuddin</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Fakultas</p>
              <p className="pe-1 col-3 fw-bold ">Teknik</p>
              <p className="pe-1 col-3">Program Studi</p>
              <p className="fw-bold col-3">Teknik Informatika</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">NIM</p>
              <p className="pe-1 col-3 fw-bold ">D121181327</p>
              <p className="pe-1 col-3">IP semester terakhir</p>
              <p className="fw-bold col-3">3.54</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Tahun masuk kuliah</p>
              <p className="pe-1 col-3 fw-bold ">2018</p>
              <p className="pe-1 col-3">Tahun rencana lulus</p>
              <p className="fw-bold col-3">2022</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Prestasi selama berkuliah</p>
              <p className="fw-bold col-9">0vfdv vfvdf fdvv82346462345</p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">
                Organisasi yang pernah dan sedang diikuti
              </p>
              <p className="fw-bold col-9">gergre brtger bbf bbe bebve bfb</p>
            </div>
          </div>
          <div className="card shadow rounded list-group list-group-flush mb-5">
            <div className="card-header bg-secondary p-3 pb-2">
              <h3 className=" text-white fw-bold">Essay Beasiswa</h3>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Alasan mendaftar beasiswa</p>
              <p className="fw-bold col-9">
                lorem v fdvfd fdvf fdfvwcwc f dwvd
              </p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3">Rencana pengunaan beasiswa</p>
              <p className="fw-bold col-9">
                lorem v fdvfd fdvf fdfvwcwc f dwvd
              </p>
            </div>
            <div className="list-group-item mx-3 d-inline-flex pt-3 pb-0">
              <p className="pe-1 col-3 pe-1">
                Kenapa pantas mendapatkan beasiswa
              </p>
              <p className="fw-bold col-9">
                lorem v fdvfd fdvf fdfvwcwc f dwvd
              </p>
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
