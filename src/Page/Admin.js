import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Main from "../components/admin/Main";
import SideBar from "../components/admin/SideBar";
import "./admin.css";

const Admin = (props) => {
  let { path, url } = useRouteMatch();
  
  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar url={url} />
        <Main path={path}>
          <Switch>
            <Route path={path} exact>
              <h3>Please select a topiffc.</h3>
            </Route>
            {/* pendaftar */}
            <Route path={`${path}/pendaftar-unhas-ungulan`}>
              <h3>pendaftar-unhas-ung</h3>
            </Route>
            <Route path={`${path}/pendaftar-unhas-reguler`}>
              <h3>pendaftar-un-reg</h3>
            </Route>
            <Route path={`${path}/pendaftar-unm`}>
              <h3>pendaftar-unm</h3>
            </Route>
            <Route path={`${path}/pendaftar-uinam`}>
              <h3>pendaftar-uinam</h3>
            </Route>
            {/* berkas */}
            <Route path={`${path}/lolos-berkas-unhas-ungulan`}>
              <h3>lolos-berkas-unhas-ung</h3>
            </Route>
            <Route path={`${path}/lolos-berkas-unhas-reguler`}>
              <h3>lolos-berkas-un-reg</h3>
            </Route>
            <Route path={`${path}/lolos-berkas-unm`}>
              <h3>lolos-berkas-unm</h3>
            </Route>
            <Route path={`${path}/lolos-berkas-uinam`}>
              <h3>lolos-berkas-uinam</h3>
            </Route>
            {/* wawancara */}
            <Route path={`${path}/lolos-wawancara-unhas-ungulan`}>
              <h3>lolos-wawancara--unhas-ung</h3>
            </Route>
            <Route path={`${path}/lolos-wawancara-unhas-reguler`}>
              <h3>lolos-wawancara--un-reg</h3>
            </Route>
            <Route path={`${path}/lolos-wawancara-unm`}>
              <h3>lolos-wawancara--unm</h3>
            </Route>
            <Route path={`${path}/lolos-wawancara-uinam`}>
              <h3>lolos-wawancara--uinam</h3>
            </Route>
          </Switch>
        </Main>
      </div>
    </div>
  );
};

export default Admin;
