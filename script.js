const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal-title');
const modalPhoto = document.querySelector('.modal-photo');
const modalClose = document.querySelector('.modal-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
}

document.addEventListener('click', (event) => {
  if (!nav.classList.contains('open')) {
    return;
  }

  const isToggle = navToggle.contains(event.target);
  const isNav = nav.contains(event.target);

  if (!isToggle && !isNav) {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    const title = item.getAttribute('data-title') || 'Preview';
    const img = item.querySelector('img');
    const src = img ? img.getAttribute('src') : '';
    const alt = img ? img.getAttribute('alt') : 'Preview';
    modalTitle.textContent = title;
    modalPhoto.src = src;
    modalPhoto.alt = alt;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  });
});

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  modalPhoto.src = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
