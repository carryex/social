import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "586fda55-19b8-4640-9136-1be85bd84f3b",
  },
});

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
  authMe() {
    console.warn("Obsolete method. Please use authAPI object.");
    return authAPI.me();
  },
  getProfile(userId) {
    console.warn("Obsolete method. Please use profileAPI object.");
    return profileAPI.getProfile(userId);
  },
};
export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId).then((response) => response.data);
  },
  getStatus(userId) {
    return instance
      .get(`profile/status/` + userId)
      .then((response) => response.data);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status: status });
  },
};

export const authAPI = {
  me() {
    return instance.get("auth/me").then((response) => response.data);
  },
  login(email, password, rememberMe = false) {
    return instance
      .post("/auth/login", {
        email,
        password,
        rememberMe,
      })
      .then((response) => response.data);
  },
  logout(email, password, rememberMe = false) {
    return instance.delete("/auth/login").then((response) => response.data);
  },
};
