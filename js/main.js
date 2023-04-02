import { renderGallery } from './gallery.js';
import { formListener } from './form.js';
import {BASE_URL, sendRequest} from './RequestApi.js';
import {MESSAGE_TYPE_ERROR, showMessage} from './MessageInfo.js';

try {
  const photoResponse = await sendRequest(BASE_URL);
  renderGallery(photoResponse);
  formListener();
} catch (e) {
  showMessage(MESSAGE_TYPE_ERROR, {
    title: e.message,
    description: 'Закрыть'
  });
}
