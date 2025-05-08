import { addToCartHandler } from "./product.js";
import { findProductById } from "./productData.mjs";

export async function productDetails(productId) {

    fetchProduct(productId){

    } const product = await findProductById(productId);
    if (product) {
        document.getElementById("productName").innerText = product.Name;
        document.getElementById("productPrice").innerText = `$${product.Price}`;
        document.getElementById("productDescription").innerText = product.Description;
        document.getElementById("productImage").src = product.ImageUrl;
        document.getElementById("addToCart").dataset.id = product.Id;
    } else {
        console.error("Product not found");
    }
}

