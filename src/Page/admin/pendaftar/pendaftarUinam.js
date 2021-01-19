import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";

import Pendaftar from "../pendaftar";
import { Unhas } from "../../../Data/PendaftarUnhas";
import Tabel from "../../../components/admin/Pendaftar/tabel";

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
    fetch("http://localhost:8080/graphql", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + admin,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` 
          query { 
            pendaftars(adminId: "${adminId}" kampus : "unha") {
              nama
              nim
              fakultas
              prodi
              ipk
              mampu
            }
          }`
          ,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.errors) {
          throw data.errors[0].message;
        }
        setPendaftar(data)
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(error);
        console.log(error);
      });
  },  [setActive, adminId, admin] );
//
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap card-header m  flex-md-nowrap align-items-center py-3  ps-3 pe-4 border-bottom shadow-sm">
        <h1 className="h2">Pendaftar UIN Aalauddin Makassar</h1>
        <div className="btn-toolbar mb-2 mb-md-0" id="ggggg">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-outline-secondary">
              Jumlah pendaftar <span className="badge bg-primary">100</span>
            </button>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path={path}>
          <Tabel Unhas={Unhas} url={url} />
        </Route>
        <Route path={`${path}/:topicId`}>
          <Pendaftar />
        </Route>
      </Switch>
    </>
  );
};
export default PendaftarUinam;
