
import { CART } from "../lib/models.js";
import { Store } from "../lib/store.js";
import { navigate } from "../lib/navigate.js";
import "./confirm-dialog.js";
import "./article-dialog.js";

class CardComponent extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = /*html*/ `
            <main>
              <h1>
                <span>Shopper cart</span>
              </h1>
              <nav>
                <button id="backbutton" class="ripple">Carts</button>
                <button id="addbutton" class="ripple">Agg. articolo</button>
                <button id="deletebutton" class="ripple">Elimina</button>
              </nav>
              <div class="input-control">
                <label for="description">Nome cart</label>
                <input type="text" id="description" />
              </div>
              <label style="width: 100%">
                <span>Articoli presi</span>
                <span id="presi"></span>
                <span>di</span>
                <span id="articolicounter"></span>
                <span style="flex: 1"></span>
                <span id="totale"></span>
              </label>
              <div class="listview"></div> 
            </main>
            <article-dialog></article-dialog>
            <confirm-dialog message="Confermi eliminazione?"></confirm-dialog>
          `;
    this.addbutton = this.querySelector("#addbutton");
    this.backbutton = this.querySelector("#backbutton");
    this.deletebutton = this.querySelector("#deletebutton");
    this.description = this.querySelector("#description");
    this.presi = this.querySelector("#presi");
    this.articolicounter = this.querySelector("#articolicounter");
    this.totale = this.querySelector("#totale");
    this.listview = this.querySelector("div.listview");
    this.confirmdialog = this.querySelector("confirm-dialog");
    this.articledialog = this.querySelector("article-dialog");
    this.cart = new CART();
  }

  static get observedAttributes() {
    return ["cartid"];
  }

  async connectedCallback() {
    this.getcart();

    this.description.addEventListener("change", (event) => {
      if (event.target.value) {
        this.cart.Cart = event.target.value;
        this.update();
      }
    });

    this.addbutton.addEventListener("click", (event) => {
      event.preventDefault();
      this.articledialog.show(null, this.cart.Articles.length);
    });

    this.backbutton.addEventListener("click", (event) => navigate("carts"));

    this.deletebutton.addEventListener("click", (event) => this.confirmdialog.show());
    this.confirmdialog.addEventListener("close", (event) => {
      if (event.detail) {
        let items = Store.get().filter((i) => i.CartId !== this.cart.CartId);
        Store.set(items);
        navigate("carts");
      }
    });

    this.articledialog.addEventListener("add", (event) => {
      let item = event.detail;
      item.ArticleId = this.cart.Articles.length + 1;
      this.cart.Articles.push(item);
      this.update();
      this.getcart();
    });

    this.articledialog.addEventListener("update", (event) => {
      let item = this.cart.Articles.find((i) => i.ArticleId === event.detail.ArticleId);
      item = event.detail;
      this.update();
      this.getcart();
    });

    this.articledialog.addEventListener("delete", (event) => {
      let items = this.cart.Articles.filter((i) => i.ArticleId !== event.detail);
      this.cart.Articles = items;
      this.update();
      this.getcart();
    });
  }

  getcart() {
    const idfromsession = Number(sessionStorage.getItem("shop.cartid")) ?? null;
    const idfromattribute = Number(this.getAttribute("cartId")) ?? null;
    let id = 0;

    if (idfromattribute) {
      sessionStorage.setItem("shop.cartid", idfromattribute);
      id = idfromattribute;
    } else {
      id = idfromsession;
    }

    this.cart = Store.get().find((i) => i.CartId === id);
    this.description.value = this.cart.Cart;
    this.presi.innerText = this.cart.Articles.filter((i) => parseFloat(i.Prezzo) > 0).length ?? 0;
    this.articolicounter.innerText = this.cart.Articles.length ?? 0;
    this.totale.innerText = this.sum();
    this.articles();
  }

  articles() {
    const template = document.createElement("template");
    template.innerHTML = /*html*/ `
            <div class="listitem">
              <div>
                <span id="article" style="flex: 1"></span>
                <span id="prezzo"></span>
                <span style="font-size: 0.85rem; color: rgba(0, 0, 0, 0.5)">x</span>
                <span id="qta"></span>
              </div>
              <div style="justify-content: flex-end; font-size: 0.85rem; color: rgba(0, 0, 0, 0.5)">
                <span style="flex: 1; text-align: right">Totale</span>
                <span id="totale"></span>
              </div>
            </div>
          `;
    this.listview.innerHTML = "";
    this.cart.Articles.forEach((item) => {
      const listitem = template.content.cloneNode(true).querySelector(".listitem");
      if (item.Prezzo > 0) listitem.classList.add("completed");
      listitem.querySelector("#article").innerText = item.Article;
      listitem.querySelector("#qta").innerText = item.Qta;
      listitem.querySelector("#prezzo").innerText = parseFloat(item.Prezzo).toLocaleString("it-IT", { minimumFractionDigits: 2 });
      listitem.querySelector("#totale").innerText = (item.Prezzo * item.Qta).toLocaleString("it-IT", { minimumFractionDigits: 2 });
      listitem.addEventListener("click", (event) => {
        event.preventDefault();
        this.articledialog.show(item);
      });
      this.listview.appendChild(listitem);
    });
  }

  sum() {
    let totale = 0.0;
    this.cart.Articles.forEach((item) => {
      totale += item.Prezzo * item.Qta;
    });
    return totale.toLocaleString("it-IT", { minimumFractionDigits: 2 });
  }

  update() {
    let items = Store.get().map((item) => {
      if (item.CartId === this.cart.CartId) {
        return { ...item, ...this.cart };
      }
      return item;
    });
    //console.log(items)
    Store.set(items);
  }

  async disconnectedCallback() {
    this.innerHTML = "";
  }
}

customElements.define("cart-component", CardComponent);
