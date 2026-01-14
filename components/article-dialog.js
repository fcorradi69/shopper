import { ARTICLE } from "../lib/models.js";
import { Binding } from "../lib/binding.js";

class ArticleDialog extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = /*html*/ `
            <dialog>
              <section>
                <header>Articolo</header>
                <article class="inputs-container">
                  <div class="input-control">
                    <label for="articolo">Articolo</label>
                    <input type="text" id="articolo" js-model="Article" />
                  </div>
                  <div class="inputs-container row">
                    <div class="input-control">
                      <label for="prezzo">Prezzo</label>
                      <input type="text" pattern="[0-9*]" inputmode="numeric" id="prezzo" js-model="Prezzo" />
                    </div>
                    <div class="input-control" style="width: 85px">
                      <label for="qta">Qta</label>
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

customElements.define("article-dialog", ArticleDialog);