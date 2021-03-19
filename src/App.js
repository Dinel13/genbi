import React, { useEffect , Suspense} from "react";
import { Switch, Route , Redirect} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";

import Navbar from "./components/Navbar";
//import SignUp from "./Page/SignUp";
//import Login from "./Page/Login";
//import LoginAdmin from "./Page/admin/Login";
//import Home from "./Page/Home";
//import Pendaftaran from "./Page/Pendaftaran";
import Footer from "./components/Footer";
//import Admin from "./Page/Admin";
//import Defult from "./Page/404";
import { AuthAdminWithData, AuthWithData } from "./store/action/AuthAction";
import Loading from "./components/Loading/Loading";

//lazy load
const SignUp = React.lazy(() => import("./Page/SignUp"))
const Login = React.lazy(() => import("./Page/Login"))
const LoginAdmin = React.lazy(() => import("./Page/admin/Login"))
const Home = React.lazy(() => import("./Page/Home"))
const Pendaftaran = React.lazy(() => import("./Page/Pendaftaran"))
const Admin = React.lazy(() => import("./Page/Admin"))
const Defult = React.lazy(() => import("./Page/404"))

const App = () => {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.Auth.admin);
  const token = useSelector((state) => state.Auth.token);

  //to check if thare is a token or admin save in local storage
  //if there then login
  useEffect(() => {
    const storedDataUser = JSON.parse(localStorage.getItem("userData"));
    const storedDataAdmin = JSON.parse(localStorage.getItem("adminData"));
    if (storedDataUser && storedDataUser.token) {
      dispatch(AuthWithData(storedDataUser.userId, storedDataUser.token));
    }
    if (storedDataAdmin && storedDataAdmin.admin) {
      dispatch(
        AuthAdminWithData(storedDataAdmin.adminId, storedDataAdmin.admin)
      );
    }
  }, [dispatch]);

  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/pendaftaran" exact>
          <Pendaftaran />
        </Route>
        <Route path="/signup" exact>
          <Redirect to="/pendaftaran" />
        </Route>
        <Route path="/login" exact>
          <Redirect to="/pendaftaran" />
        </Route>
        <Route path="*">
          <Defult />
        </Route>
      </Switch>
    );
  } else if (admin) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/login-admin" exact>
          <Redirect to="/admin"/>
        </Route>
        <Route path="*">
          <Defult />
        </Route>
      </Switch>
    );
  } else {
    routes = (
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
        <Route path="/login-admin" exact>
          <LoginAdmin />
        </Route>
        <Route path="/pendaftaran" exact>
          <Login alert />
        </Route>
        <Route path="*">
          <Defult />
        </Route>
      </Switch>
    );
  }
  return (
    <>
      <Navbar />
      <main> <Suspense fallback={<Loading />} >{routes}</Suspense></main>
      <Footer />
    </>
  );
};

export default App;
