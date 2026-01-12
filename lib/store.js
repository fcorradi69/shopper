export class Store {
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
