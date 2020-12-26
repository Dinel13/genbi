import React from "react";

const Note = () => {
  return (
    <div className="alert alert-danger mb-5 col-lg-9 mx-auto" role="alert">
      <h4 className="alert-heading">Perhatian!</h4>
      <p>
        Pastikan anda mengisi semuah data dengan benar. Data yang anda masukkan
        akan menentukan peluang diterima beasiswa ini. pastikan juga untuk
        mengisi data yang dapat pertangungjawabkan di tahap selanjutnya. Jika
        terdapat kendala dalam mengisi form pendaftaran, hubungi admin@genbi.com
        atau 0888888888
      </p>
      <hr />
      <p className="mb-0">
        Data yang anda masukkan kami jaga kerahasianya. Semua daata yang anda
        masukkan hanya kami gunakan untuk keperluan seleksi beasiswa dan tidak
        akan kami berikan ke pihak luar
      </p>
    </div>
  );
};
export default Note;
