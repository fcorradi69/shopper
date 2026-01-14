import "./components/article-dialog.js";
import "./components/cart.js";
import "./components/carts.js";
import "./components/confirm-dialog.js";
import "./components/utilities.js";
import { navigate } from "./lib/navigate.js";

const app = { 
  init() {
    const route = sessionStorage.getItem("shop.page") ?? "carts";
    navigate(route);
  }
}

app.init();

