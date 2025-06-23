import { loadHeaderFooter } from "./utils.mjs";
import { checkLogin } from "./auth/auth.mjs";
import { getOrders as getOrdersAPI } from "./externalServices.mjs";
import { setOrders } from "./currentOrders.mjs";

loadHeaderFooter();
const token = checkLogin();

async function displayOrders() {
  const orders = await getOrdersAPI(token);

  setOrders(orders);

  const ordersList = document.getElementById("ordersList");
  ordersList.innerHTML = "";

  orders.forEach((order) => {
    const li = document.createElement("li");
    li.textContent = `Order #${order.id} - ${order.fname} ${order.lname}, ${order.street}, ${order.city}, ${order.state}`;
    ordersList.appendChild(li);
  });
}

displayOrders();
