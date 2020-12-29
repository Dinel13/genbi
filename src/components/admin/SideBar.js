import React from "react";

const SideBar = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <h5 className="d-flex justify-content-start px-3 mb-1 text-bold">
          <span data-feather="home"></span>
          Pendaftar
        </h5>
        <ul className="nav flex-column ps-3">
          <li className="nav-item">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span data-feather="file"></span>
              Universitas Hasanuddin
            </a>
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <a class="dropdown-item" href="#">
                  Ungulan
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Reguler
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="shopping-cart"></span>
              Universitas Negeri Makassar
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="users"></span>
              Uin Alauddin Makassar
            </a>
          </li>
        </ul>
        <hr className="dropdown-divider" />
        <h5 className="d-flex justify-content-between align-items-center px-3 mt-3 mb-1 text-bold">
          Lolos Berkas
          <span data-feather="plus-circle"></span>
        </h5>
        <ul className="nav flex-column ps-3">
          <li className="nav-item">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span data-feather="file"></span>
              Universitas Hasanuddin
            </a>
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <a class="dropdown-item" href="#">
                  Ungulan
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Reguler
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="shopping-cart"></span>
              Universitas Negeri Makassar
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="users"></span>
              Uin Alauddin Makassar
            </a>
          </li>
        </ul>
        <hr className="dropdown-divider" />
        <h5 className="d-flex justify-content-between align-items-center px-3 mt-3 mb-1 text-bold">
          Lolos Wawancara
          <span data-feather="plus-circle"></span>
        </h5>
        <ul className="nav flex-column ps-3">
          <li className="nav-item">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span data-feather="file"></span>
              Universitas Hasanuddin
            </a>
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <a class="dropdown-item" href="#">
                  Ungulan
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Reguler
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="shopping-cart"></span>
              Universitas Negeri Makassar
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="users"></span>
              Uin Alauddin Makassar
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
