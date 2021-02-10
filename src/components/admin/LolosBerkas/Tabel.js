import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import ModalAlert from "../../../shared/Modal";
import Modal from "../../../components/Modal/Modal";
import ErrorModal from "../../../components/ErrorModal/Error";
import Loading from "../../../components/Loading/Loading";

const Tabel = (props) => {
  const admin = useSelector((state) => state.Auth.admin);
  const adminId = useSelector((state) => state.Auth.adminId);
  const [modall, setModall] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(props.data);
  const [pendaftarId, setPendaftarId] = useState(null);
  const [terima, setTerima] = useState(null);

  /* to handel terima atau batal the pendaftar*/
  const lolosWawancaraHandler = (pendaftarId, terima) => {
    setIsLoading(true);
    fetch("http://localhost:8080/graphql", {
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
              id lolosWawancara
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
        const newData = data.map((item) => {
          if (item.id === resData.data.lolosWawancara.id.toString()) {
            item.lolosBerkas = resData.data.lolosWawancara.lolosWawancara;
          }
          return {
            ...item,
          };
        });
        setData(newData);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(setIsLoading(false));
  };

  return error ? (
    <ErrorModal message={error} setModall={setError} />
  ) : isLoading ? (
    <Loading />
  ) : !data ? (
    <ModalAlert
      header="Mohon maaf, Data masih kosong"
      body="Periksa koneksi jaringan anda dan pastikan data telah tersedia"
    />
  ) : (
    <>
      {modall && (
        <Modal
          header="Apakah anda yakain"
          body="harap hati-hati"
          modall={modall}
          setModall={setModall}
          onYakin={() => lolosWawancaraHandler(pendaftarId, terima)}
        />
      )}
      <div className="table-responsive">
        <div id="tabelku">
          <table className="table  table-ligh table-hover ">
            <thead>
              <tr className="table-info">
                <th className="ps-3" scope="col">
                  No
                </th>
                <th scope="col">Nama</th>
                <th scope="col">NIM</th>
                <th scope="col">Fakultas</th>
                <th scope="col">Nilai 1</th>
                <th scope="col">Nilai 2</th>
                <th scope="col">Total</th>
                <th scope="col" id="notExport">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((pendaftar, index) => (
                <tr key={pendaftar.id}>
                  <th className="ps-3" scope="row">
                    {index + 1}
                  </th>
                  <td className="text-truncate" style={{ maxWidth: "120px" }}>
                    {pendaftar.nama}
                  </td>
                  <td className="text-truncate" style={{ maxWidth: "100px" }}>
                    {pendaftar.nim}
                  </td>
                  <td className="text-truncate" style={{ maxWidth: "120px" }}>
                    {pendaftar.fakultas}
                  </td>
                  <td className="text-truncate" style={{ maxWidth: "110px" }}>
                    {pendaftar.nilai1}
                  </td>
                  <td className="text-truncate" style={{ maxWidth: "100px" }}>
                    {pendaftar.nilai2}
                  </td>
                  <td className="text-truncate" style={{ maxWidth: "100px" }}>
                    {pendaftar.nilai1 + pendaftar.nilai2}
                  </td>
                  <td id="notExport1">
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic outlined example"
                    >
                      <Link
                        to={`${props.url}/${pendaftar.id.toString()}`}
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Detail
                      </Link>
                      {pendaftar.lolosBerkas ? (
                        <button
                          type="button"
                          className="btn btn-sm btn-danger"
                          onClick={() => {
                            setModall(true);
                            setPendaftarId(pendaftar.id.toString());
                            setTerima(false);
                          }}
                        >
                          Batalkan
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn  btn-sm btn-outline-success"
                          onClick={
                            () => {
                              setModall(true);
                              setPendaftarId(pendaftar.id.toString());
                              setTerima(true);
                            }
                          }
                        >
                          Terima
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Tabel;
