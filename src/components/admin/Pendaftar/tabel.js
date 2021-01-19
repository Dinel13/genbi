import React from "react";
import { Link } from "react-router-dom";

const Tabel = (props) => {
  /* to print pdf
  const { setElementId, setPdfHeader } = props;

  React.useEffect(() => {
    setElementId("print");
    setPdfHeader("test - salahuddin");
  }, [setElementId, setPdfHeader]); 
  */

  return (
    <div className="table-responsive" id="print">
      <table className="table table-ligh table-hover ">
        <thead>
          <tr className="table-info">
            <th className="ps-3" scope="col">
              No
            </th>
            <th scope="col">Nama</th>
            <th scope="col">NIM</th>
            <th scope="col">Fakultas</th>
            <th scope="col">Prodi</th>
            <th scope="col">Ipk</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {props.Unhas.map((un, index) => (
            <tr key={un.id}>
              <th className="ps-3" scope="row">
                {index + 1}
              </th>
              <td className="text-truncate" style={{ maxWidth: "120px" }}>
                {un.nama}
              </td>
              <td className="text-truncate" style={{ maxWidth: "100px" }}>
                {un.nim}
              </td>
              <td className="text-truncate" style={{ maxWidth: "120px" }}>
                {un.fakultas}
              </td>
              <td className="text-truncate" style={{ maxWidth: "110px" }}>
                {un.prodi}
              </td>
              <td className="text-truncate" style={{ maxWidth: "100px" }}>
                {un.ipk}
              </td>
              <td>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <Link
                    to={`${props.url}/${un.id}`}
                    type="button"
                    className="btn btn-sm btn-outline-success"
                  >
                    Detail
                  </Link>
                  <button
                    type="button"
                    className="btn  btn-sm btn-outline-secondary"
                  >
                    Terima
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabel;
