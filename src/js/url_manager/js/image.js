export default class Image {
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
