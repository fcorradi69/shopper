/*
class CART {
  constructor(id, description) {
    this.CartId = id;
    this.Cart = description;
    this.Articles = [];
  }
}

class ARTICLE {
  ArticleId = 0;
  Article = "";
  Prezzo = 0.0;
  Qta = 1;
  constructor() { }
}

class Store {
  static name = "shop";

  static get() {
    let json = localStorage.getItem(this.name) ?? null;
    if (json) {
      let items = JSON.parse(json);
      return items;
    } else {
      return [];
    }
  }

  static set(value) {
    let json = JSON.stringify(value, null, 2);
    localStorage.setItem(this.name, json);
  }
}

class Icons {
  constructor() {
    this.cart = `<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <path d="M207.77832,131.57764l12.15723-66.86231A3.99966,3.99966,0,0,0,216,60H51.33838l-5.481-30.14648A11.994,11.994,0,0,0,34.05078,20H16a4,4,0,0,0,0,8H34.05078a3.99779,3.99779,0,0,1,3.93555,3.28418L65.86572,184.62036A24.00308,24.00308,0,1,0,97.86914,188h68.26172A23.98659,23.98659,0,1,0,184,180H73.15625l-5.81787-32H188.10156A19.98932,19.98932,0,0,0,207.77832,131.57764ZM96,204a16,16,0,1,1-16-16A16.01833,16.01833,0,0,1,96,204Zm104,0a16,16,0,1,1-16-16A16.01833,16.01833,0,0,1,200,204ZM52.793,68H211.207l-11.2998,62.147A11.99336,11.99336,0,0,1,188.10156,140H65.88379Z"/>
                   </svg>`;
    this.cloudarrowdown = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708z"/>
                                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                                  </svg>`;

    this.cloudarrowup = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708z"/>
                                  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                                </svg>`;

    this.export = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                          <path d="M12.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m.354 5.854 1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V10.5a.5.5 0 0 0-1 0v2.793l-.646-.647a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0"/>
                          <path d="M12.096 6.223A5 5 0 0 0 13 5.698V7c0 .289-.213.654-.753 1.007a4.5 4.5 0 0 1 1.753.25V4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.5 4.5 0 0 1-.813-.927Q8.378 15 8 15c-1.464 0-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13h.027a4.6 4.6 0 0 1 0-1H8c-1.464 0-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10q.393 0 .774-.024a4.5 4.5 0 0 1 1.102-1.132C9.298 8.944 8.666 9 8 9c-1.464 0-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777M3 4c0-.374.356-.875 1.318-1.313C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4"/>
                         </svg>`;

    this.import = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                          <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0"/>
                          <path d="M12.096 6.223A5 5 0 0 0 13 5.698V7c0 .289-.213.654-.753 1.007a4.5 4.5 0 0 1 1.753.25V4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.5 4.5 0 0 1-.813-.927Q8.378 15 8 15c-1.464 0-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13h.027a4.6 4.6 0 0 1 0-1H8c-1.464 0-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10q.393 0 .774-.024a4.5 4.5 0 0 1 1.102-1.132C9.298 8.944 8.666 9 8 9c-1.464 0-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777M3 4c0-.374.356-.875 1.318-1.313C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4"/>
                         </svg>` ;

    this.pencil = `<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30.133 1.552c-1.090-1.044-2.291-1.573-3.574-1.573-2.006 0-3.47 1.296-3.87 1.693-0.564 0.558-19.786 19.788-19.786 19.788-0.126 0.126-0.217 0.284-0.264 0.456-0.433 1.602-2.605 8.71-2.627 8.782-0.112 0.364-0.012 0.761 0.256 1.029 0.193 0.192 0.45 0.295 0.713 0.295 0.104 0 0.208-0.016 0.31-0.049 0.073-0.024 7.41-2.395 8.618-2.756 0.159-0.048 0.305-0.134 0.423-0.251 0.763-0.754 18.691-18.483 19.881-19.712 1.231-1.268 1.843-2.59 1.819-3.925-0.025-1.319-0.664-2.589-1.901-3.776zM22.37 4.87c0.509 0.123 1.711 0.527 2.938 1.765 1.24 1.251 1.575 2.681 1.638 3.007-3.932 3.912-12.983 12.867-16.551 16.396-0.329-0.767-0.862-1.692-1.719-2.555-1.046-1.054-2.111-1.649-2.932-1.984 3.531-3.532 12.753-12.757 16.625-16.628zM4.387 23.186c0.55 0.146 1.691 0.57 2.854 1.742 0.896 0.904 1.319 1.9 1.509 2.508-1.39 0.447-4.434 1.497-6.367 2.121 0.573-1.886 1.541-4.822 2.004-6.371zM28.763 7.824c-0.041 0.042-0.109 0.11-0.19 0.192-0.316-0.814-0.87-1.86-1.831-2.828-0.981-0.989-1.976-1.572-2.773-1.917 0.068-0.067 0.12-0.12 0.141-0.14 0.114-0.113 1.153-1.106 2.447-1.106 0.745 0 1.477 0.34 2.175 1.010 0.828 0.795 1.256 1.579 1.27 2.331 0.014 0.768-0.404 1.595-1.24 2.458z" />
                    </svg>`;

    this.fullpencil = `<svg viewBox="-5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path d="M18.344 4.781l-3.406 3.063s1.125 0.688 2.156 1.656c1 0.969 1.719 2.063 1.719 2.063l2.906-3.469s-0.031-0.625-1.406-1.969c-1.406-1.344-1.969-1.344-1.969-1.344zM7.25 21.938l-0.156 1.5 10.813-11.25s-0.719-1-1.594-1.844c-0.906-0.875-1.938-1.563-1.938-1.563l-10.813 11.25 1.688-0.094 0.188 1.813zM0 26.719l2.688-5.5 1.5-0.125 0.125 1.719 1.813 0.25-0.188 1.375-5.438 2.75z" />
                          </g>
                        </svg>`;
  }
}

class Binding {
  constructor(source) {
    this.attributename = "js-model";
    this.elements = source.querySelectorAll(`[${this.attributename}]`);
    this.state;

    this.elements.forEach((element) => {
      let property = element.getAttribute(this.attributename);
      switch (element.type) {
        case "text":
        case "textarea":
          element.addEventListener("keyup", (event) => {
            this.state[property] = element.value;
          });
          break;

        case "number":
          element.addEventListener("keyup", (event) => {
            this.state[property] = Number(element.value);
          });
          break;

        case "select-one":
        case "autocomplete":
          element.addEventListener("change", (event) => {
            this.state[property] = element.value;
          });
          break;

        case "radio":
          element.addEventListener("click", (event) => {
            this.state[property] = element.value;
            element.checked = true;
          });
          break;

        case "checkbox":
          element.addEventListener("click", (event) => {
            this.state[property] = !state[property];
            element.checked = this.state[property];
          });
          break;
      }
    });
  }

  CreateState = (datasource) => {
    return new Proxy(datasource, {
      set: (target, property, value) => {
        target[property] = value;
        this.render();
        return true;
      },
    });
  };

  render = () => {
    this.elements.forEach((element) => {
      let property = element.getAttribute(this.attributename);
      switch (element.type) {
        case "text":
        case "textarea":
        case "number":
        case "select-one":
        case "autocomplete":
          element.value = this.state[property];
          break;

        case "radio":
          element.checked = this.state[property] == element.value;
          break;

        case "checkbox":
          element.checked = this.state[property];
          break;

        default:
          if (!element.type) element.innerHTML = this.state[property];
          break;
      }
    });
  };

  DataSource = (data) => {
    this.state = this.CreateState(data);
    this.render();
  };
}
*/

