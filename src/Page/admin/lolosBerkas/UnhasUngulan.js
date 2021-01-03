import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Pendaftar from "../pendaftar";
import { Unhas } from "../../../Data/BerkasUnhas";
import Tabel from "../../../components/admin/LolosBerkas/Tabel";

const UnhasUngul = (props) => {
  const { setActive, setTitle } = props;
  let { path, url } = useRouteMatch();

  useEffect(() => {
    setActive("berUnh");
    setTitle(["Lolos Berkas Universitas Hasanuddin-Ungulan"]);
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
export default UnhasUngul;
