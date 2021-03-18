import React from "react";
import { useLocation } from "react-router-dom";

const Defult = () => {
  let location = useLocation();

  return (
    <div className="container main">
      <br/>
      <br/>
      <div className="text-center mt-6">
        <div className="alert alert-danger">
          <h3>
            Alamat <code>{location.pathname}</code> Tidak tersedia lagi
          </h3>
          <p>test</p>
          <hr/>
          <h5 className="text-muted">
            Periksa kembali alamat url yang anda tuju
          </h5>
        </div>
      </div>
    </div>
  );
};
export default Defult;
