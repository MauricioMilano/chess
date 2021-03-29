class Menu {

  constructor(tipo) {
    this._tipo = document.querySelector(tipo);
  }

  exibir() {
    this._tipo.style.display = "block";
  }

  remover() {
    this._tipo.style.display = "none";
  }

  get tipo() {
    return this._tipo
  }
}