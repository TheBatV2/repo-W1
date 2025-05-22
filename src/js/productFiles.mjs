import { getData } from "./productData.mjs";  
import { renderListWithTemplate } from "./utils.mjs";

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


//Marmot Ajax Tent - 3-Person, 3-Season  880RR
//Talus Tent - 4-Person, 3-Season  985RF
//Alpine Guide Tent - 3-Person, 4-Season  985PR
//Rimrock Tent - 2-Person, 3-Season  344YJ