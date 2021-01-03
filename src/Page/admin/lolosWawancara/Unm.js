import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Pendaftar from "../pendaftar";
import { Unhas } from "../../../Data/WawancaraUnhas";
import Card from "../../../components/admin/LolosWawancara/Card";
import image from "../../../images/sala.jpg"

const Unm = (props) => {
  let { path , url} = useRouteMatch();
  const { setActive, setTitle } = props;
  useEffect(() => {
    setActive("wawUnm");
    setTitle(["Lolos Wawancara Universitas Negeri Makassar"]);
  },[setActive, setTitle]);

  return (
    <Switch>
      <Route exact path={path}>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 m-2  row-cols-lg-3 g-3">
          {Unhas.map((unhas) => (
            <Card Unhas={unhas} key={unhas.id} url={url} image={image} />
          ))}
        </div>
      </Route>
      <Route path={`${path}/:topicId`}>
        <Pendaftar wawancara={true}  />
      </Route>
    </Switch>
  );
};
export default Unm;
