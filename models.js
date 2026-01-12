export class CART {
  constructor(id, description) {
    this.CartId = id;
    this.Cart = description;
    this.Articles = [];
  }
}

export class ARTICLE {
  ArticleId = 0;
  Article = "";
  Prezzo = 0.0;
  Qta = 1;
  constructor() { }
}
