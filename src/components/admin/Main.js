import React from "react";

const Main = (props) => {
  return (
    <main className="col-md-9 col-lg-10 p-0">
      {props.children}
    </main>
  );
};

export default Main;
