/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/url_manager/js/image.js
class Image {
  constructor() {
    this.imgElement = document.createElement("img");
  }
  renderImg(link, name) {
    return `<div class="gallery_item">
      <img class="img_item" src="${link}" alt="${name}">
      <div class="close_icon"><span class="close_span" style='font-size:50px;'>&#9746;</span></div>
    </div>`;
  }
}
;// CONCATENATED MODULE: ./src/js/url_manager/js/gallery.js
class Gallery {
  constructor(gallery) {
    if (typeof gallery === "string") {
      gallery = document.querySelector(gallery);
    }
    this.gallery = gallery;
    this.onClick = this.onClick.bind(this);
    this.gallery.addEventListener("click", this.onClick);
  }
  addImage(imageItem) {
    this.gallery.insertAdjacentHTML("beforeend", imageItem);
  }
  onClick(e) {
    if (e.target.closest(".gallery_item")) {
      let targetItem = e.target.closest(".gallery_item");
      let closeIcon = targetItem.querySelector(".close_span");
      if (e.target === closeIcon) {
        targetItem.remove();
      }
    }
  }
}
;// CONCATENATED MODULE: ./src/js/url_manager/js/error.js
class Error {
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
;// CONCATENATED MODULE: ./src/js/url_manager/js/url_manager.js



class URL_Manager {
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
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener("DOMContentLoaded", () => {
  new URL_Manager(".url_add_form");
});
;// CONCATENATED MODULE: ./src/index.js



/******/ })()
;