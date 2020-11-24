const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const SET_AUTH = "SET_AUTH";
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
        ...action.data,
      };
    case SET_AUTH:
      return {
        ...state,
        isAuth: action.isAuth,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => ({
  type: SET_AUTH_USER_DATA,
  data: { userId, email, login },
});

export const setAuth = (isAuth) => ({
  type: SET_AUTH,
  isAuth,
});
export default authReducer;
