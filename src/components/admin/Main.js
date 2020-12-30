import React from "react";

const Main = (props) => {
  return (
    <main className="col-12 col-md-9 col-lg-10 p-0 ">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 px-4 border-bottom shadow">
        <h1 className="h2">Dashboard</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Share
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Export
            </button>
          </div>
        </div>
      </div>
      {props.children}

      <canvas
        className="my-4 w-100"
        id="myChart"
        width="900"
        height="380"
      ></canvas>
    </main>
  );
};

export default Main;
