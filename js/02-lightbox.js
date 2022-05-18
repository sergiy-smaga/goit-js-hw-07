import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", markup);

function createMarkup(items) {
    return  items
    .map(item => { 
      return `
      <a class="gallery__item" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          alt="${item.description}"
        />
      </a>
    `;
    })
    .join(" ");
  };

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
  
