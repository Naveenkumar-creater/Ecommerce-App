import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDk2YzcyYzY0YWI4YmQyNjk4NzlmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODQxOTI1NywiZXhwIjoxNjU4Njc4NDU3fQ.gQkYNhYljSmSz0V1BlSFnQ4UZbl0f75d9nvK-rMTndw"
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
