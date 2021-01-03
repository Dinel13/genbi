import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Pendaftar from "../pendaftar";
import { Unhas } from "../../../Data/BerkasUnhas";
import Tabel from "../../../components/admin/LolosBerkas/Tabel";

const UnhasReguler = (props) => {
  let { path, url } = useRouteMatch();
  const { setActive, setTitle } = props;
  useEffect(() => {
    setActive("berUnh");
    setTitle(["Lolos Berkas Universitas Hasanuddin-Reguler"]);
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
export default UnhasReguler;
