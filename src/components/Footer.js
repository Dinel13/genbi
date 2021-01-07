import React from "react";

const Footer = () => {
  return (
    <footer className="container-fluid my-50 text-white bg-dark">
      <div className="row">
        <div className="col-md-6">
          <p className="mb-1">
            Album example is &copy; Bootstrap, but please download and customize
            it for yourself!
          </p>
        </div>
        <div className="col-md-6">
          <ul>
            <li>dasd</li>
            <li>dasd</li>
            <li>dasd</li>
          </ul>
        </div>
      </div>
      <section className="w3l-footer-29-main py-5">
        <div className="footer-29 py-lg-4 py-md-3">
          <div className="container">
            <div className="d-grid grid-col-4 footer-top-29">
              <div className="footer-list-29 footer-1">
                <h6 className="footer-title-29">Kontak Kami</h6>
                <ul>
                  <li>
                    <p>
                      <span className="fa fa-map-marker"></span>Jl. Perintis
                      Kemerdekaan No.KM.10, Tamalanrea Indah, Kec. Tamalanrea,
                      Kota Makassar, Sulawesi Selatan 90245
                    </p>
                  </li>
                  <li>
                    <a
                      href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=genbi.unhas@gmail.com&tf=1"
                      className="mail"
                    >
                      <span className="fa fa-envelope-open-o"></span>
                      genbi.unhas@gmail.com
                    </a>
                  </li>
                </ul>
                <div className="main-social-footer-29">
                  <a
                    href="https://instagram.com/genbiunhas?igshid=i72e8zk34eez"
                    className="facebook"
                  >
                    <span className="fa fa-instagram"></span>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCDMTFdDDMRMB3DAFXSm7vUw"
                    className="google-plus"
                  >
                    <span className="fa fa-youtube"></span>
                  </a>
                  <a
                    href="https://open.spotify.com/show/39S9gG8377xN6csoF3QY1c?si=sqM8fQwpQsS7EjKN-MWBsg"
                    className="twitter"
                  >
                    <span className="fa fa-spotify"></span>
                  </a>
                </div>
              </div>
              <div className="footer-list-29 footer-2">
                <h6 className="footer-title-29">Telusuran Cepat</h6>
                <div className="row">
                  <div className="col-md-6">
                    <ul>
                      <li>
                        <a href="/">Beranda</a>
                      </li>
                      <li>
                        <a href="/about">Tentang</a>
                      </li>
                      <li>
                        <a href="/scholarship-info">Info Beasiswa</a>
                      </li>
                      <li>
                        <a href="/core-team">Pengurus</a>
                      </li>
                      <li>
                        <a href="/blog/all">Blog</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul>
                      <li>
                        <a href="/gallery">Foto</a>
                      </li>
                      <li>
                        <a href="/video">Video</a>
                      </li>
                      <li>
                        <a href="/agenda">Agenda</a>
                      </li>
                      <li>
                        <a href="/contact-us">Kontak</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="d-grid grid-col-2 bottom-copies">
              <p className="copy-footer-29">
                © 2020 GenBI UNHAS. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
