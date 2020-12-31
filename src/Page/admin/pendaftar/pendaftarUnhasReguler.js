import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Pendaftar from "../pendaftar";
import { Unhas } from "../../../Data/PendaftarUnhas";
import Tabel from "../../../components/admin/Pendaftar/tabel";

const PendaftarUnhasReguler = (props) => {
  let { path, url } = useRouteMatch();
  const { setActive, setTitle } = props;
  useEffect(() => {
    setActive("dafUnh");
    setTitle(["Pendaftar Universitas Hasanuddin-Reguler", Unhas.length]);
  }, [setActive, setTitle]);

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
