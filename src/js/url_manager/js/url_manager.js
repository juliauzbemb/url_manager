import Image from "./image";
import Gallery from "./gallery";
import Error from "./error";

export default class URL_Manager {
  constructor(form) {
    if (typeof form === "string") {
      form = document.querySelector(form);
    }
    this.form = form;
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.form.addEventListener("submit", this.onSubmitForm);
  }

  onSubmitForm(e) {
    e.preventDefault();
    let error = new Error(".url_error");
    let urlName = document.querySelector("#url_name");
    let urlLink = document.querySelector("#url_link");

    let gallery = new Gallery(".gallery");

    let image = new Image();
    let newDiv = image.renderImg(urlLink.value, urlName.value);

    image.imgElement.src = urlLink.value;

    image.imgElement.onload = () => {
      error.hideError();
      gallery.addImage(newDiv);
      this.clearForm(urlName, urlLink);
    };

    image.imgElement.onerror = () => {
      error.showError();
    };
  }

  clearForm(name, link) {
    name.value = "";
    link.value = "";
  }
}
