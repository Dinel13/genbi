import React from "react";

export default function SignUp() {
  return (
    <div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Register Online
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="custom-divider"></div>
          <div className="modal-body">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur fugit
            </p>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control form-control-sm"
                  placeholder="Your Email ID"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control form-control-sm"
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Course Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="submit"
                  className="btn btn-success btn-block btn-sm"
                  value="Regsiter Online Now"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
