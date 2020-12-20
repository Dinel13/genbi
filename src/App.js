import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Home from "./Page/Home";
import Pendaftaran from "./Page/Pendaftaran";

const App = () => {
  return (
    <>
      <Navbar />
<br/>
<br/>
      <SignUp />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/pendaftaran" exact>
          <Pendaftaran />
        </Route>
      </Switch>
    </>
  );
};

export default App;
