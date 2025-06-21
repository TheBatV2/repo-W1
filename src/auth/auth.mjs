import { loginRequest } from "../js/externalServices.mjs";
import {
  alertMessage,
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
} from "../js/utils.mjs";
import { jwtDecode } from "jwt-decode";

const tokenKey = "so_token";

export async function login(creds, redirect = "/") {
  try {
    const token = await loginRequest(creds);
    console.log("Token returned from loginRequest:", token);
    setLocalStorage(tokenKey, token);
    console.log("Stored token:", token, "in localStorage as", tokenKey);
    // Try reading it back:
    console.log("localStorage value:", localStorage.getItem(tokenKey));
    window.location = redirect;
  } catch (err) {
    alertMessage(err.message || "Login failed");
  }
}

export function isTokenValid(token) {
  // First, check if the token is actually present and a likely JWT
  if (token && typeof token === "string" && token.split(".").length === 3) {
    try {
      const decoded = jwtDecode(token);
      let currentDate = new Date();
      if (decoded.exp * 1000 < currentDate.getTime()) {
        console.log("Token expired.");
        return false;
      } else {
        console.log("Valid token");
        return true;
      }
    } catch (e) {
      console.log("Invalid token format:", e);
      return false;
    }
  } else {
    // No token or not in JWT format
    console.log("No or invalid token:", token);
    return false;
  }
}

export function checkLogin() {
  const token = getLocalStorage(tokenKey);
  const valid = isTokenValid(token);

  if (!valid) {
    localStorage.removeItem(tokenKey);
    const location = window.location;
    window.location = `/login/index.html?redirect=${location.pathname}`;
  } else {
    return token; // they're logged in, return the token
  }
}
