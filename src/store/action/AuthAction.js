export const AUTH_WITH_DATA = "AUTH_WITH_DATA";
export const AUTH_ADMIN_WITH_DATA = "AUTH_ADMIN_WITH_DATA";
export const LOGOUT = "LOGOUT";

export const AuthWithData = (userId, token, name, email) => {
  return (dispatch) => {
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: userId,
        token: token,
        userName: name,
        userEmail: email,
      })
    );
    dispatch({
      type: AUTH_WITH_DATA,
      token: token,
      userId: userId,
      userName: name,
      userEmail: email,
    });
  };
};

export const AuthAdminWithData = (adminId, admin, name) => {
  return (dispatch) => {
    localStorage.setItem(
      "adminData",
      JSON.stringify({
        adminId: adminId,
        admin: admin,
        adminName: name,
      })
    );
    dispatch({
      type: AUTH_ADMIN_WITH_DATA,
      admin: admin,
      adminId: adminId,
      adminName: name,
    });
  };
};

export const Signup = (email, password, name) => {
  return async (dispatch) => {
    const graphqlQuery = {
      query: `
        mutation {
          createAdmin(userInput: {email: "${email}", name:"${name}", password:"${password}"}) {
            _id
            name
            email
            token
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
      dispatch(
        AuthWithData(
          resData.data.createUser._id,
          resData.data.createUser.token,
          resData.data.login.name,
          resData.data.login.email
        )
      );
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
      if (resData.errors) {
        throw new Error(resData.errors[0].message);
      }
      dispatch(
        AuthWithData(
          resData.data.login.userId,
          resData.data.login.token,
          resData.data.login.name,
          resData.data.login.email
        )
      );
    } catch (err) {
      console.log(err);
    }
  };
};

//for admin
export const SignupAdmin = (email, password, name) => {
  return async (dispatch) => {
    const graphqlQuery = {
      query: `
        mutation {
          createAdmin(adminInput: {email: "${email}", name:"${name}", password:"${password}"}) {
            _id
            name
            admin
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
      if (!resData.ok) {
        console.log(resData);
      }
      if (resData.errors && resData.errors[0].status === 422) {
        throw new Error(
          "Validation failed. Make sure the email address isn't used yet!"
        );
      }
      console.log(resData);
      dispatch(
        AuthAdminWithData(
          resData.data.createAdmin._id,
          resData.data.createAdmin.admin,
          resData.data.loginAdmin.name
        )
      );
    } catch (err) {
      console.log(err);
    }
  };
};

export const LoginAdmin = (email, password) => {
  return async (dispatch) => {
    const graphqlQuery = {
      query: `
        query {
          loginAdmin(email: "${email}",password:"${password}") {
            admin
            adminId
            name
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
      if (!resData.ok) {
        console.log("bad");
      }
      if (resData.errors) {
        throw new Error(resData.errors[0].message);
      }
      console.log(resData);
      dispatch(
        AuthAdminWithData(
          resData.data.loginAdmin.adminId,
          resData.data.loginAdmin.admin,
          resData.data.loginAdmin.name
        )
      );
    } catch (err) {
      console.log(err);
    }
  };
};

export const Logout = () => {
  localStorage.removeItem("userData");
  localStorage.removeItem("adminData");
  return { type: LOGOUT };
};
