import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve("D:/School/Spring 2025/New folder", "src/index.html"),
        cart: resolve(
          "D:/School/Spring 2025/New folder",
          "src/cart/index.html",
        ),
        checkout: resolve(
          "D:/School/Spring 2025/New folder",
          "src/checkout/index.html",
        ),
        product1: resolve(
          "D:/School/Spring 2025/New folder",
          "src/product_pages/cedar-ridge-rimrock-2.html",
        ),
        product2: resolve(
          "D:/School/Spring 2025/New folder",
          "src/product_pages/marmot-ajax-3.html",
        ),
        product3: resolve(
          "D:/School/Spring 2025/New folder",
          "src/product_pages/northface-alpine-3.html",
        ),
        product4: resolve(
          "D:/School/Spring 2025/New folder",
          "src/product_pages/northface-talus-4.html",
        ),
      },
    },
  },
});
