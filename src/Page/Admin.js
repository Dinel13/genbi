import React, { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import print from "print-js";

import Main from "../components/admin/Main";
import SideBar from "../components/admin/SideBar";
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
  const [elementId, setElementId] = useState("");
  const [pdfHeader, setPdfHeader] = useState("");

  console.log(elementId);

  const exportToPdf = (id, header) => {
    print({
      printable: id,
      type: "html",
      header: header,
      style: ".btn-primary { color: red; } .ggg{color : black;} ",
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar url={url} active={active} />
        <Main title={title} export={exportToPdf} id={elementId} header={pdfHeader}>
          <Switch>
            <Route path={path} exact>
              <div className="container">
                <div className="row">
                  <div className="mt-10">
                    <div className="alert alert-warning">
                      pilih menu disamping
                    </div>
                  </div>
                </div>
              </div>
            </Route>
            {/* pendaftar */}
            <Route path={`${path}/pendaftar-unhas-ungulan`}>
              <PendaftarUnhasUngulan
                setActive={setActive}
                setTitle={setTitle}
                setElementId={setElementId}
                setPdfHeader={setPdfHeader}
              />
            </Route>
            <Route path={`${path}/pendaftar-unhas-reguler`}>
              <PendaftarUnhasReguler
                setActive={setActive}
                setTitle={setTitle}
              />
            </Route>
            <Route path={`${path}/pendaftar-unm`}>
              <PendaftarUnm setActive={setActive} setTitle={setTitle} />
            </Route>
            <Route path={`${path}/pendaftar-uinam`}>
              <PendaftarUinam setActive={setActive} setTitle={setTitle} />
            </Route>
            {/* berkas */}
            <Route path={`${path}/lolos-berkas-unhas-ungulan`}>
              <BerkasUnhasUngulan setActive={setActive} setTitle={setTitle} />
            </Route>
            <Route path={`${path}/lolos-berkas-unhas-reguler`}>
              <BerkasUnhasReguler setActive={setActive} setTitle={setTitle} />
            </Route>
            <Route path={`${path}/lolos-berkas-unm`}>
              <BerkasUnm setActive={setActive} setTitle={setTitle} />
            </Route>
            <Route path={`${path}/lolos-berkas-uinam`}>
              <BerkasUinam setActive={setActive} setTitle={setTitle} />
            </Route>
            {/* wawancara */}
            <Route path={`${path}/lolos-wawancara-unhas-ungulan`}>
              <WawancaraUnhasUngulan
                setActive={setActive}
                setTitle={setTitle}
              />
            </Route>
            <Route path={`${path}/lolos-wawancara-unhas-reguler`}>
              <WawancaraUnhasReguler
                setActive={setActive}
                setTitle={setTitle}
              />
            </Route>
            <Route path={`${path}/lolos-wawancara-unm`}>
              <WawancaraUnm setActive={setActive} setTitle={setTitle} />
            </Route>
            <Route path={`${path}/lolos-wawancara-uinam`}>
              <WawancaraUinam setActive={setActive} setTitle={setTitle} />
            </Route>
          </Switch>
        </Main>
      </div>
    </div>
  );
};

export default Admin;
