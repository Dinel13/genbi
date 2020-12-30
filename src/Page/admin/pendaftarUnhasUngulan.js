import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Pendaftar from "./pendaftar";

const PendaftarUnhasUngulan = (props) => {
  useEffect(() => {
    props.setActive("dafUnh");
  });

  let { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Pendaftar />
        </Route>
      </Switch>
    </div>
  );
};
export default PendaftarUnhasUngulan;
