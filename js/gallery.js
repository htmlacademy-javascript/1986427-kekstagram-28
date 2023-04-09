import { renderThumbnails} from './thumbnail.js';
import { showBigPicture} from './big-picture.js';
import { debounce} from './utils.js';

const menu = document.querySelector('.img-filters');
let initialData;
const container = document.querySelector('.pictures');

export const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnail) {
      return;
    }

    const picture = pictures.find((item) => item.id === Number(thumbnail.dataset.thumbnailId));
    showBigPicture(picture);
  });

  renderThumbnails(pictures,container);
};

const removeThumbnails = () => {
  document.querySelectorAll('a.picture').forEach((el) => el.remove());
};

/**
 * @param {MouseEvent & {target: Element}} event
 */
const onMenuClick = (event) => {
  const selectedButton = event.target.closest('button');

  if (!selectedButton) {
    return;
  }

  menu.querySelectorAll('button').forEach((button) => {
    button.classList.remove('img-filters__button--active');
  });

  selectedButton.classList.add('img-filters__button--active');
  selectedButton.dispatchEvent(new Event('change'));
};

/**
 * @param {Event & {target: HTMLButtonElement}} event
 */
const onMenuChange = debounce((event) => {
  removeThumbnails();

  const photo = structuredClone(initialData);
  const id = event.target.getAttribute('id');

  if (id === 'filter-random') {
    photo.sort(() => Math.random() - 0.5).splice(10);
  }
  if (id === 'filter-discussed') {
    photo.sort((a, b) => b.comments.length - a.comments.length);
  }

  renderGallery(photo);
});

export const initGallery = (data) => {
  initialData = data;
  menu.classList.remove('img-filters--inactive');
  menu.addEventListener('click', onMenuClick);
  menu.addEventListener('change', onMenuChange, true);

  renderGallery(data);
};
