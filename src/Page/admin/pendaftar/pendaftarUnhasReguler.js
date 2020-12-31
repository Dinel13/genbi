import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Pendaftar from "../pendaftar";
import { Unhas } from "../../../Data/PendaftarUnhas";
import Tabel from "../../../components/admin/Pendaftar/tabel";

const PendaftarUnhasReguler = (props) => {
  useEffect(() => {
    props.setActive("dafUnh");
    props.setTitle("Pendaftar Universitas Hasanuddin-Reguler")
  });

  let { path, url } = useRouteMatch();
  return (
    <Switch>
    <Route exact path={path}>
      <Tabel Unhas={Unhas} url={url} />       
    </Route>
    <Route path={`${path}/:topicId`}>
      <Pendaftar />
    </Route>
  </Switch>
  );
};
export default PendaftarUnhasReguler;
