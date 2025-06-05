import productList from "./productList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

await loadHeaderFooter();

productList(".product_list", "tents");