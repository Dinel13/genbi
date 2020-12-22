import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./Page/Home";
import UseForm from "./Page/useForm";
import Pendaftaran from "./Page/Pendaftaran";

const App = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <Switch>
        <Route path="/" exact>
          <Home />
          <UseForm />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/pendaftaran" exact>
          <Pendaftaran />
        </Route>
      </Switch>
    </>
  );
};

export default App;
