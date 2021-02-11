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
  const lolosBerkasHandler = (pendaftarId, terima) => {
    setIsLoading(true);
    fetch("http://localhost:8081/graphql", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + admin,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` 
          mutation {
            lolosBerkas(pendaftarAndAdminInput: {pendaftarId: "${pendaftarId}",
            adminId : "${adminId}", terima : "${terima}"}) {
              id lolosBerkas
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
          if (item.id === resData.data.lolosBerkas.id.toString()) {
            item.lolosBerkas = resData.data.lolosBerkas.lolosBerkas;
          }
          return {
            ...item,
          };
        });
        setData(newData);
      })
      .catch((error) => {
        setError(error)
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
    <div className="table-responsive" id="print">
      {modall && (
        <Modal
          header="Apakah anda yakain"
          body="harap hati-hati"
          modall={modall}
          setModall={setModall}
          onYakin={() => lolosBerkasHandler(pendaftarId, terima)}
        />
      )}
      <div id="tabelku">
        <table className="table table-ligh table-hover ">
          <thead>
            <tr className="table-info">
              <th className="ps-3" scope="col">
                No
              </th>
              <th scope="col">Nama</th>
              <th scope="col">NIM</th>
              <th scope="col">Fakultas</th>
              <th scope="col">Prodi</th>
              <th scope="col">Ipk</th>
              <th scope="col" id="notExport" className="actionku">
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
                  {pendaftar.prodi}
                </td>
                <td className="text-truncate" style={{ maxWidth: "100px" }}>
                  {pendaftar.ipk}
                </td>
                <td id="notExport1">
                  <div
                    className="btn-group actionku"
                    role="group"
                    aria-label="Basic outlined example"
                  >
                    <Link
                      to={`${props.url}/${pendaftar.id?.toString()}`}
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
                        onClick={() => {
                          setModall(true);
                          setPendaftarId(pendaftar.id.toString());
                          setTerima(true);
                        }}
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
  );
};

export default Tabel;
