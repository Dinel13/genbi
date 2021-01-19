import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Pendaftar from "../pendaftar";
import { Unhas } from "../../../Data/WawancaraUnhas";
import Card from "../../../components/admin/LolosWawancara/Card";
import image from "../../../images/sala.jpg";

const Unm = (props) => {
  let { path, url } = useRouteMatch();
  const { setActive} = props;
  useEffect(() => {
    setActive("wawUnm");
  }, [setActive]);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap card-header m  flex-md-nowrap align-items-center py-3  ps-3 pe-4 border-bottom shadow-sm">
        <h1 className="h2">Lolos Wawancara Universitas Negeri Makassar</h1>
        <div className="btn-toolbar mb-2 mb-md-0" id="ggggg">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Jumlah pendaftar <span className="badge bg-primary">100</span>
            </button>
            {/* <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => props.export(props.id,props.header)}> 
Export
</button>*/}
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path={path}>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 m-2  row-cols-lg-3 g-3">
            {Unhas.map((unhas) => (
              <Card Unhas={unhas} key={unhas.id} url={url} image={image} />
            ))}
          </div>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Pendaftar wawancara={true} />
        </Route>
      </Switch>
    </>
  );
};
export default Unm;
