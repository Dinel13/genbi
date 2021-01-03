import React from "react";

const Main = (props) => {
  return (
    <main className="col-md-9 col-lg-10 p-0 ">
      <div className="d-flex justify-content-between flex-wrap card-header m  flex-md-nowrap align-items-center py-3  ps-3 pe-4 border-bottom shadow-sm">
        <h1 className="h2">{`${props.title ? props.title[0] : "Dasbord"}`}</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Pendaftar{" "}
              <span className="badge bg-primary">{`${
                props.title[1] ? props.title[1] : "0"
              }`}</span>
              <span className="visually-hidden">unread messages</span>
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Export
            </button>
          </div>
        </div>
      </div>
      {props.children}
    </main>
  );
};

export default Main;
