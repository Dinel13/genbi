import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import SignUp from "./Page/SignUp";
import Login from "./Page/Login";
import Home from "./Page/Home";
import Pendaftaran from "./Page/Pendaftaran";
import Footer from "./components/Footer";
import Admin from "./Page/Admin";
import Defult from "./Page/404";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/pendaftaran" exact>
          <Pendaftaran />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="*">
          <Defult />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
