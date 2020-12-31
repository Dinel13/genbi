import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Pendaftar from "../pendaftar";

const Unm = (props) => {
  useEffect(() => {
    props.setActive("wawUnm");
    props.setTitle("Lolos Wawancara Universitas Negeri Makassar");
  });

  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <div class="table-responsive"></div>
      </Route>
      <Route path={`${path}/:topicId`}>
        <Pendaftar />
      </Route>
    </Switch>
  );
};
export default Unm;
