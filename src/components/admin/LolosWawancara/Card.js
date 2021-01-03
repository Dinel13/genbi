import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="col">
      <div className="card shadow">
        <div className="card-header">
          <h6 className="card-title">{props.Unhas.nama}</h6>
        </div>
        <div className="card-body row">
          <div className="col-lg-4">
            <img
              src={props.image}
              className="figure-img img-fluid rounded"
              alt={props.Unhas.nama}
            />
          </div>
          <div className="col-md-8">
            <p className="m-0">Fakultas {props.Unhas.fakultas}</p>
            <p className="m-0">{props.Unhas.prodi}</p>
            <p className="card-text">
              <small className="text-muted">{props.Unhas.ipk}</small>
            </p>
            <Link
              to={`${props.url}/${props.Unhas.id}`}
              type="button"
              className="btn btn-sm w-100 btn-primary"
            >
              Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
