import { getData } from "./productData.mjs";   

export default function productList( productId, tents) {    
    // get the details for the current product. findProductById will return a promise! use await or .then() to process it
    const product = getData(productId);
    // once we have the product details we can render out the HTML
    renderProductList(product, tents);

}
//Marmot Ajax Tent - 3-Person, 3-Season  880RR
//Talus Tent - 4-Person, 3-Season  985RF
//Alpine Guide Tent - 3-Person, 4-Season  985PR
//Rimrock Tent - 2-Person, 3-Season  344YJ