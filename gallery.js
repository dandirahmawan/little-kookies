const galleryGrid = document.querySelector('#gallery-grid');
const loadButton = document.querySelector('.gallery-load');

const images = [
  'images/gallery/Screenshot at Jan 10 00-19-23.png',
  'images/gallery/Screenshot at Jan 10 00-19-41.png',
  'images/gallery/Screenshot at Jan 10 00-20-10.png',
  'images/gallery/Screenshot at Jan 10 00-20-25.png',
  'images/gallery/Screenshot at Jan 10 00-20-42.png',
  'images/gallery/Screenshot at Jan 10 00-20-56.png',
  'images/gallery/Screenshot at Jan 10 00-21-09.png',
  'images/gallery/Screenshot at Jan 10 00-21-22.png',
  'images/gallery/Screenshot at Jan 10 12-26-01.png',
  'images/gallery/Screenshot at Jan 10 12-26-18.png',
  'images/gallery/Screenshot at Jan 10 12-26-37.png',
  'images/gallery/Screenshot at Jan 10 12-27-31.png',
  'images/gallery/Screenshot at Jan 10 12-27-48.png',
  'images/gallery/Screenshot at Jan 10 12-28-05.png',
  'images/gallery/Screenshot at Jan 10 12-28-19.png',
  'images/gallery/Screenshot at Jan 10 12-28-48.png'
];

const batchSize = 12;
let currentIndex = 0;

function createGalleryItem(src, index) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'gallery-item';
  button.setAttribute('data-title', `Gallery ${String(index + 1).padStart(2, '0')}`);

  const img = document.createElement('img');
  img.src = src;
  img.alt = `Karya gallery ${index + 1}`;
  img.loading = 'lazy';

  button.appendChild(img);
  return button;
}

function loadBatch() {
  if (!galleryGrid) {
    return;
  }

  const next = images.slice(currentIndex, currentIndex + batchSize);
  next.forEach((src, idx) => {
    const item = createGalleryItem(src, currentIndex + idx);
    galleryGrid.appendChild(item);
  });

  currentIndex += next.length;
  if (currentIndex >= images.length && loadButton) {
    loadButton.style.display = 'none';
  }
}

if (loadButton) {
  loadButton.addEventListener('click', loadBatch);
}

loadBatch();
