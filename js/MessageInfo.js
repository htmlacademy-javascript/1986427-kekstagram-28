export const MESSAGE_TYPE_ERROR = 'error';
export const MESSAGE_TYPE_SUCCESS = 'success';

const onDocumentKeydown = (event) => {
  if (event.key.startsWith('Esc')) {
    const popup = document.querySelector('.success, .error');

    popup.click();
    event.stopPropagation();
  }
};

const onPopupClick = (event) => {
  if (event.target.matches('section, button')) {
    event.currentTarget.remove();

    document.removeEventListener('keydown', onDocumentKeydown, true);
  }
};


export const showMessage = (type, params) => {
  const popupTemplate = document.querySelector(`#${type}`);
  const popup = popupTemplate.content.querySelector(`.${type}`).cloneNode(true);

  if (params?.title) {
    popup.querySelector(`#${type}__title`).textContent = params.title;
  }

  if (params?.description) {
    popup.querySelector(`#${type}__button`).textContent = params.description;
  }

  popup.addEventListener('click', onPopupClick);
  document.addEventListener('keydown', onDocumentKeydown, true);

  document.body.append(popup);
};
