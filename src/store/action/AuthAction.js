export const AUTH_WITH_DATA = "AUTH_WITH_DATA";
export const AUTH_ADMIN_WITH_DATA = "AUTH_ADMIN_WITH_DATA";
export const LOGOUT = "LOGOUT";

export const AuthWithData = (userId, token) => {
  return (dispatch) => {
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: userId,
        token: token,
      })
    );
    dispatch({ type: AUTH_WITH_DATA, token: token, userId: userId });
  };
};

export const AuthAdminWithData = (adminId, admin) => {
  return (dispatch) => {
    localStorage.setItem(
      "adminData",
      JSON.stringify({
        adminId: adminId,
        admin: admin,
      })
    );
    dispatch({ type: AUTH_ADMIN_WITH_DATA, admin: admin, adminId: adminId });
  };
};

export const Signup = (email, password, name) => {
  if (email) {
    return console.log(email, password, name);
  }
  return async (dispatch) => {
    const response = await fetch("http://localhost:8080/auth/signup", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    });

    if (!response.ok) {
      const errResData = await response.json();
      const errorId = errResData.message;
      let pesan = "masalah terjadi di server";
      if (errorId) {
        pesan = errorId;
      }
      throw new Error(pesan);
    }

    const resData = await response.json();
    dispatch(AuthWithData(resData.userId, resData.token));
  };
};

export const Login = (email, password) => {
  return (dispatch) => {
    console.log(email, password);
    dispatch(AuthWithData("asdasd", "dasdas"));
  };
  /*
  return async (dispatch) => {
    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      const errResData = await response.json();
      const errorId = errResData.message;
      let pesan = "masalah terjadi di server";
      if (errorId) {
        pesan = errorId;
      }
      throw new Error(pesan);
    }

    const resData = await response.json();
    dispatch(AuthWithData(resData.userId, resData.token));
  }; */
};

export const LoginAdmin = (email, password) => {
  return (dispatch) => {
    console.log(email, password);
    dispatch(AuthAdminWithData(email, password));
  };
  /*
  return async (dispatch) => {
    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      const errResData = await response.json();
      const errorId = errResData.message;
      let pesan = "masalah terjadi di server";
      if (errorId) {
        pesan = errorId;
      }
      throw new Error(pesan);
    }

    const resData = await response.json();
    dispatch(AuthWithData(resData.userId, resData.token));
  }; */
};

export const Logout = () => {
  localStorage.removeItem("userData");
  localStorage.removeItem("adminData");
  return { type: LOGOUT };
};
