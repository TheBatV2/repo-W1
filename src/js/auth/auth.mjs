import { loginRequest } from "/js/externalServices.mjs";
import { alertMessage, getLocalStorage, setLocalStorage } from "../utils.mjs";
// ...existing code...
import { jwtDecode } from "https://cdn.jsdelivr.net/npm/jwt-decode@4.0.0/build/esm/index.js";
// ...existing code...
const tokenKey = "so_token";

export async function login(creds, redirect = "/") {
  try {
    const token = await loginRequest(creds);
    setLocalStorage(tokenKey, token);
    // Try reading it back:
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
        return false;
      } else {
        return true;
      }
    } catch (e) {
      return false;
    }
  } else {
    // No token or not in JWT format
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
