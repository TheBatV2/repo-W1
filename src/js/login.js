import { loadHeaderFooter, getParam } from "./utils.mjs";
import { login } from "../auth/auth.mjs";

loadHeaderFooter();

const form = document.getElementById("loginForm");
const redirect = getParam("redirect") || "/orders/index.html";

form.addEventListener("submit", async (e) => {
  console.log("Login form submitted!");
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const creds = { email, password };
  console.log("Attempting login with:", creds);
  await login(creds, redirect);
  console.log(
    "After login, token in localStorage:",
    localStorage.getItem("so_token"),
  );
});
