import React, { useEffect } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import Pendaftar from "../pendaftar";

const Unm = (props) => {
  useEffect(() => {
    props.setActive("berUnm");
    props.setTitle("Lolos Berkas Universitas Negeri Makassar");
  });

  let { path, url } = useRouteMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
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
export default Unm;
