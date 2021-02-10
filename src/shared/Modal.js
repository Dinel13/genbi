import React from "react";

const Modal = (props) => {
  return (
    <div className="container">
      <div className={!props.notFull && "main"}>
        <div className="d-flex justify-content-center ">
          <div className="border shadow mt-5 rounded-3 bg-white col-sm-11 col-md-9 col-lg-7 col-xl-5">
            <div className="text-start">
              <h4 className=" p-4 bg-dark card-header text-white">
                <strong>{props.header}</strong>
              </h4>
              <p className="p-4 text-center">{props.body}</p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
