import React from "react";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  const { url, active } = props;
  return (
    <nav className="col-12 col-md-3 col-lg-2 bg-light border-end shadow">
      <div className="row">
        <h5 className="col-12 card-title px-3 pt-3 pb-2 mb-0 card-header">
          Pendaftar
        </h5>
        <div className="list-group list-group-flush px-0 pb-4">
          <div className="dropdown">
            <button
              className={`dropdown-toggle list-group-item list-group-item-action ${
                active === "dafUnh" && "active"
              }  `}
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Universitas Hasanuddin
            </button>
            <ul
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <Link
                  className="dropdown-item"
                  to={`${url}/pendaftar-unhas-ungulan`}
                >
                  Ungulan
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to={`${url}/pendaftar-unhas-reguler`}
                >
                  Reguler
                </Link>
              </li>
            </ul>
          </div>

          <Link
            className={` list-group-item list-group-item-action ${
              active === "dafUnm" && "active"
            }  `}
            to={`${url}/pendaftar-unm`}
          >
            Universitas Negeri Makassar
          </Link>
          <Link
            className={` list-group-item list-group-item-action ${
              active === "dafUinam" && "active"
            }  `}
            to={`${url}/pendaftar-uinam`}
          >
            Uin Alauddin Makassar
          </Link>
        </div>
        <h5 className="col-12 card-title px-3 pt-3 pb-2 border-top mb-0 card-header">
          Lolos berkas
        </h5>
        <div className="list-group list-group-flush px-0 pb-4">
          <div className="dropdown">
            <button
              className={`dropdown-toggle list-group-item list-group-item-action ${
                active === "berUnh" && "active"
              }  `}
              id="dropdownMenuBerkas"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Universitas Hasanuddin
            </button>
            <ul
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuBerkas"
            >
              <li>
                <Link
                  className="dropdown-item"
                  to={`${url}/lolos-berkas-unhas-ungulan`}
                >
                  Ungulan
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to={`${url}/lolos-berkas-unhas-reguler`}
                >
                  Reguler
                </Link>
              </li>
            </ul>
          </div>
          <Link
            className={`list-group-item list-group-item-action ${
              active === "berUnm" && "active"
            }  `}
            to={`${url}/lolos-berkas-unm`}
          >
            Universitas Negeri Makassar
          </Link>
          <Link
            className={`list-group-item list-group-item-action ${
              active === "berUinam" && "active"
            }  `}
            to={`${url}/lolos-berkas-uinam`}
          >
            Uin Alauddin Makassar
          </Link>
        </div>
        <h5 className="col-12 card-title px-3 pt-3 pb-2 border-top mb-0 card-header">
          Lolos wawancara
        </h5>
        <div className="list-group list-group-flush px-0 pb-4">
          <div className="dropdown">
            <button
              className={`dropdown-toggle list-group-item list-group-item-action ${
                active === "wawUnh" && "active"
              }  `}
              id="dropdownMenuWawancara"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Universitas Hasanuddin
            </button>
            <ul
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuWawancara"
            >
              <li>
                <Link
                  className="dropdown-item"
                  to={`${url}/lolos-wawancara-unhas-ungulan`}
                >
                  Ungulan
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to={`${url}/lolos-wawancara-unhas-reguler`}
                >
                  Reguler
                </Link>
              </li>
            </ul>
          </div>
          <Link
            className={`list-group-item list-group-item-action ${
              active === "wawUnm" && "active"
            }  `}
            to={`${url}/lolos-wawancara-unm`}
          >
            Universitas Negeri Makassar
          </Link>
          <Link
            className={`list-group-item list-group-item-action ${
              active === "wawUinam" && "active"
            }  `}
            to={`${url}/lolos-wawancara-uinam`}
          >
            Uin Alauddin Makassar
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