import { CART, ARTICLE } from "./lib/models.js";
import { Store } from "./lib/store.js";
import { Icons } from "./lib/icons.js";
import { Binding } from "./lib/binding.js";

customElements.define(
  "confirm-dialog",
  class ConfirmDialog extends HTMLElement {
    constructor() {
      super();

      this.innerHTML = /*html*/ `
          <dialog>
            <section>
              <article style="justify-content: center;">
                <div style="display: flex; align-items: center; justify-content: flex-start; gap: 10px; padding: 10px; fill: orange; width: 100%;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
                  </svg>
                  <div id="message"></div>
                </div>
              </article>
              <footer>
                <button id="yes-button" class="ripple">Sì</button>
                <button id="no-button" class="ribble">No</button>
              </footer>
            </section>
          </dialog>
        `;

      this.dialog = this.querySelector("dialog");
      this.yesbutton = this.querySelector("#yes-button");
      this.nobutton = this.querySelector("#no-button");
      this.dialogmessage = this.querySelector("#message");
      this.message = "";
      this.closeEvent = (value = null) => new CustomEvent("close", { bubbles: true, cancelable: false, composed: true, detail: value });
    }

    set message(newvalue) {
      this.setAttribute("message", newvalue);
    }

    get message() {
      return this.getAttribute("message");
    }

    static get observedAttributes() {
      return ["message"];
    }

    attributeChangedCallback(property, oldvalue, newvalue) {
      if (oldvalue !== newvalue) {
        switch (property) {
          case "message":
            this.message = newvalue;
            break;
        }
        this.render();
      }
    }

    async connectedCallback() {
      this.yesbutton.addEventListener("click", (event) => {
        this.dialog.close();
        this.dispatchEvent(this.closeEvent(true));
      });

      this.nobutton.addEventListener("click", (event) => {
        this.dialog.close();
        this.dispatchEvent(this.closeEvent(false));
      });
    }

    async disconnectedCallback() {
      this.innerHTML = "";
    }

    show() {
      this.dialog.showModal();
    }

    render() {
      this.dialogmessage.textContent = this.message;
    }
  }
);

