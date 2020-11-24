import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "586fda55-19b8-4640-9136-1be85bd84f3b",
  },
});

export const authMe = () => {
  return instance.get("auth/me").then((response) => response.data);
};

export const signIn = (email, password) => {
  return instance
    .post("auth/login", {
      email: email,
      password: password,
    })
    .then((response) => {
      console.log(response);
    });
};

export const getProfile = (userId) => {
  return instance.get(`profile/` + userId).then((response) => response.data);
};

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(userId) {
    return instance
      .post(`follow/${userId}`, {})
      .then((response) => response.data);
  },

  unfollow(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
};
