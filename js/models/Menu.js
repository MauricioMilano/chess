class Menu {

  exibir() {
    this.botoes.style.display = "block";
  }

  remover() {
    this.botoes.style.display = "none";
  }

  get botoes() {
    return document.querySelector('.botoesMenu');
  }
}