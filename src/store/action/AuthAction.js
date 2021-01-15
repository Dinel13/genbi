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
  return async (dispatch) => {
    const graphqlQuery = {
      query: `
        query {
          login(email: "${email}",password:"${password}") {
            token
            userId
            name
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
    dispatch(AuthWithData(resData.data.login.userId, resData.data.login.token));
    } catch (err) {
      console.log(err);
    }
  };
};

export const LoginAdmin = (email, password) => {
  return (dispatch) => {
    console.log(email, password);
    dispatch(AuthAdminWithData(email, password));
  };
};

export const Logout = () => {
  localStorage.removeItem("userData");
  localStorage.removeItem("adminData");
  return { type: LOGOUT };
};
