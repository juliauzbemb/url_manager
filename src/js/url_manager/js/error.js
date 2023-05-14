export default class Error {
  constructor(element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    this.element = element;
  }

  showError() {
    this.element.style.display = "block";
  }

  hideError() {
    this.element.style.display = "none";
  }
}
