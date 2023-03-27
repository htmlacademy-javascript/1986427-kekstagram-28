import { createUserReview } from './data.js';
import { renderGallery } from './gallery.js';
import { formListener } from './form.js';

renderGallery(createUserReview());
formListener();
