import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", markup);
galleryRef.addEventListener("click", onClick);

function createMarkup(items) {
  return  items
  .map(item => { 
    return `
    <div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>
  `;
  })
  .join(" ");
};

function onClick(event) {
    event.preventDefault(); 
    if (event.target.nodeName !== "IMG") {
        return;
    };
	const modal = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
	`);
    
    modal.show();
    
    window.addEventListener("keydown", onEscDown );
    function onEscDown(event) {
        if (event.code === "Escape") {
            modal.close();
            window.removeEventListener("keydown", onEscDown );
        };
    };
};

