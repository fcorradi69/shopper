import { navigate } from "../lib/navigate";

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
    this.backbutton.addEventListener("click", event => navigate("carts"));

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

customElements.define("utilities-component", UtilitiesComponent)