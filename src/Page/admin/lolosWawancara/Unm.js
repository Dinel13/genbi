import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Pendaftar from "../pendaftar";

const Unm = (props) => {
  let { path } = useRouteMatch();
  const { setActive, setTitle } = props;
  useEffect(() => {
    setActive("wawUnm");
    setTitle(["Lolos Wawancara Universitas Negeri Makassar"]);
  },[setActive, setTitle]);

  return (
    <Switch>
      <Route exact path={path}>
        <div className="table-responsive"></div>
      </Route>
      <Route path={`${path}/:topicId`}>
        <Pendaftar />
      </Route>
    </Switch>
  );
};
export default Unm;
