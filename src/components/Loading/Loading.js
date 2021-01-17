import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div className="modalll">
        <div className="boxx">
        <div className="d-flex pt-5">
          <h1 className='fw-bold text-white pe-2'>Loading</h1>
            <div
              className="spinner-grow text-light"
              style={{ width: "2.5rem", height: "2.5rem" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
            <div
              className="spinner-grow text-primary"
              style={{ width: "2.5rem", height: "2.5rem" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
            <div
              className="spinner-grow text-light"
              style={{ width: "2.5rem", height: "2.5rem" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Loading;