customElements.define(
  "carts-component",
  class CartsComponent extends HTMLElement {
    #store = new Store();

    constructor() {
      super();

      this.innerHTML = /*html*/ `
            <main>
              <h1>Shopper</h1>
              <nav>
                <button id="addbutton" class="ripple">Aggiungi cart</button>
                <button id="utilitiesbutton">Utilities</button>
              </nav>
              <div class="cards-container"></div>
            </main>
          `;
      this.addbutton = this.querySelector("#addbutton");
      this.utilitiesbutton = this.querySelector("#utilitiesbutton");
      this.cardscontainer = this.querySelector("div.cards-container");
    }

    async connectedCallback() {
      this.getcarts();

      this.addbutton.addEventListener("click", event => {
        let items = Store.get();
        let newid = items.length + 1;
        let cart = new CART(newid, `Cart ${newid.toString().padStart(2, "0")}`);
        items.push(cart);
        Store.set(items);
        app.navigate("cart", newid);
      });

      this.utilitiesbutton.addEventListener("click", event => app.navigate("utilities"));
    }

    getcarts() {
      const items = Store.get() ?? [];
      this.cardscontainer.innerHTML = "";
      items.forEach((item) => {
        const btn = document.createElement("button");
        btn.classList.add("ripple", "card");
        btn.innerHTML = `${app.images.cart}
                             <div>${item.Cart}</div>`;
        btn.addEventListener("click", () => {
          app.navigate("cart", item.CartId);
        });
        this.cardscontainer.appendChild(btn);
      });
    }

    async disconnectedCallback() {
      this.innerHTML = "";
    }
  }
);

