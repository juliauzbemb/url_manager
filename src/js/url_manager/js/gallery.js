export default class Gallery {
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
