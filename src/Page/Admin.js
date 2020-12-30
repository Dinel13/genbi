import React, { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Main from "../components/admin/Main";
import SideBar from "../components/admin/SideBar";
import "./admin.css";
import PendaftarUinam from "./admin/pendaftarUinam";
import PendaftarUnhasReguler from "./admin/pendaftarUnhasReguler";
import PendaftarUnhasUngulan from "./admin/pendaftarUnhasUngulan";
import PendaftarUnm from "./admin/pendaftarUnm";
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

  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar url={url} active={active} />
        <Main path={path}>
          <Switch>
            <Route path={path} exact>
              <h3>Please select a topiffc.</h3>
            </Route>
            {/* pendaftar */}
            <Route path={`${path}/pendaftar-unhas-ungulan`}>
              <PendaftarUnhasUngulan setActive={setActive} />
            </Route>
            <Route path={`${path}/pendaftar-unhas-reguler`}>
              <PendaftarUnhasReguler setActive={setActive} />
            </Route>
            <Route path={`${path}/pendaftar-unm`}>
              <PendaftarUnm setActive={setActive} />
            </Route>
            <Route path={`${path}/pendaftar-uinam`}>
              <PendaftarUinam setActive={setActive} />
            </Route>
            {/* berkas */}
            <Route path={`${path}/lolos-berkas-unhas-ungulan`}>
              <BerkasUnhasUngulan setActive={setActive} />
            </Route>
            <Route path={`${path}/lolos-berkas-unhas-reguler`}>
              <BerkasUnhasReguler setActive={setActive} />
            </Route>
            <Route path={`${path}/lolos-berkas-unm`}>
              <BerkasUnm setActive={setActive} />
            </Route>
            <Route path={`${path}/lolos-berkas-uinam`}>
              <BerkasUinam setActive={setActive} />
            </Route>
            {/* wawancara */}
            <Route path={`${path}/lolos-wawancara-unhas-ungulan`}>
              <WawancaraUnhasUngulan setActive={setActive} />
            </Route>
            <Route path={`${path}/lolos-wawancara-unhas-reguler`}>
              <WawancaraUnhasReguler setActive={setActive} />
            </Route>
            <Route path={`${path}/lolos-wawancara-unm`}>
              <WawancaraUnm setActive={setActive} />
            </Route>
            <Route path={`${path}/lolos-wawancara-uinam`}>
              <WawancaraUinam setActive={setActive} />
            </Route>
          </Switch>
        </Main>
      </div>
    </div>
  );
};

export default Admin;
