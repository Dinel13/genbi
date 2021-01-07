import React, { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Main from "../components/admin/Main";
import SideBar from "../components/admin/SideBar";
import SignIn from "../components/admin/SignIN/SignIn";
//import "./admin.css";
import PendaftarUinam from "./admin/pendaftar/pendaftarUinam";
import PendaftarUnhasReguler from "./admin/pendaftar/pendaftarUnhasReguler";
import PendaftarUnhasUngulan from "./admin/pendaftar/pendaftarUnhasUngulan";
import PendaftarUnm from "./admin/pendaftar/pendaftarUnm";
import BerkasUinam from "./admin/lolosBerkas/Uinam";
import BerkasUnhasReguler from "./admin/lolosBerkas/UnhasReguler";
import BerkasUnhasUngulan from "./admin/lolosBerkas/UnhasUngulan";
import BerkasUnm from "./admin/lolosBerkas/Unm";
import WawancaraUinam from "./admin/lolosWawancara/Uinam";
import WawancaraUnhasReguler from "./admin/lolosWawancara/UnhasReguler";
import WawancaraUnhasUngulan from "./admin/lolosWawancara/UnhasUngulan";
import WawancaraUnm from "./admin/lolosWawancara/Unm";

const Admin = (props) => {
  let { path, url } = useRouteMatch();
  const [active, setActive] = useState("");
  const [title, setTitle] = useState("");

  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar url={url} active={active} />
        <Main title={title}>
          <Switch>
            <Route path={path} exact>
              <h3>Please select a topiffc.</h3>
              <SignIn />
            </Route>
            {/* pendaftar */}
            <Route path={`${path}/pendaftar-unhas-ungulan`}>
              <PendaftarUnhasUngulan setActive={setActive} setTitle={setTitle} />
            </Route>
            <Route path={`${path}/pendaftar-unhas-reguler`}>
              <PendaftarUnhasReguler setActive={setActive} setTitle={setTitle} />
            </Route>
            <Route path={`${path}/pendaftar-unm`}>
              <PendaftarUnm setActive={setActive} setTitle={setTitle} />
            </Route>
            <Route path={`${path}/pendaftar-uinam`}>
              <PendaftarUinam setActive={setActive} setTitle={setTitle}/>
            </Route>
            {/* berkas */}
            <Route path={`${path}/lolos-berkas-unhas-ungulan`}>
              <BerkasUnhasUngulan setActive={setActive} setTitle={setTitle}/>
            </Route>
            <Route path={`${path}/lolos-berkas-unhas-reguler`}>
              <BerkasUnhasReguler setActive={setActive} setTitle={setTitle} />
            </Route>
            <Route path={`${path}/lolos-berkas-unm`}>
              <BerkasUnm setActive={setActive} setTitle={setTitle}/>
            </Route>
            <Route path={`${path}/lolos-berkas-uinam`}>
              <BerkasUinam setActive={setActive} setTitle={setTitle} />
            </Route>
            {/* wawancara */}
            <Route path={`${path}/lolos-wawancara-unhas-ungulan`}>
              <WawancaraUnhasUngulan setActive={setActive} setTitle={setTitle} />
            </Route>
            <Route path={`${path}/lolos-wawancara-unhas-reguler`}>
              <WawancaraUnhasReguler setActive={setActive} setTitle={setTitle} />
            </Route>
            <Route path={`${path}/lolos-wawancara-unm`}>
              <WawancaraUnm setActive={setActive} setTitle={setTitle}/>
            </Route>
            <Route path={`${path}/lolos-wawancara-uinam`}>
              <WawancaraUinam setActive={setActive} setTitle={setTitle}/>
            </Route>
          </Switch>
        </Main>
      </div>
    </div>
  );
};

export default Admin;
