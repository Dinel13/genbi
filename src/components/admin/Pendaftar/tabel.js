import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Tabel = (props) => {
  const admin = useSelector((state) => state.Auth.admin);
  const adminId = useSelector((state) => state.Auth.adminId);
  const [data, setData] = React.useState(props.data);
  /* to print pdf
  const { setElementId, setPdfHeader } = props;

  React.useEffect(() => {
    setElementId("print");
    setPdfHeader("test - salahuddin");
  }, [setElementId, setPdfHeader]); 
  */
  // to handel terima atau batal the pendaftar
  const lolosBerkasHandler = (pendaftarId, terima) => {
    fetch("http://localhost:8080/graphql", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + admin,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` 
          mutattion {
            lolosBerkas(pendaftarAndAdminInput: {pendaftarId: "${pendaftarId}",
            adminId : "${adminId}", terima : "${terima}"}) {
              nama
            }
          }
        `,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.errors) {
          throw data.errors[0].message;
        }
        //map, filter, foreach
        const newData = data.map((item) => {
          return item.id === data.id.toString() && data.data.pendaftar;
        });
        setData(newData);
      })
      .catch((error) => {});
  };

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
          {data.map((pendaftar, index) => (
            <tr key={pendaftar.id}>
              <th className="ps-3" scope="row">
                {index + 1}
              </th>
              <td className="text-truncate" style={{ maxWidth: "120px" }}>
                {pendaftar.nama}
              </td>
              <td className="text-truncate" style={{ maxWidth: "100px" }}>
                {pendaftar.nim}
              </td>
              <td className="text-truncate" style={{ maxWidth: "120px" }}>
                {pendaftar.fakultas}
              </td>
              <td className="text-truncate" style={{ maxWidth: "110px" }}>
                {pendaftar.prodi}
              </td>
              <td className="text-truncate" style={{ maxWidth: "100px" }}>
                {pendaftar.ipk}
              </td>
              <td>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <Link
                    to={`${props.url}/${pendaftar.id.toString()}`}
                    type="button"
                    className="btn btn-sm btn-outline-primary"
                  >
                    Detail
                  </Link>
                  {pendaftar.lolosBerkas ? (
                    <button
                      type="button"
                      className="btn btn-sm btn-danger"
                      onClick={() => lolosBerkasHandler(pendaftar.id.toString(), false)}
                    >
                      Batalkan
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn  btn-sm btn-outline-success"
                      onClick={() => lolosBerkasHandler(pendaftar.id.toString(), true)}
                    >
                      Terima
                    </button>
                  )}
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
