import React, { useState, useEffect } from "react";
import "./modal.css";

const Modal = (props) => {
  const [modal, setModal] = useState(false);
  const {setModall} = props

  //to get the id of modal
  useEffect(() => {
    setModal(document.getElementById("myModall"));
  }, [setModal]);

  //to hide the modal when clicked outside the modal
  useEffect(() => {
    window.onclick = function (event) {
      if (event.target == modal) {
        setModall(false);
      }
    };
  }, [modal,setModall]);

  return (
    <div id="myModall" className="modalll">
      <div className="modal-dialog">
        <div className="modal-content shadow-lg">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {props.header}
            </h5>
            <button
              className="btn-close"
              onClick={() => {
                props.setModall(false);
              }}
            ></button>
          </div>
          <div className="modal-body">...</div>
          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              onClick={() => {
                props.setModall(false);
              }}
            >
              Batal
            </button>
            <button type="button" className="btn btn-primary">
              Yakin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
