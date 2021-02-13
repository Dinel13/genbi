import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import print from "print-js";

import Pendaftar from "../pendaftar";
import Tabel from "../../../components/admin/Pendaftar/tabel";
import Modal from "../../../shared/Modal";
import ErrorModal from "../../../components/ErrorModal/Error";
import Loading from "../../../components/Loading/Loading";

const PendaftarUinam = (props) => {
  const admin = useSelector((state) => state.Auth.admin);
  const adminId = useSelector((state) => state.Auth.adminId);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [pendaftar, setPendaftar] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { setActive } = props;

  useEffect(() => {
    setActive("dafUinam");
    fetch("http://47.254.192.86:85/graphql", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + admin,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` 
          query { 
            pendaftars(adminId: "${adminId}" kampus : "uinam" jenis : "reguler") {
             nama nim fakultas prodi ipk lolosBerkas id
            }
          }`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.errors) {
          throw data.errors[0].message;
        }
        setPendaftar(data.data.pendaftars);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(error);
      });
  }, [setActive, adminId, admin]);

  const exportToPdf = () => {
    print({
      printable: "tabelku",
      type: "html",
      header: "pendaftar UIN Alauddin Makassar",
      ignoreElements: ["notExport", "notExport1"],
    });
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap card-header m  flex-md-nowrap align-items-center py-3  ps-3 pe-4 border-bottom shadow-sm">
        <h1 className="h2">Pendaftar UIN Aalauddin Makassar</h1>
        <div className="btn-toolbar mb-2 mb-md-0" id="ggggg">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-outline-secondary">
              Jumlah pendaftar{" "}
              <span className="badge bg-primary">
                {pendaftar ? pendaftar.length : "0"}
              </span>
            </button>
            {pendaftar.length ? (
              <button className="btn btn-dark" onClick={() => exportToPdf()}>
                cetak
              </button>
            ) : null}
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path={path}>
          {isError ? (
            <ErrorModal message={isError.toString()} setModall={setIsError} />
          ) : isLoading ? (
            <Loading />
          ) : pendaftar.length ? (
            <Tabel data={pendaftar} url={url} />
          ) : (
            <Modal
              header="Mohon maaf, Data masih kosong"
              body="Periksa koneksi jaringan anda dan pastikan data telah tersedia"
            />
          )}
        </Route>
        <Route path={`${path}/:pendaftarId`}>
          <Pendaftar />
        </Route>
      </Switch>
    </>
  );
};
export default PendaftarUinam;
