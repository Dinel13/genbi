import {
  AUTH_WITH_DATA,
  AUTH_ADMIN_WITH_DATA,
  LOGOUT,
} from "../action/AuthAction";

const initState = {
  token: null,
  userId: null,
  admin: null,
  adminId: null,
};

const Auth = (state = initState, action) => {
  switch (action.type) {
    case AUTH_WITH_DATA: {
      return {
        token: action.token,
        userId: action.userId,
      };
    }
    case AUTH_ADMIN_WITH_DATA: {
      return {
        admin: action.admin,
        adminId: action.adminId,
      };
    }
    case LOGOUT:
      return initState;

    default:
      return state;
  }
};

export default Auth;
