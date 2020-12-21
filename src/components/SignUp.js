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
                  placeholder="Nama Lengkap"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control form-control-sm"
                  placeholder="Alamat email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control form-control-sm"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control form-control-sm"
                  placeholder="Ulangi Password"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="submit"
                  className="btn btn-success btn-block btn-sm"
                  value="Sign Up Sekarang"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
