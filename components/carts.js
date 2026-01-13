
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

customElements.define("carts-component", CartsComponent);