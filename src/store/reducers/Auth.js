import { AUTH_WITH_DATA, LOGOUT } from "../action/AuthAction";

const initState = {
  token: null,
  userId: null,
};

const Auth = (state = initState, action) => {
  switch (action.type) {
    case AUTH_WITH_DATA: {
      return {
        token: action.token,
        userId: action.userId,
      };
    }
    case LOGOUT:
      return initState;

    default:
      return state;
  }
};

export default Auth