customElements.define(
  "cart-component",
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
                <label>Nome cart</label>
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

      this.backbutton.addEventListener("click", (event) => app.navigate("carts"));

      this.deletebutton.addEventListener("click", (event) => this.confirmdialog.show());
      this.confirmdialog.addEventListener("close", (event) => {
        if (event.detail) {
          let items = Store.get().filter((i) => i.CartId !== this.cart.CartId);
          Store.set(items);
          app.navigate("carts");
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
);

customElements.define(
  "article-dialog",
  class ArticleDialog extends HTMLElement {
    constructor() {
      super();

      this.innerHTML = /*html*/ `
            <dialog>
              <section>
                <header>Articolo</header>
                <article class="inputs-container">
                  <div class="input-control">
                    <label>Articolo</label>
                    <input type="text" id="articolo" js-model="Article" />
                  </div>
                  <div class="inputs-container row">
                    <div class="input-control">
                      <label>Prezzo</label>
                      <input type="text" pattern="[0-9*]" inputmode="numeric" id="prezzo" js-model="Prezzo" />
                    </div>
                    <div class="input-control" style="width: 85px">
                      <label>Qta</label>
                      <input type="text" id="qta" inputmode="numeric" js-model="Qta" />
                    </div>
                  </div>
                </article>
                <footer style="margin-top: 10px;">
                  <button class="ripple" id="save">Salva</button>
                  <button class="ripple" id="delete">Elimina</button>
                  <button class="ripple" id="close">Chiudi</button>
                </footer>
              </section>
            </dialog>
          `;

      this.article = {};
      this.isnew = false;
      this.dialog = this.querySelector("dialog");
      this.savebutton = this.querySelector("#save");
      this.deletebutton = this.querySelector("#delete");
      this.closebutton = this.querySelector("#close");
      this.inputs = this.querySelectorAll("input[js-model]");
      this.binding = new Binding(this.dialog);
      this.deleteEvent = (value) => new CustomEvent("delete", { bubbles: true, cancelable: false, composed: true, detail: value });
      this.addEvent = (value) => new CustomEvent("add", { bubbles: true, cancelable: false, composed: true, detail: value });
      this.updateEvent = (value) => new CustomEvent("update", { bubbles: true, cancelable: false, composed: true, detail: value });
    }

    async connectedCallback() {

      this.inputs.forEach((element) => {
        element.addEventListener("focus", (event) => element.select());
      });

      this.dialog.querySelector("#prezzo").addEventListener("keyup", event => {
        const regex = /[^0-9.]/gm;
        let value = event.target.value.replace(regex, "");
        let values = value.split(".");
        if (values.length > 1) value = `${values[0]}.${values.slice(1).join("")}`;
        event.target.value = value;
      });

      this.dialog.querySelector("#qta").addEventListener("keyup", event => {
        const regex = /[^0-9]/gm;
        let value = event.target.value.replace(regex, "");
        event.target.value = value;
      });

      this.savebutton.addEventListener("click", event => {
        event.preventDefault();
        const regex = /[^0-9.]/gm;
        this.article.Prezzo = parseFloat(this.article.Prezzo.toString().replace(regex, ""));
        this.article.Qta = parseInt(this.article.Qta.toString().replace(regex, ""));

        if (!this.article.Prezzo) this.article.Prezzo = 0;
        if (!this.article.Qta) this.article.Qta = 1;
        if (this.isnew) {
          this.dispatchEvent(this.addEvent(this.article));
          this.isnew = false;
        } else {
          this.dispatchEvent(this.updateEvent(this.article));
        }
        setTimeout(() => this.dialog.close(), 150);
      });

      this.deletebutton.addEventListener("click", (event) => {
        this.dispatchEvent(this.deleteEvent(this.article.ArticleId));
        this.dialog.close();
      });

      this.closebutton.addEventListener("click", (event) => {
        this.dialog.close();
      });
    }

    show(value = null, articles = 0) {
      this.isnew = value === null;
      this.article = {};

      if (this.isnew) {
        this.article = new ARTICLE();
        this.article.ArticleId = articles + 1;
        this.article.Article = "";
        this.article.Prezzo = 0.0;
        this.article.Qta = 1;
        this.deletebutton.style.display = "none";
      } else {
        this.article = value;
        this.deletebutton.style.display = "flex";
      }

      this.binding.DataSource(this.article);
      this.dialog.showModal();
    }

    async disconnectedCallback() {
      this.innerHTML = "";
    }
  }
);

customElements.define("utilities-component",
  class UtilitiesComponent extends HTMLElement {
    constructor() {
      super();

      this.innerHTML = /*html*/ `
            <main>
              <h1>Utilities</h1>
              <nav>
                <button id="backbutton" class="ripple">carts</button>
              </nav>
              <div class="cards-container">
                <button class="ripple card" id="exportbutton">
                  ${app.images.cloudarrowdown}                 
                  <div>Export</div>
                </button>
                <button class="ripple card" id="importbutton">
                  ${app.images.cloudarrowup}
                  <div>Import</div>
                </button>
              </div>
              <input type="file" id="fileupload" style="display: none">
            </main>
          `;
      this.backbutton = this.querySelector("#backbutton");
      this.exportbutton = this.querySelector("#exportbutton");
      this.importbutton = this.querySelector("#importbutton");
      this.fileupload = this.querySelector("#fileupload");
    }

    async connectedCallback() {
      this.backbutton.addEventListener("click", event => app.navigate("carts"));

      this.exportbutton.addEventListener("click", event => {
        const json = JSON.stringify(Store.get(), null, 2);
        const blob = new Blob([json], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "carts.json";
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      })

      this.importbutton.addEventListener("click", event => {
        this.fileupload.click();
      });

      this.fileupload.addEventListener("change", event => {
        if (event.target.files.length === 0) return;
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          let value = ""
          reader.onload = () => {
            value = reader.result?.toString() ?? "";
          };

          reader.onloadend = () => {
            let json = JSON.parse(value);
            Store.set(json);
          }

          reader.readAsText(file, "uft8");
        }
        fileupload.value = "";
      })

    }

    async disconnectedCallback() {
      this.innerHTML = "";
    }
  }
)

const app = {
  images: new Icons(),

  navigate(route = "carts", id = null) {
    const container = document.querySelector("#app");
    container.innerHTML = "";
    sessionStorage.setItem("shop.page", route);

    switch (route) {
      case "carts": {
        container.innerHTML = "<carts-component />";
        break;
      }

      case "cart": {
        container.innerHTML = `<cart-component cartid="${id}" />`;
        break;
      }

      case "utilities": {
        container.innerHTML = "<utilities-component />";
        break;
      }
    }
  },

  init() {
    const route = sessionStorage.getItem("shop.page") ?? "carts";
    app.navigate(route);
  }
}


app.init();

