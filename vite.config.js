import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve("D:/School/Spring 2025/WDD 330/repo-W1", "src/index.html"),
        cart: resolve(
          "D:/School/Spring 2025/WDD 330/repo-W1",
          "src/cart/index.html",
        ),
        checkout: resolve(
          "D:/School/Spring 2025/WDD 330/repo-W1",
          "src/checkout/index.html",
        ),
        product1: resolve(
          "D:/School/Spring 2025/WDD 330/repo-W1",
          "src/product_pages/cedar-ridge-rimrock-2.html",
        ),
        product2: resolve(
          "D:/School/Spring 2025/WDD 330/repo-W1",
          "src/product_pages/marmot-ajax-3.html",
        ),
        product3: resolve(
          "D:/School/Spring 2025/WDD 330/repo-W1",
          "src/product_pages/northface-alpine-3.html",
        ),
        product4: resolve(
          "D:/School/Spring 2025/WDD 330/repo-W1",
          "src/product_pages/northface-talus-4.html",
        ),
      },
    },
  },
});
