import { renderGallery } from './gallery.js';
import { formListener } from './form.js';
import {GET_ALL_PHOTO, sendRequest} from './RequestApi.js';
import {MESSAGE_TYPE_ERROR, showMessage} from './MessageInfo.js';

try {
  const photoResponse = await sendRequest(GET_ALL_PHOTO);
  renderGallery(photoResponse);
  formListener();
} catch (e) {
  showMessage(MESSAGE_TYPE_ERROR, {
    title: e.message,
    description: 'Закрыть окно'
  });
}
