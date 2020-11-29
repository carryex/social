import { userAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
const TOOGLE_IS_FOLLOWING_PROGRESS = "TOOGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  pageTitle: "Users",
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case TOOGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOOGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};
//Create actions
export const followSuccess = (userId) => ({
  type: FOLLOW,
  userId: userId,
});
export const unfollowSuccess = (userId) => ({
  type: UNFOLLOW,
  userId: userId,
});
export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const toogleIsFetching = (isFetching) => ({
  type: TOOGLE_IS_FETCHING,
  isFetching,
});
export const toogleFollowingInProgress = (isFetching, userId) => ({
  type: TOOGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

//Thunks
export const requestUsers = (page, pageSize) => {
  return (dispach) => {
    dispach(toogleIsFetching(true));
    dispach(setCurrentPage(page));
    userAPI.getUsers(page, pageSize).then((response) => {
      dispach(toogleIsFetching(false));
      dispach(setUsers(response.items));
      dispach(setTotalUsersCount(response.totalCount));
    });
  };
};

export const follow = (userId) => {
  return (dispach) => {
    dispach(toogleFollowingInProgress(true, userId));
    userAPI.follow(userId).then((response) => {
      if (response.resultCode === 0) {
        dispach(followSuccess(userId));
      }
      dispach(toogleFollowingInProgress(false, userId));
    });
  };
};

export const unfollow = (userId) => {
  return (dispach) => {
    dispach(toogleFollowingInProgress(true, userId));
    userAPI.unfollow(userId).then((response) => {
      if (response.resultCode === 0) {
        dispach(unfollowSuccess(userId));
      }
      dispach(toogleFollowingInProgress(false, userId));
    });
  };
};

export default usersReducer;
