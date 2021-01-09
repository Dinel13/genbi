import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Pendaftar from "../pendaftar";
import { Unhas } from "../../../Data/PendaftarUnhas";
import Tabel from "../../../components/admin/Pendaftar/tabel";

const PendaftarUnhasUngulan = (props) => {
  let { path, url } = useRouteMatch();

  const { setActive, setTitle } = props;
  useEffect(() => {
    setActive("dafUnh");
    setTitle(["Pendaftar Universitas Hasanuddin-Ungulan", Unhas.length]);
  }, [setActive, setTitle]);

  return (
    <Switch>
      <Route exact path={path}>
        <Tabel
          setElementId={props.setElementId}
          setPdfHeader={props.setPdfHeader}
          Unhas={Unhas}
          url={url}
        />
      </Route>
      <Route path={`${path}/:topicId`}>
        <Pendaftar
          setElementId={props.setElementId}
          setPdfHeader={props.setPdfHeader}
        />
      </Route>
    </Switch>
  );
};
export default PendaftarUnhasUngulan;
