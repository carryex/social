import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "903e2ec5-d5c6-41cf-bc72-2200473f15ec",
  },
});

export const authMe = () => {
  return instance.get("auth/me").then((response) => {
    console.log(response);
  });
};

// export const signIn = (email, password) => {
//   return instance
//     .post("auth/login", {
//       email: email,
//       password: password,
//     })
//     .then((response) => {
//       console.log(response);
//     });
// };
