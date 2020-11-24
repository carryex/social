import { combineReducers, createStore } from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./auth-reducer";
import navigationReducer from "./navigationReducer";

let reducers = combineReducers({
  dialogsPage: dialogReducer,
  profilePage: profileReducer,
  sideBar: navigationReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
