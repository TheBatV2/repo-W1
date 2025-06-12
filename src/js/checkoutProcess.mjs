import { getLocalStorage } from "./utils.mjs";
import { checkout } from "./externalServices.mjs";

// takes a form element and returns an object where the key is the "name" of the form input.
function formDataToJSON(formElement) {
  const formData = new FormData(formElement),
    convertedJSON = {};

  formData.forEach(function (value, key) {
    convertedJSON[key] = value;
  });

  return convertedJSON;
}

// formats items in the cart for the order
function packageItems(items) {
  return items.map((item) => ({
    id: item.id,
    name: item.name,
    price: item.FinalPrice,
    quantity: 1,
  }));
}

const checkoutProcess = {
  key: "",
  outputSelector: "",
  list: [],
  itemTotal: 0,
  shipping: 0,
  tax: 0,
  orderTotal: 0,

  init: function (key, outputSelector) {
    this.key = key;
    this.outputSelector = outputSelector;
    this.list = getLocalStorage(key);
    this.calculateItemSummary();
  },

  calculateItemSummary: function () {
    // calculate and display the total amount of the items in the cart, and the number of items.
    const itemNum = this.list.length;
    const subtotal = this.list.reduce((sum, item) => sum + item.FinalPrice, 0);

    this.itemTotal = subtotal;

    const itemCountEl = document.querySelector(this.outputSelector + "#num-items");
    const subtotalEl = document.querySelector(this.outputSelector + "#cartTotal");

    if (itemCountEl) itemCountEl.textContent = itemNum;
    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  },

  calculateOrdertotal: function () {
    // calculate the shipping and tax amounts. Then use them to along with the cart total to figure out the order total
    const itemCount = this.list.length;

    this.shipping = 10 + (itemCount - 1) * 2;
    this.tax = (this.itemTotal * 0.06).toFixed(2);
    this.orderTotal = (
      parseFloat(this.itemTotal) +
      parseFloat(this.shipping) +
      parseFloat(this.tax)
    ).toFixed(2);

    // display the totals.
    this.displayOrderTotals();
  },

  displayOrderTotals: function () {
    // once the totals are all calculated display them in the order summary page
    const shippingEl = document.querySelector(this.outputSelector + "#shipping");
    const taxEl = document.querySelector(this.outputSelector + "#tax");
    const TotalEl = document.querySelector(this.outputSelector + "#orderTotal");

    if (shippingEl) shippingEl.textContent = "$" + this.shipping;
    if (taxEl) taxEl.textContent = "$" + this.tax;
    if (TotalEl) TotalEl.textContent = "$" + this.orderTotal;
  },

  checkout: async function (form) {
    const data = formDataToJSON(form);

    data.orderDate = new Date().toISOString();
    data.items = packageItems(this.list);
    data.shipping = this.shipping;
    data.tax = this.tax;
    data.orderTotal = this.orderTotal;

    // const response = await checkout(data);

    // console.log("Checkout response:", response);

    // localStorage.removeItem(this.key);
    // window.location.href = "/order-confirmation.html";
  }
};

export default checkoutProcess;
