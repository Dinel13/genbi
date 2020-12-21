import React from "react";

export default function Login() {
  return (
    <div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Login
            </h5>
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
                  type="email"
                  className="form-control form-control-sm"
                  placeholder="Alamat Email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control form-control-sm"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="submit"
                  className="btn btn-success btn-block btn-sm"
                  value="Masuk Sekarang"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
