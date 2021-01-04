import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Pendaftar from "../pendaftar";
import { Unhas } from "../../../Data/BerkasUnhas";
import Tabel from "../../../components/admin/LolosBerkas/Tabel";

const Uinam = (props) => {
  let { path, url } = useRouteMatch();
  const { setActive, setTitle } = props;
  useEffect(() => {
    setActive("berUinam");
    setTitle(["Lolos Berkas UIN Alauddin Makassar"]);
  }, [setActive, setTitle]);

  return (
    <Switch>
      <Route exact path={path}>
        <Tabel Unhas={Unhas} url={url} />
      </Route>
      <Route path={`${path}/:topicId`}>
        <Pendaftar berkas={true} />
      </Route>
    </Switch>
  );
};
export default Uinam;
