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
  const [terima, setTerima] = useState(null);
  const [data, setData] = useState(props.data);
  const [pendaftarId, setPendaftarId] = useState(null);

  const batalkanLolosWawancara = async (pendaftarId, terima) => {
    try {
      const responseData = await sendRequest(
        "http://localhost:8080/graphql",
        "POST",
        JSON.stringify({
          query: ` 
            mutattion {
              lolosWawancara(pendaftarAndAdminInput: {pendaftarId: "${pendaftarId}",
              adminId : "${adminId}", terima : "${terima}"}) {
                nama
                nim
                fakultas
                prodi
                ipk
                mampu
                lolosWawancara
              }
            }
          `,
        }),
        {
          Authorization: "Bearer " + admin,
          "Content-Type": "application/json",
        }
      );
      //induk data harus berubah dan rerender
      console.log(responseData);
      setData(responseData.data.pendaftar);
    } catch (err) {}
  };

  return error ? (
    <ErrorModal message={error} setModall={clearError} />
  ) : isLoading ? (
    <Loading />
  ) : (
    <div className="col">
      {modall && (
        <Modal
          header="Apakah anda yakain"
          body="harap hati-hati"
          modall={modall}
          setModall={setModall}
          onYakin={() => batalkanLolosWawancara(pendaftarId, terima)}
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
            <div
              className="btn-group  w-100"
              role="group"
              aria-label="Basic outlined example"
            >
              <Link
                to={`${props.url}/${data.id.toString()}`}
                type="button"
                className="btn btn-sm  btn-primary"
              >
                Detail
              </Link>
              {data.lolosWawancara ? (
                <button
                  type="button"
                  className="btn btn-sm btn-danger"
                  onClick={() => {
                    setModall(true);
                    setPendaftarId(data.id.toString());
                    setTerima(false);
                  }}
                >
                  Batalkan
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-sm btn-success"
                  onClick={() => {
                    setModall(true);
                    setPendaftarId(data.id.toString());
                    setTerima(true);
                  }}
                >
                  Terima
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
