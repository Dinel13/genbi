import React, { useState } from "react";

const Daftar = (props) => {
  const [nama, setNama] = useState("");
  const [nomorWa, setNomorWa] = useState("");
  const [kampus, setKampus] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [motif, setMotif] = useState("");

  const submitHandler = (e) => {
    console.log(nama, angkatan, motif, nomorWa, kampus);
    e.preventDefault();
  };

  const motifHandleChange = (e) => {
    setMotif(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <br />
      <label>
        Nama Lengkap:
        <input
          name="nama"
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
      </label>
      <br />
      <label>
        Nomor Wa/Hp:
        <input
          name="nomorWa"
          type="text"
          value={nomorWa}
          onChange={(e) => setNomorWa(e.target.value)}
        />
      </label>
      <br />
      <label>
        Perguruan Tinggi:
        <select value={kampus} onChange={(e) => setKampus(e.target.value)}>
          <option value="unhas">Universitas Hasanuddin</option>
          <option value="unm">Universitas Negri Makassar</option>
          <option value="uin">UIN Alauddin Makassar</option>
        </select>
      </label>
      <br />
      <label>
        Tahun Masuk Kuliah :
        <select value={angkatan} onChange={(e) => setAngkatan(e.target.value)}>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
        </select>
      </label>
      <br />
      <label>
        Alasan mendaftar beasiswa ini:
        <textarea value={motif} onChange={motifHandleChange} />
      </label>
      <br />
      <label>
        Foto kartu tanda mahasiswa
        <input type="file" />
      </label>
      <br />
      <label>
        Scan transkip nilai
        <input type="file" />
      </label>
      <br />
      <label>
        Scan surat keterangan tidak mampu
        <input type="file" />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};
export default Daftar;
