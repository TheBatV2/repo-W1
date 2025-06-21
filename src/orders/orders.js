import { loadHeaderFooter } from "../js/utils.mjs";
import { checkLogin } from "../auth/auth.mjs";
import { getOrders } from "../js/externalServices.mjs";

loadHeaderFooter();

const token = checkLogin();

async function displayOrders() {
  const orders = await getOrders(token);
  const ordersList = document.getElementById("ordersList");
  ordersList.innerHTML = "";

  orders.forEach((order) => {
    const li = document.createElement("li");
    li.textContent = `Order #${order.id} - ${order.customer} - $${order.total}`;
    ordersList.appendChild(li);
  });
}

displayOrders();
