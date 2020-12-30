import React from "react";
import { useLocation } from "react-router-dom";

const Defult = () => {
  let location = useLocation();

  return (
    <div className="container main">
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
};
export default Defult;
