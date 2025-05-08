import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve("WDD 330/repo-W1", "src/index.html"),
        cart: resolve(
          "WDD 330/repo-W1",
          "src/cart/index.html",
        ),
        checkout: resolve(
          "WDD 330/repo-W1",
          "src/checkout/index.html",
        ),
        product1: resolve(
          "WDD 330/repo-W1",
          "src/product_pages/cedar-ridge-rimrock-2.html",
        ),
        product2: resolve(
          "WDD 330/repo-W1",
          "src/product_pages/marmot-ajax-3.html",
        ),
        product3: resolve(
          "WDD 330/repo-W1",
          "src/product_pages/northface-alpine-3.html",
        ),
        product4: resolve(
          "WDD 330/repo-W1",
          "src/product_pages/northface-talus-4.html",
        ),
      },
    },
  },
});
