import React, { useEffect } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Card from "../../../components/admin/Card";

import Pendaftar from "../pendaftar";

const Uinam = (props) => {
  useEffect(() => {
    props.setActive("wawUinam");
    props.setTitle("Lolos Wawancara UIN Alauddin Makassar");
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
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <Card nama="salahuddin" fakultas="Tnik" prodi="mesin" ipk="4.0" />
            <Card nama="suddin" fakultas="Tnik" prodi="mesin" ipk="1.0"  />
            <Card nama="saluddin" fakultas="Tekn" prodi="mesin" ipk="2.0"  />
            <Card nama="huddin" fakultas="nik" prodi="mesin" ipk="3.0" />
          </div>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Pendaftar />
        </Route>
      </Switch>
    </div>
  );
};
export default Uinam;
