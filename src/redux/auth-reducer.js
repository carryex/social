import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const getAuthUserData = () => (dispach) => {
  return authAPI.me().then((response) => {
    if (response.resultCode === 0) {
      let { id, email, login } = response.data;
      dispach(setAuthUserData(id, email, login, true));
    }
  });
};

export const login = (email, password, rememberMe) => (dispach) => {
  return authAPI.login(email, password, rememberMe).then((response) => {
    if (response.resultCode === 0) {
      dispach(getAuthUserData());
    } else {
      let message =
        response.messages.length > 0 ? response.messages[0] : "Some error";
      dispach(stopSubmit("login", { _error: message }));
    }
  });
};

export const logout = () => (dispach) => {
  return authAPI.logout().then((response) => {
    if (response.resultCode === 0) {
      dispach(setAuthUserData(null, null, null, false));
    }
  });
};
export default authReducer;
