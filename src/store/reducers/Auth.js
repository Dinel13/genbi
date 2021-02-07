import {
  AUTH_WITH_DATA,
  AUTH_ADMIN_WITH_DATA,
  LOGOUT,
} from "../action/AuthAction";

const initState = {
  token: null,
  userId: null,
  userName: null,
  userEmail: null,
  admin: null,
  adminId: null,
  adminName: null,
};

const Auth = (state = initState, action) => {
  switch (action.type) {
    case AUTH_WITH_DATA: {
      return {
        token: action.token,
        userId: action.userId,
        userName: action.name,
        userEmail: action.email,
      };
    }
    case AUTH_ADMIN_WITH_DATA: {
      return {
        admin: action.admin,
        adminId: action.adminId,
        adminName: action.name,
      };
    }
    case LOGOUT:
      return initState;

    default:
      return state;
  }
};

export default Auth;
