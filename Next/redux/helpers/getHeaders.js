import cookie from "react-cookies";
export const getHeaders = () => ({
  headers: {
    "Content-Type": "application/json",
    "token": cookie.load("token")
  }
});
