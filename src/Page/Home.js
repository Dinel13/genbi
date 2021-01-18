import React, { useState } from "react";
import print from "print-js";
import Modal from "../components/Modal/Modal";
import Pemisah from "../components/Pemisah";
import Beranda from "../components/beranda/Beranda";

const Home = () => {
  const [modall, setModall] = useState(false);

  return (
    <div> <Beranda /> </div>
      /* 
    <div className="container main" id="iii">
      <Pemisah />
      <div className="ggg">
        <button
          type="button"
          className="btn btn-primary m-5"
          onClick={() =>
            print({
              printable: "iii",
              type: "html",
              header: "PrintJS - Form Element Selection",
              style: ".btn-primary { color: red; } .ggg{color : black;} ",
            })
          }
        >
          print
        </button>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          setModall(true);
        }}
      >
        Open Mo
      </button>
      {modall && <Modal modall={modall} setModall={setModall} />} 
    </div>
    */

      
  );
};
export default Home;
