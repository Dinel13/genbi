export const AUTH_WITH_DATA = "AUTH_WITH_DATA";
export const LOGOUT = "LOGOUT";

export const AuthWithData = (userId, token) => {
  return (dispatch) => {
    dispatch({ type: AUTH_WITH_DATA, token: token, userId: userId });
  };
};

export const Signup = (email, password, name) => {
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
  };
};

export const Logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  return { type: LOGOUT };
};
