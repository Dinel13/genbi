import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="col">
      <div className="card shadow">
        <div className="card-header">
          <h6 className="card-title">{props.data.nama}</h6>
        </div>
        <div className="card-body row">
          <div className="col-lg-4">
            <img
              src={props.image}
              className="figure-img img-fluid rounded"
              alt={props.data.nama}
            />
          </div>
          <div className="col-md-8">
            <p className="m-0">Fakultas {props.data.fakultas}</p>
            <p className="m-0">{props.data.prodi}</p>
            <p className="card-text">
              <small className="text-muted">{props.data.ipk}</small>
            </p>
            <Link
              to={`${props.url}/${props.data.id}`}
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
