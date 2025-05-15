import { getData } from "./productData.mjs";  

productCardTemplate(product)
function productCardTemplate(product) {
    return `
        <li class="product-card">
        <a href="product_page/index.html?product=${product.Id}">
            <img src="${product.Image}" alt="Image set ${product.Name}"/>
            <h3 class="product_name">${product.Name}</h2>
            <h2 class="product_nobrand>${product.NameWithoutBrand}</p>
            <p class="price">Price: $${product.FinalPrice}</p></a>
        </li>
    `;
}

export default async function productList( productId, tents) {    
    // get the details for the current product. findProductById will return a promise! use await or .then() to process it
    const sel = document.querySelector(productId);
    const product = await getData(tents);
    // once we have the product details we can render out the HTML
    console.log(product);
    
    renderProductList(productCardTemplate, sel, product);
   

}
//Marmot Ajax Tent - 3-Person, 3-Season  880RR
//Talus Tent - 4-Person, 3-Season  985RF
//Alpine Guide Tent - 3-Person, 4-Season  985PR
//Rimrock Tent - 2-Person, 3-Season  344YJ