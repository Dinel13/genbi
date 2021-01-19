import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Pendaftar from "../pendaftar";
import { Unhas } from "../../../Data/PendaftarUnhas";
import Tabel from "../../../components/admin/Pendaftar/tabel";

const PendaftarUinam = (props) => {
  let { path, url } = useRouteMatch();
  const { setActive } = props;

  useEffect(() => {
    setActive("dafUinam");
  }, [setActive]);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap card-header m  flex-md-nowrap align-items-center py-3  ps-3 pe-4 border-bottom shadow-sm">
        <h1 className="h2">Pendaftar UIN Aalauddin Makassar</h1>
        <div className="btn-toolbar mb-2 mb-md-0" id="ggggg">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Jumlah pendaftar <span className="badge bg-primary">100</span>
            </button>
            {/* <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => props.export(props.id,props.header)}> 
Export
</button>*/}
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
