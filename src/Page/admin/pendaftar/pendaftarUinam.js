import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Pendaftar from "../pendaftar";
import { Unhas } from "../../../Data/PendaftarUnhas";
import Tabel from "../../../components/admin/Pendaftar/tabel";

const PendaftarUinam = (props) => {
  let { path, url } = useRouteMatch();
  const { setActive, setTitle } = props;

  useEffect(() => {
    setActive("dafUinam");
    setTitle(["Pendaftar UIN Aalauddin Makassar", Unhas.length]);
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
export default PendaftarUinam;
