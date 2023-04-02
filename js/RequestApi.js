export const BASE_URL = 'https://28.javascript.pages.academy/kekstagram/data';
export const BASE_URL_UPLOAD = 'https://28.javascript.pages.academy/kekstagram';
export const REQUEST_METHOD_POST = 'POST';
export const REQUEST_METHOD_GET = 'GET';

export const sendRequest = async (url, options = {}) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`${response.statusText}`);
  }

  return response.json();
};
