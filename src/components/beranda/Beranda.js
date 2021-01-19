import React from "react";
import "./beranda.css";
import satu from "../../images/satu.jpeg";
import dua from "../../images/dua.jpeg";
import tiga from "../../images/tiga.jpeg";
import empat from "../../images/empat.jpeg";
import sulsel from "../../images/sulsel.png";
import bi from "../../images/bi.png";

const Beranda = () => {
  return (
    <div>
      <div
        id="myCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={satu}
              style={{ filter: "brightness(45%)" }}
              className="d-block img-fluid"
              alt="genbi sulsel"
            />

            <div className="container">
              <div className="carousel-caption text-center">
                <h1 className="fw-bolder">Selamat Datang.</h1>
                <p className="text-center">
                  Website GenBI Sulsel adalah salah-satu media yang kami gunakan
                  untuk menyampaikan informasi dan mengembangkan kreatifitas.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={dua}
              style={{ filter: "brightness(45%)" }}
              className="d-block img-fluid"
              alt="genbi sulsel"
            />

            <div className="container">
              <div className="carousel-caption text-start">
                <img
                  src={bi}
                  className="img-fluid bi pb-3"
                  style={{}}
                  alt="bank indonesia"
                />
                <h1 className="fw-bold">Dibina oleh Bank Indonesia.</h1>
                <p>
                  GenBI Sulsel adalah komunitas penerima Beasiswa Bank Indonesia
                  yang dibimbing oleh Kantor Perwakilan Bank Indonesi Sulawesi
                  Selatan.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={tiga}
              style={{ filter: "brightness(45%)" }}
              className="d-block img-fluid"
              alt="genbi sulsel"
            />

            <div className="container">
              <div className="carousel-caption text-end">
                <h1 className="fw-bold">Energi Untuk Negeri</h1>
                <p>
                  GenBI Sulsel diharapkan menjadi semangat baru menuju indonesia
                  yang lebih baik melalui kegiatan yang diselenggarakan.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#" role="button">
                    Gallery kegiatan
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
      {/* genbi */}

      <div className="container-lg">
        <div className="row">
          <div className="col-lg-6 left-wthree-img text-right mt-0 ">
            <img
              src="https://genbiunhas.org/storage/web_assets/genbi.png"
              alt=""
              style={{ maxHeight: "530px" }}
              className="radius-image img-fluid"
            />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-5 align-self">
            <h2 className="fw-bold lh-base">Tentang Generasi Baru Indonesia</h2>
            <p className="lh-base textt text-muted">
              &emsp; &emsp;Generasi Baru Indonesia atau biasa disingkat GenBI
              merupakan sebuah komunitas penerima beasiswa dari Bank Indonesia
              yang berdiri sejak tanggal 11 November 2011. GenBI terdiri dari
              mahasiswa/i yang berasal dari perguruan tinggi negeri yang
              tersebar di seluruh Indonesia.{" "}
              <strong>"Energi untuk Negeri"</strong> adalah motto kebanggan
              genBI.
              <br />
              <br />
              &emsp;&emsp; GenBI sendiri adalah salah satu bentuk nyata dari
              Program Sosial Bank Indonesia (PSBI) dalam meningkatkan kualitas
              mahasiswa sebagai generasi penerus bangsa, yang dibimbing untuk
              berbagi energi untuk negeri melalui berbagai kegiatan yang
              dilibatkan masyarakat umum secara langsung. Agar dapat menjadi
              komunitas yang kreatif, berwawasan luas, bermanfaat dan peduli
              terhadap kondisi masyarakat.
            </p>
          </div>
        </div>
      </div>
      <hr />

      {/* peran dan tugas */}

      <div className="container-lg peran mt-4">
        <h1 className="fw-bold  text-center mt-5 mb-0">
          Peran Generasi Baru Indonesia
        </h1>
        <p className="text-center text-muted mb-5">
          Sebagai penerima beasiswa, GenBI memegang tiga peran khusus, yaitu:
        </p>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <svg
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777" />
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>

            <h2 className="fw-bolder mb-0 mt-3">Front Liners</h2>
            <p className="text-muted textt">
              Sebagai garda depan Bank Indonesia untuk membantu menyampaikan dan
              menyebarluaskan kebijakan Bank Indonesia.
            </p>
          </div>
          <div className="col-lg-4 col-md-6">
            <svg
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777" />
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>
            <h2 className="fw-bolder mb-0 mt-3">Agent of Change</h2>
            <p className="text-muted textt">
              Sebagai agen pembawa perubahan menuju masyarakat yang lebih baik.
            </p>
          </div>
          <div className="col-lg-4 col-md-6">
            <svg
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777" />
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>
            <h2 className="fw-bolder mb-0 mt-3">Future Leader</h2>
            <p className="text-muted textt">
              Sebagai wadah pengembangan diri sehingga mahasiswa mampu menjadi
              pemimpin di masa depan.
            </p>
          </div>
        </div>
      </div>

      <div
        className="container-fluid bg-l py-5"
        style={{ backgroundColor: "#e5e5e7" }}
      >
        {/* genbi sulsel */}
        <div className="container-lg mt-3">
          <div className="row">
            <div className="col-lg-6 text-center mt-0 ">
              <img
                src={sulsel}
                alt=""
                style={{ maxHeight: "630px" }}
                className="radius-image img-fluid"
              />
            </div>
            <div className="col-lg-6 pt-3 align-self">
              <h2 className="fw-bold lh-base">
                Tentang GenBI Sulawesi Selatan
              </h2>
              <p className="lh-base textt text-muted">
                &emsp; &emsp;GenBI Sulawesi Selatan atau biasa disingkat GenBI
                Sulsel merupakan sebuah komunitas penerima beasiswa dari Bank
                Indonesia di Wilayah Provinsi Sulawesi selatan. genBI Sulsel
                resmi terbentuk pada tanggal 23 Mei 2013 di Hotel Lamacca
                Makassar.
                <br />
                <br />
                &emsp; &emsp;GenBI Sulsel beranggotakan mahasiswa/i terpilih
                dari{" "}
                <strong>
                  Universitas Hasanuddin, Universitas Negeri Makassar atau UIN
                  Alauddin Makassar
                </strong>
                . Mereka yang terpilih berasal dari beragam disiplin ilmu dan
                keahlian, yang diyakini akan menjadi energi baru yang mampu
                memberikan kontribusi bagi bangsa dan negara.
              </p>
            </div>
          </div>
        </div>
        <hr className="featurette-divider" />

        {/* visi dan misi */}
        <div className="container-lg peran mt-4">
          <h1 className="fw-bold text-center mb-4">
            Visi dan Misi GenBI Sulsel
          </h1>
          <div className="row">
            <div className="col-lg-4 col-md-6 text-start">
              <h2>Visi</h2>
              <p className="text-muted ">
                Sebagai garda depan Bank Indonesia untuk membantu menyampaikan
                dan menyebarluaskan kebijakan Bank Indonesia.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 text-start">
              <h2>Misi</h2>
              <ol>
                <li className="text-muted">
                  Sebagai garda depan Bank Indonesia untuk membantu menyampaikan
                  dan menyebarluaskan kebijakan Bank Indonesia.
                </li>
                <li className="text-muted">
                  Sebagai garda depan Bank Indonesia untuk membantu menyampaikan
                  dan menyebarluaskan kebijakan Bank Indonesia.
                </li>
                <li className="text-muted">
                  Sebagai garda depan Bank Indonesia untuk membantu menyampaikan
                  dan menyebarluaskan kebijakan Bank Indonesia.
                </li>
              </ol>
            </div>
            <div className="col-lg-4 col-md-6 text-start">
              <h2>Misi</h2>
              <p className="text-muted ">
                Sebagai garda depan Bank Indonesia untuk membantu menyampaikan
                dan menyebarluaskan kebijakan Bank Indonesia.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row ">
          <h1 className="fw-bold text-center mb-5">Lima Deputi GenBI Sulsel</h1>
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              <span className="text-muted">Deputi </span>
              Pendidikan
            </h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5 order-md-1 text-center">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="300"
              height="300"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee" />
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                300x530
              </text>
            </svg>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              <span className="text-muted">Deputi </span>
              Linkungan Hidup
            </h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5 text-center">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="300"
              height="300"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee" />
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                500x500
              </text>
            </svg>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              <span className="text-muted">Deputi </span>
              Kesehatan
            </h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5 text-center order-md-1">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="300"
              height="300"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee" />
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                500x500
              </text>
            </svg>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              <span className="text-muted">Deputi </span>
              Kewirausahaan
            </h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5 text-center">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="300"
              height="300"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee" />
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                500x500
              </text>
            </svg>
          </div>
        </div>
        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              <span className="text-muted">Deputi </span>
              Public Relation and Multimedia
            </h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5 text-center order-md-1">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="300"
              height="300"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee" />
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                500x500
              </text>
            </svg>
          </div>
        </div>

        <hr className="featurette-divider" />
      </div>
    </div>
  );
};

export default Beranda;
