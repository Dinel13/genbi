import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { useHttpClient } from "../../../shared/hooks/http-hook";
import Modal from "../../../components/Modal/Modal";
import ErrorModal from "../../../components/ErrorModal/Error";
import Loading from "../../../components/Loading/Loading";

const Card = (props) => {
  const admin = useSelector((state) => state.Auth.admin);
  const adminId = useSelector((state) => state.Auth.adminId);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [modall, setModall] = useState(false);
  const [nama, setNama] = useState("");
  const [modalBody, setModalBody] = useState("");
  const [modalYakin, setModalYakin] = useState("");
  const [pendaftarId, setPendaftarId] = useState(null);

  const { data } = props;

  const batalkanLolosWawancara = async (pendaftarId) => {
    try {
      const responseData = await sendRequest(
        "http://localhost:8080/graphql",
        "POST",
        JSON.stringify({
          query: ` 
            mutattion {
              lolosWawancara(pendaftarAndAdminInput: {pendaftarId: "${pendaftarId}",
              adminId : "${adminId}", terima : "${false}"}) {
                nama
              }
            }
          `,
        }),
        {
          Authorization: "Bearer " + admin,
          "Content-Type": "application/json",
        }
      );
      console.log(responseData);
      props.removeFromData();
    } catch (err) {
      //sementara
      props.removeFromData();
      console.log(err);
    }
  };

  const kirimEmail = async (pendaftarId) => {
    try {
      const responseData = await sendRequest(
        "http://localhost:8080/email",
        "POST",
        JSON.stringify({ pendaftarId }),
        {
          Authorization: "Bearer " + admin,
          "Content-Type": "application/json",
        }
      );
      console.log(responseData);
    } catch (err) {
      console.log(err);
    }
  };

  return error ? (
    <ErrorModal message={error} setModall={clearError} />
  ) : isLoading ? (
    <Loading />
  ) : (
    <div className="col">
      {modall && (
        <Modal
          header="Apakah anda yakin"
          body={modalBody}
          modall={modall}
          setModall={setModall}
          onYakin={() => {
            modalYakin === "batal"
              ? batalkanLolosWawancara(pendaftarId)
              : kirimEmail();
          }}
        />
      )}
      <div className="card shadow">
        <div className="card-header">
          <h6 className="card-title">{data.nama}</h6>
        </div>
        <div className="card-body row">
          <div className="col-lg-4">
            <img
              src={props.image}
              className="figure-img img-fluid rounded"
              alt={data.nama}
            />
          </div>
          <div className="col-md-8">
            <p className="m-0">Fakultas {data.fakultas}</p>
            <p className="m-0">{data.prodi}</p>
            <p className="card-text">
              <small className="text-muted">{data.ipk}</small>
            </p>
          </div>
          <div className="row">
            <div
              className="btn-group  w-100"
              role="group"
              id="notExport"
              aria-label="Basic outlined example"
            >
              <Link
                to={`${props.url}/${data.id?.toString()}`}
                type="button"
                className="btn btn-sm  btn-primary"
              >
                Detail
              </Link>
              <button
                type="button"
                className="btn btn-sm btn-danger"
                onClick={() => {
                  setModall(true);
                  setPendaftarId(data.id.toString());
                  setNama(data.nama);
                  setModalBody(
                    `Anda akan membatalkan ${data.nama} dari lolos wawancara`
                  );
                  setModalYakin("batal");
                }}
              >
                Batal
              </button>
              <button
                type="button"
                className="btn btn-sm btn-success"
                onClick={() => {
                  setModall(true);
                  setPendaftarId(data.id.toString());
                  setNama(data.nama);
                  setModalBody(`Anda akan mengirim email ke ${data.nama}`);
                  setModalYakin("email");
                }}
              >
                Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
