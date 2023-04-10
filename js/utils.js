export const getRandomInteger = (minNumber, maxNumber) => {
  const lower = Math.ceil(Math.min(minNumber, maxNumber));
  const upper = Math.floor(Math.max(minNumber, maxNumber));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

export const getArrayRandomElement = (items) => items[getRandomInteger(0, items.length - 1)];

export const createIdGenerator = () => {
  let lastId = 0;

  return function () {
    lastId += 1;
    return lastId;
  };
};

export const isArrayUnique = (tags) => {
  const lowerTags = tags.map((tag) => tag.toLowerCase());
  return lowerTags.length === new Set(lowerTags).size;
};

export const isEscapeKey = (evt) => evt.key === 'Escape';

export function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}
