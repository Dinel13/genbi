import React, { useEffect, useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";

import Pendaftar from "../pendaftar";
import { Unhas } from "../../../Data/WawancaraUnhas";
import Card from "../../../components/admin/LolosWawancara/Card";
import Modal from "../../../shared/Modal";
import ErrorModal from "../../../components/ErrorModal/Error";
import Loading from "../../../components/Loading/Loading";

const UnhasUngul = (props) => {
  let { path, url } = useRouteMatch();
  const admin = useSelector((state) => state.Auth.admin);
  const adminId = useSelector((state) => state.Auth.adminId);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [pendaftar, setPendaftar] = useState(false);
  const { setActive } = props;
  useEffect(() => {
    setActive("wawUnh");
    fetch("http://47.254.192.86:85/graphql", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + admin,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` 
          query { 
            lolosWawancaras(adminId: "${adminId}" kampus : "unhas" jenis : "ungulan") {
              nama
              nim
              fakultas
              prodi
              ipk
              mampu
              lolosWawancara
            }
          }`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.errors) {
          throw data.errors[0].message;
        }
        setPendaftar(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(error);
        console.log(error);
      });
  }, [setActive, adminId, admin]);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap card-header m  flex-md-nowrap align-items-center py-3  ps-3 pe-4 border-bottom shadow-sm">
        <h1 className="h2">Lolos Wawancara Universitas Hasanuddin-Unggulan</h1>
        <div className="btn-toolbar mb-2 mb-md-0" id="ggggg">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-outline-secondary">
              Jumlah pendaftar{" "}
              <span className="badge bg-primary">
                {pendaftar ? pendaftar.length : "0"}
              </span>
            </button>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path={path}>
          {isError ? (
            <ErrorModal message={isError.toString()} setModall={setIsError} />
          ) : isLoading ? (
            <Loading />
          ) : Unhas ? (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 m-2  row-cols-lg-3 g-3">
              {Unhas.map((item) => (
                <Card data={item} key={item.id} url={url}  image={item.foto}  />
              ))}
            </div>
          ) : (
            <Modal
              header="Mohon maaf, Data masih kosong"
              body="Periksa koneksi jaringan anda dan pastikan data telah tersedia"
            />
          )}
        </Route>
        <Route path={`${path}/:pendaftarId`}>
          <Pendaftar wawancara={true} />
        </Route>
      </Switch>
    </>
  );
};
export default UnhasUngul;
