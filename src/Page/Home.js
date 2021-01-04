import React, { useState } from "react";
import Modal from "../components/Modal/Modal";
import Pemisah from "../components/Pemisah";

const Home = (props) => {
  const [modall, setModall] = useState(false);

  return (
    <div className="container main">
      <Pemisah />
      <button
        onClick={() => {
          setModall(true);
        }}
      >
        Open Mo
      </button>
      {modall && <Modal modall={modall} setModall={setModall} />}
    </div>
  );
};
export default Home;
