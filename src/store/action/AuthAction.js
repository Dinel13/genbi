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
  /*
  return (dispatch) => {
    const graphqlQuery = {
      query: `
      mutation {
        createUser(userInput: {email: "${email}", name:"${name}", password:"${password}"}) {
          _id
          email
        }
      }
    `,
    };
    fetch("http://localhost:8080/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(graphqlQuery),
    })
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        if (resData.errors && resData.errors[0].status === 422) {
          throw new Error(
            "Validation failed. Make sure the email address isn't used yet!"
          );
        }
        if (resData.errors) {
          throw new Error("User creation failed!");
        }
        console.log(resData);
        dispatch(AuthWithData(resData._id, resData.name));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  */
  return async (dispatch) => {
    const graphqlQuery = {
      query: `
        mutation {
          createUser(userInput: {email: "${email}", name:"${name}", password:"${password}"}) {
            _id
            email
          }
        }
      `,
    };
    try {
      const response = await fetch("http://localhost:8080/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(graphqlQuery),
      });
      const resData = await response.json();
      if (resData.errors && resData.errors[0].status === 422) {
        throw new Error(
          "Validation failed. Make sure the email address isn't used yet!"
        );
      }
      console.log(resData);
      // dispatch(AuthWithData(resData.userId, resData.token));
    } catch (err) {
      console.log(err);
    }
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
